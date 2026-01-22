import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    ShieldCheck,
    ClipboardList,
    Stethoscope,
    Pill,
    FileText,
    Activity,
    CheckCircle,
    Clock,
    Eye,
    TrendingUp
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Use the newly generated images
import treatmentImg from '../assets/treatment_administering.png';

const InfoCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-8 rounded-3xl shadow-xl shadow-teal-900/5 border border-teal-50 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 group"
    >
        <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const CheckItem = ({ text, delay = 0 }) => (
    <motion.li
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex items-start gap-3"
    >
        <div className="mt-1 flex-shrink-0 w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-3 h-3 text-teal-600" />
        </div>
        <span className="text-gray-700 font-medium">{text}</span>
    </motion.li>
);

const AssistantDoctor = () => {
    return (
        <div className="min-h-screen bg-[#fafdfc] flex flex-col font-sans relative overflow-hidden">
            {/* Background Medical Task Pattern */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-[url('https://www.transparenttextures.com/patterns/p5.png')] opacity-[0.05] -z-10" />

            <Navbar />

            {/* Hero Section - Tactical Medical Console Aesthetic */}
            <section className="relative pt-44 pb-32 overflow-hidden bg-[#0a1a1a] border-b border-teal-500/20">
                {/* Tech Grid Background with Medicine Flow */}
                <div className="absolute inset-0 z-0 opacity-[0.4]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0d2e2e_0%,transparent_70%)]" />
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(rgba(13, 148, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 148, 136, 0.1) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }}
                    />
                    {/* Animated "Medicine Particles" Flow */}
                    <div className="absolute inset-0">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: [0, 0.5, 0], x: '110vw' }}
                                transition={{
                                    duration: 10 + Math.random() * 20,
                                    repeat: Infinity,
                                    delay: Math.random() * 10
                                }}
                                className="absolute w-1 h-1 bg-teal-400/30 blur-[2px] rounded-full"
                                style={{ top: `${Math.random() * 100}%` }}
                            />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-3 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-xl mb-10 backdrop-blur-xl"
                            >
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-teal-600 border-2 border-[#0a1a1a] flex items-center justify-center text-[8px] font-black leading-none">DR</div>
                                    <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-[#0a1a1a] flex items-center justify-center text-[8px] font-black leading-none">AS</div>
                                </div>
                                <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">Direct Doctor-to-Asst. Link</span>
                            </motion.div>

                            <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-[0.85] tracking-tighter">
                                FIELD <br />
                                <span className="text-teal-500">INTERVENTION</span>
                            </h1>

                            <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-12 font-medium">
                                Executing medical directives and precision treatments under the supervision of Chief Medical Officers.
                                <span className="text-teal-500 block mt-2">Protocol: Systematic Recovery Verification.</span>
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                                {[
                                    { label: 'DOCTOR GUIDED', val: 'ENABLED', color: 'text-emerald-400' },
                                    { label: 'MED-INVENTORY', val: 'SECURED', color: 'text-blue-400' },
                                    { label: 'ZONE STATUS', val: 'ACTIVE', color: 'text-teal-400' }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                        <div className={`text-sm font-black ${item.color}`}>{item.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tactical Medical Workflow Visualization */}
                        <div className="flex-1 w-full max-w-xl hidden lg:block">
                            <div className="relative p-1 bg-gradient-to-br from-teal-500/20 to-transparent rounded-[4rem]">
                                <div className="bg-[#0f2424] p-10 rounded-[3.8rem] border border-white/5 relative overflow-hidden group shadow-2xl">
                                    {/* Scanning Diagnostic Line */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent w-40 h-full animate-scan-x -left-20 pointer-events-none" />

                                    <div className="flex justify-between items-center mb-10">
                                        <div className="space-y-1">
                                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Diagnostic Pulse</p>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-1 bg-teal-500 rounded-full animate-pulse" />
                                                <div className="w-10 h-1 bg-teal-500/20 rounded-full overflow-hidden">
                                                    <motion.div animate={{ x: [-40, 40] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-full h-full bg-teal-500" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-black text-teal-500 uppercase">Authenticated</div>
                                            <div className="text-[8px] text-slate-500 font-medium">Field-MD v4.2</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8">
                                        {/* Activity Log Simulation */}
                                        <div className="space-y-4">
                                            {[
                                                { t: '12:40 PM', a: 'Medicine Administered' },
                                                { t: '12:15 PM', a: 'Doc Approval Recvd' },
                                                { t: '11:50 AM', a: 'Vital Checkup : Pass' }
                                            ].map((log, i) => (
                                                <div key={i} className="flex gap-3 items-start border-l-2 border-teal-500/20 pl-4 py-1">
                                                    <div className="text-[9px] font-mono text-teal-600">{log.t}</div>
                                                    <div className="text-[10px] font-bold text-slate-300">{log.a}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Circular Gauge CSS */}
                                        <div className="relative flex flex-col items-center justify-center">
                                            <div className="w-24 h-24 rounded-full border-4 border-teal-500/10 border-t-teal-500 animate-spin-slow flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-teal-500/5 flex items-center justify-center">
                                                    <Activity className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform" />
                                                </div>
                                            </div>
                                            <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Intervention Accuracy <br /><span className="text-teal-500 text-lg">99.8%</span></p>
                                        </div>
                                    </div>

                                    <div className="mt-10 p-4 bg-teal-500/10 rounded-2xl border border-teal-500/20 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-teal-500 text-[#0f2424] rounded-lg flex items-center justify-center">
                                                <ShieldCheck className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] font-black text-teal-500 uppercase tracking-widest">Recovery Validated</span>
                                        </div>
                                        <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Login & Access Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Login & Access Control</h2>
                            <p className="text-xl text-gray-500">Streamlined and secure interface for focused medical responsibilities.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                        <ShieldCheck className="w-6 h-6 text-teal-600" /> Role Security
                                    </h3>
                                    <ul className="space-y-4">
                                        <CheckItem text="Dedicated login in the Farmvest application" delay={0.1} />
                                        <CheckItem text="Access limited to tickets assigned by Doctors" delay={0.2} />
                                        <CheckItem text="View only related medical records" delay={0.3} />
                                        <CheckItem text="No access to farm-wide operational data" delay={0.4} />
                                        <CheckItem text="Ensures strict role-based security" delay={0.5} />
                                        <CheckItem text="Focused on assigned medical responsibilities" delay={0.6} />
                                    </ul>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-10 bg-teal-500/5 blur-3xl -z-10 rounded-full" />
                                <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-8 rounded-[40px] shadow-2xl text-white">
                                    <div className="flex justify-between items-center mb-12">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                            <Users className="w-6 h-6" />
                                        </div>
                                        <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-teal-50">
                                            Authorized Access Only
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="h-4 bg-white/10 rounded-full w-2/3" />
                                        <div className="h-12 bg-white/20 rounded-2xl border border-white/30" />
                                        <div className="h-12 bg-white/20 rounded-2xl border border-white/30" />
                                        <div className="h-14 bg-white rounded-2xl flex items-center justify-center font-bold text-teal-800 mt-8">
                                            Sign In to Portal
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Responsibilities Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full" />

                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <img src={treatmentImg} alt="Treatment" className="rounded-[40px] shadow-2xl border border-white/10" />
                        </motion.div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic text-teal-400">Core Responsibilities</h2>
                            <p className="text-xl text-gray-400 mb-12">Working under expert guidance to ensure consistent healthcare delivery for our livestock.</p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Stethoscope, title: "Expert Guidance", text: "Work under the guidance of Doctors" },
                                    { icon: ClipboardList, title: "Precision Docs", text: "Follow diagnosis & instructions" },
                                    { icon: Activity, title: "Prioritized Care", text: "Handle low-priority health issues" },
                                    { icon: Eye, title: "Regular Visits", text: "Visit assigned animals for treatment" },
                                    { icon: Pill, title: "Medication", text: "Administer prescribed medicines" },
                                    { icon: TrendingUp, title: "Efficiency", text: "Support medical care delivery" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-100 text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-gray-400 leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Updates & Reports */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Treatment Updates */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 p-10 rounded-[40px] border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-teal-600/20">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-8">Treatment Updates</h3>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-4 text-gray-600">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full" /> Update system after completion
                                </li>
                                <li className="flex items-center gap-4 text-gray-600">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full" /> Record treatment details accurately
                                </li>
                                <li className="flex items-center gap-4 text-gray-600">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full" /> Document medicines administered
                                </li>
                                <li className="flex items-center gap-4 text-gray-600">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full" /> Update visit date and time
                                </li>
                                <li className="flex items-center gap-4 text-gray-600">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full" /> Record health condition status
                                </li>
                                <li className="flex items-center gap-4 text-gray-600">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full" /> Ensure transparency in records
                                </li>
                            </ul>
                        </motion.div>

                        {/* Follow-up Reports */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-teal-900 p-10 rounded-[40px] text-white shadow-2xl shadow-teal-900/20"
                        >
                            <div className="w-16 h-16 bg-teal-400 rounded-2xl flex items-center justify-center text-teal-900 mb-8">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold mb-8">Follow-up Reports</h3>
                            <div className="space-y-6">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <p className="text-teal-200 text-sm mb-1 uppercase tracking-wider font-bold">Visibility</p>
                                    <p className="text-gray-300">Visible to Doctors, Farm Managers & Investors (View-only)</p>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-teal-400" /> Upload reports after treatment
                                    </li>
                                    <li className="flex items-center gap-4 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-teal-400" /> Record recovery progress
                                    </li>
                                    <li className="flex items-center gap-4 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-teal-400" /> Document additional observations
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AssistantDoctor;
