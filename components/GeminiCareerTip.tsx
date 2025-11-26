import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { generateCareerTip } from '../services/geminiService';

const GeminiCareerTip: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [tip, setTip] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const topics = ['Negotiation', 'Interview Confidence', 'Resume Gap', 'Leadership', 'Burnout'];

  const handleGetTip = async (selectedTopic: string) => {
    setLoading(true);
    setTopic(selectedTopic);
    const result = await generateCareerTip(selectedTopic);
    setTip(result);
    setLoading(false);
    setHasSearched(true);
  };

  return (
    <div className="my-12 bg-gradient-to-r from-neutral-800 to-gray-900 rounded-xl p-8 text-white relative overflow-hidden shadow-xl max-w-4xl mx-auto">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Sparkles size={120} />
      </div>
      
      <div className="relative z-10 text-center">
        <h4 className="text-2xl font-serif mb-2 text-neutral-100 flex items-center justify-center gap-2">
          <Sparkles className="text-secondary" size={24} /> 
          Need a quick boost?
        </h4>
        <p className="text-gray-400 mb-6 font-light">Tap a topic below to get an instant, AI-powered micro-strategy.</p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => handleGetTip(t)}
              disabled={loading}
              className={`px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
                loading && topic === t 
                  ? 'bg-secondary text-white'
                  : 'bg-gray-700 hover:bg-secondary text-gray-300 hover:text-white'
              }`}
            >
              {loading && topic === t ? <Loader2 className="animate-spin inline mr-1" size={12}/> : null}
              {t}
            </button>
          ))}
        </div>

        {tip && (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-white/10 animate-fade-in">
            <p className="text-lg italic font-serif text-neutral-100">"{tip}"</p>
            <div className="mt-4 flex justify-center">
                 <button 
                  onClick={() => handleGetTip(topic)}
                  className="text-xs text-secondary-dark hover:text-secondary flex items-center gap-1 transition-colors"
                 >
                    <RefreshCw size={12} /> Another Tip
                 </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiCareerTip;