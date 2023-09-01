<script lang="ts" setup>
////
// Imports
import { inject } from "vue";
import { quizInjectionKey } from "~/composables/utils/quizInjectionKey";

// Props Injection
const { translations, imgBase } = inject(quizInjectionKey);

const toolbar = translations.toolbar;

////
</script>

<template>
  <div id="quiz-toolbar">
    <v-toolbar
      class="px-xs-12 px-sm-3 px-md-6 px-lg-12"
      color="primary"
      height="50"
    >
      <v-img
        :src="`${imgBase}/quiz/logos/_global/logo-tbb-white-small.png`"
        max-width="196"
      ></v-img>
      <div class="flex-grow-1"></div>
      <div>
        <v-menu
          open-on-click
          :offset="[8, 0]"
          open-delay="100"
          width="600"
          transition="fade-transition"
        >
          <template v-slot:activator="{ props }">
            <div>
              <v-btn
                v-bind="props"
                variant="plain"
                prepend-icon="mdi-earth"
                append-icon="mdi-chevron-down"
                class="font-weight-medium text-caption text-md-body-2 white--text"
                >{{ toolbar.menu.display }}
              </v-btn>
            </div>
          </template>
          <v-card variant="text">
            <v-list>
              <v-list-item>
                <v-list-item-title class="text-subtitle-2 text-md-subtitle-1">{{
                  toolbar.menu.title
                }}</v-list-item-title>
                <v-divider class="my-3"></v-divider>
                <div v-for="(item, index) in toolbar.menu.locale" :key="index">
                  <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
                  <v-row>
                    <v-col
                      cols="6"
                      v-for="(link, i) in item.links"
                      :key="link[i]"
                    >
                      <v-img
                        :src="`${imgBase}/quiz/icons/_global/flag-${link.slug.slice(
                          -2
                        )}.png`"
                        max-height="27"
                        position="left"
                        class="pl-9"
                        eager
                        contain
                        >{{ link.title }}</v-img
                      >
                    </v-col>
                  </v-row>
                </div>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-card-text>
              <v-spacer></v-spacer>
              <v-btn>{{ toolbar.menu.exit }}</v-btn>
            </v-card-text>
          </v-card>
        </v-menu>
      </div>
    </v-toolbar>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .resize-tbb-logo {
//   max-width: 188px !important;
//   max-height: 15px !important;
// }

// .toolbar {
//   border-bottom: solid 1px #fff;
// }
// .v-toolbar__content,
// .v-toolbar__extension {
//   padding: 0px !important;
// }
</style>
