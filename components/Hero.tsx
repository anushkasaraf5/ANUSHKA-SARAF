import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Type, Minimize2, Lightbulb } from 'lucide-react';
import Button from './Button';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    window.print();
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pillars = [
    { 
      label: "Type-Led", 
      icon: <Type size={20} />, 
      desc: "Expressive typography.",
      color: "text-lavender dark:text-lavender",
      bg: "bg-lavender/10 dark:bg-lavender/20",
      border: "hover:border-lavender/50 dark:hover:border-lavender/50"
    },
    { 
      label: "Minimal", 
      icon: <Minimize2 size={20} />, 
      desc: "Clean & essential.",
      color: "text-coral dark:text-coral",
      bg: "bg-coral/10 dark:bg-coral/20",
      border: "hover:border-coral/50 dark:hover:border-coral/50"
    },
    { 
      label: "Research-Driven", 
      icon: <Lightbulb size={20} />, 
      desc: "Rooted in inquiry.",
      color: "text-lavender dark:text-lavender",
      bg: "bg-lavender/10 dark:bg-lavender/20",
      border: "hover:border-lavender/50 dark:hover:border-lavender/50"
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-cream dark:bg-stone-950 transition-colors duration-300">
      
      {/* Parallax Background Blobs - Strict Coral/Lavender */}
      <div 
        className="absolute top-0 -left-20 w-[600px] h-[600px] bg-coral/20 dark:bg-coral/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
      ></div>
      <div 
        className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-lavender/30 dark:bg-lavender/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-2000 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
      ></div>
      <div 
        className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-coral/10 dark:bg-lavender/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-4000 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }}
      ></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
        
        {/* Main Text Content */}
        <div className="lg:col-span-8 lg:col-start-1 flex flex-col justify-center text-left">
          
          <div className="animate-fadeIn opacity-0 flex items-center gap-3 mb-6" style={{ animationDelay: '0.1s' }}>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lavender/20 dark:bg-lavender/10 text-lavender dark:text-lavender shadow-sm animate-bounce">
              <Sparkles size={14} className="text-lavender" />
            </span>
            <span className="text-sm font-highlight font-bold tracking-widest uppercase text-lavender dark:text-lavender">
              Portfolio 
            </span>
          </div>
          
          <h1 className="animate-fadeIn opacity-0 text-6xl md:text-8xl lg:text-[7rem] font-heading font-bold text-charcoal dark:text-cream mb-8 tracking-tighter leading-[0.95] -ml-1" style={{ animationDelay: '0.2s' }}>
            Hello, I'm <br />
            {/* Playful Pink/Purple Gradient */}
            <span className="font-heading italic font-normal bg-clip-text text-transparent bg-gradient-to-r from-coral via-pink-500 to-lavender animate-gradient pr-8 py-2" style={{ backgroundSize: '200%', animationDuration: '3s' }}>
              {PERSONAL_INFO.name}
            </span>
          </h1>
          
          <p className="animate-fadeIn opacity-0 text-2xl md:text-3xl font-subheading text-neutral-gray dark:text-stone-300 mb-10 max-w-2xl font-light" style={{ animationDelay: '0.3s' }}>
            {PERSONAL_INFO.title}
          </p>

          {/* Interactive Pillars */}
          <div className="animate-fadeIn opacity-0 mb-12 flex flex-wrap gap-4" style={{ animationDelay: '0.4s' }}>
             {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className={`group flex items-center gap-3 pl-2 pr-5 py-2 rounded-full border border-transparent bg-white/60 dark:bg-stone-900/60 backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-105 cursor-default border-stone-100 dark:border-stone-800 ${pillar.border}`}
                >
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${pillar.bg} ${pillar.color} group-hover:rotate-12 transition-transform duration-300`}>
                      {pillar.icon}
                   </div>
                   <div className="flex flex-col">
                      <span className="text-sm font-subheading font-bold text-charcoal dark:text-white leading-none mb-0.5">{pillar.label}</span>
                      <span className="text-xs text-neutral-gray dark:text-stone-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 w-0 group-hover:w-auto overflow-hidden whitespace-nowrap">
                         {pillar.desc}
                      </span>
                   </div>
                </div>
             ))}
          </div>
          
          <div className="animate-fadeIn opacity-0 flex flex-wrap gap-4" style={{ animationDelay: '0.5s' }}>
            <Button onClick={scrollToWork} size="lg" className="rounded-full px-10 shadow-xl shadow-coral/30 dark:shadow-coral/20 hover:shadow-coral/40 hover:-translate-y-1">
              View Work
            </Button>
            <Button onClick={handleDownloadResume} variant="outline" size="lg" className="rounded-full px-10">
              Download Resume
            </Button>
          </div>
        </div>

        {/* Decorative / Image Side */}
        <div className="lg:col-span-4 hidden lg:flex justify-center items-center relative animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
           {/* Abstract floating shapes */}
           <div className="relative w-full aspect-square animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-lavender/40 to-coral/40 dark:from-lavender/20 dark:to-coral/20 rounded-full animate-morph opacity-80 blur-xl"></div>
              <div className="absolute inset-0 bg-white/30 dark:bg-white/5 backdrop-blur-sm rounded-full animate-morph border border-white/50 dark:border-white/10"></div>
              
              {/* Floating Badge - Parallax slightly opposite */}
              <div 
                className="absolute bottom-10 -left-4 bg-white dark:bg-stone-800 p-5 rounded-3xl shadow-2xl animate-bounce transition-transform duration-100" 
                style={{ animationDuration: '4s', transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}
              >
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-coral/20 dark:bg-coral/10 flex items-center justify-center text-coral text-xl font-bold">
                       👋
                    </div>
                    <div>
                       <p className="text-xs font-highlight font-bold uppercase text-neutral-gray tracking-wider">Status</p>
                       <p className="text-base font-subheading font-bold text-charcoal dark:text-white">Available for Opportunities</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-gray dark:text-stone-500 cursor-pointer hover:text-coral transition-colors" onClick={scrollToWork}>
        <ArrowDown size={24} />
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;