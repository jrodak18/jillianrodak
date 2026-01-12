import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Jillian's guidance was pivotal in my transition to a leadership role. Her real-world perspective is invaluable.",
      author: "Sarah J.",
      role: "Marketing Director"
    },
    {
      quote: "I felt so much more confident going into my interviews after just two sessions. Highly recommend!",
      author: "Michael R.",
      role: "Software Engineer"
    },
    {
      quote: "The practical advice on navigating office politics saved me months of stress. Jillian truly cares about your success.",
      author: "Emily L.",
      role: "Senior Consultant"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary-dark tracking-[3px] text-xs font-medium mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-serif mb-6">What My Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-neutral-50 p-8 rounded-lg border border-gray-100 flex flex-col h-full">
              <div className="flex-1">
                <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
              </div>
              <div>
                <p className="text-gray-800 font-medium">{t.author}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
