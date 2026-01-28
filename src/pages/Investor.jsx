import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Camera, QrCode, TrendingUp, CheckCircle, Calendar, Shield, Smartphone, FileText, Activity, Stethoscope, Clock, ChevronRight, X, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ManagementApp from '../assets/management_app.png';

const Section = ({ title, id, icon: Icon, children, className = "" }) => (
    <motion.div
        id={id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`bg-white rounded-2xl shadow-xl overflow-hidden scroll-mt-28 ${className}`}
    >
        <div className="bg-primary/5 p-6 flex items-center gap-4">
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
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const bookingRef = useRef(null);

    const timeSlots = [
        "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM"
    ];

    useEffect(() => {
        if (isBookingOpen && bookingRef.current) {
            setTimeout(() => {
                bookingRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100); // Small delay to allow height animation to start
        }
    }, [isBookingOpen]);
    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Mesh */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] -z-10 rounded-full" />

            <Navbar />


            {/* Header - Investor Data Aesthetic */}
            <div className="pt-32 pb-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 xl:pl-24">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-8 shadow-sm backdrop-blur-md"
                        >
                            <TrendingUp className="w-3.5 h-3.5" />
                            Institutional Grade Biological Assets
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight"
                        >
                            INVESTOR
                        </motion.h1>

                        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                            Secure, transparent, and asset-backed. Manage your biological capital with real-time monitoring and institutional-grade governance.
                        </p>

                        {/* Data Cards */}
                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            {[
                                { label: "Target Stability", value: "High", icon: Shield, trend: "Guaranteed" },
                                { label: "Asset Backing", value: "100%", icon: Activity, trend: "Physical" },
                                { label: "Management", value: "Full", icon: CheckCircle, trend: "Active" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                            <stat.icon className="w-8 h-8" />
                                        </div>
                                        <span className="text-xs font-bold bg-primary/20 text-primary px-2 py-1 rounded">
                                            {stat.trend}
                                        </span>
                                    </div>
                                    <p className="text-slate-300 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                                    <h3 className="text-3xl font-black text-white">{stat.value}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-12 pb-24 relative z-20 space-y-12 xl:pl-24">

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

                {/* 2. Live CCTV Monitoring */}
                <Section title="Live CCTV Monitoring" id="cctv" icon={Camera}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 bg-green-50 p-8 rounded-2xl relative overflow-hidden">
                            <img
                                src={ManagementApp}
                                alt="Live Farm Monitoring"
                                className="w-full h-auto rounded-xl shadow-2xl relative z-10"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <FeatureList items={[
                                "View live CCTV footage of the farm in real-time.",
                                "4 different camera angles per shed for complete visibility.",
                                "No playback or control options to ensure security.",
                                "Secure login with per-investor stream access.",
                                "Real-time health monitoring of livestock via visual feeds."
                            ]} />
                        </div>
                    </div>
                </Section>

                {/* 3. Notifications & Reports */}
                <Section title="Notifications & Reports" id="qrcode" icon={QrCode}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <FeatureList items={[
                                "Stay updated with real-time push notifications.",
                                "Receive alerts for farm operations and health milestones.",
                                "Historical data access for investment tracking.",
                                "Automated monthly dividend and yield reports.",
                                "Secure document vault for investment certificates."
                            ]} />
                        </div>
                        <div className="bg-green-50 p-8 rounded-2xl flex justify-center">
                            <div className="bg-white p-6 rounded-3xl shadow-xl w-64 border-4 border-gray-800">
                                <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
                                <div className="text-center mb-6">
                                    <div className="text-sm text-gray-500 mb-1">Status Update</div>
                                    <div className="font-bold text-lg">April 2026</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 bg-green-100 rounded-full w-full" />
                                    <div className="h-2 bg-green-50 rounded-full w-2/3" />
                                    <div className="h-2 bg-green-50 rounded-full w-3/4" />
                                </div>
                                <div className="mt-8 text-center text-xs text-green-600 font-bold bg-green-100 py-2 rounded-lg">
                                    Operations Active
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 4. Revenue & Health Insights (Consolidated with Transparency) */}
                <Section title="Transparency & Monitoring" id="reports" icon={TrendingUp}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Digital Ownership", desc: "Registered records and document access.", icon: FileText },
                            { title: "Status Updates", desc: "Live health and asset monitoring.", icon: Activity },
                            { title: "Lifecycle Summary", desc: "Full tracking of biological growth.", icon: Smartphone },
                            { title: "Verifiable Records", desc: "No blind trust. Everything is recorded.", icon: CheckCircle }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* 5. Natural Asset Appreciation */}
                <section className="py-24 bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                    <div className="container mx-auto px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8"
                            >
                                <TrendingUp className="w-10 h-10" />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Natural Asset <span className="text-primary italic">Appreciation</span></h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-12">
                                Biological assets generate additional value over time. Any additional assets created during the agreement belong to the investor and increase overall ownership value.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    "Belong to the investor",
                                    "Digitally registered",
                                    "Increase ownership value"
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-gray-800">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Exit Options (CTA) */}
                <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Exit Options</span>
                        <h2 className="text-4xl md:text-6xl font-black mt-4 mb-8">Ownership Freedom <br />After Lock-In</h2>
                        <p className="text-slate-300 text-xl mb-12">After 36 months, you have the absolute freedom to choose your path.</p>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-left">
                                <h4 className="text-primary font-black text-2xl mb-4">Option 1: Continue</h4>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /> Keep earning fixed income</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /> Full Farmvest management</li>
                                </ul>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-left">
                                <h4 className="text-white font-black text-2xl mb-4">Option 2: Exit</h4>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Physical handover of assets</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Ownership of all growth</li>
                                </ul>
                            </div>
                        </div>

                        <a href="/contact-us" className="inline-block bg-primary hover:bg-green-600 text-white px-12 py-5 rounded-full font-black text-xl transition-all shadow-xl shadow-primary/20">
                            Get Investment Details
                        </a>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Investor;
