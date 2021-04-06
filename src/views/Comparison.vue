<template>
  <div v-if="comparison.untappdUsers">
    <h2>{{comparison.untappdUsers[0]}} and {{comparison.untappdUsers[1]}} have {{comparison.commonBeers.length}} beers in common:</h2>
    <ComparisonTable v-bind:comparison="comparison" />
    <SaveComparison v-bind:comparison="comparison" v-bind:user="user" />
  </div>
</template>

<script>
import { baseUrl } from "../../api.js";
import ComparisonTable from "../components/ComparisonTable.vue";
import SaveComparison from "../components/SaveComparison.vue";

export default {
  name: "Comparison",
  components: {
    ComparisonTable,
    SaveComparison
  },
  props: ["user"],
  data: function() {
    return {
      comparison: {}
    };
  },
  created: async function() {
    const comp_id = this.$route.params.comp_id;
    const response = await fetch(`${baseUrl}/comparisons/${comp_id}`, {
      credentials: "include"
    });
    this.comparison = await response.json();
  }
};
</script>