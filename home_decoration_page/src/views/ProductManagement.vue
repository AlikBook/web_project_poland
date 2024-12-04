<template>
  <div class="product-management">
    <h1>Product Management</h1>

    <!-- Form to Create a New Product (Visible to Admin Only) -->
    <div >
      <form @submit.prevent="createProduct">
        <input
          type="text"
          v-model="newProduct.product_name"
          placeholder="Product product_name"
          required
        />
        <textarea
          v-model="newProduct.description"
          placeholder="Product Description"
          required
        ></textarea>
        <input
          type="text"
          v-model="newProduct.img"
          placeholder="Product Image URL"
        />
        <input
          type="number"
          v-model="newProduct.quantity_available"
          placeholder="Quantity Available"
          min="0"
        />
        <input
          type="number"
          v-model="newProduct.price"
          placeholder="Price"
          step="0.01"
          min="0"
        />
        <input
          type="text"
          v-model="newProduct.category"
          placeholder="Category"
        />
        <button type="submit">Add Product</button>
      </form>

      <!-- Delete All Products Button -->
      <button @click="deleteAllProducts" class="delete-all-button">
        Delete All Products
      </button>
    </div>

    <hr />

    <!-- List of Products -->
    <h2>Existing Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <strong>ID:</strong> {{ product.id }} <br />
        <strong>product_name:</strong> {{ product.product_name }} <br />
        <strong>Description:</strong> {{ product.description }} <br />
        <strong>Price:</strong> ${{ product.price }} <br />
        <strong>Category:</strong> {{ product.category }} <br />
        <strong>Available:</strong> {{ product.quantity_available }} <br />
        <img :src="product.img" alt="Product Image" style="width: 100px;" /> <br />

        <!-- Admin-Only Actions -->
        <div v-if="isAdmin">
          <button @click="deleteProduct(product.id)">Delete</button>
          <button @click="editProduct(product)">Edit</button>
        </div>
      </li>
    </ul>

    <!-- Product Editing Form -->
    <div v-if="isAdmin && editingProduct">
      <h3>Edit Product</h3>
      <form @submit.prevent="updateProduct">
        <input
          type="text"
          v-model="editingProduct.product_name"
          placeholder="Product Name"
          required
        />
        <textarea
          v-model="editingProduct.description"
          placeholder="Product Description"
          required
        ></textarea>
        <input
          type="text"
          v-model="editingProduct.img"
          placeholder="Product Image URL"
        />
        <input
          type="number"
          v-model="editingProduct.quantity_available"
          placeholder="Quantity Available"
          min="0"
        />
        <input
          type="number"
          v-model="editingProduct.price"
          placeholder="Price"
          step="0.01"
          min="0"
        />
        <input
          type="text"
          v-model="editingProduct.category"
          placeholder="Category"
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  </div>
</template>

<script>
import ProductService from "../services/ProductService";

export default {
  product_name: "ProductManagement",
  data() {
    return {
      products: [],
      newProduct: {
        product_name: "",
        description: "",
        img: "",
        quantity_available: 0,
        price: 0.0,
        category: "",
      },
      editingProduct: null, // The product currently being edited
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
        this.newProduct = {
          product_name: "",
          description: "",
          img: "",
          quantity_available: 0,
          price: 0.0,
          category: "",
        }; // Reset form
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
    // Delete all products (Admin Only)
    async deleteAllProducts() {
      try {
        await ProductService.deleteAllProducts();
        this.fetchProducts(); // Refresh the product list
      } catch (error) {
        console.error("Error deleting all products:", error);
      }
    },
    // Edit a product (Admin Only)
    editProduct(product) {
      this.editingProduct = { ...product }; // Clone the product to avoid modifying the list directly
    },
    // Update a product (Admin Only)
    async updateProduct() {
      try {
        await ProductService.updateProduct(this.editingProduct.id, this.editingProduct);
        this.editingProduct = null; // Clear the editing form
        this.fetchProducts(); // Refresh the product list
      } catch (error) {
        console.error("Error updating product:", error);
      }
    },
  },
  mounted() {
    this.fetchProducts(); // Fetch products on component mount

    // Check if the current user is an admin using localStorage
    const role = localStorage.getItem("role");
    this.isAdmin = role === "admin"; // Set admin status based on role
  },
};
</script>

<style scoped>
/* Add any required styling */
.delete-all-button {
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
