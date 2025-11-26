import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg tracking-[3px] font-serif">JILLIAN RODAK</h3>
            <p className="text-gray-500 text-sm mt-2">Career Studio</p>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#story" className="hover:text-white transition-colors">My Story</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Jillian Rodak Career Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;