<template>
    <footer>
        <div class="register_login">
            <h3>Join Our Family</h3>
            <p>
                Bring your ideas to life with special
                 discounts, inspiration, and exclusive
                  perks. Sign up now — it's free!</p>
            <div class="right_section__buttons">
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
        <div class="menu_and_socials">
            <h3>Leaving Already? Don't Miss Our Categories!</h3>
            <div class="pages_footer">
                <router-link to="/" class="routers_footer">Home</router-link>
                <router-link to="/storage" class="routers_footer">Storage</router-link>
                <router-link to="/furniture" class="routers_footer">Furniture</router-link>
                <router-link to="/beds" class="routers_footer">Beds</router-link>
                <router-link to="/decoration" class="routers_footer">Decoration</router-link>
            </div>
            <div class="socials">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <font-awesome-icon :icon="['fab', 'youtube']" />
            </div>
        </div>
    </footer>
    <div class="rights"><p>All Rights Reserved © 2024</p></div>
</template>

<script>
export default{
    name:"Footer",
    data(){
        return{
            
        }
    }
}
</script>

<style>

footer{
    background-color: rgb(74, 74, 74);
    display: flex;
    width: 100%;
}

.register_login{
    width: 30%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.register_login h3, .register_login p{
    color: white;
}
.register_login p{
    line-height: 30px;
    text-align: center;
}

.menu_and_socials{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:40px;
    color: white;
}
.pages_footer{
    display: flex;
    font-size: larger;
    justify-content: center;
    gap: 20px;
}

.socials{
    display: flex;
    gap:10px;
    font-size: 30px;
}

.rights{
    background-color: black;
    color: white;
    text-align: center;
}
.routers_footer{
    color: white;
    text-decoration: none;
}

@media (max-width: 800px){
    footer{
        flex-direction: column;
        align-items: center;
        
    }
    .socials{
        margin-bottom: 60px;
    }
    .register_login{
        margin: 30px;
        width: 100%;
        padding: 0;
    }
    .menu_and_socials{
        width: 100%;
    }
}
</style>