import React, { useState } from 'react';
import { X, MessageSquare, Mail, MapPin, Send, Check } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const cleanNumber = BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello Mahua Crafts Concierge, my name is ${name || 'Collector'}.\n\nMessage: ${message || 'I would like to inquire about bespoke commissions and current collections.'}`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#070807]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-xl bg-[#0f110f] border border-[#242825] p-6 sm:p-10 text-[#e6ded5] shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#8e857b] hover:text-[#f4ede4] hover:bg-[#1a1e1b] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-2 font-medium">
          Artisan Concierge
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#f4ede4] mb-3">
          Connect With Mahua
        </h2>
        <p className="text-xs sm:text-sm text-[#8e857b] font-light leading-relaxed mb-8">
          Whether you seek a custom Batua pouch, an heirloom handwoven drape, or information about our regional artisan clusters, our curators in Madhya Pradesh are at your service.
        </p>

        {/* Contact Links */}
        <div className="space-y-4 mb-8">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-[#141714] border border-[#242825] hover:border-[#384039] transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-[#1b251d] flex items-center justify-center text-[#88c991]">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8e857b] block">WhatsApp Concierge</span>
              <span className="text-sm font-sans text-[#f4ede4] group-hover:text-[#c5a880] transition-colors">{BRAND_INFO.whatsappNumber}</span>
            </div>
          </a>

          <a
            href={`mailto:${BRAND_INFO.email}`}
            className="flex items-center space-x-4 p-4 bg-[#141714] border border-[#242825] hover:border-[#384039] transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-[#1b251d] flex items-center justify-center text-[#c5a880]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8e857b] block">Editorial & Commission Enquiries</span>
              <span className="text-sm font-sans text-[#f4ede4] group-hover:text-[#c5a880] transition-colors">{BRAND_INFO.email}</span>
            </div>
          </a>

          <div className="flex items-center space-x-4 p-4 bg-[#141714] border border-[#242825]">
            <div className="w-10 h-10 rounded-full bg-[#1b251d] flex items-center justify-center text-[#c5a880]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8e857b] block">Curatorial Atelier</span>
              <span className="text-xs text-[#dcd3c7]">Shahjahanabad, Bhopal, Madhya Pradesh 462001</span>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8e857b] mb-1">Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Radhika Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#0c0d0c] border border-[#242825] px-4 py-2.5 text-xs text-[#f4ede4] placeholder-[#6e685f] focus:outline-none focus:border-[#c5a880]"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8e857b] mb-1">Your Message or Inquiry</label>
            <textarea
              rows={3}
              required
              placeholder="Tell us what piece or craft you are interested in..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#0c0d0c] border border-[#242825] p-3 text-xs text-[#f4ede4] placeholder-[#6e685f] focus:outline-none focus:border-[#c5a880]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#233325] hover:bg-[#2c402f] border border-[#3e5942] text-[#f4ede4] transition-all text-xs uppercase tracking-[0.22em] font-medium flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Start Direct WhatsApp Conversation</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}

