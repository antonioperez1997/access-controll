<template>
  <div>
    <sdPageHeader title="Upload">
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
      <a-row :gutter="15">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic"> <basic-upload /></sdCards>
          <sdCards title="Avatar"> <avatar-upload /></sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Complete Control"><complete-control-upload /></sdCards>
          <sdCards title="Upload Default"> <default-upload /></sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import BasicUpload from './upload/Basic';
import AvatarUpload from './upload/Avatar';
import CompleteControlUpload from './upload/CompleteControl';
import DefaultUpload from './upload/Default';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Upload',
  components: {
    Main,
    BasicUpload,
    AvatarUpload,
    CompleteControlUpload,
    DefaultUpload,
  },
});
</script>
