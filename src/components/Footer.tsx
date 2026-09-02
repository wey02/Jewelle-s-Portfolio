import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white text-slate-600 border-t border-pink-200 text-xs sm:text-sm relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-pink-100">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#C026D3] to-[#EC4899] text-white flex items-center justify-center font-mono font-bold shadow-md shadow-pink-500/20">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-base tracking-tight">
                {developerProfile.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              Full-Stack Developer specializing in scalable backend systems, modern web user interfaces, and practical AI integrations.
            </p>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-[#A21CAF] uppercase tracking-wider font-mono">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  id={`footer-nav-${item.name.toLowerCase()}`}
                  className="text-slate-600 hover:text-[#A21CAF] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#A21CAF] uppercase tracking-wider font-mono md:text-right">
                Connect
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/wey02"
                  target="_blank"
                  rel="noreferrer"
                  id="footer-github-link"
                  className="p-2 rounded-xl bg-pink-50 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#C026D3] hover:to-[#EC4899] border border-pink-200 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jewelle-joy-vergara-a97a4b339"
                  target="_blank"
                  rel="noreferrer"
                  id="footer-linkedin-link"
                  className="p-2 rounded-xl bg-pink-50 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#C026D3] hover:to-[#EC4899] border border-pink-200 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href={`mailto:${developerProfile.email}`}
                  id="footer-email-link"
                  className="p-2 rounded-xl bg-pink-50 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#C026D3] hover:to-[#EC4899] border border-pink-200 transition-all"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-slate-700 bg-pink-50 hover:bg-pink-100 hover:text-[#A21CAF] border border-pink-200 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D946EF]" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            © {new Date().getFullYear()} {developerProfile.name}.
          </p>
         
        </div>

      </div>
    </footer>
  );
};
