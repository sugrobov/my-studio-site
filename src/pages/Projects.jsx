import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Сайт для ресторана',
    preview: '/images/project1.jpg',
    description: 'Современный адаптивный сайт с онлайн-меню и бронированием столов.',
  },
  {
    id: 2,
    title: 'Интернет-магазин одежды',
    preview: '/images/project2.jpg',
    description: 'Полноценный e-commerce с корзиной, оплатой и личным кабинетом.',
  },
];

const Projects = () => {
  return (
    <main className="p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Наши проекты</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left">Превью</th>
                <th className="py-3 px-4 text-left">Описание</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-t">
                  <td className="py-4 px-4">
                    <img
                      src={project.preview}
                      alt={project.title}
                      className="w-24 h-24 object-cover rounded"
                    />
                  </td>
                  <td className="py-4 px-4">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-gray-700 mt-1">{project.description}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Projects;
