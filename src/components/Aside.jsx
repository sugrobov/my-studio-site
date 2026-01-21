import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Aside({ isSidebarOpen, closeSidebar }) {
  const { t } = useTranslation();

  const handleItemClick = () => {
    closeSidebar();
  };

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
      >
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-700">
          <h2 className="text-lg md:text-xl font-bold text-white">Меню</h2>
          <button
            onClick={closeSidebar}
            className="text-gray-300 hover:text-white focus:outline-none transition p-1"
            aria-label="Закрыть меню"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-3 md:p-4">
          <ul className="space-y-2 md:space-y-3">
            <li>
              <NavLink
                to="/home"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  `block w-full text-left p-3 md:p-4 rounded-lg text-base md:text-lg font-medium transition ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                {t('menu.home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  `block w-full text-left p-3 md:p-4 rounded-lg text-base md:text-lg font-medium transition ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                {t('menu.projects')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  `block w-full text-left p-3 md:p-4 rounded-lg text-base md:text-lg font-medium transition ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                {t('menu.about')}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <p className="text-gray-400 text-xs md:text-sm text-center">
            RS-SOFT © 2025
          </p>
        </div>
      </aside>
    </>
  )
}

export default Aside