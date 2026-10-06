import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const CRAFT_FILTERS = [
  { id: "all", label: "All Crafts" },
  { id: "tholu", label: "Tholu Bommalata" },
  { id: "kalamkari", label: "Kalamkari" },
  { id: "heritage", label: "Heritage Textiles & Metal" }
];

export default function FeaturedCrafts({ onSelectProduct, onExploreAll }) {
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef(null);

  const filteredProducts = activeTab === "all"
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => {
        if (activeTab === "tholu") return p.craft.toLowerCase().includes("tholu");
        if (activeTab === "kalamkari") return p.craft.toLowerCase().includes("kalamkari");
        if (activeTab === "heritage") return !p.craft.toLowerCase().includes("tholu") && !p.craft.toLowerCase().includes("kalamkari");
        return true;
      });

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.featured-product-card');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f2ec]/40 border-t border-[#e9e5dc]"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#6e6761] mb-3">
            Curated Selection
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#332f2b]">
            Featured Crafts
          </h2>
        </div>

        {/* Craft Tabs matching Orway */}
        <div className="flex justify-center flex-wrap gap-4 sm:gap-8 mb-10 sm:mb-14">
          {CRAFT_FILTERS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-cormorant text-sm sm:text-base tracking-[0.15em] uppercase pb-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'text-[#7e462d] border-b-2 border-[#7e462d] font-semibold'
                  : 'text-[#6e6761] hover:text-[#332f2b] border-b-2 border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: 2 cols on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="featured-product-card group cursor-pointer block text-left"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-white mb-3 sm:mb-4 border border-[#e9e5dc] group-hover:border-[#b89650]/60 transition-colors duration-500 shadow-xs">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#faf8f5]/90 backdrop-blur-xs text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#7e462d] px-2 py-0.5 border border-[#e9e5dc]">
                  {product.craft}
                </span>
              </div>

              {/* Product Meta */}
              <div className="space-y-1">
                <h3 className="font-cinzel text-sm sm:text-base text-[#332f2b] group-hover:text-[#7e462d] transition-colors line-clamp-1 leading-snug">
                  {product.name}
                </h3>
                <p className="font-cormorant text-xs sm:text-sm text-[#6e6761] italic">
                  {product.artist} • {product.origin.split(',')[0]}
                </p>
                <p className="font-lora text-xs sm:text-sm font-medium text-[#7e462d] pt-1">
                  {product.priceFormatted}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 font-cormorant text-base sm:text-lg tracking-[0.2em] uppercase text-[#7e462d] hover:text-[#7e462d]/80 transition-colors group cursor-pointer"
          >
            <span className="border-b border-[#7e462d] pb-1">
              Explore All Handcrafted Pieces
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
