<template>
  <div>
    <h2>There are {{comparisons.length}} comparisons in the database</h2>
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
          <td>Click here</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Comparisons",
  props: ["comparisons"]
};
</script>