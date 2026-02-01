import HomeDub from '../pages/HomeDub';
import Projects from '../pages/Projects';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import AboutDub from '../pages/AboutDub';
import ServicesDub from '../pages/ServicesDub';

// Можно экспортировать отдельные страницы для возможного использования в других местах
// export { HomeDub, Projects, ProjectDetailPage, AboutDub, ServicesDub };

// Основной массив маршрутов
export const routes = [
  {
    path: '/',
    element: <HomeDub />,
    name: 'home',
    exact: true
  },
  {
    path: '/home-dub',
    element: <HomeDub />,
    name: 'home-dub',
    exact: true
  },
  {
    path: '/projects',
    element: <Projects />,
    name: 'projects',
    exact: true
  },
  {
    path: '/project/:id',
    element: <ProjectDetailPage />,
    name: 'project-detail',
    exact: true
  },
  {
    path: '/about-dub',
    element: <AboutDub />,
    name: 'about-dub',
    exact: true
  },
  {
    path: '/services-dub',
    element: <ServicesDub />,
    name: 'services-dub',
    exact: true
  },
  // для будущего использования:
  // {
  //   path: '/admin',
  //   element: <Admin />,
  //   name: 'admin',
  //   exact: true,
  //   requiresAuth: true // пример дополнительного флага
  // }
];

export default routes;