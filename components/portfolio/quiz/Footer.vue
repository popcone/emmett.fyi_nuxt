<script setup lang="ts">
////
// Imports
import { inject } from "vue";
import { quizInjectionKey } from "~/composables/utils/quizInjectionKey";

// Props Injection
const { translations } = inject(quizInjectionKey);

////
</script>

<template>
  <div id="quiz-footer">
    <v-container class="py-12">
      <p class="text-caption text-body-2">
        {{ translations.disclaimer }} &copy; {{ new Date().getFullYear() }}
        {{ translations.footer }}
      </p>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
</style>