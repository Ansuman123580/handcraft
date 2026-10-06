import React from 'react';
import { ArrowRight, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import { ORWAY_INFO } from '../data/content';

export default function AboutPage({ onExploreCollection }) {
  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-[#faf8f5] min-h-screen">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-3 font-medium">
            Origin & Mission
          </p>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl text-[#332f2b] tracking-wide mb-6 leading-tight">
            Our Craft &amp; Purpose
          </h1>
          <p className="font-lora text-base sm:text-lg text-[#6e6761] font-light leading-relaxed">
            Orway was founded to bridge the ancient living craft cultures of India with contemporary luxury collectors and forward-thinking enterprises worldwide.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative aspect-[16/9] overflow-hidden mb-16 border border-[#e9e5dc] shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2000&q=85"
            alt="Handcrafting in India"
            className="w-full h-full object-cover filter brightness-[0.9]"
          />
        </div>

        {/* Story Paragraphs */}
        <div className="space-y-12 mb-20 text-[#332f2b]">
          <div>
            <h2 className="font-cinzel text-2xl sm:text-3xl text-[#332f2b] mb-4">
              Preserving Living Craft Traditions
            </h2>
            <p className="font-lora text-sm sm:text-base text-[#6e6761] font-light leading-relaxed mb-4">
              India possesses the deepest unbroken lineage of handcrafted traditions on earth. However, rapid industrial mass-production threatens the survival of rare generational skills like Tholu Bommalata shadow leather perforating and Srikalahasti freehand kalam drawing.
            </p>
            <p className="font-lora text-sm sm:text-base text-[#6e6761] font-light leading-relaxed">
              At Orway, we operate as a curatorial house. We work directly with master artisan families, eliminating predatory layers of brokers, guaranteeing dignified compensation, and collaborating to evolve ancient motifs into heirloom objects suited for modern spaces.
            </p>
          </div>

          {/* 3 Core Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-[#e9e5dc]">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#f3f0e8] flex items-center justify-center text-[#7e462d] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-lg text-[#332f2b]">100% Fair Trade</h3>
              <p className="font-lora text-xs sm:text-sm text-[#6e6761] font-light leading-relaxed">
                Direct upfront payments ensure financial dignity and pride of craft for master makers and apprentices.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#f3f0e8] flex items-center justify-center text-[#7e462d] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-lg text-[#332f2b]">Guaranteed Provenance</h3>
              <p className="font-lora text-xs sm:text-sm text-[#6e6761] font-light leading-relaxed">
                Each creation includes physical NFC authentication and verifiable provenance documented in regional studios.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#f3f0e8] flex items-center justify-center text-[#7e462d] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-lg text-[#332f2b]">Natural &amp; Pure</h3>
              <p className="font-lora text-xs sm:text-sm text-[#6e6761] font-light leading-relaxed">
                Rendered with organic vegetable pigments, handspun wild tussar silk, and natural teakwood.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onExploreCollection}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#7e462d] hover:bg-[#683924] text-white font-cormorant text-sm uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
          >
            <span>Explore The Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

