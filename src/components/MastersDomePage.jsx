import React from 'react';
import { ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MASTERS_DOME_PRODUCTS } from '../data/content';

export default function MastersDomePage({ onSelectProduct, onStartConsultation }) {
  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-[#faf8f5] min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Hero Section of Masters Dome */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="h-px w-8 sm:w-12 bg-[#b89650]" />
            <p className="font-cormorant text-xs sm:text-sm tracking-[0.6em] uppercase text-[#b89650] font-medium">
              Ultra-Premium Heritage
            </p>
            <span className="h-px w-8 sm:w-12 bg-[#b89650]" />
          </div>

          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl text-[#332f2b] tracking-wide mb-6 leading-tight">
            Masters Dome
          </h1>
          
          <p className="font-lora text-base sm:text-lg text-[#6e6761] font-light leading-relaxed max-w-2xl mx-auto">
            One-of-a-kind artworks created by national award-winning artisans and multi-generational lineages. Every creation is a monumental testament to cultural devotion and historic technique.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#6e6761] font-cormorant uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#b89650]" />
              Physical NFC Provenance Seal
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#b89650]" />
              Signed Artisan Certificate
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b89650]" />
              Archival White-Glove Curation
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-20">
          {MASTERS_DOME_PRODUCTS.map((piece) => (
            <div
              key={piece.id}
              onClick={() => onSelectProduct(piece)}
              className="bg-white border border-[#e9e5dc] p-6 sm:p-8 flex flex-col justify-between group cursor-pointer hover:border-[#b89650] transition-all shadow-xs"
            >
              <div>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f2ec] mb-6 border border-[#e9e5dc]/60">
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#1d2c3e] text-[9px] uppercase tracking-[0.2em] text-[#b89650] px-2.5 py-1 border border-[#b89650]/40">
                    Masters Certified
                  </div>
                </div>

                <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b89650] mb-2 font-medium">
                  {piece.artist}
                </p>

                <h3 className="font-cinzel text-xl sm:text-2xl text-[#332f2b] group-hover:text-[#7e462d] transition-colors mb-3 leading-snug">
                  {piece.name}
                </h3>

                <p className="font-lora text-xs sm:text-sm text-[#6e6761] font-light leading-relaxed line-clamp-3 mb-6">
                  {piece.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e9e5dc] flex items-center justify-between">
                <span className="font-lora text-base font-semibold text-[#7e462d]">
                  {piece.priceFormatted}
                </span>

                <span className="inline-flex items-center gap-1.5 font-cormorant text-xs uppercase tracking-[0.2em] text-[#b89650] group-hover:text-[#7e462d] transition-colors">
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Private Curation Banner */}
        <div className="bg-[#1d2c3e] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto rounded-xs shadow-xl">
          <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-3 font-medium">
            Bespoke Commissions
          </p>
          <h2 className="font-cinzel text-2xl sm:text-4xl text-white mb-4">
            Private Atelier Commissions
          </h2>
          <p className="font-lora text-sm sm:text-base text-white/75 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Our curators collaborate with national master artisans to execute custom monumental installations for luxury residences, embassies, and private museums.
          </p>
          <button
            onClick={onStartConsultation}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#b89650] hover:bg-[#a68440] text-[#131d28] font-cormorant text-sm uppercase tracking-[0.25em] font-semibold transition-colors cursor-pointer"
          >
            <span>Request Private Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

