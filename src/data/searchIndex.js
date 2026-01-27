// Автоматический поисковый индекс для всего сайта
import { menuItems } from './navigation';
import { projects } from './projects';

export const buildSearchIndex = (t, i18n) => {
  const currentLang = i18n.language;
  const index = [];

  // 1. Автоматически индексируем меню
  menuItems.forEach(item => {
    index.push({
      id: `menu-${item.id}`,
      type: 'menu',
      text: t(item.translationKey),
      route: item.path,
      priority: 10
    });
  });

  // 2. Автоматически индексируем проекты
  projects.forEach(project => {
    index.push({
      id: `project-${project.id}`,
      type: 'project',
      text: project.title[currentLang],
      description: project.desc[currentLang],
      route: `/project/${project.id}`,
      priority: 9
    });

    // Индексируем теги проектов
    if (project.tagKeys) {
      project.tagKeys.forEach(tagKey => {
        const tagText = t(`tags.${tagKey}`);
        if (tagText && !tagText.includes('tags.')) {
          index.push({
            id: `tag-${project.id}-${tagKey}`,
            type: 'tag',
            text: tagText,
            route: `/project/${project.id}`,
            priority: 5
          });
        }
      });
    }
  });

  // 3. Автоматически индексируем все переводы с префиксами страниц
  const pagePrefixes = [
    'home',
    'homeDub',
    'about',
    'aboutDub',
    'services',
    'servicesDub',
    'projects',
    'contact'
  ];

  pagePrefixes.forEach(prefix => {
    try {
      // Получаем все переводы для этой страницы
      const pageTranslations = t(`${prefix}`, { returnObjects: true });
      if (typeof pageTranslations === 'object') {
        indexPageContent(pageTranslations, prefix, index, t);
      }
    } catch (e) {
      // Страница может не существовать - это нормально
    }
  });

  return index;
};

// Рекурсивно индексирует контент страницы
const indexPageContent = (data, prefix, index, t, path = '') => {
  Object.keys(data).forEach(key => {
    const currentPath = path ? `${path}.${key}` : key;
    const value = data[key];
    
    if (typeof value === 'string' && value.length > 10) {
      // Индексируем только значимые тексты
      const route = getRouteFromPrefix(prefix);
      if (route) {
        index.push({
          id: `page-${prefix}-${currentPath}`,
          type: 'page',
          text: value,
          route: route,
          priority: getPriorityFromPath(currentPath),
          path: `${prefix}.${currentPath}`
        });
      }
    } else if (typeof value === 'object' && value !== null) {
      // Рекурсивно обходим вложенные объекты
      indexPageContent(value, prefix, index, t, currentPath);
    }
  });
};

// Маппинг префиксов страниц на маршруты
const getRouteFromPrefix = (prefix) => {
  const routeMap = {
    'home': '/home',
    'homeDub': '/home-dub',
    'about': '/about',
    'aboutDub': '/about-dub',
    'services': '/services',
    'servicesDub': '/services-dub',
    'projects': '/projects',
    'contact': '/contact'
  };
  return routeMap[prefix];
};

// Приоритет в зависимости от типа контента
const getPriorityFromPath = (path) => {
  if (path.includes('title') || path.includes('hero')) return 8;
  if (path.includes('description')) return 7;
  if (path.includes('content')) return 6;
  return 4;
};

// Фильтрация поиска
export const searchInIndex = (index, query, options = {}) => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery || normalizedQuery.length < 2) return [];

  const results = index
    .filter(item => {
      const text = item.text?.toLowerCase();
      const description = item.description?.toLowerCase();
      
      return text?.includes(normalizedQuery) || 
             description?.includes(normalizedQuery);
    })
    .sort((a, b) => {
      // Сначала по приоритету
      if (a.priority !== b.priority) return b.priority - a.priority;
      
      // Затем по длине совпадения (более точные совпадения выше)
      const aScore = calculateMatchScore(a.text, normalizedQuery);
      const bScore = calculateMatchScore(b.text, normalizedQuery);
      return bScore - aScore;
    });

  // Удаляем дубликаты (одинаковый текст + маршрут)
  const uniqueResults = [];
  const seen = new Set();
  
  results.forEach(result => {
    const key = `${result.text}-${result.route}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueResults.push(result);
    }
  });

  return options.limit ? uniqueResults.slice(0, options.limit) : uniqueResults;
};

// Оценка релевантности
const calculateMatchScore = (text, query) => {
  if (!text) return 0;
  const lowerText = text.toLowerCase();
  
  // Начало строки дает больший вес
  if (lowerText.startsWith(query)) return 10;
  
  // Содержит запрос
  if (lowerText.includes(query)) {
    // Более короткие тексты релевантнее
    return 5 - (text.length / 100);
  }
  
  return 0;
};