import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Activity, Milk, TrendingUp, Monitor, ShieldCheck } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Importing local images
import HealthMonitoringImg from '../../assets/footerimages1/health_monitoring_new.png';
import MilkYieldImg from '../../assets/footerimages1/milk_yield_new.jpg';
import DigitalPlatformImg from '../../assets/footerimages1/digital_platform_new.png';
import BuffaloCareImg from '../../assets/footerimages1/buffalo_care_new.png';

const BlogCard = ({ title, excerpt, image, author, date, category, icon: Icon }) => (
    <motion.article
        whileHover={{ y: -10 }}
        className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-50 group hover:shadow-2xl transition-all h-full flex flex-col"
    >
        <div className="aspect-[16/10] relative overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-primary flex items-center gap-2 shadow-sm italic uppercase tracking-wider text-green-600">
                    <Icon className="w-3 h-3" /> {category}
                </span>
            </div>
        </div>
        <div className="p-8 flex flex-col flex-1">
            <div className="flex items-center gap-6 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <div className="flex items-center gap-2"><Calendar className="w-3 h-3 text-primary" /> {date}</div>
                <div className="flex items-center gap-2"><User className="w-3 h-3 text-primary" /> {author}</div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors line-clamp-2 italic leading-tight">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 italic">{excerpt}</p>
            <div className="mt-auto">
                <button className="flex items-center gap-2 font-black text-slate-900 group-hover:gap-4 transition-all uppercase tracking-[0.2em] text-[10px]">
                    Read Update <ArrowRight className="w-4 h-4 text-primary" />
                </button>
            </div>
        </div>
    </motion.article>
);

const Blog = () => {
    const blogPosts = [
        {
            title: "Digital Platform: Transparent Investor Monitoring",
            excerpt: "Allowing investors to earn returns from buffalo farming while transparently monitoring farm operations and revenue through our integrated digital platform.",
            image: DigitalPlatformImg,
            author: "Tech Dept",
            date: "Jan 21, 2026",
            category: "Transparency",
            icon: Monitor
        },
        {
            title: "Proactive Medical Care & Animal Health",
            excerpt: "Our system professionally manages medical care using role-based access for veterinarians, ensuring constant monitoring of animal health and swift treatment.",
            image: HealthMonitoringImg,
            author: "Dr. Sathish",
            date: "Jan 18, 2026",
            category: "Health",
            icon: Activity
        },
        {
            title: "Professionalized Milk Production Management",
            excerpt: "Advanced management of milk production activities, ensuring high standards of hygiene and optimized yield for our investor units.",
            image: MilkYieldImg,
            author: "Operations",
            date: "Jan 14, 2026",
            category: "Production",
            icon: Milk
        },
        {
            title: "Role-Based Access for Farm Activity Oversight",
            excerpt: "Efficiently managing farm activities through specialized access for Supervisors and Managers, bringing professional rigor to traditional buffalo farming.",
            image: BuffaloCareImg,
            author: "System Admin",
            date: "Jan 10, 2026",
            category: "Management",
            icon: ShieldCheck
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            <section className="pt-32 pb-24 header-blog overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1 bg-white border border-teal-200 rounded-full text-teal-700 text-xs font-bold mb-6 tracking-widest uppercase italic shadow-sm"
                    >
                        Buffalo FarmVest Updates
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic"
                    >
                        Project <span className="text-teal-600 italic">Insights</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic">
                        Earn returns from buffalo farming while transparently monitoring operations, animal health, and revenue through our professional digital platform.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {blogPosts.map((post, index) => (
                            <BlogCard key={index} {...post} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;


