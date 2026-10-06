import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { JOURNAL_STORIES } from '../data/content';

export default function StoriesView({ onReadArticle }) {
  return (
    <div className="w-full pt-28 sm:pt-36 pb-32 px-6 lg:px-12 bg-[#0c0d0c] min-h-screen text-[#e6ded5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] block mb-3 font-medium">
            Chronicles of Craft
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#f4ede4] tracking-tight">
            Heritage Stories
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#b8ada0] mt-4 font-light">
            Essays on technique, material memory, and the enduring craft cultures of Madhya Pradesh.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {JOURNAL_STORIES.map((article) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="bg-[#121412] border border-[#242825] p-6 sm:p-8 flex flex-col justify-between group cursor-pointer hover:border-[#384039] transition-all"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0d0c] mb-6 border border-[#242825]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#0c0d0c]/85 text-[9px] uppercase tracking-[0.2em] text-[#c5a880] px-3 py-1 border border-[#29332b]">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#8e857b] mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{article.readTime}</span>
                </div>

                <h2 className="font-serif text-3xl font-light text-[#f4ede4] group-hover:text-white transition-colors mb-4">
                  {article.title}
                </h2>

                <p className="text-sm text-[#b8ada0] font-light leading-relaxed line-clamp-4">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#242825] flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] group-hover:text-[#f4ede4] inline-flex items-center space-x-2">
                  <span>Read Chronicle</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

