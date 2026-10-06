import React from 'react';

export default function PersonalTouch() {
  return (
    <section className="w-full py-24 sm:py-32 px-6 lg:px-12 bg-[#0c0d0c]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Split: Left Large Heading, Right Editorial Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 lg:pb-20 border-b border-[#242825]">
          
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#c5a880] block mb-4 font-medium">
              The Philosophy
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] leading-[1.05]">
              A Personal Touch<br />
              <span className="italic font-light text-[#dcd3c7]">In Every Piece</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-2 lg:pt-8 text-sm sm:text-base text-[#b8ada0] font-light leading-relaxed">
            <p>
              Every Mahua creation carries the character of the hands that made it — shaped by traditional techniques, thoughtful craftsmanship and the cultural richness of Madhya Pradesh.
            </p>
            <p className="text-[#8e857b]">
              We work with local artisans to preserve traditional crafts while creating pieces that feel meaningful, contemporary and timeless.
            </p>
            
            <div className="pt-2 flex items-center space-x-6 text-[11px] uppercase tracking-[0.2em] text-[#c5a880]">
              <span>Documentary Archive 01</span>
              <span className="w-8 h-[1px] bg-[#3a3f3a]" />
              <span className="text-[#8e857b]">Bhopal Old Quarter</span>
            </div>
          </div>
        </div>

        {/* Below: Dominant Authentic Documentary Artisan Image */}
        <div className="mt-16 relative w-full overflow-hidden bg-[#161817] border border-[#242825]">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <img
              src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=2000&q=85"
              alt="Artisan hands shaping delicate handcrafted work in Madhya Pradesh"
              className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
            />
            {/* Subtle bottom caption */}
            <div className="absolute bottom-4 left-6 right-6 sm:bottom-6 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#e6ded5] bg-[#0c0d0c]/70 backdrop-blur-sm p-4 border border-[#242825]">
              <span className="font-serif italic capitalize tracking-normal text-sm sm:text-base text-[#f4ede4]">
                The patience of ancestral needles — Shahjahanabad, Bhopal
              </span>
              <span className="text-[#9a9186] text-[10px] mt-1 sm:mt-0 tracking-[0.25em]">
                Authentic Craftsmanship
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

