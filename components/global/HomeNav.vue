<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useIndexStore } from "~/store/global/index";
import { indexInjectionKey } from "~/composables/utils/indexInjectionKey";

// Projects Data
const { projects } = inject(indexInjectionKey);

// STATE MANAGEMENT
const PortfolioContent = useIndexStore();
const { currentProject } = storeToRefs(PortfolioContent);
</script>

<template>
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
                togglePortfolio();
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
</template>


<style scoped lang="scss">
/* 
Styles ared defined within pages/index.vue  
or assets/css/default.scs
*/
</style>