import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link to="/home" className="text-2xl font-bold text-blue-600 title-font">
              RS-SOFT
            </Link>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors title-font"
              >
                {t(item.translationKey)}
              </Link>
            ))}
          </nav>

          {/* Кнопки языка и мобильного меню */}
          <div className="flex items-center space-x-4">
            {/* Выбор языка */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <span className="mr-1">{i18n.language === 'ru' ? 'RU' : 'EN'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => changeLanguage('ru')}
                    className={`block px-4 py-2 text-sm ${i18n.language === 'ru' ? 'text-blue-600 font-medium' : 'text-gray-700'
                      } hover:bg-gray-100 w-full text-left`}
                  >
                    Русский
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`block px-4 py-2 text-sm ${i18n.language === 'en' ? 'text-blue-600 font-medium' : 'text-gray-700'
                      } hover:bg-gray-100 w-full text-left`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Кнопка мобильного меню */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-600"
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
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="block text-gray-700 hover:text-blue-600 font-medium title-font"
                onClick={closeMenu}
              >
                {t(item.translationKey)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}