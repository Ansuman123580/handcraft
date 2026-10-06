import React, { useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { PRODUCTS } from '../data/content';

const CATEGORIES = ['All', 'Bags', 'Textiles', 'Zari', 'Accessories', 'Decorative'];

export default function ShopView({ onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((item) => {
        if (selectedCategory === 'Accessories') {
          return item.category === 'Bags' || item.subcategory === 'Bhopali Batua';
        }
        return item.category === selectedCategory || item.subcategory?.toLowerCase().includes(selectedCategory.toLowerCase());
      });

  return (
    <div className="w-full pt-28 sm:pt-36 pb-32 px-6 lg:px-12 bg-[#0c0d0c] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Editorial Catalog Header */}
        <div className="border-b border-[#242825] pb-12 mb-12">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-3 font-medium">
              Editorial Catalogue
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#f4ede4] tracking-tight">
              Shop
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-[#b8ada0] mt-3 font-light">
              Discover handcrafted pieces from Madhya Pradesh.
            </p>
          </div>

          {/* Minimal Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-10 pt-6 border-t border-[#1d211e]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#181d19] text-[#f4ede4] border border-[#c5a880]'
                    : 'text-[#8e857b] hover:text-[#dcd3c7] border border-transparent hover:border-[#242825]'
                }`}
              >
                {cat}
              </button>
            ))}

            <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-[#6e685f] hidden sm:inline">
              Showing {filteredProducts.length} Heirloom Artifacts
            </span>
          </div>
        </div>

        {/* Editorial Product Grid (Avoid Generic Ecommerce Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {filteredProducts.map((product, index) => {
            // Alternate span patterns to preserve the high-end editorial magazine feeling
            const spanClass = index % 5 === 0 
              ? 'lg:col-span-8' 
              : index % 5 === 1 
                ? 'lg:col-span-4' 
                : 'lg:col-span-4';

            const aspectClass = index % 5 === 0 
              ? 'aspect-[16/10]' 
              : 'aspect-[3/4]';

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className={`${spanClass} group cursor-pointer bg-[#121412] border border-[#242825] p-5 sm:p-7 hover:border-[#384039] transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Image Presentation */}
                  <div className={`relative ${aspectClass} overflow-hidden bg-[#0c0d0c] mb-6`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#0c0d0c]/80 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#c5a880] border border-[#29332b]">
                      {product.craft.split('&')[0]}
                    </div>
                  </div>

                  {/* Metadata */}
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8e857b] block mb-1">
                    {product.origin}
                  </span>

                  <h3 className="font-serif text-2xl lg:text-3xl font-light text-[#f4ede4] group-hover:text-white transition-colors mb-1">
                    {product.name}
                  </h3>

                  <p className="font-serif italic text-sm text-[#b8ada0] mb-4">
                    {product.material}
                  </p>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-[#242825] flex items-center justify-between">
                  <span className="text-sm tracking-wider text-[#dcd3c7] font-sans">
                    {product.price}
                  </span>

                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#c5a880] group-hover:text-[#f4ede4] transition-colors">
                    <span>Inquire / Order</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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

