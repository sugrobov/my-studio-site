import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="py-8">
      {/* Заголовок и описание */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {t('home.title')}
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          {t('home.description')}
        </p>
      </div>

      {/* Сетка проектов */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">
          {t('menu.projects')}
        </h2>
        <div className="flex flex-wrap -m-4">
          {projects.slice(0, 6).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {t('home.wantMore')}
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {t('home.portfolio')}
        </p>
        <a 
          href="/projects" 
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
        >
          {t('home.seeAllProjects')}
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}