<template>
  <div>
    <sdPageHeader title="Checkbox">
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
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <a-checkbox @change="onChange" />
          </sdCards>
          <sdCards title="Controlled Checkbox">
            <p :style="{ marginBottom: '20px' }">
              <a-checkbox v-model:checked="checked" :disabled="disabled">
                {{ label }}
              </a-checkbox>
            </p>
            <p>
              <sdButton type="primary" size="small" @click="toggleChecked">
                {{ !checked ? 'Check' : 'Uncheck' }}
              </sdButton>
              <sdButton
                :style="{ [rtl ? 'marginRight' : 'marginLeft']: '10px' }"
                type="primary"
                size="small"
                @click="toggleDisable"
              >
                {{ !disabled ? 'Disable' : 'Enable' }}
              </sdButton>
            </p>
          </sdCards>
          <sdCards title="Check all">
            <div>
              <div :style="{ borderBottom: '1px solid #E9E9E9' }">
                <a-checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">
                  Check all
                </a-checkbox>
              </div>
              <br />
              <a-checkbox-group v-model:value="checkedList" :options="plainOptions" />
            </div>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Disabled">
            <a-checkbox @change="onChange" disabled />
          </sdCards>

          <sdCards title="Checkbox Group">
            <CheckboxGroupStyle>
              <a-checkbox-group v-model:value="value1" name="checkboxgroup" :options="plainOptions" />

              <a-checkbox-group v-model:value="value2" :options="plainOptions" />

              <a-checkbox-group v-model:value="value3" :options="options" :value="['Pear']" />

              <a-checkbox-group v-model:value="value4" :options="optionsWithDisabled" disabled>
                <template #label="{ value }">
                  <span style="color: red">{{ value }}</span>
                </template>
              </a-checkbox-group>
            </CheckboxGroupStyle>
          </sdCards>
          <sdCards title="Use With Grid">
            <a-checkbox-group v-model:value="value">
              <a-row>
                <a-col :span="8">
                  <a-checkbox value="A">A</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value="B">B</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value="C">C</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value="D">D</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value="E">E</a-checkbox>
                </a-col>
              </a-row>
            </a-checkbox-group>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { reactive, toRefs, watch, ref, computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { Main } from '../styled';
import { CheckboxGroupStyle } from './ui-elements-styled';

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

export default defineComponent({
  name: 'Checkbox',
  components: {
    Main,
    CheckboxGroupStyle,
  },

  setup() {
    const store = useStore();
    const rtl = computed(() => store.state.themeLayout.rtlData);
    const state = reactive({
      indeterminate: true,
      checkedList: ['Apple', 'Orange'],
      checkAll: false,
      value1: [],
      value2: ['Apple'],
      value3: ['Pear'],
      value4: ['Apple'],
    });
    const disabled = ref(false);
    const checked = ref(false);
    const onCheckAllChange = (e) => {
      Object.assign(state, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
      });
    };

    watch(
      () => state.checkedList,
      (val) => {
        state.indeterminate = !!val.length && val.length < plainOptions.length;
        state.checkAll = val.length === plainOptions.length;
      },
    );

    function onChange() {
      // console.log(`checked = ${e.target.checked}`);
    }

    const toggleChecked = () => {
      checked.value = !checked.value;
    };

    const toggleDisable = () => {
      disabled.value = !disabled.value;
    };

    const label = computed(() => {
      return `${checked.value ? 'Checked' : 'Unchecked'}-${disabled.value ? 'Disabled' : 'Enabled'}`;
    });

    return {
      ...toRefs(state),
      label,
      rtl,
      toggleDisable,
      plainOptions,
      onCheckAllChange,
      onChange,
      options,
      optionsWithDisabled,
      toggleChecked,
      checked,
      disabled,
      value: ref([]),
    };
  },
});
</script>
