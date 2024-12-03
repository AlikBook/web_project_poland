import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"; 
import Beds from '../views/Beds.vue';
import Decoration from '../views/Decoration.vue';
import Furniture from '../views/Furniture.vue';
import Storage from '../views/Storage.vue';
import Cart from '../views/Cart.vue';
import Individual_product from '../views/Individual_product.vue';
import Registry from "../views/Registry.vue";
import Login from "../views/Login.vue";


const routes = [ 
    {
        path: "/",
        name : "Home",
        component: Home ,
    },
    {
        path: "/beds",
        name : "Beds",
        component: Beds ,
    },
    {
        path: "/decoration",
        name : "Decoration",
        component: Decoration ,
    },
    {
        path: "/furniture",
        name : "Furniture",
        component: Furniture ,
    },
    {
        path: "/storage",
        name : "Storage",
        component: Storage ,
    },
    {
        path: "/cart",
        name : "Cart",
        component: Cart ,
        meta: { requiresAuth: true }, // Protected route
    },
    {
        path: "/product/:id", // Add dynamic route for the product
        name: "Individual_product",
        component: Individual_product,
        props: true, // Enable passing the route parameter as props
        meta: { requiresAuth: true }, // Protected route
      },
      {
        path: "/register",
        name: "Register",
        component: Registry,
        meta: { guest: true }, // Mark as accessible to guests only
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { guest: true }, // Mark as accessible to guests only
      },
      
]
const router = createRouter({
 history: createWebHistory(),
 routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("user");
  
    // If route requires authentication
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!token) {
        return next("/login"); // Redirect to login if not authenticated
      }
      return next();
    }
  
    // If route is for guests only
    if (to.matched.some((record) => record.meta.guest)) {
      if (token) {
        return next("/"); // Redirect to home if already authenticated
      }
      return next();
    }
  
    // If route is for admin-only
    if (to.matched.some((record) => record.meta.is_admin)) {
      const user = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
      if (user.role !== "admin") {
        return next("/"); // Redirect non-admin users to home
      }
      return next();
    }
  
    next(); // Allow navigation if no guard is triggered
  })
  
export default router 
