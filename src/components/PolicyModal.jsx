import React from 'react';
import { X } from 'lucide-react';

export default function PolicyModal({ type, onClose }) {
  if (!type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      body: "At Orway, we honor the privacy of our collectors and corporate partners. We never sell or share your personal contact information with third parties. Any details collected during consultation, custom order placement, or newsletter subscription are used strictly for fulfillment and bespoke artisan communication."
    },
    terms: {
      title: "Terms & Conditions",
      body: "All pieces listed on Orway are handcrafted by regional master artisans. Due to the organic nature of natural dyes, hand-punched leather perforations, and handspun textiles, slight variations in texture, shade, and dimensions are inherent markers of authentic handwork rather than defects."
    },
    shipping: {
      title: "Shipping Policy",
      body: "We offer complimentary, fully insured pan-India white-glove courier shipping on all handcrafted orders. Made-to-order pieces require 10-18 business days for meticulous artisan crafting and drying. International deliveries are coordinated via DHL Express with complete customs clearance assistance."
    },
    refund: {
      title: "Refund & Exchange Policy",
      body: "We take tremendous pride in the museum-grade quality of our collections. If your piece arrives with transit damage, please notify our concierge within 48 hours of unboxing for immediate insured repair or complimentary replacement."
    }
  }[type] || { title: "Policy", body: "" };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-lg bg-[#faf8f5] border border-[#e9e5dc] p-6 sm:p-8 text-[#332f2b] shadow-2xl rounded-xs">
        <div className="flex items-center justify-between pb-4 border-b border-[#e9e5dc] mb-4">
          <h3 className="font-cinzel text-xl text-[#332f2b]">{content.title}</h3>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6e6761] hover:text-[#332f2b] hover:bg-[#f3f0e8] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="font-lora text-xs sm:text-sm text-[#6e6761] font-light leading-relaxed">
          {content.body}
        </p>
        <div className="mt-6 pt-4 border-t border-[#e9e5dc] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#7e462d] text-white text-xs font-cormorant uppercase tracking-wider hover:bg-[#683924]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

