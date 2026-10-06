import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { ORWAY_INFO } from '../data/content';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const cleanNumber = ORWAY_INFO.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello Orway Concierge,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-[#faf8f5] min-h-screen">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-3 font-medium">
            Atelier Connect
          </p>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl text-[#332f2b] tracking-wide mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="font-lora text-sm sm:text-base text-[#6e6761] font-light leading-relaxed">
            Reach out for bespoke inquiries, corporate partnerships, or custom master artisan commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Direct Details */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="font-cinzel text-2xl text-[#332f2b]">Get in Touch</h2>
            <p className="font-lora text-xs sm:text-sm text-[#6e6761] font-light leading-relaxed">
              Our curatorial team is available to assist you with order personalizations and private viewings.
            </p>

            <div className="space-y-4 pt-2">
              <a 
                href={`mailto:${ORWAY_INFO.email}`}
                className="flex items-center gap-3.5 p-4 bg-white border border-[#e9e5dc] hover:border-[#7e462d] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#f3f0e8] flex items-center justify-center text-[#7e462d]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-cormorant text-[11px] uppercase tracking-wider text-[#6e6761] block">Email Us</span>
                  <span className="font-cinzel text-sm text-[#332f2b] group-hover:text-[#7e462d]">{ORWAY_INFO.email}</span>
                </div>
              </a>

              <a 
                href={`https://wa.me/${ORWAY_INFO.phone.replace(/[^0-9]/g, '')}?text=Hello%20Orway%20Concierge`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 bg-white border border-[#e9e5dc] hover:border-[#7e462d] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#f3f0e8] flex items-center justify-center text-[#7e462d]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-cormorant text-[11px] uppercase tracking-wider text-[#6e6761] block">Call / WhatsApp</span>
                  <span className="font-cinzel text-sm text-[#332f2b] group-hover:text-[#7e462d]">7558959714</span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 bg-white border border-[#e9e5dc]">
                <div className="w-9 h-9 rounded-full bg-[#f3f0e8] flex items-center justify-center text-[#7e462d]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-cormorant text-[11px] uppercase tracking-wider text-[#6e6761] block">Curatorial Presence</span>
                  <span className="font-lora text-xs text-[#332f2b]">Bengaluru • Hyderabad • Mumbai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 bg-white border border-[#e9e5dc] p-6 sm:p-10 shadow-xs">
            <h3 className="font-cinzel text-xl text-[#332f2b] mb-1">Send a Message</h3>
            <p className="font-lora text-xs text-[#6e6761] mb-6">Connect directly with our senior curator.</p>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div>
                <label className="block font-cormorant text-xs uppercase tracking-wider text-[#6e6761] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Vikram Singh"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#faf8f5] border border-[#e9e5dc] p-2.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-cormorant text-xs uppercase tracking-wider text-[#6e6761] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#faf8f5] border border-[#e9e5dc] p-2.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d]"
                  />
                </div>
                <div>
                  <label className="block font-cormorant text-xs uppercase tracking-wider text-[#6e6761] mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#faf8f5] border border-[#e9e5dc] p-2.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-cormorant text-xs uppercase tracking-wider text-[#6e6761] mb-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you with our craft collections?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#faf8f5] border border-[#e9e5dc] p-2.5 text-xs text-[#332f2b] focus:outline-none focus:border-[#7e462d]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#7e462d] hover:bg-[#683924] text-white font-cormorant text-sm uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect via WhatsApp Concierge</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

