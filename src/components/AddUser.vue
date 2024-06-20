<template>
  <div class="column-container scroll-scale" refs="center">
    <div class="form">
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
      try {
        // First, send a request to add a new user
        const addUserResponse = await fetch("http://localhost:4242/add/new/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
          }),
        });

        if (!addUserResponse.ok) {
          throw new Error("Failed to add new user");
        }

        // If the user is added successfully, send the welcome email
        const sendEmailResponse = await fetch("http://localhost:4242/send/welcome/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
          }),
        });

        if (!sendEmailResponse.ok) {
          throw new Error("Failed to send welcome email");
        }
        alert("Thank you for your interest in becoming a Nomad. We will be in touch soon.");
      } catch (error) {
        console.log("Error:", error.message);
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
  width: 100%;
  height: 50vh;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }
}
@media only screen and (orientation: portrait) {
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 80%;
    height: 50vh;
    
  }
}
</style>
