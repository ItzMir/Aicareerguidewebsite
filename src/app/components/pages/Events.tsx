import { useState } from "react";
import { Calendar, Clock, Users, Video, MapPin, Star, Bell, Filter } from "lucide-react";
import eventsHero from "../../../imports/matt-ragland-02z1I7gv4ao-unsplash__1_.jpg";
import eventImg from "../../../imports/microsoft-copilot-Z38ADyUhN6s-unsplash__1_.jpg";

export function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Events" },
    { id: "webinar", label: "Webinars" },
    { id: "workshop", label: "Workshops" },
    { id: "networking", label: "Networking" },
    { id: "career", label: "Career Fairs" }
  ];

  const upcomingEvents = [
    {
      title: "Breaking into AI in 2026: Complete Roadmap",
      type: "webinar",
      date: "May 15, 2026",
      time: "2:00 PM EST",
      duration: "90 min",
      host: "Dr. Sarah Chen",
      hostTitle: "AI Research Specialist",
      attendees: 245,
      maxAttendees: 500,
      location: "Online",
      category: "AI & Machine Learning",
      description: "Learn the essential skills, certifications, and strategies needed to land your first AI role. Interactive Q&A session included.",
      featured: true,
      image: eventImg
    },
    {
      title: "Mock Interview Workshop: FAANG Preparation",
      type: "workshop",
      date: "May 17, 2026",
      time: "10:00 AM PST",
      duration: "2 hours",
      host: "Marcus Rivera",
      hostTitle: "Senior Software Architect",
      attendees: 89,
      maxAttendees: 150,
      location: "Online",
      category: "Software Engineering",
      description: "Practice coding interviews with real FAANG questions. Get live feedback on your problem-solving approach.",
      featured: false
    },
    {
      title: "Cloud Career Networking Mixer",
      type: "networking",
      date: "May 20, 2026",
      time: "6:00 PM EST",
      duration: "2 hours",
      host: "James Park",
      hostTitle: "Cloud Solutions Architect",
      attendees: 67,
      maxAttendees: 100,
      location: "Virtual Networking Room",
      category: "Cloud & DevOps",
      description: "Connect with cloud professionals, hiring managers, and fellow students. Speed networking sessions included.",
      featured: false
    },
    {
      title: "Data Science Portfolio Showcase",
      type: "workshop",
      date: "May 22, 2026",
      time: "3:00 PM CST",
      duration: "90 min",
      host: "Dr. Alan Wei",
      hostTitle: "Career Development Expert",
      attendees: 134,
      maxAttendees: 200,
      location: "Online",
      category: "Data Science",
      description: "Learn how to build a standout data science portfolio that gets you hired. Review real portfolios and get expert feedback.",
      featured: false
    },
    {
      title: "Cybersecurity Career Fair 2026",
      type: "career",
      date: "May 25, 2026",
      time: "1:00 PM EST",
      duration: "4 hours",
      host: "Aisha Patel",
      hostTitle: "Cybersecurity Consultant",
      attendees: 312,
      maxAttendees: 1000,
      location: "Online",
      category: "Cybersecurity",
      description: "Meet with 50+ companies hiring for cybersecurity roles. Live demos, company booths, and on-the-spot interviews.",
      featured: false
    },
    {
      title: "Resume & LinkedIn Optimization Bootcamp",
      type: "workshop",
      date: "May 27, 2026",
      time: "11:00 AM PST",
      duration: "2 hours",
      host: "Sarah Jenkins",
      hostTitle: "Machine Learning Engineer",
      attendees: 178,
      maxAttendees: 300,
      location: "Online",
      category: "Career Strategy",
      description: "Optimize your resume and LinkedIn profile for maximum visibility. Learn ATS secrets and recruiter insights.",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "Tech Trends 2026: What's Hot in Software",
      date: "May 5, 2026",
      attendees: 423,
      recording: true
    },
    {
      title: "From Student to Senior Engineer",
      date: "Apr 28, 2026",
      attendees: 356,
      recording: true
    },
    {
      title: "Salary Negotiation Masterclass",
      date: "Apr 22, 2026",
      attendees: 298,
      recording: true
    }
  ];

  const filteredEvents = selectedCategory === "all"
    ? upcomingEvents
    : upcomingEvents.filter(e => e.type === selectedCategory);

  return (
    <div className="flex flex-col gap-10 pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] rounded-3xl overflow-hidden border border-white/10">
        <img src={eventsHero} alt="Events" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13213A] via-[#13213A]/90 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-16">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-sm font-bold mb-4">
              Events & Webinars
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Learn, Network, and <span className="bg-gradient-to-r from-[#00e5ff] to-[#0088ff] bg-clip-text text-transparent">Grow Together</span>
            </h1>
            <p className="text-lg text-slate-300 mb-6">
              Join live webinars, interactive workshops, and networking events with industry experts and fellow students. All events are free for registered members.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-3 bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold rounded-xl hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all">
                Browse Upcoming Events
              </button>
              <button className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-md flex items-center gap-2">
                <Bell size={18} />
                Get Event Alerts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-white/10">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-6 py-3 font-bold transition-all relative ${
            activeTab === "upcoming" ? "text-[#00e5ff]" : "text-slate-400 hover:text-white"
          }`}
        >
          Upcoming Events
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
          Past Events
          {activeTab === "past" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
          )}
        </button>
      </div>

      {activeTab === "upcoming" && (
        <>
          {/* Filter */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-slate-400">
                <Filter size={20} />
                <span className="font-bold">Filter by Type:</span>
              </div>
              <div className="flex gap-2 flex-wrap flex-1">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-[#00e5ff] text-[#13213A] shadow-md'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Event */}
          {filteredEvents.some(e => e.featured) && (
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl relative group hover:border-[#00e5ff]/50 transition-colors">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] md:h-auto">
                  <img src={filteredEvents[0].image} alt={filteredEvents[0].title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#13213A]/80 to-transparent md:hidden" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-[#00e5ff] text-[#13213A] text-xs font-bold shadow-lg">FEATURED EVENT</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="inline-block w-fit px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-bold mb-4 uppercase tracking-wider">
                    {filteredEvents[0].type}
                  </div>
                  <h2 className="text-3xl font-bold mb-4 leading-tight">
                    {filteredEvents[0].title}
                  </h2>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {filteredEvents[0].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="text-[#00e5ff]" />
                      <span>{filteredEvents[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} className="text-[#00e5ff]" />
                      <span>{filteredEvents[0].time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} className="text-[#00e5ff]" />
                      <span>{filteredEvents[0].attendees}/{filteredEvents[0].maxAttendees} registered</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Video size={16} className="text-[#00e5ff]" />
                      <span>{filteredEvents[0].location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-black/20 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00e5ff] to-[#0088ff] flex items-center justify-center text-[#13213A] font-bold">
                      {filteredEvents[0].host.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-white">{filteredEvents[0].host}</div>
                      <div className="text-sm text-slate-400">{filteredEvents[0].hostTitle}</div>
                    </div>
                  </div>

                  <button className="px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold rounded-xl hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all w-full">
                    Register Now - Free
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.slice(1).map((event, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:bg-white/10 transition-all group cursor-pointer hover:border-[#00e5ff]/30">
                <div className="relative h-40 bg-gradient-to-br from-[#1a2d4c] to-[#13213A] overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      event.type === 'webinar' ? 'bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/30' :
                      event.type === 'workshop' ? 'bg-[#9810fa]/20 text-[#9810fa] border border-[#9810fa]/30' :
                      event.type === 'networking' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={14} className="text-[#00e5ff]" />
                      <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#00e5ff] to-[#0088ff]"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-300">{event.attendees}/{event.maxAttendees}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-[#00e5ff] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Calendar size={14} className="text-[#00e5ff]" />
                      {event.date} • {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock size={14} className="text-[#00e5ff]" />
                      {event.duration}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Video size={14} className="text-[#00e5ff]" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 pt-4 border-t border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#0088ff] flex items-center justify-center text-[#13213A] font-bold text-xs">
                      {event.host.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white">{event.host}</div>
                      <div className="text-xs text-slate-400">{event.hostTitle}</div>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all text-sm">
                    Register Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "past" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-500/20 text-slate-400 text-xs font-bold">PAST EVENT</span>
                {event.recording && (
                  <span className="px-3 py-1 rounded-full bg-[#9810fa]/20 text-[#9810fa] text-xs font-bold">Recording Available</span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#00e5ff] transition-colors">{event.title}</h3>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  {event.attendees} attended
                </div>
              </div>
              <button className="w-full py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm flex items-center justify-center gap-2">
                <Video size={16} />
                Watch Recording
              </button>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#00e5ff]/10 to-[#9810fa]/10 border border-white/10 rounded-3xl p-10 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff] rounded-full blur-[120px] opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Calendar size={48} className="mx-auto mb-4 text-[#00e5ff]" />
          <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
          <p className="text-slate-300 mb-6 text-lg">
            Industry experts and advisors can host webinars, workshops, and networking events. Share your knowledge and connect with motivated students.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all">
            Propose an Event
          </button>
        </div>
      </div>
    </div>
  );
}
