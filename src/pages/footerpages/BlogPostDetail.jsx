import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, CheckCircle, Activity, Monitor, ShieldCheck, Milk, ChevronRight, Info } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { cn } from '../../lib/utils';

const blogData = {
    'transparency': {
        title: "Real-Time Asset Visibility for Investors",
        category: "Transparency",
        icon: Monitor,
        theme: "bg-sky-50 text-sky-900 border-sky-100",
        accent: "bg-sky-600",
        date: "Jan 21, 2026",
        author: "Tech Dept",
        overview: "Transparency is the foundation of trust at Farmvest. Every asset owned through the platform is digitally recorded, continuously tracked, and made visible through structured system access. This ensures that ownership is never abstract and accountability is never assumed.",
        sections: [
            {
                title: "What Transparency Means at Farmvest",
                content: "Farmvest does not rely on verbal assurance or periodic summaries. Transparency is enforced through system design, where every asset lifecycle event is digitally captured and traceable.",
                list: [
                    "Asset registration",
                    "Ownership mapping",
                    "Lifecycle status updates",
                    "Replacement and continuity records",
                    "Exit eligibility tracking"
                ]
            },
            {
                title: "Why This Matters",
                content: "In traditional asset models, investors are dependent on reports. At Farmvest, transparency is embedded into the platform, enabling confidence through visibility rather than trust alone."
            }
        ],
        outcomes: [
            "Clear ownership clarity",
            "Reduced ambiguity",
            "Strong investor confidence",
            "System-level accountability"
        ]
    },
    'health': {
        title: "Preventive Asset Risk Management Framework",
        category: "Health",
        icon: Activity,
        theme: "bg-emerald-50 text-emerald-900 border-emerald-100",
        accent: "bg-emerald-600",
        date: "Jan 18, 2026",
        author: "Dr. Sathish",
        overview: "Health at Farmvest refers to asset health and risk stability, not reactive problem handling. The platform operates on early detection and preventive control to ensure asset continuity and income protection.",
        sections: [
            {
                title: "How Risk Is Managed",
                content: "Farmvest uses a structured monitoring framework to detect deviations early and trigger corrective actions before they impact ownership or income.",
                list: [
                    "Continuous asset condition monitoring",
                    "Early-warning alert systems",
                    "Risk isolation protocols",
                    "Controlled intervention workflows"
                ]
            },
            {
                title: "Why Preventive Control Is Critical",
                content: "Reactive systems increase loss and uncertainty. Farmvest replaces reaction with prevention, ensuring stability at scale."
            }
        ],
        outcomes: [
            "Reduced asset disruption",
            "Capital safety",
            "Income continuity",
            "Long-term system reliability"
        ]
    },
    'governance': {
        title: "Asset Governance & Ownership Integrity Framework",
        category: "Governance",
        icon: ShieldCheck,
        theme: "bg-amber-50 text-amber-900 border-amber-100",
        accent: "bg-amber-600",
        date: "Jan 14, 2026",
        author: "Governance Team",
        overview: "Governance at Farmvest ensures that every asset is managed under defined rules, protocols, and system controls. Ownership integrity is maintained through digital enforcement rather than manual supervision.",
        sections: [
            {
                title: "Governance Framework Includes",
                content: "Every asset action is logged, time-stamped, and authorization-controlled.",
                list: [
                    "Digitally enforced ownership records",
                    "Lifecycle event validation",
                    "Replacement equivalence checks",
                    "Exit and handover compliance",
                    "Audit-ready system logs"
                ]
            },
            {
                title: "Why Governance Matters",
                content: "Without governance, scale creates risk. Farmvest ensures that growth strengthens discipline rather than weakening control."
            }
        ],
        outcomes: [
            "Ownership integrity",
            "Legal clarity",
            "Audit readiness",
            "Institutional-grade discipline"
        ]
    },
    'management': {
        title: "Role-Based Access for Platform Oversight",
        category: "Management",
        icon: ShieldCheck,
        theme: "bg-indigo-50 text-indigo-900 border-indigo-100",
        accent: "bg-indigo-600",
        date: "Jan 10, 2026",
        author: "System Admin",
        overview: "Farmvest follows a role-based management architecture to ensure that supervision, validation, and decision-making are separated from execution. This prevents conflicts and enforces accountability.",
        sections: [
            {
                title: "Role-Based Structure",
                content: "Each role has defined permissions and responsibilities. No role operates outside its authorization scope.",
                list: [
                    "Supervisors oversee compliance and alerts",
                    "Managers validate workflows and escalations",
                    "System administrators control access and logs"
                ]
            },
            {
                title: "Why Role Separation Is Important",
                content: "When responsibilities overlap, accountability weakens. Farmvest enforces clarity through access control and action logging."
            }
        ],
        outcomes: [
            "Clear responsibility ownership",
            "Reduced operational errors",
            "Strong governance hierarchy",
            "Scalable management structure"
        ]
    }
};

const BlogPostDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    const Icon = post.icon;

    return (
        <div className={cn("min-h-screen font-sans", post.theme)}>
            <Navbar />

            {/* Dynamic Content Layout */}
            <main className="pt-32 pb-24 px-4">
                <div className="container mx-auto max-w-5xl xl:pl-24">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Sidebar Style Meta */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-4"
                        >
                            <div className="sticky top-40 space-y-8">
                                <Link to="/blog" className="inline-flex items-center gap-2 text-current/60 hover:text-current font-bold uppercase tracking-widest text-xs transition-colors group">
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                    Back to blog
                                </Link>

                                <div>
                                    <span className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white border shadow-sm italic mb-4", post.accent.replace('bg-', 'text-'))}>
                                        <Icon className="w-3 h-3" /> {post.category}
                                    </span>
                                    <h1 className="text-3xl md:text-5xl font-black leading-tight italic tracking-tighter mb-6">
                                        {post.title}
                                    </h1>
                                    <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-[0.2em] text-current/60">
                                        <div className="flex items-center gap-2"><Calendar className="w-4 h-4 opacity-50" /> {post.date}</div>
                                        <div className="flex items-center gap-2"><User className="w-4 h-4 opacity-50" /> By {post.author}</div>
                                    </div>
                                </div>

                                <div className="p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/50 shadow-sm">
                                    <p className="text-sm italic font-medium leading-relaxed text-current/80">
                                        "{post.overview}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Main Articles */}
                        <div className="lg:col-span-8 space-y-12">
                            {post.sections.map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white/40 p-10 rounded-[2.5rem] border border-white shadow-sm"
                                >
                                    <h2 className="text-2xl font-black mb-6 italic flex items-center gap-4">
                                        <span className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white italic text-sm font-black", post.accent)}>
                                            {idx + 2 < 10 ? `0${idx + 2}` : idx + 2}
                                        </span>
                                        {section.title}
                                    </h2>
                                    <p className="text-lg leading-relaxed mb-8 italic text-current/70">
                                        {section.content}
                                    </p>

                                    {section.list && (
                                        <div className="space-y-3">
                                            {section.list.map((item, i) => (
                                                <div key={i} className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-white hover:border-current/20 transition-all group">
                                                    <div className={cn("w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0 opacity-80", post.accent)}>
                                                        <ChevronRight className="w-3 h-3" />
                                                    </div>
                                                    <span className="font-bold text-sm md:text-base">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Outcomes Grid */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className={cn("p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden", post.accent)}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                                <h3 className="text-2xl font-black mb-10 italic text-center uppercase tracking-widest">Strategic Outcomes</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {post.outcomes.map((outcome, i) => (
                                        <div key={i} className="flex items-start gap-4 bg-black/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                                            <span className="font-black text-sm lg:text-base tracking-tight leading-tight">{outcome}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="pt-12 text-center">
                                <Link to="/contact-us" className={cn("inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-lg text-white shadow-xl transition-all hover:scale-105 active:scale-95 group", post.accent)}>
                                    CONSULT WITH US
                                    <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] opacity-40">Farmvest Governance Framework 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPostDetail;
