import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Cinematic Dark Editorial Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2400&q=90"
          alt="Master artisan working on handcrafted Mahua textile piece"
          className="w-full h-full object-cover object-center filter brightness-[0.46] contrast-[1.08] saturate-[0.88]"
        />
        {/* Subtle vignette and bottom gradient to blend seamlessly into dark canvas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0c] via-[#0c0d0c]/30 to-[#0c0d0c]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c0d0c]/30 to-[#0c0d0c]/85" />
      </div>

      {/* Hero Content - Centered Editorial Statement */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Minimal Editorial Badge */}
        <div className="mb-6 flex items-center space-x-3">
          <span className="w-6 h-[1px] bg-[#c5a880]/60" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium">
            Handmade by Local Artisans
          </span>
          <span className="w-6 h-[1px] bg-[#c5a880]/60" />
        </div>

        {/* Large Elegant Serif Heading */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#f4ede4] tracking-tight leading-[0.92] uppercase">
          CRAFTED<br />
          <span className="italic font-normal lowercase tracking-normal text-[#eae1d6]">
            by
          </span>{' '}
          HAND
        </h1>

        {/* Supporting Italic Line */}
        <p className="font-serif italic text-lg sm:text-2xl text-[#dcd3c7] mt-6 sm:mt-8 font-light max-w-xl">
          Rooted in the soul of Madhya Pradesh.
        </p>

        {/* Editorial CTA Button */}
        <div className="mt-10 sm:mt-12">
          <button
            onClick={onExplore}
            className="group inline-flex items-center space-x-3 px-8 py-3.5 border border-[#e6ded5]/35 hover:border-[#f4ede4] bg-[#0c0d0c]/40 hover:bg-[#161817] text-[#f4ede4] transition-all duration-300 text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300 text-[#c5a880]" />
          </button>
        </div>

        {/* Bottom Location Tag */}
        <div className="mt-16 sm:mt-20 flex items-center space-x-4 text-[10px] uppercase tracking-[0.28em] text-[#8b8379]">
          <span>Central India</span>
          <span>•</span>
          <span>Bhopal & Bundelkhand</span>
          <span>•</span>
          <span>Living Traditions</span>
        </div>
      </div>
    </section>
  );
}

