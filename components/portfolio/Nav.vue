<script lang="ts" setup>
// import { storeToRefs } from "pinia";
import { usePortfolioNavStore } from "~/store/portfolioNav";
import { useLinkUrlUndefined as urlUndefined } from "~/composables/useLinkUrlUndefined";

// STATE MANAGEMENT
const store = usePortfolioNavStore();
const { projects } = store;
</script>

<template>
  <div class="pa-0">
    <v-spacer class="my-9"></v-spacer>
    <div ref="target">
      <v-btn
        v-for="(project, index) of projects"
        :key="index"
        :href="project.link"
        target="blank"
        size="x-large"
        class="text-capitalize text-body-1 px-6 mr-4"
        variant="text"
        :border="true"
        :rounded="0"
        :disabled="urlUndefined(project.link)"
        >{{ project.title }}</v-btn
      >
    </div>
  </div>
</template>


<style scoped>
</style>