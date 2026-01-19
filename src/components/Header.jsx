import React from 'react';

function Header({ toggleSidebar, menuItems }) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        {/* Логотип */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-12">
          <span className="ml-3 text-xl">Мой Сайт</span>
        </a>

        {/* Меню и форма в одной строке */}
        <div className="flex flex-1 items-center space-x-8">
          
          {/* Меню (на десктопе) */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="text-gray-700 hover:text-blue-600 font-medium transition whitespace-nowrap text-sm"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Текстовое поле  */}
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Поиск"
              className="w-32 sm:w-40 bg-gray-100 bg-opacity-50 rounded border border-gray-300 
                         focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 
                         text-sm outline-none text-gray-700 py-1 px-2 
                         transition-colors duration-200 ease-in-out"
            />
            {/* Кнопка */}
            {/* <button className="text-white bg-indigo-500 border-0 py-1.5 px-4 
                               hover:bg-indigo-600 rounded text-sm font-medium 
                               transition">
              Button
            </button> */}
          </div>
        </div>

        {/* Бургер-меню (на мобильных) */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden ml-auto p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Открыть меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
