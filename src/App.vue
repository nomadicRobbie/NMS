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
/* .container, */
body {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
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
  text-decoration: none;
  font-weight: lighter;
  /* text-align: center; */
  text-transform: uppercase;
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
@media only screen and (orientation: portrait) {
  a {
    font-size: medium;
    margin: 0.5rem;
    margin-top: 1rem;
    padding: 0 1rem;
    text-align: center;
  }
  h4 {
    padding: 0 3rem;
    font-size: medium;
    text-align: center;
  }
  p {
    padding: 0 3rem;
    font-size: smaller;
    padding: 0.5rem;
    text-align: center;
  }
  h2 {
    padding: 0.5rem 3rem;
    font-size: larger;
    text-align: center;
  }
  h3 {
    text-align: center;
  }
}
</style>
