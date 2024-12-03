<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="loginUser">
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import jwt_decode from "jwt-decode";
  
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      async loginUser() {
        try {
          const response = await axios.post("http://localhost:5000/auth/login", {
            username: this.username,
            password: this.password,
          });
          const token = response.data.accessToken;
  
          // Save token in localStorage
          localStorage.setItem("user", token);
  
          // Decode token to get user details
          const decoded = jwt_decode(token);
          console.log("User Info:", decoded);
  
          // Redirect to home or dashboard
          this.$router.push("/home");
        } catch (error) {
          console.error(error.response.data.message);
          alert("Login failed: " + error.response.data.message);
        }
      },
    },
  };
  </script>
  