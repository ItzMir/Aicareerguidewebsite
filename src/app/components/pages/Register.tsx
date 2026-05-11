import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowRight, Mail, Lock, User, Shield, Briefcase, UserPlus } from "lucide-react";
import registerImg from "../../../imports/pang-yuhao-_kd5cxwZOK4-unsplash__1_.jpg";
import { useAuth } from "../../context/AuthContext";

export function Register() {
  const [role, setRole] = useState<"student" | "advisor" | "admin">("student");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);
    if (role === "student") navigate("/portal/dashboard");
    if (role === "advisor") navigate("/advisor/dashboard");
    if (role === "admin") navigate("/admin/dashboard");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[75vh] gap-8">
      {/* Form Side */}
      <div className="w-full md:w-1/2 max-w-md bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl relative overflow-hidden order-2 md:order-1">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#9810fa] rounded-full blur-[80px] opacity-20 pointer-events-none" />
        
        <div className="text-center mb-8 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#9810fa] to-[#5800a8] flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(152,16,250,0.3)]">
            <UserPlus size={24} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-slate-400 text-sm">Join OCULAR and map your future</p>
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

        <form onSubmit={handleRegister} className="flex flex-col gap-5 relative z-10">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                required
                placeholder="John Doe"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9810fa] focus:ring-1 focus:ring-[#9810fa] transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="email" 
                required
                placeholder="you@example.com"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9810fa] focus:ring-1 focus:ring-[#9810fa] transition-all"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9810fa] focus:ring-1 focus:ring-[#9810fa] transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#9810fa] to-[#5800a8] text-white font-bold text-base hover:shadow-[0_0_30px_rgba(152,16,250,0.4)] transition-all duration-300 flex items-center justify-center gap-2 mt-2 group"
          >
            Create {role.charAt(0).toUpperCase() + role.slice(1)} Account
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 text-center relative z-10">
          <p className="text-sm text-slate-400">
            Already have an account? <Link to="/login" className="text-[#9810fa] font-medium hover:underline">Sign In</Link>
          </p>
        </div>
      </div>

      {/* Visual Side */}
      <div className="hidden md:flex w-1/2 h-[600px] rounded-[3rem] overflow-hidden relative border border-white/10 group order-1 md:order-2">
        <div className="absolute inset-0 bg-gradient-to-t from-[#13213A] via-[#13213A]/50 to-transparent z-10" />
        <img 
          src={registerImg} 
          alt="Collaboration and learning" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-12 left-12 right-12 z-20 text-right">
          <h2 className="text-3xl font-bold mb-4">A Community of Innovators</h2>
          <p className="text-slate-300">Join thousands of students and mentors shaping the future of technology and business.</p>
        </div>
      </div>
    </div>
  );
}
