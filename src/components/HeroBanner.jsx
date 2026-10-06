import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, RotateCcw, Compass } from 'lucide-react';

const INTRO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2400&q=90",
    alt: "Artisan handcrafting sacred motifs"
  },
  {
    url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2400&q=90",
    alt: "Tholu Bommalata ambient leather lamp illumination"
  },
  {
    url: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=2400&q=90",
    alt: "Master artisan working on traditional frame"
  },
  {
    url: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=2400&q=90",
    alt: "Handwoven natural dyed tussar textiles"
  },
  {
    url: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=2400&q=90",
    alt: "Gilded metallic zari couching detail"
  },
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90",
    alt: "Lost-wax cast bell metal sculpture"
  }
];

export default function HeroBanner({ onExplore, onIntroStatusChange }) {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const radialRef = useRef(null);
  const heroRef = useRef(null);
  const sublineRef = useRef(null);
  const ctaRef = useRef(null);
  const replayBtnRef = useRef(null);
  const animTimelineRef = useRef(null);

  const splitWords = (element) => {
    if (!element) return [];
    const raw = element.getAttribute('data-text') || element.textContent.trim();
    element.setAttribute('data-text', raw);
    element.textContent = "";
    const words = raw.split(/\s+/);
    const nodes = [];

    words.forEach((word, index) => {
      const mask = document.createElement("span");
      mask.className = "word-mask";

      const inner = document.createElement("span");
      inner.className = "word";
      inner.textContent = word;

      mask.appendChild(inner);
      element.appendChild(mask);
      nodes.push(inner);

      if (index < words.length - 1) {
        const space = document.createElement("span");
        space.className = "word-space";
        element.appendChild(space);
      }
    });

    return nodes;
  };

  const runAnimation = () => {
    if (!containerRef.current) return;

    // Reset state & inform parent that loading is starting
    setIsIntroFinished(false);
    if (onIntroStatusChange) onIntroStatusChange(false);

    if (animTimelineRef.current) {
      animTimelineRef.current.kill();
    }

    const images = containerRef.current.querySelectorAll(".intro-image");
    const frame = frameRef.current;
    const radial = radialRef.current;
    const hero = heroRef.current;
    const subline = sublineRef.current;
    const cta = ctaRef.current;

    const heroWords = splitWords(hero);
    const sublineWords = splitWords(subline);

    // Initial state sets: ZERO text on screen during loading
    gsap.set([hero, subline], { opacity: 0 });
    gsap.set(heroWords, { yPercent: 110, opacity: 0 });
    gsap.set(sublineWords, { yPercent: 110, opacity: 0 });
    gsap.set(cta, { opacity: 0, y: 25 });
    gsap.set(images, { clipPath: "inset(0% 0% 100% 0%)" });
    gsap.set(radial, { opacity: 0 });

    // Reset frame dimensions to centered 16:9 box
    const isDesktop = window.innerWidth >= 768;
    gsap.set(frame, {
      width: isDesktop ? "42vw" : "min(88vw, 28rem)",
      height: "auto",
      aspectRatio: "16 / 9",
      maxWidth: "none",
      margin: "auto"
    });

    const introTl = gsap.timeline();
    animTimelineRef.current = introTl;

    // Phase 1: Pure image loading animation (Wiping through 6 images sequentially)
    // NO TEXT ON SCREEN AT ALL
    introTl.to(images, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      delay: 0.35,
      stagger: { each: 0.25, ease: "power1.out" }
    });

    // Phase 2: Frame expands smoothly to take over the entire viewport
    introTl.to(frame, {
      width: "100%",
      height: "100dvh",
      maxWidth: "none",
      aspectRatio: "unset",
      margin: 0,
      duration: 1.15,
      ease: "power3.inOut"
    });

    // Phase 3: Radial dark vignette overlay settles
    introTl.to(
      radial,
      {
        opacity: 1,
        duration: 0.85,
        ease: "power2.out"
      },
      ">"
    );

    // Phase 4: ONLY ONCE LOADING & EXPANSION FINISHES -> Reveal the text & UI
    introTl.call(() => {
      setIsIntroFinished(true);
      if (onIntroStatusChange) onIntroStatusChange(true);
      gsap.set([hero, subline], { opacity: 1 });
    });

    // Headline words reveal with elegant masked slide-up
    introTl.to(heroWords, {
      yPercent: 0,
      opacity: 1,
      duration: 0.95,
      ease: "power3.out",
      stagger: 0.075
    });

    // Subtitle words reveal
    introTl.to(sublineWords, {
      yPercent: 0,
      opacity: 1,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.03
    }, "-=0.45");

    // CTA buttons reveal
    introTl.to(cta, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.35");
  };

  useEffect(() => {
    runAnimation();
    return () => {
      if (animTimelineRef.current) {
        animTimelineRef.current.kill();
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100dvh] overflow-hidden bg-[#0c1015]"
    >
      {/* Intro Centered Frame that expands to full screen */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          ref={frameRef}
          className="intro-frame relative z-0"
        >
          {INTRO_IMAGES.map((img, idx) => (
            <img
              key={idx}
              src={img.url}
              alt={img.alt}
              className="intro-image"
            />
          ))}

          {/* Radial Dark Vignette Overlay */}
          <div 
            ref={radialRef}
            className="intro-radial"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Hero Copy (Bottom Left) — Strictly HIDDEN during loading, reveals ONLY after expansion */}
      <div className={`absolute inset-x-0 bottom-12 sm:bottom-16 md:bottom-20 z-20 px-6 sm:px-12 lg:px-16 pointer-events-auto transition-opacity duration-300 ${
        isIntroFinished ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-4xl text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="h-px w-6 sm:w-10 bg-[#b89650]" />
            <span className="font-cormorant text-xs sm:text-sm tracking-[0.45em] uppercase text-[#b89650] font-medium">
              Living Indian Heritage
            </span>
          </div>

          {/* Main Hero Headline (Masked animated words) */}
          <h1 
            ref={heroRef}
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight leading-[1.05] drop-shadow-2xl mb-4 sm:mb-6"
          >
            HANDCRAFTED BY INDIAN ARTISANS
          </h1>

          {/* Subline (Masked animated words) */}
          <p 
            ref={sublineRef}
            className="font-lora text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-md mb-8 sm:mb-10"
          >
            Curated by Orway. Premium Kalamkari, Tholu Bommalata, and authentic Indian crafts preserved across generations.
          </p>

          {/* CTA Buttons - Luxury Pill Style */}
          <div 
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#7e462d] hover:bg-[#683924] text-white font-cormorant text-sm sm:text-base tracking-[0.25em] uppercase font-medium transition-all duration-300 rounded-full shadow-2xl cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => {
                const element = document.getElementById("explore-world-section");
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 bg-black/40 hover:bg-black/65 border border-white/30 hover:border-white/60 text-white font-cormorant text-sm sm:text-base tracking-[0.2em] uppercase rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg"
            >
              <Compass className="w-4 h-4 text-[#b89650]" />
              <span>Discover Heritage</span>
            </button>
          </div>

        </div>
      </div>

      {/* Subtle Bottom-Right Replay Control (Only shown after loading finishes) */}
      {isIntroFinished && (
        <div className="absolute bottom-12 right-6 sm:bottom-16 sm:right-12 lg:right-16 z-30 pointer-events-auto">
          <button
            onClick={runAnimation}
            className="p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer flex items-center gap-2 group shadow-xl"
            title="Replay cinematic intro animation"
            aria-label="Replay intro animation"
          >
            <RotateCcw className="w-4 h-4 group-hover:-rotate-90 transition-transform duration-500 text-[#b89650]" />
            <span className="font-cormorant text-xs tracking-[0.2em] uppercase text-white/90 hidden sm:inline pr-1">
              Replay Intro
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
