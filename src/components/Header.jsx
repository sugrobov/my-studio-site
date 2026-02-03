import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../data/navigation';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getIcon = (itemId) => {
    switch(itemId) {
      case 'home': return '🏠';
      case 'about': return 'ℹ️';
      case 'projects': return '💼';
      case 'services': return '⚙️';
      case 'contact': return '📞';
      default: return '🔗';
    }
  };

  // Блокируем скролл при открытом мобильном меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-gradient-to-r from-white to-blue-50 shadow-lg shadow-blue-100/50 sticky top-0 z-50 border-b border-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
                <span className="text-white font-bold text-xl">RS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent title-font">
                  RS-SOFT
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">
                  {t('header.digitalSolutions', 'Digital Solutions')}
                </p>
              </div>
            </NavLink>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg font-medium transition-all duration-200 group ${isActive
                    ? 'text-blue-700 bg-blue-50/80'
                    : 'text-gray-800 hover:text-blue-700 hover:bg-blue-50/50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {t(item.translationKey)}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Кнопки языка и мобильного меню */}
          <div className="flex items-center space-x-4">
            {/* Выбор языка */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors border border-blue-100"
              >
                <span className="font-medium">{i18n.language === 'ru' ? 'RU' : 'EN'}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg shadow-blue-100/50 py-2 z-50 border border-blue-100">
                  <button
                    onClick={() => changeLanguage('ru')}
                    className={`flex items-center justify-between w-full px-4 py-2 text-sm ${i18n.language === 'ru'
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-800 hover:bg-blue-50'
                      }`}
                  >
                    <span>🇷🇺 Русский</span>
                    {i18n.language === 'ru' && (
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`flex items-center justify-between w-full px-4 py-2 text-sm ${i18n.language === 'en'
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-800 hover:bg-blue-50'
                      }`}
                  >
                    <span>🇬🇧 English</span>
                    {i18n.language === 'en' && (
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Кнопка мобильного меню с анимацией */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-200 border border-blue-100 relative z-50"
              aria-label={isMenuOpen ? t('header.closeMenu', 'Close menu') : t('header.openMenu', 'Open menu')}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'top-1/2 transform -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
                <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'top-1/2 transform -translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`fixed inset-0 z-40 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        {/* Оверлей */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeMenu}
        />
        
        {/* Контейнер меню */}
        <div className="absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ease-out">
          <div className="h-full flex flex-col">
            {/* Заголовок и кнопка закрытия */}
            <div className="flex justify-between items-center p-4 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">RS</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">{t('header.menu', 'Menu')}</h2>
                  <p className="text-blue-600 text-xs">{t('header.digitalSolutions', 'Digital Solutions')}</p>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors duration-200 flex items-center justify-center"
                aria-label={t('header.closeMenu', 'Close menu')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Навигация */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${isActive
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-200'
                        : 'text-gray-800 hover:bg-blue-50 hover:text-blue-700'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-blue-100' : 'bg-blue-50'}`}>
                          <span className="text-lg">{getIcon(item.id)}</span>
                        </div>
                        <span className="font-medium text-sm">{t(item.translationKey)}</span>
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
              
              {/* Выбор языка для мобильных */}
              <div className="mt-6 pt-4 border-t border-blue-100">
                <div className="space-y-2">
                  <button
                    onClick={() => changeLanguage('ru')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${i18n.language === 'ru'
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-800 hover:bg-blue-50'
                      }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span>🇷🇺</span>
                      <span className="text-sm">Русский</span>
                    </div>
                    {i18n.language === 'ru' && (
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${i18n.language === 'en'
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-800 hover:bg-blue-50'
                      }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span>🇬🇧</span>
                      <span className="text-sm">English</span>
                    </div>
                    {i18n.language === 'en' && (
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Инфо блок */}
{/*               <div className="mt-6 pt-4 border-t border-blue-100">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-200">
                  <p className="text-xs text-gray-800 text-center">
                    <span className="font-medium text-blue-700">RS-SOFT</span> — {t('header.itSolutionsForBusiness', 'IT решения для вашего бизнеса')}
                  </p>
                  <div className="flex flex-col space-y-1 mt-2">
                    <a href="tel:+79991234567" className="text-xs text-gray-800 hover:text-blue-700 flex items-center transition-colors">
                      <span className="mr-1.5 text-xs">📞</span> +7 (999) 123-45-67
                    </a>
                    <a href="mailto:info@rs-soft.ru" className="text-xs text-gray-800 hover:text-blue-700 flex items-center transition-colors">
                      <span className="mr-1.5 text-xs">📧</span> info@rs-soft.ru
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}