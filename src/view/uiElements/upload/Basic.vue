<template>
  <a-upload
    v-model:file-list="fileList"
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    @change="handleChange"
  >
    <sdButton class="btn-outlined" type="light" size="large" :outlined="true">
      <upload-outlined></upload-outlined>
      <span>Click to Upload</span>
    </sdButton>
  </a-upload>
</template>

<script>
import { ref, defineComponent } from 'vue';
import { message } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'BasicUpload',
  components: {
    UploadOutlined,
  },
  setup() {
    const handleChange = (info) => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    };

    const fileList = ref([]);
    return {
      fileList,
      headers: {
        authorization: 'authorization-text',
      },
      handleChange,
    };
  },
});
</script>
