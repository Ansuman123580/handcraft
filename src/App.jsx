import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ExploreWorld from './components/ExploreWorld';
import CommitmentSection from './components/CommitmentSection';
import FeaturedCrafts from './components/FeaturedCrafts';
import VerticalShowcase from './components/VerticalShowcase';
import Testimonials from './components/Testimonials';
import CraftStoryBanner from './components/CraftStoryBanner';
import Footer from './components/Footer';

import ShopPage from './components/ShopPage';
import MastersDomePage from './components/MastersDomePage';
import CorporateGiftingPage from './components/CorporateGiftingPage';
import ExperiencesPage from './components/ExperiencesPage';
import ArtistsPage from './components/ArtistsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

import ProductDetailModal from './components/ProductDetailModal';
import SearchDrawer from './components/SearchDrawer';
import CartDrawer from './components/CartDrawer';
import PolicyModal from './components/PolicyModal';

import { FEATURED_PRODUCTS } from './data/content';

export default function App() {
  const [activeView, setActiveView] = useState('home'); 
  // 'home' | 'shop' | 'master-pavilion' | 'corporate-gifting' | 'experiences' | 'artists' | 'about' | 'contact'

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState(null);
  const [isIntroLoading, setIsIntroLoading] = useState(true);

  // Strictly lock body & HTML scroll during loading animation
  useEffect(() => {
    if (activeView === 'home' && isIntroLoading) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [activeView, isIntroLoading]);

  // Cart & Wishlist state
  const [cartItems, setCartItems] = useState([
    FEATURED_PRODUCTS[0] // Pre-load 1 iconic lamp for immediate richness
  ]);
  const [favorites, setFavorites] = useState([FEATURED_PRODUCTS[0].id]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleToggleFavorite = (productId) => {
    setFavorites((prev) => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const handleNavigate = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#332f2b] flex flex-col justify-between selection:bg-[#7e462d]/20 selection:text-[#7e462d]">
      
      {/* Top Fixed Navbar - Hidden during intro loading for pure distraction-free animation */}
      <Navbar
        activeView={activeView}
        setActiveView={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.length}
        favoritesCount={favorites.length}
        onOpenFavorites={() => handleNavigate('shop')}
        isIntroLoading={activeView === 'home' && isIntroLoading}
      />

      {/* Main Content Router */}
      <main className="flex-1 w-full">
        
        {/* 1. HOMEPAGE */}
        {activeView === 'home' && (
          <>
            {/* Cinematic Hero: ONLY image loading animation during intro, zero text */}
            <HeroBanner 
              onExplore={() => handleNavigate('shop')} 
              onIntroStatusChange={(isFinished) => setIsIntroLoading(!isFinished)}
            />

            {/* Discover: Explore Our World (4 Verticals) */}
            <ExploreWorld onSelectVertical={(v) => handleNavigate(v)} />

            {/* Commitment: Every Purchase Makes an Impact (Navy) */}
            <CommitmentSection onLearnMore={() => handleNavigate('about')} />

            {/* Featured Crafts Grid */}
            <FeaturedCrafts
              onSelectProduct={(p) => setSelectedProduct(p)}
              onExploreAll={() => handleNavigate('shop')}
            />

            {/* Vertical Showcase: The Makers, Masters Dome, Gifting Banners */}
            <VerticalShowcase
              onSelectArtist={() => handleNavigate('artists')}
              onMeetAllArtists={() => handleNavigate('artists')}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onExploreMastersDome={() => handleNavigate('master-pavilion')}
              onCorporateGifting={() => handleNavigate('corporate-gifting')}
              onExperiences={() => handleNavigate('experiences')}
            />

            {/* Voices of Trust: Testimonials */}
            <Testimonials />

            {/* Heritage & Legacy: Preserving Living Craft Traditions Banner (Navy) */}
            <CraftStoryBanner onOurStory={() => handleNavigate('about')} />
          </>
        )}

        {/* 2. THE SHOP PAGE */}
        {activeView === 'shop' && (
          <div className="pt-20">
            <ShopPage onSelectProduct={(p) => setSelectedProduct(p)} />
          </div>
        )}

        {/* 3. MASTERS DOME (Museum Grade Collection) */}
        {activeView === 'master-pavilion' && (
          <div className="pt-20">
            <MastersDomePage
              onSelectProduct={(p) => setSelectedProduct(p)}
              onStartConsultation={() => handleNavigate('contact')}
            />
          </div>
        )}

        {/* 4. CORPORATE & EVENTS GIFTING */}
        {activeView === 'corporate-gifting' && (
          <div className="pt-20">
            <CorporateGiftingPage />
          </div>
        )}

        {/* 5. EXPERIENCES (Live Workshops & Puppetry) */}
        {activeView === 'experiences' && (
          <div className="pt-20">
            <ExperiencesPage />
          </div>
        )}

        {/* 6. ARTISTS DIRECTORY */}
        {activeView === 'artists' && (
          <div className="pt-20">
            <ArtistsPage
              onSelectArtist={() => handleNavigate('shop')}
              onExploreWorks={() => handleNavigate('shop')}
            />
          </div>
        )}

        {/* 7. ABOUT US (Craft & Purpose) */}
        {activeView === 'about' && (
          <div className="pt-20">
            <AboutPage onExploreCollection={() => handleNavigate('shop')} />
          </div>
        )}

        {/* 8. CONTACT US */}
        {activeView === 'contact' && (
          <div className="pt-20">
            <ContactPage />
          </div>
        )}

      </main>

      {/* Footer matching Orway */}
      <Footer
        onNavClick={handleNavigate}
        onOpenPolicy={(policyType) => setActivePolicy(policyType)}
      />

      {/* MODALS & DRAWERS */}
      
      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={selectedProduct ? favorites.includes(selectedProduct.id) : false}
      />

      {/* Instant Search Drawer */}
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectArtist={() => {
          setIsSearchOpen(false);
          handleNavigate('artists');
        }}
      />

      {/* Shopping Bag Drawer with WhatsApp Order */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Policy Modal */}
      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

    </div>
  );
}
