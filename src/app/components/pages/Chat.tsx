import { useState } from "react";
import { Send, User, Video, Phone, Calendar, Star, BrainCircuit } from "lucide-react";
import chatBg from "../../../imports/gery-wibowo-Eti6ph51H4A-unsplash.jpg";

export function Chat() {
  const [message, setMessage] = useState("");
  const [chatMode, setChatMode] = useState<"ai" | "advisor">("ai");

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] min-h-[700px] gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mentorship Hub</h1>
          <p className="text-slate-400">Connect with expert counselors, peers, and AI mentors.</p>
        </div>
        <div className="flex bg-black/40 p-1 rounded-xl border border-white/10 w-fit">
          <button 
            onClick={() => setChatMode('ai')}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${chatMode === 'ai' ? 'bg-[#00e5ff] text-[#13213A] shadow-md' : 'text-slate-400 hover:text-white'}`}
          >
            <BrainCircuit size={16} /> AI Guide
          </button>
          <button 
            onClick={() => setChatMode('advisor')}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${chatMode === 'advisor' ? 'bg-[#9810fa] text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
          >
            <User size={16} /> Human Advisor
          </button>
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-4 gap-6 min-h-0">
        {/* Contacts Sidebar */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 flex flex-col gap-6 overflow-y-auto">
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">AI Guides</h2>
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-gradient-to-r from-[#00e5ff]/20 to-transparent border border-[#00e5ff]/30 cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <div className="w-12 h-12 rounded-xl bg-[#00e5ff] flex items-center justify-center text-[#13213A] shadow-inner">
                <BrainCircuit size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Ocular AI</h3>
                <p className="text-xs font-medium text-[#00e5ff] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" /> Always Online
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Human Advisors</h2>
            <div className="space-y-2">
              {[
                { name: "Sarah Jenkins", role: "Sr. ML Engineer", status: "Online" },
                { name: "Dr. Alan Wei", role: "Career Counselor", status: "Offline" },
              ].map((adv, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-colors border border-transparent hover:border-white/10">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                      {adv.name.charAt(0)}
                    </div>
                    {adv.status === "Online" && <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#13213A]" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{adv.name}</h3>
                    <p className="text-xs text-slate-400">{adv.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto p-4 rounded-2xl bg-gradient-to-tr from-[#9810fa]/20 to-transparent border border-[#9810fa]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#9810fa] rounded-full blur-[30px] opacity-20" />
            <h4 className="font-bold text-white text-sm mb-2 relative z-10">Upcoming Webinar</h4>
            <p className="text-xs text-slate-300 mb-3 relative z-10">"Breaking into AI in 2026" with Sarah Jenkins.</p>
            <button className="w-full py-2 rounded-lg bg-[#9810fa] text-white text-xs font-bold hover:shadow-[0_0_15px_rgba(152,16,250,0.4)] transition-all relative z-10">
              RSVP Now
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl flex flex-col overflow-hidden relative shadow-2xl">
          <img src={chatBg} alt="Chat Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none mix-blend-overlay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00e5ff] rounded-full blur-[150px] opacity-10 pointer-events-none" />
          
          {/* Chat Header */}
          <div className="p-6 border-b border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between relative z-10">
            {chatMode === 'ai' ? (
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#00e5ff] to-[#0088ff] flex items-center justify-center text-[#13213A] shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                  <BrainCircuit size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Ocular AI Assistant</h2>
                  <p className="text-sm text-[#00e5ff] font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_5px_#00e5ff]" /> Active & Learning
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#9810fa] to-[#5800a8] flex items-center justify-center text-white shadow-[0_0_20px_rgba(152,16,250,0.3)] font-bold text-xl">
                  SJ
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Sarah Jenkins</h2>
                  <p className="text-sm text-[#9810fa] font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#9810fa] shadow-[0_0_5px_#9810fa]" /> Sr. ML Engineer
                  </p>
                </div>
              </div>
            )}
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#00e5ff] hover:text-[#13213A] transition-all text-white border border-white/10 hover:border-[#00e5ff] shadow-sm">
                <Video size={20} />
              </button>
              <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#00e5ff] hover:text-[#13213A] transition-all text-white border border-white/10 hover:border-[#00e5ff] shadow-sm">
                <Phone size={20} />
              </button>
              <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#00e5ff] hover:text-[#13213A] transition-all text-white border border-white/10 hover:border-[#00e5ff] shadow-sm">
                <Calendar size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-8 overflow-y-auto flex flex-col gap-6 relative z-10 scrollbar-hide">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00e5ff] flex items-center justify-center text-[#13213A] flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                <BrainCircuit size={20} />
              </div>
              <div className="bg-[#1a2d4c]/80 backdrop-blur-md border border-[#00e5ff]/30 rounded-2xl rounded-tl-none p-5 max-w-[80%] shadow-lg">
                <p className="text-base leading-relaxed text-white">Hello! I noticed you just updated your roadmap to focus on Machine Learning Basics. How can I assist you with that today? I can suggest specific tutorials or connect you with Sarah, our ML expert.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 flex-row-reverse">
              <div className="w-10 h-10 rounded-xl border-2 border-[#00e5ff] bg-black/40 flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-inner">
                <span className="font-bold">AC</span>
              </div>
              <div className="bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] rounded-2xl rounded-tr-none p-5 max-w-[80%] shadow-[0_10px_25px_rgba(0,229,255,0.25)]">
                <p className="text-base font-bold leading-relaxed">Could you provide some beginner-friendly resources for Scikit-Learn? I'm struggling a bit with the syntax.</p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-6 bg-black/40 backdrop-blur-xl border-t border-white/10 relative z-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask your AI guide or request a human advisor..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e5ff] focus:bg-white/10 transition-all shadow-inner text-base"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-[#00e5ff] flex items-center justify-center text-[#13213A] hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all">
                <Send size={20} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
