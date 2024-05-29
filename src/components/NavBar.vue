<template>
  <div class="site-nav" @click="handleNavClick">
    <p>MENU</p>
    <nav class="navigation" v-show="navbarOpen" @click.stop.prevent="handleNavClick">
      <transition-group name="drop" tag="div" class="navbar">
        <router-link v-for="(item, index) in navItems" :key="item.name" :to="item.route" class="navTag" :style="{ transitionDelay: `${index * 0.25}s` }" v-show="navbarOpen">
          {{ item.name }}
        </router-link>
      </transition-group>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      navbarOpen: false,
      navItems: [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        { name: "Contact", route: "/hireUs" },
      ],
    };
  },

  methods: {
    handleNavClick() {
      this.navbarOpen = !this.navbarOpen;
    },
  },
};
</script>

<style scoped>
.site-nav {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: all 500ms ease-in-out;
  margin: 0;
  background: var(--background-fade);
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  justify-content: space-between;
  z-index: 100;
}

p {
  color: var(--secondary-colour);
  margin: 0 1rem;
}
.navbar {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  transition: all 500ms ease-in-out;
}
.navTag {
  padding: 10px;
  text-decoration: none;
  transition: all 500ms ease-in-out;
  padding: 1rem;
}

.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.drop-enter-to,
.drop-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.active-link {
  text-decoration: underline;
}
</style>
