<script lang="ts" setup>
// IMPORTS
import { watch, ref, onMounted } from "vue";
import { useDisplay, useTheme } from "vuetify";

// TOGGLE THEME
const theme = useTheme();
const toggleTheme = (value: string) => {
  theme.global.name.value = value;
};

const themeValue: Ref<string> = ref(theme.global.name.value);

// watch for theme change
watch(
  () => themeValue.value,
  () => toggleTheme(themeValue.value)
);

// load theme from device
onMounted(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeValue.value = "dark";
  } else {
    themeValue.value = "light";
  }
});

// switch colors on select elements, based on theme
const switchColors = (darkColor: string, lightColor: string = ""): string => {
  return themeValue.value === "dark" ? darkColor : lightColor;
};

// DISPLAY
const { xxl } = useDisplay();
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar id="appbar" class="px-4" density="comfortable">
        <v-row>
          <v-col v-show="xxl" cols="1"></v-col>
          <!-- LOGO -->
          <v-col cols="6" xxl="5" class="d-flex justify-start align-center">
            <h1 class="logo">emmett.fyi</h1>
          </v-col>
          <!-- NAV BUTTONS -->
          <v-col cols="6" xxl="5" class="d-flex justify-end align-center">
            <div>
              <v-btn
                href="https://github.com/popcone/emmett.fyi_nuxt"
                target="blank"
                aria-label="Github Profile"
                prepend-icon="mdi-github"
                density="compact"
                class="text-capitalize text-body-2"
                variant="plain"
                :class="switchColors('text-primary')"
              >
                <span class="text-surface">Github</span>
              </v-btn>
            </div>
            <v-divider color="surface" vertical></v-divider>
            <div class="ml-4">
              <v-switch
                prepend-icon="mdi-theme-light-dark"
                density="compact"
                true-value="light"
                false-value="dark"
                v-model="themeValue"
                class="theme-switch d-inline d-flex"
                :class="switchColors('text-primary')"
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

<style lang="scss" scoped>
/* adjust spacing between theme switch and icon */
.theme-switch >>> .v-input__prepend {
  margin-inline-end: 8px;
}
</style>