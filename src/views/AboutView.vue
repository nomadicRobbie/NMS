<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <section class="second-content">
    <div class="inner">
      <div class="left">
        <h2>Web Development</h2>
        <p>
          We build websites that are not only visually appealing but also functional. Our websites are designed to be responsive, fast, and secure. We use the latest technologies and best practices to
          ensure that your website is up-to-date and future-proof.
        </p>
      </div>
      <div class="left">
        <h2>Social Media Management</h2>
        <p>
          We help businesses grow their online presence through social media. Our team of experts will create and manage your social media accounts, engage with your audience, and drive traffic to
          your website. We will work with you to develop a social media strategy that aligns with your business goals and objectives.
        </p>
      </div>
      <div class="left">
        <h2>Search Engine Optimization</h2>
        <p>
          We help businesses improve their search engine rankings and increase their online visibility. Our team of SEO experts will optimize your website for search engines, create high-quality
          content, and build high-quality backlinks to improve your website's search engine rankings. We will work with you to develop an SEO strategy that aligns with your business goals and
          objectives.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AboutView",
  components: {},
};
</script>

<style lang="scss">
.second-content {
  display: flex;
  flex-direction: column;
  align-items: left;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: left;
    background: var(--background-fade);
    .left {
      margin: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      box-shadow: var(--box-shadow);
      border-radius: 5px;
      padding: 2rem;
      background: var(--primary-colour);
    }
    
  }
}
</style>
