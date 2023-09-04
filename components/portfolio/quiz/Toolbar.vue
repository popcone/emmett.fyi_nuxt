<script lang="ts" setup>
////
// Imports
import { inject, computed } from "vue";
import { useDisplay } from "vuetify";
import { quizInjectionKey } from "~/composables/utils/quizInjectionKey";

// Props Injection
const { translations, imgBase, brand } = inject(quizInjectionKey);

const toolbar = translations.toolbar;

const route = useRoute();
const locale = ref(route.query.locale);

const router = useRouter();

// const changeLocale = (localeValue: string) => {
//   router.push({ query: { locale: localeValue } });
// };

// watch(
//   () => locale,
//   (locale) => {
//     router.push({ query: { locale: locale.value } });
//   }
// );

// console.log(locale.value);

// Display
const { name: displayName } = useDisplay();
let currentDisplaySize = ref(displayName);

// Resize Logo based on display size
const calculateLogoWidth = computed(() => {
  const logoWidth = 196;
  return currentDisplaySize.value === "xs" ? logoWidth * 0.9 : logoWidth;
});

////
</script>

<template>
  <div id="quiz-toolbar">
    <v-toolbar
      class="px-xs-12 px-sm-3 px-md-6 px-lg-12 bg-primary"
      color="primary"
      height="50"
    >
      <div class="ml-3 ml-sm-0">
        <v-img
          :src="`${imgBase}/quiz/logos/_global/logo-tbb-white-small.png`"
          :max-width="calculateLogoWidth"
          :width="calculateLogoWidth"
          contain
        ></v-img>
      </div>
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
                  <v-list-item-subtitle class="mb-2">{{
                    item.title
                  }}</v-list-item-subtitle>
                  <v-row>
                    <v-col
                      cols="6"
                      v-for="(link, i) in item.links"
                      :key="link[i]"
                      class="d-flex"
                    >
                      <v-img
                        :src="`${imgBase}/quiz/icons/_global/flag-${link.slug.slice(
                          -2
                        )}.png`"
                        max-height="27"
                        max-width="27"
                        eager
                      ></v-img>
                      <NuxtLink
                        :to="{
                          query: { locale: link.slug },
                        }"
                        class="ml-2"
                        >{{ link.title }}</NuxtLink
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

<style scoped lang="scss">
/* */
</style>
