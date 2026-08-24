import React from 'react';
import { X, Printer, Mail, MapPin, Globe } from 'lucide-react';
import { developerProfile, skillsData, experienceData, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#12091E] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-pink-200/80 dark:border-[#3B134A] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 bg-white/95 dark:bg-[#12091E]/95 backdrop-blur-md px-6 py-4 border-b border-pink-100 dark:border-[#2A0D36] flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A21CAF] dark:text-[#F0ABFC] bg-[#FDF4FF] dark:bg-[#1F0A30] border border-pink-200/80 dark:border-[#3B134A] px-3 py-1 rounded-full">
              Curriculum Vitae / Summary
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 bg-pink-50 dark:bg-[#1F0A30] hover:bg-pink-100 dark:hover:bg-[#2A0D3B] border border-pink-200 dark:border-[#3B134A] transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#D946EF]" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              id="resume-close-btn"
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-pink-50 dark:hover:bg-[#1F0A30] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 space-y-8 text-slate-900 dark:text-slate-100 bg-white dark:bg-[#12091E]">
          
          {/* Header */}
          <div className="border-b border-pink-100 dark:border-[#2A0D36] pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{developerProfile.name}</h2>
            <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C026D3] to-[#EC4899] mt-1">{developerProfile.title}</p>
            
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-pink-400" />
                {developerProfile.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                {developerProfile.location}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-pink-400" />
                Available for Full-Time & Contract
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A21CAF] dark:text-[#F0ABFC] font-mono mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {developerProfile.bio} Proven track record engineering production-grade web applications, fault-tolerant backend architectures (Java/Spring Boot, Python/FastAPI, Node.js), and generative AI workflows with semantic search and structured output constraints.
            </p>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A21CAF] dark:text-[#F0ABFC] font-mono mb-3">
              Technical Skill Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {skillsData.map((group) => (
                <div key={group.id} className="p-3.5 rounded-xl bg-pink-50/40 dark:bg-[#180C26] border border-pink-200/70 dark:border-[#3B134A]">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">{group.title}</div>
                  <div className="text-slate-600 dark:text-slate-400 leading-relaxed font-mono text-[11px]">
                    {group.skills.map((s) => s.name).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A21CAF] dark:text-[#F0ABFC] font-mono mb-4">
              Experience History
            </h3>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{exp.role} — <span className="text-[#C026D3] dark:text-[#F0ABFC]">{exp.company}</span></span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-xs text-slate-700 dark:text-slate-300">
                    {exp.highlights.map((hl, hIdx) => (
                      <li key={hIdx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A21CAF] dark:text-[#F0ABFC] font-mono mb-3">
              Verified Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="p-3.5 rounded-xl border border-pink-200/70 dark:border-[#3B134A] bg-pink-50/30 dark:bg-[#180C26]">
                  <div className="font-bold text-slate-900 dark:text-white">{cert.title}</div>
                  <div className="text-slate-500 dark:text-slate-400 font-mono text-[11px] mt-0.5">{cert.issuer} • {cert.issueDate}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-pink-50/40 dark:bg-[#180C26] border-t border-pink-100 dark:border-[#2A0D36] flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400 font-mono">Status: Verified Candidate</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#C026D3] to-[#EC4899] text-white font-medium hover:from-[#D946EF] hover:to-[#F43F5E] transition-all shadow-md shadow-fuchsia-500/20"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
