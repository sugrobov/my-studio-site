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
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Projects</p>
          <h1 className="display-5 mb-5 title-font">We Have Completed Latest Projects</h1>
        </div>
        <div className="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.3s">
          {projectsData.map((project, index) => (
            <div key={index} className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img className="img-fluid rounded" src={`img/${project.image}`} alt="" />
                <a href=""><i className="fa fa-link fa-3x text-primary"></i></a>
              </div>
              <div className="project-title">
                <h4 className="mb-0 title-font">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;