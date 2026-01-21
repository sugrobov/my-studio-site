import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { useDebounce } from '../hooks/useDebounce';
import { searchProjects, searchPages } from '../utils/searchUtils';

export default function Header({ toggleMobileMenu }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const debouncedSearch = useDebounce(searchValue, 300);

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
    setSearchResults([]);
    setShowResults(false);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  // Выполняем поиск при изменении debounced значения
  useEffect(() => {
    if (debouncedSearch.length >= 3) {
      const projectResults = searchProjects(debouncedSearch, i18n.language);
      const pageResults = searchPages(debouncedSearch, i18n.language);
      
      const allResults = [
        ...pageResults.map(page => ({
          ...page,
          type: 'page',
          title: page.title[i18n.language],
        })),
        ...projectResults.map(project => ({
          ...project,
          type: 'project',
          title: project.title[i18n.language],
          path: `/project/${project.id}`,
        }))
      ];
      
      setSearchResults(allResults);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [debouncedSearch, i18n.language]);

  // Закрываем результаты поиска при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Обработчик выбора результата поиска
  const handleResultClick = (result) => {
    navigate(result.path);
    clearSearch();
    setShowResults(false);
    setSearchVisible(false);
  };

  // Определяем, нужен ли скроллинг (больше 7 результатов)
  const shouldShowScroll = searchResults.length > 7;

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
            
            {/* Переключатель языка */}
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
              <div className="relative" ref={searchRef}>
                <input
                  type="text"
                  placeholder={t('search')}
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="border border-gray-300 rounded-lg pl-3 pr-8 py-1.5 text-sm w-48 focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  onFocus={() => searchValue.length >= 3 && setShowResults(true)}
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
                
                {/* Выпадающий список результатов поиска */}
                {showResults && searchResults.length > 0 && (
                  <div className={`absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${
                    shouldShowScroll ? 'max-h-80 overflow-y-auto' : ''
                  }`}>
                    {/* Заголовок результатов */}
                    <div className="px-3 py-2 border-b border-gray-100 bg-gray-50">
                      <div className="text-xs font-medium text-gray-500">
                        {t('search.results', { count: searchResults.length })}
                      </div>
                    </div>
                    
                    {/* Список результатов */}
                    <div className="divide-y divide-gray-100">
                      {searchResults.map((result, index) => (
                        <button
                          key={`${result.type}-${result.id || result.path}-${index}`}
                          onClick={() => handleResultClick(result)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3 transition-colors duration-150"
                        >
                          {result.type === 'project' ? (
                            <>
                              <div className="flex-shrink-0">
                                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="flex-grow min-w-0">
                                <div className="font-medium text-gray-800 truncate">{result.title}</div>
                                <div className="text-xs text-gray-500 truncate">{t('menu.projects')}</div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex-shrink-0">
                                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div className="flex-grow font-medium text-gray-800 truncate">{result.title}</div>
                            </>
                          )}
                        </button>
                      ))}
                    </div>
                    
                    {/* Индикатор скроллинга */}
                    {shouldShowScroll && (
                      <div className="px-3 py-2 border-t border-gray-100 bg-gray-50 text-center">
                        <div className="text-xs text-gray-500">
                          {t('search.scrollHint', 'Прокрутите для просмотра всех результатов')}
                        </div>
                      </div>
                    )}
                  </div>
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
            <div className="relative" ref={searchRef}>
              <div className="flex items-center space-x-2">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder={t('search')}
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="border border-gray-300 rounded-lg pl-3 pr-8 py-2 text-sm w-full focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                    onFocus={() => searchValue.length >= 3 && setShowResults(true)}
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
              
              {/* Выпадающий список результатов поиска для мобильных */}
              {showResults && searchResults.length > 0 && (
                <div className={`absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${
                  shouldShowScroll ? 'max-h-64 overflow-y-auto' : ''
                }`}>
                  {/* Заголовок результатов */}
                  <div className="px-3 py-2 border-b border-gray-100 bg-gray-50">
                    <div className="text-xs font-medium text-gray-500">
                      {t('search.results', { count: searchResults.length })}
                    </div>
                  </div>
                  
                  {/* Список результатов */}
                  <div className="divide-y divide-gray-100">
                    {searchResults.map((result, index) => (
                      <button
                        key={`${result.type}-${result.id || result.path}-${index}`}
                        onClick={() => handleResultClick(result)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3"
                      >
                        {result.type === 'project' ? (
                          <>
                            <div className="flex-shrink-0">
                              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="font-medium text-gray-800 truncate">{result.title}</div>
                              <div className="text-xs text-gray-500 truncate">{t('menu.projects')}</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex-shrink-0">
                              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="flex-grow font-medium text-gray-800 truncate">{result.title}</div>
                          </>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Индикатор скроллинга для мобильных */}
                  {shouldShowScroll && (
                    <div className="px-3 py-2 border-t border-gray-100 bg-gray-50 text-center">
                      <div className="text-xs text-gray-500">
                        {t('search.scrollHint', 'Прокрутите для просмотра всех результатов')}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}