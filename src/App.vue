<template>
  <NavBar />
  <div class="content">
    <router-view />
  </div>
  <FooterItem />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterItem from "./components/FooterItem.vue";

export default {
  components: {
    NavBar,
    FooterItem,
  },
};
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: var(--text-colour);
  // background-color: var(--background-colour);
  margin: 0;
  font-family: "Roboto", sans-serif;
  
  

  .content {
    height: 100vh;
    margin: 0;
  }
}
</style>
