<template>
    <div class="cover-image">
        <img
            style="width: 100%"
            :src="require('../../../../static/img/profile/cover-img.png')"
            alt="banner"
        />
        <a-upload
            name="file"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :headers="headers"
            @change="onChange"
        >
            <a to="#">
                <sdFeatherIcons type="camera" size="16" /> Change Cover
            </a>
        </a-upload>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
const CoverSection = defineComponent({
    name: 'CoverSection',
    components: {},
    setup() {
        const headers = {
            authorization: 'authorization-text',
        };
        function onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                this.$message.success(
                    `${info.file.name} file uploaded successfully`
                );
            } else if (info.file.status === 'error') {
                this.$message.error(`${info.file.name} file upload failed.`);
            }
        }
        return {
            headers,
            onChange,
        };
    },
});

export default CoverSection;
</script>
