<template>
  <div v-if="comparisons.length > 0">
    <h2>There are {{comparisons.length}} comparisons:</h2>
    <ComparisonTable v-bind:comparisons="comparisons" />
    <!-- <table>
      <thead>
        <tr>
          <th>User 1</th>
          <th>User 2</th>
          <th>Common beers</th>
          <th>See comparison</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comparison of comparisons" v-bind:key="comparison.id">
          <td>{{comparison.untappdUsers[0]}}</td>
          <td>{{comparison.untappdUsers[1]}}</td>
          <td>{{comparison.commonBeers.length}}</td>
          <td>
            <router-link :to="{ name: 'Comparison', params: {comp_id: comparison.id}}">Click here</router-link>
          </td>
        </tr>
      </tbody>
    </table>-->
  </div>
</template>

<script>
import { baseUrl } from "../../api.js";
import ComparisonTable from "../components/ComparisonTable.vue";

export default {
  name: "AllComparisons",
  components: {
    ComparisonTable
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