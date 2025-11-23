import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, Copy, Terminal, Zap, Check } from 'lucide-react';
import { Button } from './ui/Button';
import { N8N_WORKFLOW_JSON } from '../constants';
import { Confetti } from './ui/Confetti';

export const DemoSection: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [modelCopied, setModelCopied] = useState(false);

  const handleDownload = () => {
    // Trigger confetti
    setShowConfetti(true);
    setDownloaded(true);

    const jsonString = JSON.stringify(N8N_WORKFLOW_JSON, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'RAG_Strategy_Workflow.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Reset states
    setTimeout(() => {
      setDownloaded(false);
      setShowConfetti(false);
    }, 4000);
  };

  const copyModelName = () => {
     navigator.clipboard.writeText("intfloat/multilingual-e5-large-instruct");
     setModelCopied(true);
     setTimeout(() => setModelCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <Confetti isActive={showConfetti} />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-n8n-dim/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-16 border border-n8n-DEFAULT/20 shadow-[0_25px_60px_-15px_rgba(255,109,90,0.15)] bg-gradient-to-b from-surface to-black transform hover:scale-[1.01] transition-transform duration-700 overflow-hidden relative">
          
          {/* Subtle Glow inside card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-n8n-DEFAULT/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            
            {/* Text Content */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div>
                <div className="inline-flex items-center gap-2 text-n8n-DEFAULT font-bold uppercase tracking-widest text-xs mb-6 border border-n8n-DEFAULT/20 px-3 py-1 rounded-full bg-n8n-DEFAULT/5">
                  <Zap size={14} className="fill-n8n-DEFAULT" />
                  Instant Deployment
                </div>
                
                <div className="mb-6">
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 tracking-tight">
                    Skip the build.
                  </h2>
                  <div className="relative inline-block text-left">
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gradient-animated">
                       Deploy the Brain.
                    </h2>
                    <div className="h-2 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2" />
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">
                  Get the production-ready n8n workflow JSON. Fully pre-configured with Pinecone vector store, Re-ranking logic, and Memory management.
                </p>
              </div>

              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-white/5 rounded-xl p-5 flex items-center justify-between group cursor-pointer border border-white/5 hover:border-white/20 transition-all select-none shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-md" 
                  onClick={copyModelName}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-black/50 flex items-center justify-center border border-white/10">
                      <Terminal size={20} className="text-gray-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Required Model</span>
                      <span className="text-sm font-mono text-blue-300 font-medium">intfloat/multilingual-e5-large-instruct</span>
                    </div>
                  </div>
                  {modelCopied ? (
                    <div className="flex items-center gap-2 text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold uppercase">Copied</span>
                      <Check size={14} />
                    </div>
                  ) : (
                    <Copy size={18} className="text-gray-500 group-hover/text-white transition-colors" />
                  )}
                </motion.div>
              </div>
            </div>

            {/* Action Card */}
            <div className="w-full lg:w-1/3 perspective-2000">
              <motion.div 
                initial={{ rotateY: 20, rotateX: 10 }}
                whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05, translateY: -10 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl relative shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8)] preserve-3d group"
              >
                {/* Border Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-n8n-DEFAULT via-purple-600 to-n8n-DEFAULT rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-[shimmer_3s_infinite]" />
                
                <div className="bg-[#0f111a] relative rounded-[22px] p-8 text-center border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="w-20 h-20 bg-gradient-to-br from-n8n-DEFAULT to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_10px_30px_rgba(255,109,90,0.4)] group-hover:scale-110 transition-transform duration-300 transform rotate-3 group-hover:rotate-6">
                      <Download className="text-white" size={36} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">RAG Template</h3>
                    <p className="text-sm text-gray-500 mb-8 font-mono">JSON • 24KB • v2.1.0</p>
                  </div>

                  <Button 
                    onClick={handleDownload} 
                    fullWidth
                    variant="primary"
                    className="shadow-lg group-hover:shadow-n8n-DEFAULT/20"
                    icon={downloaded ? <CheckCircle size={20} /> : <Download size={20} />}
                  >
                    {downloaded ? "System Acquired" : "Download Protocol"}
                  </Button>

                  <div className="mt-6 text-[10px] text-gray-600 uppercase tracking-widest font-bold flex justify-center gap-4">
                     <span>Open Source License</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
