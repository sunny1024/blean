<template>
  <div>
    <login></login>
    <ComponentB></ComponentB>
    <ComponentC></ComponentC>
  </div>
</template>

<script>
import login from "@/components/login/index.vue";
import ComponentB from "@/components/ComponentB.vue";
import ComponentC from "@/components/ComponentC.vue";

export default {
  components: {
    login,
    ComponentB,
    ComponentC
  }
};
</script>


<style></style>