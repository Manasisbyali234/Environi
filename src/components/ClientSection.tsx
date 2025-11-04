import React from 'react';

const ClientSection: React.FC = () => {
  const clients = [
    '/clients/client-1.png',
    '/clients/client-2.png',
    '/clients/client-3.png',
    '/clients/client-4.png',
    '/clients/client-5.png',
    '/clients/client-6.png',
    '/clients/client-7.png',
    '/clients/client-8.png',
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to work with industry leaders who share our commitment to sustainability and innovation.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
              >
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
              >
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;