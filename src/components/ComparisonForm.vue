<template>
  <form id="comparison-form" v-on:submit.prevent="onSubmit">
    <label for="user1">User 1</label>
    <input type="text" name="user1" id="user1" v-model="user1" />
    <br />
    <label for="user2">User 2</label>
    <input type="text" name="user2" id="user2" v-model="user2" />
    <br />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "ComparisonForm",
  data: function() {
    return {
      user1: "",
      user2: ""
    };
  },
  methods: {
    onSubmit: async function() {
      const response = await fetch("http://localhost:3002/api/comparisons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user1: this.user1,
          user2: this.user2
        })
      });
      const comparison = await response.json();
      console.log(comparison);
      this.$emit("update-comparison", comparison);
    }
  }
};
</script>