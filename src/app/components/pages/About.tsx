import { Target, Users, Brain, Award, Sparkles, TrendingUp } from "lucide-react";
import aboutImg from "../../../imports/branko-stancevic-GI1hwOGqGtE-unsplash.jpg";
import teamImg from "../../../imports/hannah-busing-Zyx1bK9mqmA-unsplash.jpg";
import visionImg from "../../../imports/matt-ragland-02z1I7gv4ao-unsplash__1_.jpg";

export function About() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border border-white/10">
        <img src={aboutImg} alt="About OCULAR" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13213A] via-[#13213A]/90 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-sm font-bold mb-6">
              About OCULAR
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Your <span className="bg-gradient-to-r from-[#00e5ff] to-[#0088ff] bg-clip-text text-transparent">Career Journey</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              OCULAR is an AI-powered career guidance platform designed to help students navigate their professional paths with precision, confidence, and personalized support.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-[#00e5ff]/50 transition-colors">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00e5ff] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center mb-6 border border-[#00e5ff]/20">
              <Target className="text-[#00e5ff]" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              To democratize career guidance by combining cutting-edge artificial intelligence with human expertise, ensuring every student has access to personalized, actionable career advice that adapts to their unique goals and aspirations.
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-[#9810fa]/50 transition-colors">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#9810fa] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#9810fa]/10 flex items-center justify-center mb-6 border border-[#9810fa]/20">
              <Sparkles className="text-[#9810fa]" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed">
              To become the global standard for intelligent career development, where technology and human mentorship converge to create transformative experiences that shape the future workforce and unlock unlimited potential.
            </p>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="relative w-full rounded-3xl overflow-hidden border border-white/10">
        <img src={visionImg} alt="Innovation" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#13213A]/95 to-[#13213A]" />
        <div className="relative z-10 p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Brain size={28} />,
                title: "AI-Powered Insights",
                desc: "Advanced machine learning algorithms analyze your skills, interests, and market trends to provide hyper-personalized career recommendations.",
                color: "#00e5ff"
              },
              {
                icon: <Users size={28} />,
                title: "Expert Human Advisors",
                desc: "Connect with industry professionals and career counselors who provide mentorship, feedback, and real-world guidance.",
                color: "#9810fa"
              },
              {
                icon: <TrendingUp size={28} />,
                title: "Dynamic Roadmaps",
                desc: "Interactive career roadmaps that evolve with you, tracking your progress and adapting to new opportunities and goals.",
                color: "#00e5ff"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-black/40 border border-white/10 group-hover:scale-110 transition-transform" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: feature.color }}>{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: "50K+", label: "Active Students" },
          { number: "500+", label: "Expert Advisors" },
          { number: "200+", label: "Career Paths" },
          { number: "95%", label: "Success Rate" }
        ].map((stat, i) => (
          <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md relative overflow-hidden group hover:border-[#00e5ff]/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-4xl font-black bg-gradient-to-r from-[#00e5ff] to-[#0088ff] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="relative w-full rounded-3xl overflow-hidden border border-white/10">
        <img src={teamImg} alt="Our Team" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13213A] via-[#13213A]/95 to-[#13213A]/80" />
        <div className="relative z-10 p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built by Experts, For Students</h2>
            <p className="text-slate-300 text-lg">
              Our team combines decades of experience in education technology, AI research, career counseling, and student success to create a platform that truly makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Dr. Sarah Chen", role: "Chief AI Officer", expertise: "ML & NLP" },
              { name: "Marcus Rivera", role: "Head of Counseling", expertise: "Career Development" },
              { name: "Aisha Patel", role: "VP of Product", expertise: "EdTech Innovation" }
            ].map((member, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 transition-all text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00e5ff] to-[#0088ff] mx-auto mb-4 flex items-center justify-center text-2xl font-black text-[#13213A] shadow-[0_0_20px_rgba(0,229,255,0.3)] group-hover:scale-110 transition-transform">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-[#00e5ff] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-slate-400 text-xs">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#00e5ff]/10 to-[#9810fa]/10 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00e5ff] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#9810fa] rounded-full blur-[120px] opacity-20" />
        <div className="relative z-10">
          <Award size={48} className="mx-auto mb-6 text-[#00e5ff]" />
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of students who have found their perfect career path with OCULAR's intelligent guidance system.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/register" className="px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all">
              Get Started Free
            </a>
            <a href="/counselors" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-md">
              Meet Our Counselors
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
