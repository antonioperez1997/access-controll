<template>
  <p v-if="isLoading">Loading</p>
  <Content
    v-else
    :email="
      email.filter((value) => {
        return value.type === 'inbox';
      })
    "
    :searchData="searchData"
  />
</template>
<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import Content from './Content.vue';

const Inbox = defineComponent({
  name: 'Inbox',
  components: { Content },
  setup() {
    const { state } = useStore();
    const email = computed(() => state.email.allMessage);
    const searchData = computed(() => state.headerSearchData);
    const isLoading = computed(() => state.email.sLoading);

    return {
      email,
      searchData,
      isLoading,
    };
  },
});

export default Inbox;
</script>
