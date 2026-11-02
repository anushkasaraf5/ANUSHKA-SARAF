import React, { useState } from 'react';
import ImageViewer from './ImageViewer';
import { ZoomIn, ChevronDown, ChevronUp, Layers, PenTool, Compass, Lightbulb, Layout } from 'lucide-react';

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [viewingImage, setViewingImage] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Updated image URL as requested
  const profileImage ="https://i.ibb.co/fVGJfzzh/Port.png";

  // Content for the expanded "Story" section
  const storyCards = [
    {
      icon: <PenTool size={24} />,
      title: "The Focus",
      content: "My practice is defined by type-led, minimal, and experimental design. I prioritize rigorous research and user insight over purely abstract concepts, believing that powerful design emerges from understanding the 'why' before the 'how'."
    },
    {
      icon: <Compass size={24} />,
      title: "The Approach",
      content: "Bridging the gap between complex information and human experience. Whether it's a digital interface or a print campaign, I aim for clarity, purpose, and emotional resonance in every visual interaction."
    }
  ];

  return (
    <section id="about" className="py-32 bg-white dark:bg-stone-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decor - Coral/Lavender Blobs */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-coral/10 dark:bg-coral/5 rounded-full blur-[100px] pointer-events-none opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-lavender/20 dark:bg-lavender/10 rounded-full blur-[100px] pointer-events-none opacity-60 animate-blob"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* LEFT: Image Side */}
          <div className="w-full lg:w-1/2 relative group sticky top-32 animate-fadeIn">
             
             {/* IMAGE CONTAINER */}
             <div className="relative transition-all duration-500 max-w-sm mx-auto lg:mx-0">
                <div className="w-full overflow-hidden rounded-2xl shadow-xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 relative flex items-center justify-center">
                  {!imgError ? (
                    <img 
                      src={profileImage} 
                      alt="Anushka Saraf" 
                      className="w-full h-auto object-contain"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full aspect-square flex flex-col items-center justify-center text-stone-400 dark:text-stone-600">
                      <span className="text-8xl font-heading opacity-20 select-none">AS</span>
                    </div>
                  )}
                </div>
             </div>
          </div>

          {/* RIGHT: Content Side */}
          <div className="w-full lg:w-1/2 pt-4">
            
            {/* 1. SECTION LABEL - Consistent Hierarchy */}
            <div className="flex items-center gap-4 mb-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
               <div className="h-px w-8 bg-neutral-gray dark:bg-stone-700"></div>
               <span className="text-sm font-highlight font-bold tracking-widest uppercase text-neutral-gray dark:text-stone-400">
                 Who I Am
               </span>
            </div>
            
            {/* 2. PRIMARY HEADLINE - High Contrast */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-charcoal dark:text-white mb-10 tracking-tight leading-[1.1] animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Creating <span className="font-heading italic text-transparent bg-clip-text bg-gradient-to-r from-coral to-lavender dark:from-coral dark:to-lavender animate-gradient" style={{ backgroundSize: '200%' }}>clarity</span> <br/>
              from visual chaos.
            </h2>

            {/* 3. VISUAL OVERVIEW - BENTO GRID */}
            <div className="mb-10 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
               <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-charcoal dark:bg-white text-white dark:text-black text-[10px] font-bold">i</span>
                  <span className="text-xs font-highlight font-bold uppercase tracking-wide text-neutral-gray">At a Glance</span>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 2: Approach */}
                  <div className="bg-cream dark:bg-stone-800/50 p-6 rounded-2xl border border-stone-100 dark:border-stone-700/50 hover:border-lavender/50 dark:hover:border-lavender/50 hover:bg-white dark:hover:bg-stone-800 transition-all duration-300 group hover:-translate-y-1">
                     <div className="w-10 h-10 rounded-full bg-lavender/20 dark:bg-lavender/10 flex items-center justify-center text-lavender mb-4 group-hover:scale-110 transition-transform">
                        <Lightbulb size={20} />
                     </div>
                     <h4 className="text-xs font-highlight font-bold uppercase tracking-wider text-neutral-gray mb-1">Philosophy</h4>
                     <p className="text-lg font-subheading font-bold text-charcoal dark:text-white leading-tight">Research-Driven Design</p>
                  </div>

                  {/* Card 3: Vibe */}
                  <div className="bg-cream dark:bg-stone-800/50 p-6 rounded-2xl border border-stone-100 dark:border-stone-700/50 hover:border-coral/50 dark:hover:border-coral/50 hover:bg-white dark:hover:bg-stone-800 transition-all duration-300 group hover:-translate-y-1">
                     <div className="w-10 h-10 rounded-full bg-coral/20 dark:bg-coral/10 flex items-center justify-center text-coral mb-4 group-hover:scale-110 transition-transform">
                        <Layout size={20} />
                     </div>
                     <h4 className="text-xs font-highlight font-bold uppercase tracking-wider text-neutral-gray mb-1">Visual Style</h4>
                     <p className="text-lg font-subheading font-bold text-charcoal dark:text-white leading-tight">Type-Led & Minimal</p>
                  </div>
               </div>
            </div>

            {/* 4. INTERACTIVE EXPANDABLE STORY */}
            <div className="relative border-t border-stone-200 dark:border-stone-800 pt-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
               <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                   <div className="grid grid-cols-1 gap-6 mb-8 mt-4">
                       {storyCards.map((card, idx) => (
                           <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-cream dark:hover:bg-stone-800/50 transition-colors border border-transparent hover:border-stone-100 dark:hover:border-stone-700 animate-fadeIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                               <div className="shrink-0 w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-charcoal dark:text-white">
                                   {card.icon}
                               </div>
                               <div>
                                   <h4 className="text-lg font-subheading font-bold text-charcoal dark:text-white mb-2">{card.title}</h4>
                                   <p className="text-neutral-gray dark:text-stone-300 text-base leading-relaxed">
                                       {card.content}
                                   </p>
                               </div>
                           </div>
                       ))}
                   </div>
                   
                   <p className="text-lg text-neutral-gray dark:text-stone-400 italic">
                      Currently seeking internships where I can bring fresh energy, learn from the best, and actually contribute to real-world solutions.
                   </p>
               </div>

              {/* Toggle Button */}
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full bg-cream dark:bg-stone-800 hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-sm font-highlight font-bold uppercase tracking-widest text-charcoal dark:text-white group w-fit ${!isExpanded ? 'animate-bounce' : ''}`}
              >
                {isExpanded ? (
                  <>Close Story <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" /></>
                ) : (
                  <>Read My Full Story <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" /></>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {viewingImage && (
        <ImageViewer 
          src={viewingImage} 
          alt="Anushka Saraf" 
          onClose={() => setViewingImage(null)} 
        />
      )}
    </section>
  );
};

export default About;