'use client';

import { useMemo, useState } from 'react';
import { aiTools } from '@/data/aiTools';

const categories = ['All', ...new Set(aiTools.map((tool) => tool.category))];

const stats = [
  { label: 'AI tools listed', value: '128' },
  { label: 'Avg. rating', value: '4.8/5' },
  { label: 'Categories', value: '16' },
  { label: 'Updated weekly', value: '24/7' },
];

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = useMemo(() => {
    return aiTools.filter((tool) => {
      const matchesQuery =
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || tool.category === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  const featuredTools = aiTools.filter((tool) => tool.featured).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-base font-bold text-white shadow-glow">
              A
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">AI Tools Hub</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Curated Marketplace
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#discover" className="transition hover:text-white">Discover</a>
            <a href="#categories" className="transition hover:text-white">Categories</a>
            <a href="#catalog" className="transition hover:text-white">Catalog</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
          </nav>

          <button className="rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400">
            Submit Tool
          </button>
        </div>
      </header>

      <section id="discover" className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-indigo-200">
              128 AI tools indexed
            </span>

            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
              Find the best AI tools for your next breakthrough.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Compare the most powerful AI products for writing, design, research,
              coding, marketing, automation, and business growth in one place.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search AI tools, categories, or use cases..."
                className="w-full rounded-full border border-white/10 bg-slate-900/80 px-5 py-3.5 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none"
              />
              <button className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                Explore
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-5 shadow-glow">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Trending now</div>
                <div className="mt-2 text-xl font-bold text-white">Top categories</div>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Live
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['AI Writing', '24 tools'],
                ['Image Generation', '18 tools'],
                ['Video AI', '16 tools'],
                ['Coding Assistant', '14 tools'],
                ['Research', '12 tools'],
                ['Marketing AI', '19 tools'],
              ].map(([label, count]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="text-sm text-slate-300">{label}</div>
                  <div className="mt-3 text-2xl font-black text-white">{count}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-4">
              <div className="text-sm text-indigo-200">Most loved tool</div>
              <div className="mt-1 text-2xl font-bold text-white">ChatGPT</div>
              <div className="mt-2 text-sm text-slate-300">Best for research, writing, and day-to-day productivity.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Categories</div>
            <h2 className="mt-2 text-3xl font-bold text-white">Explore by use case</h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? 'border-indigo-400 bg-indigo-500 text-white'
                  : 'border-white/10 bg-slate-900/60 text-slate-300 hover:border-slate-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Featured</div>
            <h2 className="mt-2 text-3xl font-bold text-white">Hand-picked tools</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <div key={tool.id} className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-200">
                  {tool.category}
                </span>
                <span className="text-sm text-amber-300">★ {tool.rating}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">{tool.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{tool.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={`${tool.id}-${tag}`} className="rounded-full bg-white/5 px-2 py-1 text-[11px] uppercase tracking-[0.1em] text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-emerald-300">{tool.pricing}</span>
                <button className="rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/5">
                  View tool
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Catalog</div>
            <h2 className="mt-2 text-3xl font-bold text-white">All AI tools</h2>
          </div>
          <div className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-300">
            Showing {filteredTools.length} tools
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-slate-900">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-indigo-200">
                  {tool.category}
                </span>
                <span className="text-xs font-medium text-amber-300">★ {tool.rating}</span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-white">{tool.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{tool.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={`${tool.id}-${tag}`} className="rounded-full bg-white/5 px-2 py-1 text-[11px] text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Pricing</div>
                  <div className="mt-1 text-sm font-semibold text-emerald-300">{tool.pricing}</div>
                </div>
                <button className="rounded-full bg-white px-3.5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
                  Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[28px] border border-indigo-400/20 bg-gradient-to-r from-indigo-500/15 via-slate-900 to-cyan-500/10 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-indigo-200">Stay updated</div>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Get the newest AI tools and reviews every week.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <input
                placeholder="Your email"
                className="rounded-full border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none"
              />
              <button className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="font-medium text-slate-200">AI Tools Hub</div>
          <div className="flex gap-6">
            <a href="#discover" className="hover:text-white">Discover</a>
            <a href="#catalog" className="hover:text-white">Catalog</a>
            <a href="#pricing" className="hover:text-white">Newsletter</a>
          </div>
          <div>© 2026 AI Tools Hub. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
