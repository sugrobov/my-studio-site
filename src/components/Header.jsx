import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Header({ toggleMobileMenu }) {
  const { t, i18n } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  // Функция смены языка
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Функции для работы с поиском
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <header className="bg-white border-b border-gray-300 w-full">
      {/* Основная строка */}
      <div className="py-3 px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Левая часть: логотип */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="RS-SOFT" className="h-10 w-auto" />
            <span className="ml-3 text-lg font-bold text-gray-800 hidden sm:block">
              RS-SOFT
            </span>
          </div>

          {/* Центральная часть: навигация для десктопа */}
          <nav className="hidden lg:flex items-center space-x-1 mx-4 flex-grow justify-center">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`
              }
            >
              {t('menu.home')}
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`
              }
            >
              {t('menu.projects')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`
              }
            >
              {t('menu.about')}
            </NavLink>
          </nav>

          {/* Правая часть: элементы управления */}
          <div className="flex items-center space-x-3">
            
            {/* Переключатель языка - единый для всех экранов */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => changeLanguage('ru')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                  i18n.language === 'ru'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                disabled={i18n.language === 'ru'}
              >
                RU
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                  i18n.language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                disabled={i18n.language === 'en'}
              >
                EN
              </button>
            </div>

            {/* Кнопка поиска для мобильных и планшетов */}
            <button
              onClick={toggleSearch}
              className="lg:hidden text-gray-600 hover:text-blue-600 p-1"
              aria-label="Поиск"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Поиск для десктопа */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('search')}
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="border border-gray-300 rounded-lg pl-3 pr-8 py-1.5 text-sm w-40 focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                />
                {searchValue && (
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
                    onClick={clearSearch}
                    aria-label="Очистить поиск"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Бургер-меню для мобильных и планшетов */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-700 hover:text-blue-600 p-1"
              aria-label="Открыть меню"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

          </div>
        </div>

        {/* Мобильный поиск (раскрывающийся) */}
        {searchVisible && (
          <div className="mt-3 lg:hidden animate-fadeIn">
            <div className="flex items-center space-x-2">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder={t('search')}
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="border border-gray-300 rounded-lg pl-3 pr-8 py-2 text-sm w-full focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                />
                {searchValue && (
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={clearSearch}
                    aria-label="Очистить поиск"
                  >
                    ✕
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  clearSearch();
                  setSearchVisible(false);
                }}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-lg text-sm transition-colors whitespace-nowrap"
              >
                {t('clear')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}