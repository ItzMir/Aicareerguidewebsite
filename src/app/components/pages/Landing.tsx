import { Link } from "react-router";
import { ArrowRight, Sparkles, Target, Compass, BookOpen, Users, Trophy } from "lucide-react";
import heroImage from "../../../imports/fotografia-editorial-prl9DeDCKrM-unsplash.jpg";
import featureImage from "../../../imports/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg";

export function Landing() {
  return (
    <div className="flex flex-col gap-32">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between gap-12 pt-12 pb-20">
        <div className="flex-1 flex flex-col items-start text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#00e5ff]/30 text-[#00e5ff] text-sm font-medium mb-8">
            <Sparkles size={16} />
            <span>AI-Powered Career Evolution</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">Discover Your </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0088ff]">Perfect Orbit.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            OCULAR fuses cutting-edge AI with industry expertise to illuminate your optimal career trajectory. Uncover hidden skills, map dynamic roadmaps, and land your dream role.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              to="/register"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold text-lg hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Launch Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-center"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full h-[500px] lg:h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#13213A] via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13213A] via-transparent to-transparent z-10" />
          <img 
            src={heroImage} 
            alt="Futuristic Career Path" 
            className="w-full h-full object-cover rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.15)]"
          />
          <div className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl z-20 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00e5ff]/20 flex items-center justify-center text-[#00e5ff]">
                <Target size={24} />
              </div>
              <div>
                <p className="text-white font-bold">Goal Matched</p>
                <p className="text-slate-400 text-sm">AI Engineer Roadmap Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Proof */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "AI Analyzed Paths", value: "10,000+" },
          { label: "Success Rate", value: "94%" },
          { label: "Expert Advisors", value: "500+" },
          { label: "Resources", value: "2M+" }
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
            <span className="text-4xl font-black text-[#00e5ff] mb-2">{stat.value}</span>
            <span className="text-slate-400 font-medium">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Feature Highlight with Image */}
      <section className="flex flex-col md:flex-row items-center gap-16 bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Learn and Grow with Intelligence</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Our system doesn't just tell you what to do. It analyzes your skill gaps and provides targeted resources, real-world internships, and jams to ensure you are industry-ready.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-slate-300"><Target className="text-[#00e5ff]" size={20} /> Skill gap analysis</li>
            <li className="flex items-center gap-3 text-slate-300"><Compass className="text-[#00e5ff]" size={20} /> Interactive waypoints</li>
            <li className="flex items-center gap-3 text-slate-300"><Trophy className="text-[#00e5ff]" size={20} /> Hackathons & Internships</li>
          </ul>
        </div>
        <div className="flex-1 w-full relative">
          <div className="absolute top-4 -left-4 w-full h-full bg-[#00e5ff]/20 rounded-3xl blur-2xl z-0" />
          <img 
            src={featureImage} 
            alt="Learning Resources" 
            className="relative z-10 w-full rounded-3xl border border-white/10 shadow-xl object-cover h-[400px]"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="flex flex-col gap-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">A Constellation of Tools</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Everything you need to navigate the modern job market, powered by intelligent algorithms and human wisdom.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={<Target size={32} className="text-[#00e5ff]" />} title="Skill Extraction" description="Our AI deeply analyzes your profile, documents, and interests to map your true skill tree and reveal potential." />
          <FeatureCard icon={<Compass size={32} className="text-[#9810fa]" />} title="Dynamic Roadmaps" description="Get interactive, step-by-step career pathways. Tweak waypoints and let AI suggest sub-pathways for pivoting." />
          <FeatureCard icon={<BookOpen size={32} className="text-[#00e5ff]" />} title="Resource Curation" description="Personalized courses and materials are suggested automatically to fill your specific skill gaps." />
          <FeatureCard icon={<Trophy size={32} className="text-[#9810fa]" />} title="Real-time Experience" description="AI recommends matching jams, hackathons, internships, and competitions to build on-field portfolio." />
          <FeatureCard icon={<Users size={32} className="text-[#00e5ff]" />} title="Expert Advisors" description="Connect with real human counselors for 1-on-1 guidance, webinars, and mental roadmap checks." />
          <FeatureCard icon={<Sparkles size={32} className="text-[#9810fa]" />} title="Smart Matching" description="Get notified about fresh placement opportunities tailored perfectly to your evolving skill progression." />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1222] to-[#13213A] border border-[#00e5ff]/30 rounded-[3rem] p-16 text-center flex flex-col items-center justify-center mt-16 group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff] rounded-full blur-[100px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to find your orbit?</h2>
        <p className="text-xl text-slate-300 max-w-2xl mb-10 relative z-10">Join thousands of students who have already accelerated their career trajectory with OCULAR.</p>
        <Link 
          to="/register"
          className="relative z-10 px-10 py-5 rounded-2xl bg-[#00e5ff] text-[#13213A] font-bold text-xl hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] hover:bg-white transition-all duration-300"
        >
          Start Free Today
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
      <div className="w-16 h-16 rounded-2xl bg-[#13213A] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
