import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);

  const servicesData = [
    {
      id: 1,
      title: 'Financial Planning',
      image: 'service-1.jpg',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
      features: ['Secured Loans', 'Credit Facilities', 'Cash Advanced']
    },
    {
      id: 2,
      title: 'Cash Investment',
      image: 'service-2.jpg',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
      features: ['Secured Loans', 'Credit Facilities', 'Cash Advanced']
    },
    {
      id: 3,
      title: 'Financial Consultancy',
      image: 'service-3.jpg',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
      features: ['Secured Loans', 'Credit Facilities', 'Cash Advanced']
    },
    {
      id: 4,
      title: 'Business Loans',
      image: 'service-4.jpg',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
      features: ['Secured Loans', 'Credit Facilities', 'Cash Advanced']
    }
  ];

  const activeService = servicesData.find(service => service.id === activeTab);

  return (
    <div class="container-xxl service py-5">
      <div class="container">
        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Services</p>
          <h1 class="display-5 mb-5">Awesome Financial Services For Business</h1>
        </div>
        <div class="row g-4 wow fadeInUp" data-wow-delay="0.3s">
          <div class="col-lg-4">
            <div class="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
              {servicesData.map(service => (
                <button
                  key={service.id}
                  class={`nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 ${activeTab === service.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>{service.title}</h5>
                </button>
              ))}
            </div>
          </div>
          <div class="col-lg-8">
            <div class="tab-content w-100">
              <div class="tab-pane fade show active">
                <div class="row g-4">
                  <div class="col-md-6" style={{ minHeight: '350px' }}>
                    <div class="position-relative h-100">
                      <img class="position-absolute rounded w-100 h-100" src={`img/${activeService.image}`}
                        style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-4">25 Years Of Experience In Financial Support</h3>
                    <p class="mb-4">{activeService.description}</p>
                    {activeService.features.map((feature, index) => (
                      <p key={index}><i class="fa fa-check text-primary me-3"></i>{feature}</p>
                    ))}
                    <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;