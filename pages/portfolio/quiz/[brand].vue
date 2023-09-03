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

const colors = ref(quiz.meta.colors);

////
</script>

<template>
  <div v-if="validateBrand === false">
    <v-card>
      <Loader message="Redirecting..." />
    </v-card>
  </div>
  <div :id="`quiz-wrapper-${brand}`" class="bg-white" v-else>
    <PortfolioQuizToolbar />
    <PortfolioQuizMain />
    <PortfolioQuizFooter />
  </div>
</template>
<style lang="scss" scoped>
/*  */
@use "~/assets/css/quiz";
@use "./assets/css/settings";

/*  */
div[id^="quiz-"] {
  :deep(.bg-primary) {
    background-color: v-bind("colors.primary") !important;
  }

  :deep(.bg-secondary) {
    background-color: v-bind("colors.secondary") !important;
  }

  :deep(.bg-tertiary) {
    background-color: v-bind("colors.tertiary") !important;
  }

  :deep(.bg-accent) {
    background-color: v-bind("colors.accent") !important;
  }

  :deep(.text-primary) {
    color: v-bind("colors.primary") !important;
  }

  :deep(.text-secondary) {
    color: v-bind("colors.secondary") !important;
  }

  :deep(.text-tertiary) {
    color: v-bind("colors.tertiary") !important;
  }

  :deep(.text-accent) {
    color: v-bind("colors.accent") !important;
  }

  :deep(.text-error) {
    color: v-bind("colors.error") !important;
  }

  :deep(.text-info) {
    color: v-bind("colors.info") !important;
  }

  :deep(.text-success) {
    color: v-bind("colors.success") !important;
  }

  :deep(.text-warning) {
    color: v-bind("colors.warning") !important;
  }

  :deep(.text-black) {
    color: v-bind("colors.black") !important;
  }

  :deep(.text-white) {
    color: v-bind("colors.white") !important;
  }

  :deep(.text-grey) {
    color: v-bind("colors.grey") !important;
  }
}
/*  */
</style>