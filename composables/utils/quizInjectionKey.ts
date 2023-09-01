import type { InjectionKey } from "vue";
export const quizInjectionKey = Symbol() as InjectionKey<QuizInjection>;

interface QuizInjection {
    brand: string | string[],
    quiz: object,
    cdnImgBase: string,
    locale: string,
    translations: any,
}