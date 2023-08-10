<script lang="ts" setup>
const { data } = await useFetch("/api/quiz/toolbar");
const copy = data.value["en_us"];
let menu = ref(false);
</script>

<template>
  <v-layout id="quiz-toolbar">
    <v-toolbar class="px-xs-12 px-sm-3 px-md-6 px-lg-12" color="primary">
      <v-img src="/logos/logo-tbb-white-small.png" max-width="196"></v-img>
      <div class="flex-grow-1"></div>
      <div>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-row>
              <v-col v-bind="props">
                <v-icon class="white--text"> mdi-earth </v-icon>
                <span
                  class="font-weight-medium text-caption text-md-body-2 mx-2 white--text"
                  >{{ copy.menu.display }}</span
                >
                <v-icon size="medium" class="white--text">
                  mdi-chevron-down
                </v-icon>
              </v-col>
            </v-row>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-card>
                  <v-list-item-title
                    class="text-subtitle-2 text-md-subtitle-1"
                    >{{ copy.menu.title }}</v-list-item-title
                  >
                  <v-divider class="my-3"></v-divider>
                  <v-list-item-subtitle>{{
                    copy.menu.locale.na.title
                  }}</v-list-item-subtitle>
                  <v-card>
                    <v-row>
                      <v-col
                        cols="6"
                        v-for="(link, i) in copy.menu.locale.na.links"
                        :key="link[i]"
                      >
                        <!-- <v-img
                          :src="
                            require('@/assets/icons/flag-' +
                              link.slug.slice(-2) +
                              '.png')
                          "
                          max-height="27"
                          position="left"
                          class="pl-9"
                          eager
                          contain
                        >
                          <router-link
                            :to="{
                              name: link.slug,
                            }"
                            class="text-body-2 text-md-body-1"
                            >{{ link.title }}</router-link
                          >
                        </v-img> -->
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-list-item-subtitle class="mt-3">{{
                    copy.menu.locale.eu.title
                  }}</v-list-item-subtitle>
                  <v-card>
                    <v-row>
                      <v-col
                        cols="6"
                        v-for="(link, i) in copy.menu.locale.eu.links"
                        :key="link[i]"
                      >
                        <!-- <v-img
                          :src="
                            require('@/assets/icons/flag-' +
                              link.slug.slice(-2) +
                              '.png')
                          "
                          max-height="27"
                          position="left"
                          class="pl-9"
                          eager
                          contain
                        >
                          <router-link
                            :to="{
                              name: link.slug,
                            }"
                            class="text-body-2 text-md-body-1"
                            >{{ link.title }}</router-link
                          >
                        </v-img> -->
                      </v-col>
                    </v-row>
                  </v-card>
                </v-card>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black" text @click="menu = false" :ripple="false">{{
                copy.menu.exit
              }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-toolbar>
  </v-layout>
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
