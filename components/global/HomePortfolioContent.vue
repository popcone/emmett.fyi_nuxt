<script lang="ts" setup>
// Imports
import { storeToRefs } from "pinia";
import { ref, computed, inject } from "vue";
import { useDisplay } from "vuetify";
import { useGlobalStore } from "~/store/global/global";
import { useIndexStore } from "~/store/global/index";
import { useIsUrlUndefined as isUrlUndefined } from "~/composables/useIsUrlUndefined";
import { indexInjectionKey } from "~/composables/utils/indexInjectionKey";

// Projects Data
const { projects } = inject(indexInjectionKey);
let project = computed(() => projects[currentProject.value]);

const projectUndefined = computed(
  () => project.value === null || project.value === undefined
);

// Global State
const PortfolioContent = useIndexStore();
const { currentProject } = storeToRefs(PortfolioContent);
const { intro } = PortfolioContent;

// Local State
const expandPortfolioContentBullets = ref(false);

// Main image
const { imgBase } = useGlobalStore();

const isExternalLink = (target: string) => {
  return target === "external";
};

// Watch for updates to currentProject
PortfolioContent.$subscribe(async (mutation, state) => {
  currentProject.value = await PortfolioContent.currentProject;
  await setTimeout(() => {
    project.value = projects[currentProject.value];
  }, 150);
});

//// Styles, Classes, Display
// Display
const { smAndDown, mdAndDown, mdAndUp, lgAndUp } = useDisplay();
</script>

