<template>
  <div class="Storage_page">
    <Search_bar @search="filterProducts" />
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
  },
  data() {
    return {
      Page_category: "Storage",
      text_to_search: "", 
      filteredProducts: this.products, 
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
  methods: {
    filterProducts(searchText) {
      this.text_to_search = searchText;
      const search = searchText.toLowerCase();

      this.filteredProducts = this.products.filter(item => {
        return (
          !search || 
          item.product_name.toLowerCase().includes(search) || 
          item.description.toLowerCase().includes(search)
        );
      });
    },
  },
};
</script>


<style>

</style>