<template>
  <a-tag v-if="tagType == 'basic'"><slot></slot></a-tag>
  <a-tag closable v-if="tagType == 'closable'"><slot></slot></a-tag>
  <div v-if="tagType == 'hottags'">
    <span :style="{ marginRight: '8px' }">Categories:</span>
    <template v-for="tag in data" :key="tag">
      <a-checkable-tag :checked="selectedTags.indexOf(tag) > -1" @change="(checked) => handleChange(tag, checked)">
        {{ tag }}
      </a-checkable-tag>
    </template>
  </div>
  <a-tag v-if="tagType == 'colorful'" :color="color">{{ color }}</a-tag>
  <div class="sDash-dynamic-tag" v-if="tagType == 'dynamicTag'">
    <template v-for="(tag, index) in tags" :key="index">
      <a-tooltip v-if="tag.length > 20" :title="tag">
        <a-tag :key="tag" :closable="index !== 0" @close="handleClose(tag)">
          {{ `${tag.slice(0, 20)}...` }}
        </a-tag>
      </a-tooltip>
      <a-tag v-else :closable="index !== 0" @close="handleClose(tag)">
        {{ tag }}
      </a-tag>
    </template>
    <a-input
      v-if="inputVisible"
      ref="inputRef"
      type="text"
      size="small"
      :style="{ width: '78px' }"
      v-model:value="inputValue"
      @blur="handleInputConfirm"
      @keyup.enter="handleInputConfirm"
    />
    <a-tag v-else @click="showInput" class="sDash-new-tag-input">
      <plus-outlined />
      New Tag
    </a-tag>
  </div>
</template>

<script>
import { ref, reactive, toRefs, nextTick, defineComponent } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import VueTypes from 'vue-types';
export default defineComponent({
  name: 'Tag',
  components: { PlusOutlined },
  props: {
    tagType: VueTypes.oneOf(['basic', 'hottags', 'colorful', 'dynamicTag', 'closable']).def('basic'),
    data: VueTypes.arrayOf(VueTypes.string),
    color: VueTypes.string,
    checked: VueTypes.bool,
  },
  setup(props) {
    const state = reactive({
      selectedTags: [],
      tags: props.data,
      inputVisible: false,
      inputValue: '',
    });

    const handleChange = (tag, checked) => {
      const { selectedTags } = state;
      const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
      state.selectedTags = nextSelectedTags;
    };

    const inputRef = ref();

    const handleClose = (removedTag) => {
      const tags = state.tags.filter((tag) => tag !== removedTag);
      state.tags = tags;
    };

    const showInput = () => {
      state.inputVisible = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    };

    const handleInputConfirm = () => {
      const inputValue = state.inputValue;
      let tags = state.tags;

      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      Object.assign(state, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
    };

    return { ...toRefs(state), handleChange, handleClose, showInput, handleInputConfirm, inputRef };
  },
});
</script>
