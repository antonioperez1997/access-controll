<template>
  <sdPageHeader title="Chat"
    ><template v-slot:buttons>
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
    <a-row :gutter="30">
      <a-col :xxl="7" :lg="10" :xs="24">
        <ChatSidebar>
          <sdCards headless>
            <div class="chatbox-search">
              <sdAutoComplete :dataSource="searchData" width="100%" patterns />
            </div>
            <nav>
              <UL>
                <li>
                  <router-link :to="`${match.path}/private/rofiq@gmail.com`"> Private Chat </router-link>
                </li>
                <li>
                  <router-link :to="`${match.path}/group/1`">
                    Group Chat
                    <a-badge class="badge-error" :count="3" />
                  </router-link>
                </li>
                <li>
                  <router-link :to="`${match.path}/all/rofiq@gmail.com`"> All Contacts </router-link>
                </li>
              </UL>
            </nav>
            <Content>
              <perfect-scrollbar
                :options="{
                  wheelSpeed: 1,
                  swipeEasing: true,
                  suppressScrollX: true,
                }"
              >
                <router-view></router-view>
              </perfect-scrollbar>
            </Content>
          </sdCards>
        </ChatSidebar>
      </a-col>
      <a-col :xxl="17" :lg="14" :xs="24">
        <router-view name="child"></router-view>
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import { UL, Content, ChatSidebar } from './style';
import { Main } from '../../styled';
import { computed, ref, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

const ChatApp = defineComponent({
  name: 'ChatApp',
  components: { Main, UL, Content, ChatSidebar, PerfectScrollbar },
  setup() {
    const { state } = useStore();
    const match = computed(() => useRoute().matched[1]);
    const rtl = computed(() => state.themeLayout.rtlData);
    const searchData = computed(() => state.headerSearchData);
    const left = computed(() => (!rtl.value ? 'left' : 'right'));

    const me = ref('woadud@gmail.com');

    return {
      rtl,
      searchData,
      left,
      me,
      match,
    };
  },
});

export default ChatApp;
</script>
<style scoped>
.ps {
  height: 495px;
}
</style>
