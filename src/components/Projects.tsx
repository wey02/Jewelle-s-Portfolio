import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  Check, 
  Code,
  ShieldAlert,
  Info,
  Maximize2,
  Lock,
  Layers3,
  Cpu,
  Target,
  Wrench,
  Trophy
} from 'lucide-react';
import { projectsData, projectCategories } from '../data/portfolioData';
import { Project, ProjectCategory, ProjectScreenshot } from '../types';
import { ScreenshotLightbox } from './ScreenshotLightbox';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [failedScreenshotUrls, setFailedScreenshotUrls] = useState<Record<string, boolean>>({});

  const handleOpenLightbox = (project: Project, _screenshot: ProjectScreenshot, index: number) => {
    setLightboxProject(project);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#FAF7FB] border-t border-pink-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}  
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="space-y-3 flex flex-col items-center">
          
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Featured <span className="bg-gradient-to-r from-[#C026D3] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Projects & Applications</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Turning ideas and real-world problems into working solutions.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {projectCategories.map((cat) => {
              const count = cat.id === 'all' 
                ? projectsData.length 
                : projectsData.filter(p => p.category === cat.id).length;

              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                  id={`filter-projects-${cat.id}`}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#C026D3] via-[#EC4899] to-[#8B5CF6] text-white shadow-[0_0_15px_rgba(217,70,239,0.35)] font-semibold ring-2 ring-[#F0ABFC]'
                      : 'bg-white text-slate-700 hover:text-[#C026D3] hover:bg-pink-50/50 border border-pink-200/80'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white font-bold'
                      : 'bg-[#FDF4FF] text-[#A21CAF] font-semibold'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Alternating List */}
        <div className="space-y-16 sm:space-y-24">
          {filteredProjects.map((project, idx) => {
            // Alternating layout on desktop:
            // Even index (0, 2): Screenshots Left (order-1), Info Right (order-2)
            // Odd index (1, 3): Info Left (order-1), Screenshots Right (order-2)
            const isReversed = idx % 2 !== 0;
            const galleryScreenshots = project.screenshots.slice(0, 3);

            return (
              <article
                key={project.id}
                id={`case-study-${project.id}`}
                className="rounded-3xl bg-white border border-pink-200/70 shadow-sm hover:shadow-xl transition-all p-6 sm:p-8 lg:p-10 relative overflow-hidden"
              >
                {/* Decorative Top Accent Bar with brand gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C026D3] via-[#EC4899] to-[#8B5CF6]" />

                {/* Project Header: Full-Width Title & Badges Spanning Across Both Columns */}
                <header className="mb-8 pb-6 border-b border-pink-100">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    

                    
                    {project.isPrivate && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        <Lock className="w-3 h-3 text-slate-500" />
                        Internal Enterprise System
                      </span>
                    )}
                  </div>

                  {/* Prominent Project Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                    {project.title}
                  </h3>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#FDF4FF] text-[#A21CAF] border border-[#F0ABFC]">
                    
                      {project.projectType}
                    </span>
                </header>

                {/* Two-Column Grid: Screenshots (48%) & Structured Project Explanation (52%) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  
                  {/* Screenshots Column */}
                  <div className={`lg:col-span-6 flex flex-col items-center justify-center lg:self-stretch ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    {galleryScreenshots.length > 0 && (
                      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:content-center lg:gap-0 lg:py-4">
                        {galleryScreenshots.map((screenshot, screenshotIndex) => (
                          <button
                            key={screenshot.id}
                            type="button"
                            onClick={() => handleOpenLightbox(project, screenshot, screenshotIndex)}
                            className={`group relative block w-full overflow-hidden rounded-2xl border border-pink-200/80 bg-pink-50 shadow-md transition-all hover:z-40 hover:border-[#D946EF] hover:shadow-xl focus-visible:z-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D946EF] focus-visible:ring-offset-2 ${
                              screenshotIndex === 0
                                ? 'sm:col-span-2 lg:col-span-1 lg:z-10 lg:w-[92%] lg:justify-self-start'
                                : screenshotIndex === 1
                                  ? 'lg:z-20 lg:-mt-[3%] lg:w-[68%] lg:justify-self-end'
                                  : 'lg:z-30 lg:-mt-[3%] lg:w-[72%] lg:justify-self-start'
                            }`}
                            aria-label={`Open screenshot ${screenshotIndex + 1} for ${project.title}`}
                          >
                            <div className="aspect-video w-full">
                              {failedScreenshotUrls[screenshot.imageUrl] ? (
                                <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-500">
                                  Screenshot unavailable
                                </div>
                              ) : (
                                <img
                                  src={screenshot.imageUrl}
                                  alt={screenshot.title || `${project.title} screenshot ${screenshotIndex + 1}`}
                                  className="h-full w-full object-cover object-top"
                                  onError={() => setFailedScreenshotUrls((previous) => ({
                                    ...previous,
                                    [screenshot.imageUrl]: true,
                                  }))}
                                />
                              )}
                            </div>
                            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-950/75 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                              <Maximize2 className="h-3.5 w-3.5" />
                              View image
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Information Column */}
                  <div className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    
                    {/* Purpose & Problem Solved */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#FDF4FF] border border-[#F0ABFC]/70 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono text-[#A21CAF]">
                        <Info className="w-4 h-4 text-[#D946EF]" />
                        <span>Purpose & Problem Solved</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {project.purpose}
                      </p>
                    </div>

                    {/* What I Built & Architectural Contribution */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-fuchsia-50/40 border border-fuchsia-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono text-[#A21CAF]">
                        <Wrench className="w-4 h-4 text-[#EC4899]" />
                        <span>What I Built & My Role</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {project.myRole}
                      </p>
                    </div>

                    {/* Key Features List */}
                    <div>
                      <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#A21CAF] mb-3">
                        Key Capabilities & Features:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.keyFeatures.map((feat, fIdx) => (
                          <li 
                            key={fIdx} 
                            className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
                          >
                            <span className="w-4 h-4 rounded-full bg-[#FDF4FF] text-[#A21CAF] flex items-center justify-center shrink-0 mt-0.5 border border-[#F0ABFC]">
                              <Check className="w-2.5 h-2.5 stroke-[3] text-[#D946EF]" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What I Built & Architectural Contribution */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-fuchsia-50/40 border border-fuchsia-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono text-[#A21CAF]">
                        <Trophy className="w-4 h-4 text-[#EC4899]" />
                        <span>Outcome</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>

                    {/* Technology Badges */}
                    <div>
                      <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#A21CAF] mb-2.5">
                        Technology Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#FDF4FF] text-[#A21CAF] border border-[#F0ABFC] select-none cursor-default shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Screenshot Lightbox Modal */}
      {lightboxProject && (
        <ScreenshotLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          screenshots={lightboxProject.screenshots}
          currentIndex={lightboxIndex}
          onSelectIndex={(newIdx) => setLightboxIndex(newIdx)}
          projectTitle={lightboxProject.title}
          projectId={lightboxProject.id}
        />
      )}

      {/* Project Deep Dive Modal (if user opens extra modal) */}
      <ProjectModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
      />
    </section>
  );
};
