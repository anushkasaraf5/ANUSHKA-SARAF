import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project, MediaItem } from '../types';
import { X, ArrowLeft, Tag, ZoomIn, ArrowRight, CheckCircle2, Layers, BookOpen, Megaphone, Play, Pause, Volume2, Music, Film, Image as ImageIcon, Calendar } from 'lucide-react';
import ImageViewer from './ImageViewer';
import Flipbook from './Flipbook';
import { RevealOnScroll } from './RevealOnScroll';

// --- CONFIGURATION ---
const IMAGE_ASPECT_RATIO = 'aspect-[4/3]';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
       document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const openProject = (project: Project) => {
    // Scroll to top of overlay when opening new project
    const overlay = document.getElementById('project-overlay');
    if (overlay) overlay.scrollTop = 0;
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
      e.preventDefault();
      closeProject();
      // Allow time for modal to close before scrolling
      setTimeout(() => {
          const element = document.getElementById(sectionId);
          if(element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
  };

  // Helper function to process video URLs
  const getEmbedUrl = (url: string) => {
    if (url.includes('vimeo')) {
      // Check if already player url
      if(url.includes('player.vimeo.com')) return url;
      // Extract ID
      const match = url.match(/vimeo\.com\/(?:.*\/)?(\d+)/);
      if (match && match[1]) {
        return `https://player.vimeo.com/video/${match[1]}`;
      }
    }
    if (url.includes('youtube') || url.includes('youtu.be')) {
      if(url.includes('youtube.com/embed')) return url;
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/))([^&?]*)/);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }
    return url;
  };

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const otherProjects = useMemo(() => {
    if (!selectedProject) return [];
    return PROJECTS.filter(p => p.id !== selectedProject.id).slice(0, 3);
  }, [selectedProject]);

  const SectionTitle = ({ title, className = "" }: { title: string, className?: string }) => (
    <div className={`flex items-center gap-2 mb-6 ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse"></div>
      <h3 className="text-lg md:text-xl font-bold tracking-wider font-subheading text-charcoal dark:text-white">{title}</h3>
    </div>
  );

  return (
    <section id="work" className="py-32 bg-white dark:bg-stone-950 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Gradients - Strictly Purple/Pink */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lavender/20 dark:bg-lavender/10 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-60 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coral/10 dark:bg-coral/10 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-60 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="animate-fadeIn">
            <div className="flex items-center gap-2 mb-3">
               <span className="h-px w-6 bg-neutral-gray dark:bg-stone-500"></span>
               <h2 className="text-xs font-highlight font-bold tracking-widest uppercase text-coral dark:text-coral">Portfolio</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-charcoal dark:text-white tracking-tight">Selected Works</h3>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 justify-end animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-highlight text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-charcoal text-white border-charcoal dark:bg-white dark:text-stone-900 dark:border-white shadow-md scale-105 hover:scale-110'
                    : 'bg-cream text-neutral-gray border-stone-200 hover:border-charcoal hover:text-charcoal dark:border-stone-700 dark:bg-stone-900/50 dark:text-stone-400 dark:hover:text-white dark:hover:border-white hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => openProject(project)}
              index={index}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div id="project-overlay" className="fixed inset-0 z-[60] bg-cream dark:bg-stone-950 overflow-y-auto animate-fadeIn custom-scrollbar">
            
            {/* Sticky Navigation Header with Main Menu Links */}
            <div className="sticky top-0 left-0 right-0 h-20 bg-cream/90 dark:bg-stone-950/90 backdrop-blur-md z-50 flex items-center justify-between px-6 md:px-10 border-b border-stone-200 dark:border-stone-800 transition-colors animate-fadeIn">
               <button 
                  onClick={closeProject}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-charcoal dark:text-white font-highlight font-bold text-[10px] uppercase tracking-widest shadow-sm group"
               >
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  <span>Back</span>
               </button>

               {/* Main Menu Links in Project View */}
               <div className="hidden md:flex items-center gap-1 bg-white dark:bg-stone-800/50 p-1 rounded-full border border-stone-100 dark:border-stone-700">
                  {['About', 'Skills', 'Work', 'Resume', 'Contact'].map((item) => (
                      <a 
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => handleNavClick(e, item.toLowerCase())}
                        className="px-3 py-1.5 rounded-full font-highlight text-[10px] font-bold uppercase tracking-widest text-neutral-gray hover:text-charcoal hover:bg-cream dark:text-stone-400 dark:hover:text-white dark:hover:bg-stone-700 transition-all"
                      >
                          {item}
                      </a>
                  ))}
               </div>
               
               <button 
                  onClick={closeProject}
                  className="p-2.5 rounded-full hover:bg-coral/10 hover:text-coral transition-colors hover:rotate-90 duration-300 text-neutral-gray"
               >
                  <X size={20} />
               </button>
            </div>

            {/* INCREASED PADDING TOP (pt-36) to ensure content clears sticky header */}
            <div className="max-w-[80rem] mx-auto px-6 md:px-10 pt-20 pb-20">
                  
                  {/* HERO SECTION - Refined Typography */}
                  <div className="mb-12">
                     <RevealOnScroll direction="up" delay={0.1}>
                        <div className="flex flex-wrap gap-2 mb-3">
                           <span className="px-2 py-0.5 border border-lavender/30 text-lavender rounded-full flex items-center gap-1 font-bold text-[9px] uppercase tracking-widest shadow-sm transition-transform hover:bg-lavender/10">
                              <Tag size={10} /> {selectedProject.category}
                           </span>
                           <span className="px-2 py-0.5 border border-coral/30 text-coral rounded-full flex items-center gap-1 font-bold text-[9px] uppercase tracking-widest shadow-sm transition-transform hover:bg-coral/10">
                              <Calendar size={10} /> {selectedProject.date}
                           </span>
                        </div>
                     </RevealOnScroll>
                     <RevealOnScroll direction="up" delay={0.2}>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4 text-charcoal dark:text-white leading-[1.1]">
                           {selectedProject.title}
                        </h1>
                     </RevealOnScroll>
                     
                     <RevealOnScroll direction="up" delay={0.3}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
                           <div className="md:col-span-8 md:col-start-5">
                              <p className="text-sm md:text-base text-neutral-gray dark:text-stone-400 font-light leading-relaxed max-w-2xl">
                                 {selectedProject.description}
                              </p>
                           </div>
                        </div>
                     </RevealOnScroll>

                     <RevealOnScroll direction="up" delay={0.4}>
                        <div 
                           className="w-full h-[30vh] md:h-[50vh] rounded-2xl overflow-hidden relative group cursor-zoom-in shadow-lg"
                           onClick={() => setViewingImage(selectedProject.thumbnailUrl)}
                        >
                           <img 
                              src={selectedProject.thumbnailUrl} 
                              alt={selectedProject.title} 
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                           />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-500">
                                 <ZoomIn size={14} /> View Full Image
                              </div>
                           </div>
                        </div>
                     </RevealOnScroll>
                  </div>

                  {/* OVERVIEW & CONCEPT SECTION */}
                  <RevealOnScroll direction="up">
                     <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                        <div className="lg:col-span-4 lg:sticky lg:top-24">
                           <h3 className="text-xl md:text-2xl font-subheading font-bold text-charcoal dark:text-white mb-3">01 // The Brief</h3>
                        </div>
                        <div className="lg:col-span-8">
                           <p className="text-sm md:text-base text-charcoal dark:text-stone-300 leading-relaxed font-light mb-5">
                              {selectedProject.details.overview}
                           </p>
                           {selectedProject.details.conceptNote && (
                              <div className="p-4 md:p-5 bg-lavender/5 dark:bg-lavender/10 rounded-xl border-l-2 border-lavender group hover:bg-lavender/10 transition-colors duration-300">
                                 <p className="text-xs md:text-sm text-charcoal dark:text-stone-200 italic font-heading">
                                    "{selectedProject.details.conceptNote}"
                                 </p>
                              </div>
                           )}
                        </div>
                     </div>
                  </RevealOnScroll>

                  {/* THE CHALLENGE */}
                  <RevealOnScroll direction="up">
                     <div className="w-full bg-charcoal dark:bg-stone-900 text-white rounded-2xl p-6 md:p-8 shadow-lg mb-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-stone-800 dark:bg-stone-800/50 rounded-bl-full opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                           <div className="lg:col-span-4">
                              <h3 className="text-xl md:text-2xl font-subheading font-bold text-stone-200 mb-2">02 // The Challenge</h3>
                           </div>
                           <div className="lg:col-span-8">
                              <p className="text-base md:text-lg font-heading font-medium leading-relaxed group-hover:text-coral/90 transition-colors duration-500">
                                 "{selectedProject.details.problem}"
                              </p>
                           </div>
                        </div>
                     </div>
                  </RevealOnScroll>

                  {/* PROCESS - Vertical Timeline */}
                  <RevealOnScroll direction="up">
                     <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                        <div className="lg:col-span-4 lg:sticky lg:top-24">
                           <h3 className="text-xl md:text-2xl font-subheading font-bold text-charcoal dark:text-white mb-2">03 // The Process</h3>
                           <p className="text-neutral-gray dark:text-stone-400 text-[11px] font-highlight uppercase tracking-wider mt-2">A structured approach to solving the design challenge.</p>
                        </div>
                        <div className="lg:col-span-8 relative">
                           <div className="absolute left-[9px] top-2 bottom-2 w-px bg-stone-200 dark:bg-stone-800"></div>
                           <div className="space-y-6">
                              {selectedProject.details.processSteps.map((step, i) => (
                                 <div key={i} className="relative pl-8 group">
                                    <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white dark:bg-stone-950 border-2 border-stone-200 dark:border-stone-800 flex items-center justify-center group-hover:border-lavender group-hover:bg-lavender/10 transition-colors duration-300 z-10">
                                       <span className="text-[9px] font-bold text-neutral-gray group-hover:text-lavender transition-colors">{i+1}</span>
                                    </div>
                                    <h4 className="text-sm font-bold text-charcoal dark:text-white mb-1 group-hover:text-lavender transition-colors">
                                       {step.title}
                                    </h4>
                                    <p className="text-xs text-neutral-gray dark:text-stone-400 leading-relaxed">
                                       {step.description}
                                    </p>
                                 </div>
                              ))}
                           </div>
                           
                           {/* Process Quote / Insight */}
                           {selectedProject.details.process && (
                              <div className="mt-8 pl-8 flex items-start gap-2 text-neutral-gray dark:text-stone-400 group">
                                 <Layers size={14} className="mt-1 shrink-0 text-coral group-hover:animate-bounce" />
                                 <p className="italic text-sm font-heading group-hover:text-charcoal dark:group-hover:text-stone-200 transition-colors">
                                    {selectedProject.details.process}
                                 </p>
                              </div>
                           )}
                        </div>
                     </div>
                  </RevealOnScroll>



                  {/* OUTCOME - Visual Impact */}
                  <RevealOnScroll direction="up">
                     <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start bg-cream dark:bg-stone-900/30 p-6 md:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 group hover:border-lavender/50 transition-colors duration-500">
                         <div className="lg:col-span-4">
                             <h3 className="text-xl md:text-2xl font-subheading font-bold text-charcoal dark:text-white mb-3">04 // The Outcome</h3>
                             <div className="flex items-center gap-2 mb-2">
                                  <CheckCircle2 size={14} className="text-coral group-hover:text-lavender transition-colors duration-500" />
                                  <h3 className="text-base md:text-lg font-bold tracking-wider font-subheading text-charcoal dark:text-white">Impact</h3>
                             </div>
                         </div>
                         <div className="lg:col-span-8">
                             <div className="text-sm md:text-base text-neutral-gray dark:text-stone-300 leading-relaxed font-light group-hover:text-charcoal dark:group-hover:text-white transition-colors duration-500">
                                {selectedProject.details.outcome}
                             </div>
                         </div>
                     </div>
                  </RevealOnScroll>

                  {/* GALLERY - 4 Image Grid Layout */}
                  <RevealOnScroll direction="up">
                     <div className="mb-12">
                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-6">
                            <div className="lg:col-span-4">
                               <h3 className="text-xl md:text-2xl font-subheading font-bold text-charcoal dark:text-white mb-2">05 // Visual Art</h3>
                               <h4 className="text-lg font-bold text-charcoal dark:text-white">Project Gallery</h4>
                            </div>
                         </div>
                         
                         <div className="bg-white dark:bg-stone-900/30 p-4 md:p-5 rounded-2xl border border-stone-200 dark:border-stone-800">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                               {selectedProject.details.gallery.map((img, i) => (
                                  <div 
                                      key={i} 
                                      className="aspect-square rounded-lg overflow-hidden shadow-sm relative group border border-stone-200 dark:border-stone-800 cursor-zoom-in hover:shadow-md hover:-translate-y-1 transition-all duration-500"
                                      onClick={() => setViewingImage(img)}
                                  >
                                     <img 
                                        src={img} 
                                        alt={`Gallery ${i}`} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                     />
                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <ZoomIn className="text-white drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform duration-300" size={16} />
                                     </div>
                                  </div>
                               ))}
                            </div>
                         </div>
                     </div>
                  </RevealOnScroll>

                  {/* FLIPBOOK SECTION */}
                  {selectedProject.details.flipbook && (
                    <RevealOnScroll direction="up">
                       <div className="mb-12 w-full">
                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-6">
                            <div className="lg:col-span-4">
                               <h3 className="text-xl md:text-2xl font-subheading font-bold text-charcoal dark:text-white mb-2">06 // Digital Zine</h3>
                               <h4 className="text-lg font-bold text-charcoal dark:text-white">Interactive Publication</h4>
                            </div>
                         </div>
                         <div className="bg-cream dark:bg-stone-900/50 rounded-2xl p-4 md:p-5 border border-stone-200 dark:border-stone-800 hover:shadow-lg transition-shadow duration-500">
                            <div className="text-center mb-3">
                               <h4 className="font-heading italic text-base text-neutral-gray dark:text-stone-400">Interactive Preview</h4>
                               <p className="font-highlight text-[9px] text-stone-400 uppercase tracking-widest mt-1">Click pages to flip</p>
                            </div>
                            <Flipbook pages={selectedProject.details.flipbook} />
                         </div>
                       </div>
                    </RevealOnScroll>
                  )}

                  {/* NAVIGATE NEXT - Bottom Area */}
                  <RevealOnScroll direction="up">
                     <div className="border-t border-stone-200 dark:border-stone-800 pt-12">
                         {otherProjects.length > 0 && (
                           <>
                          <h4 className="text-xl md:text-2xl font-subheading font-bold text-charcoal dark:text-white mb-6">Discover More</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                             {otherProjects.map(project => (
                                <ProjectCard 
                                  key={project.id} 
                                  project={project} 
                                  onClick={() => openProject(project)}
                                  index={0}
                                />
                             ))}
                          </div>
                        </>
                      )}
                      
                      <div className="flex justify-center">
                        <button 
                           onClick={closeProject}
                           className="group relative px-6 py-2.5 bg-charcoal dark:bg-white text-white dark:text-stone-900 rounded-full font-bold shadow-lg hover:-translate-y-1 hover:shadow-stone-500/30 transition-all text-xs overflow-hidden"
                        >
                           <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                           <div className="relative flex items-center gap-2 z-10">
                              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                              Back to Portfolio
                           </div>
                        </button>
                      </div>
                  </div>
                  </RevealOnScroll>
            </div>
        </div>
      )}

      {viewingImage && (
        <ImageViewer 
          src={viewingImage} 
          alt="Project Image" 
          onClose={() => setViewingImage(null)} 
        />
      )}
    </section>
  );
};

// 3D Tilt Project Card Component
interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const xPct = x / width;
    const yPct = y / height;
    
    const xRot = (0.5 - yPct) * 10; // Increased rotation for more interactivity
    const yRot = (xPct - 0.5) * 10;
    
    setTransform(`perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.05)`);
    setGlarePosition({ x: xPct * 100, y: yPct * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer flex flex-col gap-3 animate-fadeIn opacity-0"
      onClick={onClick}
      style={{ 
        transform,
        transition: 'transform 0.1s ease-out',
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className={`${IMAGE_ASPECT_RATIO} w-full relative overflow-hidden rounded-2xl bg-stone-200 dark:bg-stone-800 shadow-sm group-hover:shadow-xl group-hover:shadow-lavender/20 dark:group-hover:shadow-lavender/10 transition-all duration-500 border-2 border-white dark:border-stone-800`}>
        <img 
          src={project.thumbnailUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
           <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="px-5 py-2.5 bg-white/90 backdrop-blur text-charcoal font-highlight text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                View Project
              </span>
           </div>
        </div>

        {/* Glare Effect */}
        <div 
           className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 mix-blend-overlay"
           style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 80%)`
           }}
        />
      </div>
      <div className="px-1 transform transition-transform duration-300 group-hover:translate-x-1">
        <div className="flex justify-between items-start">
          <h4 className="font-heading font-bold text-base md:text-lg leading-tight text-charcoal dark:text-white group-hover:text-coral dark:group-hover:text-coral transition-colors">
            {project.title}
          </h4>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
           <span className="px-1.5 py-0.5 rounded border border-stone-300 dark:border-stone-700 font-highlight text-[8px] font-bold text-neutral-gray dark:text-stone-400 uppercase tracking-wider group-hover:bg-cream dark:group-hover:bg-stone-800 transition-colors">
             {project.category}
           </span>
           <span className="px-1.5 py-0.5 rounded border border-stone-300 dark:border-stone-700 font-highlight text-[8px] font-bold text-neutral-gray dark:text-stone-400 uppercase tracking-wider group-hover:bg-cream dark:group-hover:bg-stone-800 transition-colors">
             {project.date}
           </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;