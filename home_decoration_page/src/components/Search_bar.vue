<template>
    <div class="Search">
            <input v-model="search_text" type="text" name="" id="" placeholder="What are you looking for ?">
            <button @click="emit_search"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
    </div>
</template>

<script>
  
  export default {
    name: "Storage",
    props: {
      products: Array,
    },
    data(){
      return{
        search_text:"",
        saved_search_text:"",
      }
    },
    methods:{
        emit_search(){
            this.saved_search_text = this.search_text;
            this.$emit("search", this.saved_search_text)
            this.search_text = ""
            this.saved_search_text = ""
        }
    }
  };
</script>