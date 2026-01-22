import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      menu: { 
        home: "Главная", 
        projects: "Наши проекты", 
        about: "О компании" 
      },
      // search: "Поиск...",
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
        formSubmitted: "Форма отправлена!",
      },
      project: {
        new: "НОВЫЙ",
        more: "Подробнее",
        category: "ПРОЕКТ",
        completed: "Завершен",
        inProgress: "В процессе",
        back: "Назад",
        details: "Детали проекта",
        technologies: "Технологии",
        type: "Тип проекта",
        status: "Статус",
        projectId: "ID проекта"
      },
      home: {
        title: "RS-SOFT.RU - Современные IT-решения",
        description: "Разрабатываем инновационные проекты в сфере веб-разработки, мобильных приложений и облачных решений. Наша команда профессионалов превращает идеи в реальность с помощью качественного кода и дизайна.",
        seeAllProjects: "Смотреть все проекты",
        wantMore: "Хотите увидеть больше наших работ?",
        portfolio: "В нашем портфолио более 50 успешно реализованных проектов различной сложности"
      },
      projects: {
        title: "Наши проекты",
        totalProjects: "Всего проектов:",
        filters: {
          all: "Все проекты",
          web: "Веб-разработка",
          mobile: "Мобильные приложения",
          design: "UI/UX дизайн",
          corporate: "Корпоративные решения"
        }
      },
      // переводы для поиска
      search: {
        placeholder: "Поиск...",
        results: "Результаты: {{count}}",
        scrollHint: "Прокрутите для просмотра всех результатов",
        noResults: "Ничего не найдено"
      },
       tags: {
        web: "Веб-разработка",
        corporate: "Корпоративные решения",
        react: "React",
        node: "Node.js",
        mobile: "Мобильные приложения",
        reactNative: "React Native",
        design: "UI/UX дизайн",
        ecommerce: "E-commerce",
        mongodb: "MongoDB",
        education: "Образование",
        postgresql: "PostgreSQL",
        health: "Здоровье",
        flutter: "Flutter",
        firebase: "Firebase",
        video: "Видео",
        webrtc: "WebRTC"
      }
    },
  },
  en: {
    translation: {
      menu: { 
        home: "Home", 
        projects: "Our Projects", 
        about: "About" 
      },
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
        formSubmitted: "Form submitted!",
      },
      project: {
        new: "NEW",
        more: "Learn More",
        category: "PROJECT",
        completed: "Completed",
        inProgress: "In Progress",
        back: "Back",
        details: "Project Details",
        technologies: "Technologies",
        type: "Project Type",
        status: "Status",
        projectId: "Project ID"
      },
      home: {
        title: "RS-SOFT.RU - Modern IT Solutions",
        description: "We develop innovative projects in web development, mobile applications and cloud solutions. Our team of professionals turns ideas into reality with quality code and design.",
        seeAllProjects: "View All Projects",
        wantMore: "Want to see more of our work?",
        portfolio: "Our portfolio includes over 50 successfully completed projects of various complexity"
      },
      projects: {
        title: "Our Projects",
        totalProjects: "Total projects:",
        filters: {
          all: "All Projects",
          web: "Web Development",
          mobile: "Mobile Applications",
          design: "UI/UX Design",
          corporate: "Corporate Solutions"
        }
      },
      search: {
        placeholder: "Search...",
        results: "Results: {{count}}",
        scrollHint: "Scroll to view all results",
        noResults: "No results found"
      },
       tags: {
        web: "Web Development",
        corporate: "Corporate Solutions",
        react: "React",
        node: "Node.js",
        mobile: "Mobile Applications",
        reactNative: "React Native",
        design: "UI/UX Design",
        ecommerce: "E-commerce",
        mongodb: "MongoDB",
        education: "Education",
        postgresql: "PostgreSQL",
        health: "Health",
        flutter: "Flutter",
        firebase: "Firebase",
        video: "Video",
        webrtc: "WebRTC"
      }
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