<template>
  <div>
    <div v-if="comparisons.length > 0">
      <h2>There are {{comparisons.length}} comparisons:</h2>
      <ComparisonsTable v-bind:comparisons="comparisons" />
    </div>
  </div>
</template>

<script>
import { baseUrl } from "../../api.js";
import ComparisonsTable from "../components/ComparisonsTable.vue";

export default {
  name: "MyComparisons",
  components: {
    ComparisonsTable
  },
  data: function() {
    return {
      comparisons: {}
    };
  },
  created: async function() {
    const userResponse = await fetch(`${baseUrl}/comparisons/users`, {
      credentials: "include"
    });
    const userData = await userResponse.json();
    const user_id = userData.user_id;

    const comparisonsResponse = await fetch(
      `${baseUrl}/comparisons/users/${user_id}`,
      {
        credentials: "include"
      }
    );
    this.comparisons = await comparisonsResponse.json();
  }
};
</script>