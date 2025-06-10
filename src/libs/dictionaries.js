import 'server-only';

const dictionaries = {
  en: () => import('@/data/translations/en.js'),
  es: () => import('@/data/translations/es.js'),
};

export const getDictionary = async (locale) => {
  const loadDictionary = dictionaries[locale] || dictionaries['en'];
  return loadDictionary();
};
