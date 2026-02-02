import { useState } from 'react';
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

  return (
    <header className="bg-linear-to-r from-white to-blue-50 shadow-lg shadow-blue-100/50 sticky top-0 z-50 border-b border-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
                <span className="text-white font-bold text-xl">RS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent title-font">
                  RS-SOFT
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">Digital Solutions</p>
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
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {t(item.translationKey)}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full"></span>
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
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg shadow-blue-100/50 py-2 z-50 border border-blue-100">
                  <button
                    onClick={() => changeLanguage('ru')}
                    className={`flex items-center justify-between w-full px-4 py-2 text-sm ${i18n.language === 'ru'
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-blue-50'
                      }`}
                  >
                    <span>🇷🇺 Русский</span>
                    {i18n.language === 'ru' && (
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`flex items-center justify-between w-full px-4 py-2 text-sm ${i18n.language === 'en'
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-blue-50'
                      }`}
                  >
                    <span>🇬🇧 English</span>
                    {i18n.language === 'en' && (
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Кнопка мобильного меню */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors border border-blue-100"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
            <div className="grid grid-cols-1 gap-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${isActive
                      ? 'bg-linear-to-r from-blue-50 to-blue-100 text-blue-600 border border-blue-200'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-blue-100' : 'bg-blue-50'}`}>
                        {getIcon(item.id)}
                      </div>
                      <span className="font-medium">{t(item.translationKey)}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
            
            {/* Инфо блок в мобильном меню */}
            <div className="mt-6 pt-4 border-t border-blue-100">
              <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-medium text-blue-600">RS-SOFT</span> — IT решения для вашего бизнеса
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}