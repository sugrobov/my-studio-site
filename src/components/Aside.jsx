import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { menuItems } from '../data/navigation'

function Aside({ isSidebarOpen, closeSidebar }) {
  const { t } = useTranslation();

  const handleItemClick = () => {
    closeSidebar();
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
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-80 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 shadow-2xl transform transition-all duration-300 ease-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden`}
      >
        {/* Заголовок с логотипом */}
        <div className="flex justify-between items-center p-6 border-b border-blue-700/50 bg-gradient-to-r from-blue-900/80 to-blue-800/80 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">RS</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Меню</h2>
              <p className="text-blue-200 text-sm">RS-SOFT Solutions</p>
            </div>
          </div>
          <button
            onClick={closeSidebar}
            className="text-blue-200 hover:text-white focus:outline-none transition-all p-2 hover:bg-blue-700/50 rounded-lg"
            aria-label="Закрыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Навигация */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={handleItemClick}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 group ${isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/20'
                      : 'text-blue-100 hover:bg-blue-800/50 hover:shadow-md hover:translate-x-1'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-blue-700/30 group-hover:bg-blue-600/30'}`}>
                        {getIcon(item.id)}
                      </div>
                      <span className="font-medium">{t(item.translationKey)}</span>
                      {!isActive && (
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Инфо блок */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/80 to-transparent">
          <div className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-700/30">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">💻</span>
              </div>
              <div>
                <p className="text-white font-medium">IT Solutions</p>
                <p className="text-blue-200 text-sm">Разработка & Консалтинг</p>
              </div>
            </div>
            <p className="text-blue-300 text-xs text-center border-t border-blue-700/50 pt-3">
              RS-SOFT © {new Date().getFullYear()} • Все права защищены
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Aside