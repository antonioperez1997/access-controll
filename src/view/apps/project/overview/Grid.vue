<template>
  <a-row :gutter="25" v-if="projects.length">
    <a-col v-for="value in projects" :key="value.id" :xl="8" :md="12" :xs="24">
      <Suspense>
        <template #default>
          <GridCard :value="value" />
        </template>
        <template #fallback>
          <sdCards headless>
            <a-skeleton active />
          </sdCards>
        </template>
      </Suspense>
    </a-col>
    <a-col :xs="24" class="pb-30">
      <ProjectPagination>
        <a-pagination
          @change="onHandleChange"
          showSizeChanger
          @showSizeChange="onShowSizeChange"
          :pageSize="10"
          :defaultCurrent="1"
          :total="40"
        />
      </ProjectPagination>
    </a-col>
  </a-row>
  <a-row :gutter="25" v-else>
    <a-col :md="24">
      <sdCards headless>
        <sdHeading>Data Not Found!</sdHeading>
      </sdCards>
    </a-col>
  </a-row>
</template>

<script>
import { computed, defineAsyncComponent, ref, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { ProjectPagination } from '../style';
const GridCard = defineAsyncComponent(() => import('./GridCard'));

const Grid = defineComponent({
  name: 'Grid',
  components: { ProjectPagination, GridCard },
  setup() {
    const { state } = useStore();
    const projects = computed(() => state.project.data);
    const current = ref(0);
    const pageSize = ref(0);

    const onShowSizeChange = (c, p) => {
      current.value = c;
      pageSize.value = p;
    };

    const onHandleChange = (c, p) => {
      current.value = c;
      pageSize.value = p;
    };

    return {
      onHandleChange,
      onShowSizeChange,
      projects,
      current,
      pageSize,
    };
  },
});

export default Grid;
</script>
