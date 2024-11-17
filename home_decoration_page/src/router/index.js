import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"; 
import Beds from '../views/Beds.vue';
import Decoration from '../views/Decoration.vue';
import Furniture from '../views/Furniture.vue';
import Storage from '../views/Storage.vue';
import Cart from '../views/Cart.vue';
import Individual_product from '../views/Individual_product.vue';

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
    },
    {
        path: "/product/:id", // Add dynamic route for the product
        name: "Individual_product",
        component: Individual_product,
        props: true, // Enable passing the route parameter as props
      },
]
const router = createRouter({
 history: createWebHistory(),
 routes
})
export default router 
