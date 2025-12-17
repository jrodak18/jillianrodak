import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl text-gray-800 leading-[1.1] mb-6 font-serif font-light">
            Own Your<br />Career Journey.
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto md:mx-0 font-light">
            Navigate those pivotal professional moments with confidence
          </p>
          <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 text-[11px] tracking-[2px] font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            BOOK YOUR FREE CONSULTATION
          </a>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 relative max-w-md mx-auto md:max-w-full">
          <div className="absolute -top-4 -right-4 w-full h-full bg-neutral-100 rounded-lg -z-10"></div>
          {/* UPDATED PATH BELOW */}
          <img 
            src="/jillian-hero.jpg" 
            alt="Jillian Rodak" 
            className="w-full h-auto rounded-lg shadow-2xl object-cover aspect-[5/6]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
