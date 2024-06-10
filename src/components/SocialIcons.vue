<template>
    <section class="left-panel">
    <a href="https://www.instagram.com" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="icon" /></a>
    <a href="https://www.facebook.com" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" size="2x" class="icon" /> </a>
  </section>
</template>

<script>
export default {
    name: 'SocialIcons',
    data() {
        return {
            // Add your social icons data here
        };
    },
    methods: {
        // Add your methods here
    },
};
</script>

<style scoped>
.left-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 5rem;
  position: fixed;
  top: 50%;
  z-index: 1000;
  .icon {
    height: 1.5rem;
    width: 1.5rem;
    color: var(--text-colour);
  }
  a {
    all: unset;
    padding: 0.75rem;
    transition: all 500ms ease-in-out;
    margin-left: .5rem;
  }
  a:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
}

</style>