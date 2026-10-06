import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function TheArtisan({ onMeetArtisans }) {
  return (
    <section className="w-full py-20 sm:py-28 px-6 lg:px-12 bg-[#101210] border-t border-[#242825]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Dominant Large Artisan-Working Photograph */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative overflow-hidden bg-[#161817] border border-[#242825] group">
              <div className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=85"
                  alt="Traditional handloom artisan weaving threads with precision"
                  className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.04] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Artisan Detail Label Overlay */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#0c0d0c]/80 backdrop-blur-md px-4 py-2 border border-[#242825]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] block font-medium">
                  Artisan Collective
                </span>
                <span className="font-serif italic text-sm text-[#f4ede4]">
                  Kailash Ansari, Maheshwar Loom
                </span>
              </div>
            </div>
          </div>

          {/* Text Story & Heading */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-medium">
              Section 03 • Living Hands
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] leading-[1.02]">
              Made By Hands.<br />
              <span className="italic text-[#dcd3c7]">Rooted In Heritage.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#b8ada0] font-light leading-relaxed">
              <p>
                Behind every Mahua piece is a person, a skill and a story.
              </p>
              <p className="text-[#8e857b]">
                Our artisans carry forward techniques passed through generations, transforming simple materials into objects with character, detail and cultural meaning.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onMeetArtisans}
                className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.22em] text-[#f4ede4] hover:text-[#c5a880] transition-colors cursor-pointer py-2 border-b border-[#c5a880]/50 hover:border-[#c5a880]"
              >
                <span>Meet The Artisans</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>

            {/* Subtle artisan metric */}
            <div className="pt-8 border-t border-[#242825] grid grid-cols-2 gap-6 text-left">
              <div>
                <span className="font-serif text-3xl font-light text-[#f4ede4]">60+</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8e857b] mt-1">Local Women & Master Weavers</p>
              </div>
              <div>
                <span className="font-serif text-3xl font-light text-[#f4ede4]">100%</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8e857b] mt-1">Handmade in Madhya Pradesh</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

