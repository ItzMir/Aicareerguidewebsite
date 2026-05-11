import { Target, ListTodo, Trophy, Briefcase, Calendar, Bell, CheckCircle } from "lucide-react";
import dashBg from "../../../imports/pang-yuhao-_kd5cxwZOK4-unsplash__1_.jpg";

export function StudentDashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header Banner */}
      <div className="relative w-full h-[220px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
        <img src={dashBg} alt="Dashboard Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13213A] to-[#13213A]/50" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff] rounded-full blur-[100px] opacity-20 pointer-events-none" />
        
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black mb-2 text-white">Welcome back, Alex</h1>
            <p className="text-[#00e5ff] font-medium flex items-center gap-2">
              <Target size={16} /> Focus Mode: Deep Learning Architect
            </p>
          </div>
          <div className="flex items-center gap-4 bg-black/40 p-4 rounded-2xl backdrop-blur-md border border-white/5">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Roadmap Progress</p>
              <div className="flex items-center gap-3">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0088ff] to-[#00e5ff] w-[45%]" />
                </div>
                <span className="text-white font-bold text-sm">45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column: Tasks & Skills */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* To-Do List */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition-colors group">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ListTodo className="text-[#00e5ff]" /> Immediate Actions
              </h2>
              <span className="px-3 py-1 rounded-full bg-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold">3 Pending</span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { task: "Complete 'Neural Networks Basics' module", time: "Today", done: false },
                { task: "Upload updated resume for AI analysis", time: "Tomorrow", done: false },
                { task: "Schedule 1-on-1 with Advisor Sarah", time: "This week", done: false },
                { task: "Review Python syntax refresher", time: "Done", done: true },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${item.done ? 'bg-black/20 border-white/5 opacity-50' : 'bg-[#1a2d4c]/50 border-[#00e5ff]/20 hover:border-[#00e5ff]/50'}`}>
                  <button className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${item.done ? 'border-green-500 bg-green-500 text-white' : 'border-slate-500 hover:border-[#00e5ff]'}`}>
                    {item.done && <CheckCircle size={14} />}
                  </button>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${item.done ? 'line-through text-slate-400' : 'text-white'}`}>{item.task}</p>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities Tab */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-[#9810fa]" /> Opportunities & Matches
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Summer ML Internship", org: "TechNova Corp", match: "92%", type: "Internship" },
                { title: "Data Science Hackathon", org: "Global AI Alliance", match: "88%", type: "Event" },
              ].map((opp, i) => (
                <div key={i} className="bg-black/30 border border-white/5 p-5 rounded-2xl hover:border-[#9810fa]/50 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#9810fa] group-hover:w-2 transition-all" />
                  <span className="text-xs font-bold text-[#9810fa] mb-2 block">{opp.type}</span>
                  <h3 className="font-bold text-white mb-1">{opp.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{opp.org}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 rounded-md bg-[#9810fa]/20 text-[#9810fa] text-xs font-bold">{opp.match} Match</span>
                    <button className="text-sm text-white font-medium hover:text-[#00e5ff] transition-colors">Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Events, Skills, Milestones */}
        <div className="flex flex-col gap-6">
          {/* Notifications */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Bell className="text-orange-400" /> Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                <p className="text-sm text-slate-300">Your AI skill map has been updated based on your latest Github repo.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-slate-600 mt-1.5 flex-shrink-0" />
                <p className="text-sm text-slate-400">Advisor Dr. Wei accepted your roadmap pivot request.</p>
              </div>
            </div>
          </div>

          {/* Current Skills */}
          <div className="bg-gradient-to-b from-[#1a2d4c] to-black/20 border border-[#00e5ff]/30 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,229,255,0.05)]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Trophy className="text-[#00e5ff]" /> Acquired Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Python', 'React', 'Data Structs', 'Git', 'Agile'].map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-xs font-medium text-[#00e5ff]">{skill}</span>
              ))}
              <span className="px-3 py-1.5 rounded-lg border border-dashed border-slate-500 text-xs font-medium text-slate-400">+ View All</span>
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-400" /> Milestones
            </h2>
            <div className="relative border-l border-white/10 ml-3 space-y-6">
              <div className="relative pl-6">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
                <p className="text-xs text-slate-400 font-bold mb-1">Completed</p>
                <p className="text-sm font-medium text-white">Master Python Syntax</p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
                <p className="text-xs text-[#00e5ff] font-bold mb-1">In Progress</p>
                <p className="text-sm font-medium text-white">Build First Neural Net</p>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calendar className="text-white" /> Upcoming Events
            </h2>
            <div className="flex flex-col gap-3">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <p className="text-xs font-bold text-[#00e5ff] mb-1">Tomorrow, 2:00 PM</p>
                <p className="text-sm font-medium text-white">AI Ethics Webinar</p>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <p className="text-xs font-bold text-[#9810fa] mb-1">Friday, 10:00 AM</p>
                <p className="text-sm font-medium text-white">1-on-1 Mentorship Call</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
