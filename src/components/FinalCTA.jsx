import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ onExplore, onStory }) {
  return (
    <section className="relative w-full py-32 sm:py-44 px-6 lg:px-12 bg-[#080908] overflow-hidden border-t border-[#242825]">
      {/* Subtle atmospheric background glow & texture */}
      <div className="absolute inset-0 bg-radial from-[#1e2720]/25 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Subtle Brand Motif Accent */}
        <div className="mb-8 flex items-center justify-center space-x-4">
          <span className="w-8 h-[1px] bg-[#c5a880]/50" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] font-medium">
            Mahua Crafts • Heirloom Edition
          </span>
          <span className="w-8 h-[1px] bg-[#c5a880]/50" />
        </div>

        {/* Dramatic Large Serif Heading */}
        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#f4ede4] tracking-tight leading-[0.95] uppercase">
          Bring A Piece<br />
          <span className="italic font-normal lowercase tracking-normal text-[#eae1d6]">
            of
          </span>{' '}
          Madhya Pradesh<br />
          <span className="italic font-light text-[#c5a880]">Home.</span>
        </h2>

        {/* Italic Supporting Line */}
        <p className="font-serif italic text-lg sm:text-2xl text-[#b8ada0] mt-8 font-light max-w-lg leading-relaxed">
          Crafted by local hands.<br />
          Rooted in tradition.
        </p>

        {/* Two Premium Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 w-full max-w-md">
          <button
            onClick={onExplore}
            className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 border border-[#f4ede4] bg-[#f4ede4] text-[#0c0d0c] hover:bg-[#e6ded5] transition-all duration-300 text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onStory}
            className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 border border-[#e6ded5]/30 hover:border-[#f4ede4] bg-transparent text-[#f4ede4] transition-all duration-300 text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
          >
            <span>Discover Our Story</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#c5a880]" />
          </button>
        </div>

        {/* Authentic Origin Note */}
        <p className="mt-16 text-[10px] uppercase tracking-[0.28em] text-[#6e685f]">
          Direct from artisan clusters across Bhopal • Maheshwar • Chanderi • Tikamgarh
        </p>

      </div>
    </section>
  );
}

