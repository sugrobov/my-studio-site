import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="py-8">
      {/* Заголовок и описание */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          RS-SOFT.RU - Современные IT-решения
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Разрабатываем инновационные проекты в сфере веб-разработки, мобильных приложений и облачных решений
        </p>
      </div>

      {/* Сетка проектов */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">
          Последние проекты
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0, 6).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Хотите увидеть больше наших работ?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          В нашем портфолио более 50 успешно реализованных проектов различной сложности
        </p>
        <a 
          href="/projects" 
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Смотреть все проекты
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}