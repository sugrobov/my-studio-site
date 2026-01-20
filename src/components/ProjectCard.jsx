import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ project }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300 h-full flex flex-col transform hover:-translate-y-1">
      
      {/* Изображение проекта */}
      <div className="relative overflow-hidden h-56">
        <img 
          src={project.image} 
          alt={project.title[currentLang]} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {t('project.new')}
          </span>
        </div>
      </div>

      {/* Контент карточки */}
      <div className="p-5 flex-grow flex flex-col">
        
        {/* Заголовок */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {project.title[currentLang]}
        </h3>
        
        {/* Описание */}
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
          {project.desc[currentLang]}
        </p>

        {/* Теги */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Кнопка "Подробнее" */}
        <div className="mt-auto">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg"
          >
            <span>{t('project.more')}</span>
            <svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}