import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LearnMoreButton from './UI/LearnMoreButton';

export default function ProjectCard({ project, horizontal = false }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const isNew = project.id <= 3;
  // ПРОВЕРКА: если project.tags существует, используем старую структуру
  // если project.tagKeys существует, используем новую структуру с переводами
  const translatedTags = project.tagKeys
    ? project.tagKeys.map(key => t(`tags.${key}`))
    : (project.tags || []); // fallback на старые теги если нет tagKeys

  // Стили для вертикальной и горизонтальной карточек
  const containerClasses = horizontal
    ? "p-2 w-full"
    : "p-4 lg:w-1/3 md:w-1/2 w-full";
    
  const cardClasses = horizontal
    ? "card h-full flex flex-row group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
    : "card h-full flex flex-col group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500";
    
  const imageClasses = horizontal
    ? "w-1/3 h-48 relative overflow-hidden shrink-0"
    : "w-full h-48 relative overflow-hidden shrink-0";
    
  const contentClasses = horizontal
    ? "bg-linear-to-br from-white to-gray-50 p-4 flex-1"
    : "bg-linear-to-br from-white to-gray-50 p-6";
    
  const titleClasses = horizontal
    ? "font-bold text-lg text-gray-800 mb-1 title-font"
    : "font-bold text-lg text-gray-800 mb-2 title-font";
    
  const descriptionClasses = horizontal
    ? "text-gray-600 mb-2 body-font text-sm"
    : "text-gray-600 mb-4 body-font";
    
  const tagsContainerClasses = horizontal
    ? "mb-2"
    : "mb-4";
    
  const tagsClasses = horizontal
    ? "flex flex-wrap gap-1"
    : "flex flex-wrap gap-1.5";
    
  const tagClasses = horizontal
    ? "inline-block bg-linear-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full title-font"
    : "inline-block bg-linear-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full title-font";
    
  const tagsToShow = horizontal ? 3 : 4;
    
  const bottomContainerClasses = horizontal
    ? "border-t border-gray-100 pt-2 mt-3"
    : "border-t border-gray-100 pt-4 mt-6";
    
  const linkClasses = horizontal
    ? "inline-flex items-center text-blue-600 hover:text-blue-800 font-medium title-font text-sm"
    : "inline-flex items-center text-blue-600 hover:text-blue-800 font-medium title-font";
    
  const linkIconClasses = horizontal
    ? "w-3 h-3 ml-1"
    : "w-4 h-4 ml-1";
    
  const statusClasses = horizontal
    ? "px-1.5 py-0.5 rounded-full text-xs"
    : "px-2 py-1 rounded-full";

  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        {/* Градиентный блок или изображение */}
        {project.gradient ? (
          <div
            className={imageClasses}
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
        ) : (
          <img src={project.image} alt={project.title[currentLang]} className="w-full h-full object-cover" />
        )}
        
        <div className={contentClasses}>
          <div className="flex justify-between items-start h-full flex-col">
            <div className="flex-1">
              <h4 className={`${titleClasses} line-clamp-1`}><b>{project.title[currentLang]}</b></h4>
              <p className={`${descriptionClasses} line-clamp-2 flex-1`}>{project.desc[currentLang]}</p>
            </div>
            
            {/* Теги */}
            <div className={tagsContainerClasses}>
              <div className={tagsClasses}>
                {translatedTags.slice(0, tagsToShow).map((tag, index) => (
                  <span
                    key={index}
                    className={tagClasses}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Нижний блок с кнопкой и статусом */}
            <div className={bottomContainerClasses}>
              <div className="flex items-center justify-between">
                <LearnMoreButton href={`/project/${project.id}`} className="text-sm">
                  {t('project.more')}
                </LearnMoreButton>
                
                <div className="flex items-center text-xs text-gray-500">
                  <span className={`${statusClasses} ${project.id % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} title-font`}>
                    {project.id % 2 === 0 ? t('project.completed') : t('project.inProgress')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}