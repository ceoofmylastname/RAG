import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h4 className="text-xl font-display font-bold text-white mb-2">RAG Architect</h4>
            <p className="text-gray-500 text-sm">Building the future of autonomous agents.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            <span>using n8n & Pinecone</span>
          </div>

        </div>
      </div>
    </footer>
  );
};