import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CommitmentSection({ onLearnMore }) {
  const sectionRef = useRef(null);
  const textColRef = useRef(null);
  const imgColRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Text column reveal
      gsap.fromTo(
        textColRef.current,
        { opacity: 0, x: -35 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Arch image column reveal
      gsap.fromTo(
        imgColRef.current,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center bg-[#1d2c3e] overflow-hidden"
    >
      {/* Background Geometric Plus/Cross Tile Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column */}
          <div ref={textColRef}>
            <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-4 sm:mb-6 font-medium">
              Commitment
            </p>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-white mb-6 sm:mb-8 leading-tight tracking-wide">
              Every Purchase Makes an Impact
            </h2>
            <p className="font-lora text-base sm:text-lg text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-xl font-light">
              We partner with artisan communities across India to offer fair trade opportunities. Every creation is handcrafted and directly sourced to support livelihoods. Every purchase is a step towards preserving our legacy for generations to come.
            </p>

            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-3 font-cormorant text-base sm:text-lg tracking-[0.2em] uppercase text-[#b89650] hover:text-white transition-colors group cursor-pointer"
            >
              <span className="border-b border-[#b89650]/50 pb-1 group-hover:border-white/50">
                Learn About Our Mission
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </button>
          </div>

          {/* Right Column: Exact Indian Heritage Arch (Jharokha) Frame */}
          <div ref={imgColRef} className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] sm:w-[400px] md:w-[440px]">
              <div
                className="relative overflow-hidden rounded-b-none"
                style={{
                  clipPath:
                    "polygon(0% 100%, 0% 25%, 5% 15%, 15% 6%, 30% 1%, 50% 0%, 70% 1%, 85% 6%, 95% 15%, 100% 25%, 100% 100%)"
                }}
              >
                {/* 3px Gold Gradient Border Outline */}
                <div className="p-[3px] bg-gradient-to-b from-[#b89650]/60 via-[#b89650]/30 to-[#b89650]/10">
                  <div
                    style={{
                      clipPath:
                        "polygon(0% 100%, 0% 25%, 5% 15%, 15% 6%, 30% 1%, 50% 0%, 70% 1%, 85% 6%, 95% 15%, 100% 25%, 100% 100%)"
                    }}
                  >
                    <img
                      src="/artisan-commitment.webp"
                      alt="Indian artisan hand-painting traditional craft design"
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 hover:scale-105"
                      width={440}
                      height={587}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
