import React, { useState } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { FEATURED_PRODUCTS, FEATURED_ARTISTS } from '../data/content';

export default function SearchDrawer({ isOpen, onClose, onSelectProduct, onSelectArtist }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedProducts = query.trim() === '' ? [] : FEATURED_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.craft.toLowerCase().includes(query.toLowerCase()) ||
    p.artist.toLowerCase().includes(query.toLowerCase()) ||
    p.origin.toLowerCase().includes(query.toLowerCase())
  );

  const matchedArtists = query.trim() === '' ? [] : FEATURED_ARTISTS.filter(a =>
    a.name.toLowerCase().includes(query.toLowerCase()) ||
    a.craft.toLowerCase().includes(query.toLowerCase()) ||
    a.craft_origin.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-lg bg-[#faf8f5] border-l border-[#e9e5dc] h-full flex flex-col justify-between p-6 sm:p-8 text-[#332f2b] shadow-2xl overflow-y-auto">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#e9e5dc]">
            <span className="font-cormorant text-xs uppercase tracking-[0.3em] text-[#b89650] font-medium">
              Search Orway
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6e6761] hover:text-[#332f2b] hover:bg-[#f3f0e8] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Input */}
          <div className="mt-6 relative">
            <Search className="w-4 h-4 text-[#6e6761] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              placeholder="Search lamps, Kalamkari, puppets, artists..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white border border-[#e9e5dc] pl-10 pr-4 py-3 text-xs text-[#332f2b] placeholder-[#a69f97] focus:outline-none focus:border-[#7e462d]"
            />
          </div>

          {/* Quick Keywords */}
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-cormorant tracking-wider text-[#6e6761]">
            <span>Popular:</span>
            {["Tholu Bommalata", "Kalamkari", "Floor Lamp", "Tussar Silk", "Masters Dome"].map(kw => (
              <button
                key={kw}
                onClick={() => setQuery(kw)}
                className="text-[#7e462d] hover:underline cursor-pointer"
              >
                {kw}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="mt-8 space-y-4">
            {query.trim() !== '' && matchedProducts.length === 0 && matchedArtists.length === 0 && (
              <p className="text-xs text-[#6e6761] text-center py-8 font-lora italic">
                No matching creations or artists found for "{query}".
              </p>
            )}

            {matchedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="flex items-center gap-4 p-3 bg-white border border-[#e9e5dc] hover:border-[#b89650] transition-colors cursor-pointer group"
              >
                <div className="w-14 h-14 bg-[#f5f2ec] overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-cormorant text-[10px] uppercase tracking-wider text-[#b89650] block">
                    {item.craft}
                  </span>
                  <h4 className="font-cinzel text-sm text-[#332f2b] group-hover:text-[#7e462d] truncate">
                    {item.name}
                  </h4>
                  <span className="font-lora text-xs text-[#7e462d] font-medium">{item.priceFormatted}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6e6761] group-hover:text-[#7e462d]" />
              </div>
            ))}

            {matchedArtists.map((artist) => (
              <div
                key={artist.id}
                onClick={() => {
                  onSelectArtist(artist);
                  onClose();
                }}
                className="flex items-center gap-4 p-3 bg-[#f5f2ec] border border-[#e9e5dc] hover:border-[#7e462d] transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-[#e9e5dc]">
                  <img src={artist.photo_url} alt={artist.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-cormorant text-[10px] uppercase tracking-wider text-[#7e462d] block">
                    Master Artist
                  </span>
                  <h4 className="font-cinzel text-sm text-[#332f2b] group-hover:text-[#7e462d] truncate">
                    {artist.name}
                  </h4>
                  <span className="text-[11px] text-[#6e6761] font-lora">{artist.craft_origin}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6e6761] group-hover:text-[#7e462d]" />
              </div>
            ))}
          </div>

        </div>

        <div className="pt-6 border-t border-[#e9e5dc] text-center font-cormorant text-xs uppercase tracking-widest text-[#6e6761]">
          Orway • Handcrafted Indian Heritage
        </div>

      </div>
    </div>
  );
}
