<template>
  <div :class="userScrolled ? 'hide' : 'chevron'">
    <font-awesome-icon :icon="['fas', 'chevron-down']" size="2x" class="chevron" />
  </div>
</template>

<script>
export default {
  name: "ScrollCheck",
  data() {
    return {
      userScrolled: false,
      lastScrollPosition: 0,
    };
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > this.lastScrollPosition) {
        this.userScrolled = true;
      } else {
        this.userScrolled = false;
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-20px);
  }
}

.chevron {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 2s infinite;
  z-index: 1000;
  opacity: 0.8;
}
.hide {
  display: none;
}
</style>
