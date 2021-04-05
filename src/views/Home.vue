<template>
  <div class="home">
    <h1>Untappd-Compare</h1>
    <p v-if="loggedin === false">Login to compare beers</p>
    <ComparisonForm v-if="loggedin === true" v-bind:usernames="usernames" />
  </div>
</template>

<script>
import ComparisonForm from "../components/ComparisonForm";

export default {
  name: "Home",
  props: ["usernames", "loggedin"],
  components: {
    ComparisonForm
  }
};
</script>
