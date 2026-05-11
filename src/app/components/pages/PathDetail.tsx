import { Link, useParams } from "react-router";
import { Brain, ArrowLeft, CheckCircle, Target, Sparkles, TrendingUp } from "lucide-react";
import detailBg from "../../../imports/nik-z1d-LP8sjuI-unsplash.jpg";

export function PathDetail() {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-8">
      <Link to="/portal/recommendations" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors w-fit">
        <ArrowLeft size={16} /> Back to Recommendations
      </Link>

      <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 p-10 md:p-16">
        <img src={detailBg} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13213A] via-[#13213A]/90 to-[#13213A]/40" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/20 text-[#00e5ff] text-sm font-bold mb-6">
              <Brain size={16} /> AI Analysis Report
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">AI / Machine Learning Engineer</h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              This role focuses on designing and deploying scalable machine learning models. You'll work with massive datasets, optimize neural networks, and put algorithms into production environments.
            </p>
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all flex items-center gap-2">
              <Target size={18} /> Generate Roadmap for this Path
            </button>
          </div>
          
          <div className="w-full md:w-[350px] bg-black/40 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2"><TrendingUp className="text-[#00e5ff]" /> Market Outlook</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Avg Starting Salary</p>
                <p className="text-2xl font-bold text-white">$125,000</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Growth (Next 5 Yrs)</p>
                <p className="text-2xl font-bold text-green-400">+42%</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Your Match Score</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[94%] h-full bg-[#00e5ff]" />
                  </div>
                  <span className="text-sm font-bold text-[#00e5ff]">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Aligned Skills */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="text-green-400" /> What You Already Have
          </h2>
          <p className="text-sm text-slate-400 mb-6">These extracted skills from your profile map perfectly to this career.</p>
          <div className="grid grid-cols-2 gap-4">
            {['Python', 'Data Structures', 'Git & GitHub', 'Linear Algebra'].map(skill => (
              <div key={skill} className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-sm font-medium text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="text-orange-400" /> What You Need to Learn
          </h2>
          <p className="text-sm text-slate-400 mb-6">Our generated roadmap will focus heavily on helping you acquire these.</p>
          <div className="grid grid-cols-2 gap-4">
            {['Deep Learning', 'PyTorch/TensorFlow', 'MLOps (Docker/AWS)', 'Vector Databases'].map(skill => (
              <div key={skill} className="flex items-center gap-3 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <Target size={16} className="text-orange-400" />
                <span className="text-sm font-medium text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
