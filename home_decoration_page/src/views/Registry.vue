<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="registerUser">
        <input v-model="username" placeholder="Username" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await axios.post("http://localhost:5000/auth/register", {
            username: this.username,
            email: this.email,
            password: this.password,
            roles: ["user"], // Assigning default "user" role
          });
          alert("Registration successful! Please log in.");
          this.$router.push("/login"); // Redirect to login
        } catch (error) {
          console.error(error.response.data.message);
          alert("Error: " + error.response.data.message);
        }
      },
    },
  };
  </script>
  