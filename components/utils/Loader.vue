<script lang="ts" setup>
////
import { ref } from "vue";
// Props
const props = defineProps({
  message: { type: String, required: true },
});

const overlay = ref(true);

////
</script>

<template>
  <div id="loader" class="text-center">
    <v-overlay
      :model-value="overlay"
      class="text-center align-center justify-center"
      persistent
      scrim="background"
    >
      <v-progress-circular
        indeterminate
        size="64"
        class="mb-2"
      ></v-progress-circular>
      <p class="font-italic">{{ message }}</p>
    </v-overlay>
  </div>
</template>

<style lang="scss">
.v-overlay__scrim {
  opacity: 1 !important;
}
</style>
