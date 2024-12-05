<template>
  <div class="user-management">
    <h1>User Management</h1>

    <ul>
      <li v-for="user in nonAdminUsers" :key="user.id">
        {{ user.username }} ({{ user.email }})
        <button @click="toggleBlockUser(user.id, user.blocked)">
          {{ user.blocked ? "Unblock" : "Block" }}
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
      users: [], // Raw list of users
    };
  },
  computed: {
    // Filter out admin users
    nonAdminUsers() {
      return this.users.filter((user) => !user.roles.includes("admin"));
    },
  },
  methods: {
    async fetchUsers() {
      try {
        this.users = await UserService.getAllUsers();
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async toggleBlockUser(id, isBlocked) {
      try {
        if (isBlocked) {
          await UserService.unblockUser(id); // Unblock user
        } else {
          await UserService.blockUser(id); // Block user
        }
        this.fetchUsers(); // Refresh user list
      } catch (error) {
        console.error(`Error ${isBlocked ? "unblocking" : "blocking"} user:`, error);
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
