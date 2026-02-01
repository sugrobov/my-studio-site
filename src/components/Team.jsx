import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Kate Winslet',
      image: 'team-1.jpg'
    },
    {
      name: 'Jac Jacson',
      image: 'team-2.jpg'
    },
    {
      name: 'Doris Jordan',
      image: 'team-3.jpg'
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Team</p>
          <h1 className="display-5 mb-5 title-font">Exclusive Team</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <div className="team-item">
                <img className="img-fluid rounded" src={`img/${member.image}`} alt="" />
                <div className="team-text">
                  <h4 className="mb-0 title-font">{member.name}</h4>
                  <div className="team-social d-flex">
                    <a className="btn btn-square rounded-circle mx-1" href=""><i
                        className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square rounded-circle mx-1" href=""><i
                        className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;