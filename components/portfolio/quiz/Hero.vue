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
        >
          <v-container class="fill-height pa-0" :class="classes.maxWidth">
            <v-card width="960">
              <v-row>
                <v-col cols="6">
                  <div :class="classes.logoClass">
                    <v-img
                      :src="`${imgBase}/quiz/logos/${brand}/${logo.src}`"
                      max-width="315"
                      width="315"
                      :aspect-ratio="logo.aspect_ratio"
                    >
                    </v-img>
                  </div>
                  <div :class="classes.logoClass">
                    <h6 class="text-md-body-1 text-uppercase">
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

<!-- <script>
import translations from "../data/translation.json";

export default {
  name: "HeroSection",
  components: {},
  props: {
    translations: {
      default: 
      function () {
        return translations[this.$route.name];
      }
    },
  },
  data() {
    return {};
  },
  computed: {
    heroHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 250;
        case "sm":
          return 289;
        case "md":
          return 289;
        case "lg":
          return 317;
        case "xl":
          return 317;
        default:
          return 317;
      }
    },
    maxLogo() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 315*.50;
        case "sm":
          return 315*.75;
        default:
          return 315;
      }
    },
  },
};
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.maxWidth {
  max-width: 960px;
}
</style>
