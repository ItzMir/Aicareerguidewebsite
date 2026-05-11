import { useState } from 'react';
import { Users, Shield, BookOpen, Settings } from 'lucide-react';

export function AdminUsers() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">User Management</h1>
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="flex justify-between items-center mb-6">
          <input type="text" placeholder="Search users..." className="bg-black/20 border border-white/10 rounded-xl px-4 py-2 w-64 focus:outline-none focus:border-[#00e5ff]" />
          <button className="px-4 py-2 bg-[#00e5ff] text-[#13213A] font-bold rounded-xl">Add New User</button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 border-b border-white/10">
              <th className="pb-4 font-medium">Name</th>
              <th className="pb-4 font-medium">Role</th>
              <th className="pb-4 font-medium">Status</th>
              <th className="pb-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {['Alex Carter', 'Maria Santos', 'John Doe'].map((name, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-4 text-white font-medium">{name}</td>
                <td className="py-4 text-slate-300">Student</td>
                <td className="py-4"><span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold">Active</span></td>
                <td className="py-4 text-[#00e5ff] cursor-pointer hover:underline">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminAdvisors() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Advisor Assignment</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-xl font-bold mb-4">Unassigned Students</h2>
          <div className="space-y-3">
            {['John Doe - CS Major', 'Alice Smith - Data Science'].map((s, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-black/20 border border-white/5">
                <span className="text-sm">{s}</span>
                <button className="text-xs text-[#00e5ff] border border-[#00e5ff] px-2 py-1 rounded">Assign</button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-xl font-bold mb-4">Active Advisors</h2>
          <div className="space-y-3">
            {['Dr. Alan Wei (48 students)', 'Sarah Jenkins (32 students)'].map((a, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-black/20 border border-white/5">
                <span className="text-sm text-white">{a}</span>
                <button className="text-xs text-slate-400 hover:text-white">View Load</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdminCategories() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Career Categories</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {['Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Cloud Computing'].map((cat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#00e5ff]/50 transition-colors cursor-pointer group">
            <h3 className="font-bold text-lg text-white group-hover:text-[#00e5ff]">{cat}</h3>
            <p className="text-sm text-slate-400 mt-2">12 Roles • 45 Resources</p>
          </div>
        ))}
        <div className="bg-transparent border-2 border-dashed border-white/20 rounded-3xl p-6 flex items-center justify-center cursor-pointer hover:border-[#00e5ff]/50 transition-colors">
          <span className="text-slate-400 font-bold">+ Add Category</span>
        </div>
      </div>
    </div>
  );
}

export function AdminResources() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Add Resources</h1>
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-400">Resource Title</label>
            <input type="text" className="bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#00e5ff]" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-400">URL / Link</label>
            <input type="url" className="bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#00e5ff]" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-400">Category</label>
            <select className="bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#00e5ff]">
              <option>Machine Learning</option>
              <option>Web Development</option>
            </select>
          </div>
          <button type="button" className="mt-4 px-6 py-3 bg-gradient-to-r from-[#00e5ff] to-[#0088ff] text-[#13213A] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
            Upload Resource
          </button>
        </form>
      </div>
    </div>
  );
}

export function AdminProfile() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="relative w-full h-[200px] rounded-3xl overflow-hidden border border-white/10 flex items-center justify-between px-10" style={{ backgroundImage: 'linear-gradient(135deg, #1a2d4c 0%, #13213A 100%)' }}>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />

        <div className="relative z-10 flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl border-4 border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.4)] overflow-hidden bg-gradient-to-br from-[#00e5ff] to-[#0088ff] flex items-center justify-center">
            <span className="text-2xl font-black text-[#13213A]">AD</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">Administrator Profile</h1>
            <p className="text-[#00e5ff] font-medium flex items-center gap-2">
              <Shield size={18} />
              System Administrator
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <button className="px-6 py-3 rounded-xl bg-[#00e5ff] text-[#13213A] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all text-sm font-bold">
            Save All Changes
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Settings */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Personal Info */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Users className="text-[#00e5ff]" />
              Personal Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Full Name</label>
                <input type="text" defaultValue="Admin User" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00e5ff] focus:outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Email Address</label>
                <input type="email" defaultValue="admin@ocular.ai" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00e5ff] focus:outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Phone Number</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00e5ff] focus:outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Department</label>
                <input type="text" defaultValue="System Administration" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00e5ff] focus:outline-none transition-colors" />
              </div>
            </div>
          </section>

          {/* System Preferences */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Settings className="text-[#00e5ff]" />
              System Preferences
            </h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/10">
                <div>
                  <h3 className="font-bold text-white mb-1">Email Notifications</h3>
                  <p className="text-sm text-slate-400">Receive alerts about system events and user activities</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00e5ff]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/10">
                <div>
                  <h3 className="font-bold text-white mb-1">Two-Factor Authentication</h3>
                  <p className="text-sm text-slate-400">Add an extra layer of security to your account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00e5ff]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/10">
                <div>
                  <h3 className="font-bold text-white mb-1">Activity Logs</h3>
                  <p className="text-sm text-slate-400">Track all administrative actions in the system</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00e5ff]"></div>
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 ml-1">Default Dashboard View</label>
                <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00e5ff] focus:outline-none transition-colors appearance-none">
                  <option>Overview Statistics</option>
                  <option>Recent Activity</option>
                  <option>User Management</option>
                  <option>System Health</option>
                </select>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Shield className="text-[#00e5ff]" />
              Security Settings
            </h2>
            <div className="space-y-4">
              <button className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-left hover:bg-white/5 transition-colors">
                <h3 className="font-bold text-white mb-1">Change Password</h3>
                <p className="text-sm text-slate-400">Update your administrator password</p>
              </button>
              <button className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-left hover:bg-white/5 transition-colors">
                <h3 className="font-bold text-white mb-1">Manage API Keys</h3>
                <p className="text-sm text-slate-400">Create and revoke system API access tokens</p>
              </button>
              <button className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-left hover:bg-white/5 transition-colors">
                <h3 className="font-bold text-white mb-1">Session Management</h3>
                <p className="text-sm text-slate-400">View and manage active administrator sessions</p>
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Quick Actions */}
          <section className="bg-gradient-to-b from-[#1a2d4c] to-white/5 border border-[#00e5ff]/30 rounded-3xl p-6 backdrop-blur-xl sticky top-32">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Settings className="text-[#00e5ff]" />
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] font-bold hover:bg-[#00e5ff]/20 transition-all text-sm">
                View System Logs
              </button>
              <button className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold hover:bg-white/20 transition-all text-sm">
                Export User Data
              </button>
              <button className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold hover:bg-white/20 transition-all text-sm">
                System Backup
              </button>
              <button className="w-full py-3 px-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-bold hover:bg-red-500/20 transition-all text-sm">
                Clear Cache
              </button>
            </div>
          </section>

          {/* Account Stats */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-lg font-bold mb-6">Account Activity</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Last Login</span>
                  <span className="text-white font-medium">Today, 9:30 AM</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Account Created</span>
                  <span className="text-white font-medium">Jan 15, 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Actions</span>
                  <span className="text-white font-medium">2,847</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
