<template>
  <div id="app">
    <Navigation />
    <h1>Untappd-Compare</h1>
    <h2>Input two valid Untappd usernames</h2>
    <p>If you don't know any, you can use i.e. {{ sampleUsernamesString() }}.</p>
    <ComparisonForm v-on:update-comparison="updateComparison" />
    <Comparison v-bind:comparison="comparison" />
    <Comparisons v-bind:comparisons="comparisons" />
  </div>
</template>

<script>
import ComparisonForm from "./components/ComparisonForm.vue";
import Navigation from "./components/Navigation.vue";
import Comparison from "./components/Comparison.vue";
import Comparisons from "./components/Comparisons";

export default {
  name: "App",
  components: {
    ComparisonForm,
    Navigation,
    Comparison,
    Comparisons
  },
  data: function() {
    return {
      sampleUsernames: [
        "pawcio",
        "birr0nauta",
        "CJOD",
        "dreamt12",
        "jimmyjames360",
        "athingcalledjoe"
      ],
      comparison: {},
      comparisons: []
    };
  },
  created: async function() {
    const response = await fetch("http://localhost:3002/api/comparisons");
    this.comparisons = await response.json();
  },
  methods: {
    sampleUsernamesString: function() {
      return this.sampleUsernames.map(username => `'${username}'`).join(", ");
    },
    updateComparison: function(newComparison) {
      this.comparison = newComparison;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
