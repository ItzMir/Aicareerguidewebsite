import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle, Circle, Play, BookOpen, Plus, Settings } from "lucide-react";

export function RoadmapDetail() {
  const [nodes] = useState([
    { id: 1, title: "Python Advanced Concepts", status: "completed", type: "core" },
    { id: 2, title: "Data Structures & Algorithms", status: "completed", type: "core" },
    { id: 3, title: "Machine Learning Basics", status: "active", type: "core" },
    { id: 4, title: "Deep Learning (Neural Networks)", status: "locked", type: "core" },
    { id: 5, title: "MLOps Fundamentals", status: "locked", type: "core" },
    { id: 6, title: "Cloud Deployment (AWS/GCP)", status: "locked", type: "core" },
  ]);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/portal/roadmaps" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-3xl font-bold">AI/ML Engineer Path</h1>
            <p className="text-slate-400">Mastering intelligent systems and deployment.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors text-sm font-medium flex items-center gap-2">
            <Settings size={16} /> Edit Path
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Interactive Map */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00e5ff]/5 via-transparent to-transparent pointer-events-none" />
          
          <h2 className="text-xl font-bold mb-8">Journey Map</h2>
          
          <div className="relative pl-8">
            {/* Connecting line */}
            <div className="absolute left-11 top-4 bottom-4 w-0.5 bg-white/10" />
            
            <div className="flex flex-col gap-6">
              {nodes.map((node, index) => (
                <div key={node.id} className="relative z-10 flex items-start gap-6 group">
                  <div className="flex-shrink-0 mt-1">
                    {node.status === "completed" ? (
                      <div className="w-8 h-8 rounded-full bg-[#00e5ff]/20 text-[#00e5ff] flex items-center justify-center border border-[#00e5ff]/50 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                        <CheckCircle size={18} />
                      </div>
                    ) : node.status === "active" ? (
                      <div className="w-8 h-8 rounded-full bg-[#9810fa]/20 text-[#9810fa] flex items-center justify-center border border-[#9810fa]/50 shadow-[0_0_15px_rgba(152,16,250,0.3)]">
                        <Play size={16} className="ml-0.5" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-black/40 text-slate-500 flex items-center justify-center border border-white/10">
                        <Circle size={16} />
                      </div>
                    )}
                  </div>
                  
                  <div className={`flex-1 p-5 rounded-2xl border ${node.status === "active" ? 'bg-gradient-to-r from-white/10 to-white/5 border-[#9810fa]/50' : node.status === "completed" ? 'bg-white/5 border-white/10 opacity-70' : 'bg-black/20 border-white/5 opacity-50'} transition-all hover:opacity-100 hover:bg-white/10 cursor-pointer`}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className={`font-bold text-lg ${node.status === "active" ? 'text-white' : 'text-slate-300'}`}>{node.title}</h3>
                      {node.status === "active" && <span className="text-xs font-bold px-2 py-1 bg-[#9810fa]/20 text-[#9810fa] rounded-full uppercase tracking-wider">In Progress</span>}
                    </div>
                    {node.status === "active" && (
                      <div className="mt-4 flex gap-3">
                        <button className="px-4 py-1.5 rounded-lg bg-[#9810fa] text-white text-xs font-bold hover:bg-[#850ddb] transition-colors">Mark Complete</button>
                        <button className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors flex items-center gap-1"><BookOpen size={14} /> Resources</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              <button className="ml-14 py-3 px-4 rounded-xl border border-dashed border-white/20 text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-sm max-w-xs">
                <Plus size={16} /> Add Custom Waypoint
              </button>
            </div>
          </div>
        </div>

        {/* Current Focus Panel */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-b from-[#1a2d4c] to-white/5 border border-[#9810fa]/30 rounded-3xl p-8 sticky top-32">
            <h2 className="text-sm font-bold text-[#9810fa] uppercase tracking-wider mb-2">Current Focus</h2>
            <h3 className="text-2xl font-bold text-white mb-4">Machine Learning Basics</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Understand supervised and unsupervised learning. Focus on regression, classification, and clustering algorithms using Scikit-Learn.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Suggested Resources</h4>
              {[
                { title: "Intro to ML by Andrew Ng", type: "Course" },
                { title: "Scikit-Learn Documentation", type: "Reading" },
              ].map((res, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <BookOpen size={16} className="text-[#00e5ff]" />
                    <span className="text-sm font-medium">{res.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-sm font-bold text-white mb-3">AI Advisor Insight</h4>
              <p className="text-xs text-slate-400 italic">"You've shown strong Python skills in your last waypoint. ML Basics should be a smooth transition. Focus heavily on understanding the math behind the models."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
