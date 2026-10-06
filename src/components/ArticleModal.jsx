import React from 'react';
import { X, ArrowRight, Share2 } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function ArticleModal({ article, onClose, onExploreCollection }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#070807]/90 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 lg:p-10">
      <div className="relative w-full max-w-4xl bg-[#0f110f] border border-[#242825] shadow-2xl my-auto text-[#e6ded5] overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#242825] bg-[#0c0d0c]/60">
          <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.25em] text-[#c5a880]">
            <span>Journal Archive</span>
            <span>/</span>
            <span>{article.category || 'Artisan Portrait'}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#b8ada0] hover:text-[#f4ede4] hover:bg-[#1a1e1b] rounded-full transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 lg:p-14 space-y-8">
          
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-3 font-medium">
              {article.readTime ? `${article.readTime} • Chronicle` : article.location}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#f4ede4] leading-tight">
              {article.title || article.name}
            </h1>
            {article.craft && (
              <p className="font-serif italic text-lg text-[#b8ada0] mt-2">
                {article.craft} • {article.yearsOfPractice} of Practice
              </p>
            )}
          </div>

          {/* Full-width Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0c0d0c] border border-[#242825]">
            <img
              src={article.workshopImage || article.image}
              alt={article.title || article.name}
              className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05]"
            />
          </div>

          {/* Article Text */}
          <div className="space-y-6 text-sm sm:text-base text-[#c2b7ab] font-light leading-relaxed">
            {article.quote && (
              <blockquote className="p-6 bg-[#141714] border-l-2 border-[#c5a880] font-serif italic text-lg sm:text-xl text-[#f4ede4]">
                "{article.quote}"
              </blockquote>
            )}

            <p>{article.content || article.story}</p>

            <p className="text-[#8e857b]">
              At Mahua Crafts, we recognize that objects made with generational rhythm carry an energetic resonance that industrially fabricated goods can never replicate. When you acquire a piece, you participate directly in the sustenance of these cultural traditions across Madhya Pradesh.
            </p>
          </div>

          {/* Footer Actions */}
          <div className="pt-8 border-t border-[#242825] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#8e857b]">
              Published by Mahua Crafts Editorial Desk
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  onClose();
                  onExploreCollection();
                }}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-[#f4ede4] cursor-pointer"
              >
                <span>View Related Pieces</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

