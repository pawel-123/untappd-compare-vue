<template>
  <div>
    <h1>Login page</h1>
    <form v-on:submit.prevent="handleLogin">
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
  name: "Login",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleLogin: async function() {
      const response = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      });

      const loginData = await response.json();

      this.$emit("add-user", {
        username: loginData.username,
        id: loginData.id
      });
      this.$router.push({ name: "Home" });
    }
  }
};
</script>