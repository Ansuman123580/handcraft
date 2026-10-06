import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERITAGE_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=2000&q=85",
    caption: "Textiles and hand-embroidered batuas arranged in natural morning light",
    region: "Bhopal & Maheshwar Collection"
  },
  {
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2000&q=85",
    caption: "The intersection of silk filament, metal thread, and generational patience",
    region: "Zari & Silk Archive"
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85",
    caption: "Tactile bronze vessels and hand-spun khadi textiles for contemporary sanctuaries",
    region: "Bundelkhand Bronze & Earth"
  }
];

export default function CraftHeritage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? HERITAGE_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === HERITAGE_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-24 sm:py-32 px-6 lg:px-12 bg-[#0e100e] border-t border-[#242825]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-3 font-medium">
              Section 05 • Heritage Archive
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] leading-tight">
              Impressions<br />
              <span className="italic text-[#dcd3c7]">of Heritage</span>
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#c5a880] mt-2">
              Rooted in Craft
            </p>
          </div>

          {/* Editorial Text Block & Subtle Arrow Navigation */}
          <div className="mt-8 md:mt-0 max-w-md flex flex-col md:items-end text-left md:text-right">
            <p className="text-sm sm:text-base text-[#b8ada0] font-light leading-relaxed mb-6">
              From the hands of local artisans to homes around the world, Mahua Crafts celebrates the living traditions of Madhya Pradesh.
            </p>

            <div className="flex items-center space-x-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8e857b] mr-2">
                0{activeSlide + 1} / 0{HERITAGE_SLIDES.length}
              </span>
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-[#2e3630] hover:border-[#c5a880] hover:text-[#f4ede4] text-[#8e857b] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Heritage Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-[#2e3630] hover:border-[#c5a880] hover:text-[#f4ede4] text-[#8e857b] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Heritage Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Large Collection Image Showing Multiple Mahua Products Together */}
        <div className="relative w-full overflow-hidden bg-[#161817] border border-[#242825]">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <img
              src={HERITAGE_SLIDES[activeSlide].image}
              alt="Impressions of Heritage - Handcrafted Mahua collection ensemble"
              className="w-full h-full object-cover object-center filter brightness-[0.74] contrast-[1.06]"
            />
            {/* Caption Pill */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-auto sm:max-w-xl bg-[#0c0d0c]/80 backdrop-blur-md p-4 sm:px-6 sm:py-4 border border-[#242825]">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#c5a880] block mb-1">
                {HERITAGE_SLIDES[activeSlide].region}
              </span>
              <p className="font-serif italic text-sm sm:text-base text-[#f4ede4]">
                "{HERITAGE_SLIDES[activeSlide].caption}"
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

