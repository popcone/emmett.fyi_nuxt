<script lang="ts" setup>
// IMPORTS
// import Quiz from "@/components/Quiz";
// import Footer from "@/components/Footer.vue";
// import Toolbar from "@/components/Toolbar.vue";
// import translate from "@/data/translation.json";

definePageMeta({
  layout: "portfolio",
});

const route = useRoute();

console.log(route.name);

// if (route.params.name !== "one") {
//   console.log("Warning! Make sure user is authenticated!");
// }
</script>

<template>
  <v-layout id="quiz">
    <PortfolioQuizToolbar />
    <!-- <PortfolioQuizIndex /> -->
    <!-- <PortfolioQuizFooter /> -->
  </v-layout>
</template>
<style>
</style>
