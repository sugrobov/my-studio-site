import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectDetailPage from './pages/ProjectDetailPage';
import HomeDub from './pages/HomeDub';
import ServicesDub from './pages/ServicesDub'; 
import AboutDub from './pages/AboutDub';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <Aside isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      
      {/* Основной контент с ограничением по ширине */}
      <main className="grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
          <Routes>
            <Route path="/" element={<HomeDub />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/home-dub" element={<HomeDub />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/about-dub" element={<AboutDub />} />
            <Route path="/services-dub" element={<ServicesDub />} />
          </Routes>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;