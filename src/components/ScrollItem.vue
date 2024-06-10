<template>
  <section class="right-panel">
    <div v-for="section in sections" :key="section.id" :class="getDotClass(section.id)" class="dot" @click="scrollToSection(section.id)"></div>
  </section>
</template>

<script>
export default {
  name: "ScrollItem",
  data() {
    return {
      activeSection: "section-1",
      sections: [
        { id: "section-1", title: "Section 1" },
        { id: "section-2", title: "Section 2" },
        { id: "section-3", title: "Section 3" },
        { id: "section-4", title: "Section 4" },
        { id: "section-5", title: "Section 5" },
        { id: "section-6", title: "Section 6" },
      ],
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
