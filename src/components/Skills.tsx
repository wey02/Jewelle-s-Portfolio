import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  Terminal,
  Zap
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Layout className="w-5 h-5 text-[#D946EF]" />;
      case 'backend':
        return <Server className="w-5 h-5 text-[#C026D3]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#EC4899]" />;
      case 'ai-integration':
        return <Cpu className="w-5 h-5 text-[#F43F5E]" />;
      default:
        return <Layers className="w-5 h-5 text-[#D946EF]" />;
    }
  };

  const filteredGroups = skillsData.filter(
    (group) => selectedCategory === 'all' || group.id === selectedCategory
  );

  return (
    <section id="skills" className="py-20 bg-white border-t border-pink-100 relative overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-[#A21CAF] text-xs font-semibold uppercase tracking-wider font-mono border border-pink-200">
              <Zap className="w-3.5 h-3.5 text-[#D946EF]" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C026D3] via-[#D946EF] to-[#EC4899]">Engineering Stack</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Technologies and tools I’ve applied across frontend, backend, databases, APIs, AI integration, and deployment.            </p>
          </div>
        </div>

        {/* Skill Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            id="skill-cat-all"
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-[#C026D3] to-[#EC4899] text-white shadow-md shadow-pink-500/20'
                : 'bg-white text-slate-600 hover:text-[#C026D3] hover:bg-pink-50 border border-pink-200'
            }`}
          >
            All Disciplines
          </button>
          {skillsData.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedCategory(group.id)}
              id={`skill-cat-${group.id}`}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === group.id
                  ? 'bg-gradient-to-r from-[#C026D3] to-[#EC4899] text-white shadow-md shadow-pink-500/20'
                  : 'bg-white text-slate-600 hover:text-[#C026D3] hover:bg-pink-50 border border-pink-200'
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              id={`skill-group-${group.id}`}
              className="bg-white rounded-2xl border border-pink-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md hover:shadow-pink-500/10 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-pink-100 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-pink-50 border border-pink-200">
                      {getCategoryIcon(group.id)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
                      <p className="text-xs text-slate-500">{group.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-pink-50 text-[#A21CAF] border border-pink-200">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-pink-50 text-slate-800 font-medium text-xs sm:text-sm border border-slate-200 hover:border-pink-300 transition-all shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF]"></span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stack Integration Callout */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-pink-50/80 via-white to-fuchsia-50/80 text-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 border border-pink-200 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base font-bold flex items-center justify-center md:justify-start gap-2 text-[#A21CAF]">
              <Terminal className="w-4 h-4 text-[#D946EF]" />
              Need a custom integration or specialized tech stack?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
              I routinely adapt to existing enterprise frameworks, internal tooling, and modern cloud deployment targets.
            </p>
          </div>
          <a
            href="#contact"
            id="skills-discuss-stack-btn"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#C026D3] to-[#EC4899] hover:from-[#D946EF] hover:to-[#F43F5E] transition-all shadow-md shadow-pink-500/20 whitespace-nowrap cursor-pointer"
          >
            Discuss Your Architecture
          </a>
        </div>

      </div>
    </section>
  );
};
