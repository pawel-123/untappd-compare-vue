<template>
  <div>
    <button v-if="!comparison.users.includes(user.id)">Save comparison</button>
    <p v-if="comparison.users.includes(user.id)">You already saved this comparison</p>
  </div>
</template>

<script>
export default {
  name: "SaveComparison",
  props: ["comparison", "user"]
};
</script>