<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";
import { useGlobalStore } from "~/store/global/global";
import { useHomeNavStore } from "~/store/global/homeNav";
import { useIsUrlUndefined as isUrlUndefined } from "~/composables/useIsUrlUndefined";

// State Management
const HomeNavStore = useHomeNavStore();
const { currentProject } = storeToRefs(HomeNavStore);
const { projects, intro } = HomeNavStore;

const { imgBase } = useGlobalStore();

let project = computed(() => projects[currentProject.value]);
const projectUndefined = computed(
  () => project.value === null || project.value === undefined
);

// Watch for updates to currentProject
HomeNavStore.$subscribe(async (mutation, state) => {
  currentProject.value = await HomeNavStore.currentProject;
  await setTimeout(() => {
    project.value = projects[currentProject.value];
  }, 150);
});

// Display
const { mdAndDown, mdAndUp, lgAndUp } = useDisplay();

const expandPortfolioContentBullets = ref(false);
</script>

<template>
  <v-container class="d-flex justify-center" fluid>
    <v-card v-if="projectUndefined" width="100vw" class="mt-6">
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
              {{ project.title }}
            </h4>
          </div>
          <div class="d-flex">
            <v-btn
              :href="project.links.production"
              size="x-small"
              density="dense"
              variant="plain"
              class="pa-0 text-primary text-capitalize text-body-1"
              >Production</v-btn
            >
            <v-divider class="mx-4" vertical></v-divider>
            <v-btn
              v-if="!isUrlUndefined(project.links.source)"
              :href="project.links.source"
              class="pa-0 text-primary text-capitalize text-body-1"
              density="dense"
              variant="plain"
              target="_blank"
              size="x-small"
            >
              <span>Source Code</span>
              <span>
                <v-icon class="justify-end text-tertiary ml-2" size="small"
                  >mdi-arrow-top-right</v-icon
                >
              </span>
            </v-btn>
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
                  <v-row class="mb-3 mb-md-6">
                    <v-col cols="12">
                      <h4 class="text-body-1 text-md-h5 text-xl-h4">
                        {{ project.description }}
                      </h4>
                    </v-col>
                  </v-row>
                  <v-row>
                    <!-- Behind the Work -->
                    <v-col cols="12">
                      <h5 class="text-primary mb-3">Behind the Work</h5>
                      <div
                        width="100%"
                        class="content-bullets"
                        @mouseover.capture="
                          expandPortfolioContentBullets = true
                        "
                        @mouseout="expandPortfolioContentBullets = false"
                      >
                        <v-card
                          v-for="(bullet, id) in project.bullets"
                          :key="id"
                          @click.stop="
                            bullet.internal
                              ? navigateTo(bullet.url)
                              : navigateTo(bullet.url, {
                                  external: true,
                                })
                          "
                          @mouseover="$event.preventDefault()"
                          rounded="0"
                          block
                          size="x-large"
                          class="home-portfolio-nav-button text-body-1 d-flex text-lg-h6 pt-2 pb-4 mb-2"
                          :class="lgAndUp ? '' : 'flex-column'"
                        >
                          <v-card class="d-flex">
                            <span>
                              <v-icon
                                class="justify-start text-secondary"
                                size="x-small"
                                >mdi-eye-outline</v-icon
                              >
                            </span>
                            <h6 class="text-body-1 text-md-h6 px-3 flex-grow-1">
                              {{ bullet.title }}
                            </h6>
                            <!-- <span v-show="!expandPortfolioContentBullets">
                              <v-icon
                                class="justify-end text-tertiary"
                                size="x-small"
                                >mdi-arrow-bottom-right</v-icon
                              >
                            </span> -->
                          </v-card>
                          <v-fade-transition>
                            <v-card
                              v-show="expandPortfolioContentBullets"
                              class="pl-9 pt-9 pa-lg-12 bullets"
                            >
                              <p>
                                {{ bullet.description }}
                              </p>
                            </v-card>
                          </v-fade-transition>
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
or assets/xss/default.scs
*/
</style>