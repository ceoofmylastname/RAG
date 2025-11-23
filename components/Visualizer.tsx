import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Database, Brain, MessageSquare, ArrowRight } from 'lucide-react';

export const Visualizer: React.FC = () => {
  return (
    <section id="architecture" className="py-32 relative overflow-hidden bg-surface/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gradient-animated">
              The Architecture
            </h2>
            <div className="h-2 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mx-auto" />
          </motion.div>
          <p className="text-gray-400 mt-6">How data transforms into intelligence. A streamlined pipeline from raw files to accurate answers.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Connecting Line */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-white/5 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/2 animate-[shimmer_3s_infinite]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            <FlowStep 
              icon={<FileText className="text-blue-400" size={28} />}
              title="1. Ingestion"
              desc="Upload PDF, Notion, or CSV data via n8n forms."
              delay={0}
            />
            <FlowStep 
              icon={<Brain className="text-purple-400" size={28} />}
              title="2. Vectorization"
              desc="HuggingFace converts text to high-dimensional math."
              delay={0.2}
            />
            <FlowStep 
              icon={<Database className="text-pinecone-DEFAULT" size={28} />}
              title="3. Storage"
              desc="Pinecone indexes vectors for millisecond retrieval."
              delay={0.4}
            />
            <FlowStep 
              icon={<MessageSquare className="text-n8n-DEFAULT" size={28} />}
              title="4. Generation"
              desc="LLM synthesizes retrieved context into answers."
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FlowStep: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay: number }> = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="relative group h-full"
  >
    {/* Mobile Arrow */}
    <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-700">
      <ArrowRight size={20} className="rotate-90" />
    </div>

    <div className="glass-panel glass-pop p-6 rounded-2xl border-t border-white/10 h-full flex flex-col items-center text-center md:items-start md:text-left relative overflow-hidden">
      <div className="w-14 h-14 rounded-xl bg-surface border border-white/5 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
        {icon}
      </div>
      
      <h3 className="text-lg font-bold mb-3 text-white">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
      
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  </motion.div>
);
