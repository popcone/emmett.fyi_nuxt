<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-img
          :src="
            require('@/assets/heros/hero-' +
              this.$vuetify.breakpoint.name +
              '.jpg')
          "
          :min-height="heroHeight"
          class="d-flex align-center"
        >
          <div>
            <v-container class="maxWidth">
              <v-card color="transparent">
                <v-row>
                  <v-col cols="6">
                    <div class="d-flex justify-center mt-n8 mt-sm-n4">
                      <v-img
                        :src="require('@/assets/logos/logo-xbss.png')"
                        contain
                        :max-width="maxLogo"
                      >
                      </v-img>
                    </div>
                    <div>
                      <h6
                        class="
                          text-center text-caption text-md-body-1 text-uppercase
                        "
                      >
                        {{ translate.findSolution }}
                      </h6>
                    </div>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
              </v-card>
            </v-container>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import translate from "../data/translation.json";

export default {
  name: "HeroSection",
  components: {},
  props: {
    translate: {
      default: 
      function () {
        return translate[this.$route.name];
      }
    },
  },
  data() {
    return {};
  },
  computed: {
    heroHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 250;
        case "sm":
          return 289;
        case "md":
          return 289;
        case "lg":
          return 317;
        case "xl":
          return 317;
        default:
          return 317;
      }
    },
    maxLogo() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 315*.50;
        case "sm":
          return 315*.75;
        default:
          return 315;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
