import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-secondary-dark tracking-[3px] text-xs font-medium mb-4">WHAT I'M ABOUT</p>
        <h3 className="text-4xl text-gray-800 mb-8 font-serif">Hi, I'm Jillian</h3>
        <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
          I have 16 years of experience navigating pivotal career moments. I can help you rise to the occasion throughout yours.
        </p>
        <p className="text-gray-500 leading-relaxed mb-10">
          My mission is to empower you to feel confident and equipped to steer your career path. Whether you are a new grad, gunning for that promotion, finding your leaders challenging, or unsure how to shape your professional growth around family planning, I've been there - and I'm here to help.
        </p>
        <a 
          href="#story" 
          className="inline-flex items-center text-secondary-dark hover:text-primary-dark border-b-2 border-secondary-dark hover:border-primary-dark pb-1 transition-all duration-300 gap-2 font-medium"
        >
          Read My Full Story <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default AboutPreview;