import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ORWAY_INFO } from '../data/content';

const NAV_ITEMS = [
  {
    label: "Home",
    path: "home",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
    desc: "Sacred motif & heritage craft"
  },
  {
    label: "Shop",
    path: "shop",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
    desc: "Curated handcrafted heirloom artifacts"
  },
  {
    label: "Masters Dome",
    path: "master-pavilion",
    img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85",
    desc: "Living archive of Indian master artisans"
  },
  {
    label: "Corporate & Events",
    path: "corporate-gifting",
    img: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=85",
    desc: "Bespoke gifting & experiential curation"
  },
  {
    label: "Experiences",
    path: "experiences",
    img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=85",
    desc: "Immersive workshops & live craft tours"
  },
  {
    label: "Artists",
    path: "artists",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85",
    desc: "Honoring national awardee craftspeople"
  },
  {
    label: "About Us",
    path: "about",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    desc: "Reviving indigenous arts of Madhya Pradesh"
  },
  {
    label: "Contact",
    path: "contact",
    img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
    desc: "Direct atelier & concierge consultation"
  }
];

export default function Navbar({
  activeView,
  setActiveView,
  onOpenSearch,
  onOpenCart,
  cartCount = 0,
  favoritesCount = 0,
  onOpenFavorites,
  isIntroLoading = false
}) {
  const [currentPreviewImg, setCurrentPreviewImg] = useState(NAV_ITEMS[0].img);
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const burgerRef = useRef(null);
  const labelMenuRef = useRef(null);
  const labelCloseRef = useRef(null);
  const shopRef = useRef(null);
  const navRef = useRef(null);
  const navBodyRef = useRef(null);
  const navImageRef = useRef(null);
  const navImageElRef = useRef(null);
  const bgRef = useRef(null);
  const timelineRef = useRef(null);

  // Initialize GSAP animation and per-character splitting
  useEffect(() => {
    if (!navBodyRef.current || !navRef.current) return;

    // Grab all nav links
    const navLinks = navBodyRef.current.querySelectorAll('.nav__link');
    const allChars = [];

    // Split text into per-character spans once
    navLinks.forEach((link) => {
      const rawText = link.getAttribute('data-title') || link.textContent.trim();
      link.textContent = '';
      rawText.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        link.appendChild(span);
        allChars.push(span);
      });
    });

    const footerItems = headerRef.current?.querySelectorAll('.nav__footer li') || [];

    // Set initial GSAP hidden states
    gsap.set(allChars, { y: '100%', opacity: 0 });
    gsap.set(footerItems, { y: '100%', opacity: 0 });

    const ease = 'power3.inOut';

    // Build timeline
    const tl = gsap.timeline({
      paused: true,
      onStart: () => {
        setIsOpen(true);
        if (bgRef.current) bgRef.current.style.pointerEvents = 'auto';
      },
      onReverseComplete: () => {
        setIsOpen(false);
        if (bgRef.current) bgRef.current.style.pointerEvents = 'none';
      }
    });

    tl
      /* Drop-down panel expands */
      .to(navRef.current, { height: 'auto', duration: 0.9, ease }, 0)

      /* Dark overlay slides down across screen */
      .to(bgRef.current, { height: '100vh', duration: 0.9, ease }, 0)

      /* Cross-fade toggle labels: Menu out, Close in */
      .to(labelMenuRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' }, 0)
      .to(labelCloseRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' }, 0)

      /* Fade out shop block */
      .to(shopRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' }, 0)

      /* Per-character staggered wave reveal */
      .to(
        allChars,
        { y: '0%', opacity: 1, duration: 0.85, ease, stagger: 0.015 },
        0.15
      )

      /* Footer items slide up */
      .to(
        footerItems,
        { y: '0%', opacity: 1, duration: 0.75, ease, stagger: 0.04 },
        0.35
      );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  // Handle menu toggle button click
  const handleToggle = () => {
    const tl = timelineRef.current;
    if (!tl) return;

    if (tl.reversed() || tl.progress() === 0) {
      burgerRef.current?.classList.add('header__burger--active');
      tl.play();
    } else {
      burgerRef.current?.classList.remove('header__burger--active');
      tl.reverse();
    }
  };

  // Close menu programmatically
  const closeMenu = () => {
    const tl = timelineRef.current;
    if (!tl) return;
    if (!tl.reversed() && tl.progress() > 0) {
      burgerRef.current?.classList.remove('header__burger--active');
      tl.reverse();
    }
  };

  // Handle link navigation
  const handleLinkClick = (path) => {
    setActiveView(path);
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Delegated mouseover for blurring other links & image swap
  const handleNavMouseOver = (e) => {
    const link = e.target.closest('.nav__link');
    if (!link || !navBodyRef.current) return;

    const hoveredIndex = link.dataset.index;
    const navLinks = navBodyRef.current.querySelectorAll('.nav__link');

    navLinks.forEach((other) => {
      const isHovered = other.dataset.index === hoveredIndex;
      gsap.to(other, {
        filter: isHovered ? 'blur(0px)' : 'blur(4px)',
        opacity: isHovered ? 1 : 0.35,
        duration: 0.3,
        overwrite: true
      });
    });

    const targetSrc = link.dataset.src;
    if (targetSrc) {
      setCurrentPreviewImg(targetSrc);
      if (navImageRef.current) {
        gsap.to(navImageRef.current, { opacity: 1, duration: 0.35, overwrite: true });
      }
    }
  };

  // Mouse leave resets blur and fades preview
  const handleNavMouseLeave = () => {
    if (!navBodyRef.current) return;
    const navLinks = navBodyRef.current.querySelectorAll('.nav__link');

    gsap.to(navLinks, {
      filter: 'blur(0px)',
      opacity: 1,
      duration: 0.3,
      overwrite: true
    });

    if (navImageRef.current) {
      gsap.to(navImageRef.current, { opacity: 0, duration: 0.35, overwrite: true });
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`olivier-header ${isOpen ? 'is-open' : ''} transition-all duration-500 ${
          isIntroLoading ? 'opacity-0 -translate-y-6 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="header__bar">
          {/* Logo on Left */}
          <button
            onClick={() => handleLinkClick('home')}
            className="header__logo group cursor-pointer focus:outline-none"
            aria-label="Orway Home"
          >
            <span className="font-cinzel text-xl sm:text-2xl tracking-[0.25em] font-medium text-[#1c1917] group-hover:text-[#7e462d] transition-colors">
              ORWAY
            </span>
            <span className="font-cormorant text-[8.5px] sm:text-[9.5px] tracking-[0.4em] uppercase text-[#b89650] -mt-1 font-semibold">
              Heritage Atelier
            </span>
          </button>

          {/* Centered Toggle (Burger + Menu/Close Label) */}
          <div
            ref={toggleRef}
            onClick={handleToggle}
            className="header__toggle"
            id="js-toggle"
            role="button"
            tabIndex={0}
            aria-label="Toggle Navigation Menu"
          >
            <div ref={burgerRef} className="header__burger" id="js-burger" />
            <div className="header__label">
              <p ref={labelMenuRef} className="header__label-text header__label-text--menu" id="js-label-menu">
                Menu
              </p>
              <p ref={labelCloseRef} className="header__label-text header__label-text--close" id="js-label-close">
                Close
              </p>
            </div>
          </div>

          {/* Shop + Cart on Right (Fades out when menu opens) */}
          <div ref={shopRef} className="header__shop" id="js-shop">
            <p
              onClick={() => handleLinkClick('shop')}
              className="header__shop-label"
            >
              Collection
            </p>
            <div
              onClick={onOpenCart}
              className="header__cart"
              role="button"
              tabIndex={0}
              aria-label="View Shopping Bag"
            >
              {/* Luxury Cart Icon */}
              <svg width="17" height="18" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z"
                  stroke="#1c1917"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Bag ({cartCount})</span>
            </div>
          </div>
        </div>

        {/* The Drop-Down Nav Panel */}
        <div ref={navRef} className="nav" id="js-nav">
          <div className="nav__wrapper">
            {/* Left Column: Nav Links + Metadata Footer */}
            <div className="nav__container">
              <div
                ref={navBodyRef}
                className="nav__body"
                id="js-nav-body"
                onMouseOver={handleNavMouseOver}
                onMouseLeave={handleNavMouseLeave}
              >
                {NAV_ITEMS.map((item, index) => (
                  <a
                    key={item.path}
                    href={`#${item.path}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.path);
                    }}
                    className={`nav__link group ${activeView === item.path ? 'font-semibold text-[#7e462d]' : ''}`}
                    data-index={index}
                    data-src={item.img}
                    data-title={item.label}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Nav Footer Metadata */}
              <div className="nav__footer">
                <ul>
                  <li>
                    <span>Origin:</span> Madhya Pradesh, India
                  </li>
                  <li>
                    <span>Tradition:</span> GI Craft & Tribal Art
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Mastery:</span> Batua • Zari • Bell Metal
                  </li>
                  <li>
                    <span>Atelier:</span> Bhopal & Jabalpur
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Concierge:</span> {ORWAY_INFO.phone}
                  </li>
                  <li>
                    <span>Email:</span> {ORWAY_INFO.email}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href={`https://wa.me/${ORWAY_INFO.phone.replace(/[^0-9]/g, '')}?text=Hello%20Orway%20Concierge`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#7e462d] transition-colors"
                    >
                      WhatsApp Atelier →
                    </a>
                  </li>
                  <li>
                    <span className="text-[10px] text-[#9f9689]">Orway Handcrafted Luxury</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Preview Image that swaps & fades in on hover */}
            <div ref={navImageRef} className="nav__image" id="js-nav-image">
              <img
                ref={navImageElRef}
                src={currentPreviewImg}
                alt="Orway Handcrafted Preview"
                id="js-nav-image-el"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none flex items-end p-6">
                <span className="text-white font-cinzel text-xs tracking-[0.2em] uppercase drop-shadow-md">
                  Heritage Craft Archive
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dark overlay backdrop that slides down */}
      <div
        ref={bgRef}
        onClick={closeMenu}
        className="header__background"
        id="js-background"
        aria-hidden="true"
      />
    </>
  );
}
