<template>
  <table>
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
  </table>
</template>

<script>
export default {
  name: "ComparisonTable",
  props: ["comparisons"]
};
</script>