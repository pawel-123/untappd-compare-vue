<template>
  <div>
    <p>Login or register to compare beers</p>
    <a id="login" href="/users/login">Login</a> -
    <a id="register" href="/users/register">Register</a> -
    <a id="logout" href="/users/logout">Log out</a> -
    <a id="comparisons" href="/comparisons">All Comparisons</a> -
    <a id="my_comparisons" href="/comparisons/users">My Comparisons</a>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>