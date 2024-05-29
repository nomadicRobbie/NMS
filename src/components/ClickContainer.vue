<template>
    <transition name="fade">
        <div v-if="show">
            <!-- Your component content here -->
            <h2>{{ dataFromParent }}</h2>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
  header: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  }
}
    data() {
        return {
            show: false
        };
    },
    methods: {
        toggleVisibility() {
            this.show = !this.show;
        }
    },
    mounted() {
        // Listen for button press event from parent
        this.$root.$on('buttonPressed', this.toggleVisibility);
    },
    beforeUnmount() {
        // Clean up event listener
        this.$root.$off('buttonPressed', this.toggleVisibility);
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(0);
}
.fade-leave-to {
    transform: translateY(20px);
}
</style>