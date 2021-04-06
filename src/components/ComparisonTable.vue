<template>
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
      <tr>
        <td>
          <b>Average Rating</b>
        </td>
        <td>
          <b>{{userAverage(comparison, 1)}}</b>
        </td>
        <td>
          <b>{{userAverage(comparison, 2)}}</b>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ComparisonTable",
  props: ["comparison"],
  methods: {
    userAverage: function(comparison, userNumber) {
      const total = comparison.commonBeers.reduce((avg, beer) => {
        if (userNumber === 1) {
          return avg + beer.user1_rating;
        }
        if (userNumber === 2) {
          return avg + beer.user2_rating;
        }
      }, 0);

      const average = total / comparison.commonBeers.length;

      return Math.round(average * 100) / 100;
    }
  }
};
</script>