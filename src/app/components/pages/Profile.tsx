import { Upload, FileText, CheckCircle, Brain, Plus } from "lucide-react";
import profileImg from "../../../imports/resume-genius-9si2noVCVH8-unsplash.jpg";

export function Profile() {
  return (
    <div className="flex flex-col gap-8">
      {/* Dynamic Header */}
      <div className="relative w-full h-[250px] rounded-3xl overflow-hidden border border-white/10 flex items-center justify-between px-10">
        <img src={profileImg} alt="Profile background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13213A] via-[#13213A]/80 to-transparent" />
        
        <div className="relative z-10 flex items-center gap-6">
          <div className="w-24 h-24 rounded-full border-4 border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.4)] overflow-hidden bg-[#1a2d4c] flex items-center justify-center">
            <span className="text-3xl font-black text-white">AC</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Alex Carter</h1>
            <p className="text-[#00e5ff] font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
              Computer Science Undergraduate
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors text-sm font-bold backdrop-blur-md">
            Save Profile Changes
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Personal Info */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00e5ff] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
              <FileText className="text-[#00e5ff]" />
              Basic Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Full Name</label>
                <input type="text" defaultValue="Alex Carter" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00e5ff] focus:outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Current Education Level</label>
                <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00e5ff] focus:outline-none transition-colors appearance-none">
                  <option>Undergraduate - Junior</option>
                  <option>Undergraduate - Senior</option>
                  <option>Graduate</option>
                  <option>High School</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Major / Field of Study</label>
                <input type="text" defaultValue="Computer Science" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00e5ff] focus:outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Target Role</label>
                <input type="text" defaultValue="Machine Learning Engineer" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00e5ff] focus:outline-none transition-colors" />
              </div>
            </div>
          </section>

          {/* Documents */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Upload className="text-[#00e5ff]" />
              Document Uploads
            </h2>
            <p className="text-sm text-slate-400 mb-6">Upload your resume, transcripts, or portfolio. AI will automatically extract your skills.</p>
            
            <div className="border-2 border-dashed border-[#00e5ff]/30 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-[#00e5ff]/70 hover:bg-[#00e5ff]/5 transition-all cursor-pointer group bg-black/20">
              <div className="w-16 h-16 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Upload size={28} className="text-[#00e5ff]" />
              </div>
              <p className="font-bold text-white mb-2 text-lg">Drag and drop your files here</p>
              <p className="text-sm text-slate-500">Supported formats: PDF, DOCX (Max 10MB)</p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#00e5ff]/10 to-transparent border border-[#00e5ff]/30">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-[#00e5ff]" />
                  <span className="text-sm font-medium">Alex_Carter_Resume_2026.pdf</span>
                </div>
                <CheckCircle size={18} className="text-[#00e5ff]" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/10">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-slate-400" />
                  <span className="text-sm font-medium text-slate-300">University_Transcript.pdf</span>
                </div>
                <CheckCircle size={18} className="text-slate-500" />
              </div>
            </div>
          </section>
        </div>

        {/* Extracted Skills Side Panel */}
        <div className="flex flex-col gap-6">
          <section className="bg-gradient-to-b from-[#1a2d4c] to-white/5 border border-[#9810fa]/30 rounded-3xl p-8 backdrop-blur-xl sticky top-32 shadow-[0_10px_40px_rgba(152,16,250,0.1)]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Brain className="text-[#9810fa]" />
                AI Skill Map
              </h2>
              <span className="text-xs px-3 py-1 rounded-full bg-[#9810fa]/20 text-[#9810fa] font-bold border border-[#9810fa]/30">Synched</span>
            </div>
            
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'React', 'TensorFlow', 'SQL'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-sm font-medium text-[#00e5ff] shadow-inner">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Leadership', 'Agile', 'Public Speaking'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm font-medium text-slate-300">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-6 border-t border-white/10 text-center">
                <p className="text-xs text-slate-400 italic mb-4">"Your profile shows strong backend fundamentals. We're tuning your roadmaps to prioritize AI integration."</p>
                <button className="w-full py-3 rounded-xl border border-dashed border-[#9810fa]/50 text-[#9810fa] hover:bg-[#9810fa]/10 transition-all flex items-center justify-center gap-2 text-sm font-bold">
                  <Plus size={16} /> Add Custom Skill
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
