import { useState } from "react";
import { Send, User, Star, Calendar, MessageCircle, Search } from "lucide-react";
import chatBg from "../../../imports/gery-wibowo-Eti6ph51H4A-unsplash.jpg";

export function AdvisorChat() {
  const [message, setMessage] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const students = [
    {
      name: "Alex Carter",
      initials: "AC",
      major: "Computer Science",
      lastMessage: "Thank you for the resume feedback!",
      lastMessageTime: "5 min ago",
      unread: 2,
      status: "online",
      rating: 5,
      sessionsCompleted: 8
    },
    {
      name: "Maria Santos",
      initials: "MS",
      major: "Data Science",
      lastMessage: "When is our next session scheduled?",
      lastMessageTime: "1 hour ago",
      unread: 1,
      status: "online",
      rating: 5,
      sessionsCompleted: 5
    },
    {
      name: "John Doe",
      initials: "JD",
      major: "Machine Learning",
      lastMessage: "I got the internship! Thanks for your help.",
      lastMessageTime: "3 hours ago",
      unread: 0,
      status: "offline",
      rating: 5,
      sessionsCompleted: 12
    },
    {
      name: "Emily Zhang",
      initials: "EZ",
      major: "Software Engineering",
      lastMessage: "Can we discuss system design patterns?",
      lastMessageTime: "Yesterday",
      unread: 0,
      status: "offline",
      rating: 4,
      sessionsCompleted: 6
    },
    {
      name: "David Kim",
      initials: "DK",
      major: "AI Research",
      lastMessage: "Thanks for the career roadmap!",
      lastMessageTime: "2 days ago",
      unread: 0,
      status: "offline",
      rating: 5,
      sessionsCompleted: 9
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.major.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentStudent = filteredStudents[selectedStudent] || students[0];

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] min-h-[700px] gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Student Messages</h1>
          <p className="text-slate-400">Connect with your assigned students and provide guidance.</p>
        </div>
        <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-xl border border-white/10">
          <MessageCircle size={20} className="text-[#9810fa]" />
          <div>
            <div className="text-sm font-bold text-white">{students.reduce((acc, s) => acc + s.unread, 0)} Unread</div>
            <div className="text-xs text-slate-400">{students.filter(s => s.status === 'online').length} Online</div>
          </div>
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-4 gap-6 min-h-0">
        {/* Students Sidebar */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 flex flex-col gap-4 overflow-y-auto">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9810fa]"
            />
          </div>

          {/* Student List */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">My Students ({filteredStudents.length})</h2>
            <div className="space-y-2">
              {filteredStudents.map((student, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedStudent(i)}
                  className={`flex items-start gap-3 p-3 rounded-2xl cursor-pointer transition-all border ${
                    selectedStudent === i
                      ? 'bg-gradient-to-r from-[#9810fa]/20 to-transparent border-[#9810fa]/30 shadow-[0_0_15px_rgba(152,16,250,0.1)]'
                      : 'hover:bg-white/5 border-transparent hover:border-white/10'
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9810fa] to-[#d810fa] flex items-center justify-center text-white font-bold shadow-inner">
                      {student.initials}
                    </div>
                    {student.status === "online" && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#13213A]" />
                    )}
                    {student.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#00e5ff] flex items-center justify-center text-xs font-bold text-[#13213A]">
                        {student.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-white text-sm truncate">{student.name}</h3>
                      <span className="text-xs text-slate-500 flex-shrink-0 ml-2">{student.lastMessageTime}</span>
                    </div>
                    <p className="text-xs text-slate-400 mb-1">{student.major}</p>
                    <p className={`text-xs truncate ${student.unread > 0 ? 'text-white font-medium' : 'text-slate-500'}`}>
                      {student.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-3 flex gap-6">
          {/* Messages */}
          <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl flex flex-col overflow-hidden relative shadow-2xl">
            <img src={chatBg} alt="Chat Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none mix-blend-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9810fa] rounded-full blur-[150px] opacity-10 pointer-events-none" />

            {/* Chat Header */}
            <div className="p-6 border-b border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9810fa] to-[#d810fa] flex items-center justify-center text-white shadow-[0_0_20px_rgba(152,16,250,0.3)] font-bold text-xl">
                    {currentStudent.initials}
                  </div>
                  {currentStudent.status === "online" && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#13213A]" />
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{currentStudent.name}</h2>
                  <p className="text-sm text-[#9810fa] font-medium flex items-center gap-2">
                    {currentStudent.major}
                    {currentStudent.status === "online" && (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-green-400 text-xs">Online</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#9810fa] hover:text-white transition-all text-slate-300 border border-white/10 hover:border-[#9810fa] shadow-sm">
                  <Calendar size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-8 overflow-y-auto flex flex-col gap-6 relative z-10 scrollbar-hide">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9810fa] to-[#d810fa] flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(152,16,250,0.4)] font-bold">
                  {currentStudent.initials}
                </div>
                <div className="bg-[#1a2d4c]/80 backdrop-blur-md border border-[#9810fa]/30 rounded-2xl rounded-tl-none p-5 max-w-[80%] shadow-lg">
                  <p className="text-base leading-relaxed text-white">Hi! I wanted to get your feedback on my resume before I submit it to Google. I've made the changes you suggested last time.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="w-10 h-10 rounded-xl border-2 border-[#9810fa] bg-black/40 flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-inner font-bold text-sm">
                  SJ
                </div>
                <div className="bg-gradient-to-r from-[#9810fa] to-[#d810fa] text-white rounded-2xl rounded-tr-none p-5 max-w-[80%] shadow-[0_10px_25px_rgba(152,16,250,0.25)]">
                  <p className="text-base font-bold leading-relaxed">Great! I'd be happy to review it. Can you send it over? Also, have you tailored your resume specifically for the ML Engineer role you're applying to?</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9810fa] to-[#d810fa] flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(152,16,250,0.4)] font-bold">
                  {currentStudent.initials}
                </div>
                <div className="bg-[#1a2d4c]/80 backdrop-blur-md border border-[#9810fa]/30 rounded-2xl rounded-tl-none p-5 max-w-[80%] shadow-lg">
                  <p className="text-base leading-relaxed text-white">Yes! I emphasized my TensorFlow experience and the recommendation system project we discussed. I'll attach the PDF now.</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-6 bg-black/40 backdrop-blur-xl border-t border-white/10 relative z-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message to the student..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9810fa] focus:bg-white/10 transition-all shadow-inner text-base"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-[#9810fa] flex items-center justify-center text-white hover:bg-[#d810fa] hover:shadow-[0_0_20px_rgba(152,16,250,0.6)] transition-all">
                  <Send size={20} className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Student Info Sidebar */}
          <div className="w-80 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-6 overflow-y-auto hidden xl:flex">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9810fa] to-[#d810fa] flex items-center justify-center text-white mx-auto mb-4 shadow-[0_0_20px_rgba(152,16,250,0.3)] font-bold text-2xl">
                {currentStudent.initials}
              </div>
              <h3 className="text-xl font-bold mb-1">{currentStudent.name}</h3>
              <p className="text-sm text-[#9810fa] mb-4">{currentStudent.major}</p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < currentStudent.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}
                  />
                ))}
              </div>
              <p className="text-xs text-slate-400">{currentStudent.sessionsCompleted} sessions completed</p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Student Info</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Education Level</span>
                  <span className="text-white font-medium">Undergraduate</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Target Role</span>
                  <span className="text-white font-medium">ML Engineer</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Joined</span>
                  <span className="text-white font-medium">Feb 2026</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Quick Actions</h4>
              <div className="space-y-2">
                <button className="w-full py-3 px-4 rounded-xl bg-[#9810fa]/10 border border-[#9810fa]/30 text-[#9810fa] font-bold hover:bg-[#9810fa]/20 transition-all text-sm flex items-center justify-center gap-2">
                  <Calendar size={16} />
                  Schedule Session
                </button>
                <button className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold hover:bg-white/20 transition-all text-sm">
                  View Progress
                </button>
                <button className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold hover:bg-white/20 transition-all text-sm">
                  Share Resources
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Recent Topics</h4>
              <div className="flex flex-wrap gap-2">
                {['Resume Review', 'Interview Prep', 'Career Strategy'].map(topic => (
                  <span key={topic} className="px-3 py-1 rounded-lg bg-[#9810fa]/10 border border-[#9810fa]/20 text-xs font-medium text-[#9810fa]">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
