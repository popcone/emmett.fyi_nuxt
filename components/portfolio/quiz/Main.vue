<script lang="ts" setup>
////
// Imports
import { ref, inject, computed } from "vue";
import { quizInjectionKey } from "~/composables/utils/quizInjectionKey";
import { useQuizStore } from "~/store/quiz";

// Props Injection
const { translations, quiz } = inject(quizInjectionKey);

// Questions
const questions = quiz.questions;
let questionIndex: Ref<number> = ref(0);

// Styles & Classes
const { classes, styles } = useQuizStore();

// Score
const score: Score = reactive({
  total: 300,
  name: "",
  goal: "",
});

//// Functions
// Empty Score
const emptyScore = (score: number | number[] | string | string[]) => {
  return score.length === 0 || score === "" || score == null;
};
// Question Max
const questionMax: ComputedRef<boolean> = computed(() => {
  return questionIndex.value === questions.length;
});

const quizProgress: ComputedRef<number> = computed(() => {
  return (questionIndex.value / questions.length) * 100;
});

// Calculate Score Total

let calculatingScoreTotal: Ref<boolean> = ref(false);

const calculateScoreTotal = () => {
  let getTotal: number = 0,
    getGoal: number = 0,
    getName: number = 0;

  const filterQuestions = (questionType: string) => {
    return questions.filter((question: any) =>
      question.name.includes(questionType)
    );
  };

  const getProductQuestions = filterQuestions("product");
  getProductQuestions.forEach((question: any) => {
    getTotal += question.score.reduce((a: number, b: number) => a + b, 0);
  });

  const getNameQuestions = filterQuestions("name");
  getName = getNameQuestions[0].score;
  score.name = getName;

  const getGoalQuestions = filterQuestions("goal");
  getGoal = getGoalQuestions[0].score;
  score.goal = getGoal;

  calculatingScoreTotal.value = true;

  score.total = getTotal;

  setTimeout(() => {
    calculatingScoreTotal.value = false;
  }, 2100);
};

// Types & Interfaces
interface Score {
  total: number;
  name?: string | string[];
  goal?: string | string[];
}

////
</script>

<template>
  <div id="quiz-main">
    <div v-if="questionIndex < questions.length">
      <!-- Hero  -->
      <PortfolioQuizHero />

      <!-- Progress Bar  -->
      <v-row>
        <v-progress-linear
          v-model="quizProgress"
          height="35"
          color="primary"
          bg-color="secondary"
          bg-opacity=".9"
        >
          <span v-show="questionIndex > 0" class="text-body-2 text-white">
            {{ ((questionIndex / questions.length) * 100).toFixed(0) }}
            <sup>%&nbsp;</sup>
            <span v-html="translations.complete" class="text-white"></span>
          </span>
        </v-progress-linear>
      </v-row>
    </div>

    <!-- Questions  -->
    <div
      v-for="(question, id) in questions"
      :key="id"
      :index="id"
      justify="center"
    >
      <v-container v-show="id === questionIndex">
        <!-- Question  -->
        <v-row class="my-3 my-md-7 px-3 px-lg-6">
          <v-col>
            <h3 class="text-center" v-html="question.text"></h3>
          </v-col>
        </v-row>

        <!-- Responses  -->
        <v-item-group
          v-model="question.score"
          :multiple="question.multiple"
          selected-class="bg-primary"
        >
          <v-row>
            <template v-if="question.type == 'input'">
              <v-col cols="12">
                <v-text-field
                  class="text-h4 text-sm-h3"
                  color="primary"
                  background-color="transparent"
                  clearable
                  autofocus
                  filled
                  :hint="question.hint"
                  persistent-hint
                  height="auto"
                  @keyup.enter="
                    emptyScore(question.score) ? '' : questionIndex++
                  "
                  v-model.trim="question.score"
                  variant="underlined"
                ></v-text-field>
              </v-col>
            </template>
            <template v-else>
              <v-col
                v-show="question.type == 'select'"
                v-for="(response, id) in question.responses"
                :key="id"
                cols="12"
                md="6"
              >
                <v-item
                  v-slot:default="{ selectedClass, toggle, isSelected }"
                  :value="response.value"
                >
                  <!-- REFACTOR THIS  -->
                  <v-card
                    color=""
                    :class="[classes.vCardClass, selectedClass]"
                    :height="styles.responseTextHeight"
                    :aria-label="`${response.value}`"
                    @click.prevent="
                      toggle();
                      response.value === 0 && !isSelected
                        ? (question.score = [0])
                        : response.value !== 0 && question.score.includes(0)
                        ? question.score.pop()
                        : '';
                    "
                    variant="outlined"
                  >
                    <div
                      :class="classes.responseText"
                      v-html="response.text"
                    ></div>
                  </v-card>
                </v-item>
              </v-col>
            </template>
          </v-row>
        </v-item-group>

        <!-- Previous and Next Buttons  -->
        <v-row class="mt-3 mt-md-6">
          <v-col xs="0" sm="3">&nbsp;</v-col>
          <v-col xs="6" sm="3">
            <v-btn
              v-if="questionIndex > 0"
              @click="questionIndex--"
              large
              rounded
              block
              :class="classes.buttonText"
            >
              <span class="text-body-2" v-html="translations.prev"></span>
            </v-btn>
          </v-col>
          <v-col xs="6" sm="3">
            <v-btn
              @click="
                questionIndex++;
                questionMax ? calculateScoreTotal() : '';
              "
              :disabled="emptyScore(question.score)"
              :class="classes.buttonText"
              large
              rounded
              block
            >
              <span class="text-body-2" v-html="translations.next"></span>
            </v-btn>
          </v-col>
          <v-col xs="0" sm="3">&nbsp;</v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Results  -->
    <div v-if="questionMax">
      <!-- <div> -->
      <v-card v-if="calculatingScoreTotal">
        <Loader message="Calculating..." />
      </v-card>
      <PortfolioQuizResults v-if="!calculatingScoreTotal" :score="score" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
//
</style>