<template>
  <v-container class="d-flex justify-center" fluid>
    <v-card v-if="projectUndefined" width="100vw" class="mt-6">
      <!-- TODO: Move this to a component -->
      <!-- Introduction Page -->
      <v-row class="px-0">
        <v-col cols="0" md="0" lg="1" xl="2"> </v-col>
        <v-col cols="12" md="6" lg="5" xl="4" class="px-3 px-xl-12 px-xxl-16">
          <v-card class="d-flex justify-end">
            <v-card
              class="pa-8"
              variant="outlined"
              :border="true"
              color="secondary"
              width="100%"
            >
              <v-img
                :src="`${imgBase}em.jpg`"
                :lazy-src="`${imgBase}em.jpg`"
                alt="Emmett"
                cover
                :aspect-ratio="0.7995735608"
              >
              </v-img>
            </v-card>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
          lg="5"
          xl="4"
          class="px-6 pl-lg-8 pl-xl-12 pl-xxl-16 pt-6 pt-md-0"
        >
          <v-card class="d-flex" min-height="100%" position="relative">
            <v-card
              width="100%"
              :position="mdAndUp ? 'absolute' : 'relative'"
              style="top: 20%"
            >
              <p class="text-body-1 text-xxl-h5 mb-8">{{ intro }}</p>
              <v-card
                class="home-portfolio-nav-button d-flex align-center pt-0 pb-2 mb-2"
                @click.stop="currentProject = 0"
                :width="lgAndUp ? '50%' : '100%'"
              >
                <span class="pr-3 flex-grow-1 text-h6 text-lg-h5 text-xl-h4"
                  >View Works</span
                >
                <span class="text-surface">
                  <v-icon
                    class="text-h5 justify-end text-tertiary"
                    size="x-small"
                    >mdi-arrow-top-right</v-icon
                  >
                </span>
              </v-card>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="0" md="0" lg="1" xl="2"> </v-col>
      </v-row>
    </v-card>
    <!-- Portfolio Content -->
    <v-card
      id="portfolio"
      class="px-4 px-xl-0 d-flex justify-center mt-12"
      :data-portfolio-summary="project.id"
      v-else
    >
      <!-- Portfolio -->
      <v-row>
        <!-- Portfolio Title -->
        <v-col
          cols="12"
          class="text-primary d-flex"
          :class="lgAndUp ? '' : 'flex-column'"
        >
          <div class="flex-grow-1">
            <h4 class="portfolio-title text-h5 text-lg-h4 font-weight-medium">
              {{ project.title.long }}
            </h4>
          </div>
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-divider class="mb-3 mb-md-6 md-lg-9"></v-divider>
        </v-col>
        <!-- // Portfolio Content -->
        <v-col cols="12">
          <v-card>
            <v-row>
              <v-col cols="12">
                <v-card class="project-decription">
                  <!-- Project description -->
                  <v-row class="mb-3 mb-md-6">
                    <v-col cols="12">
                      <h4 class="text-body-1 text-md-h5 text-xl-h4">
                        {{ project.description }}
                      </h4>
                    </v-col>
                  </v-row>
                  <!-- View the Work -->
                  <v-row class="mb-3 mb-md-6">
                    <v-col cols="12">
                      <h5 class="text-primary text-h6 text-md-h5">
                        View the Work
                      </h5>
                    </v-col>
                    <v-col
                      cols="12"
                      class="d-flex"
                      :class="smAndDown ? 'flex-column' : ''"
                    >
                      <v-card v-for="(link, id) in project.links" :key="id">
                        <v-card
                          :disabled="isUrlUndefined(link.path)"
                          @click.stop="
                            navigateTo(
                              `${link.path}`,
                              isExternalLink(link.target)
                                ? {
                                    external: true,
                                    open: {
                                      target: '_blank',
                                    },
                                  }
                                : undefined
                            )
                          "
                          class="home-portfolio-view-work-button pt-1 pb-3 pl-3 pr-12 mr-0 mr-md-9 mr-lg-9 mb-3"
                        >
                          <div>
                            <h6 class="text-body-1 text-md-h6">
                              {{ link.title }}
                            </h6>
                          </div>
                          <div>
                            <span class="mr-3 text-body-2">{{
                              isUrlUndefined(link.path)
                                ? "...currently down"
                                : `Visit page`
                            }}</span>
                            <span>
                              <v-icon
                                v-if="!isUrlUndefined(link.path)"
                                class="justify-end text-tertiary"
                                size="x-small"
                                >mdi-arrow-top-right</v-icon
                              >
                            </span>
                          </div>
                        </v-card>
                      </v-card>
                    </v-col>
                  </v-row>
                  <!-- Behind the Work -->
                  <v-row>
                    <v-col cols="12">
                      <h5 class="text-primary text-h6 text-md-h5">
                        Unwrap the Work
                      </h5>
                    </v-col>
                    <v-col cols="12">
                      <div
                        width="100%"
                        class="content-bullets"
                        @mouseover.capture.passive="
                          expandPortfolioContentBullets = true
                        "
                        @mouseout.passive="
                          expandPortfolioContentBullets = false
                        "
                      >
                        <v-card
                          v-for="(bullet, id) in project.bullets"
                          :key="id"
                          rounded="0"
                          block
                          size="x-large"
                          class="home-portfolio-nav-button text-body-1 d-flex text-lg-h6 pt-2 pb-4 mb-2"
                          :class="lgAndUp ? '' : 'flex-column'"
                        >
                          <v-card
                            class="bullet-title d-flex"
                            :class="
                              expandPortfolioContentBullets
                                ? 'align-center'
                                : ''
                            "
                          >
                            <span>
                              <v-icon
                                class="justify-start text-secondary"
                                size="x-small"
                                v-show="!expandPortfolioContentBullets"
                                >mdi-eye-outline</v-icon
                              >
                            </span>
                            <h6 class="text-body-1 text-md-h6 px-3 flex-grow-1">
                              {{ bullet.title }}
                            </h6>
                          </v-card>
                          <v-card
                            v-show="expandPortfolioContentBullets"
                            class="bullet-description pl-6 pl-md-9 pr-0 pt-6 pa-lg-12"
                          >
                            <p>
                              {{ bullet.description }}
                            </p>
                          </v-card>
                        </v-card>
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>


<style scoped lang="scss">
/* 
Styles are defined within pages/index.vue 
or assets/css/default.scs
*/
</style>