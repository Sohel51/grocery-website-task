import React from 'react';

const services = [
  {
    title: 'Web Design',
    description: 'We create beautiful and functional websites to help your business succeed.',
    icon: 'fa-laptop'
  },
  {
    title: 'Social Media Marketing',
    description: 'We develop and execute effective social media strategies to help you reach your audience.',
    icon: 'fa-share-alt'
  },
  {
    title: 'Search Engine Optimization',
    description: 'We optimize your website to rank higher in search engine results pages and drive more traffic to your site.',
    icon: 'fa-search'
  },
];

const FeaturedServicesSection = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Featured Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl mb-4">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedServicesSection;
