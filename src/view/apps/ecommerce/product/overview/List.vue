<template>
  <a-row :gutter="15">
    <a-col v-if="isLoader" :md="24">
      <div class="spin">
        <a-spin />
      </div>
    </a-col>
    <template v-else-if="products.length">
      <a-col v-for="product in products" :xs="24" :key="product.id">
        <ProductCardsList :product="product" />
      </a-col>
    </template>
    <a-col v-else :xs="24">
      <sdHeading as="h1">Data Not Found</sdHeading>
    </a-col>
    <a-col :xs="24" class="pb-30">
      <PaginationWrapper v-if="products.length">
        <a-pagination
          :style="{ marginTop: 10 }"
          :change="onHandleChange"
          showSizeChanger
          @showSizeChange="onShowSizeChange"
          v-model:current="current"
          v-model:pageSize="pageSize"
          :defaultCurrent="1"
          :total="40"
        />
      </PaginationWrapper>
    </a-col>
  </a-row>
</template>
<script>
import ProductCardsList from './ProductCardList.vue';
import { PaginationWrapper } from '../../Style';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const List = {
  name: 'List',
  components: { ProductCardsList, PaginationWrapper },
  setup() {
    const { state } = useStore();
    const products = computed(() => state.ecommerce.products);
    const isLoader = computed(() => state.ecommerce.isProductLoading);

    const current = ref(1);
    const pageSize = ref(10);

    const onShowSizeChange = (current, pageSize) => {
      current.value = current;
      pageSize.value = pageSize;
    };

    const onHandleChange = (current, pageSize) => {
      current.value = current;
      pageSize.value = pageSize;
    };

    return {
      onHandleChange,
      onShowSizeChange,
      pageSize,
      current,
      products,
      isLoader,
    };
  },
};

export default List;
</script>
