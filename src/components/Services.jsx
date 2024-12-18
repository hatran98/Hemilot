import React from 'react';

const services = [
  {
    title: "Custom Software Development",
    description:
      "At Hemipay Technology, we specialize in crafting bespoke software solutions designed to address the unique needs and challenges of our clients.",
    img: "http://www.hemiiot.com/template/pc/skin/static/images/w26.png",
  },
  {
    title: "Comprehensive IT Services",
    description:
      "Our team of experts offers a full spectrum of IT services, including technical consultation, system integration, and ongoing support.",
    img:"http://www.hemiiot.com/template/pc/skin/static/images/w27.png"
  },
  {
    title: "Electronic Products",
    description:
      "With our state-of-the-art manufacturing facility and extensive network of suppliers, we offer a wide range of high-quality electronic products.",
    img:"http://www.hemiiot.com/template/pc/skin/static/images/w28.png"
  },
];

const Services = () => {
  return (
    <div 
      className={` py-12 transition-opacity duration-1000`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={service.img} alt={service.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
