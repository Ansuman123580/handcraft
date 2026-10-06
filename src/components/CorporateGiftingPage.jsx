import React, { useState } from 'react';
import { Briefcase, ArrowRight, CheckCircle2, Send, Clock, PackageCheck } from 'lucide-react';
import { CORPORATE_GIFTS, ORWAY_INFO } from '../data/content';

export default function CorporateGiftingPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '25-50',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanNumber = ORWAY_INFO.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello Orway Corporate Concierge,\n\nInquiry from: ${formData.name} (${formData.company})\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEstimated Quantity: ${formData.quantity}\n\nRequirements: ${formData.message}`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-[#faf8f5] min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-3 font-medium">
            Orway for Business
          </p>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl text-[#332f2b] tracking-wide mb-4 leading-tight">
            Elevate Your Corporate Gifting
          </h1>
          <p className="font-lora text-sm sm:text-base text-[#6e6761] font-light leading-relaxed">
            Move beyond generic merchandise. Gift bespoke Indian handcrafted heirlooms with verified artisan provenance that tell a story of authentic luxury, culture, and sustainability.
          </p>
        </div>

        {/* Form and Value Proposition Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left: Why Choose Orway */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-cinzel text-2xl sm:text-3xl text-[#332f2b]">
              Gifting with Substance & Purpose
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f3f0e8] flex items-center justify-center text-[#7e462d] flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base text-[#332f2b] mb-1">Authentic Artisan Provenance</h4>
                  <p className="font-lora text-xs sm:text-sm text-[#6e6761] leading-relaxed">
                    Every piece is crafted by verified generational artisans across Andhra Pradesh, Madhya Pradesh, and Kashmir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f3f0e8] flex items-center justify-center text-[#7e462d] flex-shrink-0 mt-1">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base text-[#332f2b] mb-1">Custom Branding & Sustainable Packaging</h4>
                  <p className="font-lora text-xs sm:text-sm text-[#6e6761] leading-relaxed">
                    Personalized brass plaques, custom-embossed leather tags, and unbleached cotton artisan pouches branded with your corporate identity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f3f0e8] flex items-center justify-center text-[#7e462d] flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base text-[#332f2b] mb-1">End-to-End White Glove Logistics</h4>
                  <p className="font-lora text-xs sm:text-sm text-[#6e6761] leading-relaxed">
                    Direct door-to-door delivery across India and internationally for board members, global summits, and keynote speakers.
                  </p>
                </div>
              </div>
            </div>

            {/* Trusted by statement */}
            <div className="p-6 bg-[#f5f2ec] border border-[#e9e5dc]">
              <p className="font-cormorant text-xs tracking-[0.2em] uppercase text-[#7e462d] font-semibold mb-2">
                Trusted by Industry Leaders
              </p>
              <p className="font-lora text-xs text-[#6e6761] italic">
                Commissioned by leadership summits and executive gifting teams at Tata Group, Infosys, and premier financial institutions.
              </p>
            </div>
          </div>

          {/* Right: Request Consultation Form */}
          <div className="lg:col-span-6 bg-white border border-[#e9e5dc] p-6 sm:p-10 shadow-xs">
            <h3 className="font-cinzel text-xl sm:text-2xl text-[#332f2b] mb-2">
              Request a Consultation
            </h3>
            <p className="font-lora text-xs text-[#6e6761] mb-6">
              Share your event details and our corporate curation team will respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-cormorant text-xs uppercase tracking-wider text-[#6e6761] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Ananya Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#faf8f5] border border-[#e9e5dc] p-2.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d]"
                  />
                </div>
                <div>
                  <label className="block font-cormorant text-xs uppercase tracking-wider text-[#6e6761] mb-1">Company / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#faf8f5] border border-[#e9e5dc] p-2.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-cormorant text-xs uppercase tracking-wider text-[#6e6761] mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#faf8f5] border border-[#e9e5dc] p-2.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d]"
                  />
                </div>
                <div>
                  <label className="block font-cormorant text-xs uppercase tracking-wider text-[#6e6761] mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#faf8f5] border border-[#e9e5dc] p-2.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-cormorant text-xs uppercase tracking-wider text-[#6e6761] mb-1">Approximate Quantity</label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-[#faf8f5] border border-[#e9e5dc] p-2.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d]"
                >
                  <option value="15-25">15 – 25 pieces (Bespoke VIP / Board)</option>
                  <option value="25-50">25 – 50 pieces (Leadership Summit)</option>
                  <option value="50-100">50 – 100 pieces (Corporate Milestone)</option>
                  <option value="100+">100+ pieces (Annual Conference / Festive)</option>
                </select>
              </div>

              <div>
                <label className="block font-cormorant text-xs uppercase tracking-wider text-[#6e6761] mb-1">Event Vision / Remarks</label>
                <textarea
                  rows={3}
                  placeholder="Share themes, budget tiers, or desired crafts..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#faf8f5] border border-[#e9e5dc] p-2.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#7e462d] hover:bg-[#683924] text-white font-cormorant text-sm uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Corporate Enquiry on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Curated Business Gifts Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="font-cormorant text-xs tracking-[0.4em] uppercase text-[#6e6761] mb-2 font-medium">
              Curated for Business
            </p>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-[#332f2b]">
              Top Selling Corporate Gifts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORPORATE_GIFTS.map((gift) => (
              <div key={gift.id} className="bg-white border border-[#e9e5dc] p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-[#f5f2ec]">
                    <img src={gift.image} alt={gift.title} className="w-full h-full object-cover filter brightness-[0.92]" />
                    <span className="absolute top-2.5 left-2.5 bg-black/75 text-white text-[9px] uppercase tracking-wider px-2 py-0.5 font-cormorant">
                      {gift.category}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg text-[#332f2b] mb-1">{gift.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-[#7e462d] font-cormorant uppercase tracking-wider mb-3">
                    <span>{gift.minQuantity}</span>
                    <span>•</span>
                    <span>{gift.leadTime}</span>
                  </div>
                  <p className="font-lora text-xs text-[#6e6761] font-light leading-relaxed mb-4">
                    {gift.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e9e5dc] flex items-center justify-between">
                  <span className="font-cormorant text-xs text-[#b89650] uppercase tracking-wider">Custom Branding Included</span>
                  <a
                    href={`https://wa.me/${ORWAY_INFO.phone.replace(/[^0-9]/g, '')}?text=Hello%20Orway,%20I%20would%20like%20to%20enquire%20about%20corporate%20gifting%20for%20${gift.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-cormorant text-xs text-[#7e462d] uppercase tracking-wider hover:underline"
                  >
                    Enquire for Price →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Journey */}
        <div className="bg-[#1d2c3e] text-white p-8 sm:p-14 text-center rounded-xs">
          <p className="font-cormorant text-xs tracking-[0.4em] uppercase text-[#b89650] mb-2 font-medium">
            How It Works
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl text-white mb-10">
            Your Journey with Orway
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="p-4 border-l border-[#b89650]/40">
              <span className="font-cinzel text-2xl text-[#b89650] block mb-2">01</span>
              <h4 className="font-cinzel text-base text-white mb-1">Consultation</h4>
              <p className="font-lora text-xs text-white/70 font-light">We align on your brand identity, recipient demographics, and timeline.</p>
            </div>
            <div className="p-4 border-l border-[#b89650]/40">
              <span className="font-cinzel text-2xl text-[#b89650] block mb-2">02</span>
              <h4 className="font-cinzel text-base text-white mb-1">Curation Deck</h4>
              <p className="font-lora text-xs text-white/70 font-light">Receive a custom catalog with sample physical mockups and packaging options.</p>
            </div>
            <div className="p-4 border-l border-[#b89650]/40">
              <span className="font-cinzel text-2xl text-[#b89650] block mb-2">03</span>
              <h4 className="font-cinzel text-base text-white mb-1">Artisan Crafting</h4>
              <p className="font-lora text-xs text-white/70 font-light">Pieces are handcrafted by regional artisans with fair upfront remuneration.</p>
            </div>
            <div className="p-4 border-l border-[#b89650]/40">
              <span className="font-cinzel text-2xl text-[#b89650] block mb-2">04</span>
              <h4 className="font-cinzel text-base text-white mb-1">Bespoke Delivery</h4>
              <p className="font-lora text-xs text-white/70 font-light">Direct white-glove shipment with personalized certificates and origin stories.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

