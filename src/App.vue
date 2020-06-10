<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    Header
  },
  created () {
    let item = localStorage.getItem("cart")
    let items = JSON.parse(item)
     // set cart on reload
    this.$store.commit("setCartReload", items)
  }
}
</script>

<style>
</style>
