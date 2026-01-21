import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import About from "./pages/About";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header
          toggleMobileMenu={toggleSidebar}
        />
        <Aside
          isSidebarOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
        />
        <div className="flex-1">
          <main className="py-6 md:py-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDetailPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </main>
        </div>
        <footer className="bg-white border-t-2 border-gray-300 p-4 md:p-6 text-center text-sm md:text-base text-gray-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            © 2025 RS-SOFT.RU. Все права защищены.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;