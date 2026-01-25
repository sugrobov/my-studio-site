import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      menu: { 
        home: "Главная", 
        homeDub: "Главная-дубль",
        projects: "Наши проекты", 
        about: "О компании" 
      },
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
      homeDub: {
        hero: {
          badge: "IT решения для бизнеса",
          title: "Создаем цифровое будущее вашего бизнеса",
          description: "Разрабатываем инновационные IT-решения для финансового сектора, автоматизации бизнес-процессов и цифровой трансформации компаний",
          buttonProjects: "Наши проекты",
          buttonAbout: "О компании"
        },
        services: {
          badge: "Наши услуги",
          title: "Профессиональные IT-решения",
          description: "Мы предлагаем полный цикл разработки программного обеспечения для финансового сектора и корпоративных клиентов",
          planning: {
            title: "Финансовое планирование",
            description: "Стратегическое планирование и оптимизация финансовых потоков"
          },
          investment: {
            title: "Инвестиции",
            description: "Управление инвестициями и капиталовложениями"
          },
          consultancy: {
            title: "Бизнес-консалтинг",
            description: "Профессиональные консультации для развития бизнеса"
          },
          loans: {
            title: "Бизнес-кредиты",
            description: "Финансирование и кредитные решения для компаний"
          },
          learnMore: "Подробнее"
        },
        projects: {
          badge: "Наши работы",
          title: "Последние проекты",
          viewAll: "Все проекты",
          description: "Инновационное решение для автоматизации бизнес-процессов",
          details: "Подробнее о проекте",
          fintech: {
            title: "Финтех-платформа",
            category: "Веб-разработка"
          },
          mobileApp: {
            title: "Мобильное банковское приложение",
            category: "Мобильная разработка"
          },
          analytics: {
            title: "Аналитическая система",
            category: "Big Data"
          },
          corporate: {
            title: "Корпоративный портал",
            category: "Корпоративные решения"
          }
        },
        stats: {
          projects: "Завершенных проектов",
          clients: "Довольных клиентов",
          experience: "Лет на рынке",
          specialists: "Профессионалов в команде"
        },
        cta: {
          title: "Готовы начать проект?",
          description: "Свяжитесь с нами для обсуждения ваших идей и получения профессиональной консультации",
          contact: "Связаться с нами",
          portfolio: "Посмотреть портфолио"
        }
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
        homeDub: "Home Dub",
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
      homeDub: {
        hero: {
          badge: "IT Solutions for Business",
          title: "Creating the Digital Future of Your Business",
          description: "We develop innovative IT solutions for the financial sector, business process automation and digital transformation of companies",
          buttonProjects: "Our Projects",
          buttonAbout: "About Company"
        },
        services: {
          badge: "Our Services",
          title: "Professional IT Solutions",
          description: "We offer a full cycle of software development for the financial sector and corporate clients",
          planning: {
            title: "Financial Planning",
            description: "Strategic planning and optimization of financial flows"
          },
          investment: {
            title: "Investments",
            description: "Investment management and capital investments"
          },
          consultancy: {
            title: "Business Consultancy",
            description: "Professional consultations for business development"
          },
          loans: {
            title: "Business Loans",
            description: "Financing and credit solutions for companies"
          },
          learnMore: "Learn More"
        },
        projects: {
          badge: "Our Works",
          title: "Latest Projects",
          viewAll: "All Projects",
          description: "Innovative solution for business process automation",
          details: "Project Details",
          fintech: {
            title: "Fintech Platform",
            category: "Web Development"
          },
          mobileApp: {
            title: "Mobile Banking App",
            category: "Mobile Development"
          },
          analytics: {
            title: "Analytical System",
            category: "Big Data"
          },
          corporate: {
            title: "Corporate Portal",
            category: "Corporate Solutions"
          }
        },
        stats: {
          projects: "Completed Projects",
          clients: "Satisfied Clients",
          experience: "Years on the Market",
          specialists: "Professionals in Team"
        },
        cta: {
          title: "Ready to Start a Project?",
          description: "Contact us to discuss your ideas and get professional consultation",
          contact: "Contact Us",
          portfolio: "View Portfolio"
        }
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