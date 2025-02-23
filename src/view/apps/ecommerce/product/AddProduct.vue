<template>
  <sdPageHeader title="Add Product"
    ><template v-slot:buttons>
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
    <a-row :gutter="15">
      <a-col :xs="24">
        <sdCards headless>
          <a-row :gutter="25" justify="center">
            <a-col :xxl="12" :md="16" :sm="24" :xs="24">
              <AddProductForm>
                <a-form
                  :ref="formRef"
                  style="width: 100%"
                  :model="formState"
                  @finish="handleFinish"
                  @finishFailed="handleFinishFailed"
                  :layout="formState.layout"
                >
                  <BasicFormWrapper>
                    <div class="add-product-block">
                      <a-row :gutter="15">
                        <a-col :xs="24">
                          <div class="add-product-content">
                            <sdCards title="About Product">
                              <a-form-item label="Product Name">
                                <a-input v-model:value="formState.name" />
                              </a-form-item>
                              <a-form-item label="Sub Text">
                                <a-input v-model:value="formState.subtext" />
                              </a-form-item>
                              <a-form-item
                                name="category"
                                initialValue=""
                                label="Category"
                              >
                                <a-select
                                  v-model:value="formState.category"
                                  style="width: 100%"
                                >
                                  <a-select-option value=""
                                    >Please Select</a-select-option
                                  >
                                  <a-select-option value="wearingClothes"
                                    >Wearing Clothes</a-select-option
                                  >
                                  <a-select-option value="sunglasses"
                                    >Sunglasses</a-select-option
                                  >
                                  <a-select-option value="t-shirt"
                                    >T-Shirt</a-select-option
                                  >
                                </a-select>
                              </a-form-item>

                              <a-form-item name="price" label="Price">
                                <div class="input-prepend-wrap">
                                  <span class="input-prepend">
                                    <sdFeatherIcons
                                      type="dollar-sign"
                                      size="14"
                                    />
                                  </span>
                                  <a-input-number
                                    v-model:value="formState.price"
                                    style="width: 100%"
                                  />
                                </div>
                              </a-form-item>

                              <a-form-item name="discount" label="Discount">
                                <div class="input-prepend-wrap">
                                  <span class="input-prepend f">
                                    <sdFeatherIcons type="percent" size="14" />
                                  </span>
                                  <a-input-number
                                    v-model:value="formState.discount"
                                    style="width: 100%"
                                  />
                                </div>
                              </a-form-item>

                              <a-form-item name="status" label="Status">
                                <a-radio-group v-model:value="formState.status">
                                  <a-radio value="Published">Published</a-radio>
                                  <a-radio value="Draft">Draft</a-radio>
                                </a-radio-group>
                              </a-form-item>

                              <a-form-item
                                name="description"
                                label="Product Description"
                              >
                                <a-textarea
                                  v-model:value="formState.description"
                                  :rows="5"
                                />
                              </a-form-item>
                              <a-form-item name="mTitle" label="Meta Title">
                                <a-input v-model:value="formState.mTitle" />
                              </a-form-item>
                              <a-form-item name="mKeyword" label="Meta Keyword">
                                <a-input v-model:value="formState.mKeyword" />
                              </a-form-item>
                            </sdCards>
                          </div>
                        </a-col>
                      </a-row>
                    </div>
                    <div class="add-product-block">
                      <a-row :gutter="15">
                        <a-col :xs="24">
                          <div class="add-product-content">
                            <sdCards title="Product Image">
                              <a-upload-dragger v-bind="fileUploadProps">
                                <p class="ant-upload-drag-icon">
                                  <sdFeatherIcons type="upload" size="50" />
                                </p>
                                <sdHeading as="h4" class="ant-upload-text">
                                  Drag and drop an image
                                </sdHeading>
                                <p class="ant-upload-hint">
                                  or <span>Browse</span> to choose a file
                                </p>
                              </a-upload-dragger>
                            </sdCards>
                          </div>
                        </a-col>
                      </a-row>
                    </div>
                    <div class="add-form-action">
                      <a-form-item>
                        <sdButton class="btn-cancel" size="large">
                          Cancel
                        </sdButton>
                        <sdButton
                          size="large"
                          htmlType="submit"
                          type="primary"
                          raised
                        >
                          Save Product
                        </sdButton>
                      </a-form-item>
                    </div>
                  </BasicFormWrapper>
                </a-form>
              </AddProductForm>
            </a-col>
          </a-row>
        </sdCards>
      </a-col>
    </a-row>
  </Main>
</template>
<script lang="jsx">
import { Main, BasicFormWrapper } from "../../../styled";
import { AddProductForm } from "../Style";
import { ref, reactive, defineComponent } from "vue";
import { message } from "ant-design-vue";

const fileList = [
  {
    uid: "1",
    name: "1.png",
    status: "done",
    url: require("@/static/img/products/1.png"),
    thumbUrl: require("@/static/img/products/1.png"),
  },
];

const AddProduct = defineComponent({
  name: "AddProduct",
  components: { Main, BasicFormWrapper, AddProductForm },
  setup() {
    const file = ref(null);
    const list = ref(null);
    const submitValues = ref({});
    const formRef = ref();

    const fileUploadProps = {
      name: "file",
      multiple: true,
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
          file.value = info.file;
          list.value = info.fileList;
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      listType: "picture",
      defaultFileList: fileList,
      showUploadList: {
        showRemoveIcon: true,
        removeIcon: (
          <sdFeatherIcons
            type="trash-2"
            onClick={(e) => console.log(e, "custom removeIcon event")}
          />
        ),
      },
    };

    const formState = reactive({
      name: "",
      subtext: "",
      category: "",
      price: 0,
      discount: 0,
      status: "",
      description: "",
      mTitle: "",
      mKeyword: "",
      layout: "vertical",
    });

    const handleFinish = () => {
      console.log(formState);
    };

    const handleFinishFailed = (errors) => {
      console.log(errors);
    };

    const handleSubmit = (values) => {
      submitValues.value = values;
    };

    const rules = {
      name: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
    };

    const resetForm = () => {
      formRef.value.ruleformState.resetFields();
    };

    return {
      fileList,
      fileUploadProps,
      rules,
      file,
      list,
      resetForm,
      submitValues,
      formState,
      handleFinish,
      handleFinishFailed,
      handleSubmit,
      formRef,
    };
  },
});

export default AddProduct;
</script>
