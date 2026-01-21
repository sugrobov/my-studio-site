import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ project }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Определяем является ли проект новым (первые 3 проекта)
  const isNew = project.id <= 3;

  return (
    <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full bg-gradient-to-b from-gray-50 to-white px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-[1.02]">
        
        {/* Бейдж "New" */}
        {isNew && (
          <div className="absolute top-4 right-4">
            <span style={{backgroundColor: '#f00b0b'}} className="text-white text-[10px] py-0.5 px-1 font-semibold rounded-full">
              {t('project.new')}
            </span>
          </div>
        )}

        {/* Категория (первый тег) */}
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {project.tags && project.tags.length > 0 ? project.tags[0] : t('project.category')}
        </h2>

        {/* Заголовок проекта */}
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {project.title[currentLang]}
        </h1>

        {/* Описание проекта */}
        <p className="leading-relaxed mb-3 line-clamp-3 text-justify">
          {project.desc[currentLang]}
        </p>

        {/* Теги (все теги) */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tags?.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Ссылка "Подробнее" */}
        <div className="mt-4">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center bg-gray-100 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-sm mt-4 md:mt-0"
          >
            {t('project.more')}
            <svg 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              className="w-4 h-4 ml-1" 
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        {/* Нижняя часть с информацией */}
        <div className="text-center mt-8 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4 bg-gradient-to-t from-white via-white to-transparent">
          {/* Количество тегов */}
          <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M17.5 5.5a2.5 2.5 0 0 1 5 0v2.5a2.5 2.5 0 0 1-5 0V5.5ZM7 11a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-5Z"></path>
            </svg>
            {project.tags?.length || 0} тегов
          </span>
          
          {/* Статус проекта */}
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {project.id % 2 === 0 ? t('project.completed') : t('project.inProgress')}
          </span>
        </div>
      </div>
    </div>
  );
}