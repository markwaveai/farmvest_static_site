import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Users, TrendingUp, Activity, Settings, Bell, Search, Database } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminCard = ({ icon: Icon, title, value, trend, color }) => (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl ${color} bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
                <Icon className={`w-6 h-6 ${color}`} />
            </div>
            {trend && (
                <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {trend}
                </span>
            )}
        </div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{title}</p>
        <h3 className="text-3xl font-black text-slate-900">{value}</h3>
    </div>
);

const Admin = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50 relative overflow-hidden">
            <Navbar />

            {/* Admin Header */}
            <div className="pt-32 pb-16 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-black uppercase tracking-widest mb-4">
                                <ShieldAlert className="w-3 h-3" />
                                System Administration
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                Admin <span className="text-teal-500 italic">Console</span>
                            </h1>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-6 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-teal-900/20 text-sm">
                                System Logs
                            </button>
                            <button className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white border border-white/10 rounded-xl font-bold transition-all text-sm">
                                Database
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="container mx-auto px-4 -mt-8 pb-24 relative z-20 space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AdminCard
                        icon={Users}
                        title="Total Investors"
                        value="1,284"
                        trend="+12%"
                        color="text-blue-500"
                    />
                    <AdminCard
                        icon={TrendingUp}
                        title="Total Capital"
                        value="₹ 84.5M"
                        trend="+5.4L"
                        color="text-green-500"
                    />
                    <AdminCard
                        icon={Activity}
                        title="Active Units"
                        value="452"
                        color="text-purple-500"
                    />
                    <AdminCard
                        icon={ShieldAlert}
                        title="System Health"
                        value="99.9%"
                        color="text-teal-500"
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Management Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                                <h3 className="font-bold text-slate-800">User Management</h3>
                                <div className="relative">
                                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search users..."
                                        className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                    />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-dashed border-slate-200 hover:border-teal-200 hover:bg-teal-50/10 transition-all cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold group-hover:bg-teal-100 group-hover:text-teal-600 transition-colors">
                                                    U{i}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-800 text-sm">Investor User_0{i}</p>
                                                    <p className="text-xs text-slate-500">investor0{i}@farmvest.com</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">ACTIVE</span>
                                                <Settings className="w-4 h-4 text-slate-300 group-hover:text-slate-600" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold text-sm hover:border-teal-300 hover:text-teal-600 transition-all">
                                    View All Users
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Actions */}
                    <div className="space-y-6">
                        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group shadow-xl">
                            <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl group-hover:bg-teal-500/30 transition-all" />
                            <Database className="w-12 h-12 text-teal-500 mb-6" />
                            <h3 className="text-xl font-bold mb-3">System Configuration</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Manage farm parameters, investment tiers, and global system settings from the secure core.
                            </p>
                            <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-bold transition-all text-sm">
                                Configure Core
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <Bell className="w-4 h-4 text-orange-500" />
                                Notifications
                            </h3>
                            <div className="space-y-4">
                                <div className="p-3 bg-orange-50 border border-orange-100 rounded-xl">
                                    <p className="text-xs font-bold text-orange-800 mb-1">Backup Success</p>
                                    <p className="text-[10px] text-orange-600">Daily database backup completed successfully 2h ago.</p>
                                </div>
                                <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                                    <p className="text-xs font-bold text-blue-800 mb-1">New Enrollment</p>
                                    <p className="text-[10px] text-blue-600">12 new investment units active in Zone B.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Admin;
