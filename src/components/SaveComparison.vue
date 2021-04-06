<template>
  <div>
    <button v-if="!comparison.users.includes(user.id)" v-on:click="handleSave">Save comparison</button>
    <p v-if="comparison.users.includes(user.id)">You already saved this comparison</p>
  </div>
</template>

<script>
import { baseUrl } from "../../api.js";

export default {
  name: "SaveComparison",
  props: ["comparison", "user"],
  methods: {
    handleSave: async function() {
      const response = await fetch(
        `${baseUrl}/comparisons/${this.comparison.id}`,
        {
          credentials: "include",
          method: "POST"
        }
      );
      const comparison = await response.json();
      console.log("comparison from SaveComparison.vue :", comparison);
      this.$emit("update-comparison", comparison);
    }
  }
};
</script>