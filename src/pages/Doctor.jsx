import React from 'react';
import { motion } from 'framer-motion';
import {
    Stethoscope,
    ShieldCheck,
    FileText,
    Activity,
    ClipboardList,
    Syringe,
    Pill,
    UserCheck,
    AlertTriangle,
    CheckCircle2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Assets
import appImage from '../assets/management_app.png'; // Fallback for app interface
import supervisorImage from '../assets/supervisor_inspection.png'; // Context for tickets
import DirectivesBg from '../assets/doctor_directives.png';

const Doctor = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#f8fafc] relative overflow-hidden text-slate-800">
            {/* Background Medical Cross Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cross-stripes.png')] opacity-[0.02] -z-10" />

            <Navbar />

            {/* Header Section - Distinct Medical Theme */}
            <div className="relative pt-44 pb-40 overflow-hidden bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                {/* Pulse Animation Effect */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full animate-pulse blur-[120px]" />
                    {/* CSS Based Medical Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900 to-slate-900/40" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center lg:text-left xl:pl-24">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1"
                        >
                            <div className="inline-flex items-center gap-3 mb-8 bg-teal-500/10 border border-teal-500/20 px-6 py-2 rounded-full backdrop-blur-xl">
                                <Stethoscope className="w-5 h-5 text-teal-400" />
                                <span className="text-teal-400 font-black text-xs uppercase tracking-[0.4em]">Chief Medical Console</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-[0.05em] leading-none">
                                DOCTOR
                            </h1>

                            <p className="text-xl text-slate-400 max-w-xl font-medium leading-relaxed mb-10">
                                Advanced veterinary diagnostics and orchestrated treatment workflows for large-scale livestock management.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="w-full max-w-md lg:block"
                        >
                            <div className="bg-slate-800/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <Activity className="absolute -top-6 -right-6 w-32 h-32 text-teal-500/10" />
                                <div className="space-y-8 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 bg-teal-500/20 rounded-2xl flex items-center justify-center">
                                            <Activity className="w-6 h-6 text-teal-400 animate-pulse" />
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">System Status</p>
                                            <p className="text-teal-500 font-bold">Operational</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="pb-4 border-b border-white/5">
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-teal-400 font-bold text-xs uppercase">Health Index</p>
                                                <p className="text-teal-400 text-xs font-black">98%</p>
                                            </div>
                                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "98%" }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className="h-full bg-teal-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="pb-4 border-b border-white/5">
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-blue-400 font-bold text-xs uppercase">Recovery Rate</p>
                                                <p className="text-blue-400 text-xs font-black">94%</p>
                                            </div>
                                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "94%" }}
                                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                    className="h-full bg-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">
                                                    D{i}
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full border-2 border-slate-800 bg-teal-500 flex items-center justify-center text-[10px] font-bold text-white">
                                                +
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-slate-500 mt-3 font-medium">Assistant Doctors Online</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-20 pb-24 space-y-24 xl:pl-24 pt-12">

                {/* 1. Login & Access Control - Glassmorphism Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <ShieldCheck className="w-8 h-8 text-teal-600" />
                                    Secure Medical Access
                                </h2>
                                <p className="text-slate-600">
                                    A dedicated, secure portal designed strictly for medical professionals. Focus on health, not operations.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {[
                                    { icon: UserCheck, text: "Dedicated Doctor Login Credentials" },
                                    { icon: FileText, text: "Limited Access to Medical Records Only" },
                                    { icon: ShieldCheck, text: "No Operational Data Exposure" },
                                    { icon: Activity, text: "Strict Data Confidentiality" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-teal-50 transition-colors">
                                            <item.icon className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <span className="font-medium text-slate-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-md">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-teal-500/20 blur-2xl rounded-full" />
                                <div className="relative bg-slate-900 rounded-2xl p-1 shadow-2xl overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-[4/3] flex flex-col">
                                    <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="flex-1 bg-slate-900 p-6 flex flex-col items-center justify-center">
                                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                                            <div className="w-16 h-16 bg-teal-500 rounded-xl mx-auto flex items-center justify-center mb-4">
                                                <Stethoscope className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="text-white font-bold text-lg">Dr. Login Portal</div>
                                            <div className="text-slate-400 text-sm">Verify Credentials</div>
                                        </div>
                                        <div className="flex gap-2 justify-center mt-4 md:mt-auto md:pb-2">
                                            <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                                            <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse delay-75" />
                                            <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse delay-150" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Health Issue Review - Split Layout */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1 relative"
                    >
                        <div className="absolute -inset-4 bg-teal-50 rounded-3xl transform -rotate-3 z-0" />
                        <img
                            src={supervisorImage}
                            alt="Supervisor reporting issues"
                            className="relative z-10 w-full rounded-2xl shadow-xl scale-110 origin-center transition-transform duration-500"
                        />

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2 space-y-6"
                    >
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Priority Assessment</span>
                        <h2 className="text-4xl font-bold text-slate-900">Health Issue Review</h2>
                        <p className="text-slate-600 text-lg">
                            Review detailed health tickets raised by supervisors, prioritized by farm managers. Access comprehensive descriptions and severity indicators to ensure accurate assessment.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {[
                                "View all supervisor-raised health issues.",
                                "Analyze severity levels: Critical, Moderate, Mild.",
                                "Review attached reports and medical history.",
                                "Prioritized queue for urgent attention."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* 3. Diagnosis & Treatment - Cards Layout */}
                <div className="space-y-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Medical Action</span>
                        <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Diagnosis & Instructions</h2>
                        <p className="text-slate-600">
                            Digital prescription and treatment tracking system to ensure continuity of care and rapid recovery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Diagnosis Card */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <ClipboardList className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Clinical Diagnosis</h3>
                            <p className="text-slate-600 mb-4">
                                Provide detailed medical diagnosis for reported issues directly in the system.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2">
                                <li>• Symptom analysis</li>
                                <li>• Disease identification</li>
                                <li>• Record keeping</li>
                            </ul>
                        </motion.div>

                        {/* Treatment Card */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-teal-500"
                        >
                            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                                <Syringe className="w-7 h-7 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Orchestrated Treatment</h3>
                            <p className="text-slate-600 mb-4">
                                Define clear treatment plans and prescribe medications with dosage details.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2">
                                <li>• Dosage instructions</li>
                                <li>• Administration route</li>
                                <li>• Duration of therapy</li>
                            </ul>
                        </motion.div>

                        {/* Follow-up Card */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-500"
                        >
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                                <Activity className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Recovery Tracking</h3>
                            <p className="text-slate-600 mb-4">
                                Monitor progress and schedule follow-up actions or discharge.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-2">
                                <li>• Progress updates</li>
                                <li>• Follow-up checkups</li>
                                <li>• Assistant coordination</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* 4. Diagnosis & Instructions + Follow-up Recommendations & Updates */}
                <section className="relative py-24 rounded-[4rem] overflow-hidden group shadow-3xl mb-12">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={DirectivesBg}
                            alt="Background"
                            className="w-full h-full object-cover transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-900/95" />
                        <div className="absolute inset-0 bg-teal-500/5 mix-blend-overlay" />
                    </div>

                    <div className="container mx-auto px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            {/* Follow-up Recommendations & Updates Block */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-10"
                            >
                                <div className="space-y-4 text-center">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                        Follow-up <span className="text-blue-400 italic font-serif">Recommendations & Updates</span>
                                    </h2>
                                    <div className="h-1 w-32 bg-blue-500 rounded-full mx-auto" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                    {[
                                        "Monitor treatment progress through system updates",
                                        "Guide follow-up actions based on recovery status",
                                        "Keep medical instructions available for reference",
                                        "Coordinate with Assistant Doctors for minor cases",
                                        "Ensure continuity of care across treatments",
                                        "Improve overall Buffaloe health management"
                                    ].map((text, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-4 group/item"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:bg-blue-500 transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-blue-400 group-hover/item:bg-white transition-colors" />
                                            </div>
                                            <p className="text-lg text-slate-300 font-medium leading-relaxed group-hover/item:text-white transition-colors">
                                                {text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    );
};

export default Doctor;
