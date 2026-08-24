import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  FileCheck, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  X,
  Presentation,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'certification' | 'seminar'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxCert, setLightboxCert] = useState<Certification | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const filteredItems = certificationsData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.type === activeCategory;
  });

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Auto-play slideshow effect
  useEffect(() => {
    if (isAutoPlaying && filteredItems.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, filteredItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const activeItem = filteredItems[currentIndex] || filteredItems[0];

  return (
    <section id="certifications" className="py-20 bg-white border-t border-pink-100 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Centralized */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-[#A21CAF] text-xs font-semibold uppercase tracking-wider font-mono border border-pink-200 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D946EF]" />
            <span>Verified Credentials & Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C026D3] via-[#D946EF] to-[#EC4899]">Seminars</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Interactive showcase of industry-recognized certifications, technical workshops, and cloud engineering accreditations.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            id="filter-cert-all"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#C026D3] via-[#EC4899] to-[#8B5CF6] text-white shadow-[0_0_15px_rgba(217,70,239,0.3)] font-semibold ring-2 ring-[#F0ABFC]'
                : 'bg-white text-slate-700 hover:text-[#C026D3] hover:bg-pink-50/50 border border-pink-200/80'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Credentials ({certificationsData.length})</span>
          </button>
          
          <button
            onClick={() => setActiveCategory('certification')}
            id="filter-cert-certifications"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeCategory === 'certification'
                ? 'bg-gradient-to-r from-[#C026D3] via-[#EC4899] to-[#8B5CF6] text-white shadow-[0_0_15px_rgba(217,70,239,0.3)] font-semibold ring-2 ring-[#F0ABFC]'
                : 'bg-white text-slate-700 hover:text-[#C026D3] hover:bg-pink-50/50 border border-pink-200/80'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Certifications ({certificationsData.filter(c => c.type === 'certification').length})</span>
          </button>

          <button
            onClick={() => setActiveCategory('seminar')}
            id="filter-cert-seminars"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeCategory === 'seminar'
                ? 'bg-gradient-to-r from-[#C026D3] via-[#EC4899] to-[#8B5CF6] text-white shadow-[0_0_15px_rgba(217,70,239,0.3)] font-semibold ring-2 ring-[#F0ABFC]'
                : 'bg-white text-slate-700 hover:text-[#C026D3] hover:bg-pink-50/50 border border-pink-200/80'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Seminars & Summits ({certificationsData.filter(c => c.type === 'seminar').length})</span>
          </button>
        </div>

        {/* Main Sliding Show Display */}
        {activeItem && (
          <div 
            className="max-w-5xl mx-auto bg-white rounded-3xl border border-pink-200 shadow-xl overflow-hidden mb-8 transition-all"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Photo / Certificate Slide (Left/Top on mobile) */}
              <div className="lg:col-span-7 bg-slate-950 relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center p-4 sm:p-6 overflow-hidden group">
                {/* Background image ambient blur */}
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110"
                  style={{ backgroundImage: `url(${activeItem.imageUrl})` }}
                />
                
                {/* Main Photo Container */}
                <div className="relative z-10 w-full h-full max-h-[380px] flex items-center justify-center">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[360px] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10 transition-transform duration-500 group-hover:scale-102 cursor-pointer"
                    onClick={() => setLightboxCert(activeItem)}
                  />
                  
                  {/* Click to expand overlay */}
                  <button
                    onClick={() => setLightboxCert(activeItem)}
                    id="btn-expand-cert-photo"
                    title="View full image"
                    className="absolute top-3 right-3 p-2.5 rounded-xl bg-black/60 hover:bg-[#C026D3] text-white backdrop-blur-md transition-all shadow-lg cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Type Badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-semibold flex items-center gap-1.5">
                    {activeItem.type === 'seminar' ? (
                      <>
                        <Presentation className="w-3.5 h-3.5 text-[#F0ABFC]" />
                        <span>Seminar / Conference</span>
                      </>
                    ) : (
                      <>
                        <Award className="w-3.5 h-3.5 text-[#F0ABFC]" />
                        <span>Professional Certificate</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Slideshow Nav Overlay Arrows */}
                <button
                  onClick={handlePrev}
                  id="btn-slideshow-prev"
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-[#C026D3] shadow-lg backdrop-blur-md transition-all cursor-pointer z-20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  id="btn-slideshow-next"
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-[#C026D3] shadow-lg backdrop-blur-md transition-all cursor-pointer z-20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Detail Info Panel (Right/Bottom) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-white to-pink-50/30">
                <div className="space-y-4">
                  
                  {/* Top Badge & Counter */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-[#A21CAF] bg-pink-100/80 px-2.5 py-1 rounded-md">
                      {String(currentIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${activeItem.badgeColor || 'bg-rose-50 text-rose-700 border-rose-200'}`}>
                      {activeItem.status}
                    </span>
                  </div>

                  {/* Issuer & Title */}
                  <div>
                    <span className="text-xs font-mono font-medium text-slate-500 block mb-1">
                      {activeItem.issuer}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {activeItem.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeItem.description}
                  </p>

                  {/* Key Competencies */}
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-white text-[#A21CAF] border border-pink-200 shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Meta & Action */}
                <div className="pt-6 mt-6 border-t border-pink-100 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-[#D946EF]" />
                      <span>{activeItem.credentialId}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{activeItem.issueDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={activeItem.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`verify-active-cert-${activeItem.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C026D3] to-[#EC4899] hover:from-[#A21CAF] hover:to-[#DB2777] text-white text-xs font-semibold shadow-[0_0_15px_rgba(217,70,239,0.25)] transition-all cursor-pointer"
                    >
                      <span>Verify Certificate / Record</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      id="toggle-autoplay-btn"
                      title={isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                      className="p-2.5 rounded-xl border border-pink-200 bg-white hover:bg-pink-50 text-slate-600 hover:text-[#C026D3] transition-colors cursor-pointer"
                    >
                      {isAutoPlaying ? (
                        <Pause className="w-4 h-4 text-[#C026D3]" />
                      ) : (
                        <Play className="w-4 h-4 text-slate-600" />
                      )}
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Thumbnail Sliding Strip (All 10 items) */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
              Credentials Gallery ({filteredItems.length} items)
            </span>
            <div className="flex items-center gap-1.5">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-6 bg-gradient-to-r from-[#C026D3] to-[#EC4899]' 
                      : 'w-2 bg-pink-200 hover:bg-pink-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {filteredItems.map((item, idx) => {
              const isSelected = currentIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  id={`thumb-cert-${item.id}`}
                  className={`group text-left p-2 rounded-2xl border transition-all cursor-pointer relative overflow-hidden bg-white ${
                    isSelected
                      ? 'border-[#D946EF] ring-2 ring-[#F0ABFC] shadow-md shadow-pink-500/10'
                      : 'border-pink-200/80 hover:border-pink-300 hover:shadow-xs'
                  }`}
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 relative mb-2">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-1.5">
                      <span className="text-[10px] font-mono font-semibold text-white truncate">
                        {item.issuer.split('·')[0]}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] font-bold text-slate-900 line-clamp-1 group-hover:text-[#A21CAF] transition-colors">
                    {item.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* High-Resolution Lightbox Modal */}
      {lightboxCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-950 rounded-3xl border border-white/10 p-4 sm:p-6 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-white">
              <div>
                <span className="text-xs font-mono text-[#F0ABFC]">{lightboxCert.issuer}</span>
                <h3 className="text-base sm:text-lg font-bold">{lightboxCert.title}</h3>
              </div>
              <button
                onClick={() => setLightboxCert(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center max-h-[70vh] overflow-hidden rounded-2xl bg-black">
              <img
                src={lightboxCert.imageUrl}
                alt={lightboxCert.title}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              <span>ID: {lightboxCert.credentialId} • {lightboxCert.issueDate}</span>
              <a
                href={lightboxCert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F0ABFC] hover:underline font-semibold"
              >
                <span>Verify Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
