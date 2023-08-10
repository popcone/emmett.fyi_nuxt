<template>
  <div id="results">
    <v-container
          style="max-width: 100%" v-if="!hide"
        >
          <!--  RESULTS || RESULTS || RESULTS -->
          <!-- Results logo -->
          <v-row justify="center" class="mt-3 mt-sm-6">
            <v-col cols="10" sm="3" md="3">
              <v-img
                class="mx-auto"
                :src="
                require('@/assets/logos/logo-xbss.png')"
                :max-width="breakpointLogoLarge"
                contain
                eager
              ></v-img>
            </v-col>
          </v-row>

          <!-- Your Personalized Solution  -->
          <v-row cols="12" class="mt-0 px-6 px-md-0 align-center">
            <v-col class="text-center">
              <h1
                class="font-weight-bold text-h3 text-sm-h2"
                v-html="translate.yourSolution"
              ></h1>
              <h4
                v-show="$vuetify.breakpoint.smAndUp"
                v-html="translate.moneyBack"
                class="mt-2 mt-sm-3"
              ></h4>
            </v-col>
          </v-row>

          <!-- Health and Fitness Goals -->
          <v-row
            class="mt-12 align-center justify-center bg-health-and-fitness py-12 black"
          ><v-col>
            
              <v-row class="px-6 px-md-0 justify-center text-center py-3 py-md-6">
                <v-col>
                  <h4
                    v-html="translate.healthFitness"
                    class="white--text"
                  ></h4>
                  <h2
                    class="mt-2 white--text text-h3 text-sm-h2 font-weight-bold"
                    v-html="goal"
                  ></h2>
                </v-col>
              </v-row>
          </v-col>
          </v-row>

          <!-- Packs -->
          <v-row class="py-6 py-md-12 accent" >
            <v-col cols="12" class="px-6 px-md-0 text-center">
              <h4
                v-html="translate.recommendPack"
              ></h4>

              <h2
                class="font-weight-bold mt-2 mt-sm-3 text-h3 text-sm-h2 text-center"
                v-html="pack.title"
              ></h2>
            </v-col>
            <v-col cols="12" class="px-3 px-md-0 d-flex justify-center">
              <v-card
                class="pa-6 pa-md-12"
                :ripple="false"
                color="transparent"
                flat
                tile
                target="_blank"
                link>
                <a :href="pack.url + referral" target="_blank">
                <v-img
                  :src="require('@/assets/packs/' + pack.image)"
                  eager
                  contain
                  max-height="600"
                  max-width="600"
                ></v-img>
                </a>
              </v-card>
            </v-col>

            <v-col cols="12" class="text-center">
              <v-btn
                :href="pack.url + referral"
                target="_blank"
                class="px-9 px-sm-12 my-3"
                large
                v-html="translate.shopNow"
                rounded
                depressed
                color="primary"
              ></v-btn>
            </v-col>
          </v-row>

          <!-- Components -->
          <v-row class="mt-12 px-6 px-md-0 justify-center text-center">
            <v-col>
              <h2
                class="font-weight-bold text-h3 text-sm-h2"
                v-html="translate.whatSolution"
              ></h2>
            </v-col>
          </v-row>

          <v-row
            cols="12"
            class="mt-3 mt-md-6 mb-6 mb-md-12 px-3 px-md-0 maxWidth justify-center mx-auto"
          >
            <v-col
              v-for="(component, id) in pack.components"
              :key="id"
              sm="10"
              class="align-center"
            >
              <v-card class="pa-9 pa-md-12 v-card-comp" flat tile outlined>
                <v-row cols="12" class="d-flex align-center">
                  <v-col xs="12" sm="5" class="pa-6 bg-component">
                    <v-img
                      :src="require('@/assets/components/' + components[component].image)"
                      contain
                      eager
                    ></v-img>
                  </v-col>
                  <v-col xs="12" sm="7" class="justify-center">
                    <h3
                      class="text-break pt-3 pt-sm-0 text-center px-3"
                      v-html="components[component].title"
                    ></h3>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pt-0 pt-sm-6 pb-0 px-0">
                    <p class="text-body-1 text-break" v-html="components[component].description"></p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <div div class="py-12 primary justify-center">
            <v-row class="maxWidth mx-auto d-flex justify-center" cols="12">
              <v-col cols="12" sm="4" class="d-flex justify-center">
                <v-btn
                  :href="translate.learnMoreURL  + referral"
                  target="_blank"
                  class="px-12"
                  large
                  v-html="translate.learnMore"
                  rounded
                  dark
                  outlined
                ></v-btn>
              </v-col>

              <v-col cols="12" sm="4" class="d-flex justify-center">
                <v-btn
                  href="#"
                  @click="restart"
                  class="px-12 justify-center"
                  large
                  v-html="translate.retakeQuiz"
                  rounded
                  dark
                  outlined
                ></v-btn>
              </v-col>
            </v-row>
          </div>
    </v-container>
  </div>
</template>

<script>
import translate from "@/data/translation.json";
import components from "@/data/components.json";

export default {
  name: "ResultsPage",
  components: {},
  props: {
    goal: "",
    pack: {},
    translate: {
      default: 
      function () {
        return translate[this.$route.name];
      }
    },
    referral: {
      default: function() {
        var str = window.location.href;
        var objURL = {};
        str.replace(
          new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
          function( $0, $1, $2, $3 ){
              objURL[ $1 ] = $3;
          }
        );
        switch (objURL.referringRepID) {
          case undefined:
            return '';
          case '':
            return '';
          default:
            return '?referringRepID=' + objURL.referringRepID;
        }
      }
    }
  },
  data() {
    return {
      hide: false,
    };
  },
  computed: {
    breakpointLogoLarge() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "225";
        case "smAndDown":
          return "250";
        default:
          return "300px";
      }
    },
    components() {
      const componentsByLocale = components[this.$route.name]
      // const componentsByLocaleArray = Object.values(componentsByLocale)
      // const comp = componentsByLocaleArray.filter(el => el.id === "xbss_bod")
      const comp = componentsByLocale
      return comp
    }
  },
  methods: {
    restart: () => { window.location.reload() }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg-health-and-fitness {
  background: rgb(39,39,39);
  background: linear-gradient(43deg, rgba(39,39,39,1) 0%, rgba(21,21,21,1) 70%, rgba(0,0,0,1) 100%);
}
.bg-component {
  background: rgb(241,241,241);
  background: linear-gradient(135deg, rgba(241,241,241,1) 0%, rgba(255,255,255,1) 80%);
  // border: solid 1px #F1F1F1;
}
</style>
