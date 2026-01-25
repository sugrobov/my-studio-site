import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full translate-y-48 -translate-x-48"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <p className="inline-block border border-blue-400 border-opacity-50 rounded-full text-blue-200 font-medium py-1 px-4 mb-4">
                {t('homeDub.hero.badge')}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('homeDub.hero.title')}
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                {t('homeDub.hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-xl"
                >
                  {t('homeDub.hero.buttonProjects')}
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-bold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  {t('homeDub.hero.buttonAbout')}
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
                  <div className="text-center p-8">
                    <div className="text-6xl md:text-7xl lg:text-8xl mb-4">💻</div>
                    <h3 className="text-2xl font-bold">RS-SOFT</h3>
                    <p className="text-blue-100 mt-2">IT Solutions</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg flex items-center justify-center">
                  <span className="text-4xl">🔒</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="inline-block border border-gray-300 rounded-full text-gray-600 font-medium py-1 px-4 mb-4">
              {t('homeDub.services.badge')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('homeDub.services.title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('homeDub.services.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {servicesStaticData.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {t(`homeDub.services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`homeDub.services.${service.key}.description`)}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
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
              <p className="inline-block border border-gray-300 rounded-full text-gray-600 font-medium py-1 px-4 mb-2">
                {t('homeDub.projects.badge')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
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
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-2">
                        {t(`homeDub.projects.${project.key}.category`)}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {t(`homeDub.projects.${project.key}.title`)}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {t('homeDub.projects.description')}
                  </p>
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">{t('homeDub.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-700 font-medium">{t('homeDub.stats.clients')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">{t('homeDub.stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">{t('homeDub.stats.specialists')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('homeDub.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('homeDub.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              {t('homeDub.cta.contact')}
            </Link>
            <Link 
              to="/projects" 
              className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              {t('homeDub.cta.portfolio')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}