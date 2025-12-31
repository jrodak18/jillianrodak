import React from 'react';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary-dark tracking-[3px] text-xs font-medium mb-4">MY STORY</p>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-serif">The Journey That Shaped My Approach</h2>
        </div>

        <div className="flex justify-center mb-12">
          <img
            src="/jillian-about.png"
            alt="Jillian Rodak"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="text-gray-600 font-light leading-relaxed space-y-6 mb-8">
          <p>
            It started 16 years ago, when I graduated with an HBA from Ivey Business School. I was driven, passionate and entered the "real world" with rose-coloured glasses. I wanted to help make the world a better place, and I wanted to use business skills and tools I learned at Ivey to do it. But there were two problems. First, the economy was still recovering from the "great recession", so jobs were hard to come by; and second, corporate sustainability was just beginning to evolve, and there were no opportunities for new grads to get into this type of work. After graduating on such a high, it felt like everything I had worked for came crashing down, and I didn't know where to begin.
          </p>
        </div>

        <div className="bg-neutral-50 p-6 md:p-8 rounded-lg mb-8 border-l-4 border-secondary">
          <p className="text-lg md:text-xl text-gray-800 font-serif italic text-center">
            "After graduating on such a high, it felt like everything I had worked for came crashing down, and I didn't know where to begin."
          </p>
        </div>

        <div className="text-gray-600 font-light leading-relaxed space-y-6 mb-12">
          <p>
            That first year after graduation turned into the most difficult and rewarding year of my life. I quickly learned that submitting a resume and making some phone calls wasn't going to cut it. I learned how to hustle, hard. I created an internship for myself at a social purpose organization. I went to every industry event possible - pushing myself to say hello to strangers. I had about 50 coffee meetings. I started a blog and spent hours writing about topics I was passionate about. I developed a business strategy for a seasoned entrepreneur who trusted me with his passion and ideas. Twelve months later, I ended up with three job offers. I began working at a boutique corporate sustainability consulting firm, advising some of Canada's biggest consumer brands.
          </p>

          <p>
            Those twelve months didn't just lead me to my first job. They gave me the foundation to navigate the following 16 years of my career. I have since worked in the non-profit, government, and corporate sectors, building my way up to my current role as Vice President, Sustainability at Restaurants Canada. My career has been full of successes, setbacks, unexpected twists and turns that have pushed me to maneuver through corporate politics and confront uncomfortable scenarios at work. Through each of my three pregnancies I navigated difficult conversations, pending promotions, and job changes - experiences that have only strengthened my conviction that we create our own opportunities. I've been blessed to work with people who have encouraged me to go for what I wanted, even when it felt uneasy or "too aggressive". I have been mentored by brilliant, kind leaders and have mentored many colleagues.
          </p>
        </div>

        <div className="bg-neutral-800 text-white p-10 rounded-lg text-center">
          <p className="text-xl font-serif italic mb-8">
            Throughout my career, I have always been passionate about helping others along their own career paths - whether it's interview preparation, figuring out what's next, or navigating through challenging issues at work. I would love to help you navigate your journey.
          </p>
          <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 text-[11px] tracking-[2px] font-medium transition-all duration-300">
            LET'S CONNECT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Story;
