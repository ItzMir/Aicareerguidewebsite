import { Users, Calendar, MessageSquare, Clock, CheckCircle } from "lucide-react";
import advisorBg from "../../../imports/estee-janssens-zEqkUMiMxMI-unsplash.jpg";

export function AdvisorDashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header Banner */}
      <div className="relative w-full h-[200px] rounded-3xl overflow-hidden border border-white/10">
        <img src={advisorBg} alt="Advisor Workspace" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13213A] to-transparent" />
        <div className="absolute bottom-6 left-8">
          <h1 className="text-3xl font-bold mb-2">Advisor Portal</h1>
          <p className="text-slate-200">Manage your students, review roadmaps, and schedule counseling sessions.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Assigned Students", value: "48", icon: <Users className="text-[#00e5ff]" /> },
          { label: "Pending Reviews", value: "12", icon: <CheckCircle className="text-orange-400" /> },
          { label: "Upcoming Sessions", value: "5", icon: <Calendar className="text-[#9810fa]" /> },
          { label: "Unread Messages", value: "24", icon: <MessageSquare className="text-green-400" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center flex-shrink-0">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-slate-400 text-xs uppercase tracking-wider">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Student Requests / Reviews */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <CheckCircle className="text-[#00e5ff]" />
              Action Required
            </h2>
            <button className="text-sm text-[#00e5ff] hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {[
              { student: "Alex Carter", task: "Requested Review on AI/ML Roadmap Pivot", time: "2 hrs ago", status: "High Priority" },
              { student: "Samantha Lee", task: "Skill gap analysis clarification", time: "5 hrs ago", status: "Normal" },
              { student: "Jordan Smith", task: "Internship portfolio check", time: "1 day ago", status: "Normal" },
            ].map((req, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-white">{req.student}</h4>
                    {req.status === "High Priority" && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-400 uppercase tracking-wider">Urgent</span>}
                  </div>
                  <p className="text-sm text-slate-400">{req.task}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12} /> {req.time}</span>
                  <button className="px-4 py-2 rounded-lg bg-[#00e5ff]/10 text-[#00e5ff] text-sm font-medium hover:bg-[#00e5ff]/20 transition-colors">
                    Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#9810fa]">
            <Calendar />
            Today's Schedule
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { time: "10:00 AM", title: "1-on-1 with Alex C.", type: "Video Call" },
              { time: "01:30 PM", title: "Career Webinar Group", type: "Webinar" },
              { time: "04:00 PM", title: "Mock Interview: S. Lee", type: "Video Call" },
            ].map((session, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-white/5 relative overflow-hidden group hover:border-[#9810fa]/50 transition-colors">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#9810fa] group-hover:w-2 transition-all" />
                <div className="pl-2">
                  <span className="text-xs font-bold text-[#9810fa] mb-1 block">{session.time}</span>
                  <h4 className="font-bold text-white text-sm mb-1">{session.title}</h4>
                  <p className="text-xs text-slate-400">{session.type}</p>
                </div>
              </div>
            ))}
            
            <button className="w-full mt-4 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all text-sm font-medium">
              Open Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
