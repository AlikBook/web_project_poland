<template>
    <div class="product_details_page">
        <div class="product_container">
            <img :src="product.img" alt="Product Image" />
            <div class="product_details">
                <h1>{{ product.product_name }}</h1>
                <hr>
                <p class="category">Category: {{ product.category }}</p>
                <h2>Price: {{ product.price }} $</h2>
                <p class="description">Description:</p>
                <p>{{ product.description }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a corrupti tenetur nihil fugit pariatur voluptates nemo molestias similique dolor eum quidem, quos, beatae maxime illo voluptas eos quae asperiores.</p>
                <button @click="addToCart">Add to Cart</button>
            </div>
        </div>
        
    </div>
</template>
  
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
    width: 400px;
    height: 400px;
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
    width: 400px;
}
</style>

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
      const productId = parseInt(this.id, 10);
      this.product = this.$root.products.find((item) => item.id === productId);
    },
    methods: {
      addToCart() {
        this.$root.add_product_to_cart(this.product);
      },
    },
  };
  </script>
  

  