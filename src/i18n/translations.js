import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      menu: { 
        home: "Главная", 
        homeDub: "Главная-дубль",
        aboutDub: "О нас-дубль",
        services: "Услуги",
        servicesDub: "Услуги-дубль",
        projects: "Наши проекты", 
        about: "О компании" 
      },
      clear: "Очистить",
      about: {
        title: "О компании",
        text: "Мы — команда профессионалов, создающая современные сайты и веб-приложения. Наша цель — превращать идеи в реальность с помощью качественного кода и дизайна.",
      },
      aboutDub: {
        pageHeader: {
          title: "О нас",
          home: "Главная",
          pages: "Страницы",
          current: "О нас"
        },
        about: {
          badge: "О компании",
          title: "Мы помогаем нашим клиентам развивать бизнес",
          description: "Мы — команда профессионалов, создающая современные IT-решения для бизнеса. Наша цель — превращать идеи в реальность с помощью качественного кода и инновационных технологий."
        },
        tabs: {
          story: {
            title: "История",
            content: "Наша компания была основана в 2015 году с целью предоставления качественных IT-решений для бизнеса. С тех пор мы выросли в команду профессионалов, успешно реализовавших более 100 проектов."
          },
          mission: {
            title: "Миссия",
            content: "Наша миссия — предоставлять качественные IT-решения, которые помогают бизнесу расти и развиваться. Мы стремимся к инновациям и постоянному совершенствованию."
          },
          vision: {
            title: "Видение",
            content: "Мы видим будущее, где технологии делают бизнес эффективнее, а наши решения помогают компаниям достигать новых высот в цифровой трансформации."
          }
        },
        benefits: {
          noHiddenCost: {
            title: "Без скрытых платежей",
            description: "Прозрачное ценообразование без дополнительных сборов"
          },
          dedicatedTeam: {
            title: "Профессиональная команда",
            description: "Опытные специалисты с глубокими знаниями"
          },
          support24: {
            title: "Поддержка 24/7",
            description: "Всегда на связи для решения любых вопросов"
          }
        },
        stats: {
          happyClients: "Довольных клиентов",
          projectsCompleted: "Завершенных проектов",
          dedicatedStaff: "Специалистов в команде",
          awardsAchieved: "Полученных наград"
        },
        team: {
          badge: "Наша команда",
          title: "Профессиональная команда",
          description: "Наши специалисты обладают многолетним опытом в разработке IT-решений для бизнеса",
          alex: {
            title: "Александр Петров",
            position: "CEO & Основатель"
          },
          maria: {
            title: "Мария Иванова",
            position: "CTO & Технический директор"
          },
          dmitry: {
            title: "Дмитрий Сидоров",
            position: "Lead Designer"
          }
        },
        contact: {
          title: "Свяжитесь с нами",
          description: "Готовы обсудить ваш проект? Заполните форму и мы свяжемся с вами в ближайшее время для консультации.",
          address: {
            title: "Адрес",
            value: "г. Москва, ул. Примерная, д. 123"
          },
          email: {
            title: "Email"
          },
          phone: {
            title: "Телефон"
          }
        },
        cta: {
          title: "Готовы начать сотрудничество?",
          contact: "Связаться с нами",
          portfolio: "Посмотреть проекты"
        }
      },
      servicesDub: {
        pageHeader: {
          title: "Услуги",
          home: "Главная",
          pages: "Страницы",
          current: "Услуги"
        },
        hero: {
          badge: "Наши услуги",
          title: "Профессиональные IT-решения для бизнеса"
        },
        tabs: {
          planning: {
            title: "Финансовое планирование",
            contentTitle: "25 лет опыта в финансовой поддержке",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
            features: ["Защищенные кредиты", "Кредитные возможности", "Аванс наличными"],
            button: "Подробнее"
          },
          investment: {
            title: "Инвестиции",
            contentTitle: "25 лет опыта в инвестициях",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
            features: ["Инвестиционные портфели", "Управление активами", "Капиталовложения"],
            button: "Подробнее"
          },
          consultancy: {
            title: "Финансовый консалтинг",
            contentTitle: "25 лет опыта в консалтинге",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
            features: ["Бизнес-анализ", "Стратегическое планирование", "Оптимизация процессов"],
            button: "Подробнее"
          },
          loans: {
            title: "Бизнес-кредиты",
            contentTitle: "25 лет опыта в кредитовании",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
            features: ["Корпоративные кредиты", "Инвестиционные займы", "Овердрафты"],
            button: "Подробнее"
          }
        },
        callback: {
          badge: "Свяжитесь с нами",
          title: "Заказать обратный звонок",
          form: {
            name: "Ваше имя",
            email: "Ваш email",
            mobile: "Ваш телефон",
            subject: "Тема",
            message: "Сообщение",
            button: "Отправить"
          }
        }
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
        aboutDub: "About Dub",
        services: "Services",
        servicesDub: "Services Dub",
        projects: "Our Projects", 
        about: "About" 
      },
      search: "Search...",
      clear: "Clear",
      about: {
        title: "About",
        text: "We are a team of professionals creating modern websites and web apps. Our goal is to turn ideas into reality with clean code and design.",
      },
      aboutDub: {
        pageHeader: {
          title: "About",
          home: "Home",
          pages: "Pages",
          current: "About"
        },
        about: {
          badge: "About Company",
          title: "We Help Our Clients To Grow Their Business",
          description: "We are a team of professionals creating modern IT solutions for business. Our goal is to turn ideas into reality with quality code and innovative technologies."
        },
        tabs: {
          story: {
            title: "Story",
            content: "Our company was founded in 2015 with the aim of providing quality IT solutions for business. Since then, we have grown into a team of professionals who have successfully implemented more than 100 projects."
          },
          mission: {
            title: "Mission",
            content: "Our mission is to provide quality IT solutions that help businesses grow and develop. We strive for innovation and continuous improvement."
          },
          vision: {
            title: "Vision",
            content: "We see a future where technology makes business more efficient, and our solutions help companies reach new heights in digital transformation."
          }
        },
        benefits: {
          noHiddenCost: {
            title: "No Hidden Cost",
            description: "Transparent pricing without additional fees"
          },
          dedicatedTeam: {
            title: "Dedicated Team",
            description: "Experienced specialists with deep knowledge"
          },
          support24: {
            title: "24/7 Support",
            description: "Always available to solve any issues"
          }
        },
        stats: {
          happyClients: "Happy Clients",
          projectsCompleted: "Projects Completed",
          dedicatedStaff: "Dedicated Staff",
          awardsAchieved: "Awards Achieved"
        },
        team: {
          badge: "Our Team",
          title: "Professional Team",
          description: "Our specialists have years of experience in developing IT solutions for business",
          alex: {
            title: "Alexander Petrov",
            position: "CEO & Founder"
          },
          maria: {
            title: "Maria Ivanova",
            position: "CTO & Technical Director"
          },
          dmitry: {
            title: "Dmitry Sidorov",
            position: "Lead Designer"
          }
        },
        contact: {
          title: "Contact Us",
          description: "Ready to discuss your project? Fill out the form and we will contact you soon for a consultation.",
          address: {
            title: "Address",
            value: "Moscow, Example St., 123"
          },
          email: {
            title: "Email"
          },
          phone: {
            title: "Phone"
          }
        },
        cta: {
          title: "Ready to Start Cooperation?",
          contact: "Contact Us",
          portfolio: "View Projects"
        }
      },
      servicesDub: {
        pageHeader: {
          title: "Services",
          home: "Home",
          pages: "Pages",
          current: "Services"
        },
        hero: {
          badge: "Our Services",
          title: "Professional IT Solutions for Business"
        },
        tabs: {
          planning: {
            title: "Financial Planning",
            contentTitle: "25 Years Of Experience In Financial Support",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
            features: ["Secured Loans", "Credit Facilities", "Cash Advanced"],
            button: "Read More"
          },
          investment: {
            title: "Cash Investment",
            contentTitle: "25 Years Of Experience In Investments",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
            features: ["Investment Portfolios", "Asset Management", "Capital Investments"],
            button: "Read More"
          },
          consultancy: {
            title: "Financial Consultancy",
            contentTitle: "25 Years Of Experience In Consultancy",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
            features: ["Business Analysis", "Strategic Planning", "Process Optimization"],
            button: "Read More"
          },
          loans: {
            title: "Business Loans",
            contentTitle: "25 Years Of Experience In Lending",
            description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
            features: ["Corporate Loans", "Investment Loans", "Overdrafts"],
            button: "Read More"
          }
        },
        callback: {
          badge: "Get In Touch",
          title: "Request A Call-Back",
          form: {
            name: "Your Name",
            email: "Your Email",
            mobile: "Your Mobile",
            subject: "Subject",
            message: "Message",
            button: "Submit Now"
          }
        }
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