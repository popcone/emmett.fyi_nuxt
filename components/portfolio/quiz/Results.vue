<script setup lang="ts">
////
// Imports
import { computed, inject } from "vue";
import { useDisplay } from "vuetify";
import { quizInjectionKey } from "~/composables/utils/quizInjectionKey";
import { useQuizStore } from "~/store/quiz";

// Props
const props = defineProps({
  score: { type: Object, required: true },
});

// Props Injection
const { translations, quiz, imgBase } = inject(quizInjectionKey);

const brand = quiz.meta.slug;
const logo = quiz.meta.logo;

// Packs
const packs = quiz.packs;
const packComponents = quiz.components;

// Pack
let pack = computed(() => {
  let filterPack = packs.filter((pack) =>
    pack.score.includes(props.score.total)
  );
  return filterPack[0];
});

// Styles & Classes
const { styles } = useQuizStore();

// Display
const { name: displayName, smAndUp } = useDisplay();
let currentDisplaySize = ref(displayName);
console.log(useDisplay());

// Calculate Logo Width
const calculateLogoWidth = computed(() => {
  const logoWidth = 300;
  const displaySize = currentDisplaySize.value;

  return displaySize === "xs"
    ? logoWidth * 0.8
    : displaySize === "sm"
    ? logoWidth * 0.65
    : logoWidth;
});

////
</script>

<template>
  <div id="results">
    <v-container fluid class="px-0">
      <!-- // Logo -->
      <v-row class="py-3 py-sm-9">
        <v-col cols="12">
          <v-img
            class="mx-auto"
            :src="`${imgBase}/quiz/logos/${brand}/${logo.src}`"
            :max-width="calculateLogoWidth"
            :aspect-ratio="logo.aspect_ratio"
            contain
          ></v-img>
        </v-col>
        <!-- // Your Personalized Solution -->
        <v-col
          class="text-center mt-0 px-6 px-md-0 py-0 align-center"
          cols="12"
        >
          <h4
            class="font-weight-bold text-h5 text-md-h4"
            v-html="translations.what_solution"
          ></h4>
          <h6 v-show="smAndUp" v-html="translations.money_back_guarantee"></h6>
        </v-col>
      </v-row>

      <!-- // Health and Fitness Goals -->
      <v-row class="py-12 bg-health-and-fitness"
        ><v-col>
          <v-row class="text-center">
            <v-col>
              <h6
                v-html="translations.health_fitness"
                class="text-white text-body-1 text-md-h6"
              ></h6>
              <h4
                class="text-white font-weight-bold text-h5 text-md-h4"
                v-html="score.goal || 'Lose Weight'"
              ></h4>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- // Packs -->
      <v-row class="py-6 py-md-12 bg-accent">
        <v-col cols="12" class="px-6 px-md-0 text-center">
          <h6
            v-html="translations.recommend_pack"
            class="text-body-1 text-md-h6"
          ></h6>

          <h4
            class="font-weight-bold mt-2 mt-sm-3 text-center text-h5 text-md-h4"
            v-html="pack.title"
          ></h4>
        </v-col>
        <v-col cols="12" class="px-3 px-md-0 d-flex justify-center">
          <v-card
            class="pa-6 pa-md-12 text-center"
            :ripple="false"
            color="transparent"
            target="_blank"
            link
            :href="pack.url"
            variant="text"
            width="100%"
          >
            <v-img
              :src="`${imgBase}/quiz/packs/${brand}/${pack.image}`"
              max-width="600"
              max-height="600"
              class="mx-auto"
              cover
              eager
            ></v-img>
          </v-card>
        </v-col>

        <v-col cols="12" class="text-center">
          <v-btn
            :href="pack.url"
            class="px-9 px-sm-12"
            target="_blank"
            v-html="translations.shop_now"
            color="primary"
            large
            rounded
          ></v-btn>
        </v-col>
      </v-row>

      <!-- // Components Title -->
      <v-row class="mt-12 px-6 px-md-0 justify-center text-center">
        <v-col>
          <h3
            class="font-weight-bold text-h4 text-md-h3"
            v-html="translations.what_solution"
          ></h3>
        </v-col>
      </v-row>

      <!-- // Components -->
      <v-container :style="styles.maxWidth" class="py-12">
        <v-card
          v-for="(component, id) in pack.components"
          :key="id"
          class="pa-9 pa-md-12 mb-9"
          variant="outlined"
          color="grey-lighten-2"
        >
          <v-row class="d-flex align-center">
            <v-col cols="12" sm="5" class="pa-6 bg-component">
              <v-img
                :src="`${imgBase}/quiz/components/${brand}/${packComponents[component].image}`"
                contain
              ></v-img>
            </v-col>
            <v-col cols="12" sm="7">
              <h6
                class="text-break pt-3 pt-sm-0 px-3 text-center text-black font-weight-bold"
                v-html="packComponents[component].title"
              ></h6>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 pt-sm-6 pb-0 px-0">
              <p
                class="text-break text-black text-body-2 text-body-md-1"
                v-html="packComponents[component].description"
              ></p>
            </v-col>
          </v-row>
        </v-card>
      </v-container>

      <!-- // Learn More and Retake Quiz -->
      <v-container div class="py-12 bg-primary mx-0" fluid>
        <v-row class="mx-auto d-flex justify-center" :style="styles.maxWidth">
          <v-col cols="12" sm="4" class="d-flex justify-center">
            <v-btn
              :href="translations.learn_more_slug"
              target="_blank"
              class="px-12"
              large
              v-html="translations.learn_more"
              rounded
              variant="outlined"
            ></v-btn>
          </v-col>

          <v-col cols="12" sm="4" class="d-flex justify-center">
            <v-btn
              href="#"
              class="px-12"
              large
              v-html="translations.retake_quiz"
              rounded
              variant="outlined"
            ></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.bg-health-and-fitness {
  background: rgb(39, 39, 39);
  background: linear-gradient(
    43deg,
    rgba(39, 39, 39, 1) 0%,
    rgba(21, 21, 21, 1) 70%,
    rgba(0, 0, 0, 1) 100%
  );
}

.bg-component {
  background: rgb(241, 241, 241);
  background: linear-gradient(
    135deg,
    rgba(241, 241, 241, 1) 0%,
    rgba(255, 255, 255, 1) 80%
  );
}
</style>