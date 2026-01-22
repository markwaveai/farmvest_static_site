import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, ShieldCheck, CheckCircle2, ArrowRight, Milk, HeartPulse, ClipboardList } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PlanCard = ({ title, price, description, features, highlighted = false }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className={`p-8 rounded-[40px] border-2 transition-all h-full flex flex-col ${highlighted
                ? 'bg-slate-900 border-primary text-white shadow-2xl shadow-primary/20'
                : 'bg-white border-slate-100 text-slate-800'
            }`}
    >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className={`text-sm mb-6 ${highlighted ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
        <div className="text-4xl font-black mb-6 flex items-baseline gap-1 italic">
            {price}
        </div>
        <div className="w-full h-px bg-slate-500/20 mb-8" />
        <ul className="space-y-4 mb-10 flex-1">
            {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${highlighted ? 'text-primary' : 'text-green-500'}`} />
                    <span className={`text-sm ${highlighted ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs ${highlighted
                ? 'bg-primary text-white hover:bg-green-700 shadow-lg shadow-primary/30'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}>
            Invest Now <ArrowRight className="w-5 h-5" />
        </button>
    </motion.div>
);

const InvestmentPlans = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            <header className="pt-32 pb-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-black mb-6 italic"
                    >
                        Buffalo Farm <span className="text-slate-900">Yields</span>
                    </motion.h1>
                    <p className="text-xl text-green-50 max-w-2xl mx-auto italic">
                        Earn scalable returns from professionally managed buffalo farming units with full digital transparency.
                    </p>
                </div>
            </header>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <PlanCard
                            title="Entry Portfolio"
                            price="₹50k+"
                            description="Ideal for individual investors starting their agri-investment journey."
                            features={[
                                "Share in managed buffalo units",
                                "Digital health monitoring access",
                                "Quarterly milk production reports",
                                "Basic revenue dashboard",
                                "Standard insurance coverage"
                            ]}
                        />
                        <PlanCard
                            title="Dairy Core"
                            price="₹2.5L+"
                            description="High-yield focus with priority access to elite livestock units."
                            highlighted={true}
                            features={[
                                "Priority share in elite buffalo herds",
                                "Live farm activity monitoring",
                                "Detailed medical history logs",
                                "Automated profit distribution",
                                "Comprehensive asset insurance",
                                "Bi-weekly yield analytics"
                            ]}
                        />
                        <PlanCard
                            title="Institutional"
                            price="Custom"
                            description="For large-scale investment portfolios and corporate partnerships."
                            features={[
                                "Dedicated buffalo sheds management",
                                "Direct veterinary consultation logs",
                                "Advanced revenue forecasting tools",
                                "Custom API for data integration",
                                "Priority logistical oversight",
                                "Maximum asset utilization"
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-16 italic uppercase tracking-widest text-slate-800">
                            The Tech-Driven <span className="text-primary italic">Workflow</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="flex gap-6">
                                <Milk className="w-12 h-12 text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Production Management</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Daily tracking of milk yields per buffalo unit, ensuring optimal production efficiency and revenue accuracy.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <HeartPulse className="w-12 h-12 text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Medical Care Oversight</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Systematic health screenings and vaccinations managed by professional doctors with digital record keeping.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <ClipboardList className="w-12 h-12 text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Role-Based Operations</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Shed supervisors and farm managers use specialized portals to log activities, ensuring complete accountability.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <TrendingUp className="w-12 h-12 text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Transparent Returns</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Revenue generated from milk and livestock value appreciation is transparently shared with investors via the platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default InvestmentPlans;
