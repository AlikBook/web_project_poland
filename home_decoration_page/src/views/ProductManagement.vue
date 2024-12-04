<template>
    <div class="product-management">
      <h1>Product Management</h1>
  
      <!-- Form to Create a New Product -->
      <form @submit.prevent="createProduct">
        <input
          type="text"
          v-model="newProduct.name"
          placeholder="Product Name"
          required
        />
        <textarea
          v-model="newProduct.description"
          placeholder="Product Description"
          required
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
  
      <hr />
  
      <!-- List of Products -->
      <h2>Existing Products</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.description }}
          <button @click="deleteProduct(product.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import ProductService from "../services/ProductService";
  
  export default {
    name: "ProductManagement",
    data() {
      return {
        products: [],
        newProduct: {
          name: "",
          description: "",
        },
      };
    },
    methods: {
      async fetchProducts() {
        try {
          this.products = await ProductService.getAllProducts();
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
      async createProduct() {
        try {
          await ProductService.createProduct(this.newProduct);
          this.newProduct = { name: "", description: "" };
          this.fetchProducts(); // Refresh product list
        } catch (error) {
          console.error("Error creating product:", error);
        }
      },
      async deleteProduct(id) {
        try {
          await ProductService.deleteProduct(id);
          this.fetchProducts(); // Refresh product list
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      },
    },
    mounted() {
      this.fetchProducts(); // Fetch products on component mount
    },
  };
  </script>
  
  <style scoped>
  /* Add any required styling */
  </style>
  