<template>
  <sdPageHeader title="My Profile">
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
      <a-col :xxl="6" :lg="8" :md="10" :xs="24">
        <Suspense>
          <template #default>
            <UserCards :user="{ name: 'Duran Clyton', designation: 'UI/UX Designer', img: 'static/img/users/1.png' }" />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton avatar active :paragraph="{ rows: 3 }" />
            </sdCards>
          </template>
        </Suspense>
        <Suspense>
          <template #default>
            <UserBio />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton avatar active :paragraph="{ rows: 3 }" />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
      <a-col :xxl="18" :lg="16" :md="14" :xs="24">
        <SettingWrapper>
          <Suspense>
            <template #default>
              <div class="coverWrapper">
                <CoverSection />
                <nav class="profileTab-menu">
                  <ul>
                    <li>
                      <router-link :to="`${path}/overview`">Overview</router-link>
                    </li>
                    <li>
                      <router-link :to="`${path}/timeline`">Timeline</router-link>
                    </li>
                    <li>
                      <router-link :to="`${path}/activity`">Activity</router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
          <router-view name="child"></router-view>
        </SettingWrapper>
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { Main } from '../../styled';
import { SettingWrapper } from './overview/style';

const UserCards = defineAsyncComponent(() => import('../../pages/overview/UserCard'));
const CoverSection = defineAsyncComponent(() => import('./overview/CoverSection'));
const UserBio = defineAsyncComponent(() => import('./overview/UserBio'));

const MyProfile = {
  name: 'MyProfile',
  components: { Main, UserCards, UserBio, CoverSection, SettingWrapper },
  setup() {
    const { matched } = useRoute();
    const { path } = matched[1];
    return {
      path,
    };
  },
};

export default MyProfile;
</script>
