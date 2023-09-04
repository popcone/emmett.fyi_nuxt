<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div id="error-page">
    <ClientOnly>
      <v-progress-linear
        bg-color="primary"
        color="background"
        indeterminate
        absolute
        location="top"
        height="5"
      ></v-progress-linear>
      <v-card height="100vh" class="d-flex">
        <v-row class="align-self-center text-center">
          <v-col cols="12" class="my-3">
            <h1 class="title">{{ error.statusCode }}</h1>
            <v-divider class="my-4"></v-divider>
            <h4 class="text-h6 text-md-h5">Error: {{ error.message }}</h4>
          </v-col>
          <v-col cols="12">
            <v-btn
              @click="handleError"
              size="large"
              class="text-capitalize text-body-2 px-6 mr-4"
              variant="text"
              :border="true"
              :rounded="0"
              >Take me home</v-btn
            >
          </v-col>
        </v-row>
      </v-card>
      <v-progress-linear
        bg-color="primary"
        color="background"
        indeterminate
        absolute
        location="bottom"
        reverse
        height="5"
      ></v-progress-linear>
    </ClientOnly>
  </div>
</template>

<style>
/*  */
</style>