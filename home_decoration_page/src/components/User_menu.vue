<template>
    <nav class="menu">
      <div class="menu_pages">
        <div class="menu_pages__links">
          <router-link to="/" class="routers">Home</router-link>
          <router-link to="/storage" class="routers">Storage</router-link>
          <router-link to="/furniture" class="routers">Furniture</router-link>
          <router-link to="/beds" class="routers">Beds</router-link>
          <router-link to="/decoration" class="routers">Decoration</router-link>
        </div>
      </div>
      <div class="menu_right_section">
        <router-link to="/cart" class="cart">
            <div class="items_menu">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                <p>Cart</p>
            </div>
        </router-link>
          <div class="items_menu">
            {{ number_Cart_Items }} <p>Items</p>
          </div>
          <div class="items_menu">
            {{ totalPrice }}$ <p>Total Amount</p>
          </div>
          <div class="right_section__buttons">
          <!-- Authentication Buttons -->
          <button v-if="!isLoggedIn" @click="goToLogin">Login</button>
          <button v-if="!isLoggedIn" @click="goToRegister">Register</button>
          <button v-if="isLoggedIn" @click.prevent="logout">Logout</button>
      </div>
      </div>
    </nav>
    <div class="space">

    </div>
</template>
  
  <script>
  export default {
    name: "User_menu",
    props: {
      number_Cart_Items: {
        type: Number,
        default: 0,
      },
      totalPrice: {
        type: Number,
        default: 0.0,
      },
    },
    computed: {
    // Check if the user is logged in
    isLoggedIn() {
      return !!localStorage.getItem("user"); // Returns true if a token exists
    },
  },
  methods: {
    // Redirect to login page
    goToLogin() {
      this.$router.push("/login"); // Navigate to Login route
    },
    // Redirect to register page
    goToRegister() {
      this.$router.push("/register"); // Navigate to Register route
    },
    // Handle user logout
    logout() {
      localStorage.removeItem("user"); // Remove token
      this.$router.push("/login"); // Redirect to login page
    },
  },
};
</script>
  
<style>

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
    list-style: none;
}

.menu {
    width: 100%;
    position:fixed;
    height: 60px;
    display: flex;
    background-color: #f0e9d7;
    font-size: large;
    z-index: 1000;    
}

.space{
    height: 60px;
}

.menu_pages, .menu_right_section {
    display: flex;
    align-items: center; 
    gap: 5px;
}

.menu_pages {
    width: 60%;
    justify-content: center;
    margin: 5px;
}

.menu_right_section{
    justify-content: center;
    width: 40%;
}

.menu_pages__links {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    gap: 5px;
}

.routers {
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 70%;
    border-radius: 20px;
    color: black;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    text-decoration: none;


}



.right_section__buttons{
        display: flex;
        gap: 5px;
    }

.right_section__buttons button{
    background-color: #243E36;
    border: 1px solid #243E36;
    color: white;
    border-radius: 20px;
    padding: 7px;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.routers:hover, .right_section__buttons>button:hover {
    color: #243E36;
    background-color: white;
    border-bottom: 1px solid #243E36;
    cursor: pointer;
}




.items_menu{
    text-align: center;
    padding: 8px;
    border-radius: 10px;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

}
.items_menu p{
    font-size: small;
}

.items_menu:hover{
    background: white;
} 

.cart{
    border-radius: 10px;
    text-decoration: none;
    color: black;

}

@media (max-width: 800px){
    .menu{
        flex-direction: column;
        align-items: center;
        height: 100px;
    }
    .space{
      height: 100px;
    }
    
    .menu_pages__links, .menu_right_section ul {
        justify-content:center;
        gap: 15px;
    }

    .right_section__buttons{
        display: flex;
        gap: 5px;
    }
    .routers{
      padding-left: 5px;
      padding-right: 5px;
    }
}
</style>