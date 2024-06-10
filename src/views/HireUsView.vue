<template>
  <SocilaIcons />
  <ScrollCheck />
  <div class="hero5">
    <div class="overlay"></div>
  </div>
  <div class="products" ref="products">
    <div class="form scroll-scale">
      <h2>We want to help you build stronger online assets.</h2>
      <h4>If you are unsure how we can help you, its just a click away...</h4>
      <form action="">
        <label for="name">Fullname:</label>
        <input type="text" />
        <label for="name">Email:</label>
        <input type="email" />
        <button @click.stop.prevent="handleClick">Become a Nomad</button>
        <!-- <label for="name">Message:</label>
        <textarea cols="35" rows="10"></textarea> -->
      </form>
    </div>
  </div>
  <div class="hero5">
    <div class="overlay"></div>
  </div>
</template>

<script>
import SocilaIcons from "@/components/SocialIcons.vue";
import ScrollCheck from "@/components/ScrollCheck.vue";
export default {
  name: "HireUsView",
  components: {
    SocilaIcons,
    ScrollCheck,
  },

  mounted() {
    const productsSection = this.$refs.products;

    const observer = new IntersectionObserver(
      this.handleIntersect,
      { threshold: 0.5 } // Trigger when 50% of .products section is visible
    );

    observer.observe(productsSection);
  },
  methods: {
    handleClick() {
      // Handle form submission or button click
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const viewportHeight = window.innerHeight;
          const sectionTop = entry.boundingClientRect.top;
          const sectionHeight = entry.boundingClientRect.height;
          const sectionCenter = sectionTop + sectionHeight / 2;

          // Calculate the vertical center of the viewport
          const viewportCenter = viewportHeight / 2;
          console.log("viewPort Height:", viewportHeight);
          console.log("sectionTop:", sectionTop);
          console.log("sectionHeight:", sectionHeight);
          console.log("sectionCenter:", sectionCenter);
          // Pause scrolling logic
          if (sectionCenter <= viewportCenter) {
            console.log("Products section is at the center of the screen.");
            // Add logic to pause scrolling here
            // For demonstration, we'll just log a message
          }
        }
      });
    },
  },
};
</script>

<style>
.hero5 {
  background-image: url("../../public/images/nms-bg5.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  perspective: 1px;
  transform-style: preserve-3d;
  z-index: 0;
  scroll-behavior: smooth;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  padding: 2rem;
  width: 30rem;
  height: 50vh;
  scale: 0.5;
}
</style>
