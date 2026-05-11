import { PlayCircle, FileText, Settings, Award, Star, Calendar, Users, Edit, BookOpen, Video, Clock, Plus } from 'lucide-react';
import { useState } from 'react';

export function AdvisorArticles() {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative w-full h-[200px] rounded-3xl overflow-hidden border border-white/10 mb-8">
        <img src="https://images.unsplash.com/photo-1561382781-76dd6a2ce0b6?w=1080&q=80" alt="Articles" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13213A] to-transparent" />
        <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Articles & Videos</h1>
            <p className="text-slate-300">Curate and review materials to share with your assigned students.</p>
          </div>
          <button className="px-6 py-3 bg-[#9810fa] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(152,16,250,0.4)] transition-all relative z-10">
            + Publish Content
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "How to Ace the ML Interview", type: "Video", icon: <PlayCircle size={16} /> },
          { title: "Navigating Tech Layoffs", type: "Article", icon: <FileText size={16} /> },
          { title: "Resume Tips for 2026", type: "Video", icon: <PlayCircle size={16} /> },
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center mb-4 text-[#9810fa]">
              {item.icon}
            </div>
            <span className="text-xs font-bold text-[#9810fa] uppercase tracking-wider mb-2 block">{item.type}</span>
            <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-400">Published 2 days ago. 145 views.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AdvisorWebinars() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingWebinars = [
    {
      title: "Breaking into AI in 2026",
      date: "May 15, 2026",
      time: "2:00 PM EST",
      duration: "90 min",
      attendees: 245,
      maxAttendees: 500,
      status: "confirmed",
      description: "Complete roadmap for aspiring AI professionals"
    },
    {
      title: "Mock Interview Group Session",
      date: "May 17, 2026",
      time: "10:00 AM PST",
      duration: "2 hours",
      attendees: 89,
      maxAttendees: 150,
      status: "confirmed",
      description: "Practice coding interviews with real-time feedback"
    },
    {
      title: "ML Career Q&A Session",
      date: "May 22, 2026",
      time: "3:00 PM EST",
      duration: "60 min",
      attendees: 134,
      maxAttendees: 300,
      status: "confirmed",
      description: "Open forum for ML career questions and advice"
    }
  ];

  const pastWebinars = [
    {
      title: "Tech Trends in ML 2026",
      date: "May 5, 2026",
      attendees: 423,
      rating: 4.8,
      recording: true
    },
    {
      title: "Resume Optimization Workshop",
      date: "Apr 28, 2026",
      attendees: 356,
      rating: 4.9,
      recording: true
    },
    {
      title: "Career Strategy Bootcamp",
      date: "Apr 15, 2026",
      attendees: 298,
      rating: 4.7,
      recording: true
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="relative w-full h-[200px] rounded-3xl overflow-hidden border border-white/10">
        <img src="https://images.unsplash.com/photo-1760624189524-ee4f0a1a3749?w=1080&q=80" alt="Webinars" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13213A] to-[#13213A]/50" />
        <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Webinars & Live Events</h1>
            <p className="text-slate-300">Manage your upcoming group sessions and view past performance.</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all relative z-10 flex items-center gap-2">
            <Plus size={18} />
            Schedule Webinar
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Webinars", value: "24", icon: <Video size={20} /> },
          { label: "Total Attendees", value: "3.2K", icon: <Users size={20} /> },
          { label: "Avg. Rating", value: "4.8", icon: <Star size={20} /> },
          { label: "This Month", value: "6", icon: <Calendar size={20} /> }
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl text-center hover:bg-white/10 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-3 text-[#00e5ff]">
              {stat.icon}
            </div>
            <div className="text-2xl font-black text-[#00e5ff] mb-1">{stat.value}</div>
            <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-white/10">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-6 py-3 font-bold transition-all relative ${
            activeTab === "upcoming" ? "text-[#00e5ff]" : "text-slate-400 hover:text-white"
          }`}
        >
          Upcoming Webinars
          {activeTab === "upcoming" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`px-6 py-3 font-bold transition-all relative ${
            activeTab === "past" ? "text-[#00e5ff]" : "text-slate-400 hover:text-white"
          }`}
        >
          Past Webinars
          {activeTab === "past" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`px-6 py-3 font-bold transition-all relative ${
            activeTab === "analytics" ? "text-[#00e5ff]" : "text-slate-400 hover:text-white"
          }`}
        >
          Analytics
          {activeTab === "analytics" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
          )}
        </button>
      </div>

      {/* Upcoming Webinars */}
      {activeTab === "upcoming" && (
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingWebinars.map((webinar, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-[#00e5ff]/50 transition-all group">
              <div className="relative h-32 bg-gradient-to-br from-[#1a2d4c] to-[#13213A]">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold uppercase">
                    {webinar.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={14} className="text-[#00e5ff]" />
                    <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00e5ff] to-[#0088ff]"
                        style={{ width: `${(webinar.attendees / webinar.maxAttendees) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-300">{webinar.attendees}/{webinar.maxAttendees}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00e5ff] transition-colors">{webinar.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{webinar.description}</p>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar size={14} className="text-[#00e5ff]" />
                    {webinar.date} • {webinar.time}
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock size={14} className="text-[#00e5ff]" />
                    Duration: {webinar.duration}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all text-sm">
                    Manage Event
                  </button>
                  <button className="w-11 h-11 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center">
                    <Edit size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Create New Card */}
          <div className="bg-transparent border-2 border-dashed border-white/20 rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-[#00e5ff]/50 hover:bg-white/5 transition-all group">
            <div className="w-16 h-16 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Plus size={32} className="text-[#00e5ff]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Schedule New Webinar</h3>
            <p className="text-sm text-slate-400 text-center">Create a new live event or workshop for your students</p>
          </div>
        </div>
      )}

      {/* Past Webinars */}
      {activeTab === "past" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastWebinars.map((webinar, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-500/20 text-slate-400 text-xs font-bold">COMPLETED</span>
                {webinar.recording && (
                  <span className="px-3 py-1 rounded-full bg-[#9810fa]/20 text-[#9810fa] text-xs font-bold flex items-center gap-1">
                    <PlayCircle size={12} />
                    Recording
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[#00e5ff] transition-colors">{webinar.title}</h3>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {webinar.date}
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  {webinar.attendees}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 pt-4 border-t border-white/10">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-white">{webinar.rating}</span>
                <span className="text-xs text-slate-400">Average Rating</span>
              </div>
              <button className="w-full py-2.5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm flex items-center justify-center gap-2">
                <PlayCircle size={16} />
                View Recording
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Analytics */}
      {activeTab === "analytics" && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold mb-6">Attendance Trends</h3>
            <div className="space-y-4">
              {[
                { month: "May 2026", attended: 542, registered: 650 },
                { month: "Apr 2026", attended: 489, registered: 580 },
                { month: "Mar 2026", attended: 423, registered: 520 }
              ].map((data, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">{data.month}</span>
                    <span className="text-white font-bold">{data.attended}/{data.registered}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00e5ff] to-[#0088ff]"
                      style={{ width: `${(data.attended / data.registered) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold mb-6">Top Performing Topics</h3>
            <div className="space-y-4">
              {[
                { topic: "AI Career Guidance", rating: 4.9, attendees: 843 },
                { topic: "Interview Prep", rating: 4.8, attendees: 756 },
                { topic: "Resume Building", rating: 4.7, attendees: 634 }
              ].map((topic, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-black/20 border border-white/10">
                  <div>
                    <h4 className="font-bold text-white mb-1">{topic.topic}</h4>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        {topic.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        {topic.attendees}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function AdvisorProfile() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="relative w-full h-[250px] rounded-3xl overflow-hidden border border-white/10 flex items-center justify-between px-10" style={{ background: 'linear-gradient(135deg, #1a2d4c 0%, #13213A 100%)' }}>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />

        <div className="relative z-10 flex items-center gap-6">
          <div className="w-24 h-24 rounded-2xl border-4 border-[#9810fa] shadow-[0_0_20px_rgba(152,16,250,0.4)] overflow-hidden bg-gradient-to-br from-[#9810fa] to-[#d810fa] flex items-center justify-center">
            <span className="text-3xl font-black text-white">SJ</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Sarah Jenkins</h1>
            <p className="text-[#9810fa] font-medium flex items-center gap-2 mb-2">
              <Award size={18} />
              Senior Machine Learning Engineer
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="font-bold">4.9</span>
                <span className="text-slate-400">(167 reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} />
                89 Active Students
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <button className="px-6 py-3 rounded-xl bg-[#9810fa] text-white hover:shadow-[0_0_20px_rgba(152,16,250,0.4)] transition-all text-sm font-bold">
            Save Profile Changes
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Profile */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Bio Section */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#9810fa] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FileText className="text-[#9810fa]" />
                  Professional Bio
                </h2>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <Edit size={18} className="text-slate-400" />
                </button>
              </div>
              <textarea
                defaultValue="Senior Machine Learning Engineer at Amazon ML with 8 years of industry experience. Passionate about helping students transition into ML engineering roles through practical, hands-on guidance. Specializes in interview preparation, resume optimization, and career strategy for aspiring ML professionals."
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#9810fa] focus:outline-none transition-colors min-h-[120px] resize-none"
              />
            </div>
          </section>

          {/* Expertise & Skills */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-[#9810fa]" />
              Areas of Expertise
            </h2>
            <div className="flex flex-wrap gap-3">
              {['TensorFlow', 'PyTorch', 'MLOps', 'Model Deployment', 'Deep Learning', 'NLP', 'Computer Vision', 'Python', 'AWS SageMaker', 'Docker', 'Kubernetes', 'System Design'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-[#9810fa]/10 border border-[#9810fa]/20 text-sm font-medium text-[#9810fa] shadow-inner hover:bg-[#9810fa]/20 transition-all cursor-pointer">
                  {skill}
                </span>
              ))}
              <button className="px-4 py-2 rounded-xl border-2 border-dashed border-[#9810fa]/30 text-sm font-medium text-[#9810fa] hover:bg-[#9810fa]/10 transition-all">
                + Add Skill
              </button>
            </div>
          </section>

          {/* Professional Details */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Settings className="text-[#9810fa]" />
              Professional Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Current Company</label>
                <input type="text" defaultValue="Amazon ML" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#9810fa] focus:outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Years of Experience</label>
                <input type="text" defaultValue="8 years" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#9810fa] focus:outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Location</label>
                <input type="text" defaultValue="Seattle, WA" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#9810fa] focus:outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Session Rate</label>
                <input type="text" defaultValue="$95/session" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#9810fa] focus:outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">LinkedIn Profile</label>
                <input type="url" defaultValue="linkedin.com/in/sarahjenkins" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#9810fa] focus:outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">GitHub Profile</label>
                <input type="url" defaultValue="github.com/sarahjenkins" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#9810fa] focus:outline-none transition-colors" />
              </div>
            </div>
          </section>

          {/* Availability Settings */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="text-[#9810fa]" />
              Availability Settings
            </h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/10">
                <div>
                  <h3 className="font-bold text-white mb-1">Accept New Students</h3>
                  <p className="text-sm text-slate-400">Allow new students to book sessions with you</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#9810fa]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/10">
                <div>
                  <h3 className="font-bold text-white mb-1">Email Notifications</h3>
                  <p className="text-sm text-slate-400">Get notified when students book sessions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#9810fa]"></div>
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Weekly Session Limit</label>
                <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#9810fa] focus:outline-none transition-colors appearance-none">
                  <option>No Limit</option>
                  <option>5 sessions/week</option>
                  <option>10 sessions/week</option>
                  <option>15 sessions/week</option>
                  <option>20 sessions/week</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Performance Stats */}
          <section className="bg-gradient-to-b from-[#1a2d4c] to-white/5 border border-[#9810fa]/30 rounded-3xl p-6 backdrop-blur-xl sticky top-32">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Star className="text-[#9810fa]" />
              Performance
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-slate-400">Overall Rating</span>
                  <span className="text-2xl font-black text-[#9810fa]">4.9</span>
                </div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={16} className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"} />
                  ))}
                </div>
                <p className="text-xs text-slate-400">Based on 167 reviews</p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Sessions Completed</span>
                      <span className="text-white font-bold">342</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Active Students</span>
                      <span className="text-white font-bold">89</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Response Rate</span>
                      <span className="text-white font-bold">98%</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Joined</span>
                      <span className="text-white font-bold">Aug 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Recent Feedback</h3>
                <div className="space-y-3">
                  {[
                    { name: "Alex C.", comment: "Extremely helpful! Sarah helped me land my ML role.", rating: 5 },
                    { name: "Maria S.", comment: "Great insights on interview prep. Highly recommend!", rating: 5 }
                  ].map((review, i) => (
                    <div key={i} className="p-3 rounded-xl bg-black/20 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-white">{review.name}</span>
                        <div className="flex gap-0.5">
                          {[...Array(review.rating)].map((_, j) => (
                            <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 rounded-xl bg-[#9810fa]/10 border border-[#9810fa]/30 text-[#9810fa] font-bold hover:bg-[#9810fa]/20 transition-all text-sm flex items-center justify-center gap-2">
                <Calendar size={16} />
                View Schedule
              </button>
              <button className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold hover:bg-white/20 transition-all text-sm flex items-center justify-center gap-2">
                <BookOpen size={16} />
                My Articles
              </button>
              <button className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold hover:bg-white/20 transition-all text-sm flex items-center justify-center gap-2">
                <Users size={16} />
                Student List
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
