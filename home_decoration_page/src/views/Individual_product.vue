<template>
  <div class="product_details_page">
    <div v-if="!product">Loading product details...</div>
    <div v-else class="product_container">
      <img :src="product.img" alt="Product Image" />
      <div class="product_details">
        <h1>{{ product.product_name }}</h1>
        <hr />
        <p class="category">Category: {{ product.category }}</p>
        <h2>Price: {{ product.price }} $</h2>
        <p class="description">Description:</p>
        <p>{{ product.description }}</p>
        <button @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "IndividualProduct",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  created() {
    this.fetchProductOnLoad();
  },
  methods: {
    async fetchProductOnLoad() {
      const productId = parseInt(this.id, 10);
      if (this.$root.products.length) {
        this.fetchProduct(productId);
      }
    },
    async fetchProduct(productId) {
      const product = this.$root.products?.find((item) => item.id === productId);
      if (product) {
        this.product = product;
      } else {
        console.error("Product not found");
      }
    },
    
    addToCart() {
      this.$root.add_product_to_cart(this.product);
    },
    
  },
  watch: {
    '$root.products': {
      immediate: true,
      handler(newProducts) {
        if (newProducts.length && !this.product) {
          const productId = parseInt(this.id, 10);
          this.fetchProduct(productId);
        }
      },
    },
    id(newId) {
      const productId = parseInt(newId, 10);
      this.fetchProduct(productId);
    },
  },
};
</script>

  

  <style scoped>
.product_details_page{
    width: 100%;
    background-color: #EAEDED;
    padding-top: 30px;
    padding-bottom: 30px;
}

.product_container{
    margin: 0 auto;
    background: white;
    display: flex;
    width: 70%;
    padding: 20px;
    border-radius: 20px;
    gap:20px;
}

.product_container img{
    max-width: 400px;
    height: 100%;
    border: 1px solid gray;
}


.product_details {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex-grow: 1; 
}

.product_details button {
    margin-top: auto; 
    background-color: #243E36;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    height: 40px;
    cursor: pointer;
}
.category{
    color: grey;
    font-weight: bold;
}

.description{
    text-decoration: underline;
}

.product_details h1, .product_details h2{
    color: #243E36;
}



hr{
    width: 100%;
}

@media (max-width: 800px){
  .product_container{
    flex-direction: column;
    align-items: center;
  }

}
</style>