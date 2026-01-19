import React from 'react';

const Home = () => {
  return (
    <main className="p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">Добро пожаловать в нашу студию</h1>

        <img
          src="/images/hero.jpg"
          alt="Main"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />

        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, vitae ultricies nisl nunc euismod nisl.
        </p>

        <p className="text-lg leading-relaxed">
          Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, vitae ultricies nisl nunc euismod nisl. Sed euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="/images/project1.jpg"
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
          <img
            src="/images/project2.jpg"
            alt="Project 2"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
        </div>

        <p className="text-lg leading-relaxed">
          Fusce euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, vitae ultricies nisl nunc euismod nisl. Sed euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc.
        </p>
      </div>
    </main>
  );
};

export default Home;
