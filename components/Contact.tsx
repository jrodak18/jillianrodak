import React from 'react';
import { Mail, Linkedin, Instagram, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary-dark tracking-[3px] text-xs font-medium mb-4">CONTACT</p>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-serif mb-6">I Would Love to Work With You</h2>
          <p className="text-gray-500">
            Ready to take the next step in your career journey? Let's connect and discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral-50 p-8 rounded-lg">
            <h3 className="text-xl text-gray-800 font-medium mb-6">Get In Touch</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors bg-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors bg-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors bg-white resize-none"
                  placeholder="Tell me about your career goals..."
                ></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 text-[11px] tracking-[2px] font-medium transition-all duration-300">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info & Booking */}
          <div className="flex flex-col gap-8">
            <div className="bg-neutral-800 text-white p-8 rounded-lg flex-1">
              <h3 className="text-xl font-medium mb-4">Book a Consultation</h3>
              <p className="text-gray-400 mb-8 text-sm">
                Schedule a free consultation to discuss your career goals and how we can work together.
              </p>
              <div className="bg-neutral-700 rounded-lg py-12 text-center border border-neutral-600 hover:border-secondary transition-colors cursor-pointer group">
                <Calendar size={40} className="mx-auto mb-4 text-secondary group-hover:text-white transition-colors" />
                <p className="text-gray-300 text-sm">Calendly booking widget</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl text-gray-800 font-medium mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-secondary-dark hover:bg-neutral-200 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-secondary-dark hover:bg-neutral-200 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-secondary-dark hover:bg-neutral-200 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;