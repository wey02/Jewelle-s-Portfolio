import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/50 border-t border-pink-100 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-[#A21CAF] text-xs font-semibold uppercase tracking-wider font-mono border border-pink-200">
            <Briefcase className="w-3.5 h-3.5 text-[#D946EF]" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C026D3] via-[#D946EF] to-[#EC4899]">Impact</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Hands-on software engineering delivering complex systems, microservice backends, and AI pipelines across fast-paced environments.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-[#D946EF] before:via-[#EC4899]/50 before:to-pink-200 before:z-0">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              id={`experience-item-${idx}`}
              className="relative z-10 pl-10 sm:pl-12 group"
            >
              {/* Timeline marker */}
              <div className="absolute left-1.5 sm:left-2 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-[#C026D3] group-hover:border-[#EC4899] group-hover:scale-125 transition-all shadow-md shadow-pink-500/20"></div>

              <div className="bg-white rounded-2xl border border-pink-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md hover:shadow-pink-500/10 transition-all">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-pink-100 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C026D3] to-[#EC4899] mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-pink-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A21CAF] font-mono">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#D946EF] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="pt-4 border-t border-pink-100 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-400 mr-1">Stack:</span>
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-pink-50 text-[#A21CAF] border border-pink-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
