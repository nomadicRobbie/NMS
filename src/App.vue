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

<style>
.container,
body {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0;
  scroll-behavior: smooth;
  background: var(--background-fade);
}

/*hide scroll bar for chrome and safari*/
.container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

h1 {
  font-size: 2rem;
  color: var(--text-colour);
  font-weight: lighter;
  margin: 0.5rem 1rem;
}
h2 {
  font-size: 1.75rem;
  color: var(--text-colour);
  font-family: Roboto_Condensed, sans-serif;
  font-weight: normal;
}
h3 {
  font-size: 1.5rem;
  color: var(--secondary-colour);
  font-family: Roboto_Condensed, sans-serif;
  font-weight: lighter;
  margin: 0.5rem;
}
h4 {
  font-size: 1.5rem;
  color: var(--text-colour);
  font-weight: normal;
  margin: 1rem 0;
}
p {
  font-size: 1.5rem;
  color: var(--text-colour);
  font-weight: lighter;
  margin: 0.5rem 0;
}
button {
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: 0.1px solid var(--secondary-colour);
  background-color: var(--alt-background-colour);
  color: var(--text-colour);
  padding: 0.5rem 1.25rem;
  margin: 0.5rem auto;
  border-radius: 2.5px;
  cursor: pointer;
  transition: all 500ms ease-in-out;
  box-shadow: var(--box-shadow);
  /* width: 100%; */
  height: 2rem;
  float: left;
}
button:hover {
  transform: scale(1.1);
}
button:active {
  transform: scale(0.9);
}
a {
  all: unset;
  color: var(--text-colour);
  font-size: 1.5rem;
  margin: 1rem 1rem;
  text-decoration: underline;
}
a:hover {
  cursor: pointer;
  color: var(--secondary-colour);
}
input,
textarea {
  all: unset;
  box-shadow: var(--box-shadow);
  border: none;
  border-radius: 2.5px;
  background-color: var(--alt-background-colour);
  width: 100%;
  height: 2rem;
}
</style>
