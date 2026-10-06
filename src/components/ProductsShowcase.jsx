import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/content';

export default function ProductsShowcase({ onSelectProduct, onExploreAll }) {
  // Select editorial items with distinct proportions matching the brief
  const heroProduct = PRODUCTS.find(p => p.id === 'bhopali-batua-noor');
  const mediumProduct = PRODUCTS.find(p => p.id === 'zari-motifs-clutch');
  const portraitProduct = PRODUCTS.find(p => p.id === 'chanderi-weave-wrap');
  const wideProduct = PRODUCTS.find(p => p.id === 'dhokra-tote-bag');
  const decorativeProduct = PRODUCTS.find(p => p.id === 'brass-bell-vessel');

  return (
    <section className="w-full py-24 sm:py-32 px-6 lg:px-12 bg-[#0c0d0c] border-t border-[#242825]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#242825]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-3 font-medium">
              Curated Showcase
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] leading-tight">
              Products<br />
              <span className="italic text-[#dcd3c7]">Unique to You</span>
            </h2>
            <p className="text-sm sm:text-base text-[#8e857b] font-light mt-3">
              Handcrafted pieces with a story of their own.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <button
              onClick={onExploreAll}
              className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.22em] text-[#f4ede4] hover:text-[#c5a880] transition-colors cursor-pointer py-2"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Item 1: Large Hero Asymmetrical Card (7 Cols) - Bhopali Batua */}
          {heroProduct && (
            <div 
              onClick={() => onSelectProduct(heroProduct)}
              className="lg:col-span-7 group cursor-pointer flex flex-col justify-between bg-[#131513] border border-[#242825] p-5 sm:p-7 hover:border-[#384039] transition-all duration-300"
            >
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-[#0a0b0a] mb-6">
                <img
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#0c0d0c]/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.25em] text-[#c5a880] px-3 py-1 border border-[#29332b]">
                  {heroProduct.category}
                </span>
              </div>

              <div className="flex items-end justify-between pt-2">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8e857b] block mb-1">
                    {heroProduct.subcategory}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#f4ede4] group-hover:text-white transition-colors">
                    {heroProduct.name}
                  </h3>
                  <p className="font-serif italic text-sm text-[#b8ada0] mt-1">
                    {heroProduct.craft}
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 text-right">
                  <span className="text-xs tracking-wider text-[#dcd3c7] font-sans">
                    {heroProduct.price}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#2e3630] group-hover:border-[#c5a880] flex items-center justify-center text-[#c4b9ad] group-hover:text-[#f4ede4] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Item 2: Medium Portrait Card (5 Cols) - Zari Craft Minaudière */}
          {mediumProduct && (
            <div 
              onClick={() => onSelectProduct(mediumProduct)}
              className="lg:col-span-5 group cursor-pointer flex flex-col justify-between bg-[#131513] border border-[#242825] p-5 sm:p-7 hover:border-[#384039] transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0b0a] mb-6">
                <img
                  src={mediumProduct.image}
                  alt={mediumProduct.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#0c0d0c]/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.25em] text-[#c5a880] px-3 py-1 border border-[#29332b]">
                  {mediumProduct.category}
                </span>
              </div>

              <div className="flex items-end justify-between pt-2">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8e857b] block mb-1">
                    {mediumProduct.subcategory}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#f4ede4] group-hover:text-white transition-colors">
                    {mediumProduct.name}
                  </h3>
                  <p className="font-serif italic text-sm text-[#b8ada0] mt-1">
                    {mediumProduct.craft}
                  </p>
                </div>

                <div className="flex items-center space-x-3 text-right">
                  <span className="text-xs tracking-wider text-[#dcd3c7] font-sans">
                    {mediumProduct.price}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#2e3630] group-hover:border-[#c5a880] flex items-center justify-center text-[#c4b9ad] group-hover:text-[#f4ede4] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Row 2 Asymmetrical Composition: Portrait (4 Cols) + Wide (4 Cols) + Sculptural (4 Cols) */}
          {portraitProduct && (
            <div 
              onClick={() => onSelectProduct(portraitProduct)}
              className="lg:col-span-4 group cursor-pointer bg-[#131513] border border-[#242825] p-5 sm:p-6 hover:border-[#384039] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0b0a] mb-5">
                <img
                  src={portraitProduct.image}
                  alt={portraitProduct.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#0c0d0c]/80 backdrop-blur-sm text-[9px] uppercase tracking-[0.22em] text-[#c5a880] px-2.5 py-0.5 border border-[#29332b]">
                  {portraitProduct.category}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8e857b] block">Textile Art</span>
                  <h4 className="font-serif text-xl font-light text-[#f4ede4] mt-0.5">{portraitProduct.name}</h4>
                </div>
                <div className="w-7 h-7 rounded-full border border-[#2e3630] flex items-center justify-center text-[#c4b9ad]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          )}

          {wideProduct && (
            <div 
              onClick={() => onSelectProduct(wideProduct)}
              className="lg:col-span-4 group cursor-pointer bg-[#131513] border border-[#242825] p-5 sm:p-6 hover:border-[#384039] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0b0a] mb-5">
                <img
                  src={wideProduct.image}
                  alt={wideProduct.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#0c0d0c]/80 backdrop-blur-sm text-[9px] uppercase tracking-[0.22em] text-[#c5a880] px-2.5 py-0.5 border border-[#29332b]">
                  {wideProduct.category}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8e857b] block">Handcrafted Bags</span>
                  <h4 className="font-serif text-xl font-light text-[#f4ede4] mt-0.5">{wideProduct.name}</h4>
                </div>
                <div className="w-7 h-7 rounded-full border border-[#2e3630] flex items-center justify-center text-[#c4b9ad]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          )}

          {decorativeProduct && (
            <div 
              onClick={() => onSelectProduct(decorativeProduct)}
              className="lg:col-span-4 group cursor-pointer bg-[#131513] border border-[#242825] p-5 sm:p-6 hover:border-[#384039] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0b0a] mb-5">
                <img
                  src={decorativeProduct.image}
                  alt={decorativeProduct.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#0c0d0c]/80 backdrop-blur-sm text-[9px] uppercase tracking-[0.22em] text-[#c5a880] px-2.5 py-0.5 border border-[#29332b]">
                  {decorativeProduct.category}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8e857b] block">Decorative Objects</span>
                  <h4 className="font-serif text-xl font-light text-[#f4ede4] mt-0.5">{decorativeProduct.name}</h4>
                </div>
                <div className="w-7 h-7 rounded-full border border-[#2e3630] flex items-center justify-center text-[#c4b9ad]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

