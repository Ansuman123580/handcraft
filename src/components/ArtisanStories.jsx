import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ARTISANS } from '../data/content';

export default function ArtisanStories({ onOpenStory }) {
  return (
    <section className="w-full py-24 sm:py-32 px-6 lg:px-12 bg-[#0e100e] border-t border-[#242825]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-3 font-medium">
            Portraits of Dedication
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] leading-tight">
            The Hands<br />
            <span className="italic text-[#dcd3c7]">Behind Mahua</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8e857b] font-light mt-4">
            Generations of living memory, quiet patience, and unmatched mastery from the heart of India.
          </p>
        </div>

        {/* 3 Artisan Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {ARTISANS.map((artisan) => (
            <article
              key={artisan.id}
              className="bg-[#121412] border border-[#242825] p-6 flex flex-col justify-between group hover:border-[#384039] transition-all duration-300"
            >
              <div>
                {/* Large Portrait Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0c0d0c] mb-6 border border-[#242825]">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover object-top filter brightness-[0.8] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0c0d0c]/80 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#c5a880] border border-[#242825]">
                    {artisan.yearsOfPractice}
                  </div>
                </div>

                {/* Artisan & Craft Title */}
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#c5a880] block mb-1">
                  {artisan.location}
                </span>

                <h3 className="font-serif text-2xl font-light text-[#f4ede4] mb-1">
                  {artisan.name}
                </h3>

                <p className="font-serif italic text-sm text-[#b8ada0] mb-4">
                  {artisan.craft}
                </p>

                {/* Short Story */}
                <p className="text-xs sm:text-sm text-[#8e857b] font-light leading-relaxed line-clamp-4">
                  {artisan.story}
                </p>
              </div>

              {/* Read Story CTA */}
              <div className="pt-6 mt-6 border-t border-[#242825]">
                <button
                  onClick={() => onOpenStory(artisan)}
                  className="group inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#f4ede4] hover:text-[#c5a880] transition-colors cursor-pointer py-1"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300 text-[#c5a880]" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

