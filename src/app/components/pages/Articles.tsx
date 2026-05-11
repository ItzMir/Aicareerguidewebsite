import { useState } from "react";
import { BookOpen, TrendingUp, Briefcase, Code, Search, Clock, User } from "lucide-react";
import articlesHero from "../../../imports/sincerely-media-dGxOgeXAXm8-unsplash.jpg";
import aiImg from "../../../imports/microsoft-copilot-Z38ADyUhN6s-unsplash__1_.jpg";

export function PublicArticles() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Articles", icon: <BookOpen size={16} /> },
    { id: "career", label: "Career Tips", icon: <Briefcase size={16} /> },
    { id: "tech", label: "Tech Trends", icon: <Code size={16} /> },
    { id: "skills", label: "Skill Building", icon: <TrendingUp size={16} /> }
  ];

  const featuredArticles = [
    {
      title: "Breaking into AI in 2026: A Complete Roadmap",
      category: "career",
      excerpt: "Discover the essential skills, certifications, and strategies you need to land your first AI role in today's competitive market.",
      author: "Dr. Sarah Chen",
      readTime: "12 min",
      date: "May 8, 2026",
      image: aiImg,
      featured: true
    },
    {
      title: "The Rise of Quantum Computing Careers",
      category: "tech",
      excerpt: "Quantum computing is no longer science fiction. Learn how to position yourself for this emerging field.",
      author: "Marcus Rivera",
      readTime: "8 min",
      date: "May 6, 2026",
      featured: false
    },
    {
      title: "Mastering Technical Interviews: Insider Tips",
      category: "skills",
      excerpt: "Former FAANG engineers share their proven strategies for acing coding interviews and behavioral rounds.",
      author: "Aisha Patel",
      readTime: "15 min",
      date: "May 4, 2026",
      featured: false
    },
    {
      title: "Remote Work Skills Every Graduate Needs",
      category: "career",
      excerpt: "The future of work is hybrid. Here's how to stand out as a remote-first professional.",
      author: "Dr. Alan Wei",
      readTime: "6 min",
      date: "May 1, 2026",
      featured: false
    },
    {
      title: "Cloud Computing Certifications Worth Your Time",
      category: "tech",
      excerpt: "Not all certifications are created equal. We break down which cloud certs actually boost your career.",
      author: "Sarah Jenkins",
      readTime: "10 min",
      date: "Apr 29, 2026",
      featured: false
    },
    {
      title: "Building a Portfolio That Gets You Hired",
      category: "skills",
      excerpt: "Your GitHub and personal projects can be your secret weapon. Learn how to showcase them effectively.",
      author: "Marcus Rivera",
      readTime: "9 min",
      date: "Apr 27, 2026",
      featured: false
    }
  ];

  const filteredArticles = activeCategory === "all"
    ? featuredArticles
    : featuredArticles.filter(article => article.category === activeCategory);

  return (
    <div className="flex flex-col gap-10 pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] rounded-3xl overflow-hidden border border-white/10">
        <img src={articlesHero} alt="Articles" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13213A] via-[#13213A]/90 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-16">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-sm font-bold mb-4">
              Career Insights
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Expert Advice for Your <span className="bg-gradient-to-r from-[#00e5ff] to-[#0088ff] bg-clip-text text-transparent">Career Journey</span>
            </h1>
            <p className="text-lg text-slate-300 mb-6">
              Curated articles from industry leaders, career counselors, and AI experts to help you navigate your professional path.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles by topic or keyword..."
                className="w-full bg-black/40 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e5ff] backdrop-blur-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
              activeCategory === cat.id
                ? 'bg-[#00e5ff] text-[#13213A] shadow-[0_0_20px_rgba(0,229,255,0.3)]'
                : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      {filteredArticles.some(a => a.featured) && (
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl relative group hover:border-[#00e5ff]/50 transition-colors">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-[400px] md:h-auto">
              <img src={filteredArticles[0].image} alt={filteredArticles[0].title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#13213A]/60 to-transparent md:hidden" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full bg-[#9810fa] text-white text-xs font-bold shadow-lg">FEATURED</span>
              </div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="inline-block w-fit px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-bold mb-4 uppercase tracking-wider">
                Career Tips
              </div>
              <h2 className="text-3xl font-bold mb-4 leading-tight group-hover:text-[#00e5ff] transition-colors">
                {filteredArticles[0].title}
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                {filteredArticles[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {filteredArticles[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {filteredArticles[0].readTime} read
                </div>
                <div>{filteredArticles[0].date}</div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold rounded-xl hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all w-fit">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.slice(1).map((article, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:bg-white/10 transition-all group cursor-pointer hover:border-[#00e5ff]/30">
            <div className="relative h-48 bg-gradient-to-br from-[#1a2d4c] to-[#13213A] overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  article.category === 'career' ? 'bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/30' :
                  article.category === 'tech' ? 'bg-[#9810fa]/20 text-[#9810fa] border border-[#9810fa]/30' :
                  'bg-white/20 text-white border border-white/30'
                }`}>
                  {article.category.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#00e5ff] transition-colors">
                {article.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <User size={14} />
                  {article.author}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-[#00e5ff]/10 to-[#9810fa]/10 border border-white/10 rounded-3xl p-10 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff] rounded-full blur-[120px] opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <BookOpen size={48} className="mx-auto mb-4 text-[#00e5ff]" />
          <h2 className="text-3xl font-bold mb-4">Never Miss an Insight</h2>
          <p className="text-slate-300 mb-6 text-lg">
            Subscribe to our weekly newsletter and get the latest career advice, industry trends, and success stories delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-black/40 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e5ff] backdrop-blur-md"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold rounded-xl hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
