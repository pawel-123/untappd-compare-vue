<template>
  <div>
    <h1>Register your user account</h1>
    <form v-on:submit.prevent="handleRegister">
      <label for="username">Username</label>
      <input type="text" name="username" id="username" v-model="username" />
      <br />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="password" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { baseUrl } from "../../api.js";

export default {
  name: "Register",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleRegister: async function() {
      await fetch(`${baseUrl}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      });
      this.$router.push({ name: "Login" });
    }
  }
};
</script>