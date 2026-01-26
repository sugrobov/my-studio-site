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
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Team</p>
          <h1 class="display-5 mb-5">Exclusive Team</h1>
        </div>
        <div class="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <div class="team-item">
                <img class="img-fluid rounded" src={`img/${member.image}`} alt="" />
                <div class="team-text">
                  <h4 class="mb-0">{member.name}</h4>
                  <div class="team-social d-flex">
                    <a class="btn btn-square rounded-circle mx-1" href=""><i
                        class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-square rounded-circle mx-1" href=""><i
                        class="fab fa-instagram"></i></a>
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