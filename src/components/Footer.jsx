import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { id: 'home', path: '/home-dub', label: t('menu.home') },
    { id: 'about', path: '/about-dub', label: t('menu.about') },
    { id: 'projects', path: '/projects', label: t('menu.projects') },
    { id: 'services', path: '/services-dub', label: t('menu.servicesDub') },
  ];

  const services = [
    { id: 'web', label: t('services.web') },
    { id: 'mobile', label: t('services.mobile') },
    { id: 'design', label: t('services.design') },
    { id: 'consulting', label: t('services.consulting') },
  ];

  const features = [
    { id: 1, text: t('footer.feature1') },
    { id: 2, text: t('footer.feature2') },
    { id: 3, text: t('footer.feature3') },
    { id: 4, text: t('footer.feature4') }
  ];

  return (
    <footer className="bg-linear-to-br from-gray-50 via-white to-blue-50 text-gray-800 border-t border-gray-200">
      {/* Основной контент футера */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-12">
          {/* Верхняя часть футера */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

            {/* Блок с логотипом и описанием */}
            <div className="lg:col-span-2">
              {/* Маркированный список преимуществ */}
              <div className="mb-6">
                <div className="flex flex-wrap -mx-2">
                  {features.map((feature) => (
                    <div key={feature.id} className="p-2 w-full sm:w-1/2">
                      <div className="bg-gray-100 hover:bg-blue-50 rounded-lg flex p-4 h-full items-center transition-colors duration-200 border border-gray-200">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-medium text-gray-800">
                          {feature.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Быстрые ссылки */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">
                {t('footer.quickLinks')}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Услуги */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">
                {t('footer.services')}
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <div className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group cursor-pointer">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {service.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Нижняя часть футера */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Копирайт */}
            <div className="text-center md:text-left"></div>

            {/* Социальные сети */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md border border-gray-200"
                aria-label="Facebook"
              >
                <span className="text-gray-600 hover:text-blue-600 transition-colors">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md border border-gray-200"
                aria-label="Twitter"
              >
                <span className="text-gray-600 hover:text-blue-600 transition-colors">𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md border border-gray-200"
                aria-label="Instagram"
              >
                <span className="text-gray-600 hover:text-pink-600 transition-colors">ig</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md border border-gray-200"
                aria-label="LinkedIn"
              >
                <span className="text-gray-600 hover:text-blue-700 transition-colors">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="bg-linear-to-r from-gray-100 via-blue-50 to-gray-100 py-4 border-t border-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} RS-SOFT. {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors hover:underline">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors hover:underline">
                {t('footer.terms')}
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-600 hover:text-blue-600 transition-colors hover:underline">
                {t('footer.sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;