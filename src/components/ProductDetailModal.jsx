import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Heart, ShoppingBag, MessageSquare, Check, ChevronDown } from 'lucide-react';
import { ORWAY_INFO } from '../data/content';

export default function ProductDetailModal({ product, onClose, onAddToCart, onToggleFavorite, isFavorite }) {
  if (!product) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('craft');

  const gallery = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  const handleWhatsAppOrder = () => {
    const cleanNumber = ORWAY_INFO.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello Orway Concierge, I would like to purchase the "${product.name}" (${product.priceFormatted}).\nCraft: ${product.craft}\nOrigin: ${product.origin}`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="relative w-full max-w-5xl bg-[#faf8f5] border border-[#e9e5dc] shadow-2xl my-auto text-[#332f2b] overflow-hidden rounded-xs">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e9e5dc] bg-white">
          <div className="flex items-center gap-2 font-cormorant text-xs tracking-[0.25em] uppercase text-[#b89650]">
            <span>ORWAY</span>
            <span>/</span>
            <span>{product.craft}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#6e6761] hover:text-[#332f2b] hover:bg-[#f3f0e8] rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Layout: Gallery Left, Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Gallery Left */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#e9e5dc]">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f2ec] border border-[#e9e5dc]/70 mb-4">
              <img
                src={gallery[activeImgIndex]}
                alt={product.name}
                className="w-full h-full object-cover object-center filter brightness-[0.95]"
              />
              <span className="absolute top-3 left-3 bg-[#1d2c3e] text-[9px] uppercase tracking-wider text-[#b89650] px-2.5 py-1 border border-[#b89650]/40 font-cormorant">
                {product.origin.split(',')[0]}
              </span>
            </div>

            {gallery.length > 1 && (
              <div className="flex items-center gap-3">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-16 h-16 border cursor-pointer transition-all overflow-hidden ${
                      activeImgIndex === idx ? 'border-[#7e462d] scale-105' : 'border-[#e9e5dc] opacity-70'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Right */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b89650] font-medium">
                  {product.craft}
                </span>
                <span className="font-cormorant text-xs text-[#7e462d] font-semibold tracking-wider uppercase">
                  {product.artist}
                </span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-3xl text-[#332f2b] leading-snug">
                {product.name}
              </h2>

              <div className="font-lora text-xl sm:text-2xl font-semibold text-[#7e462d]">
                {product.priceFormatted}
                <span className="block text-[11px] font-normal text-[#6e6761] tracking-normal font-sans mt-0.5">
                  Free insured white-glove shipping across India
                </span>
              </div>

              <p className="font-lora text-xs sm:text-sm text-[#6e6761] font-light leading-relaxed">
                {product.description}
              </p>

              {/* Specs Table */}
              <div className="pt-2 space-y-2 text-xs border-t border-[#e9e5dc]">
                {product.material && (
                  <div className="flex justify-between py-1 border-b border-[#f3f0e8]">
                    <span className="text-[#6e6761] uppercase tracking-wider text-[10px] font-cormorant">Material</span>
                    <span className="text-[#332f2b] font-medium text-right max-w-[65%]">{product.material}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div className="flex justify-between py-1 border-b border-[#f3f0e8]">
                    <span className="text-[#6e6761] uppercase tracking-wider text-[10px] font-cormorant">Dimensions</span>
                    <span className="text-[#332f2b] font-medium text-right">{product.dimensions}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-[#f3f0e8]">
                  <span className="text-[#6e6761] uppercase tracking-wider text-[10px] font-cormorant">Artisan Studio</span>
                  <span className="text-[#332f2b] font-medium text-right">{product.origin}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-[#e9e5dc] space-y-3">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#7e462d] hover:bg-[#683924] text-white font-cormorant text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#e9e5dc]" />
                <span>Order on WhatsApp Concierge</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 py-3 bg-white hover:bg-[#f5f2ec] border border-[#e9e5dc] text-[#332f2b] font-cormorant text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={() => onToggleFavorite(product.id)}
                  className={`p-3 border border-[#e9e5dc] rounded-xs transition-colors cursor-pointer ${
                    isFavorite ? 'bg-[#7e462d] text-white' : 'bg-white text-[#6e6761] hover:text-[#7e462d]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider text-[#6e6761] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b89650]" />
                <span>Certified Authentic • Direct Artisan Sourced</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
