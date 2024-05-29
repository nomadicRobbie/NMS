<template>
  <div class="container">
    <NavBar />

    <router-view />

    <!-- <FooterItem /> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import FooterItem from "./components/FooterItem.vue";

export default {
  components: {
    NavBar,
    // FooterItem,
  },
};
</script>

<style lang="scss">
.container,
body {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

h1 {
  font-size: 3rem;
  /* background-clip: text;
  -webkit-background-clip: text; 
  color: transparent;
  -webkit-text-stroke: 0.5px var(--secondary-colour);  */
}
h2 {
  font-size: 2rem;
  color: var(--secondary-colour);
  font-family: Roboto_Condensed, sans-serif;
  font-weight: lighter;
}
h3 {
  font-size: 1.75rem;
  color: var(--secondary-colour);
  font-family: Roboto_Condensed, sans-serif;
  font-weight: lighter;
}
p {
  font-size: 1.5rem;
  color: var(--secondary-colour);
  font-weight: lighter;
}
a {
  font-size: 1.25rem;
  color: var(--secondary-colour);
}
</style>
