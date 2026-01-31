import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, X, ChevronDown } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ContactInfo = ({ icon: Icon, title, details, link }) => (
    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/30 transition-colors group">
        {link ? (
            <a
                href={link}
                target={link.startsWith('http') ? "_blank" : undefined}
                rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all hover:scale-105 active:scale-95"
            >
                <Icon className="w-6 h-6" />
            </a>
        ) : (
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                <Icon className="w-6 h-6" />
            </div>
        )}
        <div>
            <h4 className="font-bold text-slate-900 text-[10px] mb-1 uppercase tracking-widest leading-none">{title}</h4>
            {link ? (
                <a href={link} target={link.startsWith('http') ? "_blank" : undefined} rel={link.startsWith('http') ? "noopener noreferrer" : undefined} className="text-slate-700 font-bold italic text-sm hover:text-primary transition-colors block">
                    {details}
                </a>
            ) : (
                <div className="text-slate-700 font-bold italic text-sm">{details}</div>
            )}
        </div>
    </div>
);

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'Investment Opportunity',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        // Name: only characters and spaces
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            newErrors.name = 'Name can only contain characters';
        }

        // Email: must contain @
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.includes('@')) {
            newErrors.email = 'Please enter a valid email addressing containing @';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // For name field, only allow letters and spaces
        if (name === 'name') {
            const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
            setFormData(prev => ({ ...prev, [name]: filteredValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Simulate API call
            console.log('Form Submitted:', formData);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                type: 'Investment Opportunity',
                message: ''
            });
        }
    };

    return (
        <div className="min-h-screen bg-white font-display">
            <Navbar />

            {/* Success Modal */}
            <AnimatePresence>
                {isSubmitted && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSubmitted(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-sm w-full shadow-2xl border border-slate-100 text-center"
                        >
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 text-slate-400 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 mb-2 italic">Inquiry Received</h3>
                            <p className="text-slate-700 font-medium mb-8 leading-relaxed">
                                Our management team has received your inquiry. We will get back to you shortly.
                            </p>

                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-green-600 transition-all shadow-lg"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

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

                <div className="container mx-auto px-4 relative z-10 xl:pl-24">
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
                            className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto leading-tight italic font-black text-center mt-2 tracking-tighter"
                        >
                            Your Direct Link Between <span className="text-primary">Capital</span> & <span className="text-primary">Cultivation</span>
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 xl:pl-24">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100"
                        >
                            <h2 className="text-3xl font-bold text-slate-800 mb-8 italic">Inquiry Form</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-600 px-2 uppercase tracking-[0.2em]">Full Name</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text"
                                            className={`w-full px-6 py-4 bg-slate-50 rounded-2xl border outline-none transition-all italic text-slate-800 font-medium ${errors.name ? 'border-red-400 focus:ring-4 focus:ring-red-100' : 'border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10'}`}
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <p className="text-xs text-red-500 font-bold px-2 italic">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-600 px-2 uppercase tracking-[0.2em]">Contact Email</label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="text"
                                            className={`w-full px-6 py-4 bg-slate-50 rounded-2xl border outline-none transition-all italic text-slate-800 font-medium ${errors.email ? 'border-red-400 focus:ring-4 focus:ring-red-100' : 'border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10'}`}
                                            placeholder="example@gmail.com"
                                        />
                                        {errors.email && <p className="text-xs text-red-500 font-bold px-2 italic">{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-600 px-2 uppercase tracking-[0.2em]">Inquiry Type</label>
                                    <div className="relative">
                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-primary outline-none transition-all italic appearance-none text-slate-800 font-medium cursor-pointer"
                                        >
                                            <option>Investment Opportunity</option>
                                            <option>Farm Operations Support</option>
                                            <option>Technical Platform Inquiry</option>
                                            <option>Media & PR</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-600 px-2 uppercase tracking-[0.2em]">Message Details</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className={`w-full px-6 py-4 bg-slate-50 rounded-2xl border outline-none transition-all resize-none italic text-slate-800 font-medium ${errors.message ? 'border-red-400 focus:ring-4 focus:ring-red-100' : 'border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10'}`}
                                        placeholder="How can our management assist you?"
                                    ></textarea>
                                    {errors.message && <p className="text-xs text-red-500 font-bold px-2 italic">{errors.message}</p>}
                                </div>
                                <button type="submit" className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group uppercase tracking-widest text-xs">
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
                                <ContactInfo icon={Mail} title="Email Us" details="contact@markwave.ai" link="mailto:contact@markwave.ai" />
                                <ContactInfo icon={Phone} title="Call Us" details="+91 77027 10290" link="tel:+917702710290" />
                                <ContactInfo icon={MapPin} title="Head Office" details="206, 2nd Floor, Block-A,PSR Prime Towers, Beside DLF, Gachibowli, Hyderabad, Telangana 500032" link="https://www.google.com/maps/search/?api=1&query=PSR+Prime+Tower+Beside+DLF+Gachibowli" />
                            </div>

                            <div className="p-8 bg-primary rounded-[40px] text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black mb-4 italic uppercase tracking-normal">Ready to Visit?</h3>
                                    <p className="text-white text-sm leading-relaxed mb-6 italic font-medium">
                                        Investors can schedule physical site visits to our <span className="tracking-widest">buffalo</span> sheds via the "Investor Login" portal. Experience the operations first-hand carefully managed by our supervisors.
                                    </p>

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
