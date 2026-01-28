import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  // Данные для фильтров
  const filters = [
    { id: 'all', label: t('projects.filters.all', 'Все') },
    { id: 'web', label: t('projects.filters.web', 'Веб-разработка') },
    { id: 'mobile', label: t('projects.filters.mobile', 'Мобильные приложения') },
    { id: 'design', label: t('projects.filters.design', 'Дизайн') },
    { id: 'corporate', label: t('projects.filters.corporate', 'Корпоративные решения') },
  ];

  // Данные проектов (пример, замените на реальные данные из вашего источника)
  const projectsData = [
    {
      id: 1,
      title: t('projects.items.fintech.title', 'Финтех платформа'),
      description: t('projects.items.fintech.description', 'Разработка современной банковской платформы с AI-аналитикой'),
      category: 'web',
      imageClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      client: t('projects.items.fintech.client', 'Банк "Финанс Про"'),
      year: '2024',
    },
    {
      id: 2,
      title: t('projects.items.mobileApp.title', 'Мобильное приложение для доставки'),
      description: t('projects.items.mobileApp.description', 'Кроссплатформенное приложение для сервиса доставки еды'),
      category: 'mobile',
      imageClass: 'bg-gradient-to-r from-green-500 to-emerald-500',
      technologies: ['React Native', 'Firebase', 'Redux'],
      client: t('projects.items.mobileApp.client', 'Delivery Express'),
      year: '2023',
    },
    {
      id: 3,
      title: t('projects.items.ecommerce.title', 'Интернет-магазин премиум класса'),
      description: t('projects.items.ecommerce.description', 'Полнофункциональный онлайн-магазин с системой рекомендаций'),
      category: 'web',
      imageClass: 'bg-gradient-to-r from-purple-500 to-pink-500',
      technologies: ['Next.js', 'GraphQL', 'MongoDB'],
      client: t('projects.items.ecommerce.client', 'Luxury Brands'),
      year: '2024',
    },
    {
      id: 4,
      title: t('projects.items.dashboard.title', 'Аналитическая панель управления'),
      description: t('projects.items.dashboard.description', 'Дашборд для мониторинга бизнес-показателей в реальном времени'),
      category: 'corporate',
      imageClass: 'bg-gradient-to-r from-orange-500 to-red-500',
      technologies: ['Vue.js', 'D3.js', 'Express'],
      client: t('projects.items.dashboard.client', 'Corp Analytics Inc.'),
      year: '2023',
    },
    {
      id: 5,
      title: t('projects.items.healthcare.title', 'Медицинский портал'),
      description: t('projects.items.healthcare.description', 'Платформа для телемедицины и управления пациентами'),
      category: 'web',
      imageClass: 'bg-gradient-to-r from-teal-500 to-blue-500',
      technologies: ['Angular', 'NestJS', 'MySQL'],
      client: t('projects.items.healthcare.client', 'Health Care Systems'),
      year: '2024',
    },
    {
      id: 6,
      title: t('projects.items.uiDesign.title', 'Дизайн-система для стартапа'),
      description: t('projects.items.uiDesign.description', 'Полный дизайн бренда и UI-библиотека компонентов'),
      category: 'design',
      imageClass: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      technologies: ['Figma', 'Storybook', 'Design Systems'],
      client: t('projects.items.uiDesign.client', 'Tech Startup Inc.'),
      year: '2023',
    },
  ];

  // Фильтрация проектов
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('projects.title', 'Наши проекты')}
            </h1>
            <nav className="text-blue-200">
              <ol className="flex justify-center space-x-2">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    {t('projects.breadcrumbs.home', 'Главная')}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium">
                  {t('projects.breadcrumbs.current', 'Проекты')}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Projects Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header Stats */}
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg mb-2">
              {t('projects.totalProjects', 'Всего проектов')}:{' '}
              <span className="font-bold text-blue-600 text-xl">{projectsData.length}</span>
            </p>
            <p className="text-gray-500 max-w-3xl mx-auto">
              {t('projects.subtitle', 'Изучите наше портфолио успешных проектов в различных отраслях и технологиях')}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Project Image */}
                <div className={`h-48 ${project.imageClass} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-opacity-20 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-600 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-sm text-gray-500">
                        {t('projects.client', 'Клиент')}:
                      </p>
                      <p className="font-medium text-gray-800">{project.client}</p>
                    </div>
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group/arrow"
                    >
                      {t('projects.details', 'Подробнее')}
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover/arrow:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl pointer-events-none transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow">
              1
            </button>
            
            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              2
            </button>
            
            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              3
            </button>
            
            <span className="px-2 text-gray-400">...</span>
            
            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              8
            </button>
            
            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Projects Stats */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-700 font-medium">
                  {t('projects.stats.satisfaction', 'Удовлетворенность клиентов')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">45+</div>
                <div className="text-gray-700 font-medium">
                  {t('projects.stats.technologies', 'Технологий освоено')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">
                  {t('projects.stats.support', 'Техническая поддержка')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('projects.cta.title', 'Готовы начать свой проект?')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('projects.cta.description', 'Свяжитесь с нами для обсуждения ваших идей. Мы поможем реализовать проект любой сложности.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              {t('projects.cta.contact', 'Обсудить проект')}
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              {t('projects.cta.about', 'О компании')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}