import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { User, LogOut, Settings } from "lucide-react";
import { useAuth, Role } from "../context/AuthContext";
import userImg from "../../imports/resume-genius-9si2noVCVH8-unsplash.jpg";

export function Layout() {
  const location = useLocation();
  const path = location.pathname;
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getProfileLink = () => {
    if (role === 'student') return "/portal/profile";
    if (role === 'admin') return "/admin/profile";
    if (role === 'advisor') return "/advisor/profile";
    return "/login";
  };

  return (
    <div className="min-h-screen bg-[#13213A] text-slate-100 font-sans flex flex-col relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00e5ff] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#9810fa] rounded-full blur-[200px] opacity-10 pointer-events-none" />

      {/* Navigation Bar - Static */}
      <header className="pt-8 pb-4 flex justify-center w-full px-4 relative z-50">
        <nav className="w-full max-w-[80%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-between px-8 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00e5ff] to-[#0088ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.4)]">
              <span className="font-bold text-xl tracking-tighter text-[#13213A]">O</span>
            </div>
            <span className="font-black text-2xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              OCULAR
            </span>
          </Link>

          {/* Nav Links based on Role */}
          <div className="hidden lg:flex items-center gap-2 bg-white/5 rounded-2xl p-1 border border-white/5">
            {!role && (
              <>
                <NavLink to="/" current={path} exact>Home</NavLink>
                <NavLink to="/login" current={path}>Dashboard</NavLink>
                <NavLink to="/about" current={path}>About</NavLink>
                <NavLink to="/articles" current={path}>Articles</NavLink>
                <NavLink to="/counselors" current={path}>Counselors</NavLink>
                <NavLink to="/events" current={path}>Events</NavLink>
              </>
            )}

            {role === 'student' && (
              <>
                <NavLink to="/" current={path} exact>Home</NavLink>
                <NavLink to="/portal/dashboard" current={path}>Dashboard</NavLink>
                <NavLink to="/portal/recommendations" current={path}>AI Recommends</NavLink>
                <NavLink to="/portal/roadmaps" current={path}>Roadmaps</NavLink>
                <NavLink to="/portal/resources" current={path}>Resources</NavLink>
                <NavLink to="/portal/chat" current={path}>Chat</NavLink>
              </>
            )}

            {role === 'admin' && (
              <>
                <NavLink to="/" current={path} exact>Home</NavLink>
                <NavLink to="/admin/dashboard" current={path}>Dashboard</NavLink>
                <NavLink to="/admin/users" current={path}>User Management</NavLink>
                <NavLink to="/admin/advisors" current={path}>Advisor Assignment</NavLink>
                <NavLink to="/admin/categories" current={path}>Career Categories</NavLink>
                <NavLink to="/admin/resources" current={path}>Add Resources</NavLink>
              </>
            )}

            {role === 'advisor' && (
              <>
                <NavLink to="/" current={path} exact>Home</NavLink>
                <NavLink to="/advisor/dashboard" current={path}>Dashboard</NavLink>
                <NavLink to="/advisor/articles" current={path}>Articles & Videos</NavLink>
                <NavLink to="/advisor/chat" current={path}>Chat</NavLink>
                <NavLink to="/advisor/webinars" current={path}>Webinars</NavLink>
              </>
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {!role ? (
              <Link 
                to="/login"
                className="px-6 py-2.5 rounded-xl bg-[#00e5ff] text-[#13213A] font-semibold text-sm hover:bg-[#00cce6] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300"
              >
                Login / Register
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                {role === 'admin' && (
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold mr-2">ADMIN</span>
                )}
                {role === 'advisor' && (
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold mr-2">ADVISOR</span>
                )}
                
                {/* Profile Icon / Avatar */}
                <Link to={getProfileLink()} className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden hover:border-[#00e5ff] transition-colors shadow-lg" title="Edit Profile">
                  <img src={userImg} alt="Profile" className="w-full h-full object-cover" />
                </Link>
                
                <button onClick={handleLogout} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10" title="Logout">
                  <LogOut size={18} className="text-slate-300" />
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full pt-8 pb-20 px-4 md:px-8 max-w-7xl mx-auto z-10 flex flex-col relative">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0a1222] border-t border-white/5 py-12 mt-auto z-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00e5ff] to-[#0088ff] flex items-center justify-center">
              <span className="font-bold text-sm tracking-tighter text-[#13213A]">O</span>
            </div>
            <span className="font-bold text-lg tracking-widest text-slate-300">OCULAR</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 OCULAR AI Career Guidance. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-[#00e5ff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00e5ff] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#00e5ff] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, current, exact = false, children }: { to: string, current: string, exact?: boolean, children: React.ReactNode }) {
  const isActive = exact ? current === to : current.startsWith(to) && to !== '/';
  
  return (
    <Link 
      to={to}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
        isActive 
          ? 'bg-white/10 text-white shadow-inner' 
          : 'text-slate-300 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  );
}
