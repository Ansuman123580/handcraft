import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { EXPLORE_VERTICALS } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

// Orway authentic Indian Jharokha Arch SVG path
const ARCH_PATH =
  "M487.003 1.7831C482.279 3.9701 478.878 7.5391 474.994 14.3871C463.023 35.4951 442.883 52.442 419.288 61.261C404.926 66.629 380.278 70.637 351.003 72.364C295.98 75.611 271.464 80.292 246.003 92.411C217.748 105.861 194.256 132.455 187.022 159.179L185.279 165.618L177.641 166.269C146.327 168.936 121.199 187.886 111.624 216.057L109.875 221.203L100.536 223.089C56.3591 232.014 17.6911 267.7 5.09409 311.17C-0.299909 329.783 0.0030909 307.138 0.0030909 691.886V1050.39L2.38709 1054.55C5.06509 1059.22 8.38509 1061.98 13.4021 1063.71C15.9831 1064.6 132.064 1064.89 495.538 1064.89H974.275L979.604 1062.1C983.919 1059.85 985.465 1058.3 987.719 1053.99L990.503 1048.66L990.495 695.522C990.489 462.347 990.14 339.33 989.468 333.387C984.915 293.176 960.709 256.766 924.995 236.414C912.72 229.419 902.431 225.829 881.918 221.384C880.484 221.073 879.439 219.598 878.571 216.659C876.558 209.848 870.82 199.66 865.07 192.689C852.289 177.194 834.205 168.129 812.365 166.269L804.727 165.618L802.984 159.179C795.866 132.883 772.495 106.148 744.973 92.818C720.789 81.105 697.213 76.294 647.311 72.891C595.385 69.35 576.717 65.649 556.916 54.968C541.504 46.655 526.806 33.2481 518.503 19.9281C510.925 7.77109 508.152 4.4771 503.527 2.1371C498.143 -0.585893 492.387 -0.709892 487.003 1.7831Z";

// Individual Heritage Arch SVG component
function ArchCard({ image, title, index, imgX = 0, imgY = 0, imgW = 991, imgH = 1065 }) {
  const clipId = `archClip-${index}`;
  const gradientId = `goldGradient-${index}`;

  return (
    <div className="relative w-full overflow-hidden transition-all duration-700 group-hover:-translate-y-2">
      <svg
        viewBox="0 0 991 1065"
        width="991"
        height="1065"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        className="filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)] group-hover:drop-shadow-[0_20px_35px_rgba(184,150,80,0.18)] transition-all duration-700"
      >
        <defs>
          <clipPath id={clipId}>
            <path d={ARCH_PATH} />
          </clipPath>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b89650" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#e2d4b7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#b89650" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Clipped image */}
        <image
          href={image}
          x={imgX}
          y={imgY}
          width={imgW}
          height={imgH}
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Elegant ornate inner hairline gold stroke */}
        <path
          d={ARCH_PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
          pointerEvents="none"
          transform="translate(495.5 532.5) scale(0.96) translate(-495.5 -532.5)"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

export default function ExploreWorld({ onSelectVertical }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.explore-card');
    const header = sectionRef.current.querySelector('.explore-header');

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Staggered cards reveal
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="explore-world-section"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5] overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="explore-header text-center mb-12 sm:mb-16">
          <p className="font-cormorant text-xs sm:text-sm tracking-[0.5em] uppercase text-[#b89650] mb-3 sm:mb-4 font-semibold">
            Discover
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#332f2b] tracking-wide">
            Explore Our World
          </h2>
          <div className="w-16 h-0.5 bg-[#b89650]/40 mx-auto mt-4" />
        </div>

        {/* 4 Architectural Heritage Jharokha Arch Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {EXPLORE_VERTICALS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onSelectVertical(item.path.replace('/', ''))}
              className="explore-card group block cursor-pointer"
            >
              {/* Ornate Indian Jharokha Arch Frame */}
              <ArchCard
                image={item.image}
                title={item.title}
                index={index}
                imgX={item.imgX}
                imgY={item.imgY}
                imgW={item.imgW}
                imgH={item.imgH}
              />

              {/* Typography & Editorial Details */}
              <div className="mt-5 sm:mt-6 text-left">
                <div className="flex items-center justify-between">
                  <p className="font-cormorant text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#b89650] font-semibold">
                    {item.label}
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-[#b89650] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                <h3 className="font-cinzel text-base sm:text-lg lg:text-xl text-[#332f2b] leading-snug mt-1 mb-2 group-hover:text-[#7e462d] transition-colors">
                  {item.title}
                </h3>

                <p className="font-lora text-xs sm:text-sm text-[#6e6761] leading-relaxed line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
