import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Camera, QrCode, TrendingUp, CheckCircle, Calendar, Shield, Smartphone, FileText, Activity, Stethoscope, Clock, ChevronRight, X, ChevronLeft, User, LockKeyhole, Bell, RefreshCw } from 'lucide-react';
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
                            className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-normal"
                        >
                            INVESTOR
                        </motion.h1>

                        <p className="text-xl text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
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
                        <div className="bg-green-50/50 p-8 rounded-3xl flex justify-center items-center h-full min-h-[350px] relative overflow-hidden group">
                            <Shield className="w-48 h-48 text-primary/5 absolute -right-10 -bottom-10 rotate-12 group-hover:scale-110 transition-transform duration-700" />
                            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl w-full max-w-[300px] border border-white/50 backdrop-blur-sm">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-1 bg-primary/20 rounded-full" />
                                        <div className="w-4 h-1 bg-primary/10 rounded-full" />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest px-1">
                                                <User className="w-3 h-3 text-primary" /> Investor ID
                                            </div>
                                            <div className="h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center px-4 text-slate-300 italic text-sm">
                                                ID-XXXX-PRJ
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest px-1">
                                                <LockKeyhole className="w-3 h-3 text-primary" /> Password
                                            </div>
                                            <div className="h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center px-4 text-slate-300 italic text-sm">
                                                ••••••••••••
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <div className="h-14 bg-primary hover:bg-green-600 rounded-2xl text-white text-center font-black flex items-center justify-center shadow-lg shadow-primary/20  transition-all uppercase tracking-widest text-xs">
                                            Secure Login
                                        </div>
                                    </div>

                                    <p className="text-[9px] text-slate-400 text-center font-bold uppercase tracking-tighter opacity-60">
                                        Encrypted Session • Farmvest Security
                                    </p>
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

                {/* 3. Slot Booking System */}
                <Section title="Visit Scheduling & Slot Booking" id="booking" icon={Calendar}>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    {/* <Shield className="w-5 h-5 text-primary" /> Booking */}
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { t: "Monthly Frequency", d: "One visit slot per month", i: Calendar },
                                        { t: "Visit Duration", d: "Fixed 30-minute window", i: Clock },
                                        { t: "Verification Protocol", d: "Entry after verifying booking & ID", i: Lock },
                                        { t: "Slot Finality", d: "Locked after submission", i: CheckCircle }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-3 p-3 bg-white rounded-xl border border-slate-100 items-start">
                                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                                                <item.i className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-xs">{item.t}</h4>
                                                <p className="text-gray-500 text-[10px]">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <FeatureList items={[
                                "Real-time availability of visit slots.",
                                "Direct calendar integration for date selection.",
                                "Automated booking confirmation and digital pass.",
                                "Visitor detail verification at the main gate."
                            ]} />
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group border border-slate-100">
                            {/* Decorative background elements matching the light theme */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[60px] -z-0" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-8">

                                </div>

                                {/* 3D Tent Calendar Simulation */}
                                <div className="perspective-container relative mb-12 h-48 flex justify-center items-center">
                                    <div className="relative w-full max-w-[320px] h-full transition-transform duration-700 hover:rotate-y-12">
                                        {/* Tent Structure - Back Side */}
                                        <div className="absolute inset-0 bg-slate-200 rounded-2xl origin-bottom transform -rotate-x-45 translate-z-neg-20 shadow-inner" />

                                        {/* Tent Structure - Front Face (The Calendar) */}
                                        <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl origin-bottom transform rotate-x-12 border border-slate-100 flex flex-col overflow-hidden">
                                            {/* Light Blue Calendar Face */}
                                            <div className="bg-sky-50/80 p-6 flex-1">
                                                <div className="grid grid-cols-7 gap-1 mb-4">
                                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                                                        <div key={d} className="text-[9px] text-sky-500 font-black text-center opacity-70">{d}</div>
                                                    ))}
                                                </div>
                                                <div className="grid grid-cols-7 gap-1">
                                                    {Array.from({ length: 31 }).map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`h-7 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all
                                                                ${i + 1 === 18 ? 'bg-sky-500 text-white shadow-lg shadow-sky-200 cursor-pointer scale-110' :
                                                                    (i + 1) % 4 === 0 ? 'text-slate-200' : 'text-sky-900/40 hover:bg-sky-100 cursor-pointer'}`}
                                                        >
                                                            {i + 1}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Bottom Edge Reflection/Shadow */}
                                            <div className="h-2 bg-gradient-to-b from-slate-50 to-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Time Slots - Matching Light Theme */}
                                <div className="space-y-3">
                                </div>


                            </div>
                        </div>
                    </div>
                </Section>

                {/* 4. QR Code Generation */}
                <Section title="QR Code Generation" id="qrcode" icon={QrCode}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                                <QrCode className="w-4 h-4" />
                                Digital Access Protocol
                            </div>

                            <h3 className="text-3xl font-black text-slate-900 leading-tight">
                                Automated <span className="text-primary italic">Visit Pass</span> Generation
                            </h3>

                            <ul className="space-y-6">
                                {[
                                    "After successful visit slot booking, the system generates a unique QR code for the investor.",
                                    "The QR code acts as digital visit pass for farm entry.",
                                    "At the farm gate, the QR code is scanned to verify visit validity and investor authenticity.",
                                    "Visit details and the QR code are displayed in the application after booking.",
                                    "Investors can view booking status, QR code, and visit history at any time."
                                ].map((point, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 items-start group"
                                    >
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <p className="text-slate-600 font-bold leading-relaxed">{point}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="p-10 bg-white rounded-[3rem] shadow-2xl border border-slate-100/50 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <QrCode className="w-48 h-48 text-primary opacity-80 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 5. Investor Notifications */}
                <Section title="Investor Notifications" id="notifications" icon={Bell}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[280px] shadow-xl flex flex-col items-center justify-start overflow-hidden">
                                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 relative">
                                    <div className="bg-white p-4 pt-10 pb-4 shadow-sm z-10 relative">
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-bold text-slate-800">Notifications</h3>
                                            <Bell className="w-4 h-4 text-slate-400" />
                                        </div>
                                    </div>

                                    <div className="p-4 space-y-3">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                                                <CheckCircle className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-800">Visit Confirmed</p>
                                                <p className="text-[9px] text-slate-500">Your visit to Shed 4 on Apr 25 is approved.</p>
                                                <p className="text-[8px] text-slate-400 mt-1">2 mins ago</p>
                                            </div>
                                        </div>

                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                                                <Shield className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-800">Security Alert</p>
                                                <p className="text-[9px] text-slate-500">Scheduled maintenance at North Gate.</p>
                                                <p className="text-[8px] text-slate-400 mt-1">1 hour ago</p>
                                            </div>
                                        </div>

                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 opacity-60">
                                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
                                                <Activity className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-800">Health Update</p>
                                                <p className="text-[9px] text-slate-500">Weekly buffalo health report is ready.</p>
                                                <p className="text-[8px] text-slate-400 mt-1">Yesterday</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h3 className="text-3xl font-black text-slate-900 leading-tight">
                                Stay Informed with <span className="text-primary italic">Instant Alerts</span>
                            </h3>
                            <FeatureList items={[
                                "Receive real-time push notifications for visit approvals.",
                                "Get alerts when you pass through security gates.",
                                "Instant updates on livestock health and milestones.",
                                "Reminders for upcoming scheduled visits.",
                                "Quarterly performance report availability alerts."
                            ]} />
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
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-left">
                                <h4 className="text-primary font-black text-2xl mb-3">Option 1: Continue</h4>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /> Keep earning fixed income</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /> Full Farmvest management</li>
                                </ul>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-left">
                                <h4 className="text-white font-black text-2xl mb-3">Option 2: Exit</h4>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Physical handover of assets</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Ownership of all growth</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Investor;
