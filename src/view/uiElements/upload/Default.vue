<template>
  <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" v-model:file-list="fileList">
    <sdButton class="btn-outlined" type="light" size="large" :outlined="true">
      <upload-outlined></upload-outlined>
      <span>Upload</span>
    </sdButton>
  </a-upload>
</template>

<script>
import { ref, defineComponent } from 'vue';
import { UploadOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'DefaultUpload',
  components: {
    UploadOutlined,
  },
  setup() {
    const fileList = ref([
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500',
        // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500',
        // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ]);

    const handleChange = ({ file, fileList }) => {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    };

    return {
      fileList,
      handleChange,
    };
  },
});
</script>
