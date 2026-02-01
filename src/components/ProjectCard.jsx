
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ project }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const isNew = project.id <= 3;
  // ПРОВЕРКА: если project.tags существует, используем старую структуру
  // если project.tagKeys существует, используем новую структуру с переводами
  const translatedTags = project.tagKeys 
    ? project.tagKeys.map(key => t(`tags.${key}`))
    : (project.tags || []); // fallback на старые теги если нет tagKeys

  return (
    <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col">
        
        {/* Градиентный блок */}
        <div 
          className="w-full h-40 relative overflow-hidden shrink-0"
          style={{ background: project.gradient }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl opacity-90">{project.emoji}</span>
          </div>
          {isNew && (
            <div className="absolute top-3 right-3">
              <span className="bg-red-500 text-white text-[10px] py-1 px-2 font-bold rounded-full shadow">
                {t('project.new')}
              </span>
            </div>
          )}
        </div>

        {/* Контент */}
        <div className="p-5 flex flex-col grow">
          {/* Заголовок - фиксированная высота, 2 строки максимум */}
          <div className="min-h-14 mb-2">
            <h2 className="font-bold text-gray-800 text-lg line-clamp-2 leading-tight title-font">
              {project.title[currentLang]}
            </h2>
          </div>

          {/* Описание - фиксированная высота, 3 строки */}
          <div className="grow mb-3">
            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed body-font">
              {project.desc[currentLang]}
            </p>
          </div>

          {/* Теги - фиксированная высота, 2 строки максимум */}
          <div className="min-h-15 mb-4">
            <div className="flex flex-wrap gap-1.5">
              {translatedTags.slice(0, 4).map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 text-[11px] px-2.5 py-1 rounded-full border border-blue-100 font-medium title-font"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Нижний блок с кнопкой и статусом */}
          <div className="mt-auto pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <Link
                to={`/project/${project.id}`}
                className="inline-flex items-center bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 px-4 rounded-lg text-sm font-semibold transition-colors duration-200 title-font"
              >
                {t('project.more')}
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <div className="flex items-center text-xs text-gray-500">
                <span className={`px-2 py-1 rounded-full ${project.id % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} title-font`}>
                  {project.id % 2 === 0 ? t('project.completed') : t('project.inProgress')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}