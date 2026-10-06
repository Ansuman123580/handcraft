import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function DidYouKnow({ onLearnMore }) {
  return (
    <section className="w-full py-20 sm:py-28 px-6 lg:px-12 bg-[#0c0d0c] border-t border-[#242825]">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-[#121412] border border-[#242825] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left: Editorial Information */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-medium">
                  Cultural Legacy
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#f4ede4] leading-tight">
                Did You Know?
              </h2>

              <div className="py-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#9a9186] block mb-2">
                  Highlight
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl italic text-[#f4ede4] font-light">
                  Bhopali Batua & Zari Craft
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#b8ada0] font-light leading-relaxed max-w-xl">
                A craft rooted in Bhopal, Madhya Pradesh, carrying generations of traditional skill and cultural identity. Originally commissioned by the royal court of Bhopal to accompany ceremonial regalia, the Batua is renowned for its signature multi-chambered construction and delicate surface ornamentation.
              </p>

              <div className="pt-4">
                <button
                  onClick={onLearnMore}
                  className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-[#f4ede4] hover:text-[#c5a880] transition-colors cursor-pointer py-1 border-b border-[#2e3630] hover:border-[#c5a880]"
                >
                  <span>Read The Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right: Editorial Photo / Detail Crop */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden bg-[#0c0d0c] border border-[#242825] p-3 sm:p-4">
                <div className="aspect-[4/3] sm:aspect-square overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=85"
                    alt="Close-up macro detail of authentic hand-couched zari gold wire work on dark velvet"
                    className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.08]"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#8e857b]">
                  <span>Macro Archive: Tilla Wire</span>
                  <span>Hand Couching</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

