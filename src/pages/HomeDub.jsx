import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CTASection from '../components/CTASection';

export default function HomeDub() {
  const { t } = useTranslation();

  // Статические данные для услуг (не-текстовые)
  const servicesStaticData = [
    {
      id: 1,
      icon: '📊',
      color: 'from-blue-500 to-blue-700',
      key: 'planning'
    },
    {
      id: 2,
      icon: '💰',
      color: 'from-green-500 to-green-700',
      key: 'investment'
    },
    {
      id: 3,
      icon: '💼',
      color: 'from-purple-500 to-purple-700',
      key: 'consultancy'
    },
    {
      id: 4,
      icon: '🏦',
      color: 'from-orange-500 to-orange-700',
      key: 'loans'
    }
  ];

  // Статические данные для проектов (не-текстовые)
  const projectsStaticData = [
    {
      id: 1,
      imageClass: 'bg-gradient-to-r from-blue-400 to-cyan-400',
      key: 'fintech'
    },
    {
      id: 2,
      imageClass: 'bg-gradient-to-r from-green-400 to-emerald-400',
      key: 'mobileApp'
    },
    {
      id: 3,
      imageClass: 'bg-gradient-to-r from-purple-400 to-pink-400',
      key: 'analytics'
    },
    {
      id: 4,
      imageClass: 'bg-gradient-to-r from-orange-400 to-red-400',
      key: 'corporate'
    }
  ];

  return (
    <div className="home-dub">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-blue-50 via-blue-100 to-indigo-100 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="inline-block border border-blue-600 border-opacity-30 rounded-full text-blue-900 font-medium py-1 px-4 mb-4 bg-white/50 backdrop-blur-sm title-font">
                {t('homeDub.hero.badge')}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent title-font">
                {t('homeDub.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-900 mb-8 max-w-2xl font-medium body-font">
                {t('homeDub.hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="bg-linear-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-xl"
                >
                  {t('homeDub.hero.buttonProjects')}
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 hover:border-blue-800 hover:text-blue-800 font-bold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  {t('homeDub.hero.buttonAbout')}
                </Link>
              </div>
            </div>

            {/* Карусель */}
            <div className="lg:w-1/2 h-80 md:h-96 lg:h-125 w-full">
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 title-font">
              {t('homeDub.services.title')}
            </h2>
            <p className="text-gray-600 text-lg body-font">
              {t('homeDub.services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {servicesStaticData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-lg bg-linear-to-r ${service.color} mb-4`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 title-font">
                  {t(`homeDub.services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 body-font">
                  {t(`homeDub.services.${service.key}.description`)}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center title-font">
                    {t('homeDub.services.learnMore')}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              {/* <p className="inline-block border border-gray-300 rounded-full text-gray-600 font-medium py-1 px-4 mb-2 title-font">
                {t('homeDub.projects.badge')}
              </p> */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 title-font">
                {t('homeDub.projects.title')}
              </h2>
            </div>
            <Link
              to="/projects"
              className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
            >
              {t('homeDub.projects.viewAll')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsStaticData.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className={`h-48 ${project.imageClass} relative overflow-hidden`}>
                  {/* <div className="absolute inset-0 bg-linear-to-r from-black/30 to-black/10 group-hover:from-black/40 group-hover:to-black/20 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div> */}
                </div>
                <div className="bg-linear-to-br from-white to-gray-50 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block bg-linear-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-2 title-font">
                        {t(`homeDub.projects.${project.key}.category`)}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 title-font">
                        {t(`homeDub.projects.${project.key}.title`)}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 body-font">
                    {t('homeDub.projects.description')}
                  </p>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium title-font"
                  >
                    {t('homeDub.projects.details')}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
{/*           <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 title-font">
              {t('homeDub.stats.title', 'Наши достижения')}
            </h2>
            <p className="text-gray-600 text-lg body-font">
              {t('homeDub.stats.description', 'За годы работы мы реализовали множество успешных проектов и заслужили доверие клиентов')}
            </p>
          </div> */}

          <div className="mb-6">
            <div className="flex flex-wrap -mx-2">
              {/* Статистика 1 */}
              <div className="p-2 w-full sm:w-1/2">
                <div className="bg-gray-100 hover:bg-blue-50 rounded-lg flex p-4 h-full items-center transition-colors duration-200 border border-gray-200">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white text-lg">👥</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-900 title-font">50+</div>
                    <span className="text-gray-700 font-medium">{t('homeDub.stats.projects', 'Проектов')}</span>
                  </div>
                </div>
              </div>

              {/* Статистика 2 */}
              <div className="p-2 w-full sm:w-1/2">
                <div className="bg-gray-100 hover:bg-blue-50 rounded-lg flex p-4 h-full items-center transition-colors duration-200 border border-gray-200">
                  <div className="w-12 h-12 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white text-lg">👤</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-900 title-font">30+</div>
                    <span className="text-gray-700 font-medium">{t('homeDub.stats.clients', 'Клиентов')}</span>
                  </div>
                </div>
              </div>

              {/* Статистика 3 */}
              <div className="p-2 w-full sm:w-1/2">
                <div className="bg-gray-100 hover:bg-blue-50 rounded-lg flex p-4 h-full items-center transition-colors duration-200 border border-gray-200">
                  <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white text-lg">⏳</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-900 title-font">5+</div>
                    <span className="text-gray-700 font-medium">{t('homeDub.stats.experience', 'Лет опыта')}</span>
                  </div>
                </div>
              </div>

              {/* Статистика 4 */}
              <div className="p-2 w-full sm:w-1/2">
                <div className="bg-gray-100 hover:bg-blue-50 rounded-lg flex p-4 h-full items-center transition-colors duration-200 border border-gray-200">
                  <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white text-lg">👨‍💻</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-900 title-font">15+</div>
                    <span className="text-gray-700 font-medium">{t('homeDub.stats.specialists', 'Специалистов')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-flex text-white bg-linear-to-r from-blue-600 to-indigo-600 border-0 py-3 px-8 focus:outline-none hover:from-blue-700 hover:to-indigo-700 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 title-font"
            >
              {t('home.seeAllProjects')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="light"
        title={t('aboutDub.cta.title', 'Готовы начать сотрудничество?')}
        primaryButtonText={t('aboutDub.cta.contact', 'Связаться с нами')}
        primaryButtonLink="/contact"
        secondaryButtonText={t('aboutDub.cta.portfolio', 'Посмотреть проекты')}
      />
    </div>
  );
}