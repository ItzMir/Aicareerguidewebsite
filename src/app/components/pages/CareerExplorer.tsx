import { useState } from "react";
import { Search, ChevronRight, Briefcase, Brain, Target, Compass } from "lucide-react";

export function CareerExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCareer, setSelectedCareer] = useState<any>(null);

  const careers = [
    { id: 1, title: "Data Engineer", category: "Data", match: "85%", skills: ["SQL", "ETL", "Spark", "AWS"] },
    { id: 2, title: "Product Manager", category: "Management", match: "60%", skills: ["Agile", "User Research", "Roadmapping", "Jira"] },
    { id: 3, title: "Cloud Architect", category: "Infrastructure", match: "75%", skills: ["AWS/GCP", "Kubernetes", "Terraform", "Networking"] },
    { id: 4, title: "Cybersecurity Analyst", category: "Security", match: "65%", skills: ["Network Security", "Ethical Hacking", "SIEM", "Python"] },
    { id: 5, title: "UX/UI Designer", category: "Design", match: "40%", skills: ["Figma", "Prototyping", "User Testing", "CSS"] },
  ];

  const filteredCareers = careers.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex flex-col gap-8 h-full min-h-[75vh]">
      <div className="text-center max-w-2xl mx-auto mb-4">
        <h1 className="text-4xl font-bold mb-4">Career Explorer</h1>
        <p className="text-slate-400">Search through hundreds of tech roles, discover what they entail, and see the exact skills you need to transition.</p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-3xl mx-auto w-full">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
        <input 
          type="text" 
          placeholder="Search for a career (e.g., Data Engineer, Product Manager)..."
          className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-16 pr-8 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9810fa] focus:bg-white/10 transition-all text-lg shadow-inner"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 flex-1 mt-4">
        {/* List */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-3 overflow-y-auto max-h-[600px]">
          {filteredCareers.map(career => (
            <button 
              key={career.id}
              onClick={() => setSelectedCareer(career)}
              className={`flex items-center justify-between p-5 rounded-2xl border transition-all text-left ${selectedCareer?.id === career.id ? 'bg-[#9810fa]/20 border-[#9810fa] shadow-[0_0_20px_rgba(152,16,250,0.2)]' : 'bg-black/20 border-white/5 hover:border-white/20'}`}
            >
              <div>
                <h3 className="font-bold text-lg text-white mb-1">{career.title}</h3>
                <p className="text-sm text-slate-400">{career.category}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${parseInt(career.match) > 70 ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                  {career.match} Match
                </span>
                <ChevronRight size={20} className={selectedCareer?.id === career.id ? 'text-[#9810fa]' : 'text-slate-500'} />
              </div>
            </button>
          ))}
        </div>

        {/* Details Panel */}
        <div className="bg-gradient-to-br from-[#1a2d4c] to-black/20 border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col">
          <img src="https://images.unsplash.com/photo-1762279388952-85187155e48d?w=1080&q=80" alt="Tech Background" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
          {selectedCareer ? (
            <>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#9810fa] rounded-full blur-[120px] opacity-10 pointer-events-none" />
              
              <div className="mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#9810fa]/20 flex items-center justify-center mb-4 border border-[#9810fa]/30">
                  <Briefcase size={28} className="text-[#9810fa]" />
                </div>
                <h2 className="text-3xl font-black mb-2">{selectedCareer.title}</h2>
                <p className="text-slate-300">Explore the requirements and generate a custom roadmap to pivot into this role.</p>
              </div>

              <div className="bg-black/30 border border-white/5 rounded-2xl p-6 mb-6 relative z-10">
                <h3 className="font-bold mb-4 flex items-center gap-2"><Target className="text-[#00e5ff]" /> Required Skills & Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCareer.skills.map((skill: string) => (
                    <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4 relative z-10">
                <button className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#9810fa] to-[#5800a8] text-white font-bold text-sm hover:shadow-[0_0_20px_rgba(152,16,250,0.5)] transition-all flex items-center justify-center gap-2">
                  <Compass size={18} /> Generate Custom Roadmap
                </button>
                <button className="flex-1 py-4 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Brain size={18} /> Ask AI about feasibility
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center opacity-50">
              <Compass size={64} className="mb-4 text-slate-500" />
              <h3 className="text-xl font-bold mb-2">Select a Career</h3>
              <p className="text-sm">Click on any role from the list to see detailed requirements and skill gaps.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
