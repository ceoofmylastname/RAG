import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Brain, Layers, Check, Copy, Settings, ArrowRight, MessageSquare, Terminal, Zap, FileText } from 'lucide-react';

export const SetupGuide: React.FC = () => {
  return (
    <section id="setup" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider"
          >
            Step-by-Step Guide
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 relative inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gradient-n8n-animated">
              Build Your Own Expert AI
            </h2>
            <div className="h-2 w-24 bg-gradient-to-r from-n8n-DEFAULT to-yellow-500 rounded-full mt-2 mx-auto" />
          </motion.div>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            A complete guide to connecting your private knowledge base to an AI Agent using n8n, Pinecone, Hugging Face, and Cohere. No coding required.
          </p>
        </div>

        {/* Tools Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 max-w-5xl mx-auto">
          <ToolCard 
            name="n8n" 
            role="Orchestrator" 
            url="https://n8n.io/"
            icon={<Server className="text-n8n-DEFAULT" />}
          />
          <ToolCard 
            name="Pinecone" 
            role="Vector DB" 
            url="https://pinecone.io/"
            icon={<Database className="text-pinecone-DEFAULT" />}
          />
          <ToolCard 
            name="HuggingFace" 
            role="Embeddings" 
            url="https://huggingface.co/"
            icon={<Brain className="text-yellow-400" />}
          />
          <ToolCard 
            name="Cohere" 
            role="Re-Ranker" 
            url="https://cohere.com/"
            icon={<Layers className="text-emerald-400" />}
          />
        </div>

        {/* Steps Container */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-8">
            <PhaseTitle 
              title="Part 1: The Ingestion Workflow" 
              subtitle="Building the Knowledge Base. Convert documents into smart, searchable data."
            />
            
            <StepCard 
              num="01"
              title="Set Up the Base Platform (n8n)"
              desc="Open a new workflow in n8n. Add an 'n8n Form Trigger' node to create a drag-and-drop interface. Configure it to accept a 'File' element type."
              badge="n8n"
              icon={<Server size={18} />}
            />
            
            <StepCard 
              num="02"
              title="Configure Vector Database"
              desc="Log in to Pinecone and create a new Index (e.g., 'my-rag-data'). CRITICAL: Select dimensions matching the 'multilingual-e5-large' model."
              badge="Pinecone"
              icon={<Database size={18} />}
              code="Dimensions: 1024 | Metric: Cosine"
            />

            <StepCard 
              num="03"
              title="Insert Documents Logic"
              desc="Add 'Pinecone Vector Store' node (Operation: Insert). Enable 'Custom Text Splitting' with 'Recursive Character Text Splitter' to handle large files."
              badge="Workflow"
              icon={<Settings size={18} />}
              code="Chunk Size: 2000 | Overlap: 200"
            />

            <StepCard 
              num="04"
              title="High-Performance Embeddings"
              desc="Inside the Pinecone node, select 'Embeddings Hugging Face Inference'. Create credentials with your Hugging Face Token. Use this exact model ID:"
              badge="HuggingFace"
              icon={<Brain size={18} />}
              copyText="intfloat/multilingual-e5-large"
            />

            <StepCard 
              num="05"
              title="Index Your Data"
              desc="Execute the workflow. Upload your files (PDFs, docs) via the N8N Form trigger. The workflow will now automatically convert your documents into high-quality vectors and store them in Pinecone."
              badge="Action"
              icon={<FileText size={18} />}
            />
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full my-12" />
          
          <div className="space-y-8">
            <PhaseTitle 
              title="Part 2: The Agent Workflow" 
              subtitle="Querying the Knowledge Base. Create the AI chatbot that answers questions."
            />

            <StepCard 
              num="06"
              title="Create Agent Interface"
              desc="Add a 'Chat Trigger' node and connect it to an 'AI Agent' node. Select a powerful LLM like Claude 3.5 Sonnet or GPT-4."
              badge="n8n"
              icon={<MessageSquare size={18} />}
            />

            <StepCard 
              num="07"
              title="Enable Retrieval Tool"
              desc="Add Pinecone Vector Store as a 'Tool'. Mode: 'Retrieve Documents'. Connect the SAME Hugging Face embedding node from Step 4."
              badge="Tool"
              icon={<Database size={18} />}
              code="Limit: 20 Results"
            />

            <StepCard 
              num="08"
              title="Implement Re-ranker"
              desc="Add 'Cohere Re-ranker' node connected to the Pinecone tool. It filters the 20 results down to the top 4 most relevant chunks."
              badge="Cohere"
              icon={<Layers size={18} />}
              highlight
            />

            <StepCard 
              num="09"
              title="Define Agent Persona"
              desc="Add a System Message to the Agent: Define its Role (Expert Analyst), Tool-Gating Rules, and Output Format. Instruct it to re-rank user queries."
              badge="Prompting"
              icon={<Terminal size={18} />}
            />

            <StepCard 
              num="10"
              title="Run the Chatbot"
              desc="Activate the workflow. Click 'Open Chat' on the trigger node. Test your expert AI with complex questions about your specific data!"
              badge="Test"
              icon={<Zap size={18} />}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const PhaseTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-8 pl-4 border-l-2 border-n8n-DEFAULT">
    <h3 className="font-display font-bold text-2xl text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{subtitle}</p>
  </div>
);

const ToolCard: React.FC<{ name: string; role: string; url: string; icon: React.ReactNode }> = ({ name, role, url, icon }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block group">
    <div className="glass-panel glass-pop bg-white/5 border border-white/5 rounded-xl p-4 text-center">
      <div className="mx-auto w-10 h-10 bg-black/50 rounded-lg flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="font-bold text-white text-sm">{name}</div>
      <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{role}</div>
    </div>
  </a>
);

interface StepCardProps {
  num: string;
  title: string;
  desc: string;
  badge: string;
  icon: React.ReactNode;
  copyText?: string;
  code?: string;
  highlight?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ num, title, desc, badge, icon, copyText, code, highlight }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (copyText) {
      navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`glass-panel glass-pop p-6 rounded-2xl border ${highlight ? 'border-n8n-DEFAULT/40 shadow-[0_0_30px_rgba(255,109,90,0.1)]' : 'border-white/5'} relative overflow-hidden group`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Number */}
        <div className="flex-shrink-0">
          <span className="text-4xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors">{num}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
             <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded border ${highlight ? 'bg-n8n-DEFAULT/10 text-n8n-DEFAULT border-n8n-DEFAULT/20' : 'bg-white/5 text-gray-400 border-white/10'}`}>
               {badge}
             </span>
             <h4 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">{title}</h4>
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>

          <div className="flex flex-wrap gap-3">
            {code && (
              <div className="bg-black/40 rounded-lg p-3 text-xs font-mono text-gray-300 border border-white/5 inline-block group-hover:border-white/20 transition-colors">
                {code}
              </div>
            )}

            {copyText && (
              <button 
                onClick={handleCopy}
                className="group/btn flex items-center gap-2 bg-black/40 hover:bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs text-gray-300 transition-all w-full md:w-auto z-20 relative"
              >
                <code className="text-n8n-glow">{copyText}</code>
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="group-hover/btn:text-white" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
