<template>
  <div>
    <sdPageHeader title="Area Charts">
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
          <sdCards title="Basic Area Chart">
            <basic />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Spline Area Chart">
            <spline />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../../styled';
import Basic from '../../../components/apexcharts/area-charts/Basic';
import Spline from '../../../components/apexcharts/area-charts/Spline';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AreaCharts',
  components: {
    Main,
    Basic,
    Spline,
  },
});
</script>
