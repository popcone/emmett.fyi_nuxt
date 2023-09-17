import type { InjectionKey } from "vue";
export const indexInjectionKey = Symbol() as InjectionKey<IndexInjection>;

interface IndexInjection {
    projects: Projects[],
}

interface Projects {
  id: number,
  title: { short: string, long: string },
  tag?: string,
  description: string,
  links?: Array<Links>
  bullets: Array<Bullets>,
}

interface Links {
  title: string,
  path: string | Route,
  target: 'internal' | 'external' | '' | null | undefined,
}

interface Bullets {
  title: string,
  description: string,
}


interface Route {
  name: string,
  params: { id: number },
}