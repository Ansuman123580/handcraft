import React from 'react';
import { ArrowRight } from 'lucide-react';
import { JOURNAL_STORIES } from '../data/content';

export default function JournalSection({ onReadArticle, onViewAllStories }) {
  return (
    <section className="w-full py-24 sm:py-32 px-6 lg:px-12 bg-[#0c0d0c] border-t border-[#242825]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#242825]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-3 font-medium">
              Editorial Journal
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] leading-tight">
              Stories
            </h2>
            <p className="text-sm sm:text-base text-[#8e857b] font-light mt-3">
              Chronicles of craftsmanship, cultural memory, and the land of Mahua.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <button
              onClick={onViewAllStories}
              className="text-xs uppercase tracking-[0.2em] text-[#f4ede4] hover:text-[#c5a880] transition-colors cursor-pointer py-1 border-b border-[#242825] hover:border-[#c5a880]"
            >
              All Journal Entries
            </button>
          </div>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {JOURNAL_STORIES.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer flex flex-col justify-between bg-[#121412] border border-[#242825] p-5 hover:border-[#384039] transition-all duration-300"
              onClick={() => onReadArticle(article)}
            >
              <div>
                {/* Journal Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#0a0b0a] mb-5 border border-[#242825]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-[#0c0d0c]/80 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-[#c5a880] px-2.5 py-0.5 border border-[#29332b]">
                    {article.category}
                  </span>
                </div>

                {/* Metadata */}
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#8e857b] mb-2">
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>Journal</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-light text-[#f4ede4] group-hover:text-white transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#8e857b] font-light leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Story Button */}
              <div className="pt-5 mt-5 border-t border-[#242825] flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#c5a880] group-hover:text-[#f4ede4] transition-colors inline-flex items-center space-x-2">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

