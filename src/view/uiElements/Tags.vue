<template>
  <div>
    <sdPageHeader title="Tags">
      <template v-slot:buttons>
        <div class="page-header-actions">
          <sdCalendarButton />
          <sdExportButton />
          <sdShareButton />
          <sdButton size="small" type="primary">
            <sdFeatherIcons type="plus" size="14" />
            Add New
          </sdButton>
        </div>
      </template>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic">
            <div class="taglist-wrap">
              <Tag>Tag 1</Tag>
              <Tag><a href="https://github.com/vueComponent/ant-design">Link</a></Tag>
              <Tag tagType="closable">Tag 2</Tag>
              <a-tag closable @close.prevent>Prevent Default</a-tag>
            </div>
          </sdCards>
          <sdCards title="Hot Tag">
            <Tag tagType="hottags" :data="['Movies', 'Books', 'Music', 'Sports']" />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Colorful Tag">
            <h4 style="margin-bottom: 16px">Presets:</h4>
            <div class="taglist-wrap">
              <Tag v-for="color in colors" :key="color" tagType="colorful" :color="color" />
            </div>
            <h4 :style="{ margin: '16px 0' }">Custom:</h4>
            <div class="taglist-wrap">
              <Tag v-for="color in customColors" :key="color" tagType="colorful" :color="color" />
            </div>
          </sdCards>
          <sdCards title="Animated Tag">
            <div class="taglist-wrap"><Tag tagType="dynamicTag" :data="['Movies', 'Books', 'Music', 'Sports']" /></div
          ></sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import Tag from '../../components/tags/Tag';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Tags',
  components: {
    Main,
    Tag,
  },
  setup() {
    const colors = [
      'magenta',
      'red',
      'volcano',
      'orange',
      'gold',
      'lime',
      'green',
      'cyan',
      'blue',
      'geekblue',
      'purple',
    ];
    const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#3b5999', '#5c0959'];
    return {
      colors,
      customColors,
    };
  },
});
</script>
