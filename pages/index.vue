<script lang="ts" setup>
import { useIndexStore } from "~/store/index";

// STATE MANAGEMENT
const indexStore = useIndexStore();
const title = indexStore.title;
</script>

<template>
  <div id="index">
    <v-container id="header" fluid>
      <v-row>
        <v-col class="title-container">
          <h1 class="title" v-for="n of 3" :key="n">
            <span v-for="word in title" :key="word" class="word">{{
              word
            }}</span>
          </h1>
        </v-col>
        <v-divider class="my-4"></v-divider>
      </v-row>
    </v-container>
  </div>
</template>
  