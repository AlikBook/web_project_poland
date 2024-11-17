<template>
    <div class="Storage_page">
        <div>
            <input type="text" name="" id="" placeholder="What are you looking for ?">
            <button><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
        </div>

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