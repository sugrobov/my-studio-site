import React from 'react'

function Aside({ isSidebarOpen, closeSidebar, menuItems }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`} // Скрываем на десктопе
    >
      {/* Заголовок с кнопкой закрытия */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Меню</h2>
        <button
          onClick={closeSidebar}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Закрыть меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Пункты меню */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={closeSidebar}
                className="block w-full text-left p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Aside