import React from 'react';
import { ArrowRight, MapPin, Award, Clock } from 'lucide-react';
import { ARTISANS } from '../data/content';

export default function ArtisansView({ onSelectArtisan, onExploreCollection }) {
  return (
    <div className="w-full pt-28 sm:pt-36 pb-32 px-6 lg:px-12 bg-[#0c0d0c] min-h-screen text-[#e6ded5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] block mb-3 font-medium">
            Generational Lineage
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#f4ede4] tracking-tight">
            The Artisans
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#b8ada0] mt-4 font-light">
            Behind every Mahua piece is a person, a skill and a generational story.
          </p>
        </div>

        {/* Artisans List with Deep Profile Cards */}
        <div className="space-y-20">
          {ARTISANS.map((artisan, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={artisan.id}
                className="bg-[#121412] border border-[#242825] p-6 sm:p-10 lg:p-14"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Portrait & Workshop Photo */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#0c0d0c] border border-[#242825]">
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="w-full h-full object-cover object-top filter brightness-[0.8] contrast-[1.05]"
                      />
                      <div className="absolute top-4 left-4 bg-[#0c0d0c]/85 px-3 py-1.5 border border-[#242825] flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#c5a880]">
                        <MapPin className="w-3 h-3 text-[#c5a880]" />
                        <span>{artisan.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-2 font-medium">
                        Master Practitioner
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#f4ede4]">
                        {artisan.name}
                      </h2>
                      <p className="font-serif italic text-lg text-[#c2b7ab] mt-1">
                        {artisan.craft}
                      </p>
                    </div>

                    {/* Generational Metrics */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#242825]">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-[#c5a880]" />
                        <div>
                          <span className="block text-xs uppercase tracking-wider text-[#8e857b]">Experience</span>
                          <span className="font-serif text-lg text-[#f4ede4]">{artisan.yearsOfPractice}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="w-4 h-4 text-[#c5a880]" />
                        <div>
                          <span className="block text-xs uppercase tracking-wider text-[#8e857b]">Speciality</span>
                          <span className="text-xs text-[#dcd3c7] leading-tight block">{artisan.speciality}</span>
                        </div>
                      </div>
                    </div>

                    {/* Story Narrative */}
                    <p className="text-sm text-[#b8ada0] font-light leading-relaxed">
                      {artisan.story}
                    </p>

                    {/* Direct Quote */}
                    <blockquote className="p-4 bg-[#161916] border-l-2 border-[#c5a880] font-serif italic text-base text-[#f4ede4]">
                      "{artisan.quote}"
                    </blockquote>

                    <div className="pt-2">
                      <button
                        onClick={() => onSelectArtisan(artisan)}
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-[#f4ede4] cursor-pointer py-2 border-b border-[#2e3630] hover:border-[#c5a880] transition-colors"
                      >
                        <span>Read Full Chronicle</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

