import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: 'Financial Planning',
      image: 'service-1.jpg'
    },
    {
      title: 'Cash Investment',
      image: 'service-2.jpg'
    },
    {
      title: 'Financial Consultancy',
      image: 'service-3.jpg'
    },
    {
      title: 'Business Loans',
      image: 'service-4.jpg'
    }
  ];

  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Projects</p>
          <h1 class="display-5 mb-5">We Have Completed Latest Projects</h1>
        </div>
        <div class="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.3s">
          {projectsData.map((project, index) => (
            <div key={index} class="project-item pe-5 pb-5">
              <div class="project-img mb-3">
                <img class="img-fluid rounded" src={`img/${project.image}`} alt="" />
                <a href=""><i class="fa fa-link fa-3x text-primary"></i></a>
              </div>
              <div class="project-title">
                <h4 class="mb-0">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;