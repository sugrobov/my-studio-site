import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDebounce } from '../hooks/useDebounce';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/navigation';

export default function Search() {
  const { t, i18n: i18nInstance } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

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

  // Search function
  useEffect(() => {
    if (debouncedSearchTerm.length >= 3) {
      const results = searchInTranslations(debouncedSearchTerm, i18nInstance.language);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [debouncedSearchTerm, i18nInstance.language, i18nInstance]);

  // Function to search in translations
  const searchInTranslations = (term, language) => {
    const results = [];
    const termLower = term.toLowerCase();
    
    try {
      // Get the translation object for the current language
      const langData = i18nInstance.getDataByLanguage(language)?.translation ||
                      i18nInstance.getDataByLanguage('ru')?.translation;
      
      if (!langData) {
        console.error('Translation data not found');
        return results;
      }
      
      // Search in menu items
      menuItems.forEach(item => {
        const menuText = langData.menu?.[item.id];
        if (menuText && menuText.toLowerCase().includes(termLower)) {
          results.push({
            text: menuText,
            route: item.path,
            title: `Меню > ${menuText}`
          });
        }
      });
      
      // Search in common page content
      const searchableSections = [
        // HomeDub page
        { path: ['homeDub', 'hero', 'title'], route: '/home-dub' },
        { path: ['homeDub', 'hero', 'description'], route: '/home-dub' },
        { path: ['homeDub', 'services', 'title'], route: '/home-dub' },
        { path: ['homeDub', 'services', 'description'], route: '/home-dub' },
        { path: ['homeDub', 'projects', 'title'], route: '/home-dub' },
        
        // AboutDub page
        { path: ['aboutDub', 'about', 'title'], route: '/about-dub' },
        { path: ['aboutDub', 'about', 'description'], route: '/about-dub' },
        { path: ['aboutDub', 'tabs', 'story', 'title'], route: '/about-dub' },
        { path: ['aboutDub', 'tabs', 'story', 'content'], route: '/about-dub' },
        { path: ['aboutDub', 'tabs', 'mission', 'title'], route: '/about-dub' },
        { path: ['aboutDub', 'tabs', 'mission', 'content'], route: '/about-dub' },
        { path: ['aboutDub', 'tabs', 'vision', 'title'], route: '/about-dub' },
        { path: ['aboutDub', 'tabs', 'vision', 'content'], route: '/about-dub' },
        
        // ServicesDub page
        { path: ['servicesDub', 'hero', 'title'], route: '/services-dub' },
        { path: ['servicesDub', 'hero', 'description'], route: '/services-dub' },
        { path: ['servicesDub', 'tabs', 'planning', 'title'], route: '/services-dub' },
        { path: ['servicesDub', 'tabs', 'planning', 'contentTitle'], route: '/services-dub' },
        { path: ['servicesDub', 'tabs', 'investment', 'title'], route: '/services-dub' },
        { path: ['servicesDub', 'tabs', 'investment', 'contentTitle'], route: '/services-dub' },
        { path: ['servicesDub', 'tabs', 'consultancy', 'title'], route: '/services-dub' },
        { path: ['servicesDub', 'tabs', 'consultancy', 'contentTitle'], route: '/services-dub' },
        { path: ['servicesDub', 'tabs', 'loans', 'title'], route: '/services-dub' },
        { path: ['servicesDub', 'tabs', 'loans', 'contentTitle'], route: '/services-dub' },
        
        // Other pages
        { path: ['projects', 'title'], route: '/projects' },
        { path: ['contact', 'title'], route: '/contact' },
        { path: ['about', 'title'], route: '/about' },
        { path: ['about', 'text'], route: '/about' }
      ];

      // Search through defined paths
      searchableSections.forEach(({ path, route }) => {
        let current = langData;
        let validPath = true;
        
        for (const key of path) {
          if (current && typeof current === 'object' && current[key] !== undefined) {
            current = current[key];
          } else {
            validPath = false;
            break;
          }
        }

        if (validPath && current && typeof current === 'string' && current.toLowerCase().includes(termLower)) {
          results.push({
            text: current,
            route: route,
            title: path.join(' > ')
          });
        }
      });
    } catch (error) {
      console.error('Error searching translations:', error);
    }

    return results.slice(0, 10); // Limit to 10 results
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
  };

  return (
    <div className="search-container" ref={searchRef}>
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

      {showResults && searchResults.length > 0 && (
        <div className="search-results absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          <div className="search-results-count py-1">
            <div className="px-4 py-2 text-sm text-gray-500 border-b">
              {t('search.results', { count: searchResults.length }) || `Результаты: ${searchResults.length}`}
            </div>
            {searchResults.map((result, index) => (
              <Link
                key={index}
                to={result.route}
                className="search-result-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                onClick={() => {
                  clearSearch();
                }}
              >
                <div className="search-result-title font-medium truncate">{result.text}</div>
                <div className="search-result-path text-xs text-gray-500 truncate">{result.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {showResults && searchResults.length === 0 && debouncedSearchTerm.length >= 3 && (
        <div className="search-results absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="search-no-results px-4 py-2 text-sm text-gray-500">
            {t('search.noResults') || 'Ничего не найдено'}
          </div>
        </div>
      )}
    </div>
  );
}