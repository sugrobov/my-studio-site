import React from 'react';

const Facts = () => {
  const factsData = [
    {
      icon: 'fa fa-users',
      count: '1234',
      label: 'Happy Clients'
    },
    {
      icon: 'fa fa-check',
      count: '1234',
      label: 'Projects Completed'
    },
    {
      icon: 'fa fa-users-cog',
      count: '1234',
      label: 'Dedicated Staff'
    },
    {
      icon: 'fa fa-award',
      count: '1234',
      label: 'Awards Achieved'
    }
  ];

  return (
    <div className="container-fluid facts my-5 py-5">
      <div className="container py-5">
        <div className="row g-5">
          {factsData.map((fact, index) => (
            <div key={index} className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <i className={`${fact.icon} fa-3x text-white mb-3`}></i>
              <h1 className="display-4 text-white title-font" data-toggle="counter-up">{fact.count}</h1>
              <span className="fs-5 text-white body-font">{fact.label}</span>
              <hr className="bg-white w-25 mx-auto mb-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;