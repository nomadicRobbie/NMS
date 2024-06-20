<template>
    <SocialIcons />
    <ScrollItem :sections="sectionsArray" />
    <ScrollCheck />
    <section class="hero5"></section>
    <div class="column-container scroll-scale scroll" id="section-1" v-bind:class="{ active: activeSection === 'section-1' }">
      <h1>Task Automation</h1>
      
    </div>
    <section class="hero5"></section>
   
  </template>
  <script>
  import ScrollCheck from "@/components/ScrollCheck.vue";
  import SocialIcons from "@/components/SocialIcons.vue";
  import ScrollItem from "@/components/ScrollItem.vue"; //this componenet requires class="scroll" and id="section-#" v-bind:class="{ active: activeSection === 'section-#' }" and an array of the sections in the parent component that are used as props for the child
  
  export default {
    name: "taskAutomation",
    components: {
      ScrollCheck,
      SocialIcons,
      ScrollItem,
    },
    data() {
      return {
        activeSection: "",
        sectionsArray: [
          { id: "section-1", title: "Project One" },
          { id: "section-2", title: "Project Two" },
        ],
      };
    },
  };
  </script>
  
  <style>
  .hero5 {
    display: flex;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    height: 100vh;
    background-attachment: fixed;
    perspective: 1px;
    transform-style: preserve-3d;
    scroll-behavior: smooth;
    z-index: 0;
    background-image: url("../../public/images/nms-bg10.webp");
  }
  </style>