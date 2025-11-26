import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-40">
      <span className="text-[10px] tracking-[2px] text-gray-500 [writing-mode:vertical-rl] rotate-180 mb-2 font-medium">
        LET'S CONNECT
      </span>
      <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300">
        <Linkedin size={18} />
      </a>
      <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300">
        <Instagram size={18} />
      </a>
    </div>
  );
};

export default SocialSidebar;
