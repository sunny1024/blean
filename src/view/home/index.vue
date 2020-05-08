<template>
  <div>
    <login></login>
    <hot></hot>
    <componentA></componentA>
  </div>
</template>

<script>
import login from "@/components/login/index.vue";
import hot from "./hot.vue";
import componentA from "./componentA.vue";

export default {
  components: {
    login,
    hot,
    componentA
  }
};
</script>


<style></style>