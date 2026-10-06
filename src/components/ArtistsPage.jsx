import React from 'react';
import { MapPin, Award, ArrowRight } from 'lucide-react';
import { FEATURED_ARTISTS } from '../data/content';

export default function ArtistsPage({ onSelectArtist, onExploreWorks }) {
  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-[#faf8f5] min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-3 font-medium">
            Generational Lineage
          </p>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl text-[#332f2b] tracking-wide mb-4 leading-tight">
            The Artists
          </h1>
          <p className="font-lora text-sm sm:text-base text-[#6e6761] font-light leading-relaxed">
            Behind every Orway creation is a revered artisan, an ancestral studio, and decades of mastery passed down from father to son, mother to daughter.
          </p>
        </div>

        {/* Artists Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
          {FEATURED_ARTISTS.map((artist) => (
            <div 
              key={artist.id}
              className="bg-white border border-[#e9e5dc] p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-xs"
            >
              <div className="aspect-square w-32 sm:w-40 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#e9e5dc] shadow-md">
                <img
                  src={artist.photo_url}
                  alt={artist.name}
                  className="w-full h-full object-cover filter brightness-[0.95]"
                />
              </div>

              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs text-[#b89650] font-cormorant uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{artist.craft_origin}</span>
                </div>

                <h3 className="font-cinzel text-2xl text-[#332f2b]">
                  {artist.name}
                </h3>

                <p className="font-cormorant text-sm text-[#7e462d] font-semibold tracking-wider uppercase">
                  {artist.generational_legacy}
                </p>

                <p className="font-lora text-xs sm:text-sm text-[#6e6761] font-light leading-relaxed pt-2">
                  {artist.bio}
                </p>

                <div className="pt-4">
                  <button
                    onClick={onExploreWorks}
                    className="inline-flex items-center gap-2 font-cormorant text-xs sm:text-sm tracking-[0.2em] uppercase text-[#7e462d] hover:underline cursor-pointer"
                  >
                    <span>View Artisan Pieces</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

