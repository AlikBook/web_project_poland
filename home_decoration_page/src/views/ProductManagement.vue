<template>
  <div class="product-management">
    <h1>Product Management</h1>

    <!-- Form to Create a New Product (Visible to Admin Only) -->
    <div v-if="isAdmin">
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
    </div>

    <hr />

    <!-- List of Products -->
    <h2>Existing Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.description }}
        <!-- Delete Button (Visible to Admin Only) -->
        <button v-if="isAdmin" @click="deleteProduct(product.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductService from "../services/ProductService";
import AuthService from "../services/AuthService"; // Assuming this handles current user info

export default {
  name: "ProductManagement",
  data() {
    return {
      products: [],
      newProduct: {
        name: "",
        description: "",
      },
      isAdmin: false, // Determines if the current user is an admin
    };
  },
  methods: {
    // Fetch the list of products
    async fetchProducts() {
      try {
        this.products = await ProductService.getAllProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    // Create a new product (Admin Only)
    async createProduct() {
      try {
        await ProductService.createProduct(this.newProduct);
        this.newProduct = { name: "", description: "" }; // Reset form
        this.fetchProducts(); // Refresh the product list
      } catch (error) {
        console.error("Error creating product:", error);
      }
    },
    // Delete a product (Admin Only)
    async deleteProduct(id) {
      try {
        await ProductService.deleteProduct(id);
        this.fetchProducts(); // Refresh the product list
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },
  },
  async mounted() {
    this.fetchProducts(); // Fetch products on component mount

    // Check if the current user is an admin
    const user = await AuthService.getCurrentUser(); // Get the logged-in user's info
    this.isAdmin = user && user.role === "admin"; // Set admin status
  },
};
</script>

<style scoped>
/* Add any required styling */
</style>
