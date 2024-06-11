<!-- this componenet requires: class="scroll" and id="section-#" v-bind:class="{ active: activeSection === 'section-#' }" on the parents section. 
# is the number of the section you want to scroll to.
Also, an array of the sections in the parent component that are used as props for the child to calculate how many section dots are needed -->

<template>
  <section class="right-panel">
    <div v-for="section in sections" :key="section.id" :class="getDotClass(section.id)" class="dot" @click="scrollToSection(section.id)"></div>
  </section>
</template>

<script>
export default {
  name: "ScrollItem",
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeSection: "section-1", // Default active section
    };
  },

  methods: {
    getDotClass(sectionId) {
      return this.activeSection === sectionId ? "scale" : "";
    },

    scrollToSection(sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    },

    saveActiveSection(sectionId) {
      localStorage.setItem("activeSection", sectionId);
    },

    loadActiveSection() {
      const activeSection = localStorage.getItem("activeSection");
      if (activeSection) {
        this.activeSection = activeSection;
      }
    },
  },

  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && this.activeSection !== id) {
            this.activeSection = id;
            this.$emit("section", id);
          }
        });
      },
      { threshold: 0.7 }
    );

    // Observe multiple sections
    const sections = document.querySelectorAll(".scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Load active section from localStorage on component mount
    this.loadActiveSection();
  },
};
</script>

<style scoped>
.right-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background: none;
  position: fixed;
  top: 50%;
  right: 20px;
  z-index: 1000;
}
.dot {
  /* Initial size of the dot */
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--text-colour);
  transition: transform 0.3s ease-in-out;
  margin: 0.5rem 0;
  opacity: 0.5;
}
.dot:hover {
  cursor: pointer;
}
.scale {
  /* Scale the dot up by a factor of 2 */
  transform: scale(1.5);
  border: 1px solid var(--alt-text-colour);
}
</style>
