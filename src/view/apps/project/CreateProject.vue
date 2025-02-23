<template>
  <sdPageHeader title="Projects" subTitle="12 Running Projects">
    <template v-slot:buttons>
      <sdButton @click="showModal" key="1" type="primary">
        <sdFeatherIcons type="plus" size="16" /> Create Projects
      </sdButton>
    </template>
  </sdPageHeader>

  <Main>
    <a-row :gutter="25">
      <a-col :xs="24">
        <ProjectSorting>
          <div class="project-sort-bar">
            <div class="project-sort-nav">
              <nav>
                <ul>
                  <li :class="categoryActive === 'all' ? 'active' : 'deactivate'">
                    <a @click="() => onChangeCategory('all')" to="#"> All </a>
                  </li>
                  <li :class="categoryActive === 'progress' ? 'active' : 'deactivate'">
                    <a @click="() => onChangeCategory('progress')" to="#"> In Progress </a>
                  </li>
                  <li :class="categoryActive === 'complete' ? 'active' : 'deactivate'">
                    <a @click="() => onChangeCategory('complete')" to="#"> Complete </a>
                  </li>
                  <li :class="categoryActive === 'late' ? 'active' : 'deactivate'">
                    <a @click="() => onChangeCategory('late')" to="#"> Late </a>
                  </li>
                  <li :class="categoryActive === 'early' ? 'active' : 'deactivate'">
                    <a @click="() => onChangeCategory('early')" to="#"> Early </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="project-sort-search">
              <sdAutoComplete :dataSource="searchData" placeholder="Search projects" patterns />
            </div>
            <div class="project-sort-group">
              <div class="sort-group">
                <span>Sort By:</span>
                <a-select @change="onSorting" defaultValue="category">
                  <a-select-option value="category">Project Category</a-select-option>
                  <a-select-option value="rate">Top Rated</a-select-option>
                  <a-select-option value="popular">Popular</a-select-option>
                  <a-select-option value="time">Newest</a-select-option>
                  <a-select-option value="price">Price</a-select-option>
                </a-select>
                <div class="layout-style">
                  <router-link :to="`${path}/grid`">
                    <sdFeatherIcons type="grid" size="16" />
                  </router-link>
                  <router-link :to="`${path}/list`">
                    <sdFeatherIcons type="list" size="16" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </ProjectSorting>
        <div>
          <router-view name="child"></router-view>
        </div>
      </a-col>
    </a-row>
    <sdCreateProject :onCancel="onCancel" :visible="visible" />
  </Main>
</template>
<script>
import { ProjectHeader, ProjectSorting } from './style';
import { Main } from '../../styled';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const Project = {
  name: 'Project',
  components: { ProjectHeader, ProjectSorting, Main },
  setup() {
    const { state, dispatch } = useStore();
    const searchData = computed(() => state.headerSearchData);
    const { path } = useRoute().matched[1];
    const visible = ref(true);
    const categoryActive = ref('all');

    const onSorting = (selectedItems) => {
      dispatch('sortingProjectByCategory', selectedItems);
    };

    const onChangeCategory = (value) => {
      categoryActive.value = value;
      dispatch('filterProjectByStatus', value);
    };

    const showModal = () => {
      visible.value = true;
    };

    const onCancel = () => {
      visible.value = false;
    };
    return {
      onCancel,
      showModal,
      onChangeCategory,
      onSorting,
      searchData,
      categoryActive,
      path,
      visible,
    };
  },
};

export default Project;
</script>
