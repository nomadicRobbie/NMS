<template>
  <div class="site-nav" @click="handleNavClick">
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg
      class="logo"
      width="100%"
      height="100%"
      viewBox="0 0 500 500"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      xmlns:serif="http://www.serif.com/"
      style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2">
      <g transform="matrix(0.1,0,0,-0.1,0,500)">
        <path
          d="M2040,3033C1900,2898 1724,2727 1649,2654L1512,2520L1554,2520C1594,2521 1601,2526 1943,2855C2134,3039 2294,3190 2298,3190C2302,3190 2357,3138 2420,3075L2534,2960L2480,2905C2450,2875 2421,2850 2416,2850C2410,2850 2378,2877 2345,2909L2285,2968L1825,2520L1866,2520C1905,2520 1913,2526 2094,2700C2197,2799 2285,2880 2288,2880C2292,2880 2358,2817 2434,2741L2574,2601L2613,2646C2634,2670 2655,2690 2658,2690C2662,2690 2708,2652 2760,2605C2845,2529 2859,2521 2895,2521L2935,2521L2895,2558C2873,2578 2819,2627 2775,2667L2695,2739L2738,2780C2761,2802 2783,2820 2788,2820C2792,2820 2869,2753 2959,2670C3114,2528 3124,2520 3163,2520C3187,2520 3200,2524 3195,2529C3189,2534 3095,2622 2986,2724L2786,2911L2675,2800L2564,2690L2517,2738C2491,2764 2470,2790 2470,2795C2470,2801 2543,2878 2633,2967L2795,3129L3101,2825C3390,2537 3410,2520 3444,2520C3464,2520 3480,2523 3480,2527C3480,2530 3326,2688 3138,2877L2796,3220L2688,3113L2580,3005L2442,3143C2367,3218 2303,3280 2300,3280C2297,3279 2180,3169 2040,3033Z"
          style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
        <path
          d="M2175,2623L2068,2525L2109,2522C2147,2519 2156,2524 2215,2576L2280,2632L2349,2576C2408,2528 2423,2520 2459,2520L2501,2520L2438,2578C2404,2609 2354,2654 2329,2678L2283,2720L2175,2623Z"
          style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
        <path d="M700,2495C700,2482 906,2480 2490,2480C4074,2480 4280,2482 4280,2495C4280,2508 4074,2510 2490,2510C906,2510 700,2508 700,2495Z" style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
      </g>
    </svg>
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
        { name: "Portfolio", route: "/portfolio" },
        // { name: "Contact", route: "/hireUs" },
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
  left: 0;
  cursor: pointer;
  transition: all 500ms ease-in-out;
  margin: 0;
  /* background: var(--nav-fade); */
  height: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  /* padding: 0.5rem; */
  justify-content: space-between;
  z-index: 100;

  .logo {
    fill: var(--text-colour);
    width: 10rem;
  }
}

p,
a {
  all: unset;
  color: var(--text-colour);
  margin: 1rem 1rem;
  font-size: 1.5rem;
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
  padding: 2rem;
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
