import React from 'react';

const WhyWorkWithMe: React.FC = () => {
  const pillars = [
    { number: '1', title: 'Flexible, on-demand support', text: 'No packages. We work together only when you need it. Flexible support on your terms.' },
    { number: '2', title: 'Proven industry experience', text: '16 years of real industry experience navigating the corporate, government, and non-profit sectors.' },
    { number: '3', title: 'Practical, Real-World Guidance', text: 'No hypotheticals - we go deep into your unique reality and get to action.' },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl text-gray-800 text-center mb-16 font-serif">Why Work With Me?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="bg-white p-10 rounded-lg shadow-sm text-center group hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-dark text-2xl font-serif">
                {pillar.number}
              </div>
              <h4 className="text-xl text-gray-800 mb-4 font-medium">{pillar.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;