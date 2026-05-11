import { BookOpen, Video, FileText, Download, ExternalLink, Search, Filter } from "lucide-react";

export function Resources() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Resource Library</h1>
          <p className="text-slate-400">Curated materials to accelerate your learning.</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search for courses, papers, or tutorials..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e5ff] transition-all"
          />
        </div>
        <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium">
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Video Courses", icon: <Video size={24} />, count: "142", color: "text-blue-400" },
          { title: "Documentation", icon: <FileText size={24} />, count: "89", color: "text-green-400" },
          { title: "Books & Papers", icon: <BookOpen size={24} />, count: "56", color: "text-orange-400" },
          { title: "Downloads", icon: <Download size={24} />, count: "24", color: "text-purple-400" },
        ].map((cat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer group">
            <div className={`mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
              {cat.icon}
            </div>
            <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
            <p className="text-sm text-slate-400">{cat.count} items</p>
          </div>
        ))}
      </div>

      {/* Recommended Now */}
      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Machine Learning Engineering for Production (MLOps)", type: "Specialization", provider: "DeepLearning.AI", level: "Advanced" },
            { title: "AWS Certified Machine Learning – Specialty", type: "Certification Prep", provider: "AWS", level: "Advanced" },
            { title: "Deep Learning Specialization", type: "Course Series", provider: "Coursera", level: "Intermediate" },
          ].map((res, i) => (
            <div key={i} className="bg-gradient-to-br from-[#1a2d4c] to-white/5 border border-white/10 rounded-2xl p-6 flex flex-col group hover:border-[#00e5ff]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-slate-300 uppercase tracking-wider">{res.type}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${res.level === 'Advanced' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  {res.level}
                </span>
              </div>
              <h3 className="font-bold text-xl mb-2 flex-1">{res.title}</h3>
              <p className="text-sm text-slate-400 mb-6">{res.provider}</p>
              
              <button className="w-full py-3 rounded-xl bg-white/10 text-white text-sm font-bold hover:bg-[#00e5ff] hover:text-[#13213A] transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                Access Resource <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
