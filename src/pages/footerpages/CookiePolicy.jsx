import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Shield, Lock, Eye, Zap, AlertTriangle, Check, X } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const FeatureRow = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
    >
        <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform flex-shrink-0">
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
        </div>
    </motion.div>
);

const CookiePolicy = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFA] font-sans">
            <Navbar />

            {/* Header Section - distinct from others with a centered 'card' feel */}
            <div className="pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-5xl xl:pl-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[3rem] p-12 md:p-16 shadow-2xl shadow-slate-200/50 text-center relative overflow-hidden"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full text-amber-600 mb-8 shadow-sm">
                                <Cookie className="w-10 h-10" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                                Cookie <span className="text-amber-600 underline decoration-4 decoration-amber-200">Policy</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                                We use limited, essential technologies to ensure your experience on FarmVest is secure, fast, and reliable.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="container mx-auto px-4 max-w-6xl pb-24 xl:pl-24">

                {/* Introduction Text - Split Layout */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20 px-4">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How We Use Cookies</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            At FarmVest, we believe in keeping things simple. We do not use invasive tracking cookies or sell your data to advertisers.
                            Our cookies are strictly functional—they serve as digital keys that keep your session secure and your interface responsive.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-slate-700 font-medium">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Functional & Essential Only</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 font-medium">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>No Third-Party Ads</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 font-medium">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Secure & Encrypted</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg relative">
                        {/* A visual representation of a 'Secure Session' */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
                                        <div className="h-2 w-16 bg-slate-200 rounded"></div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">SECURE</div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 opacity-60">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
                                        <div className="h-2 w-16 bg-slate-200 rounded"></div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">FAST</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Points Grid */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Cookie Usage</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureRow
                            icon={Lock}
                            title="Secure Login Sessions"
                            description="Maintains your secure connection so you don't have to log in on every single page refresh."
                            delay={0.1}
                        />
                        <FeatureRow
                            icon={Shield}
                            title="Role-Based Access"
                            description="Identifies if you are an Investor, Doctor, or Manager to show you the correct authorized dashboard."
                            delay={0.2}
                        />
                        <FeatureRow
                            icon={Eye}
                            title="Live Camera Viewing"
                            description="Ensures stable streaming connections for real-time monitoring of biological assets."
                            delay={0.3}
                        />
                        <FeatureRow
                            icon={Zap}
                            title="Platform Stability"
                            description="Helps load pages faster and remembers your interface preferences (like language or display mode)."
                            delay={0.4}
                        />
                        <FeatureRow
                            icon={AlertTriangle}
                            title="Fraud & Misuse Prevention"
                            description="Security tokens that detect and block suspicious activity or unauthorized access attempts."
                            delay={0.5}
                        />
                    </div>
                </div>

                {/* Managing Cookies */}
                <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Managing Your Preferences</h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Since FarmVest only uses strictly necessary cookies for security and performance, blocking them via your browser settings may prevent the platform (especially the dashboards and cameras) from working correctly.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/privacy-policy" className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                                View Privacy Policy
                            </a>
                            <a href="/support" className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors">
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default CookiePolicy;
