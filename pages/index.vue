<script lang="ts" setup>
// Imports
import { provide } from "vue";
import { useDisplay } from "vuetify";
import { useIndexStore } from "~/store/global/index";
import { indexInjectionKey } from "~/composables/utils/indexInjectionKey";

// Project Data
const {
  data: portfolioData,
  pending,
  error,
  refresh,
} = await useFetch("/api/portfolio/");
const projects = await portfolioData.value["projects"];

provide(indexInjectionKey, {
  projects,
});

// Global State
const indexStore = useIndexStore();
const title = indexStore.title.replaceAll(". ", " ").split(" ");

//// Styles, Classes, Display
// Display
const { smAndUp, mdAndDown, mdAndUp, lgAndUp } = useDisplay();
//
</script>

<template>
  <div id="index">
    <v-container id="header" class="bg-background" fluid>
      <!-- Header Title -->
      <v-row v-if="mdAndUp">
        <v-col class="title-container">
          <h1 class="title" v-for="n of 3" :key="n">
            <span v-for="word in title" :key="word" class="word">{{
              word
            }}</span>
          </h1>
        </v-col>
      </v-row>
      <!--  -->
      <v-divider class="mt-6 mb-5"></v-divider>
      <!-- TODO: Create a <Portfolio /> component and nest Portfolio Nav and Portfolio Wrapper -->
      <!-- Portfolio Nav -->
      <v-row>
        <v-col cols="12">
          <GlobalHomeNav />
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="main" class="mb-12 mb-lg-0 d-flex justify-center" fluid>
      <!-- Portfolio Wrapper -->
      <GlobalHomePortfolioContent />
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/variables" as var;

@mixin bottom-border($border: dotted 1px) {
  border-bottom: $border;
  border-color: var.$color-primary;
}
:deep(.full-border) {
  border: dotted 1px;
  border-color: var.$color-primary;
}

:deep(.bottom-border) {
  @include bottom-border;
}
:deep(.home-portfolio-nav-button) {
  @include bottom-border;
}
:deep(.home-nav-button) {
  @include bottom-border;

  p {
    font-weight: 500 !important;
  }
}

:deep(.home-nav-button:hover, .home-nav-button:focus) {
  color: var.$color-primary !important;
}
:deep(.home-nav-button-selected) {
  @include bottom-border($border: none);
  color: var.$color-primary !important;

  p {
    font-weight: 600 !important;
  }
}

:deep(.img-portfolio-main > img) {
  width: 350px;
  max-width: 50vw;
}
</style>