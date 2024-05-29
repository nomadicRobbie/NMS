<template>
  <section class="home">
    <section class="first">
      <img src="../../public/images/nms-logo-writing.svg" alt="" />
    </section>
    <section class="second">
      <p class="webdesign" @click.stop.prevent="getDiv(webDesign)">Web Design</p>
      <p class="taskAuto" @click.stop.prevent="getDiv(taskAuto)">Task Automation</p>
      <p class="softDev" @click.stop.prevent="getDiv(softDev)">Software Development</p>
      <p class="creation" @click.stop.prevent="getDiv(content)">Content Creation</p>
      <p class="graphic" @click.stop.prevent="getDiv(graphic)">Graphic Design</p>
    </section>
  </section>
  <div class="webDesign"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
.first {
  background: var(--secondary-colour);
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
}
.second {
  background-color: var(--alt-background-colour);
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
p {
  margin: 0.5rem 1rem;
  cursor: pointer;
}
img {
  height: 30rem;
  object-fit: cover;
}
</style>
