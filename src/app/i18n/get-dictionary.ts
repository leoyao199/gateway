import 'server-only'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types

const dictionaries = {
  en: () => import('./locale/en/translation.json').then((module) => module.default),
  vn: () => import('./locale/vn/translation.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en'|'vn') =>
  dictionaries[locale]?.() ?? dictionaries.en()