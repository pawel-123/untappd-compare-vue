<template>
  <div v-if="comparisons.length > 0">
    <h2>There are {{comparisons.length}} comparisons:</h2>
    <ComparisonsTable v-bind:comparisons="comparisons" />
  </div>
</template>

<script>
import { baseUrl } from "../../api.js";
import ComparisonsTable from "../components/ComparisonsTable.vue";

export default {
  name: "AllComparisons",
  components: {
    ComparisonsTable
  },
  data: function() {
    return {
      comparisons: {}
    };
  },
  created: async function() {
    const response = await fetch(`${baseUrl}/comparisons`, {
      credentials: "include"
    });
    this.comparisons = await response.json();
  }
};
</script>