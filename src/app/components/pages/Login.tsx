import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowRight, Mail, Lock, User, Shield, Briefcase } from "lucide-react";
import copilotImg from "../../../imports/microsoft-copilot-Z38ADyUhN6s-unsplash.jpg";
import { useAuth } from "../../context/AuthContext";

export function Login() {
  const [role, setRole] = useState<"student" | "advisor" | "admin">("student");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);
    if (role === "student") navigate("/portal/dashboard");
    if (role === "advisor") navigate("/advisor/dashboard");
    if (role === "admin") navigate("/admin/dashboard");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[75vh] gap-8">
      {/* Visual Side */}
      <div className="hidden md:flex w-1/2 h-[600px] rounded-[3rem] overflow-hidden relative border border-white/10 group">
        <div className="absolute inset-0 bg-gradient-to-t from-[#13213A] via-[#13213A]/50 to-transparent z-10" />
        <img 
          src={copilotImg} 
          alt="AI Career guidance" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-12 left-12 right-12 z-20">
          <h2 className="text-3xl font-bold mb-4">Empower Your Trajectory</h2>
          <p className="text-slate-300">Access intelligent tools, connect with industry experts, and track your personalized roadmap to success.</p>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 max-w-md bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff] rounded-full blur-[80px] opacity-20 pointer-events-none" />
        
        <div className="text-center mb-8 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00e5ff] to-[#0088ff] flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            <span className="font-bold text-2xl text-[#13213A]">O</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Select your role and enter your credentials</p>
        </div>

        {/* Role Selector */}
        <div className="flex p-1 bg-black/40 rounded-xl mb-8 relative z-10 border border-white/5">
          <button 
            type="button"
            onClick={() => setRole("student")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${role === "student" ? "bg-white/10 text-white shadow-md" : "text-slate-400 hover:text-white"}`}
          >
            <User size={16} /> Student
          </button>
          <button 
            type="button"
            onClick={() => setRole("advisor")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${role === "advisor" ? "bg-white/10 text-white shadow-md" : "text-slate-400 hover:text-white"}`}
          >
            <Briefcase size={16} /> Advisor
          </button>
          <button 
            type="button"
            onClick={() => setRole("admin")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${role === "admin" ? "bg-white/10 text-white shadow-md" : "text-slate-400 hover:text-white"}`}
          >
            <Shield size={16} /> Admin
          </button>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5 relative z-10">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="email" 
                required
                placeholder="you@example.com"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between ml-1">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <a href="#" className="text-xs text-[#00e5ff] hover:underline">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold text-base hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 mt-2 group"
          >
            Sign In to {role.charAt(0).toUpperCase() + role.slice(1)} Portal
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-6 flex items-center gap-4 relative z-10 before:flex-1 before:h-px before:bg-white/10 after:flex-1 after:h-px after:bg-white/10">
          <span className="text-xs text-slate-500 uppercase tracking-widest">Or quick login</span>
        </div>

        <div className="flex gap-4 mt-6 relative z-10">
          <button className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium flex items-center justify-center gap-2">
            Google
          </button>
          <button className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium flex items-center justify-center gap-2">
            GitHub
          </button>
        </div>

        <div className="mt-8 text-center relative z-10">
          <p className="text-sm text-slate-400">
            Don't have an account? <Link to="/register" className="text-[#00e5ff] font-medium hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
