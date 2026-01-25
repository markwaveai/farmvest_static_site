import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ContactInfo = ({ icon: Icon, title, details }) => (
    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/30 transition-colors group">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h4 className="font-bold text-slate-800 text-[10px] mb-1 uppercase tracking-widest leading-none">{title}</h4>
            <div className="text-slate-500 font-bold italic text-sm">{details}</div>
        </div>
    </div>
);

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-20 pb-12 overflow-hidden header-contact perspective-container">
                {/* Immersive Animated Network Flows */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M-50,150 Q300,50 720,150 T1490,150"
                            stroke="url(#flowGradient)"
                            strokeWidth="2"
                            fill="none"
                            className="animate-draw-path"
                        />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="px-6 py-1 bg-white/50 backdrop-blur-md rounded-full text-primary text-[9px] font-black uppercase tracking-[0.5em] mb-4 border border-primary/10 shadow-md italic"
                        >
                            Connect
                        </motion.div>

                        <div className="relative text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 30, rotateX: -30 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ type: "spring", damping: 10 }}
                                className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tighter uppercase italic leading-none text-3d-sticker"
                            >
                                Grow With <span className="text-primary">Us</span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-tight italic font-black text-center mt-2 tracking-tighter opacity-80"
                        >
                            Your Direct Link Between <span className="text-primary">Capital</span> & <span className="text-primary">Cultivation</span>
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100"
                        >
                            <h2 className="text-3xl font-bold text-slate-800 mb-8 italic">Inquiry Form</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 px-2 uppercase tracking-[0.2em]">Full Name</label>
                                        <input type="text" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all italic" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 px-2 uppercase tracking-[0.2em]">Contact Email</label>
                                        <input type="email" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all italic" placeholder="email@domain.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 px-2 uppercase tracking-[0.2em]">Inquiry Type</label>
                                    <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-primary outline-none transition-all italic appearance-none">
                                        <option>Investment Opportunity</option>
                                        <option>Farm Operations Support</option>
                                        <option>Technical Platform Inquiry</option>
                                        <option>Media & PR</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 px-2 uppercase tracking-[0.2em]">Message Details</label>
                                    <textarea rows="4" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none italic" placeholder="How can our management assist you?"></textarea>
                                </div>
                                <button className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group uppercase tracking-widest text-xs">
                                    Submit Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="grid gap-6">
                                <ContactInfo icon={Mail} title="Email Us" details="contact@markwave.ai" />
                                <ContactInfo icon={Phone} title="Call Us" details="+91 77027 10290" />
                                <ContactInfo icon={MapPin} title="Head Office" details="206, 2nd Floor, Block-A, Beside PSR Prime Towers, Beside DLF, Gachibowli, Hyderabad, Telangana 500032" />
                                {/* <ContactInfo icon={ShieldCheck} title="Verified Business" details="ISO 9001:2015 Certified Farm Operations" /> */}
                            </div>

                            <div className="p-8 bg-primary rounded-[40px] text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter">Ready to Visit?</h3>
                                    <p className="text-green-50 text-sm leading-relaxed mb-6 italic">
                                        Investors can schedule physical site visits to our buffalo sheds via the "Investor Login" portal. Experience the operations first-hand carefully managed by our supervisors.
                                    </p>
                                    <button disabled className="px-8 py-3 bg-white text-primary font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-lg opacity-50 cursor-not-allowed">
                                        Schedule Now
                                    </button>
                                </div>
                                <MessageSquare className="absolute -bottom-10 -right-10 w-48 h-48 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;
