import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { FEATURED_ARTISTS, MASTERS_DOME_PRODUCTS } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function VerticalShowcase({ 
  onSelectArtist, 
  onMeetAllArtists, 
  onSelectProduct,
  onExploreMastersDome,
  onCorporateGifting,
  onExperiences
}) {
  const artistsSectionRef = useRef(null);
  const mastersSectionRef = useRef(null);

  useEffect(() => {
    // Artists avatars animation
    if (artistsSectionRef.current) {
      const avatarCards = artistsSectionRef.current.querySelectorAll('.artist-avatar-card');
      const ctx1 = gsap.context(() => {
        gsap.fromTo(
          avatarCards,
          { opacity: 0, y: 35, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: artistsSectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );
      }, artistsSectionRef);

      return () => ctx1.revert();
    }
  }, []);

  useEffect(() => {
    // Masters dome cards animation
    if (mastersSectionRef.current) {
      const masterCards = mastersSectionRef.current.querySelectorAll('.master-showcase-card');
      const ctx2 = gsap.context(() => {
        gsap.fromTo(
          masterCards,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: mastersSectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );
      }, mastersSectionRef);

      return () => ctx2.revert();
    }
  }, []);

  return (
    <div className="w-full">
      
      {/* 1. THE MAKERS / FEATURED ARTISTS SECTION matching Orway */}
      <section 
        ref={artistsSectionRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f2ec]/60 border-t border-[#e9e5dc]"
      >
        <div className="container mx-auto max-w-7xl">
          
          <div className="mb-10 sm:mb-14 text-center">
            <p className="font-cormorant text-sm sm:text-base tracking-[0.4em] uppercase text-[#6e6761] mb-3">
              The Makers
            </p>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-[#332f2b] mb-3">
              Featured Artists
            </h2>
            <p className="mx-auto max-w-2xl font-lora text-sm sm:text-base text-[#6e6761] font-light">
              Master artisans preserving centuries-old craft traditions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {FEATURED_ARTISTS.map((artist) => (
              <div
                key={artist.id}
                onClick={() => onSelectArtist(artist)}
                className="artist-avatar-card group text-center cursor-pointer"
              >
                {/* Round Avatar with Ring Border */}
                <div className="aspect-square w-28 sm:w-36 lg:w-40 mx-auto rounded-full overflow-hidden mb-4 sm:mb-6 ring-2 ring-[#e9e5dc] group-hover:ring-[#b89650] transition-all duration-500 shadow-md">
                  <img
                    src={artist.photo_url}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-[0.95]"
                  />
                </div>

                <h3 className="font-cinzel text-base sm:text-lg text-[#332f2b] group-hover:text-[#7e462d] transition-colors mb-1">
                  {artist.name}
                </h3>
                <p className="font-lora text-xs sm:text-sm text-[#6e6761]">
                  {artist.craft_origin}
                </p>
                <p className="font-cormorant text-xs text-[#7e462d] mt-1 font-medium tracking-wider">
                  {artist.generational_legacy}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 text-center">
            <button
              onClick={onMeetAllArtists}
              className="inline-flex items-center gap-2 font-cormorant text-base sm:text-lg text-[#7e462d] hover:text-[#7e462d]/80 transition-colors group cursor-pointer"
            >
              <span className="border-b border-[#7e462d] pb-1">
                Meet All Artists
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. FROM THE MASTERS DOME / HERITAGE MASTERPIECES matching Orway */}
      <section 
        ref={mastersSectionRef}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#faf8f5] relative overflow-hidden border-t border-[#e9e5dc]"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="h-px w-8 sm:w-12 bg-[#b89650]" />
              <p className="font-cormorant text-xs sm:text-sm tracking-[0.6em] uppercase text-[#b89650] font-medium">
                From the Masters Dome
              </p>
              <span className="h-px w-8 sm:w-12 bg-[#b89650]" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#332f2b] mb-4">
              Heritage Masterpieces
            </h2>
            <p className="font-lora text-sm sm:text-base text-[#6e6761] max-w-xl mx-auto leading-relaxed font-light">
              One-of-a-kind works by India's most distinguished master artisans. Each piece is a lifetime in the making.
            </p>
          </div>

          {/* 3 Museum-Grade Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            {MASTERS_DOME_PRODUCTS.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProduct(item)}
                className="master-showcase-card group cursor-pointer block"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 sm:mb-8 bg-white border border-[#b89650]/25 group-hover:border-[#b89650]/70 transition-colors duration-700 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92]"
                  />
                  <div className="absolute inset-0 border border-[#b89650]/15 pointer-events-none" />
                </div>

                <div className="text-center px-2">
                  <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b89650] mb-2 font-medium">
                    {item.artist}
                  </p>
                  <h3 className="font-cinzel text-base sm:text-lg text-[#332f2b] group-hover:text-[#7e462d] transition-colors duration-500 mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="font-cormorant text-sm text-[#6e6761] italic">
                    {item.priceFormatted}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 sm:mt-20 text-center">
            <button
              onClick={onExploreMastersDome}
              className="inline-flex items-center gap-3 font-cormorant text-sm sm:text-base tracking-[0.3em] uppercase text-[#b89650] border border-[#b89650]/40 px-8 py-3.5 hover:bg-[#b89650]/10 hover:border-[#b89650]/70 transition-all duration-500 group cursor-pointer rounded-full"
            >
              <span>Explore the Collection</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. ULTRA-PREMIUM HERITAGE BANNER (Masters Dome Feature) */}
      <section className="bg-[#131d28] overflow-hidden">
        <div className="relative group overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2200&q=85"
              alt="Masters Dome"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131d28]/95 via-[#131d28]/45 to-transparent" />
          </div>

          <div 
            onClick={onExploreMastersDome}
            className="relative z-10 flex flex-col justify-end h-full p-8 sm:p-12 md:p-16 lg:p-20 min-h-[55vh] sm:min-h-[65vh] lg:min-h-[72vh] cursor-pointer"
          >
            <div className="max-w-2xl text-left">
              <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-3 font-medium">
                Ultra-Premium Heritage
              </p>
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight">
                Masters Dome
              </h2>
              <p className="font-lora text-sm sm:text-base text-white/75 max-w-xl mb-6 leading-relaxed font-light">
                Museum-grade creations signed by master artisans. Certified authentic with physical NFC seals and archival provenance documentation.
              </p>
              <div className="inline-flex items-center gap-2 font-cormorant text-sm sm:text-base tracking-[0.25em] uppercase text-[#b89650] group-hover:text-white transition-colors">
                <span className="border-b border-[#b89650]">Explore Masters Dome</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPLIT DUAL PROMOTIONAL BANNERS: Corporate & Experiential Gifting */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-[#e9e5dc]">
        
        {/* Banner Left: Corporate Gifting */}
        <div 
          onClick={onCorporateGifting}
          className="relative min-h-[45vh] sm:min-h-[52vh] flex flex-col justify-end p-8 sm:p-12 lg:p-16 bg-[#1d2c3e] overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
              alt="Corporate Gifting"
              className="w-full h-full object-cover filter brightness-[0.4] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d2c3e] via-[#1d2c3e]/60 to-transparent" />
          </div>

          <div className="relative z-10 text-left">
            <p className="font-cormorant text-xs tracking-[0.4em] uppercase text-[#b89650] mb-2 font-medium">
              Curated for Business
            </p>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-white mb-3 leading-tight">
              Elevate Your Corporate Gifting
            </h3>
            <p className="font-lora text-xs sm:text-sm text-white/75 max-w-md mb-5 font-light leading-relaxed">
              Bespoke handcrafted gifts and live artisan experiences tailored for luxury brands and modern enterprises.
            </p>
            <span className="inline-flex items-center gap-2 font-cormorant text-xs sm:text-sm tracking-[0.2em] uppercase text-[#b89650] group-hover:text-white transition-colors">
              <span className="border-b border-[#b89650]">Start a Conversation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Banner Right: Experiential Gifting */}
        <div 
          onClick={onExperiences}
          className="relative min-h-[45vh] sm:min-h-[52vh] flex flex-col justify-end p-8 sm:p-12 lg:p-16 bg-[#16212e] overflow-hidden group cursor-pointer border-t md:border-t-0 md:border-l border-[#e9e5dc]"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85"
              alt="Live Experiential Gifting"
              className="w-full h-full object-cover filter brightness-[0.4] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16212e] via-[#16212e]/60 to-transparent" />
          </div>

          <div className="relative z-10 text-left">
            <p className="font-cormorant text-xs tracking-[0.4em] uppercase text-[#b89650] mb-2 font-medium">
              Beyond Gifting
            </p>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-white mb-3 leading-tight">
              Experiential Gifting
            </h3>
            <p className="font-lora text-xs sm:text-sm text-white/75 max-w-md mb-5 font-light leading-relaxed">
              Bring master artisans to your corporate event, private gathering, or luxury celebration with live craft workshops and puppet storytelling.
            </p>
            <span className="inline-flex items-center gap-2 font-cormorant text-xs sm:text-sm tracking-[0.2em] uppercase text-[#b89650] group-hover:text-white transition-colors">
              <span className="border-b border-[#b89650]">Discover Experiences</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

      </section>

    </div>
  );
}
