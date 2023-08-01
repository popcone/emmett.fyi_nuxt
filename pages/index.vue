<script lang="ts" setup>
// import { storeToRefs } from "pinia";
// import { ref } from "vue";
import { useIndexStore } from "~/store/index";
// import { usePortfolioNavStore } from "~/store/portfolioNav";

// STATE MANAGEMENT
const indexStore = useIndexStore();
const title = indexStore.title;

// const portfolioNavStore = usePortfolioNavStore();
// const { currentProject } = storeToRefs(portfolioNavStore);
// const { projects } = portfolioNavStore;
// const project = ref(projects[currentProject.value]);

// portfolioNavStore.$subscribe((mutation, state) => {
//   currentProject.value = portfolioNavStore.currentProject;
//   project.value = projects[currentProject.value - 1];
// });
</script>

<template>
  <div id="index">
    <v-container id="header" fluid>
      <v-row>
        <v-col class="title-container">
          <h1 class="title" v-for="n of 3" :key="n">
            <span v-for="word in title" :key="word" class="word">{{
              word
            }}</span>
          </h1>
        </v-col>
        <v-divider class="my-4"></v-divider>
      </v-row>
    </v-container>
    <v-container id="content" class="d-flex justify-center">
      <v-card id="portfolio">
        <v-row>
          <v-col>
            <h4 class="text-h6 text-md-h5 text-lg-h4">
              If you've made it to this page, you already have access to my
              resume and a brief overview of my professional background and
              experience. If you're interested in learning more or scheduling an
              interview, do not hesitate to use my contact information.
            </h4>
            <PortfolioNav />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<style>
</style>
  