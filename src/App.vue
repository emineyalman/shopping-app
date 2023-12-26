<template>
  <div class="container">
    <h3>Shopping App</h3>
    <hr/>
    <ShoppingList/>
  </div>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";


export default {
  components:{
    ShoppingList,
}
 }
</script>
