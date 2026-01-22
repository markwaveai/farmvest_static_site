import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Camera, QrCode, TrendingUp, CheckCircle, Calendar, Shield, Smartphone, FileText, Activity, Stethoscope } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Section = ({ title, id, icon: Icon, children, className = "" }) => (
    <motion.div
        id={id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden scroll-mt-28 ${className}`}
    >
        <div className="bg-primary/5 p-6 border-b border-green-100 flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                <Icon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="p-6 md:p-8">
            {children}
        </div>
    </motion.div>
);

const FeatureList = ({ items }) => (
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
                <div className="mt-1 flex-shrink-0 text-primary">
                    <CheckCircle className="w-5 h-5 fill-green-50" />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
            </motion.li>
        ))}
    </ul>
);

const Investor = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Mesh */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] -z-10 rounded-full" />

            <Navbar />
            

            {/* Header - Intelligence Terminal Aesthetic */}
            <div className="bg-[#020617] pt-40 pb-32 text-white rounded-b-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
                {/* Digital Equity Grid Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,transparent_75%)]" />
                    <div className="absolute inset-0 opacity-[0.15]"
                        style={{
                            backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
                            backgroundSize: '30px 30px'
                        }}
                    />
                    {/* Animated Data Stream */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`absolute h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-scan-y`} style={{ top: `${i * 30}%`, animationDuration: `${5 + i}s` }} />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                            >
                                <Lock className="w-3 h-3" />
                                Encrypted Access : 256-Bit
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter"
                            >
                                INVESTOR <br />
                                <span className="text-indigo-500">TERMINAL</span>
                            </motion.h1>

                            <p className="text-xl text-slate-400 max-w-xl font-medium leading-relaxed mb-10">
                                Global equity monitoring interface for verified institutional partners.
                                <span className="text-indigo-400"> Real-time telemetry connection established.</span>
                            </p>

                            {/* Live Equity Ticker */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                {[
                                    { label: 'EQUITY', val: '14.2%', up: true },
                                    { label: 'YIELD', val: '8.4%', up: true },
                                    { label: 'NODES', val: '12', up: false }
                                ].map((stat, i) => (
                                    <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                                        <p className={`text-lg font-black ${stat.up ? 'text-emerald-400' : 'text-indigo-400'}`}>
                                            {stat.up ? '▲' : '◆'} {stat.val}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Unique Digital Equity Visualization */}
                        <div className="flex-1 w-full max-w-md hidden lg:block">
                            <div className="relative aspect-square">
                                {/* SVG Orbiting Data */}
                                <svg className="w-full h-full animate-spin-slow opacity-20" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="grid grid-cols-4 gap-2">
                                        {Array.from({ length: 16 }).map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.1
                                                }}
                                                className={`w-4 h-4 rounded-sm ${i % 5 === 0 ? 'bg-indigo-500' : 'bg-white/10 shadow-[0_0_15px_rgba(99,102,241,0.3)]'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 p-6 bg-indigo-600 rounded-2xl shadow-2xl flex items-center gap-4">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                    <div>
                                        <p className="text-white/60 text-[10px] font-bold uppercase">Growth Index</p>
                                        <p className="text-2xl font-black text-white">+24%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-12 pb-24 relative z-20 space-y-12">

                {/* 1. Investor Login Section */}
                <Section title="Secure Investor Login" id="login" icon={Lock}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <p className="text-gray-600 text-lg">
                                Investors are provided with a dedicated, secure login portal in the Farmvest application. We prioritize data security and operational safety above all else.
                            </p>
                            <FeatureList items={[
                                "Dedicated login credentials for every investor.",
                                "Strictly read-only access to prevent data modification.",
                                "Secure monitoring of activities without operational interference.",
                                "Access to reports, CCTV viewing, and visit scheduling."
                            ]} />
                        </div>
                        <div className="bg-green-50 p-8 rounded-2xl flex justify-center items-center h-full min-h-[300px]">
                            <Shield className="w-32 h-32 text-primary opacity-20 absolute" />
                            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg w-full max-w-xs">
                                <div className="space-y-4">
                                    <div className="h-2 bg-gray-100 rounded w-1/3" />
                                    <div className="h-10 bg-gray-50 rounded border border-gray-200" />
                                    <div className="h-10 bg-gray-50 rounded border border-gray-200" />
                                    <div className="h-10 bg-primary rounded text-white text-center font-bold flex items-center justify-center">Login</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 2. Live CCTV & Visit Booking */}
                <Section title="Live CCTV & Visit Slot Booking" id="cctv" icon={Camera}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 bg-green-50 p-8 rounded-2xl relative overflow-hidden">
                            <div className="grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center relative group overflow-hidden">
                                        <div className="text-white/50 text-xs">Cam {i}</div>
                                        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <FeatureList items={[
                                "View live CCTV footage of the farm in real-time.",
                                "4 different camera angles per shed for complete visibility.",
                                "No playback or control options to ensure security.",
                                "Book one 30-minute visit slot per month (10:00 AM - 2:00 PM).",
                                "Visit booking subject to slot availability."
                            ]} />
                        </div>
                    </div>
                </Section>

                {/* 3. QR Code & Notifications */}
                <Section title="QR Code Generation & Notifications" id="qrcode" icon={QrCode}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <FeatureList items={[
                                "Unique QR code generated after successful visit booking.",
                                "Acts as a digital visit pass scanned at the farm gate.",
                                "Verifies visit validity and investor authenticity.",
                                "Booking status, QR code, and history available in-app anytime.",
                                "Real-time alerts for updates and bookings."
                            ]} />
                        </div>
                        <div className="bg-green-50 p-8 rounded-2xl flex justify-center">
                            <div className="bg-white p-6 rounded-3xl shadow-xl w-64 border-4 border-gray-800">
                                <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
                                <div className="text-center mb-6">
                                    <div className="text-sm text-gray-500 mb-1">Visit Pass</div>
                                    <div className="font-bold text-lg">April 25, 2026</div>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-xl mb-4">
                                    <QrCode className="w-full h-full text-white" />
                                </div>
                                <div className="text-center text-xs text-green-600 font-bold bg-green-100 py-2 rounded-lg">
                                    Confirmed
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 4. Revenue & Health Insights */}
                <Section title="Revenue Updates & Health Reports" id="reports" icon={TrendingUp}>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-green-50 p-6 rounded-xl hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-3">Financial Reports</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Monthly revenue updates</li>
                                <li>• Investment return summaries</li>
                                <li>• Auto-generated performance reports</li>
                                <li>• Profitability & growth insights</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-3">Health Monitoring</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Farm-wide health updates</li>
                                <li>• Daily & weekly health summaries</li>
                                <li>• Read-only health tickets</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm">
                                <Stethoscope className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-3">Medical Tracking</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Doctor & Assistant treatments</li>
                                <li>• Medicine tracking</li>
                                <li>• Recovery & follow-up status</li>
                            </ul>
                        </div>
                    </div>
                </Section>

            </div>
            <Footer />
        </div>
    );
};

export default Investor;
