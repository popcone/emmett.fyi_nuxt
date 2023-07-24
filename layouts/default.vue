<script lang="ts" setup>
import { watch, ref } from "vue";
import { useDisplay, useTheme } from "vuetify";

// THEME
const theme = useTheme();
const toggleTheme = (value: string) => {
  theme.global.name.value = value;
};

const themeValue: Ref<string> = ref(theme.global.name.value);

watch(
  () => themeValue.value,
  () => {
    toggleTheme(themeValue.value);
  }
);

// DISPLAY
const { xxl } = useDisplay();
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar id="appbar" class="px-4" density="comfortable">
        <v-row>
          <v-col v-show="xxl" cols="1"></v-col>
          <v-col cols="6" xxl="5">
            <h1 class="logo">emmett.fyi</h1>
          </v-col>
          <v-col cols="6" xxl="5" class="d-flex justify-end">
            <div>
              <v-btn
                href="https://github.com/popcone/emmett.fyi_nuxt"
                target="blank"
                aria-label="Github Profile"
                prepend-icon="mdi-github"
                density="compact"
                class="text-capitalize text-body-2"
                variant="plain"
              >
                Github
              </v-btn>
            </div>
            <div>
              <v-switch
                prepend-icon="mdi-theme-light-dark "
                density="compact"
                flat
                true-value="light"
                false-value="dark"
                v-model="themeValue"
                class="bg-red"
              ></v-switch>
            </div>
          </v-col>
          <v-col v-show="xxl" cols="1"></v-col>
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