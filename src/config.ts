/**
 * Настройки сервисов
 */
const config = {

  translate: {
    defaultLanguage: navigator.language.split('-')[0] || 'en'  // язык по умолчанию
  }
}

export default config;
