import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, ShieldAlert, BadgeInfo, Tractor, CheckCircle, AlertTriangle, Syringe, Activity, Key, User, LockKeyhole } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BuffaloShed from '../assets/buffalo_shed.png';
import EntryExit from '../assets/entry_exit.png';

const Section = ({ title, icon: Icon, children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden ${className}`}
    >
        <div className="bg-blue-50 p-6 border-b border-blue-100 flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                <Icon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="p-8 md:p-10">
            {children}
        </div>
    </motion.div>
);

const CheckList = ({ items }) => (
    <ul className="space-y-4">
        {items.map((item, index) => (
            <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
            >
                <div className="mt-1 flex-shrink-0 text-blue-600">
                    <CheckCircle className="w-5 h-5 fill-blue-50" />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
            </motion.li>
        ))}
    </ul>
);

const FarmManager = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50 relative overflow-hidden">
            {/* Background Data Wave Pattern */}
            <div className="absolute top-0 right-0 w-full h-[600px] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-[0.03] -z-10" />

            <Navbar />

            {/* Header */}
            <div className="bg-[#1e293b] pt-40 pb-32 text-white relative overflow-hidden shadow-2xl transition-all duration-500">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[400px] h-full bg-blue-600/5 skew-x-[-20deg] translate-x-32" />
                <div className="absolute bottom-0 left-0 w-[300px] h-64 bg-indigo-600/5 skew-x-[20deg] -translate-x-16" />

                {/* CSS Based Scanner Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent absolute animate-scan-x right-1/4" />
                    <div className="h-full w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent absolute animate-scan-x left-1/4" />
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute animate-scan-y top-1/4" />
                </div>

                <div className="container mx-auto px-4 relative z-10 xl:pl-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-600 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                    <Tractor className="w-6 h-6 text-white" />
                                </div>
                                {/* <span className="h-px w-12 bg-blue-600/50" /> */}
                                {/* <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em]">Executive Console</span> */}
                            </div>

                            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[0.9] tracking-[0.05em]">
                                FARM <br />
                                <span className="text-blue-600">MANAGER</span>
                            </h1>

                            <p className="text-xl text-slate-300 max-w-xl font-medium leading-relaxed">
                                Strategic oversight and operational orchestration of multi-farm ecosystems with real-time health data integration.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="w-full max-w-lg lg:block"
                        >
                            <div className="bg-slate-800/50 backdrop-blur-2xl border border-white/5 p-8 rounded-[3rem] shadow-3xl relative overflow-hidden group">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-all" />
                                <div className="grid grid-cols-2 gap-6 relative z-10">
                                    {[
                                        { l: 'Efficiency', v: '98%', c: 'text-green-400', progress: 98 },
                                        { l: 'Uptime', v: '99.9%', c: 'text-blue-400', progress: 99.9 },
                                        { l: 'Incidents', v: '02', c: 'text-orange-400', progress: 15 },
                                        { l: 'Active Staff', v: '142', c: 'text-indigo-400', progress: 85 }
                                    ].map((s, i) => (
                                        <div key={i} className="space-y-3">
                                            <p className="text-[10px] text-slate-300 uppercase font-bold tracking-widest">{s.l}</p>
                                            <p className={`text-3xl font-black ${s.c}`}>{s.v}</p>
                                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${s.progress}%` }}
                                                    className={`h-full bg-current ${s.c}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24 relative z-20 space-y-16 xl:pl-24 pt-20">

                {/* 1. Access & Responsibilities */}
                <Section title="Access & Responsibilities" icon={Key}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <CheckList items={[
                                "Dedicated login with higher-level access.",
                                "Greater operational control than other roles.",
                                "Oversees farm-wide activities and health data.",
                                "Monitors operations, tickets, and medical workflows.",
                                "Coordinates between supervisors and doctors.",
                                "Ensures centralized and efficient farm management."
                            ]} />
                        </div>
                        <div className="bg-blue-50/50 p-8 rounded-[3rem] flex justify-center items-center h-full min-h-[400px] relative overflow-hidden group">
                            <Key className="w-48 h-48 text-blue-600/5 absolute -right-10 -bottom-10 rotate-12 group-hover:scale-110 transition-transform duration-700" />
                            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl w-full max-w-[300px] border border-white/50 backdrop-blur-sm">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-1 bg-blue-600/20 rounded-full" />
                                        <div className="w-4 h-1 bg-blue-600/10 rounded-full" />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest px-1">
                                                <User className="w-3 h-3 text-blue-600" /> Manager Auth ID
                                            </div>
                                            <div className="h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center px-4 text-slate-400 font-medium text-sm">
                                                MGR-VEST-8812
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest px-1">
                                                <LockKeyhole className="w-3 h-3 text-blue-600" /> Admin Token
                                            </div>
                                            <div className="h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center px-4 text-slate-400 font-medium text-sm">
                                                ••••••••••••
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <div className="h-14 bg-blue-600 rounded-2xl text-white text-center font-black flex items-center justify-center shadow-lg shadow-blue-600/20 cursor-default uppercase tracking-widest text-xs">
                                            Access Control Console
                                        </div>
                                    </div>

                                    <p className="text-[9px] text-slate-400 text-center font-bold uppercase tracking-tighter opacity-60">
                                        System Administrator Override Only
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 2. Login & Ticket Management */}
                <Section title="Login & Ticket Management" icon={ClipboardCheck}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 relative h-64 md:h-full min-h-[380px] bg-blue-50 rounded-2xl p-6 flex flex-col items-center justify-center">
                            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4 space-y-4">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-bold text-gray-700">Ticket #1042</span>
                                    <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-bold">High Priority</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    Fever / high body temperature
                                </div>
                                <div className="flex justify-end">
                                    <p className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg">Assign Doctor</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl" />
                            <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-xl" />
                        </div>
                        <div className="order-1 md:order-2">
                            <CheckList items={[
                                "One dedicated Farm Manager assigned per farm.",
                                "Secure login with authorized credentials.",
                                "Supervisor-raised tickets auto-reflected in Farm Manager account.",
                                "Complete visibility of ticket details and status tracking.",
                                "Detailed analysis of reported health issues and diseases.",
                                "Enables timely action on farm and livestock health concerns."
                            ]} />
                        </div>
                    </div>
                </Section>

                {/* 3. Disease Priority Levels */}
                <Section title="Disease Priority Levels & Assignment" icon={AlertTriangle}>
                    <div className="space-y-6">
                        <p className="text-gray-600 mb-4">
                            The Farm Manager assigns disease priority based on severity to ensure a structured and appropriate medical response.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <ShieldAlert className="w-6 h-6 text-red-600" />
                                    <h3 className="font-bold text-red-800 text-lg">High Priority</h3>
                                </div>
                                <p className="text-red-700/80 text-sm">
                                    For critical or emergency health conditions requiring immediate attention.
                                </p>
                            </div>
                            <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <Activity className="w-6 h-6 text-orange-600" />
                                    <h3 className="font-bold text-orange-800 text-lg">Medium Priority</h3>
                                </div>
                                <p className="text-orange-700/80 text-sm">
                                    For issues requiring timely medical attention but not immediately life-threatening.
                                </p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <BadgeInfo className="w-6 h-6 text-green-600" />
                                    <h3 className="font-bold text-green-800 text-lg">Low Priority</h3>
                                </div>
                                <p className="text-green-700/80 text-sm">
                                    For minor or non-critical health issues to be addressed during routine rounds.
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-sm font-medium text-gray-600">
                            Priority level determines Doctor or Assistant Doctor assignment
                        </div>
                    </div>
                </Section>

                {/* 4. Entry & Exit Management */}
                <Section title="Livestock Entry & Exit Work flow" icon={Tractor}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <CheckList items={[
                                "Only the Farm Manager is authorized to manage entry into sheds.",
                                "Farm Manager exclusively controls exit from sheds.",
                                "Entry and exit access restricted from all other roles.",
                                "Coordinates medical work flows based on ticket priority.",
                                "Reviews medical reports and treatment updates regularly.",
                                "Ensures smooth and effective healthcare management."
                            ]} />
                        </div>
                        <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                            <img src={EntryExit} alt="Entry Exit" className="w-full h-full object-cover object-top transition-transform duration-500" />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                            {/* Overlay Badge */}

                        </div>
                    </div>
                </Section>

            </div>
            <Footer />
        </div>
    );
};

export default FarmManager;
