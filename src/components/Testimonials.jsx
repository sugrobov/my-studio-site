import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
      image: 'testimonial-1.jpg',
      name: 'Client Name',
      profession: 'Profession'
    },
    {
      text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
      image: 'testimonial-2.jpg',
      name: 'Client Name',
      profession: 'Profession'
    },
    {
      text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
      image: 'testimonial-3.jpg',
      name: 'Client Name',
      profession: 'Profession'
    },
    {
      text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
      image: 'testimonial-4.jpg',
      name: 'Client Name',
      profession: 'Profession'
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Testimonial</p>
          <h1 className="display-5 mb-5 title-font">What Our Clients Say!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.3s">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                <p className="body-font">{testimonial.text}</p>
              </div>
              <img className="rounded-circle mb-3" src={`img/${testimonial.image}`} alt="" />
              <h4 className="title-font">{testimonial.name}</h4>
              <span className="body-font">{testimonial.profession}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;