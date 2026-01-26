import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Activity, Users, Zap, Database, Droplet, ArrowRight, Anchor, LogOut } from 'lucide-react';

const SectionHeader = ({ title, subtitle, className = "" }) => (
    <div className={`mb-12 ${className}`}>
        <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-2"
        >
            {subtitle}
        </motion.h3>
        <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
        >
            {title}
        </motion.h2>
    </div>
);

const Card = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
    >
        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary mb-6">
            <Icon className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </motion.div>
);

const FarmVestModel = () => {
    return (
        <div className="space-y-32">

            {/* White Revolution 2.0 */}
            <section className="container mx-auto px-4">
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className='text-white text-4xl font-bold mb-6 leading-tight w-[130%] font-extrabold'>
                                The 'White Revolution 2.0' Philosophy
                            </h1>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                We are driving a shift from the original White Revolution—which focused on volume—to a new era prioritizing
                                <span className="text-primary font-bold"> verification, integrity, and engineering purity</span> at the source.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                Rather than treating milk as a commodity, Farmvest treats it as a biological product whose quality is strictly determined by the animal's health, feed, and environment.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Source Verified", val: "100%" },
                                { label: "Purity Checks", val: "Daily" },
                                { label: "Antibiotic Free", val: "Guaranteed" },
                                { label: "Traceability", val: "End-to-End" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                                    <h4 className="text-xl sm:text-2xl font-black text-white mb-1 break-words">{stat.val}</h4>
                                    <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Precision Dairy Operations */}
            <section className="container mx-auto px-4">
                <SectionHeader
                    title="Precision Dairy Operations"
                    subtitle="Technology-Controlled Ecosystem"
                    className="text-center max-w-3xl mx-auto"
                />

                <div className="grid md:grid-cols-3 gap-8 mt-6">
                    <Card
                        icon={Activity}
                        title="Scientific Cattle Management"
                        description="Buffaloes are high-value biological assets. Their health is monitored 24/7 using wearable health bands and IoT sensors to enable preventive healthcare."
                        delay={0.1}
                    />
                    <Card
                        icon={Droplet}
                        title="Zero Human-Touch Architecture"
                        description="Milk moves in a sealed environment—from automated milking to instant chilling—eliminating risks of manual handling, dilution, or chemical preservatives."
                        delay={0.2}
                    />
                    <Card
                        icon={Database}
                        title="Genetic Governance"
                        description="Strategic Artificial Insemination (AI) programs ensure a superior herd, focusing on proven high-yield and disease-resistant bloodlines."
                        delay={0.3}
                    />
                </div>
            </section>

            {/* Cloud Dairy Investment Model */}
            <section className="bg-gray-50 py-10">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="sticky top-24">
                            <SectionHeader
                                title="The Cloud Dairy Investment Model"
                                subtitle="Structured Financial Asset"
                            />
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                We convert livestock ownership into a structured financial asset. Unlike traditional farming, investors enjoy passive ownership while we handle all operational complexities.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Standardised Unit Structure",
                                    "Complete Operational Management",
                                    "Contractually Defined Income",
                                    "Natural Capital Growth (Calves)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <Users className="w-8 h-8 text-blue-500 mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Unit Structure</h4>
                                <p className="text-sm text-gray-500">Investors purchase buffaloes in standardised units via the Animalkart digital platform.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Passive Ownership</h4>
                                <p className="text-sm text-gray-500">Farmvest assumes all responsibilities: feed, vet care, and biosecurity.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <TrendingUp className="w-8 h-8 text-green-500 mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Predictable Returns</h4>
                                <p className="text-sm text-gray-500">Fixed monthly income independent of milk yield or market fluctuations.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <Anchor className="w-8 h-8 text-purple-500 mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Asset Appreciation</h4>
                                <p className="text-sm text-gray-500">Calves born during the agreement belong to the investor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risk Mitigation & Exit */}
            <section className="container mx-auto px-4 pb-20">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Risk Mitigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-green-50 rounded-3xl p-10"
                    >
                        <ShieldCheck className="w-12 h-12 text-green-600 mb-6" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Mitigation & Capital Safety</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-1">Risk Absorption</h4>
                                <p className="text-gray-600 text-sm">Farmvest absorbs biological risks and guarantees replacement of any lost buffalo to ensure income continuity.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-1">Two-Layer Quarantine</h4>
                                <p className="text-gray-600 text-sm">Rigorous medical screening and two separate quarantine phases before induction.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-1">Total Transparency</h4>
                                <p className="text-gray-600 text-sm">24/7 live camera feeds, digital health reports, and real-time operational visibility.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Exit Policy */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-slate-50 rounded-3xl p-10 border border-slate-100"
                    >
                        <LogOut className="w-12 h-12 text-slate-600 mb-6" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Liquidity & Exit Policy</h3>
                        <p className="text-gray-600 mb-8">
                            To ensure capital flexibility, Farmvest provides a defined
                            <span className="font-bold text-gray-900"> exit option after 36 months</span>.
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                                <div>
                                    <h5 className="font-bold text-gray-900">Continue</h5>
                                    <p className="text-xs text-gray-500">Keep the asset in the system to earn fixed income.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold">2</div>
                                <div>
                                    <h5 className="font-bold text-gray-900">Take Possession</h5>
                                    <p className="text-xs text-gray-500">Take physical delivery of your buffaloes and calves.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default FarmVestModel;
