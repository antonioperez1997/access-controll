<template>
  <Sidebar>
    <sdCards>
      <template #title>
        <span>
          <sdFeatherIcons type="sliders" :size="14" />
          Filters
        </span>
      </template>
      <SidebarSingle>
        <sdHeading as="h5">Price Range</sdHeading>
        <Slider @onChange="onChange" range :step="10" :min="0" :max="max" :defaultValues="[min, max]" />
        <p class="price-range-text">${{ min }} - ${{ max }}</p>
      </SidebarSingle>
      <SidebarSingle>
        <sdHeading as="h5">Category</sdHeading>

        <nav>
          <ul class="atbd-category-list">
            <li>
              <a @click="() => onChangeCategory('all')" to="#">
                <span>All</span>
                <span class="category-count">25</span>
              </a>
            </li>
            <li>
              <a @click="() => onChangeCategory('accessories')" to="#">
                <span>Accessories</span>
                <span class="category-count">25</span>
              </a>
            </li>
            <li>
              <a @click="() => onChangeCategory('appliance')" to="#">
                <span>Appliances</span>
                <span class="category-count">25</span>
              </a>
            </li>
            <li>
              <a @click="() => onChangeCategory('bags')" to="#">
                <span>Bags</span>
                <span class="category-count">25</span>
              </a>
            </li>
            <li>
              <a @click="() => onChangeCategory('electronic')" to="#">
                <span>Electronic</span>
                <span class="category-count">25</span>
              </a>
            </li>
            <li>
              <a @click="() => onChangeCategory('entertainment')" to="#">
                <span>Entertainment</span>
                <span class="category-count">25</span>
              </a>
            </li>
            <li>
              <a @click="() => onChangeCategory('induction')" to="#">
                <span>Induction</span>
                <span class="category-count">25</span>
              </a>
            </li>
            <li>
              <a @click="() => onChangeCategory('mobile')" to="#">
                <span>Mobile Phone</span>
                <span class="category-count">25</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="sidebar-single__action">
          <a class="btn-seeMore" to="#"> See more </a>
        </div>
      </SidebarSingle>

      <SidebarSingle>
        <sdHeading as="h5">Brands</sdHeading>
        <a-checkbox-group
          @change="onChangeBrand"
          v-model:value="checkboxValue"
          name="checkboxgroup"
          :options="optionsBrand"
        />

        <div class="sidebar-single__action">
          <a class="btn-seeMore" to="#"> See more </a>
        </div>
      </SidebarSingle>

      <SidebarSingle>
        <sdHeading as="h5">Ratings</sdHeading>
        <a-checkbox-group
          @change="onChangeRating"
          v-model:value="checkboxValue"
          name="optionsRate"
          :options="options"
        />
      </SidebarSingle>
    </sdCards>
  </Sidebar>
</template>
<script lang="jsx">
import Slider from '../../../../../components/slider/Slider';
import { Sidebar, SidebarSingle } from '../../Style';
import { ref, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { Rate } from 'ant-design-vue';

const options = [
  {
    label: (
      <>
        <span class="rating-left">
          <Rate allowHalf defaultValue={5} disabled />
        </span>
        <span class="rating-right">25</span>
      </>
    ),
    value: 5,
  },
  {
    label: (
      <>
        <span class="rating-left">
          <Rate allowHalf defaultValue={4} disabled />
          and up
        </span>
        <span class="rating-right">25</span>
      </>
    ),
    value: 4,
  },
  {
    label: (
      <>
        <span class="rating-left">
          <Rate allowHalf defaultValue={3} disabled />
          and up
        </span>
        <span class="rating-right">25</span>
      </>
    ),
    value: 3,
  },
  {
    label: (
      <>
        <span class="rating-left">
          <Rate allowHalf defaultValue={2} disabled />
          and up
        </span>
        <span class="rating-right">25</span>
      </>
    ),
    value: 2,
  },
  {
    label: (
      <>
        <span class="rating-left">
          <Rate allowHalf defaultValue={1} disabled />
          and up
        </span>
        <span class="rating-right">25</span>
      </>
    ),
    value: 1,
  },
];

const optionsBrand = [
  {
    label: (
      <>
        Cup <span class="brand-count">25</span>
      </>
    ),
    value: 'cup',
  },
  {
    label: (
      <>
        Plate <span class="brand-count">25</span>
      </>
    ),
    value: 'plate',
  },
  {
    label: (
      <>
        Chair <span class="brand-count">25</span>
      </>
    ),
    value: 'chair',
  },
  {
    label: (
      <>
        Juice <span class="brand-count">25</span>
      </>
    ),
    value: 'juice',
  },
];

const Filters = defineComponent({
  name: 'Filters',
  components: { Slider, Sidebar, SidebarSingle },
  setup() {
    const { dispatch } = useStore();
    const min = ref(0);
    const max = ref(1500);
    const checkboxValue = ref([]);
    const onChange = (value) => {
      min.value = value[0];
      max.value = value[1];
      dispatch('filterByPriceRange', value);
    };

    const onChangeRating = (checkValue) => {
      dispatch('filterByRating', [checkValue]);
    };
    const onChangeBrand = (checkValue) => {
      dispatch('filterByBrand', [checkValue]);
    };

    const onChangeCategory = (value) => {
      dispatch('filterByCategory', value);
    };

    return {
      onChange,
      onChangeCategory,
      onChangeBrand,
      onChangeRating,
      checkboxValue,
      min,
      max,
      optionsBrand,
      options,
    };
  },
});

export default Filters;
</script>
