import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield, Lock, Eye, FileText, Database, Globe,
    UserCheck, Server, Video, Share2, AlertCircle,
    Clock, Scale, Info, CheckCircle2
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

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${className}`}>
        {children}
    </div>
);

const BulletList = ({ items }) => (
    <ul className="space-y-3">
        {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
            </li>
        ))}
    </ul>
);

const InfoCard = ({ title, icon: Icon, items }) => (
    <Card className="h-full">
        <div className="flex items-center gap-3 mb-4">
            <Icon className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-slate-800">{title}</h3>
        </div>
        <BulletList items={items} />
    </Card>
);

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629731422770-4357353cc24f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/30"
                    >
                        <Shield className="w-10 h-10 text-primary" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Privacy & <span className="text-primary">Policy</span>
                    </motion.h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Transparent, Secure, and Built for Trust.
                        <br />
                        <span className="text-sm mt-4 block opacity-70">Effective Date: January 2026</span>
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-12 relative z-20 pb-20">
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 mb-12 text-center max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Commitment</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Farmvest collects only information that is necessary to operate a secure, transparent, and professionally managed biological asset and dairy ecosystem. We strictly adhere to data protection standards to ensure your investments and personal data are safe.
                    </p>
                </motion.div>

                {/* 1. Information We Collect */}
                <section className="mb-16">
                    <div className="max-w-6xl mx-auto">
                        <SectionHeader icon={Database} title="1. Information We Collect" />
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <InfoCard
                                icon={UserCheck}
                                title="Personal Info"
                                items={[
                                    "Full name & Contact details",
                                    "Government ID (KYC)",
                                    "Address & Location",
                                    "Bank Information"
                                ]}
                            />
                            <InfoCard
                                icon={FileText}
                                title="Investment Data"
                                items={[
                                    "Investment unit details",
                                    "Asset ownership records",
                                    "Contract files",
                                    "Income & Payout history"
                                ]}
                            />
                            <InfoCard
                                icon={Server}
                                title="Platform Usage"
                                items={[
                                    "Login activity",
                                    "Device info & IP Address",
                                    "App usage patterns",
                                    "Security logs"
                                ]}
                            />
                            <InfoCard
                                icon={Video}
                                title="Live Monitoring"
                                items={[
                                    "Camera access logs",
                                    "Asset visibility usage",
                                    "Performance dashboards"
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* 2. Usage & 3. Transparency */}
                <section className="mb-16 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Usage */}
                        <div className="space-y-6">
                            <SectionHeader icon={CheckCircle2} title="2. How We Use Information" />
                            <Card className="bg-gradient-to-br from-white to-green-50/50">
                                <ul className="space-y-4">
                                    {[
                                        "Verify investor identity and ownership",
                                        "Manage biological assets and investment units",
                                        "Execute agreements and contractual obligations",
                                        "Process income payouts",
                                        "Provide real-time transparency through dashboards",
                                        "Maintain animal health and operational governance",
                                        "Comply with legal and financial requirements"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 p-4 bg-white rounded-xl border border-green-100 text-center text-sm font-medium text-slate-600">
                                    Farmvest does not sell, trade, or commercially exploit personal data.
                                </div>
                            </Card>
                        </div>

                        {/* Transparency */}
                        <div className="space-y-6">
                            <SectionHeader icon={Eye} title="3. Data Transparency" />
                            <Card className="bg-slate-900 text-white border-slate-800">
                                <p className="text-lg text-slate-300 mb-6">
                                    Farmvest is built on a <span className="text-primary font-bold">visibility-driven trust model</span>, not blind trust.
                                </p>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider">Investors Access</h4>
                                        <ul className="space-y-3 text-slate-300">
                                            <li className="flex items-center gap-3">
                                                <Video className="w-5 h-5 text-indigo-400" />
                                                Live farm camera feeds (view-only)
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Activity className="w-5 h-5 text-emerald-400" />
                                                Asset health & performance reports
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <FileText className="w-5 h-5 text-amber-400" />
                                                Ownership & lifecycle data
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pt-6 border-t border-slate-700">
                                        <div className="flex items-center gap-2 text-sm text-slate-400">
                                            <Lock className="w-4 h-4" />
                                            Access is role-based, secure, and monitored.
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* 4. Sharing & 5. Security (Side by Side Lists) */}
                <section className="mb-16 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <SectionHeader icon={Share2} title="4. Data Sharing" />
                            <Card>
                                <p className="mb-4 text-slate-600">We share data only when required with trusted entities:</p>
                                <BulletList items={[
                                    "Regulatory or government authorities (when legally required)",
                                    "Banking and payment partners (transaction processing)",
                                    "Veterinary & operational partners (strictly necessary data)",
                                    "Technology service providers (confidentiality agreements)"
                                ]} />
                            </Card>
                        </div>
                        <div>
                            <SectionHeader icon={Lock} title="5. Data Security" />
                            <Card>
                                <p className="mb-4 text-slate-600">Institutional-grade security controls:</p>
                                <BulletList items={[
                                    "Encrypted data storage and transmission",
                                    "Role-based access control",
                                    "Secure cloud infrastructure",
                                    "Continuous monitoring and audit logging",
                                    "Physical and digital access controls at farms"
                                ]} />
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Other Sections Grid */}
                <section className="max-w-6xl mx-auto mb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <div className="flex items-center gap-3 mb-4 text-slate-800 font-bold">
                                <Clock className="w-5 h-5 text-primary" />
                                6. Data Retention
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                We retain data to fulfill contracts, maintain compliance, and protect records. Afterward, it is securely archived or deleted.
                            </p>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-3 mb-4 text-slate-800 font-bold">
                                <Scale className="w-5 h-5 text-primary" />
                                7. User Rights
                            </div>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Access personal data</li>
                                <li>• Request corrections</li>
                                <li>• Request data copies</li>
                                <li>• Raise concerns</li>
                            </ul>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-3 mb-4 text-slate-800 font-bold">
                                <Globe className="w-5 h-5 text-primary" />
                                8. Cookies
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Limited cookies for login sessions and performance. No invasive tracking or third-party advertising cookies.
                            </p>
                        </Card>

                        <Card>
                            <h4 className="flex items-center gap-3 font-bold text-slate-800 mb-4">
                                <AlertCircle className="w-5 h-5 text-primary" />
                                9. Children’s Privacy
                            </h4>
                            <p className="text-slate-600 text-sm">Farmvest services are intended for adults. We do not knowingly collect personal information from minors.</p>
                        </Card>

                        <Card className="md:col-span-2">
                            <h4 className="flex items-center gap-3 font-bold text-slate-800 mb-4">
                                <Info className="w-5 h-5 text-primary" />
                                10. Policy Updates
                            </h4>
                            <p className="text-slate-600 text-sm">Updates may occur for regulatory, platform, or security changes. Published officially on Farmvest.</p>
                        </Card>
                    </div>
                </section>

                {/* Contact Footer Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-primary mb-4 shadow-sm">
                            <Info className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Questions or Concerns?</h3>
                        <p className="text-slate-500 mb-6">Contact our Privacy & Compliance Team</p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a href="mailto:contact@markwave.ai" className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-700 hover:text-primary hover:border-primary transition-all group">
                                <span className="text-xl">📧</span>
                                <span className="font-medium">contact@markwave.ai</span>
                            </a>
                            <a href="https://farmvest.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-700 hover:text-primary hover:border-primary transition-all group">
                                <span className="text-xl">🌐</span>
                                <span className="font-medium">farmvest.in</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>

            <Footer />
        </div>
    );
};

// Simple Activity Icon component since it was missing from imports
const Activity = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

export default PrivacyPolicy;
