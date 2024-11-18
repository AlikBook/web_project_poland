<template>
  <div class="Storage_page">
    <SearchableCatalog
      :add_product_to_cart="add_product_to_cart"
      :products="products"
      :Page_category="Page_category"
    />
  </div>
</template>

<script>
import SearchableCatalog from "../components/SearchableCatalog.vue";

export default {
  name: "Storage",
  components: {
    SearchableCatalog,
  },
  props: {
    add_product_to_cart: Function,
    products: Array,
  },
  data() {
    return {
      Page_category: "Storage", // Set the category specific to this page
    };
  },
};
</script>



<style>

</style>