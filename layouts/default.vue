<script lang="ts" setup>
import { useMainStore } from "~/store/main";
import { useDisplay } from "vuetify";

// STATE MANAGEMENT
const mainStore = useMainStore();

const theme = mainStore.theme;
const toggleTheme = mainStore.toggleTheme;

// DISPLAY
const { xxl } = useDisplay();
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar id="appbar" class="px-4" density="comfortable">
        <v-row>
          <v-col cols="6" lg="4" xxl="2">
            <h1 class="logo text-primary">emmett.fyi</h1>
          </v-col>
          <v-col cols="6" lg="8" class="d-flex justify-end">
            <div>
              <v-btn
                href="https://github.com/popcone"
                target="blank"
                aria-label="Github Profile"
                prepend-icon="mdi-github"
                density="compact"
                class="text-capitalize text-body-2"
                variant="plain"
              >
                Github
              </v-btn>
              <!-- <v-btn>
                <v-icon>mdi-toggle-switch-off</v-icon>
              </v-btn> -->
            </div>
          </v-col>
          <v-col v-show="xxl" cols="2"></v-col>
        </v-row>
      </v-app-bar>

      <v-main>
        <slot></slot>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
/* CSS */
</style>