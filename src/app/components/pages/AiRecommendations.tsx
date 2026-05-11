import { Link } from "react-router";
import { Sparkles, ArrowRight, Brain, Target, Compass, Search } from "lucide-react";

export function AiRecommendations() {
  const recommendations = [
    {
      id: "ai-engineer",
      title: "AI / Machine Learning Engineer",
      match: "94%",
      description: "Based on your strong Python fundamentals and math background, this path offers the highest growth trajectory.",
      skillsNeeded: ["Deep Learning", "TensorFlow", "MLOps"],
      color: "from-[#00e5ff] to-[#0088ff]"
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      match: "88%",
      description: "Leverages your analytical skills. Focuses on statistical modeling and business intelligence.",
      skillsNeeded: ["SQL", "Data Visualization", "R"],
      color: "from-[#9810fa] to-[#5800a8]"
    },
    {
      id: "full-stack",
      title: "Full Stack Developer",
      match: "82%",
      description: "A versatile path that utilizes your existing React knowledge while building backend expertise.",
      skillsNeeded: ["Node.js", "System Design", "Cloud AWS"],
      color: "from-[#00cce6] to-[#00b3cc]"
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="w-16 h-16 rounded-2xl bg-[#00e5ff]/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,229,255,0.3)]">
          <Brain size={32} className="text-[#00e5ff]" />
        </div>
        <h1 className="text-4xl font-bold mb-4">AI Trajectory Analysis</h1>
        <p className="text-lg text-slate-400">
          We've analyzed your skill tree, interests, and market trends. Here are the optimal career orbits tailored specifically for you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {recommendations.map((rec) => (
          <div key={rec.id} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col relative overflow-hidden group hover:border-[#00e5ff]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${rec.color}`} />
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-[#00e5ff]/10 transition-colors" />
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold flex items-center gap-1 backdrop-blur-md">
                <Target size={12} /> {rec.match} Match
              </span>
              <Sparkles size={20} className="text-[#00e5ff] opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>

            <h2 className="text-2xl font-bold mb-3 relative z-10">{rec.title}</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1 relative z-10">{rec.description}</p>
            
            <div className="mb-8 relative z-10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Key Skills to Acquire</p>
              <div className="flex flex-wrap gap-2">
                {rec.skillsNeeded.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-auto relative z-10">
              <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${rec.color} text-white font-bold text-sm hover:shadow-lg transition-all`}>
                Generate Roadmap
              </button>
              <Link 
                to={`/portal/recommendations/${rec.id}`}
                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
              >
                <Brain size={16} className="text-[#00e5ff]" /> Ask AI about this path
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Alternative Path Explorer */}
      <div className="mt-12 bg-gradient-to-r from-[#1a2d4c] to-[#13213A] border border-[#9810fa]/30 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#9810fa] rounded-full blur-[120px] opacity-20 pointer-events-none" />
        <div className="relative z-10 flex-1">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <Compass className="text-[#9810fa]" /> Looking for something else?
          </h2>
          <p className="text-slate-400 max-w-xl">
            Our AI recommendations are just the beginning. You can browse all available career paths, search by industry, and instantly see what it takes to transition.
          </p>
        </div>
        <div className="relative z-10 w-full md:w-auto">
          <Link 
            to="/portal/careers"
            className="w-full md:w-auto px-8 py-4 rounded-xl bg-white text-[#13213A] font-black text-sm hover:bg-[#9810fa] hover:text-white hover:shadow-[0_0_30px_rgba(152,16,250,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Search size={18} /> Choose Different Career Path <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
