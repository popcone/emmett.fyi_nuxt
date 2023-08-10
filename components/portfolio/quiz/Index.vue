<template>
  <div id="quiz">
    <div v-show="questionIndex < questions.length">
      <PortfolioQuizHero />
      <v-row>
        <v-progress-linear
          :value="questionIndex * (100 / questions.length)"
          height="35"
          color="primary"
          background-color="secondary"
          class="text-body-2"
        >
          <span v-show="questionIndex > 0" class="text-body-2 white--text">
            {{ ((questionIndex / questions.length) * 100).toFixed(0) }}
            <sup>%&nbsp;</sup>
            <span v-html="translate.complete"></span>
          </span>
        </v-progress-linear>
      </v-row>
    </div>

    <div
      v-for="(question, id) in questions"
      :key="question[id]"
      justify="center"
    >
      <v-container v-show="id === questionIndex" class="maxWidth">
        <!-- QUESTIONS -->
        <v-row class="my-3 my-md-7 px-3 px-lg-6">
          <v-col>
            <h1
              class="text-center text-h3 text-md-h2"
              v-html="question.text"
            ></h1>
          </v-col>
        </v-row>

        <!-- RESPONSES -->
        <!-- NAME -->
        <v-item-group v-show="question.name == 'customerName'">
          <v-row>
            <v-col>
              <v-text-field
                v-model.trim="question.score"
                class="text-h4 text-sm-h3"
                color="primary"
                background-color="transparent"
                clearable
                autofocus
                filled
                :hint="question.hint"
                persistent-hint
                height="auto"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-item-group>
        <!-- GOAL-->
        <!-- v-if="question.name == 'goal'" -->
        <v-item-group
          v-model="question.score"
          :multiple="question.multiple"
          @click="console.log('works')"
        >
          <v-row>
            <v-col
              v-for="(response, id) in question.responses"
              :key="id"
              cols="12"
              md="6"
            >
              <v-item
                v-slot:default="{ active, toggle }"
                :value="response.value"
              >
                <v-card
                  :color="active ? 'success' : ''"
                  :class="vCardClass"
                  :height="responseTextHeight"
                  @click="
                    toggle();
                    itWorks(question.score, response, active);
                  "
                  tile
                  outlined
                >
                  <div :class="responseText" v-html="response.text"></div>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>

        <!-- PRODUCT -->
        <!-- <v-item-group v-else>
          <v-container>
            <v-row>
              <v-col
                v-for="(response, id) in question.responses"
                :key="id"
                cols="12"
                md="6"
              >
              <v-item
                  v-if="response.value == 0"
                  v-slot:default="{ active, toggle }"
                >
                  <v-card
                    :color="active ? 'success' : ''"
                    :class="vCardClass"
                    :height="responseTextHeight"
                    @click="toggle"
                    tile
                  outlined
                  >
                    <input
                      type="checkbox"
                      :id="'product-' + response.value"
                      :value="response.value"
                      v-model="product"
                      @change="clearProduct"
                      false-value
                      true-value="0"
                    />
                    <label
                      :for="'product-' + response.value"
                      :class="responseText"
                      v-ripple
                      :style="'height:' + responseTextHeight + 'px;'"
                      class="d-flex align-center"
                    >
                      <div
                        :class="responseText"
                        v-html="response.text"
                      ></div>
                    </label>
                  </v-card>
                </v-item>
                <v-item v-else v-slot:default="{ active, toggle }">
                  <v-card
                    :color="active ? 'success' : ''"
                    :class="vCardClass"
                    :height="responseTextHeight"
                    @click="toggle" tile class=""
                  outlined
                  >
                    <input
                      type="checkbox"
                      :id="'product-' + response.value"
                      :value="response.value"
                      v-model="product"
                      @change="clearNoProduct"
                      false-value
                      :true-value="response.value"
                    />
                    <label
                      :for="'product-' + response.value"
                      :class="responseText"
                      v-ripple
                      class="d-flex align-center"
                      :style="'height:' + responseTextHeight + 'px;'"
                    >
                      <div
                        :class="responseText"
                        v-html="response.text"
                      ></div>
                    </label>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group> -->

        <!-- QUIZ BUTTONS  -->
        <v-row class="mt-3 mt-md-6">
          <v-col xs="0" sm="3">&nbsp;</v-col>
          <v-col xs="6" sm="3">
            <v-btn
              v-if="questionIndex > 0"
              @click="prev"
              large
              rounded
              block
              right
              color="tertiary"
              :class="buttonText"
              depressed
            >
              <span class="body-2 white--text" v-html="translate.prev"></span>
            </v-btn>
          </v-col>
          <v-col xs="6" sm="3">
            <v-btn
              :disabled="question.score == '' || question.score == null"
              @click="next(question.text, questionIndex)"
              color="tertiary"
              v-html="translate.next"
              :class="buttonText"
              large
              rounded
              block
              left
              depressed
            ></v-btn>
          </v-col>
          <v-col xs="0" sm="3">&nbsp;</v-col>
        </v-row>
      </v-container>
    </div>

    <!-- RESULTS  -->
    <!-- Add to display results upon quiz completion -->
    <!-- v-show="questionIndex === questions.length" -->
    <Results
      :goal="goal"
      :pack="pack"
      v-show="questionIndex === questions.length"
    />
  </div>
