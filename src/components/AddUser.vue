<template>
  <div class="column-container" refs="center">
    <div class="form scroll-scale">
      <h2>Our mission is to enhance and strengthen your online presence.</h2>
      <h4>If you are unsure how we can help you, its just a click away...</h4>
      <form action="">
        <label for="name">Full Name:</label>
        <input type="text" v-model="name" />
        <label for="name">Email:</label>
        <input type="email" v-model="email" />
        <button @click.stop.prevent="handleClick">Become a Nomad</button>
        <!-- <label for="name">Message:</label>
        <textarea cols="35" rows="10"></textarea> -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddUser",
  data() {
    return {
      name: "",
      email: "",
    };
  },

  components: {},

  mounted() {},
  methods: {
    async handleClick() {
      const response = await fetch("http://localhost:4242/add/new/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
        }),
      });
      if (response.ok) {
        const emailResponse = await fetch("http://localhost:4242/send/welcome/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailResponse
          }),
        });
        
        if (emailResponse.ok) {
          console.log("Email sent");
          alert("Thank you for your interest in becoming a Nomad. We will be in touch soon.");
        } else {
          console.log("Error", emailResponse);
        }
      } else {
        console.log("Error", response);
      }
    },
  },
};
</script>

<style>
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }
}
</style>
