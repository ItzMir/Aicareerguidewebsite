import { Link } from "react-router";
import { Map, ArrowRight, Clock, Target, ShieldAlert } from "lucide-react";
import activeBg from "../../../imports/nik-z1d-LP8sjuI-unsplash.jpg";

export function CareerRoadmaps() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Roadmaps</h1>
        <p className="text-slate-400">Track and customize your journey towards your career goals.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Roadmap */}
        <div className="lg:col-span-2 rounded-3xl border border-[#00e5ff]/50 relative overflow-hidden group shadow-[0_0_40px_rgba(0,229,255,0.1)]">
          <img src={activeBg} alt="Active Roadmap Background" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#13213A] via-[#13213A]/90 to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff] rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <div className="p-8 relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#00e5ff] text-[#13213A] text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(0,229,255,0.8)]">Active Path</span>
                  <span className="text-slate-300 text-sm flex items-center gap-1 font-medium bg-black/40 px-3 py-1 rounded-full"><Clock size={14} /> Est. 8 months left</span>
                </div>
                <h2 className="text-4xl font-black text-white mb-3">AI/ML Engineer</h2>
                <p className="text-slate-300 max-w-md leading-relaxed">Focusing on deep learning, MLOps, and scalable model deployment architectures. You're doing great!</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#00e5ff]/20 border border-[#00e5ff]/50 flex items-center justify-center backdrop-blur-md">
                <Target size={28} className="text-[#00e5ff]" />
              </div>
            </div>

            <div>
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-white font-bold tracking-wider uppercase text-xs">Overall Progress</span>
                  <span className="text-[#00e5ff] font-black text-lg">45%</span>
                </div>
                <div className="w-full h-4 bg-black/60 rounded-full overflow-hidden border border-white/10 shadow-inner">
                  <div className="h-full bg-gradient-to-r from-[#0088ff] to-[#00e5ff] rounded-full shadow-[0_0_10px_rgba(0,229,255,0.5)] relative">
                    <div className="absolute top-0 bottom-0 right-0 w-4 bg-white/30 skew-x-12" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`w-12 h-12 rounded-full border-4 border-[#13213A] flex items-center justify-center text-sm font-bold shadow-lg ${i === 1 ? 'bg-[#00e5ff] text-[#13213A]' : i === 2 ? 'bg-white/20 text-white backdrop-blur-md' : 'bg-black/60 text-slate-400'}`}>
                        {i}
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-[#13213A] bg-black/60 text-slate-400 flex items-center justify-center text-sm font-bold backdrop-blur-md">
                      +4
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-300 hidden sm:block">Active Waypoints</span>
                </div>
                
                <Link 
                  to="/portal/roadmaps/1"
                  className="px-8 py-4 rounded-xl bg-white text-[#13213A] font-black text-sm hover:bg-[#00e5ff] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all duration-300 flex items-center gap-2"
                >
                  Continue Journey <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Create New / Alternative */}
        <div className="bg-white/5 border-2 border-white/10 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-[#9810fa]/50 transition-colors group cursor-pointer">
          <div className="w-20 h-20 rounded-full bg-black/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
            <Map size={32} className="text-slate-400 group-hover:text-[#9810fa] transition-colors" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Explore New Path</h3>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">Generate a new custom roadmap based on different career goals or evolving interests.</p>
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#9810fa] to-[#5800a8] text-white font-bold text-sm hover:shadow-[0_0_20px_rgba(152,16,250,0.5)] transition-all w-full">
            Generate with AI
          </button>
        </div>
      </div>

      {/* Suggested Pivots */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <ShieldAlert className="text-orange-400" />
          Suggested Pivots
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#1a2d4c] to-black/20 border border-orange-500/30 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl group-hover:bg-orange-500/40 transition-colors" />
            <h3 className="font-bold text-xl mb-2 text-white relative z-10">Data Engineer</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed relative z-10">60% skill overlap with your current path. High demand in the market right now.</p>
            <button className="w-full py-2.5 rounded-lg border border-orange-500/50 text-orange-400 font-bold hover:bg-orange-500/10 transition-colors relative z-10">
              Preview Alternate Path
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
