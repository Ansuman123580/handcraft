import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, BRAND_INFO } from '../data/content';

export default function InstagramShowcase() {
  return (
    <section className="w-full py-24 sm:py-32 px-6 lg:px-12 bg-[#0e100e] border-t border-[#242825]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-[#242825]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-3 font-medium">
              Social Journal
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] leading-tight">
              Follow The Craft
            </h2>
            <p className="font-serif italic text-xl text-[#c5a880] mt-2">
              {BRAND_INFO.instagram}
            </p>
          </div>

          <div className="mt-8 sm:mt-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.22em] text-[#f4ede4] hover:text-[#c5a880] transition-colors py-2 border-b border-[#242825] hover:border-[#c5a880]"
            >
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 6-Image Editorial Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#161817] border border-[#242825] block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
              />
              {/* Minimal Hover Overlay */}
              <div className="absolute inset-0 bg-[#0c0d0c]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-left">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#c5a880]">
                  {post.handle}
                </span>
                <p className="font-serif italic text-xs text-[#f4ede4] line-clamp-3">
                  "{post.caption}"
                </p>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#8e857b] flex items-center space-x-1">
                  <span>View Post</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

