import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Users,
    TrendingUp,
    Database,
    Lock,
    ClipboardCheck,
    ArrowRightLeft,
    BarChart3,
    Eye,
    ShieldAlert,
    FileCheck2,
    History,
    Zap,
    Scale,
    SearchCheck,
    LockKeyhole
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ResponsibilityCard = ({ icon: Icon, title, subtitle, items, colorClass }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="glass-card border border-white/10 p-8 rounded-[2.5rem] flex flex-col h-full bg-slate-900/40 relative overflow-hidden group"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

        <div className={`w-14 h-14 rounded-2xl ${colorClass} flex items-center justify-center mb-6 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform`}>
            <Icon className="w-8 h-8 text-white" />
        </div>

        <div className="mb-6">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] break-words">{subtitle}</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1 leading-tight group-hover:text-primary transition-colors">{title}</h3>
        </div>

        <ul className="space-y-4 mt-auto">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors flex-shrink-0" />
                    <span className="text-slate-600 text-sm leading-relaxed group-hover/item:text-slate-900 transition-colors font-black">{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const Admin = () => {
    const categories = [
        {
            icon: Database,
            title: "Asset Registry Control",
            subtitle: "Central Asset Management",
            colorClass: "bg-blue-600",
            items: [
                "View all registered assets",
                "Validate induction & records",
                "Lock, flag, or audit assets",
                "Ensure ownership continuity",
                "Verify lifecycle integrity"
            ]
        },
        {
            icon: Users,
            title: "User & Role Management",
            subtitle: "Role-Based Access Control",
            colorClass: "bg-purple-600",
            items: [
                "Investor access control",
                "Supervisor permissions",
                "Manager & System roles",
                "Access scopes & limitations",
                "Authorization boundaries"
            ]
        },
        {
            icon: ShieldCheck,
            title: "Risk & Replacement",
            subtitle: "Capital Protection Oversight",
            colorClass: "bg-emerald-600",
            items: [
                "Replacement policy enforcement",
                "Asset equivalence validation",
                "Risk event monitoring",
                "Income continuity confirmation",
                "Risk absorption oversight"
            ]
        },
        {
            icon: FileCheck2,
            title: "Compliance & Audit",
            subtitle: "System Accountability",
            colorClass: "bg-amber-600",
            items: [
                "Review compliance reports",
                "Access audit trails",
                "Validate protocol adherence",
                "Export regulatory records",
                "Traceable action logging"
            ]
        },
        {
            icon: ArrowRightLeft,
            title: "Exit & Handover Control",
            subtitle: "Ownership Transition",
            colorClass: "bg-rose-600",
            items: [
                "Exit eligibility validation",
                "Asset handover documentation",
                "Ownership record updates",
                "Lifecycle closure status",
                "Dispute-free transitions"
            ]
        },
        {
            icon: BarChart3,
            title: "Reports & Analytics",
            subtitle: "Platform Intelligence",
            colorClass: "bg-indigo-600",
            items: [
                "Asset distribution analytics",
                "Risk frequency patterns",
                "Replacement statistics",
                "System health indicators",
                "Governance improvements"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-display selection:bg-primary selection:text-white relative overflow-hidden">
            <Navbar />

            {/* Admin Command Center Header */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-mesh opacity-30" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -rotate-12 translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-x-[-20%] translate-y-[20%]" />
                <div className="absolute inset-0 blueprint-grid opacity-10" />

                <div className="container mx-auto px-4 relative z-10 xl:pl-24">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 shadow-2xl"
                        >
                            <ShieldAlert className="w-4 h-4" />
                            System Administration Center
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10"
                        >
                            ADMIN
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-3xl border-l-4 border-primary/30 pl-8"
                        >
                            Admins ensure the platform follows defined rules by overseeing governance, assets, and
                            <span className="text-green-500"> risk management.</span>
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Core Administrative Functions Overview */}
            <section className="py-24 bg-white relative border-y border-slate-100">
                <div className="container mx-auto px-4 xl:pl-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* <span className="text-primary font-black text-xs uppercase tracking-[0.5em] block mb-6">Core Functions</span> */}
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight">Governance <br />& <span className="text-primary">Core</span></h2>

                            <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                {[
                                    { title: "Governance", icon: Scale, desc: "Rule enforcement" },
                                    { title: "Registry", icon: Database, desc: "Asset mapping" },
                                    { title: "Access", icon: LockKeyhole, desc: "RBAC protocols" },
                                    { title: "Integrity", icon: SearchCheck, desc: "Audit readiness" }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-3 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300">
                                        <item.icon className="w-8 h-8 text-primary" />
                                        <div>
                                            <h4 className="text-slate-900 font-bold text-sm">{item.title}</h4>
                                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 backdrop-blur-md"
                            >
                                <p className="text-slate-800 text-xl font-black italic leading-relaxed">
                                    "Governing biological assets with <span className="text-primary">technical precision</span> and <span className="text-primary">legal clarity</span>."
                                </p>
                            </motion.div>
                        </motion.div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
                            <div className="relative grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xl overflow-hidden">
                                        <div className="text-4xl font-extrabold text-slate-900 mb-2">100%</div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest break-words">Digital Registration</p>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xl overflow-hidden">
                                        <div className="text-4xl font-extrabold text-slate-900 mb-2">Traceable</div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest break-words">Audit Trails</p>
                                    </div>
                                </div>
                                <div className="space-y-6 pt-16">
                                    <div className="p-6 rounded-3xl bg-primary border border-primary shadow-2xl shadow-primary/20 overflow-hidden">
                                        <div className="text-4xl font-extrabold text-white mb-2">Locked</div>
                                        <p className="text-white/70 text-xs font-bold uppercase tracking-widest break-words">Asset Integrity</p>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xl overflow-hidden">
                                        <div className="text-4xl font-extrabold text-slate-900 mb-2">Logged</div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest break-words">System Actions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Control Systems Grid */}
            <section className="py-32 relative bg-slate-50">
                <div className="container mx-auto px-4 xl:pl-24 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                        <div>
                            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] block mb-4">Control Systems</span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight">Administrative <span className="text-primary italic">Protocols</span></h2>
                        </div>
                        <div className="h-px flex-1 bg-slate-200 hidden md:block mx-12 translate-y-[-10px]" />
                        {/* <div className="text-slate-400 font-black uppercase tracking-widest text-sm">
                            v4.0.0 Stable Build
                        </div> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {categories.map((card, i) => (
                            <ResponsibilityCard key={i} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Verification Infrastructure */}
            <section className="py-24 bg-white relative overflow-visible border-t border-slate-100">
                <div className="container mx-auto px-4 xl:pl-24 relative z-10">
                    <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 md:p-20 relative group overflow-visible shadow-sm">
                        {/* Glowing Background Accent */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="grid md:grid-cols-3 gap-12 md:gap-16 relative z-10">
                            {[
                                { title: "Ownership Mapping", desc: "Every biological asset is digitally linked to a primary owner verified by the registry.", icon: Users },
                                { title: "Time-Stamped Logs", desc: "Every lifecycle event, from induction to handover, is chronologically time-stamped.", icon: History },
                                { title: "Policy Enforcement", desc: "Platform ensures risk absorption and income continuity through automated rules.", icon: ClipboardCheck }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="text-center md:text-left"
                                >
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto md:mx-0 border border-slate-100 shadow-xl shadow-slate-900/5 transition-transform duration-300 group-hover:scale-110">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">{feature.title}</h4>
                                    <p className="text-slate-500 text-base leading-relaxed font-bold">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>



            <Footer />
        </div>
    );
};

export default Admin;
