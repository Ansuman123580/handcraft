import React from 'react';
import { Sparkles, Users, Calendar, ArrowRight, Play } from 'lucide-react';
import { ORWAY_INFO } from '../data/content';

export default function ExperiencesPage() {
  const handleInquireExperience = (experienceName) => {
    const cleanNumber = ORWAY_INFO.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello Orway, I would like to inquire about hosting the "${experienceName}" for an upcoming corporate event / private gathering.`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-[#faf8f5] min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-3 font-medium">
            Beyond Gifting
          </p>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl text-[#332f2b] tracking-wide mb-4 leading-tight">
            Experiential Gifting
          </h1>
          <p className="font-lora text-sm sm:text-base text-[#6e6761] font-light leading-relaxed">
            Pair bespoke handcrafted gifts with unforgettable live cultural experiences. Invite master Indian artisans to demonstrate ancient techniques before your leadership and esteemed guests.
          </p>
        </div>

        {/* 2 Primary Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 mb-20">
          
          {/* Experience 1: Tholu Shadow Puppetry */}
          <div className="bg-white border border-[#e9e5dc] p-6 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-[#16212e]">
                <img
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85"
                  alt="Live Tholu Bommalata Shadow Puppet Show"
                  className="w-full h-full object-cover filter brightness-[0.85]"
                />
                <span className="absolute top-3 left-3 bg-[#1d2c3e] text-white text-[9px] uppercase tracking-wider px-2.5 py-1 font-cormorant border border-[#b89650]/40">
                  Live Performance
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#7e462d] font-cormorant uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 20 – 300 Guests</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 45 – 90 Minutes</span>
              </div>

              <h2 className="font-cinzel text-2xl text-[#332f2b] mb-3">
                Tholu Bommalata Shadow Puppet Theatre
              </h2>

              <p className="font-lora text-xs sm:text-sm text-[#6e6761] font-light leading-relaxed mb-6">
                Master puppeteer K. Ramana and family travel to your venue with illuminated traditional screens, authentic percussion, and articulated leather puppets recounting heroic episodes from Indian mythology.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e9e5dc]">
              <button
                onClick={() => handleInquireExperience("Tholu Bommalata Shadow Puppet Theatre")}
                className="w-full py-3 bg-[#1d2c3e] hover:bg-[#16212e] text-[#faf8f5] font-cormorant text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book This Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Experience 2: Kalamkari Masterclass */}
          <div className="bg-white border border-[#e9e5dc] p-6 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-[#16212e]">
                <img
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85"
                  alt="Live Kalamkari Workshop"
                  className="w-full h-full object-cover filter brightness-[0.85]"
                />
                <span className="absolute top-3 left-3 bg-[#1d2c3e] text-white text-[9px] uppercase tracking-wider px-2.5 py-1 font-cormorant border border-[#b89650]/40">
                  Interactive Masterclass
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#7e462d] font-cormorant uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 10 – 50 Participants</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 2 Hours</span>
              </div>

              <h2 className="font-cinzel text-2xl text-[#332f2b] mb-3">
                Srikalahasti Freehand Kalamkari Atelier
              </h2>

              <p className="font-lora text-xs sm:text-sm text-[#6e6761] font-light leading-relaxed mb-6">
                National award-winning artist J. Niranjan guides your attendees in holding genuine bamboo pens, dipping them into natural myrobalan inks, and creating an original signed textile souvenir to take home.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e9e5dc]">
              <button
                onClick={() => handleInquireExperience("Srikalahasti Freehand Kalamkari Atelier")}
                className="w-full py-3 bg-[#7e462d] hover:bg-[#683924] text-white font-cormorant text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book This Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

