import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';

export default function ProjectDetail({ id }) {
  const { t, i18n } = useTranslation();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  const currentLang = i18n.language;
  // Получаем переведенные теги
  const translatedTags = project.tagKeys?.map(key => t(`tags.${key}`)) || [];
  // Получаем первый тег как тип проекта
  const projectType = translatedTags.length > 0 ? translatedTags[0] : t('tags.web');

    return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <Link to="/projects" className="text-blue-600 hover:text-blue-800 hover:underline mb-6 inline-flex items-center title-font">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {t('project.back')}
      </Link>
      
      {/* Градиентный блок с эмодзи */}
      <div 
        className="w-full h-96 rounded-xl mb-8 relative overflow-hidden shadow-lg"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl opacity-80">{project.emoji}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-8">
          <h1 className="text-4xl font-bold text-white mb-2 title-font">{project.title[currentLang]}</h1>
          <div className="flex flex-wrap gap-2 mt-3">
            {translatedTags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/30 title-font"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Описание проекта */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8 body-font">{project.desc[currentLang]}</p>
      
      {/* Теги проекта */}
      <div className="flex flex-wrap gap-2 mb-6">
        {translatedTags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full title-font"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Детали проекта */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 title-font">{t('project.details')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-600 mb-2 title-font">{t('project.technologies')}:</h4>
            <p className="text-gray-800 body-font">{translatedTags.join(', ')}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-600 mb-2 title-font">{t('project.status')}:</h4>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium title-font ${project.id % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {project.id % 2 === 0 ? t('project.completed') : t('project.inProgress')}
            </span>
          </div>
          <div>
            <h4 className="font-medium text-gray-600 mb-2 title-font">{t('project.type')}:</h4>
            <p className="text-gray-800 body-font">{projectType}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-600 mb-2 title-font">{t('project.projectId')}:</h4>
            <p className="text-gray-800 font-mono body-font">#{project.id.toString().padStart(3, '0')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}