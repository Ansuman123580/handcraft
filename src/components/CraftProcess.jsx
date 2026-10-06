import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export default function CraftProcess() {
  return (
    <section className="w-full py-24 sm:py-32 px-6 lg:px-12 bg-[#0e100e] border-t border-[#242825]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-3 font-medium">
            The Making
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] leading-tight">
            From Hand<br />
            <span className="italic text-[#dcd3c7]">To Heritage</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8e857b] font-light mt-4">
            Four unhurried disciplines ensuring each piece is genuinely handmade with ancestral integrity.
          </p>
        </div>

        {/* Four Stages Grid with Thin Borders and Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-px bg-[#242825]">
          {PROCESS_STEPS.map((stage) => (
            <div
              key={stage.step}
              className="bg-[#121412] p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#161916] transition-colors duration-300"
            >
              <div>
                {/* Stage Number & Title */}
                <div className="flex items-center justify-between border-b border-[#242825] pb-4 mb-6">
                  <span className="font-serif text-3xl sm:text-4xl font-light text-[#c5a880]">
                    {stage.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#8e857b]">
                    Stage {stage.step}
                  </span>
                </div>

                {/* Stage Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0b0a] mb-6 border border-[#242825]">
                  <img
                    src={stage.image}
                    alt={`${stage.title} - ${stage.subtitle}`}
                    className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-serif text-2xl font-light text-[#f4ede4] mb-1">
                  {stage.title}
                </h3>
                <span className="font-serif italic text-sm text-[#c5a880] block mb-3">
                  {stage.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-[#9a9186] font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#242825]/60 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#8e857b]">
                <span>Artisan Discipline</span>
                <span>Genuine Handcraft</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

