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
    { id: 'web', label: t('services.web', 'Веб-разработка') },
    { id: 'mobile', label: t('services.mobile', 'Мобильные приложения') },
    { id: 'design', label: t('services.design', 'UI/UX Дизайн') },
    { id: 'consulting', label: t('services.consulting', 'IT-Консалтинг') },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 border-t border-gray-200">
      {/* Основной контент футера */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-12">
          {/* Верхняя часть футера */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Блок с логотипом и описанием */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <span className="text-white font-bold text-xl">RS</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                    RS-SOFT
                  </h2>
                  <p className="text-gray-600 text-sm">Digital Solutions</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                {t('footer.description', 'Профессиональные IT-решения для вашего бизнеса. Разработка качественного ПО, создание современных веб-приложений и предоставление IT-консалтинга.')}
              </p>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm max-w-xs">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-lg">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('footer.emailLabel', 'Напишите нам')}</p>
                  <p className="font-medium text-blue-700">info@rs-soft.ru</p>
                </div>
              </div>
            </div>

            {/* Быстрые ссылки */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">{t('footer.quickLinks', 'Быстрые ссылки')}</h3>
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
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">{t('footer.services', 'Услуги')}</h3>
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

          {/* Разделитель */}
          <div className="border-t border-gray-300 mb-8"></div>

          {/* Нижняя часть футера */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Копирайт */}
            <div className="text-center md:text-left">
              <p className="text-gray-600">
                © {new Date().getFullYear()} RS-SOFT. {t('footer.rights', 'Все права защищены.')}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {t('footer.madeWith', 'Сделано с')} <span className="text-red-500">❤️</span> {t('footer.forClients', 'для наших клиентов')}
              </p>
            </div>

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
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md shadow-blue-300"
                aria-label="Telegram"
              >
                <span className="text-white">✈️</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 py-4 border-t border-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-500 text-center">
              {t('footer.certified', 'Сертифицированные IT-решения')} • <span className="font-medium">ISO 9001:2015</span>
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors hover:underline">
                {t('footer.privacy', 'Политика конфиденциальности')}
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors hover:underline">
                {t('footer.terms', 'Условия использования')}
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-600 hover:text-blue-600 transition-colors hover:underline">
                {t('footer.sitemap', 'Карта сайта')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;