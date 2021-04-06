<template>
  <div>
    <h2>Input two valid Untappd usernames</h2>
    <p>If you don't know any, you can use i.e. {{ usernames }}.</p>
    <form id="comparison-form" v-on:submit.prevent="handleSubmit">
      <label for="user1">User 1</label>
      <input type="text" name="user1" id="user1" v-model="user1" />
      <br />
      <label for="user2">User 2</label>
      <input type="text" name="user2" id="user2" v-model="user2" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { baseUrl } from "../../api.js";

export default {
  name: "ComparisonForm",
  props: ["usernames"],
  data: function() {
    return {
      user1: "",
      user2: ""
    };
  },
  methods: {
    handleSubmit: async function() {
      const response = await fetch(`${baseUrl}/comparisons`, {
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
          user1: this.user1,
          user2: this.user2
        })
      });

      const comparison = await response.json();
      this.$router.push({
        name: "Comparison",
        params: { comp_id: comparison.id }
      });
    }
  }
};
</script>