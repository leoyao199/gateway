import { GwLanguage } from '@/interface'
import 'server-only'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types

const dictionaries = {
  en: () => import('./locale/en/translation.json').then((module) => module.default),
  vn: () => import('./locale/vn/translation.json').then((module) => module.default),
  cn: () => import('./locale/cn/translation.json').then((module) => module.default),
  zh: () => import('./locale/zh/translation.json').then((module) => module.default),
}

export const getDictionary = async (locale: GwLanguage) =>
  dictionaries[locale]?.() ?? dictionaries.en()