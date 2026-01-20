import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';

export default function ProjectDetail({ id }) {
  const { t, i18n } = useTranslation();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  const currentLang = i18n.language;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <Link to="/projects" className="text-blue-600 hover:text-blue-800 hover:underline mb-6 inline-flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {t('project.back')}
      </Link>
      
      <img src={project.image} alt={project.title[currentLang]} className="w-full h-96 object-cover rounded-xl mb-8" />
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.title[currentLang]}</h1>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags?.map((tag, index) => (
          <span 
            key={index}
            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.desc[currentLang]}</p>
      
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Детали проекта</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-600 mb-2">Технологии:</h4>
            <p className="text-gray-800">{project.tags?.join(', ')}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-600 mb-2">Статус:</h4>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Завершен
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}