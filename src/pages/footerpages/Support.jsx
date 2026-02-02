import React from 'react';
import { motion } from 'framer-motion';
import {
    Headphones, Users, Eye, Monitor, CreditCard,
    Stethoscope, ArrowRightLeft, AlertCircle, Clock,
    ShieldCheck, MessageCircle, HelpCircle, FileText
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    </div>
);

// Modified Card to allow overriding background
const Card = ({ children, className = "" }) => {
    // Check if background color is provided in className
    const hasBg = className.includes('bg-');
    const baseClasses = `rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${className}`;
    const defaultBg = hasBg ? '' : 'bg-white';

    return (
        <div className={`${defaultBg} ${baseClasses}`}>
            {children}
        </div>
    );
};

const BulletList = ({ items }) => (
    <ul className="space-y-3">
        {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="leading-relaxed text-sm">{item}</span>
            </li>
        ))}
    </ul>
);

const SupportCategory = ({ title, icon: Icon, description, items }) => (
    <Card className="h-full flex flex-col bg-white">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary border border-slate-100">
                <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
        </div>
        {description && <p className="text-slate-500 text-sm mb-4 leading-relaxed">{description}</p>}
        <div className="mt-auto">
            <BulletList items={items} />
        </div>
    </Card>
);

const Support = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center xl:pl-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/30"
                    >
                        <Headphones className="w-10 h-10 text-primary" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        FarmVest <span className="text-primary">Support</span>
                    </motion.h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A structured assistance system designed to protect ownership, ensure transparency, and maintain confidence.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-12 relative z-20 pb-20 xl:pl-24">
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 mb-20 text-center max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">How We Support You</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Farmvest operates a technology-driven, asset-backed dairy and investment platform. Our support framework is divided into clear categories so users receive accurate, accountable, and timely assistance.
                    </p>
                </motion.div>

                {/* Support Categories Grid */}
                <section className="max-w-6xl mx-auto mb-20">
                    <SectionHeader icon={HelpCircle} title="Support Categories" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <SupportCategory
                            title="Investor Support"
                            icon={Users}
                            description="Focuses on ownership clarity, income stability, and asset transparency."
                            items={[
                                "Investment unit selection",
                                "Agreement & contract queries",
                                "Asset ownership confirmation",
                                "Fixed monthly income details",
                                "Dashboard access & reporting",
                                "Live farm camera access"
                            ]}
                        />
                        <SupportCategory
                            title="Asset & Farm Transparency"
                            icon={Eye}
                            description="Ensuring trust is visible via live monitoring and reports."
                            items={[
                                "Live camera access issues",
                                "Asset health report interpretation",
                                "Buffaloe induction status",
                                "Asset growth tracking",
                                "Farm location visibility",
                                "Lifecycle stage understanding"
                            ]}
                        />
                        <SupportCategory
                            title="Payments & Income"
                            icon={CreditCard}
                            description="Support related to financial flows and transaction history."
                            items={[
                                "Monthly income payment status",
                                "Bank account updates",
                                "Payment confirmation",
                                "Transaction history review",
                                "Income cycle explanation",
                                "Contract-driven income queries"
                            ]}
                        />
                        <SupportCategory
                            title="Technical & Platform"
                            icon={Monitor}
                            description="Assistance with digital platforms, apps, and account access."
                            items={[
                                "Login or access issues",
                                "Dashboard performance",
                                "App functionality concerns",
                                "Data visibility synchronization",
                                "Security-related queries",
                                "Platform stability checks"
                            ]}
                        />
                        <SupportCategory
                            title="Veterinary (Info Only)"
                            icon={Stethoscope}
                            description="Information regarding health status and protocols."
                            items={[
                                "General health status of assets",
                                "Preventive healthcare measures",
                                "Replacement actions",
                                "Quarantine protocols",
                                "Biosecurity measures",
                                "Medical decision records"
                            ]}
                        />
                        <SupportCategory
                            title="Exit & Transfer"
                            icon={ArrowRightLeft}
                            description="Support for exits after the lock-in period."
                            items={[
                                "Exit eligibility confirmation",
                                "Physical asset handover",
                                "Veterinary clearance docs",
                                "Transport & logistics guidance",
                                "Legal ownership updates",
                                "Structured exit process"
                            ]}
                        />
                    </div>
                </section>

                {/* What We Don't Do & Response Standards */}
                <section className="max-w-6xl mx-auto mb-24">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* What We Don't Do */}
                        <div>
                            <SectionHeader icon={AlertCircle} title="What Support Does Not Do" />
                            <Card className="bg-red-50/50 border-red-100 h-full">
                                <p className="text-slate-600 mb-6">To protect system integrity, Farmvest corporate support maintains strict boundaries:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Provide speculative investment advice",
                                        "Modify contractual terms individually",
                                        "Allow operational interference with farms",
                                        "Enable manual control over biological assets",
                                        "Share other investors’ data"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-slate-700">
                                            <div className="mt-1 min-w-[20px]">
                                                <div className="w-5 h-5 rounded-full bg-white border border-red-100 flex items-center justify-center text-red-500 font-bold text-xs shadow-sm">✕</div>
                                            </div>
                                            <span className="text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>

                        {/* Response Standards */}
                        <div>
                            <SectionHeader icon={Clock} title="Response Standards" />
                            <Card className="bg-blue-50/50 border-blue-100 h-full">
                                <p className="text-slate-600 mb-6">We follow structured protocols to ensure accountability:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Queries are logged and tracked systematically",
                                        "Priority to ownership, income, & security",
                                        "Clear explanations without ambiguity",
                                        "Communication is professional & documented",
                                        "Support resolves issues, doesn't escalate confusion"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-slate-700">
                                            <div className="mt-1 min-w-[20px]">
                                                <div className="w-5 h-5 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shadow-sm">✓</div>
                                            </div>
                                            <span className="text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Philosophy */}
                <section className="max-w-4xl mx-auto mb-20">
                    {/* Explicitly strictly styled div instead of Card to avoid any class conflict */}
                    <div className="bg-slate-900 rounded-3xl p-10 md:p-12 text-center shadow-xl border border-slate-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <ShieldCheck className="w-64 h-64 text-white" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 backdrop-blur-sm">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6">Support Philosophy</h3>
                            <p className="text-xl text-slate-300 italic mb-8 leading-relaxed font-light">
                                "Support at Farmvest is not a helpdesk. It is an extension of our biological asset management and governance framework."
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <span className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm font-medium border border-slate-700">Ownership Protected</span>
                                <span className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm font-medium border border-slate-700">Transparency Accessible</span>
                                <span className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm font-medium border border-slate-700">Trust Earned</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Footer Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 text-center shadow-lg relative overflow-hidden group hover:border-primary/20 transition-all">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 rounded-full text-primary mb-6 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Contact Farmvest Support</h3>
                        <p className="text-slate-500 mb-8 max-w-md mx-auto">Please include your registered email or investor ID for faster, authenticated assistance.</p>

                        <div className="grid md:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
                            <a href="mailto:contact@markwave.ai" className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:bg-white hover:shadow-md hover:border-primary/30 transition-all group/item">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm group-hover/item:scale-110 transition-transform">📧</div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email Support</p>
                                    <span className="text-slate-900 font-bold group-hover/item:text-primary transition-colors">contact@markwave.ai</span>
                                </div>
                            </a>
                            <a href="tel:+917702710290" className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:bg-white hover:shadow-md hover:border-primary/30 transition-all group/item">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm group-hover/item:scale-110 transition-transform">📞</div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Phone Support</p>
                                    <span className="text-slate-900 font-bold group-hover/item:text-primary transition-colors">+91 77027 10290</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>

            <Footer />
        </div>
    );
};

export default Support;
