<template>
  <div>
    <login></login>
    <hot></hot>
    <componentA></componentA>
    <film></film>
    <read></read>
  </div>
</template>

<script>
import login from "@/components/login/index.vue";
import hot from "./hot.vue";
import componentA from "./componentA.vue";
import film from "./film.vue";
import read from "./read.vue";

export default {
  components: {
    login,
    hot,
    componentA,
    film,
    read
  }
};
</script>


<style></style>