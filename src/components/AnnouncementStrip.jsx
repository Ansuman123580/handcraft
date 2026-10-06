import React from 'react';

export default function AnnouncementStrip() {
  return (
    <div className="w-full bg-[#111311] border-y border-[#242825] py-3.5 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-6 sm:space-x-12 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#b3a89a] font-medium select-none">
        <span>CRAFTED BY LOCAL HANDS</span>
        <span className="text-[#c5a880] text-[9px]">•</span>
        <span>ROOTED IN TRADITION</span>
        <span className="text-[#c5a880] text-[9px]">•</span>
        <span className="hidden sm:inline">MADE IN MADHYA PRADESH</span>
        <span className="hidden sm:inline text-[#c5a880] text-[9px]">•</span>
        <span className="hidden md:inline">CRAFTED BY LOCAL HANDS</span>
      </div>
    </div>
  );
}

