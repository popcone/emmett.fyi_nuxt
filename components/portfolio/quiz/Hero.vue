<script lang="ts" setup>
////
// Imports
import { useDisplay } from "vuetify";
import { ref, inject } from "vue";
import { quizInjectionKey } from "~/composables/utils/quizInjectionKey";
import { useQuizStore } from "~/store/quiz";

// Display
const { name: displayName } = useDisplay();
let currentDisplaySize = ref(displayName);

// Styles & Classes
const { classes, styles } = useQuizStore();

// Props Injection
const { translations, quiz, imgBase } = inject(quizInjectionKey);

const brand = quiz.meta.slug;
const logo = quiz.meta.logo;

const calculateHeroHeight = computed(() => {
  const sizes = {
    xs: 250,
    sm: 289,
    md: 289,
    lg: 317,
    xl: 317,
    xxl: 317,
  };
  return sizes[currentDisplaySize.value];
});

const calculateLogoWidth = computed(() => {
  const logoWidth = 315;
  const displaySize = currentDisplaySize.value;
  return displaySize === "xs"
    ? logoWidth * 0.5
    : displaySize === "sm"
    ? logoWidth * 0.75
    : logoWidth;
});

////
</script>

<template>
  <v-container id="quiz-hero" class="pa-0" fluid>
    <v-row>
      <v-col>
        <v-img
          :src="`${imgBase}/quiz/heros/${brand}/hero-${currentDisplaySize}.jpg`"
          cover
          max-height="317"
          :min-height="calculateHeroHeight"
        >
          <v-container class="fill-height pa-0" :class="classes.maxWidth">
            <v-card :width="960">
              <v-row>
                <v-col cols="6" class="text-center">
                  <div :class="classes.logoClass" class="ma-0">
                    <v-img
                      :src="`${imgBase}/quiz/logos/${brand}/${logo.src}`"
                      :max-width="calculateLogoWidth"
                      :aspect-ratio="logo.aspect_ratio"
                      cover
                    >
                    </v-img>
                  </div>
                  <div :class="classes.logoClass">
                    <h6
                      class="text-center text-caption text-md-body-1 text-uppercase"
                    >
                      {{ translations.find_your_solution }}
                    </h6>
                  </div>
                </v-col>
                <v-col cols="6"></v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.maxWidth {
  max-width: 960px;
}
</style>
