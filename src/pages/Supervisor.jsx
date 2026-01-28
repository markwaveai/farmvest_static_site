import React from 'react';
import { motion } from 'framer-motion';
import {
    ClipboardCheck,
    Home,
    Droplet,
    Activity,
    AlertCircle,
    CheckCircle,
    Tag,
    Calendar,
    FilePlus,
    Clock
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import assets
import feedingImage from '../assets/buffalo_feeding.png';
import appImage from '../assets/management_app.png';
import supervisorImage from '../assets/supervisor_inspection.png';
import milkImage from '../assets/milk_production.png';

const Section = ({ title, icon: Icon, children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}
    >
        <div className="bg-primary/5 p-6 flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                <Icon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="p-6 md:p-8">
            {children}
        </div>
    </motion.div>
);

const FeatureList = ({ items }) => (
    <ul className="space-y-4">
        {items.map((item, index) => (
            <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
            >
                <div className="mt-1 flex-shrink-0 text-primary">
                    <CheckCircle className="w-5 h-5 fill-green-50" />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
            </motion.li>
        ))}
    </ul>
);

const Supervisor = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#fdfcf8] relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')] opacity-30 -z-10" />

            <Navbar />

            {/* Header - Digital Registry Aesthetic */}
            <div className="bg-[#121d11] pt-32 pb-20 text-white shadow-2xl relative overflow-hidden border-b-8 border-[#8b6b36]">
                {/* Shed Grid Pattern */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a2e18_0%,transparent_80%)]" />
                    <div className="absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage: `linear-gradient(#8b6b36 1px, transparent 1px), linear-gradient(90deg, #8b6b36 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10 xl:pl-24">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-[#8b6b36]/10 border border-[#8b6b36]/20 text-[#bda06d] text-[10px] font-black uppercase tracking-[0.4em] mb-6"
                            >
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                Zone A-12 Active Registration
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-6xl md:text-8xl font-black mb-4 tracking-tighter leading-[0.85]"
                            >
                                SUPER
                                <span className="text-[#8b6b36]">VISOR</span>
                            </motion.h1>

                            <p className="text-xl text-green-100/60 max-w-xl font-medium leading-relaxed mb-10">
                                Management of 300 livestock units across 4 rows.
                                <span className="text-[#8b6b36]"> Systematic tag tracking initiated.</span>
                            </p>

                            {/* Live Unit Counters */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                                {[
                                    { label: 'Units', icon: Tag, val: '300/300' },
                                    { label: 'Morning Yield', icon: Droplet, val: '1,240L' },
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-[#8b6b36]">
                                            <stat.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase">{stat.label}</p>
                                            <p className="text-lg font-black">{stat.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Shed Grid Visualization - Representing 300 Buffaloes */}
                        {/* Shed Grid Visualization - Representing 300 Buffaloes */}
                        <div className="flex-1 w-full max-w-md hidden lg:block">
                            <div className="p-8 bg-black/40 backdrop-blur-3xl rounded-[3rem] border border-white/5 relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#8b6b36]/20 to-transparent rounded-[3.1rem] -z-10" />
                                <div className="flex items-center justify-between mb-6">
                                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Shed Occupancy Matrix</p>
                                    <div className="px-2 py-1 bg-emerald-500/10 rounded text-[8px] font-bold text-emerald-500 uppercase tracking-tighter">Live Scan</div>
                                </div>
                                <div className="grid grid-cols-10 gap-2 mb-6">
                                    {Array.from({ length: 40 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.05
                                            }}
                                            className={`h-1.5 rounded-full ${i % 7 === 0 ? 'bg-red-500/50' : i % 3 === 0 ? 'bg-emerald-500/50' : 'bg-[#8b6b36]/30'}`}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-between items-end border-t border-white/5 pt-6 mt-6">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Shift</p>
                                        <p className="font-black flex items-center gap-2 tracking-tight">
                                            <Clock className="w-4 h-4 text-[#8b6b36]" /> MORNING CYCLE
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[20px] font-black italic text-[#8b6b36]">Row 04/04</p>
                                    </div>
                                </div>
                                {/* Scanning Animation Line */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8b6b36]/10 to-transparent h-20 w-full animate-scan-y top-0 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-12 pb-24 relative z-20 space-y-12 xl:pl-24">

                {/* 1. Supervisor Role & Shed Responsibility */}
                <Section title="Role & Shed Responsibility" icon={Home}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <p className="text-gray-600 text-lg">
                                Supervisors are the backbone of shed management, ensuring clear accountability and organized monitoring of every Buffalo.
                            </p>
                            <FeatureList items={[
                                "One Supervisor assigned to each shed.",
                                "Each shed manages 300 Buffaloes.",
                                "Buffaloes arranged in 4 rows of 75 for organized monitoring.",
                                "Each Buffalo uniquely identified with a tag number.",
                                "Complete management of all tagged Buffaloes.",
                                "Ensures clear accountability at the shed level."
                            ]} />
                        </div>
                        <div className="bg-green-50 p-4 rounded-2xl shadow-inner relative overflow-hidden group">
                            <img
                                src={supervisorImage}
                                alt="Supervisor Inspection"
                                className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </Section>

                {/* 2. Milk Production Updates */}
                {/* <Section title="Milk Production Updates" icon={Droplet}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 bg-green-50 p-4 rounded-2xl shadow-inner relative overflow-hidden group">
                            <img
                                src={milkImage}
                                alt="Milk Production Tech"
                                className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <FeatureList items={[
                                "Supervisor updates milk production for the assigned shed.",
                                "Records updated twice daily (Morning & Evening sessions).",
                                "Daily updates are mandatory in the system.",
                                "Accurate data helps track overall farm productivity."
                            ]} />
                        </div>
                    </div>
                </Section> */}

                {/* 3. Livestock Health Monitoring */}
                <Section title="Livestock Health Monitoring" icon={Activity}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <FeatureList items={[
                                "Conducts daily health checkups for all tagged Buffaloes.",
                                "Performs detailed health checkups on a weekly basis.",
                                "Systematic row-wise checking process.",
                                "Ensures health monitoring for every Buffalo without exception.",
                                "Early detection of potential health issues.",
                                "Helps prevent serious and critical health problems."
                            ]} />
                        </div>
                        <div className="bg-green-50 p-4 rounded-2xl shadow-inner relative overflow-hidden group">
                            <img
                                src={feedingImage}
                                alt="Health Monitoring"
                                className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </Section>

                {/* 4. Ticket Raising */}
                <Section title="Ticket Raising System" icon={FilePlus}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 bg-green-50 p-6 rounded-2xl relative">
                            {/* Mockup of a ticket card */}
                            <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm mx-auto border-l-4 border-red-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2 text-red-600 font-bold">
                                        <AlertCircle className="w-5 h-5" />
                                        Health Ticket
                                    </div>
                                    <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded">Pending</span>
                                </div>
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex justify-between border-b pb-2">
                                        <span>Shed No:</span>
                                        <span className="font-medium text-gray-800">S-12</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span>Row No:</span>
                                        <span className="font-medium text-gray-800">R-03</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span>Tag No:</span>
                                        <span className="font-medium text-gray-800"><Tag className="w-3 h-3 inline mr-1" /> 4589</span>
                                    </div>
                                    <div className="pt-2">
                                        <p className="font-medium text-gray-800 mb-1">Issue:</p>
                                        <p className="italic">Reduced appetite and mild fever observed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <FeatureList items={[
                                "Raise tickets immediately upon identifying a health issue.",
                                "Tickets created directly through the Farmvest application.",
                                "Include Shed number and Row number for accurate location.",
                                "Capture tag number as unique identifier.",
                                "Provide clear description of the identified health issue."
                            ]} />
                        </div>
                    </div>
                </Section>

            </div>
            <Footer />
        </div>
    );
};

export default Supervisor;
