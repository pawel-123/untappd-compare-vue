<template>
  <div id="app">
    <router-link :to="{name: 'Home'}">- Home -</router-link>
    <router-link v-if="!loggedIn" :to="{name: 'Login'}">Login -</router-link>
    <router-link v-if="!loggedIn" :to="{name: 'Register'}">Register -</router-link>
    <a v-if="loggedIn" v-on:click="handleLogout()" href="/">Logout -</a>
    <router-link v-if="loggedIn" :to="{name: 'AllComparisons'}">All comparisons -</router-link>
    <router-link
      v-if="loggedIn"
      :to="{name: 'MyComparisons', params: {user_id: user.id}}"
    >My comparisons -</router-link>
    <router-view
      v-bind:usernames="sampleUsernamesString()"
      v-bind:loggedin="loggedIn"
      v-on:add-user="addUser"
    />
  </div>
</template>

<script>
export default {
  name: "App",
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
      comparisons: {},
      loggedIn: false,
      user: {}
    };
  },
  updated: function() {
    if (document.cookie.split(";").find(cookie => cookie.includes("token"))) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  },
  methods: {
    sampleUsernamesString: function() {
      return this.sampleUsernames.map(username => `'${username}'`).join(", ");
    },
    handleLogout: function() {
      console.log("handling a logout click");
      this.$cookies.remove("token");
    },
    addUser: function(newUser) {
      this.user = newUser;
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
