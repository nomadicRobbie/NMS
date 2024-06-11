<template>
  <SocilaIcons />
  <ScrollCheck />
  <div class="hero5">
    <div class="overlay"></div>
  </div>
  <div class="products">
    <div class="scroll-scale">
      <h2>{{ data.heading }}</h2>
      <h4>{{ data.para1 }}</h4>
      <h4>{{ data.para2 }}</h4>
    </div>
  </div>
</template>

<script>
import SocilaIcons from "@/components/SocialIcons.vue";
import ScrollCheck from "@/components/ScrollCheck.vue";
export default {
    name: "WebRoute",
    data() {
        return {
            data: {
                heading: this.props.heading,
                para1: this.props.para1,
                para2: this.props.para2,
            },
        }

    },
    components: {
        SocilaIcons,
        ScrollCheck,
    },
}
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
  scale: 1.25;
  input,
  button {
    height: 1.5rem;
  }
}
</style>
