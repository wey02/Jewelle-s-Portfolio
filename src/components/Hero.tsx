import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  FileText,
  Cpu,
  Database,
  Globe
} from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="about"
      className="pt-28 md:pt-36 overflow-hidden relative"
    >
      {/* Background futuristic rose-violet ambient glow and subtle mesh grid */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(217,70,239,0.12),transparent_70%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#F5D0FE_1px,transparent_1px),linear-gradient(to_bottom,#F5D0FE_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Small Intro */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF4FF] border border-[#F0ABFC] text-[#A21CAF] text-xs sm:text-sm font-semibold shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C026D3]"></span>
              </span>
              <span>Hi, I'm Jewelle!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Full-Stack Developer Building <span className="bg-gradient-to-r from-[#C026D3] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">AI-Powered Applications</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              I build practical web applications that combine reliable backend systems, modern interfaces, APIs, databases, and AI to solve real-world business problems.
            </p>

            {/* Key Value Prop Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-pink-100 shadow-2xs">
                <Globe className="w-4 h-4 text-[#D946EF] shrink-0" />
                <span className="text-xs font-medium text-slate-700">Full-Stack SaaS</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-pink-100 shadow-2xs">
                <Cpu className="w-4 h-4 text-[#EC4899] shrink-0" />
                <span className="text-xs font-medium text-slate-700">AI & LLM Workflows</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-pink-100 shadow-2xs col-span-2 sm:col-span-1">
                <Database className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                <span className="text-xs font-medium text-slate-700">Robust Backends</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#C026D3] via-[#EC4899] to-[#8B5CF6] hover:from-[#A21CAF] hover:to-[#7C3AED] transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_25px_rgba(217,70,239,0.45)] active:scale-98 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-contact-me-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#A21CAF] bg-[#FDF4FF] hover:bg-[#FCE7F3] border border-[#F0ABFC] transition-all active:scale-98 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                id="hero-view-resume-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-pink-50/60 border border-pink-200/80 transition-all shadow-2xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#D946EF]" />
                <span>Summary / Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-3 border-t border-pink-100 w-full">
              <span className="text-xs font-medium text-slate-500 font-mono">Connect:</span>
              <a
                href="https://github.com/example-username"
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="p-2 rounded-lg text-slate-600 hover:text-[#C026D3] hover:bg-fuchsia-50 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/example-username"
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin-link"
                className="p-2 rounded-lg text-slate-600 hover:text-[#C026D3] hover:bg-fuchsia-50 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={`mailto:${developerProfile.email}`}
                id="hero-email-link"
                className="p-2 rounded-lg text-slate-600 hover:text-[#C026D3] hover:bg-fuchsia-50 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Professional Portrait Visual */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Ambient backdrop glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C026D3]/30 via-[#EC4899]/20 to-[#8B5CF6]/30 rounded-3xl blur-2xl opacity-70 -z-10 animate-pulse"></div>

              {/* Main Photo Card */}
              <div className="relative bg-white p-3 rounded-3xl border border-pink-200/90 shadow-[0_12px_45px_rgba(217,70,239,0.18)] overflow-hidden">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-pink-50">
                  <img
                    src="/src/assets/images/Jew.jpg"
                    alt="Jewelle - Professional Full-Stack & AI Systems Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  />
                 
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-pink-200 shadow-lg flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-semibold text-slate-800">Open to Work</span>
                </div>

              </div>
            </div>
          </div>

        </div>

    
      </div>
    </section>
  );
};
