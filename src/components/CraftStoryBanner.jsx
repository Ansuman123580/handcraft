import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CraftStoryBanner({ onOurStory }) {
  const bannerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={bannerRef}
      className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center bg-[#1d2c3e] overflow-hidden text-center"
    >
      {/* Traditional Motif Background Pattern from Orway */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M40 0C26.7 0 16 10.7 16 24c0 5.9 2.1 11.3 5.6 15.4L40 64l18.4-24.6C61.9 35.3 64 29.9 64 24 64 10.7 53.3 0 40 0zm0 34c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z' opacity='.08'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div 
        ref={contentRef}
        className="relative z-10 container mx-auto max-w-6xl px-6 sm:px-8 py-16 sm:py-24 text-center"
      >
        <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-4 sm:mb-6 font-medium">
          Heritage & Legacy
        </p>
        
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-white mb-6 sm:mb-8 leading-tight max-w-3xl mx-auto">
          Preserving India's Living Craft Traditions
        </h2>
        
        <p className="font-lora text-base sm:text-lg text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto font-light">
          From the vibrant Kalamkari studios of Srikalahasti to the shadow puppet ateliers of Nimmalakunda, we work directly with artisan communities to bring their centuries-old craft traditions to the world.
        </p>

        <button
          onClick={onOurStory}
          className="inline-flex items-center gap-3 font-cormorant text-base sm:text-lg tracking-[0.2em] uppercase text-[#b89650] hover:text-white transition-colors group cursor-pointer"
        >
          <span className="border-b border-[#b89650]/50 pb-1 group-hover:border-white/50">
            Our Story
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
        </button>
      </div>
    </section>
  );
}
