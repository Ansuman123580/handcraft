import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/content';

export default function FeaturedCollection({ onSelectProduct, onExploreAll }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-24 sm:py-32 px-6 lg:px-12 bg-[#0c0d0c] border-t border-[#242825]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#242825]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-3 font-medium">
              Curated Edition
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] leading-tight">
              Crafted Elegance
            </h2>
            <p className="font-serif italic text-xl text-[#dcd3c7] mt-2 font-light">
              Discover Handcrafted Pieces
            </p>
          </div>

          <div className="mt-8 md:mt-0 flex items-center space-x-6">
            <button
              onClick={onExploreAll}
              className="text-xs uppercase tracking-[0.2em] text-[#f4ede4] hover:text-[#c5a880] transition-colors cursor-pointer py-1 border-b border-[#242825] hover:border-[#c5a880]"
            >
              View Full Archive
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-[#2e3630] hover:border-[#c5a880] hover:text-[#f4ede4] text-[#8e857b] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-[#2e3630] hover:border-[#c5a880] hover:text-[#f4ede4] text-[#8e857b] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Editorial Arrangement */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRODUCTS.slice(0, 5).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item)}
              className="min-w-[280px] sm:min-w-[340px] lg:min-w-[380px] group cursor-pointer flex-shrink-0 snap-start bg-[#131513] border border-[#242825] p-5 hover:border-[#384039] transition-all duration-300"
            >
              {/* Product Photography */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0c0d0c] mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#0c0d0c]/85 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-[#c5a880] px-2.5 py-1 border border-[#29332b]">
                  {item.origin.split(',')[0]}
                </span>
              </div>

              {/* Product Metadata */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8e857b] block">
                  {item.craft}
                </span>

                <h3 className="font-serif text-2xl font-light text-[#f4ede4] group-hover:text-white transition-colors">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#242825]">
                  <span className="text-xs tracking-wider text-[#dcd3c7] font-sans">
                    {item.price}
                  </span>

                  <span className="inline-flex items-center space-x-1.5 text-[11px] uppercase tracking-[0.18em] text-[#c5a880] group-hover:text-[#f4ede4] transition-colors">
                    <span>View Piece</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

