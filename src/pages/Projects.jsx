import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="py-8">
      {/* Заголовок и описание */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 title-font">
          {t('projects.title')}
        </h1>
        <p className="text-gray-600 text-lg mb-8 body-font">
          {t('projects.totalProjects')} <span className="font-bold text-blue-600">{projects.length}</span>
        </p>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            {t('projects.filters.all')}
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            {t('projects.filters.web')}
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            {t('projects.filters.mobile')}
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            {t('projects.filters.design')}
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            {t('projects.filters.corporate')}
          </button>
        </div>
      </div>

      {/* Сетка проектов */}
      <div className="flex flex-wrap -m-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Пагинация */}
      <div className="flex justify-center items-center mt-12 space-x-2">
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          ←
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-lg">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          3
        </button>
        <span className="px-2 text-gray-500">...</span>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          8
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          →
        </button>
      </div>
    </div>
  );
}