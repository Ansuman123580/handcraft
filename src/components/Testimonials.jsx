import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 7s interval matching Orway's 7e3
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 bg-[#faf8f5] border-t border-[#e9e5dc]">
      <div className="container mx-auto max-w-4xl text-center">
        
        {/* Header */}
        <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#6e6761] mb-3 font-medium">
          Voices of Trust
        </p>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#332f2b] mb-12 sm:mb-16">
          What They Say
        </h2>

        {/* Quote Presentation */}
        <div className="relative min-h-[220px] sm:min-h-[190px] flex flex-col items-center justify-center">
          <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-[#b89650]/40 mb-6 mx-auto stroke-[1.2]" />
          
          <blockquote className="font-lora text-base sm:text-xl lg:text-2xl text-[#332f2b]/90 italic leading-relaxed mb-6 sm:mb-8 max-w-3xl font-light">
            "{current.testimonial_text}"
          </blockquote>

          <div>
            <h4 className="font-cinzel text-base sm:text-lg text-[#332f2b] font-medium tracking-wide">
              {current.client_name}
            </h4>
            <p className="font-cormorant text-xs sm:text-sm text-[#7e462d] tracking-[0.15em] uppercase mt-1">
              {current.client_title} • <span className="text-[#6e6761]">{current.company_name}</span>
            </p>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-[#b89650]' : 'w-2 bg-[#d6cfc4] hover:bg-[#b89650]/60'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

