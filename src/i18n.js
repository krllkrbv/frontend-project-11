import i18n from 'i18next'

import ru from './locales/ru.js'

export default () => {
  const instance = i18n.createInstance()
  return instance.init({
    lng: 'ru',
    debug: false,
    resources: {
      ru: { translation: ru },
    },
  })
}
