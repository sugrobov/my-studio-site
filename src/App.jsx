import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const menuItems = ['Меню_1', 'Меню_2', 'Меню_3', 'Меню_4', 'Меню_5'];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} menuItems={menuItems} />
      {/* Основной макет: сайдбар + контент */}
      <div className="flex flex-1">
        {/* LeftSide (Сайдбар) — пункты меню на малых экранах */}
        <Aside isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} menuItems={menuItems} />
        {/* Overlay при открытом меню */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={closeSidebar}
          ></div>
        )}
        {/* Main */}
        <Main />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
