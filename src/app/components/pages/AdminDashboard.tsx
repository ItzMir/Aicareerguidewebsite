import { Users, BookOpen, Activity, AlertTriangle, Briefcase, Settings, CheckCircle, Download } from "lucide-react";
import adminBg from "../../../imports/cytonn-photography-n95VMLxqM2I-unsplash.jpg";

export function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header Banner */}
      <div className="relative w-full h-[200px] rounded-3xl overflow-hidden border border-white/10">
        <img src={adminBg} alt="Admin Operations" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13213A] to-transparent" />
        <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold mb-2">System Administration</h1>
            <p className="text-slate-300">Overview of OCULAR platform health and user metrics.</p>
          </div>
          <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold flex items-center gap-2 backdrop-blur-md transition-all">
            <Download size={18} /> Download Full System Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Total Students", value: "12,450", icon: <Users className="text-[#00e5ff]" />, trend: "+12%" },
          { label: "Active Advisors", value: "342", icon: <Briefcase className="text-[#9810fa]" />, trend: "+5%" },
          { label: "Roadmaps Generated", value: "45,211", icon: <Activity className="text-green-400" />, trend: "+24%" },
          { label: "System Health", value: "99.9%", icon: <Settings className="text-slate-400" />, trend: "Optimal" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-full bg-white/5 text-slate-300">{stat.trend}</span>
            </div>
            <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
            <p className="text-slate-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Feedbacks */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="text-[#00e5ff]" />
            Recent User Feedbacks
          </h2>
          <div className="space-y-4">
            {[
              { user: "Student - Alex C.", text: "The new AI recommend page UI is broken on Safari.", status: "Pending" },
              { user: "Advisor - Dr. Wei", text: "Cannot assign multiple files to a student in one go.", status: "Pending" },
              { user: "Student - Maria S.", text: "Awesome new feature for roadmap pivots!", status: "Solved" },
            ].map((feed, i) => (
              <div key={i} className={`flex items-start justify-between gap-4 p-4 rounded-xl border transition-all ${feed.status === 'Solved' ? 'bg-black/20 border-white/5 opacity-60' : 'bg-black/40 border-[#00e5ff]/20'}`}>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{feed.user}</h4>
                  <p className="text-sm text-slate-400">{feed.text}</p>
                </div>
                {feed.status === 'Pending' ? (
                  <button className="px-4 py-2 rounded-lg bg-[#00e5ff]/10 text-[#00e5ff] text-xs font-bold hover:bg-[#00e5ff]/20 transition-colors">
                    Mark as Solved
                  </button>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-bold">Solved</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-orange-400">
            <AlertTriangle />
            System Alerts
          </h2>
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-500/10">
              <h4 className="font-bold text-orange-400 text-sm mb-1">API Rate Limit Warning</h4>
              <p className="text-xs text-slate-300">Unsplash API nearing 80% of monthly quota.</p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <h4 className="font-bold text-white text-sm mb-1">Database Backup</h4>
              <p className="text-xs text-slate-400">Next scheduled backup in 4 hours.</p>
            </div>
            
            <button className="w-full mt-4 py-3 rounded-xl border border-dashed border-white/20 text-slate-400 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
              View All Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
