import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  
  state: (): State => ({
    classes: {
      buttonText: "text-body-2 font-weight-medium px-9 white--text bg-primary",
      logoClass: "d-flex justify-center my-1 text-black",
      responseText: "flex-grow-1 text-center text-body-2 text-md-body-1 text-black",
      vCardClass: "d-flex align-center px-0 v-item-border",
    },
    styles: {
      responseTextHeight: "55",
      questionMaxWidth: "max-width: 600px",
      maxWidth: "max-width: 960px",
    },
  }),

  actions: {
  },

})

interface State {
  classes: Classes
  styles: Styles
}

interface Classes {
  buttonText: string,
  logoClass: string,
  responseText: string
  vCardClass: string
}

interface Styles {
  questionMaxWidth: string,
  responseTextHeight: string,
  maxWidth: string,
}
  