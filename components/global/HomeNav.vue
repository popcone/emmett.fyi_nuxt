<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { usePortfolioContentStore } from "~/store/global/homePortfolioContent";

// STATE MANAGEMENT
const PortfolioContent = usePortfolioContentStore();
const { projects } = PortfolioContent;
const { currentProject, showPortfolio } = storeToRefs(PortfolioContent);
</script>

<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="pa-0 d-flex justify-center">
          <v-slide-group
            v-model="currentProject"
            selected-class="home-nav-button-selected"
            center-active="true"
            mandatory="true"
          >
            <v-slide-group-item
              v-for="(project, index) of projects"
              :key="index"
              v-slot="{ toggle, selectedClass }"
            >
              <v-card
                class="home-nav-button pt-0 pb-3 px-3 mr-4 mr-md-6 text-body-2 text-md-body-1"
                :class="[selectedClass]"
                @click="
                  toggle();
                  showPortfolio === false ? true : false;
                "
              >
                <p class="text-body-2 text-body-lg-1">
                  {{ project.title.short }}
                </p>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<style scoped lang="scss">
/* 
Styles ared defined within pages/index.vue  
or assets/xss/default.scs
*/
</style>~/store/global/homePortfolioContent