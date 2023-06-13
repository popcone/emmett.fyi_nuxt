<script lang="ts" setup>
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()

const theme = mainStore.theme
const toggleTheme = mainStore.toggleTheme

</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar>
        <v-row>
          <v-col cols="2">
            <v-toolbar-title class="logo">Emmett</v-toolbar-title>
          </v-col>
          <v-col cols="8">
            <div class="d-flex justify-end">
              <v-btn x-large>
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn x-large>
                <v-icon>mdi-toggle-switch-off</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="2">
          </v-col>
        </v-row>
      </v-app-bar>

      <v-main>
        <slot></slot>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.logo::after {
  content: 'fyi';
}
</style>