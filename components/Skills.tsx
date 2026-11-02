import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { 
  Sparkles, PenTool, Layout, HeartHandshake, ArrowUpRight
} from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  // Category visual metadata for editorial styling
  const categoryMeta = [
    {
      num: '01',
      title: 'Technical & UX',
      subtitle: 'Research, Architecture & UI',
      icon: <Layout size={20} />,
      accentColor: 'text-coral',
      borderColor: 'border-coral',
      bgHover: 'group-hover:bg-coral/5',
      dotColor: 'bg-coral'
    },
    {
      num: '02',
      title: 'Soft Competencies',
      subtitle: 'Leadership & Collaboration',
      icon: <HeartHandshake size={20} />,
      accentColor: 'text-amber-500',
      borderColor: 'border-amber-500',
      bgHover: 'group-hover:bg-amber-500/5',
      dotColor: 'bg-amber-500'
    },
    {
      num: '03',
      title: 'Software Stack',
      subtitle: 'Design & Prototyping Tools',
      icon: <PenTool size={20} />,
      accentColor: 'text-lavender',
      borderColor: 'border-lavender',
      bgHover: 'group-hover:bg-lavender/5',
      dotColor: 'bg-lavender'
    },
    {
      num: '04',
      title: 'AI & Generative Tools',
      subtitle: 'Assistive Creative Workflows',
      icon: <Sparkles size={20} />,
      accentColor: 'text-sky-400',
      borderColor: 'border-sky-400',
      bgHover: 'group-hover:bg-sky-400/5',
      dotColor: 'bg-sky-400'
    }
  ];

  return (
    <section id="skills" className="py-28 md:py-36 bg-white dark:bg-stone-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-coral/5 dark:bg-coral/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-lavender/10 dark:bg-lavender/[0.04] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-200 dark:border-stone-800 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-coral animate-ping"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-gray dark:text-stone-400">
                Capabilities & Practice
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-charcoal dark:text-white tracking-tight">
              My <span className="font-heading italic text-coral">Toolkit.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-gray dark:text-stone-400 max-w-md leading-relaxed">
            A balanced foundation of user-centered design, modern digital production tools, generative AI workflows, and strategic problem-solving.
          </p>
        </div>

        {/* 4-COLUMN EDITORIAL DIRECTORY LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const meta = categoryMeta[catIdx] || {
              num: `0${catIdx + 1}`,
              title: category.title,
              subtitle: 'Core competencies',
              icon: <Layout size={20} />,
              accentColor: 'text-coral',
              borderColor: 'border-coral',
              bgHover: 'group-hover:bg-coral/5',
              dotColor: 'bg-coral'
            };

            const isHovered = hoveredCategory === catIdx;

            return (
              <div
                key={catIdx}
                onMouseEnter={() => setHoveredCategory(catIdx)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-stone-50/80 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1.5 ${
                  isHovered ? 'border-charcoal dark:border-stone-500' : ''
                }`}
              >
                <div>
                  {/* Category Top Banner */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-stone-200/60 dark:border-stone-800/80">
                    <span className="font-mono text-xs font-bold tracking-widest text-stone-400 dark:text-stone-500">
                      {meta.num}
                    </span>
                    <div className={`${meta.accentColor} transition-transform duration-300 group-hover:scale-110`}>
                      {meta.icon}
                    </div>
                  </div>

                  {/* Category Title & Subtitle */}
                  <div className="mb-6">
                    <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white tracking-tight group-hover:text-coral dark:group-hover:text-coral transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-neutral-gray dark:text-stone-400 mt-1">
                      {meta.subtitle}
                    </p>
                  </div>

                  {/* Clean List of Skills */}
                  <ul className="space-y-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <li 
                        key={sIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 hover:text-charcoal dark:hover:text-white transition-all duration-150 group/item cursor-default"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${meta.dotColor} shrink-0 opacity-40 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-200`}></span>
                        <span className="font-medium group-hover/item:translate-x-1 transition-transform duration-200 leading-snug">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Count Pill */}
                <div className="pt-6 mt-8 border-t border-stone-200/50 dark:border-stone-800/80 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 dark:text-stone-500">
                    {category.skills.length} competencies
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-400 group-hover:text-charcoal dark:group-hover:text-white group-hover:border-coral transition-colors">
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Highlight Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-cream dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-charcoal dark:text-white">
              Bridging Research, Craft & AI Technology
            </h4>
            <p className="text-xs sm:text-sm text-neutral-gray dark:text-stone-400">
              Applying human-centered design principles paired with modern creative intelligence to solve complex communication challenges.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3.5 py-1.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-charcoal dark:text-stone-300 rounded-full text-xs font-medium">
              SaaS & Product UI
            </span>
            <span className="px-3.5 py-1.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-charcoal dark:text-stone-300 rounded-full text-xs font-medium">
              Indic Lettering
            </span>
            <span className="px-3.5 py-1.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-charcoal dark:text-stone-300 rounded-full text-xs font-medium">
              Generative AI
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
