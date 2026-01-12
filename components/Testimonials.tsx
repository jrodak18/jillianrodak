import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Jillian helped me navigate through a time of high uncertainty in my career — a time with rapid market and industry changes, technology changing the future of work, and a time in my life where there was high cultural and societal pressure for me to succeed. Jillian was able to help me make sense of how to navigate changes while still achieving my high personal ambitions.",
      author: "Misha",
      role: ""
    },
    {
      quote: "Jillian helped me navigate the hardest year of my professional life. After getting laid off and falling into a job that wasn’t the right fit, she coached me through some tough decisions that ultimately led to what ended up being the most rewarding phase of my career. Without her foresight and unique perspective, I might not have landed so steadily on my feet so soon.",
      author: "Shane",
      role: ""
    },
    {
      quote: "Working with Jillian transformed my interview preparation. She helped me clearly articulate my experience using strong, concise stories, coached me on answering behavioral questions, and gave actionable feedback on my delivery and body language. I walked into the interview confident, prepared, and ultimately landed my dream job.",
      author: "Nikki",
      role: ""
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary-dark tracking-[3px] text-xs font-medium mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-serif mb-6">What My Clients Are Saying</h2>
        </div>

        <div className="flex justify-center">
          <div className="flex md:grid md:grid-cols-3 max-w-7xl gap-8 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 md:pb-0">
            {testimonials.map((t, index) => (
              <div key={index} className="min-w-full md:min-w-0 snap-center px-4 md:px-0">
                <div className="bg-neutral-50 p-8 md:p-12 rounded-lg border border-gray-100 flex flex-col h-full text-center">
                  <div className="flex-1">
                    <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{t.quote}"</p>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-lg">— {t.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile Swipe Indicator */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {testimonials.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-neutral-300" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
