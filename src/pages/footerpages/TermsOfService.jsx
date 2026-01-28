import React from 'react';
import { motion } from 'framer-motion';
import {
    FileSignature, ShieldAlert, Gavel, Scale,
    BookOpen, Users, AlertTriangle, CheckCircle,
    ArrowRightCircle, Ban
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Section = ({ title, icon: Icon, children }) => (
    <div className="mb-12 border-b border-slate-100 pb-12 last:border-0">
        <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                <Icon className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        </div>
        <div className="pl-0 md:pl-14 text-slate-600 leading-relaxed text-lg space-y-4">
            {children}
        </div>
    </div>
);

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-slate-50 pt-32 pb-20 border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl text-center xl:pl-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-slate-600 text-sm font-semibold mb-6">
                            <Scale className="w-4 h-4" />
                            <span>Legal & Compliance</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                            Terms of <span className="text-primary">Service</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            These terms govern your use of the Farmvest platform, defining ownership rights, operational boundaries, and mutual responsibilities.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-4xl py-20 xl:pl-24">

                {/* Introduction Box */}
                <div className="bg-primary/5 rounded-2xl p-8 mb-16 flex gap-6">
                    <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Why These Terms Matter</h3>
                        <p className="text-slate-700">
                            Without clear Terms of Service, legal exposure increases, operational boundaries become unclear, and ownership rights can be misunderstood. These terms protect both you (the investor) and Farmvest (the operator).
                        </p>
                    </div>
                </div>

                {/* 1. Eligibility & Scope */}
                <Section title="1. Eligibility & Platform Usage" icon={Users}>
                    <p>
                        By accessing or using the Farmvest platform, you agree to be bound by these terms.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Who can use:</strong> Services are available only to individuals who are at least 18 years old and legally capable of entering into binding contracts.</li>
                        <li><strong>Acceptable Use:</strong> Users must not misuse platform access, including attempting to manipulate dashboards, scrape data, or share exclusive live monitoring feeds with unauthorized third parties.</li>
                    </ul>
                </Section>

                {/* 2. Asset Ownership & Agreements */}
                <Section title="2. Asset Ownership & Fixed Income" icon={FileSignature}>
                    <p>
                        Farmvest operates on a clear model of asset ownership and management.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary" /> Owned by You
                            </h4>
                            <p className="text-sm">Investors hold legal ownership of the biological assets (buffaloes) purchased through the platform.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary" /> Managed by Us
                            </h4>
                            <p className="text-sm">Farmvest assumes full operational responsibility for care, feeding, and milking.</p>
                        </div>
                    </div>
                    <p className="mt-4">
                        <strong>Fixed Income Agreements:</strong> Returns are contract-driven based on predetermined fixed monthly payouts. These payments are independent of daily milk production fluctuations, providing financial stability to the investor.
                    </p>
                </Section>

                {/* 3. Operational Boundaries */}
                <Section title="3. Operational Control vs. Ownership" icon={Ban}>
                    <p>
                        To ensure biosecurity and systematic management, a strict separation of powers is enforced:
                    </p>
                    <ul className="space-y-3 mt-2">
                        <li className="flex gap-3">
                            <Ban className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span>Investors <strong>cannot</strong> interfere with daily farm operations, veterinary decisions, or dietary changes.</span>
                        </li>
                        <li className="flex gap-3">
                            <Ban className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span>Manual control over biological assets by investors is <strong>strictly prohibited</strong>.</span>
                        </li>
                    </ul>
                    <p className="mt-2">
                        <strong>Risk Replacement Responsibility:</strong> In the event of asset loss (death or permanent disability) unrelated to natural aging or exit terms, Farmvest takes responsibility for replacement as per the specific investment insurance clauses.
                    </p>
                </Section>

                {/* 4. Live Monitoring & Data */}
                <Section title="4. Camera Access & Data Rights" icon={BookOpen}>
                    <p>
                        <strong>Live Monitoring:</strong> Access to live farm cameras is a transparency feature, not a surveillance right. Farmvest guarantees visibility but reserves the right to perform maintenance or manage bandwidth.
                    </p>
                    <p>
                        <strong>Data Usage:</strong> Dashboard data regarding health and growth is for personal tracking only. Investors may not use platform data for commercial resale or broad public dissemination without permission.
                    </p>
                </Section>

                {/* 5. Exit & Ownership Transfer */}
                <Section title="5. Exit Strategy & Transfers" icon={ArrowRightCircle}>
                    <p>
                        <strong>Lock-in Period:</strong> Investments typically carry a standard lock-in period (e.g., 36 months) to align with the biological lifecycle of the asset.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>Exit after 36 Months:</strong> Investors may choose to exit or renew. Exits involve either the buy-back of the asset by Farmvest partners or a facilitated sale.</li>
                        <li><strong>Legal Transfer:</strong> Ownership transfer requires formal documentation. Assets cannot be physically removed from the farm ecosystem without following strict veterinary and legal clearance protocols.</li>
                    </ul>
                </Section>

                {/* 6. Liability & Disputes */}
                <Section title="6. Liability & Dispute Resolution" icon={Gavel}>
                    <p>
                        <strong>Limitation of Liability:</strong> Farmvest is not liable for force majeure events including but not limited to pandemics, extreme natural disasters, or government policy shifts affecting the agricultural sector broadly.
                    </p>
                    <p>
                        <strong>Dispute Handling:</strong> Any disputes regarding payouts, ownership data, or service quality must be raised through the official Support channels. Legal jurisdiction for all agreements is restricted to the courts defined in your specific Investment Agreement.
                    </p>
                </Section>

                {/* Footer Note */}
                <div className="text-center pt-10 border-t border-slate-200">
                    <p className="text-slate-500 mb-6">
                        By continuing to use Farmvest, you acknowledge that you have read, understood, and agreed to these Terms of Service.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button onClick={() => window.print()} className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                            Print Terms
                        </button>
                        <a href="/support" className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
                            Contact Legal Team
                        </a>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default TermsOfService;
