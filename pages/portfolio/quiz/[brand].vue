<script lang="ts" setup>
////
// Imports
import { provide, onBeforeMount } from "vue";
import { quizInjectionKey } from "~/composables/utils/quizInjectionKey";

// Meta
definePageMeta({
  layout: "portfolio",
});

// Runtime Config
const runtimeConfig = useRuntimeConfig();
const imgBase = runtimeConfig.public.cdnImgBase;

// Page Routing
const route = useRoute();
const brand = route.params.brand;
const locale = route.query.locale;

const { data: fetchQuizBrands, pending: quizBrandsPending } = await useFetch(
  "/api/quiz/brands"
);
const brands = fetchQuizBrands.value;

const validateBrand = computed(() => {
  return brands.includes(brand);
});

onBeforeMount(() => {
  if (!validateBrand.value) {
    setTimeout(() => {
      navigateTo("/");
    }, 3000);
  }
});

// Data Fetching
const { data: fetchQuizTranslations, pending: quizTranslationsPending } =
  await useFetch(`/api/quiz/translations?locale=${locale}`);
const translations = await fetchQuizTranslations.value;

const { data: fetchQuiz, pending: quizPending } = await useFetch(
  `/api/quiz/quiz?brand=${brand}&locale=${locale}`
);
const quiz = await fetchQuiz.value;

// Props Injection
provide(quizInjectionKey, {
  brand,
  imgBase,
  quiz,
  translations,
});

////
</script>

<template>
  <div v-if="validateBrand === false">
    <v-card>
      <Loader message="Redirecting" />
    </v-card>
  </div>
  <div :id="`quiz-${brand}`" v-else>
    <PortfolioQuizToolbar />
    <PortfolioQuizMain />
    <PortfolioQuizFooter />
  </div>
</template>
<style>
/*  */
</style>