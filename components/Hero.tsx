import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Zap, Brain, Cpu, Code2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects - tuned to be subtle but effective
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const rotateX = useTransform(scrollY, [0, 500], [0, 15]);
  const rotateY = useTransform(scrollY, [0, 500], [0, -15]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade out visuals on scroll
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-x-hidden overflow-y-visible perspective-2000">
      
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[128px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px] animate-pulse-slow delay-1000 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 text-center lg:text-left relative order-1">
          
          {/* Spotlight Effect behind text */}
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl rounded-full opacity-50 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-8 glass-panel px-5 py-2.5 rounded-full border-blue-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-blue-400/50 transition-colors cursor-default group"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green group-hover:shadow-[0_0_10px_#22c55e] transition-shadow"></span>
            </span>
            <span className="text-xs font-bold text-blue-100 uppercase tracking-widest">RAG Architecture v2.0</span>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-xs font-medium text-blue-300">System Operational</span>
          </motion.div>

          <div className="mb-8 relative">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tighter text-white mb-4 drop-shadow-2xl"
            >
              Don't Just <br/> Build Chatbots.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:inline-block z-20"
            >
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-gradient-animated">
                Architect Intelligence.
              </h2>
              {/* Underline Slash */}
              <motion.div 
                 initial={{ scaleX: 0 }}
                 animate={{ scaleX: 1 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="h-2 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 lg:ml-0 mx-auto"
              />
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light"
          >
            Transform static data into <span className="text-white font-medium border-b border-blue-500/30">liquid reasoning</span>. 
            The definitive n8n + Pinecone blueprint for building autonomous agents that actually <span className="text-white font-medium">remember</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <Button 
              variant="glow" 
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              icon={<Zap size={20} className="fill-white" />}
              className="px-10 py-5 text-base shadow-[0_0_40px_-10px_rgba(255,109,90,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,109,90,0.7)]"
            >
              Get The Blueprint
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('setup')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 text-base backdrop-blur-sm hover:bg-white/10"
              icon={<Code2 size={20} />}
            >
              View Architecture
            </Button>
          </motion.div>
        </div>

        {/* Right 3D Visual - The Stack */}
        <div className="lg:col-span-5 relative w-full flex justify-center perspective-2000 h-[500px] lg:h-[600px] order-2 lg:order-2 mt-10 lg:mt-0">
          <motion.div 
            style={{ y, rotateX, rotateY, opacity }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative w-full max-w-[320px] lg:max-w-sm preserve-3d animate-float scale-90 md:scale-100"
          >
            {/* The Base Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-500/20 to-transparent blur-[80px] -z-10" />

            {/* Card 1 (Bottom) - Storage */}
            <div className="absolute top-[280px] left-0 right-0 glass-panel glass-pop p-6 md:p-8 rounded-3xl transform translate-z-0 hover:translate-z-[20px] transition-all duration-500 border border-pinecone-dim/30 bg-[#050b14]/80">
               <div className="flex justify-between items-start mb-6">
                 <div className="p-3 rounded-2xl bg-pinecone-dim/10 border border-pinecone-dim/20">
                    <Database className="text-pinecone-DEFAULT" size={32} />
                 </div>
                 <Badge label="Storage" color="blue" />
               </div>
               <div className="space-y-3">
                 <div className="h-2 bg-pinecone-dim/20 rounded-full w-full overflow-hidden">
                    <div className="h-full w-2/3 bg-pinecone-DEFAULT/50 rounded-full" />
                 </div>
                 <div className="flex justify-between text-xs text-pinecone-glow font-mono mt-2">
                    <span>INDEX: COFFEE</span>
                    <span>1,024 DIMS</span>
                 </div>
               </div>
            </div>

            {/* Card 2 (Middle) - Embeddings */}
            <div className="absolute top-[140px] left-4 right-4 glass-panel glass-pop p-6 md:p-8 rounded-3xl transform translate-z-[50px] hover:translate-z-[80px] transition-all duration-500 border border-purple-500/30 bg-[#0a0f1e]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
               <div className="flex justify-between items-start mb-6">
                 <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <Brain className="text-neon-purple" size={32} />
                 </div>
                 <Badge label="Vectorization" color="green" />
               </div>
               <div className="flex gap-2 mb-2 flex-wrap">
                 <div className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">multilingual-e5</div>
                 <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-gray-400">Cosine</div>
               </div>
            </div>

            {/* Card 3 (Top) - Agent */}
            <div className="absolute top-0 left-8 right-8 glass-panel glass-pop p-6 md:p-8 rounded-3xl transform translate-z-[100px] hover:translate-z-[140px] transition-all duration-500 border border-n8n-DEFAULT/30 bg-[#1e1e2e]/90 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
               <div className="flex justify-between items-start mb-6">
                 <div className="p-3 rounded-2xl bg-n8n-dim/10 border border-n8n-dim/20 shadow-[0_0_15px_rgba(255,109,90,0.3)]">
                    <Zap className="text-n8n-DEFAULT fill-n8n-DEFAULT" size={32} />
                 </div>
                 <Badge label="Agent" color="orange" />
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center shrink-0">
                    <Cpu size={20} className="text-n8n-DEFAULT" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-n8n-DEFAULT to-yellow-500 animate-[shimmer_1.5s_infinite]" />
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono text-right">PROCESSING QUERY...</div>
                  </div>
               </div>
            </div>

            {/* Connecting Lines (Decorations) - Adjusted for responsiveness */}
            <div className="absolute top-[100px] right-[-10px] md:right-[-20px] w-px h-[200px] bg-gradient-to-b from-n8n-DEFAULT to-transparent opacity-50" />
            <div className="absolute top-[200px] left-[-10px] md:left-[-20px] w-px h-[100px] bg-gradient-to-t from-pinecone-DEFAULT to-transparent opacity-50" />

          </motion.div>
        </div>

      </div>
    </section>
  );
};