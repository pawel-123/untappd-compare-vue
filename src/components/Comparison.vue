<template>
  <div>
    <h2>{{comparison.untappdUsers[0]}} and {{comparison.untappdUsers[0]}} have {{comparison.commonBeers.length}} beers in common:</h2>
    <table>
      <thead>
        <tr>
          <th>Beer name</th>
          <th>{{comparison.untappdUsers[0]}} rating</th>
          <th>{{comparison.untappdUsers[1]}} rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="beer of comparison.commonBeers" v-bind:key="beer.beer_id">
          <td>{{beer.beer_name}}</td>
          <td>{{beer.user1_rating}}</td>
          <td>{{beer.user2_rating}}</td>
        </tr>
      </tbody>
    </table>
    <!-- <ul>
      <li v-for="beer of comparison.commonBeers" v-bind:key="beer.beer_id">{{beer.beer_name}}</li>
    </ul>-->
  </div>
</template>

<script>
export default {
  name: "Comparison",
  props: ["comparison"]
};
</script>