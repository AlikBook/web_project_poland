<template>
  <div class="Storage_page">
    <Search_bar @search="filterProducts" @reset_list="filteredProducts=products"/>
    <Catalog_product 
      :add_product_to_cart="add_product_to_cart" 
      :products="filteredProducts" 
      :Page_category="Page_category"
    />
  </div>
</template>

<script>
import Catalog_product from "../components/Catalog_product.vue";
import Search_bar from "../components/Search_bar.vue";

export default {
  name: "Storage",
  components: {
    Catalog_product,
    Search_bar,
  },
  props: {
    add_product_to_cart: Function,
    products: Array,
    filteredProducts: Array,
    filterProducts:Function,
    text_to_search: String, 

  },
  data() {
    return {
      Page_category: "Storage",
    };
  },
  watch: {
    products: {
      handler() {
        this.filterProducts(this.text_to_search);
      },
      immediate: true,
    },
  },
};
</script>


<style>

</style>