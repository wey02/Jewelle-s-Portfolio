import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'Full-Time Opportunity',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide a short message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${developerProfile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          inquiryType: formData.inquiryType,
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _subject: `[Portfolio] ${formData.subject.trim()}`,
          _template: 'table',
          _honey: ''
        })
      });

      if (!response.ok) {
        throw new Error('The message service returned an error.');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        inquiryType: 'Full-Time Opportunity',
        message: ''
      });
    } catch {
      setSubmitError('Your message could not be sent. Please try again or use the direct email link.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/60 border-t border-pink-100 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-[#A21CAF] text-xs font-semibold uppercase tracking-wider font-mono border border-pink-200">
            <MessageSquare className="w-3.5 h-3.5 text-[#D946EF]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C026D3] via-[#D946EF] to-[#EC4899]">High-Impact</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
           Open to engineering roles, AI projects, and opportunities to build something meaningful. Feel free to reach out.
          </p>
        </div>

        {/* Main Grid: Left info & Right form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels & Connect */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="bg-white rounded-2xl border border-pink-200/80 p-6 shadow-xs hover:border-pink-300 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#A21CAF] border border-pink-200 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#D946EF]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Direct Email</span>
                  <div className="text-sm sm:text-base font-bold text-slate-900 font-mono">
                    {developerProfile.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-pink-100">
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-pink-50 hover:bg-pink-100/70 border border-pink-200 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-pink-600" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${developerProfile.email}`}
                  id="contact-mailto-link"
                  className="p-2 rounded-xl text-slate-600 hover:text-[#A21CAF] hover:bg-pink-50 border border-pink-200 transition-colors cursor-pointer"
                  title="Open Default Email Client"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Details & Response Time */}
            <div className="bg-white rounded-2xl border border-pink-200/80 p-6 space-y-4 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                Availability
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D946EF] shrink-0" />
                  <span>Typically responds within <strong className="font-semibold text-slate-900">24 hours</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>{developerProfile.location}</span>
                </div>
                
              </div>
            </div>

            {/* Social Connect Links */}
            <div className="bg-white rounded-2xl border border-pink-200/80 p-6 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-4">
                Professional Networks
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/example-username"
                  target="_blank"
                  rel="noreferrer"
                  id="connect-github-btn"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 hover:bg-pink-50/60 border border-slate-200 hover:border-pink-300 transition-all text-xs font-semibold text-slate-800"
                >
                  <Github className="w-4 h-4 text-slate-900" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/jewelle-joy-vergara-a97a4b339"
                  target="_blank"
                  rel="noreferrer"
                  id="connect-linkedin-btn"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 hover:bg-pink-50/60 border border-slate-200 hover:border-pink-300 transition-all text-xs font-semibold text-slate-800"
                >
                  <Linkedin className="w-4 h-4 text-[#D946EF]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-pink-200/80 p-6 sm:p-8 shadow-xs">
              
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 mx-auto rounded-full bg-pink-50 text-[#D946EF] border border-pink-200 flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your message was sent directly to {developerProfile.email}. I will review it and reply within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      id="contact-send-another-btn"
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-pink-50 hover:bg-pink-100 border border-pink-200 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Send a Direct Message</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill in the details below to initiate a conversation.
                    </p>
                  </div>

                  {/* Inquiry Type Radio / Pill Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono uppercase tracking-wider">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {['Full-Time Opportunity', 'Project Inquiry', 'Advisory / Other'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: type })}
                          id={`inquiry-type-${type.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                            formData.inquiryType === type
                              ? 'bg-gradient-to-r from-[#C026D3] to-[#EC4899] text-white shadow-sm border-transparent'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-pink-50 hover:border-pink-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/70 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-hidden transition-all ${
                          errors.name
                            ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30'
                            : 'border-slate-200 focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/70 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-hidden transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30'
                            : 'border-slate-200 focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Senior Full-Stack Engineer role at TechCorp"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/70 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-hidden transition-all ${
                        errors.subject
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30'
                          : 'border-slate-200 focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the position, scope of work, technical requirements, or schedule a quick chat..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/70 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-hidden transition-all ${
                        errors.message
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30'
                          : 'border-slate-200 focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF]'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-xs text-rose-600 flex items-center gap-1.5" role="alert">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{submitError}</span>
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-btn"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#C026D3] to-[#EC4899] hover:from-[#D946EF] hover:to-[#F43F5E] transition-all shadow-md shadow-pink-500/20 active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
