import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, Send, Copy, Check } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-pink-100 shadow-[0_4px_20px_-4px_rgba(217,70,239,0.06)]'
          : 'bg-white/60 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <a
            href="#about"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C026D3] via-[#EC4899] to-[#8B5CF6] text-white flex items-center justify-center font-bold font-mono text-lg shadow-[0_0_15px_rgba(217,70,239,0.35)] group-hover:scale-105 transition-all">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-[#C026D3] transition-colors">
                  {developerProfile.name}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#A21CAF] bg-[#FDF4FF] border border-[#F0ABFC]/70 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-[#C026D3] hover:bg-[#FDF2F8]/70 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              id="navbar-contact-cta"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#C026D3] via-[#EC4899] to-[#8B5CF6] hover:from-[#A21CAF] hover:to-[#7C3AED] transition-all shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:shadow-[0_0_20px_rgba(217,70,239,0.45)] active:scale-98"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-700 hover:text-[#C026D3] hover:bg-fuchsia-50 focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-white/95 backdrop-blur-md border-b border-pink-100 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex items-center justify-between pb-3 border-b border-pink-50 mb-2">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider font-mono">Navigation</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF] animate-pulse"></span>
              Available for work
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'text-[#A21CAF] bg-[#FDF4FF] border border-[#F0ABFC]/70 font-semibold'
                      : 'text-slate-700 hover:text-[#C026D3] hover:bg-[#FDF2F8]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#D946EF]" />}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-pink-100 flex flex-col gap-2">
            <a
              href="#contact"
              id="mobile-contact-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#C026D3] to-[#EC4899] shadow-[0_0_15px_rgba(217,70,239,0.3)]"
            >
              Get In Touch
            </a>
            <button
              onClick={() => {
                handleCopyEmail();
              }}
              id="mobile-copy-email-btn"
              className="w-full text-center py-2 px-4 rounded-xl text-xs font-medium text-slate-700 bg-white hover:bg-fuchsia-50 border border-pink-200"
            >
              {copiedEmail ? 'Email Copied!' : `Copy: ${developerProfile.email}`}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