</template>

<script>
import questions from "@/data/questions.json";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import packs from "@/data/packs.json";
import { PortfolioQuizHero } from "~/.nuxt/components";

export default {
  name: "QuizSection",
  components: {
    Hero,
    Results,
    PortfolioQuizHero,
  },
  props: {
    translate: {},
    questions: {
      default: function () {
        const questionsByLocale = questions[this.$route.name.slice(0, 2)];
        return questionsByLocale;
      },
    },
    responses: {
      default: function () {
        const filterResponses =
          questions[this.$route.name.slice(0, 2)][2].responses;
        const route = (locale) => this.$route.name.includes(locale);
        if (route("en_ca") || route("en_gb")) {
          return filterResponses.splice(4, 1);
        } else {
          return filterResponses;
        }
      },
    },
    // goal: {
    //   default: function () {
    //     return this.questions[1].score
    //   }
    // }
  },
  data() {
    return {
      questionIndex: 0,
      // goal: "",
      product: [],
      vCardClass: "d-flex align-center px-0 v-item-border",
      responseText: "flex-grow-1 text-center text-body-2 text-md-body-1",
      buttonText: "text-body-2 font-weight-medium px-9 white--text",
    };
  },
  methods: {
    prev() {
      this.questionIndex--;
    },
    next(question, questionNumber) {
      this.questionIndex++;
      this.addTrackingEvent(question, questionNumber);
    },
    addTrackingEvent(question, questionNumber) {
      this.$gtag.event("quiz_progression", {
        event_category: "engagement",
        question: question,
        questions_completed:
          "Completed " + (1 + questionNumber) + " of " + this.questions.length,
        // REFACTOR
        choice: () => {
          if (this.questionIndex === this.questions.length)
            return this.pack.title;
        },
      });
    },
    clearNoProduct() {
      let p = this.product;
      let index = p.indexOf(0);
      if (index > -1) {
        p.splice(index, 1);
      }
    },
    itWorks(score, obj, state) {
      if (obj.value === 0 && !state) score = [0];
      console.log(score);
    },
    // clearProduct() {
    //   if (document.getElementById("product-0").checked == true) {
    //     this.product = [0];
    //   }
    // },
    clearScore() {
      // if (value === 0)
      console.log("value");
    },
    computed: {
      score() {
        let packFunc = (total, num) => total + num;
        return this.product.reduce(packFunc, 0);
      },
      goal() {
        return this.questions[1].score;
      },
      pack() {
        // REFACTOR
        function filterByScore(array, string) {
          return array.filter((o) =>
            Object.keys(o).some((k) => o[k].includes(string))
          );
        }
        // const p = packs.filter((el) => { return el.score == 0 } );
        const score = this.score;
        const packsByLocale = packs[this.$route.name];
        const pack = filterByScore(packsByLocale, score);
        return pack[0];
      },
      responseTextHeight() {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "50";
          case "sm":
            return "55";
          default:
            return "65";
        }
      },
    },
    watch: {},
  },
};
</script>

<style lang="scss" scoped>
fieldset {
  border: none !important;
}

.v-text-field__slot label {
  font-style: italic !important;
  color: #bdbdbd !important;
}

.v-messages__message {
  font-style: italic !important;
  color: #bdbdbd !important;
}

input[type="checkbox"] {
  display: none !important;
}

input[type="checkbox"] + label,
input[type="checkbox"]:checked + label {
  padding: 0px;
  margin: -3px;
  text-align: center;
  // background: transparent;
  color: #2e2e2e;
  width: 100% !important;
  display: inline-block;
  z-index: 1;
  cursor: pointer !important;
}
input[type="checkbox"]:checked + label {
  background: #e5e5e5;
  cursor: pointer !important;
}
</style>