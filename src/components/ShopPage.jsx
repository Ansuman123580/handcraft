import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/content';

const CATEGORIES = [
  "All",
  "Lamps",
  "Wall Art",
  "Puppets",
  "Dupattas",
  "Accessories",
  "Decor"
];

export default function ShopPage({ onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = FEATURED_PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.craft.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-[#faf8f5] min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-3 font-medium">
            Contemporary & Heritage
          </p>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl text-[#332f2b] tracking-wide mb-4">
            The Shop
          </h1>
          <p className="font-lora text-sm sm:text-base text-[#6e6761] font-light leading-relaxed">
            Ancient artistry meets modern design. Discover handcrafted leather lamps, Srikalahasti Kalamkari, shadow puppets, and heirloom drapes.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#e9e5dc]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-cormorant text-xs sm:text-sm tracking-[0.18em] uppercase px-3 py-1.5 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#7e462d] text-white font-medium'
                    : 'text-[#6e6761] hover:text-[#332f2b] bg-[#f5f2ec]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-[#a69f97] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search pieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#e9e5dc] pl-9 pr-3 py-1.5 text-xs text-[#332f2b] placeholder-[#a69f97] focus:outline-none focus:border-[#7e462d]"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-[#e9e5dc] px-3 py-1.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d] cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-[#6e6761]">
            <p className="font-lora text-base italic">No handcrafted pieces found in this selection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProduct(item)}
                className="group cursor-pointer block text-left"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4 border border-[#e9e5dc] group-hover:border-[#b89650]/60 transition-colors duration-500 shadow-xs">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#faf8f5]/90 backdrop-blur-xs text-[9px] uppercase tracking-[0.2em] text-[#7e462d] px-2 py-0.5 border border-[#e9e5dc]">
                    {item.craft}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-cinzel text-base sm:text-lg text-[#332f2b] group-hover:text-[#7e462d] transition-colors leading-snug line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="font-cormorant text-xs sm:text-sm text-[#6e6761] italic">
                    {item.artist} • {item.origin.split(',')[0]}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-lora text-sm font-medium text-[#7e462d]">
                      {item.priceFormatted}
                    </span>
                    <span className="inline-flex items-center gap-1 font-cormorant text-xs uppercase tracking-wider text-[#b89650] group-hover:text-[#7e462d]">
                      <span>View</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

