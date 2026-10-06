import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Check } from 'lucide-react';
import { ORWAY_INFO } from '../data/content';

export default function Footer({ onNavClick, onOpenPolicy }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="border-t border-[#e9e5dc] bg-[#faf8f5] py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* 4 Columns Grid matching Orway */}
        <div className="grid gap-10 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Col 1: Brand Wordmark & Mission */}
          <div className="text-center sm:text-left">
            <button 
              onClick={() => onNavClick('home')}
              className="text-left cursor-pointer group mb-3 sm:mb-4 block"
            >
              <span className="font-cinzel text-2xl sm:text-3xl tracking-[0.2em] text-[#332f2b] font-medium group-hover:text-[#7e462d] transition-colors block">
                ORWAY
              </span>
              <span className="font-cormorant text-[10px] tracking-[0.4em] uppercase text-[#b89650] block">
                Luxury • Heritage
              </span>
            </button>
            <p className="text-xs sm:text-sm text-[#6e6761] leading-relaxed font-light">
              Each piece supports Indian artisans and their living craft traditions.
            </p>
          </div>

          {/* Col 2: Contact Info */}
          <div className="text-center sm:text-left">
            <p className="mb-3 sm:mb-4 font-semibold text-[#332f2b] text-sm sm:text-base font-cinzel">
              Contact
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#6e6761]">
              <div className="flex items-center justify-center sm:justify-start space-x-2.5">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#7e462d]" />
                <a href={`mailto:${ORWAY_INFO.email}`} className="hover:text-[#332f2b] transition-colors">
                  {ORWAY_INFO.email}
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2.5">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#7e462d]" />
                <a 
                  href={`https://wa.me/917558959714?text=Hello%20Orway%20Concierge`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#332f2b] transition-colors"
                >
                  7558959714
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Follow Us */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <p className="mb-3 sm:mb-4 font-semibold text-[#332f2b] text-sm sm:text-base font-cinzel">
              Follow Us
            </p>
            <div className="flex space-x-3 justify-center sm:justify-start">
              <a
                href={ORWAY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e6761] transition-colors hover:text-[#7e462d] p-2 bg-[#f3f0e8] rounded-full"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e6761] transition-colors hover:text-[#7e462d] p-2 bg-[#f3f0e8] rounded-full"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e6761] transition-colors hover:text-[#7e462d] p-2 bg-[#f3f0e8] rounded-full"
                aria-label="Twitter / X"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 4: Stay Updated Newsletter */}
          <div className="text-center sm:text-left">
            <p className="mb-2 font-semibold text-[#332f2b] text-sm sm:text-base font-cinzel">
              Stay Updated
            </p>
            <p className="text-xs text-[#6e6761] mb-3 font-light">
              Get exclusive offers and artisan stories.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#e9e5dc] px-3 py-2 text-xs text-[#332f2b] placeholder-[#a69f97] focus:outline-none focus:border-[#7e462d]"
                />
                <button
                  type="submit"
                  className="bg-[#7e462d] text-white px-3.5 py-2 text-xs hover:bg-[#683924] transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#7e462d] font-cormorant tracking-wide">
                  Thank you for subscribing to Orway chronicles.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar matching Orway */}
        <div className="mt-10 sm:mt-12 border-t border-[#e9e5dc] pt-6 sm:pt-8 text-center text-xs text-[#6e6761]">
          <p className="mb-3 font-light">
            © {new Date().getFullYear()} Orway. Luxury • Heritage • Handcrafted India
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] uppercase tracking-wider text-[#6e6761]">
            <button 
              onClick={() => onOpenPolicy('privacy')} 
              className="hover:text-[#7e462d] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#e9e5dc]">•</span>
            <button 
              onClick={() => onOpenPolicy('terms')} 
              className="hover:text-[#7e462d] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-[#e9e5dc]">•</span>
            <button 
              onClick={() => onOpenPolicy('shipping')} 
              className="hover:text-[#7e462d] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Shipping Policy
            </button>
            <span className="text-[#e9e5dc]">•</span>
            <button 
              onClick={() => onOpenPolicy('refund')} 
              className="hover:text-[#7e462d] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
