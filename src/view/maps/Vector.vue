<template>
  <div>
    <sdPageHeader title="Google Map">
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
        <a-col :md="24" :xs="24">
          <sdCards title="World Map">
            <WorldMap />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import WorldMap from '@/components/utilities/VectorMap.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vector',
  components: {
    Main,
    WorldMap,
  },
  data: () => {
    return {
      options: {
        data: {
          gdp: {
            name: 'GDP per capita',
            format: '{0} USD',
            thousandSeparator: ',',
            thresholdMax: 50000,
            thresholdMin: 1000,
          },
          change: {
            name: 'Change to year before',
            format: '{0} %',
          },
        },
        applyData: 'gdp',
        values: {
          AF: { gdp: 587, change: 4.73 },
          AL: { gdp: 4583, change: 11.09 },
          DZ: { gdp: 4293, change: 10.02 },
        },
      },
    };
  },
});
</script>

<style scoped>
.map-wrapper {
  height: 600px;
}
</style>
