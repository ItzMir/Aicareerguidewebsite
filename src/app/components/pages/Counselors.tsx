import { useState } from "react";
import { Users, Star, MessageCircle, Video, Calendar, Award, Filter, MapPin, Briefcase } from "lucide-react";
import counselorsHero from "../../../imports/hannah-busing-Zyx1bK9mqmA-unsplash.jpg";

export function Counselors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const specialties = [
    { id: "all", label: "All Counselors" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "software", label: "Software Engineering" },
    { id: "data", label: "Data Science" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "cyber", label: "Cybersecurity" }
  ];

  const counselors = [
    {
      name: "Dr. Sarah Chen",
      title: "AI Research Specialist",
      specialty: "ai",
      location: "San Francisco, CA",
      experience: "12 years",
      rating: 4.9,
      reviews: 284,
      students: 156,
      expertise: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
      bio: "Former AI Lead at Google. Specializes in helping students transition into ML engineering roles.",
      availability: "Available",
      price: "$120/session"
    },
    {
      name: "Marcus Rivera",
      title: "Senior Software Architect",
      specialty: "software",
      location: "Austin, TX",
      experience: "15 years",
      rating: 4.8,
      reviews: 412,
      students: 203,
      expertise: ["System Design", "Full Stack", "Microservices", "React"],
      bio: "Ex-Facebook engineer passionate about mentoring the next generation of developers.",
      availability: "Available",
      price: "$100/session"
    },
    {
      name: "Dr. Alan Wei",
      title: "Career Development Expert",
      specialty: "data",
      location: "New York, NY",
      experience: "10 years",
      rating: 5.0,
      reviews: 198,
      students: 145,
      expertise: ["Data Analysis", "Python", "SQL", "Career Strategy"],
      bio: "PhD in Statistics. Helped 500+ students land data science roles at top companies.",
      availability: "Busy",
      price: "$110/session"
    },
    {
      name: "Sarah Jenkins",
      title: "Machine Learning Engineer",
      specialty: "ai",
      location: "Seattle, WA",
      experience: "8 years",
      rating: 4.9,
      reviews: 167,
      students: 89,
      expertise: ["TensorFlow", "PyTorch", "MLOps", "Model Deployment"],
      bio: "Currently at Amazon ML. Specializes in practical ML interview preparation.",
      availability: "Available",
      price: "$95/session"
    },
    {
      name: "James Park",
      title: "Cloud Solutions Architect",
      specialty: "cloud",
      location: "Denver, CO",
      experience: "11 years",
      rating: 4.7,
      reviews: 221,
      students: 134,
      expertise: ["AWS", "Azure", "Kubernetes", "Terraform"],
      bio: "AWS Certified Solutions Architect helping students master cloud technologies.",
      availability: "Available",
      price: "$105/session"
    },
    {
      name: "Aisha Patel",
      title: "Cybersecurity Consultant",
      specialty: "cyber",
      location: "Boston, MA",
      experience: "9 years",
      rating: 4.8,
      reviews: 143,
      students: 78,
      expertise: ["Penetration Testing", "Security", "Network Defense", "CISSP"],
      bio: "Former NSA analyst. Guides students into cybersecurity and ethical hacking careers.",
      availability: "Busy",
      price: "$115/session"
    }
  ];

  const filteredCounselors = selectedSpecialty === "all"
    ? counselors
    : counselors.filter(c => c.specialty === selectedSpecialty);

  return (
    <div className="flex flex-col gap-10 pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] rounded-3xl overflow-hidden border border-white/10">
        <img src={counselorsHero} alt="Counselors" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13213A] via-[#13213A]/90 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-16">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full bg-[#9810fa]/10 border border-[#9810fa]/30 text-[#9810fa] text-sm font-bold mb-4">
              Expert Guidance
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Connect with <span className="bg-gradient-to-r from-[#9810fa] to-[#d810fa] bg-clip-text text-transparent">Industry Experts</span>
            </h1>
            <p className="text-lg text-slate-300 mb-6">
              Get personalized career advice from experienced professionals who've been where you want to go. Book 1-on-1 sessions or join group webinars.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#9810fa] to-[#d810fa] text-white font-bold rounded-xl hover:shadow-[0_0_25px_rgba(152,16,250,0.4)] transition-all">
                Book a Session
              </button>
              <button className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-md">
                View Webinars
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-slate-400">
            <Filter size={20} />
            <span className="font-bold">Filter by Specialty:</span>
          </div>
          <div className="flex gap-2 flex-wrap flex-1">
            {specialties.map(spec => (
              <button
                key={spec.id}
                onClick={() => setSelectedSpecialty(spec.id)}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                  selectedSpecialty === spec.id
                    ? 'bg-[#9810fa] text-white shadow-md'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                {spec.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Users size={24} />, number: "500+", label: "Expert Counselors" },
          { icon: <Star size={24} />, number: "4.8", label: "Average Rating" },
          { icon: <MessageCircle size={24} />, number: "50K+", label: "Sessions Completed" },
          { icon: <Award size={24} />, number: "95%", label: "Success Rate" }
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl text-center hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#9810fa]/10 flex items-center justify-center mx-auto mb-3 text-[#9810fa]">
              {stat.icon}
            </div>
            <div className="text-2xl font-black text-[#9810fa] mb-1">{stat.number}</div>
            <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Counselors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCounselors.map((counselor, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-[#9810fa]/50 transition-all group">
            <div className="relative h-40 bg-gradient-to-br from-[#1a2d4c] to-[#13213A]">
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
              <div className="absolute -bottom-12 left-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#9810fa] to-[#d810fa] flex items-center justify-center text-3xl font-black text-white shadow-[0_0_30px_rgba(152,16,250,0.4)] border-4 border-[#13213A]">
                  {counselor.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  counselor.availability === 'Available'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {counselor.availability}
                </span>
              </div>
            </div>

            <div className="pt-16 p-6">
              <h3 className="text-xl font-bold mb-1 group-hover:text-[#9810fa] transition-colors">{counselor.name}</h3>
              <p className="text-[#9810fa] text-sm font-medium mb-1">{counselor.title}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  {counselor.location}
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase size={12} />
                  {counselor.experience}
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-4 leading-relaxed">{counselor.bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {counselor.expertise.slice(0, 3).map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-[#9810fa]/10 border border-[#9810fa]/20 text-xs font-medium text-[#9810fa]">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 mb-4">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-white">{counselor.rating}</span>
                  <span className="text-xs text-slate-400">({counselor.reviews} reviews)</span>
                </div>
                <div className="text-sm text-slate-400">{counselor.students} students</div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2.5 bg-gradient-to-r from-[#9810fa] to-[#d810fa] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(152,16,250,0.4)] transition-all text-sm flex items-center justify-center gap-2">
                  <Calendar size={16} />
                  Book Session
                </button>
                <button className="w-12 h-11 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center">
                  <MessageCircle size={18} />
                </button>
              </div>

              <div className="mt-3 text-center">
                <span className="text-xs text-slate-400">{counselor.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Become a Counselor CTA */}
      <div className="bg-gradient-to-r from-[#9810fa]/10 to-[#00e5ff]/10 border border-white/10 rounded-3xl p-10 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#9810fa] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00e5ff] rounded-full blur-[120px] opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Award size={48} className="mx-auto mb-4 text-[#9810fa]" />
          <h2 className="text-3xl font-bold mb-4">Are You an Industry Expert?</h2>
          <p className="text-slate-300 mb-6 text-lg">
            Join our network of elite counselors and help shape the next generation of tech professionals. Share your expertise and earn while making a difference.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-[#9810fa] to-[#d810fa] text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(152,16,250,0.5)] transition-all">
              Apply as a Counselor
            </button>
            <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
