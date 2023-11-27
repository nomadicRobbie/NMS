<template>
  <section class="header"></section>
  <section class="container">
    <div class="first-content">
      <h1>welcome</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis temporibus exercitationem recusandae sed quod odit illum corporis tenetur unde, ducimus voluptate, mollitia sapiente repudiandae
        harum? Architecto earum eaque culpa sapiente.
      </p>
    </div>
    <div class="second-content"></div>
    <!-- <img src="../../public/images/nms-website8.jpg" alt="" /> -->
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.container {
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 1rem;
  h1 {
    font-size: 2rem;
    color: var(--action-colour);
    font-family: 'Parisienne', cursive;
  }
  p {
    font-size: 1.5rem;
    color: var(--text-colour);
  }
  .first-content {
    width: 50%;
    padding: 2rem;
  }
  .second-content {
    height: auto;
    width: 50%;
    background-image: url("../../public/images/nms-website7.jpg");
    background-position: 30% 40%;
    background-repeat: no-repeat;
    overflow: visible;
  }
}
</style>
