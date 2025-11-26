import React, { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    
    // Check if script is already present to avoid duplicates
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src', scriptSrc);
      script.setAttribute('async', 'true');
      if (head) {
        head.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="w-full h-full min-h-[650px] bg-white rounded-lg overflow-hidden">
      <div 
        className="calendly-inline-widget" 
        data-url={url} 
        style={{ minWidth: '320px', height: '100%' }} 
      />
    </div>
  );
};

export default CalendlyEmbed;
