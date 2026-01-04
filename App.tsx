import React from 'react';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Story from './components/Story';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="font-sans antialiased text-gray-800 bg-white selection:bg-secondary-dark selection:text-white">
      <Navbar />
      <SocialSidebar />
      <Hero />
      <AboutPreview />
      <WhyWorkWithMe />
      <section className="py-24 bg-neutral-800 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl text-white font-serif mb-6">Ready to Take Control of Your Career?</h3>
          <p className="text-gray-400 mb-8 text-lg font-light">Let's work together to navigate your next pivotal career moment.</p>
          <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 text-[11px] tracking-[2px] font-medium transition-all duration-300">
            GET IN TOUCH
          </a>
        </div>
      </section>
      <Services />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;