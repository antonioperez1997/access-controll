<template>
  <div>
    <sdPageHeader title="Gallery">
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
        <a-col :sm="24" :xs="24">
          <GalleryNav>
            <ul>
              <li>
                <a :class="state.activeClass === '' ? 'active' : 'deactivate'" @click="() => handleChange('')" href="#">
                  All
                </a>
              </li>
              <li>
                <a
                  :class="state.activeClass === 'webDesign' ? 'active' : 'deactivate'"
                  @click="() => handleChange('webDesign')"
                  href="#"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  :class="state.activeClass === 'uiDesign' ? 'active' : 'deactivate'"
                  @click="() => handleChange('uiDesign')"
                  href="#"
                >
                  UI Design
                </a>
              </li>
              <li>
                <a
                  :class="state.activeClass === 'wireframe' ? 'active' : 'deactivate'"
                  @click="() => handleChange('wireframe')"
                  href="#"
                >
                  Wireframe
                </a>
              </li>
              <li>
                <a
                  :class="state.activeClass === 'Presentation' ? 'active' : 'deactivate'"
                  @click="() => handleChange('Presentation')"
                  href="#"
                >
                  Presentation
                </a>
              </li>
            </ul>
          </GalleryNav>
        </a-col>
        <a-col v-if="isLoading" :xs="24">
          <div class="spin">
            <a-spin />
          </div>
        </a-col>
        <a-col v-else v-for="(item, index) in gallery" :key="index + 1" :xxl="6" :lg="8" :sm="12" :xs="24">
          <GalleryCards :item="item" :index="index" />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import { GalleryNav } from './style';
import GalleryCards from './overview/GalleryCards';
import { computed, reactive, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Gallery',
  components: {
    Main,
    GalleryNav,
    GalleryCards,
  },
  setup() {
    const state = reactive({
      activeClass: '',
    });

    const store = useStore();
    const gallery = computed(() => store.state.gallery.data);
    const isLoading = computed(() => store.state.gallery.isLoading);

    function handleChange(value) {
      state.activeClass = value;
      store.dispatch('galleryFilter', {
        column: 'category',
        value,
      });
    }

    return {
      handleChange,
      gallery,
      isLoading,
      state,
    };
  },
});
</script>
