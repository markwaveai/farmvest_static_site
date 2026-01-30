import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Users, Activity, CheckCircle, FileText, Zap, Anchor, Droplet, Dna } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionBg from '../assets/section_bg.jpg';
import ManagementApp from '../assets/structured_asset_dashboard.png';
import HeroBg from '../assets/hero_bg.png';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[50vh] md:h-auto md:min-h-0 lg:min-h-screen flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 md:relative md:h-auto lg:absolute">
                    <motion.div
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full"
                    >
                        <img
                            src={HeroBg}
                            alt="FarmVest Hero"
                            className="w-full h-full object-cover md:w-full md:h-auto lg:h-full lg:object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </motion.div>
                </div>

                <div className="container relative z-10 px-4 h-full flex flex-col justify-end items-center text-center pb-24 md:absolute md:inset-x-0 md:bottom-0 md:pb-12 lg:relative lg:h-full lg:pb-24 lg:pl-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-5xl"
                    >
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="text-5xl sm:text-7xl md:text-[4rem] lg:text-[8rem] xl:text-[150px] font-black text-white leading-[0.9] tracking-tighter drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] select-none mb-6 whitespace-nowrap letter-spacing-[-0.05em]"
                        >
                            FARM VEST
                        </motion.h1>
                        <p className="text-white/80 text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-8">
                            Structured Biological Asset Management
                        </p>

                        <div className="pt-8 border-t border-white/20 inline-block px-12">
                            <p className="text-white/50 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                                Structured Returns • Total Transparency • Asset Protection
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Farmvest Section - The Problem We Solve */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10 xl:pl-24">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold tracking-widest uppercase text-xs mb-6">
                                Why Farmvest
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
                                The Problem <br /><span className="text-primary italic">We Solve</span>
                            </h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6 max-w-xl">
                                Agriculture has always been real — but never structured.
                                <br />Investments have always promised returns — but often lacked real backing.
                            </p>
                            <div className="h-1 w-24 bg-primary rounded-full mb-12" />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                                <p className="text-gray-700 text-lg leading-relaxed italic relative z-10">
                                    "We enable individuals to own real biological assets, earn stable income, and stay fully protected from operational and biological risk."
                                </p>
                            </motion.div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Assets are real and owned", icon: CheckCircle, color: "bg-green-500" },
                                { title: "Income is contractual and predictable", icon: TrendingUp, color: "bg-blue-500" },
                                { title: "Risk is absorbed by the platform", icon: ShieldCheck, color: "bg-indigo-500" },
                                { title: "Trust is built through visibility", icon: Users, color: "bg-emerald-500" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-200/20 flex flex-col items-start gap-6 hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 ${item.color}/10 rounded-2xl flex items-center justify-center text-primary`}>
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 leading-tight">{item.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* White Revolution 2.0 */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight">
                                    The 'White Revolution 2.0' Philosophy
                                </h2>
                                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                    We are driving a shift from the original White Revolution—which focused on volume—to a new era prioritizing <span className="text-primary font-bold">verification, integrity, and engineering purity</span> at the source.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Rather than treating milk as a commodity, Farmvest treats it as a biological product whose quality is strictly determined by the animal's health, feed, and environment.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { label: "100%", sub: "Source Verified" },
                                    { label: "Daily", sub: "Purity Checks" },
                                    { label: "Guaranteed", sub: "Antibiotic Free" },
                                    { label: "End-to-End", sub: "Traceability" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-12 hover:bg-white/10 transition-colors group">
                                        <div className="text-2xl md:text-2xl font-black text-white min-w-[100px] md:min-w-[220px] leading-none group-hover:text-primary transition-colors">
                                            {stat.label}
                                        </div>
                                        <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] leading-tight flex-1 break-words">
                                            {stat.sub}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What Makes Farmvest Different */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 lg:pl-24">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">What Makes Farmvest Different</span>
                            <h2 className="text-3xl md:text-3xl lg:text-6xl font-black mt-2 mb-8 leading-[1.1] max-w-2xl">
                                Not Farming <br />Not Speculation <br /><span className="text-primary">A Structured Asset Platform</span>
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                Farmvest professionally manages biological assets the way financial institutions manage portfolios — with governance, protection, and accountability.
                            </p>
                            <div className="space-y-4">
                                {["A traditional agriculture business", "A speculative investment scheme", "A trust-based partnership model"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-400">
                                        <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-xs">✕</div>
                                        <span>Farmvest is NOT {item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="hidden md:block"
                        >
                            <img
                                src={ManagementApp}
                                alt="Structured Platform"
                                className="rounded-xl shadow-2xl mb-8 opacity-80 w-full lg:scale-[1.15] origin-center transition-transform duration-500"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* How the Farmvest Model Works */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                {/* Background Special Features */}
                <div className="absolute inset-0 bg-mesh opacity-20" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-0 blueprint-grid opacity-10" />

                <div className="container mx-auto px-4 relative z-10 xl:pl-24">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-white/50 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                        >
                            The Blueprint
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase"
                        >
                            How the Farmvest Model Works
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { title: "Asset Acquisition", desc: "You purchase ownership of biological assets through a defined unit structure.", icon: Zap },
                            { title: "Expert Management", desc: "Farmvest handles operations, monitoring, risk management, and protection.", icon: ShieldCheck },
                            { title: "Fixed Income", desc: "Monthly income is paid as per agreement terms — independent of market volatility.", icon: TrendingUp },
                            { title: "Capital Safety", desc: "Any asset loss is replaced by Farmvest, ensuring continuity.", icon: CheckCircle },
                            { title: "Flexible Exit", desc: "After 36 months, you can continue or exit with full ownership rights.", icon: Anchor }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-b from-white/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
                                <div className="relative h-full p-8 rounded-[2rem] glass-card border border-white/10 flex flex-col items-center text-center group-hover:bg-white/5 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <div className="h-16 flex items-center justify-center mb-4">
                                        <h3 className="font-bold text-white text-xl transition-colors leading-tight">{item.title}</h3>
                                    </div>
                                    <p className="text-slate-200 text-sm leading-relaxed font-medium transition-colors">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Built on Asset Protection */}
            <section className="py-24 bg-green-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${SectionBg})` }} />
                <div className="container mx-auto px-4 relative z-10 lg:pl-24">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Built on Asset Protection, Not Assumptions</span>
                            <h2 className="text-3xl md:text-3xl lg:text-5xl font-black mt-2 mb-8 leading-[1.1]">Risk Is Managed, <br className="hidden lg:block" /> <span className="text-white/70">Not Transferred</span></h2>
                            <p className="text-green-50 text-lg md:text-base lg:text-xl leading-relaxed mb-8">
                                In most asset classes, risk is passed to the investor. At <span className="text-primary font-bold">Farmvest</span>, risk is absorbed by the system.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                                {[
                                    { title: "Capital safety", icon: ShieldCheck },
                                    { title: "Income continuity", icon: TrendingUp },
                                    { title: "Asset replacement guarantees", icon: CheckCircle },
                                    { title: "Legal clarity of ownership", icon: FileText }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                        <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                                        <span className="font-bold text-sm lg:text-base">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-green-200 italic">This is what makes Farmvest investable at scale.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="p-8 bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-2xl">
                                <Activity className="w-16 h-16 text-primary mb-6" />
                                <h3 className="text-3xl font-black mb-4">Engineered Stability</h3>
                                <p className="text-green-50/80 leading-relaxed mb-6">
                                    Our operational framework is designed to eliminate variables. We don't just react to risks; we pre-solve them through systematic management and full platform absorption.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Transparency at Every Stage */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 lg:pl-24">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="w-full md:w-5/12 lg:w-1/2"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] md:border-8 border-gray-50">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full aspect-video object-cover opacity-90"
                                >
                                    <source src="/hero_video.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute bottom-1.5 right-0 w-full bg-black/100 text-right">
                                    <span className="text-white/100 font-black tracking-tighter italic mr-3">
                                        FarmVest
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="w-full md:w-7/12 lg:w-1/2"
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-sm">Transparency at Every Stage</span>
                            <h2 className="text-3xl md:text-3xl lg:text-5xl font-black text-gray-900 mt-2 mb-8 leading-tight">Trust Through <span className="text-primary">Visibility</span></h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Digital ownership records", desc: "Transparent, immutable tracking of your assets." },
                                    { title: "Asset lifecycle tracking", desc: "Follow every stage of your biological asset's growth." },
                                    { title: "Operational visibility", desc: "24/7 access to farm activities and monitoring." },
                                    { title: "Clear contractual obligations", desc: "Defined terms that protect your rights at every step." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 flex-shrink-0">
                                            <CheckCircle className="w-3.5 h-3.5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-sm lg:text-base">{item.title}</h4>
                                            <p className="text-gray-600 text-xs lg:text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <p className="text-gray-800 font-bold text-sm lg:text-base">No hidden processes. No blind trust.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Long-Term Value & Exit Strategy */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10 lg:pl-24">
                    <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 items-start">
                        {/* Left Side: Growth */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">Asset Growth</span>
                            </div>
                            <h2 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 md:mb-8 leading-[1.1]">
                                Biological Value <span className="text-primary italic">Appreciation</span>
                            </h2>
                            <p className="text-slate-400 text-base md:text-sm lg:text-lg leading-relaxed mb-8 md:mb-10">
                                Biological assets naturally grow over time. Any new assets generated belong to the owner and are registered and tracked, representing real value appreciation.
                            </p>
                            <div className="p-5 md:p-6 bg-white/5 rounded-2xl border border-white/10 italic text-slate-300 text-sm md:text-base">
                                "Farmvest is designed for long-term stability, not short-term extraction."
                            </div>
                        </motion.div>

                        {/* Right Side: Exit Freedom */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 md:space-y-8"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center text-white/50">
                                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <span className="text-slate-400 font-bold tracking-widest uppercase text-xs">Exit Strategy</span>
                            </div>
                            <h3 className="text-2xl md:text-2xl lg:text-4xl font-black leading-[1.2]">Your Choice, <br className="hidden lg:block" /> Built Into the System.</h3>

                            <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                                {[
                                    { id: 1, title: "Continue earning predictable income" },
                                    { id: 2, title: "Exit with physical ownership of assets" }
                                ].map((item) => (
                                    <div key={item.id} className="group p-4 md:p-5 bg-white/5 hover:bg-primary/10 rounded-xl border border-white/10 transition-all flex items-center gap-4 md:gap-5">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-sm md:text-base group-hover:bg-primary transition-colors">
                                            {item.id}
                                        </div>
                                        <span className="font-bold text-slate-200 text-sm md:text-base">{item.title}</span>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who Farmvest Is Built For */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 lg:gap-16 items-center lg:pl-24">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                            Who Farmvest Is <br className="hidden md:block" /> <span className="text-primary italic">Built For</span>
                        </h2>
                        <p className="text-gray-600 text-lg md:text-base mt-4 md:mt-6 leading-relaxed">
                            Our model is designed for institutional-grade reliability, serving those who value physical backing and contractual clarity above speculative growth.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                        {[
                            "Investors seeking stable, asset-backed income",
                            "Individuals who value capital protection",
                            "Those looking to diversify beyond traditional markets",
                            "Long-term thinkers who believe in structured ownership"
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gray-50 p-6 lg:p-8 rounded-2xl border border-gray-100 flex flex-row md:flex-row items-center gap-6 group hover:bg-primary transition-all duration-300"
                            >
                                <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:bg-green-100 flex-shrink-0">
                                    <Users className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <p className="font-bold text-gray-800 group-hover:text-white transition-colors text-left text-sm lg:text-base leading-snug">{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Core Belief */}
            <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-gray-100">
                <div className="container mx-auto px-4 relative z-10 lg:pl-24">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="text-center md:text-left">
                            <h3 className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Core Belief</h3>
                            <h4 className="text-3xl md:text-3xl lg:text-5xl font-black text-gray-900 leading-tight">Trusted by Design. <br /><span className="text-primary">Backed by Reality.</span></h4>
                        </div>
                        <div className="space-y-6 md:space-y-8 text-center md:text-left">
                            <div className="space-y-4">
                                <p className="text-xl md:text-lg lg:text-2xl font-black text-gray-900 leading-tight">
                                    Real assets deserve real governance.<br />
                                    Real ownership deserves real protection.<br />
                                    Real trust must be engineered, not assumed.
                                </p>
                            </div>
                            <p className="text-gray-500 text-lg md:text-base">
                                Farmvest is building a future where financial stability and real assets grow together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 lg:pl-24">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl md:text-2xl lg:text-5xl font-black text-white mb-4 md:mb-6">Start Owning Real Assets with Confidence</h2>
                            <p className="text-white/80 text-base md:text-sm lg:text-xl">
                                Join the technological revolution in biological asset management.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                            <Link to="/contact-us" className="bg-white text-primary hover:bg-green-50 px-8 py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full font-black text-lg md:text-lg lg:text-xl transition-all shadow-xl shadow-black/10 whitespace-nowrap">
                                Talk to an Advisor
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
