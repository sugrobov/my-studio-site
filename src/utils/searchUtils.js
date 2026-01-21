import { projects } from '../data/projects';

// Функция для поиска по проектам
export function searchProjects(query, language) {
  if (!query || query.length < 3) return [];

  const lowercasedQuery = query.toLowerCase();
  
  return projects.filter(project => {
    const title = project.title[language]?.toLowerCase() || '';
    const desc = project.desc[language]?.toLowerCase() || '';
    const tags = project.tags?.join(' ').toLowerCase() || '';
    
    return title.includes(lowercasedQuery) || 
           desc.includes(lowercasedQuery) || 
           tags.includes(lowercasedQuery);
  }).slice(0, 10); // до 10 результатов
}

// Функция для поиска по страницам
export function searchPages(query, language) {
  if (!query || query.length < 3) return [];

  const lowercasedQuery = query.toLowerCase();
  const pages = [
    { id: 'home', path: '/home', title: { ru: 'Главная', en: 'Home' } },
    { id: 'projects', path: '/projects', title: { ru: 'Наши проекты', en: 'Our Projects' } },
    { id: 'about', path: '/about', title: { ru: 'О компании', en: 'About' } },
  ];

  return pages.filter(page => {
    const title = page.title[language]?.toLowerCase() || '';
    return title.includes(lowercasedQuery);
  });
}