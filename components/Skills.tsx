import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { 
  HeartHandshake, PenTool, Monitor, Palette, Globe, Layout, Image, 
  Users, Brain, Clock, Zap, MessageCircle, Layers, Type as TypeIcon, Edit,
  RefreshCw, Heart, Timer, Star, BookOpen
} from 'lucide-react';
import { SkillItem } from '../types';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Helper to map skill names to icons
  const getSkillIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    
    // Soft Skills specific
    if (lowerName.includes('communication')) return <MessageCircle size={24} />;
    if (lowerName.includes('leadership')) return <Star size={24} />;
    if (lowerName.includes('teamwork')) return <Users size={24} />;
    if (lowerName.includes('adaptability')) return <RefreshCw size={24} />;
    if (lowerName.includes('empathy')) return <Heart size={24} />;
    if (lowerName.includes('time mgmt') || lowerName.includes('time management')) return <Timer size={24} />;

    // Technical / Software
    if (lowerName.includes('research')) return <Brain size={24} />;
    if (lowerName.includes('ui') || lowerName.includes('ux')) return <Layout size={24} />;
    if (lowerName.includes('brand')) return <Zap size={24} />;
    if (lowerName.includes('typo')) return <TypeIcon size={24} />;
    if (lowerName.includes('campaign')) return <MessageCircle size={24} />;
    if (lowerName.includes('editorial')) return <Edit size={24} />;
    if (lowerName.includes('illustrator')) return <PenTool size={24} />;
    if (lowerName.includes('indesign')) return <BookOpen size={24} />;
    if (lowerName.includes('adobe') || lowerName.includes('photo')) return <Image size={24} />;
    if (lowerName.includes('express')) return <Globe size={24} />;
    if (lowerName.includes('figma')) return <Layout size={24} />;
    if (lowerName.includes('comm')) return <MessageCircle size={24} />;
    
    // Default icons
    return <Monitor size={24} />;
  };

  const currentCategory = SKILL_CATEGORIES[activeTab];

  return (
    <section id="skills" className="py-32 bg-cream dark:bg-stone-950 transition-colors duration-300 overflow-hidden relative">
      
      {/* Dynamic Background */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-coral/10 dark:bg-coral/5 rounded-full blur-[150px] pointer-events-none opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-lavender/20 dark:bg-lavender/10 rounded-full blur-[150px] pointer-events-none opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-24 animate-fadeIn text-center">
           <div className="flex items-center justify-center gap-4 mb-4">
               <span className="text-sm font-highlight font-bold tracking-widest uppercase text-neutral-gray dark:text-stone-400">
                 Capabilities
               </span>
            </div>
           <h2 className="text-5xl md:text-7xl font-heading font-bold text-charcoal dark:text-white tracking-tighter mb-4">
             My <span className="font-heading italic text-coral dark:text-coral">Toolkit.</span>
           </h2>
        </div>

        {/* Categories (Tabs) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
             {SKILL_CATEGORIES.map((category, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`
                       px-8 py-3 rounded-full font-highlight font-bold text-sm tracking-widest uppercase transition-all duration-300 border-2
                       ${isActive 
                          ? 'bg-charcoal dark:bg-white text-white dark:text-charcoal border-charcoal dark:border-white scale-105 shadow-lg' 
                          : 'bg-transparent text-neutral-gray dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:border-coral dark:hover:border-coral'
                       }
                    `}
                  >
                    {category.title}
                  </button>
                );
             })}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-4xl mx-auto">
            {currentCategory.skills.map((skill, index) => (
                <SimpleSkillCard 
                    key={`${activeTab}-${index}`}
                    skill={skill}
                    icon={getSkillIcon(skill.name)}
                    index={index}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

interface SimpleSkillCardProps {
  skill: SkillItem;
  icon: React.ReactNode;
  index: number;
}

const SimpleSkillCard: React.FC<SimpleSkillCardProps> = ({ skill, icon, index }) => {
   return (
      <div 
        className="w-full flex flex-col items-center justify-center p-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-coral/50 dark:hover:border-coral/50 transition-all duration-300 animate-fadeIn group relative overflow-hidden cursor-default"
        style={{ animationDelay: `${index * 0.05}s`, opacity: 0, animationFillMode: 'forwards' }}
      >
          {/* Subtle background glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="mb-4 text-lavender dark:text-lavender group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300 relative z-10">
              {icon}
          </div>
          <h3 className="text-center font-subheading font-bold text-sm md:text-base text-charcoal dark:text-white group-hover:text-coral dark:group-hover:text-coral transition-colors duration-300 relative z-10">
              {skill.name}
          </h3>
      </div>
   );
}

export default Skills;
