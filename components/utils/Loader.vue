<script lang="ts" setup>
////
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
      class="align-center justify-center bg-primary"
      persistent
    >
      <v-progress-linear stream height="5"> </v-progress-linear>
      <p>{{ message }}</p>
    </v-overlay>
  </div>
</template>

<style lang="scss" scoped>
.v-overlay__scrim {
  opacity: 1;
}
</style>
