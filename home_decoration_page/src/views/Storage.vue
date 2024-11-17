<template>
    <div class="Storage_page">
        
        <Catalog_product :add_product_to_cart="add_product_to_cart" :products="products" :Page_category="Page_category" />

    </div>
  </template>

<script>
  import Catalog_product from "../components/Catalog_product.vue";
  
  export default {
    name: "Storage",
    components: {
      Catalog_product,
    },
    props: {
      add_product_to_cart: Function,
      products: Array,
    },
    data(){
      return{
        Page_category:"Home",
        search_text:"",
        saved_search_text:"",
      }
    }
  };
</script>

<style>

</style>