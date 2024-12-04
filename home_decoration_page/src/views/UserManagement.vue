<template>
    <div class="user-management">
      <h1>User Management</h1>
  
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.nickname }} ({{ user.email }})
          <button
            v-if="!user.blocked"
            @click="blockUser(user.id)"
          >
            Block
          </button>
          <button
            v-else
            @click="unblockUser(user.id)"
          >
            Unblock
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import UserService from "../services/UserService";
  
  export default {
    name: "UserManagement",
    data() {
      return {
        users: [],
      };
    },
    methods: {
      async fetchUsers() {
        try {
          this.users = await UserService.getAllUsers();
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      },
      async blockUser(id) {
        try {
          await UserService.blockUser(id);
          this.fetchUsers(); // Refresh user list
        } catch (error) {
          console.error("Error blocking user:", error);
        }
      },
      async unblockUser(id) {
        try {
          await UserService.unblockUser(id);
          this.fetchUsers(); // Refresh user list
        } catch (error) {
          console.error("Error unblocking user:", error);
        }
      },
    },
    mounted() {
      this.fetchUsers(); // Fetch users on component mount
    },
  };
  </script>
  
  <style scoped>
  /* Add any required styling */
  </style>
  