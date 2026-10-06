import React from 'react';
import { X, Trash2, ArrowRight, MessageSquare, ShoppingBag } from 'lucide-react';
import { ORWAY_INFO } from '../data/content';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onSelectProduct }) {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  const handleOrderAllWhatsApp = () => {
    if (cartItems.length === 0) return;

    let itemsList = cartItems
      .map((item, idx) => `${idx + 1}. ${item.name} (${item.priceFormatted || '₹' + item.price}) - ${item.origin}`)
      .join('\n');

    const message = `Hello Orway Concierge, I would like to order the following handcrafted pieces:\n\n${itemsList}\n\nEstimated Total: ₹${totalAmount.toLocaleString('en-IN')}\n\nPlease confirm availability, bespoke packaging, and delivery timeframe.`;

    const cleanNumber = ORWAY_INFO.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#faf8f5] border-l border-[#e9e5dc] h-full flex flex-col justify-between p-6 sm:p-8 text-[#332f2b] shadow-2xl overflow-y-auto">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#e9e5dc]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#7e462d]" />
              <span className="font-cormorant text-xs uppercase tracking-[0.3em] text-[#7e462d] font-semibold">
                Shopping Bag ({cartItems.length})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6e6761] hover:text-[#332f2b] hover:bg-[#f3f0e8] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <span className="font-cinzel text-xl text-[#6e6761] block">
                Your bag is empty
              </span>
              <p className="font-lora text-xs text-[#a69f97] max-w-xs mx-auto">
                Explore our Tholu Bommalata leather lamps, Kalamkari wall art, and heritage crafts.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 p-3 bg-white border border-[#e9e5dc]"
                >
                  <div
                    onClick={() => {
                      onSelectProduct(item);
                      onClose();
                    }}
                    className="w-16 h-16 bg-[#f5f2ec] overflow-hidden flex-shrink-0 cursor-pointer"
                  >
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="font-cormorant text-[10px] uppercase tracking-wider text-[#b89650] block">
                      {item.craft}
                    </span>
                    <h4
                      onClick={() => {
                        onSelectProduct(item);
                        onClose();
                      }}
                      className="font-cinzel text-sm text-[#332f2b] truncate cursor-pointer hover:text-[#7e462d]"
                    >
                      {item.name}
                    </h4>
                    <span className="font-lora text-xs font-semibold text-[#7e462d]">
                      {item.priceFormatted || `₹${item.price.toLocaleString('en-IN')}`}
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveItem(index)}
                    className="p-1.5 text-[#a69f97] hover:text-[#7e462d] transition-colors cursor-pointer"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout */}
        {cartItems.length > 0 && (
          <div className="pt-6 border-t border-[#e9e5dc] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-cormorant uppercase tracking-wider text-xs text-[#6e6761]">Subtotal</span>
              <span className="font-cinzel text-xl text-[#332f2b]">₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>

            <p className="text-[11px] text-[#6e6761] leading-relaxed font-lora">
              Each piece is individually packed in archival presentation boxes with certified NFC authenticity seals.
            </p>

            <button
              onClick={handleOrderAllWhatsApp}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#7e462d] hover:bg-[#683924] text-white font-cormorant text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Checkout via WhatsApp Concierge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
