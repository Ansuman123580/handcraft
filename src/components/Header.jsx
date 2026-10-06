import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header({ 
  activeView, 
  setActiveView, 
  onOpenSearch, 
  onOpenCart, 
  cartCount = 0 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (viewId, e) => {
    if (e) e.preventDefault();
    setActiveView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0c0d0c]/85 backdrop-blur-md border-b border-[#242825]/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Desktop Left Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[12px] uppercase tracking-[0.2em] font-medium text-[#c4b9ad]">
          <button 
            onClick={() => handleNavClick('sale')} 
            className="hover:text-[#f4ede4] transition-colors py-1 cursor-pointer flex items-center gap-1 group"
          >
            <span>On Sale</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b86b53] inline-block opacity-80 group-hover:scale-125 transition-transform" />
          </button>
          
          <button 
            onClick={() => handleNavClick('shop')} 
            className={`transition-colors py-1 cursor-pointer ${activeView === 'shop' ? 'text-[#f4ede4] border-b border-[#c5a880]' : 'hover:text-[#f4ede4]'}`}
          >
            Shop
          </button>
          
          <button 
            onClick={() => handleNavClick('artisans')} 
            className={`transition-colors py-1 cursor-pointer ${activeView === 'artisans' ? 'text-[#f4ede4] border-b border-[#c5a880]' : 'hover:text-[#f4ede4]'}`}
          >
            Artisans
          </button>
          
          <button 
            onClick={() => handleNavClick('stories')} 
            className={`transition-colors py-1 cursor-pointer ${activeView === 'stories' ? 'text-[#f4ede4] border-b border-[#c5a880]' : 'hover:text-[#f4ede4]'}`}
          >
            Stories
          </button>
        </nav>

        {/* Center Brand Identity */}
        <div className="flex-1 md:flex-initial text-center md:text-center">
          <button 
            onClick={() => handleNavClick('home')}
            className="group inline-flex flex-col items-center cursor-pointer text-left md:text-center focus:outline-none"
          >
            <span className="font-serif tracking-[0.28em] text-2xl lg:text-3xl font-light text-[#f4ede4] group-hover:text-white transition-colors">
              MAHUA
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#9a9186] font-medium mt-0.5">
              Madhya Pradesh
            </span>
          </button>
        </div>

        {/* Desktop Right Navigation */}
        <div className="hidden md:flex items-center space-x-7 text-[12px] uppercase tracking-[0.2em] font-medium text-[#c4b9ad]">
          <button 
            onClick={onOpenSearch} 
            className="hover:text-[#f4ede4] transition-colors flex items-center space-x-2 cursor-pointer py-1"
            aria-label="Search Collection"
          >
            <Search className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Search</span>
          </button>
          
          <button 
            onClick={onOpenCart} 
            className="hover:text-[#f4ede4] transition-colors flex items-center space-x-2 cursor-pointer py-1"
            aria-label="Curated Pieces"
          >
            <ShoppingBag className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="text-[10px] bg-[#222a23] text-[#e6ded5] px-1.5 py-0.2 border border-[#3b473d] rounded-sm font-sans">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex md:hidden items-center space-x-4">
          <button 
            onClick={onOpenCart} 
            className="p-2 text-[#dcd3c7] hover:text-white relative cursor-pointer"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#b86b53]" />
            )}
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#dcd3c7] hover:text-white cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Editorial Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e100f] border-b border-[#242825] px-6 py-8 flex flex-col space-y-6">
          <div className="flex flex-col space-y-5 text-sm uppercase tracking-[0.25em]">
            <button 
              onClick={() => handleNavClick('home')} 
              className="text-left text-[#f4ede4] py-1 border-b border-[#1f2320]"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('shop')} 
              className="text-left text-[#dcd3c7] hover:text-[#f4ede4] py-1 border-b border-[#1f2320]"
            >
              Shop Collection
            </button>
            <button 
              onClick={() => handleNavClick('artisans')} 
              className="text-left text-[#dcd3c7] hover:text-[#f4ede4] py-1 border-b border-[#1f2320]"
            >
              The Artisans
            </button>
            <button 
              onClick={() => handleNavClick('stories')} 
              className="text-left text-[#dcd3c7] hover:text-[#f4ede4] py-1 border-b border-[#1f2320]"
            >
              Heritage Stories
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-left text-[#dcd3c7] hover:text-[#f4ede4] py-1 border-b border-[#1f2320]"
            >
              About Mahua
            </button>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-[#1f2320] text-xs text-[#9a9186]">
            <button onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }} className="flex items-center space-x-2 tracking-widest uppercase">
              <Search className="w-3.5 h-3.5" />
              <span>Search Catalog</span>
            </button>
            <span className="font-serif italic text-sm text-[#c5a880]">Handmade by Local Artisans</span>
          </div>
        </div>
      )}
    </header>
  );
}

