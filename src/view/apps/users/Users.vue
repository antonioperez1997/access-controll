<template>
  <CardToolbox>
    <UserCarrdTop>
      <sdPageHeader title="Users">
        <template #subTitle>
          <span class="title-counter">274 Users </span>
          <sdAutoComplete :dataSource="searchData" placeholder="Search by Name" width="100%" patterns />
        </template>
        <template #buttons>
          <sdButton class="btn-add_new" size="default" type="primary" key="1">
            <router-link to="/app/pages/add-user/info">
              <sdFeatherIcons type="plus" size="14" /> Add New User
            </router-link>
          </sdButton>
          <router-link class="action-btn" key="2" :to="`${path}/user-grid`">
            <sdFeatherIcons type="grid" size="14" />
          </router-link>
          <router-link class="action-btn" key="3" :to="`${path}/user-list`">
            <sdFeatherIcons type="list" size="14" />
          </router-link>
          <router-link class="action-btn" key="4" :to="`${path}/grid-style`">
            <sdFeatherIcons type="maximize" size="14" />
          </router-link>
          <router-link class="action-btn" key="5" :to="`${path}/grid-group`">
            <sdFeatherIcons type="users" size="14" />
          </router-link>
        </template>
      </sdPageHeader>
    </UserCarrdTop>
  </CardToolbox>
  <Main>
    <UsercardWrapper>
      <a-row :gutter="25">
        <router-view name="descendant"></router-view>
        <a-col :xs="24">
          <div class="user-card-pagination">
            <a-pagination
              @change="onChange"
              showSizeChanger
              @showSizeChange="onShowSizeChange"
              :defaultCurrent="6"
              :total="500"
            />
          </div>
        </a-col>
      </a-row>
    </UsercardWrapper>
  </Main>
</template>
<script>
import { UsercardWrapper, UserCarrdTop } from './style';
import { Main, CardToolbox } from '../../styled';
import { useStore } from 'vuex';
import { computed, ref, defineComponent } from 'vue';
import userGroup from '@/demoData/usersGroupData.json';
import { useRoute } from 'vue-router';

const Users = defineComponent({
  name: 'Users',
  components: { UsercardWrapper, UserCarrdTop, Main, CardToolbox },
  setup() {
    const { state } = useStore();
    const searchData = computed(() => state.headerSearchData);
    const { path } = useRoute().matched[2];

    const current = ref(0);
    const pageSize = ref(0);
    const page = ref(0);

    const onShowSizeChange = (c, p) => {
      current.value = c;
      pageSize.value = p;
    };

    const onChange = (p) => {
      page.value = p;
    };

    return {
      searchData,
      userGroup,
      path,
      current,
      pageSize,
      page,
      onShowSizeChange,
      onChange,
    };
  },
});

export default Users;
</script>
