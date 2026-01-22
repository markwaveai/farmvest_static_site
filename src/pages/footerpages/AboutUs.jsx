import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, ShieldCheck, Award, Monitor, Activity, TrendingUp } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModernShed from '../../assets/footerimages1/modern_buffalo_shed.png';

const FeatureItem = ({ icon: Icon, title, text }) => (
    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 italic transition-all hover:bg-green-50">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
        </div>
    </div>
);

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1596733430502-d7373f0e8f00?q=80&w=2832"
                        alt="Buffalo Farm"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        Digitizing <span className="text-primary italic">Buffalo</span> Farming
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed italic">
                        FarmVest is a technology-driven buffalo farming investment platform. We bridge the gap between investors and agriculture through real-time monitoring and expert management.
                    </p>
                </div>
            </section>

            {/* Core Concept */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 italic leading-tight">
                                Innovation Meets <br />
                                <span className="text-primary">Traditional Farming</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed italic">
                                Our platform allows investors to earn stable returns from buffalo farming while maintaining complete transparency. Every aspect—from animal health to milk production—is tracked and reported digitally.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <FeatureItem
                                    icon={Monitor}
                                    title="Digital Monitoring"
                                    text="Track farm activities and animal health through our custom-built digital platform."
                                />
                                <FeatureItem
                                    icon={Activity}
                                    title="Medical Care"
                                    text="Scientifically managed healthcare by professional veterinary doctors."
                                />
                                <FeatureItem
                                    icon={TrendingUp}
                                    title="Revenue Tracking"
                                    text="Real-time visibility into milk production data and generated revenue."
                                />
                                <FeatureItem
                                    icon={Users}
                                    title="Role-Based Access"
                                    text="Specialized portals for Supervisors, Doctors, and Farm Managers."
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-primary/10 rounded-[60px] blur-3xl -z-10" />
                            <img
                                src={ModernShed}
                                alt="Modern Buffalo Shed"
                                className="rounded-[40px] shadow-2xl border-8 border-white w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>      

            <Footer />
        </div>
    );
};

export default AboutUs;
