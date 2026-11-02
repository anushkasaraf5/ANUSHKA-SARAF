import React, { useState } from 'react';
import { EDUCATION, EXPERIENCE, SKILL_CATEGORIES, CERTIFICATIONS, ACHIEVEMENTS } from '../constants';
import Button from './Button';
import { Download, ArrowUp, Briefcase, Award, Globe, PenTool, Wrench, HeartHandshake } from 'lucide-react';

const Resume: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const [activeEducation, setActiveEducation] = useState<number | null>(null);

  const handleDownloadResume = () => {
    // Triggers the browser print dialog, which allows saving as PDF.
    window.print();
  };

  const scrollToPortfolio = () => {
     const workSection = document.getElementById('work');
     if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
     }
  };

  const profileImage = "https://i.ibb.co/fVGJfzzh/Port.png";

  return (
    <section id="resume" className="py-24 print:py-0 print:bg-white bg-cream dark:bg-stone-950 transition-colors duration-300 relative">
      <div className="container mx-auto px-6 print:px-0 print:w-full print:max-w-none">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 animate-fadeIn print:hidden">
           <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-coral dark:text-coral mb-2">Curriculum Vitae</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight">Experience & Education</h3>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <Button className="gap-2 rounded-full group overflow-hidden relative bg-charcoal text-white hover:bg-stone-800" onClick={handleDownloadResume}>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <Download size={18} className="group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
            </Button>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 p-6 md:p-8 print:p-0 print:shadow-none shadow-2xl shadow-stone-200/40 dark:shadow-none rounded-[2.5rem] print:rounded-none border border-stone-100 print:border-none dark:border-stone-800 max-w-[210mm] min-h-[297mm] print:max-w-none print:w-full print:h-full mx-auto transition-colors duration-300 relative overflow-hidden group/container animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          {/* Decorative Corner - Glowing Coral in Dark Mode */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-coral/20 dark:bg-coral/20 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover/container:scale-110 print:hidden"></div>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:gap-6">
            
            {/* 1. Profile Header (Full Width) */}
            <div className="md:col-span-12 print:col-span-12 border-b-4 border-stone-100 dark:border-stone-800 pb-8 print:pb-6">
               <div className="flex flex-col md:flex-row print:flex-row gap-8 items-center md:items-start print:items-start">
                  {/* Photo Placeholder */}
                  <div className="w-32 h-32 md:w-40 md:h-40 print:w-32 print:h-32 rounded-full overflow-hidden border-4 border-white dark:border-stone-800 shadow-lg shrink-0 bg-stone-200 hover:scale-105 transition-transform duration-500">
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover object-top" />
                  </div>
                  
                  <div className="flex-grow text-center md:text-left print:text-left">
                     <div className="flex flex-col md:flex-row print:flex-row justify-between items-center md:items-baseline print:items-baseline gap-4 mb-4 print:mb-2">
                        <h2 className="text-4xl md:text-5xl print:text-5xl font-bold tracking-tight text-charcoal dark:text-white">Anushka Saraf</h2>
                        <span className="text-coral dark:text-coral italic font-medium bg-coral/10 dark:bg-coral/20 px-4 py-1 rounded-full text-sm shrink-0">Resume</span>
                     </div>
                     <p className="text-lg print:text-base text-neutral-gray dark:text-stone-400 max-w-2xl mb-4 print:mb-2">
                        Communication Design Student passionate about creating intuitive and emotional visual experiences.
                     </p>
                     <div className="flex items-center justify-center md:justify-start print:justify-start gap-2 text-neutral-gray font-medium">
                        <Globe size={16} className="text-coral" />
                        <a 
                          href="https://anushkasaraf.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-coral transition-colors border-b border-transparent hover:border-coral"
                        >
                            anushkasaraf.vercel.app
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* LEFT COLUMN */}
            <div className="md:col-span-6 print:col-span-6 flex flex-col space-y-10 print:space-y-8">
                {/* 2. Experience */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-6 print:mb-4 bg-coral/5 dark:bg-coral/10 p-3 rounded-xl border border-coral/10 dark:border-coral/20">
                        <div className="w-8 h-8 rounded-lg bg-coral text-white flex items-center justify-center shadow-sm">
                            <Briefcase size={16} />
                        </div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal dark:text-stone-200">
                            Experience
                        </h4>
                    </div>
                    <div className="flex flex-col gap-8 print:gap-6">
                      {EXPERIENCE.map((exp, idx) => (
                        <div 
                          key={idx} 
                          className="group relative transition-all duration-300 md:pl-4 print:pl-4 border-l-2 border-stone-100 dark:border-stone-800 hover:border-coral/50 dark:hover:border-coral/50"
                          onMouseEnter={() => setActiveExperience(idx)}
                          onMouseLeave={() => setActiveExperience(null)}
                        >
                            <div className="flex flex-col xl:flex-row print:flex-row justify-between xl:items-baseline print:items-baseline mb-2">
                              <h5 className={`text-xl font-bold transition-colors ${activeExperience === idx ? 'text-coral' : 'text-charcoal dark:text-stone-100'}`}>{exp.role}</h5>
                              <span className="text-xs font-bold text-coral bg-coral/10 dark:bg-coral/20 px-2 py-1 rounded-md mt-1 xl:mt-0 print:mt-0 w-fit shrink-0">{exp.period}</span>
                            </div>
                            <p className="text-stone-800 dark:text-stone-300 italic mb-2 print:mb-1">{exp.company}</p>
                            <p className="text-neutral-gray dark:text-stone-400 leading-relaxed text-sm max-w-4xl">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="md:col-span-6 print:col-span-6 flex flex-col space-y-10 print:space-y-8">
                
                {/* 3. Education */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-6 print:mb-4 bg-lavender/5 dark:bg-lavender/10 p-3 rounded-xl border border-lavender/10 dark:border-lavender/20">
                        <div className="w-8 h-8 rounded-lg bg-lavender text-white flex items-center justify-center shadow-sm">
                            <Award size={16} />
                        </div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal dark:text-stone-200">
                            Education
                        </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-6 print:gap-4">
                      {EDUCATION.map((edu, idx) => (
                        <div 
                          key={idx} 
                          className="relative group cursor-default md:pl-4 print:pl-4 border-l-2 border-stone-100 dark:border-stone-800 hover:border-lavender/50 dark:hover:border-lavender/50 transition-colors"
                          onMouseEnter={() => setActiveEducation(idx)}
                          onMouseLeave={() => setActiveEducation(null)}
                        >
                          <p className={`font-bold text-charcoal dark:text-stone-100 text-lg leading-tight mb-2 transition-colors duration-300 ${activeEducation === idx ? 'text-lavender' : ''}`}>{edu.degree}</p>
                          <p className="text-neutral-gray dark:text-stone-400 text-sm font-medium">{edu.institution}</p>
                          <p className="text-stone-400 dark:text-stone-500 text-xs mt-2">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                </div>

                {/* 4. Skills */}
                <div className="flex flex-col space-y-8 print:space-y-6">
                    {SKILL_CATEGORIES.map((category, catIdx) => (
                      <div key={catIdx} className="flex flex-col">
                           <div className="flex items-center gap-3 mb-4 print:mb-3 p-3 rounded-xl border bg-coral/5 dark:bg-coral/10 border-coral/10 dark:border-coral/20">
                              <div className="w-8 h-8 rounded-lg bg-coral text-white flex items-center justify-center shadow-sm">
                                  {category.iconName === 'PenTool' ? <PenTool size={16} /> : 
                                   category.iconName === 'Wrench' ? <Wrench size={16} /> : 
                                   category.iconName === 'HeartHandshake' ? <HeartHandshake size={16} /> : 
                                   <Briefcase size={16} />}
                              </div>
                              <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal dark:text-stone-200">
                                  {category.title}
                              </h4>
                           </div>
                           <div className="flex flex-wrap gap-2">
                              {category.skills.map((skill, i) => (
                                <span 
                                  key={`skill-${catIdx}-${i}`} 
                                  className="px-4 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-charcoal dark:text-stone-300 text-sm font-bold rounded-xl shadow-sm hover:border-coral/50 dark:hover:border-coral/50 transition-colors cursor-default"
                                >
                                  {skill.name}
                                </span>
                                ))}
                           </div>
                      </div>
                    ))}
                </div>

            </div>

            {/* FULL WIDTH BOTTOM COLUMN */}
            <div className="md:col-span-12 print:col-span-12 flex flex-col mt-8 print:mt-6">
                {/* 5. Certifications & Achievements */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-6 print:mb-4 bg-lavender/5 dark:bg-lavender/10 p-3 rounded-xl border border-lavender/10 dark:border-lavender/20">
                      <div className="w-8 h-8 rounded-lg bg-lavender text-white flex items-center justify-center shadow-sm">
                          <Award size={16} />
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal dark:text-stone-200">
                          Achievements & Certifications
                      </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-6">
                    <div className="space-y-6">
                        {CERTIFICATIONS.map((cert, idx) => (
                          <div key={`cert-${idx}`} className="flex flex-col md:pl-4 print:pl-4 border-l-2 border-stone-100 dark:border-stone-800 hover:border-lavender/50 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                              <h5 className="text-base font-bold text-charcoal dark:text-stone-200">{cert.issuer}</h5>
                            </div>
                            <div className="flex flex-col gap-1">
                              {cert.courses.map((course, cIdx) => (
                                <span key={cIdx} className="text-neutral-gray dark:text-stone-400 text-sm">
                                  • {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="space-y-6">
                        {ACHIEVEMENTS.map((achievement, idx) => (
                          <div key={`ach-${idx}`} className="flex flex-col md:pl-4 print:pl-4 border-l-2 border-stone-100 dark:border-stone-800 hover:border-lavender/50 transition-colors">
                            <p className="text-base font-bold text-charcoal dark:text-stone-200 mb-1">{achievement.title}</p>
                            <p className="text-sm text-neutral-gray dark:text-stone-400 leading-relaxed">{achievement.description}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
            </div>

          </div>
        </div>

        {/* Back to Portfolio Button - Floating style within the Resume section context */}
        <div className="flex justify-center mt-16 print:hidden">
             <button 
                onClick={scrollToPortfolio}
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-charcoal dark:border-white text-charcoal dark:text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
             >
                {/* Fill effect */}
                <div className="absolute inset-0 bg-charcoal dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                
                {/* Content */}
                <div className="relative flex items-center gap-3 z-10 group-hover:text-white dark:group-hover:text-charcoal transition-colors duration-300">
                    <Briefcase size={20} />
                    <span>Back to Portfolio</span>
                    <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300"/>
                </div>
             </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;