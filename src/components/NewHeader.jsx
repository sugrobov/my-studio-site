import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function NewHeader() {
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

  return (
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <small className="body-font"><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</small>
          <small className="ms-4 body-font"><i className="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm</small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small className="body-font"><i className="fa fa-envelope text-primary me-2"></i>info@example.com</small>
          <small className="ms-4 body-font"><i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</small>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="display-5 text-primary m-0 title-font">Finanza</h1>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">

            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a href="index.html" className="nav-item nav-link active body-font">Home</a>
              <a href="about.html" className="nav-item nav-link body-font">About</a>
              <a href="service.html" className="nav-item nav-link body-font">Services</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle body-font" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu border-light m-0">
                  <a href="project.html" className="dropdown-item body-font">Projects</a>
                  <a href="feature.html" className="dropdown-item body-font">Features</a>
                  <a href="team.html" className="dropdown-item body-font">Team Member</a>
                  <a href="testimonial.html" className="dropdown-item body-font">Testimonial</a>
                  <a href="404.html" className="dropdown-item body-font">404 Page</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link body-font">Contact</a>
            </div>

            <div className="d-none d-lg-flex ms-2">
              <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                <small className="fab fa-facebook-f text-primary"></small>
              </a>
              <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                <small className="fab fa-twitter text-primary"></small>
              </a>
              <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                <small className="fab fa-linkedin-in text-primary"></small>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  } body-font`
                }
              >
                {t('menu.home')}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  } body-font`
                }
              >
                {t('menu.about')}
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  } body-font`
                }
              >
                {t('menu.projects')}
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  } body-font`
                }
              >
                {t('menu.contact')}
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}