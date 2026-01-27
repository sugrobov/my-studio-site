import { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDebounce } from '../hooks/useDebounce';
import { Link } from 'react-router-dom';
import { buildSearchIndex, searchInIndex } from '../data/searchIndex';

export default function Search() {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Строим индекс при изменении языка
  const searchIndex = useMemo(() => {
    return buildSearchIndex(t, i18n);
  }, [t, i18n.language]);

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Поиск при изменении запроса
  useEffect(() => {
    if (debouncedSearchTerm.length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = searchInIndex(searchIndex, debouncedSearchTerm, { limit: 10 });
    
    // Форматируем результаты для отображения
    const formattedResults = results.map(result => ({
      ...result,
      displayText: result.text,
      displayPath: formatResultPath(result)
    }));

    setSearchResults(formattedResults);
    setShowResults(true);
  }, [debouncedSearchTerm, searchIndex]);

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
  };

  const formatResultPath = (result) => {
    const typeMap = {
      'menu': 'Меню',
      'project': 'Проект',
      'page': 'Страница',
      'tag': 'Тег'
    };
    
    const type = typeMap[result.type] || result.type;
    const routeName = getRouteName(result.route);
    
    return `${type} → ${routeName}`;
  };

  const getRouteName = (route) => {
    const routeNames = {
      '/home': t('menu.home'),
      '/home-dub': t('menu.homeDub'),
      '/about': t('menu.about'),
      '/about-dub': t('menu.about'),
      '/services': t('menu.services'),
      '/services-dub': t('menu.services'),
      '/projects': t('menu.projects'),
      '/contact': t('menu.contact')
    };
    
    return routeNames[route] || route;
  };

  return (
    <div className="search-container relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t('search.placeholder') || 'Поиск...'}
          className="search-input w-full md:w-64 px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="search-clear-button absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={t('clear') || 'Очистить'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {showResults && (
        <div className="search-results absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {searchResults.length > 0 ? (
            <>
              <div className="px-4 py-2 text-sm text-gray-500 border-b">
                {t('search.results', { count: searchResults.length }) || `Найдено: ${searchResults.length}`}
              </div>
              {searchResults.map((result, index) => (
                <Link
                  key={result.id}
                  to={result.route}
                  className="search-result-item block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={clearSearch}
                >
                  <div className="search-result-text font-medium text-gray-800 truncate">
                    {result.displayText}
                  </div>
                  <div className="search-result-path text-xs text-gray-500 truncate">
                    {result.displayPath}
                  </div>
                  {result.description && (
                    <div className="search-result-desc text-xs text-gray-400 mt-1 truncate">
                      {result.description}
                    </div>
                  )}
                </Link>
              ))}
            </>
          ) : (
            <div className="px-4 py-6 text-sm text-gray-500 text-center">
              {t('search.noResults') || 'Ничего не найдено'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}