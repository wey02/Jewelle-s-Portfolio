import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Server, Sparkles, Layers, Lock, Wrench, Info } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#12091E] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-pink-200/80 dark:border-[#3B134A] relative shadow-[0_0_40px_rgba(217,70,239,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-[#0D0716]/95 backdrop-blur-xs px-6 py-4 border-b border-pink-100 dark:border-[#2A0D36] flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#FDF4FF] dark:bg-[#200A38] text-[#A21CAF] dark:text-[#F0ABFC] border border-[#F0ABFC]/60 dark:border-fuchsia-800/60">
              {project.projectType}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/50">
                <Sparkles className="w-3 h-3 text-rose-500" />
                Featured Project
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            id="close-project-modal-btn"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-[#FDF4FF] dark:hover:bg-[#1F0A30] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
            {project.targetAudience && (
              <p className="text-xs font-mono text-[#C026D3] dark:text-[#F0ABFC] mt-1">
                Target Users: {project.targetAudience}
              </p>
            )}
          </div>

          {/* Purpose & Problem Solved */}
          <div className="p-4 rounded-xl bg-[#FDF4FF] dark:bg-[#1A0C2C] border border-[#F0ABFC]/60 dark:border-[#3B134A] space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A21CAF] dark:text-[#F0ABFC] font-mono flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#D946EF]" />
              Purpose & Problem Addressed
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {project.purpose}
            </p>
          </div>

          {/* Role & What I Built */}
          <div className="p-4 rounded-xl bg-[#FDF2F8]/60 dark:bg-[#200A38]/70 border border-[#F472B6]/60 dark:border-[#4A1560] space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#BE185D] dark:text-[#F472B6] font-mono flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#EC4899]" />
              Architecture & What I Built
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {project.myRole}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 font-mono">
              Core Technical Features
            </h4>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#D946EF] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Metrics */}
          {project.metrics && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A21CAF] dark:text-[#F0ABFC] font-mono mb-2">
                Measured Outcomes & Benchmarks
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FDF4FF] dark:bg-[#150824] border border-[#F0ABFC]/60 dark:border-[#3B134A] text-center">
                    <div className="text-lg font-bold text-[#A21CAF] dark:text-[#F0ABFC] font-mono">{m.value}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Badges (non-clickable pills) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A21CAF] dark:text-[#F0ABFC] font-mono mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#FDF4FF] dark:bg-[#200A38] text-[#A21CAF] dark:text-[#F0ABFC] border border-[#F0ABFC]/70 dark:border-[#3B134A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 sm:px-8 py-4 bg-[#FDF4FF]/40 dark:bg-[#090410] border-t border-pink-100 dark:border-[#2A0D36] flex items-center justify-end gap-3">
          {project.isPrivate ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#1F0A30] text-slate-600 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-[#3B134A]">
              <Lock className="w-3.5 h-3.5" />
              <span>Proprietary Codebase</span>
            </div>
          ) : (
            project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-[#A21CAF] dark:text-[#F0ABFC] bg-white dark:bg-[#150824] hover:bg-[#FDF4FF] dark:hover:bg-[#200A38] border border-[#F0ABFC] dark:border-[#3B134A] transition-colors shadow-2xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#C026D3] to-[#EC4899] hover:from-[#D946EF] hover:to-[#F43F5E] transition-all shadow-md shadow-fuchsia-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
