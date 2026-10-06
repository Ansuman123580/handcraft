import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function AboutView({ onExploreCollection }) {
  return (
    <article className="w-full pt-28 sm:pt-36 pb-32 px-6 lg:px-12 bg-[#0c0d0c] min-h-screen text-[#e6ded5]">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] block mb-4 font-medium">
            Origin & Manifesto
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#f4ede4] tracking-tight leading-[1.05]">
            Rooted In<br />
            <span className="italic text-[#c5a880]">Madhya Pradesh</span>
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#b8ada0] mt-6 max-w-xl mx-auto font-light leading-relaxed">
            {BRAND_INFO.philosophy}
          </p>
        </div>

        {/* Hero Documentary Image */}
        <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#161817] border border-[#242825] mb-20">
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2200&q=85"
            alt="Handcrafting in Madhya Pradesh"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
          />
          <div className="absolute bottom-4 left-6 text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
            The Heart of India • Living Artisan Workshop
          </div>
        </div>

        {/* Narrative Section 1: Mahua Crafts & The Landscape */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-16 items-start pb-20 border-b border-[#242825]">
          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8e857b] block mb-2 font-medium">
              Chapter I
            </span>
            <h2 className="font-serif text-3xl font-light text-[#f4ede4] leading-snug">
              The Land of Mahua
            </h2>
          </div>

          <div className="md:col-span-8 space-y-5 text-sm sm:text-base text-[#b8ada0] font-light leading-relaxed">
            <p>
              In the heartlands of Central India, the sacred Mahua tree stands as an eternal symbol of endurance, generosity, and grounded harmony with the forest. It blossoms quietly in the crisp mornings of spring, nourishing communities and anchoring oral histories.
            </p>
            <p>
              Mahua Crafts was founded with this very reverence: to create an intentional sanctuary for the authentic, handcrafted traditions of Madhya Pradesh. We do not manufacture; we curate, commission, and nurture work that exists outside the disposable velocity of the modern machine.
            </p>
          </div>
        </div>

        {/* Narrative Section 2: Local Artisans & Traditional Techniques */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-16 items-start py-20 border-b border-[#242825]">
          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8e857b] block mb-2 font-medium">
              Chapter II
            </span>
            <h2 className="font-serif text-3xl font-light text-[#f4ede4] leading-snug">
              Generations in Every Stitch
            </h2>
          </div>

          <div className="md:col-span-8 space-y-5 text-sm sm:text-base text-[#b8ada0] font-light leading-relaxed">
            <p>
              From the historic alleys of Shahjahanabad in Bhopal where master women artisans execute intricate Zari couching, to the rhythm of wooden handlooms along the sacred banks of the Narmada in Maheshwar, our pieces are born in real homes and community cooperatives.
            </p>
            <p>
              Techniques such as cire-perdue bronze casting in Tikamgarh, pit-loom tussar weaving, and ancestral wooden block carving have been preserved not through textbooks, but through the muscular memory and patient hands of families who have practiced for generations.
            </p>
          </div>
        </div>

        {/* Full-bleed Photo Inset */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#161817] border border-[#242825]">
              <img
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85"
                alt="Artisan stretching canvas on wooden adda"
                className="w-full h-full object-cover filter brightness-[0.78]"
              />
              <span className="absolute bottom-3 left-4 text-[9px] uppercase tracking-[0.2em] text-[#c5a880]">
                Traditional Wooden Adda Frame
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#161817] border border-[#242825]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Lost wax bronze metallurgy"
                className="w-full h-full object-cover filter brightness-[0.78]"
              />
              <span className="absolute bottom-3 left-4 text-[9px] uppercase tracking-[0.2em] text-[#c5a880]">
                Lost-Wax Bronze & Patina
              </span>
            </div>
          </div>
        </div>

        {/* Narrative Section 3: Contemporary Appreciation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-16 items-start py-20 border-b border-[#242825]">
          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8e857b] block mb-2 font-medium">
              Chapter III
            </span>
            <h2 className="font-serif text-3xl font-light text-[#f4ede4] leading-snug">
              Preserving for Tomorrow
            </h2>
          </div>

          <div className="md:col-span-8 space-y-5 text-sm sm:text-base text-[#b8ada0] font-light leading-relaxed">
            <p>
              True preservation cannot occur through nostalgia alone. For an ancestral craft to survive, it must be valued, respected, and appreciated within contemporary interiors and discerning wardrobes worldwide.
            </p>
            <p>
              By eliminating exploitative middlemen and establishing transparent remuneration, Mahua Crafts ensures that master artisans and their apprentices can sustain their dignity, pride, and generational craft with economic freedom.
            </p>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-20 p-8 sm:p-12 bg-[#121412] border border-[#242825] text-center flex flex-col items-center">
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#f4ede4] mb-3">
            Experience the Collection
          </h3>
          <p className="text-xs sm:text-sm text-[#8e857b] max-w-md mb-8 font-light">
            Each piece is individually documented and prepared with personalized artisan provenance cards.
          </p>
          <button
            onClick={onExploreCollection}
            className="inline-flex items-center space-x-3 px-8 py-3.5 border border-[#f4ede4] bg-[#f4ede4] text-[#0c0d0c] hover:bg-[#e6ded5] transition-all text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
          >
            <span>Explore Handcrafted Pieces</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </article>
  );
}

