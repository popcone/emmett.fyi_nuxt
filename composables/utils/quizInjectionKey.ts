import type { InjectionKey } from "vue";
export const quizInjectionKey = Symbol() as InjectionKey<QuizInjection>;

interface QuizInjection {
    brand: string | string[],
    quiz: { [key: string]: any },
    cdnImgBase: string,
    locale: string,
    translations: { [key: string]: any },
}