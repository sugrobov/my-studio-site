import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      menu: { home: "Главная", projects: "Наши проекты", about: "О компании" },
      search: "Поиск...",
      clear: "Очистить",
      about: {
        title: "О компании",
        text: "Мы — команда профессионалов, создающая современные сайты и веб-приложения. Наша цель — превращать идеи в реальность с помощью качественного кода и дизайна.",
      },
      contact: {
        title: "Свяжитесь с нами",
        name: "Ваше Имя",
        surname: "Ваша Фамилия",
        city: "Город",
        phone: "Телефон",
        message: "Сообщение",
        captcha: "Каптча",
        send: "Отправить",
        clear: "Очистить",
      },
      project: {
        more: "Далее >>>",
        back: "Вернуться",
      },
    },
  },
  en: {
    translation: {
      menu: { home: "Home", projects: "Our Projects", about: "About" },
      search: "Search...",
      clear: "Clear",
      about: {
        title: "About",
        text: "We are a team of professionals creating modern websites and web apps. Our goal is to turn ideas into reality with clean code and design.",
      },
      contact: {
        title: "Contact Us",
        name: "Your Name",
        surname: "Your Surname",
        city: "City",
        phone: "Phone",
        message: "Message",
        captcha: "Captcha",
        send: "Send",
        clear: "Clear",
      },
      project: {
        more: "Read more >>>",
        back: "Back",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: { escapeValue: false },
  });

export default i18n;
