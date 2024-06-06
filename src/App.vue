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

<style >
.container,
body {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0;
  scroll-behavior: smooth;
}
.container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

h1 {
  font-size: 3rem;
  color: var(--text-colour);
}
h2 {
  font-size: 2rem;
  color: var(--text-colour);
  font-family: Roboto_Condensed, sans-serif;
  font-weight: normal;
}
h3 {
  font-size: 1.75rem;
  color: var(--secondary-colour);
  font-family: Roboto_Condensed, sans-serif;
  font-weight: lighter;
  margin: 0.5rem;
}
p {
  font-size: 1.5rem;
  color: var(--text-colour);
  font-weight: lighter;
  margin: 0.5rem 0;
}
a {
  font-size: 1.25rem;
  color: var(--secondary-colour);
  text-decoration: none;
}
</style>
