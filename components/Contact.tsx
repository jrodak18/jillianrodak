import React, { useRef, useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import CalendlyEmbed from './CalendlyEmbed';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(formRef.current);
    const data = {
      user_name: formData.get('user_name') as string,
      user_email: formData.get('user_email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        formRef.current?.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary-dark tracking-[3px] text-xs font-medium mb-4">CONTACT</p>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-serif mb-6">I Would Love to Work With You</h2>
          <p className="text-gray-500">
            Ready to take the next step in your career journey? Let's connect and discuss how I can help you get there.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-neutral-50 p-8 rounded-lg h-full">
            <h3 className="text-xl text-gray-800 font-medium mb-6">Get In Touch</h3>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Name</label>
                <input 
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors bg-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Email</label>
                <input 
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors bg-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors bg-white resize-none"
                  placeholder="Tell me about your career goals..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 text-[11px] tracking-[2px] font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                  Sorry, there was an error sending your message. Please try again or email directly.
                </div>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg text-gray-800 font-medium mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/jillianrodak/" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-secondary-dark hover:bg-secondary hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-secondary-dark hover:bg-secondary hover:text-white transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Booking */}
          <div className="flex flex-col gap-8 h-full">
            <div className="bg-neutral-800 text-white p-6 md:p-8 rounded-lg flex-1 min-h-[800px] flex flex-col">
              <h3 className="text-xl font-medium mb-2">Book a Consultation</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Schedule a free consultation to discuss your career goals and how we can work together.
              </p>
              
              {/* Calendly Embed - Replace the URL below with your actual Calendly link */}
              <div className="flex-1 rounded-lg overflow-hidden">
                 <CalendlyEmbed url="https://calendly.com/jillian-rodak" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
