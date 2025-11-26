import React from 'react';
import { User, FileText, Compass, MessageSquare, GraduationCap } from 'lucide-react';
import GeminiCareerTip from './GeminiCareerTip';

const Services: React.FC = () => {
  const services = [
    {
      icon: User,
      title: 'Interview Preparation',
      desc: 'Comprehensive preparation including case-based and presentation-based interviews. Get ready to showcase your best self.',
    },
    {
      icon: FileText,
      title: 'Resume & Cover Letter',
      desc: 'Professional development and editing of your resume and cover letter to make you stand out from the competition.',
    },
    {
      icon: Compass,
      title: 'Navigating Delicate Scenarios',
      desc: 'Expert guidance through team changes, pregnancy, work politics, job offer decisions, promotions, and leadership challenges.',
    },
    {
      icon: MessageSquare,
      title: 'Conversation Preparation',
      desc: 'Preparing for difficult conversations or crafting professional emails about sensitive workplace scenarios.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary-dark tracking-[3px] text-xs font-medium mb-4">SERVICES</p>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-serif mb-6">How I Can Help You</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            My coaching services are built upon real-world experience and practical strategies that transform potential into tangible results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
              <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-secondary-dark mb-6">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl text-gray-800 font-medium mb-3">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
          
          <div className="md:col-span-2 bg-white p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-secondary-dark mb-6">
              <GraduationCap size={24} />
            </div>
            <h4 className="text-xl text-gray-800 font-medium mb-3">New Graduate Planning</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Crafting comprehensive career plans for new university graduates entering the workforce.
            </p>
          </div>
        </div>

        <GeminiCareerTip />

        <div className="bg-neutral-100 rounded-lg p-12 text-center mt-16">
          <h3 className="text-2xl text-gray-800 font-serif mb-4">My Unique Approach</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            No commitment. No packages. We work together only when you need it. Real world guidance, no hypotheticals - we go deep into the specifics of your reality.
          </p>
          <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 text-[11px] tracking-[2px] font-medium transition-all duration-300">
            BOOK A SESSION
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;