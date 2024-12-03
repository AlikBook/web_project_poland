<template>
    <nav>
      <ul>
        <!-- Always available links -->
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/beds">Beds</router-link></li>
        <li><router-link to="/decoration">Decoration</router-link></li>
        <li><router-link to="/furniture">Furniture</router-link></li>
        <li><router-link to="/storage">Storage</router-link></li>
  
        <!-- Links visible to logged-in users only -->
        <li v-if="isLoggedIn"><router-link to="/cart">Cart</router-link></li>
        <li v-if="isLoggedIn"><a href="#" @click.prevent="logout">Logout</a></li>
  
        <!-- Links visible to guests only -->
        <li v-else><router-link to="/login">Login</router-link></li>
        <li v-else><router-link to="/register">Register</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false, // Initial state
      };
    },
    methods: {
      // Check if user is logged in based on token in localStorage
      checkLoginStatus() {
        this.isLoggedIn = !!localStorage.getItem("user");
      },
      // Log out the user
      logout() {
        localStorage.removeItem("user"); // Remove token
        this.isLoggedIn = false; // Update state
        this.$router.push("/login"); // Redirect to login
      },
    },
    mounted() {
      this.checkLoginStatus(); // Check login status when component is mounted
    },
    watch: {
      // Watch for changes in route and update login status accordingly
      $route() {
        this.checkLoginStatus();
      },
    },
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 1rem;
  }
  
  ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }
  
  li {
    display: inline;
  }
  
  a,
  router-link {
    color: white;
    text-decoration: none;
  }
  </style>
  