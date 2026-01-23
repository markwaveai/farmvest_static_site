import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Users, Activity, CheckCircle, LogIn, Camera, QrCode, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionBg from '../assets/section_bg.jpg';
import ManagementApp from '../assets/management_app.png';
import FarmVestModel from '../components/FarmVestModel';
import HeroBg from '../assets/hero_bg.png';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-primary mb-4">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full"
                    >
                        <img
                            src={HeroBg}
                            alt="FarmVest Hero"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                <div className="container relative z-10 px-4 h-full flex flex-col justify-start pt-12 md:pt-24 items-center">
                    {/* Top Floating Badge */}


                    {/* Right Floating Data Card */}
                    {/* <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="absolute bottom-40 right-8 md:right-24 bg-black/30 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl hidden md:block max-w-[200px]"
                    >
                        <div className="space-y-4">
                            <div>
                                <p className="text-white/50 text-[10px] uppercase tracking-tighter">Farm Capacity</p>
                                <p className="text-white text-2xl font-black">94.2%</p>
                                <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '94.2%' }}
                                        transition={{ delay: 2, duration: 1.5 }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-white/50 text-[10px] uppercase tracking-tighter">Daily Yield</p>
                                    <p className="text-white font-bold">1,840L</p>
                                </div>
                                <TrendingUp className="w-4 h-4 text-primary" />
                            </div>
                        </div>
                    </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-6xl md:text-[160px] font-black text-white leading-none tracking-tighter drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] select-none">
                            FARMVEST
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-white/80 text-lg md:text-2xl font-medium tracking-[0.3em] uppercase mt-4"
                        >
                            Next-Gen Livestock Assets
                        </motion.p>
                    </motion.div>

                    {/* Bottom Inline Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="absolute bottom-12 w-full max-w-5xl p-4 text-white/80 text-lg md:text-2xl font-medium tracking-[0.3em] uppercase mt-4 border-t border-white/20 backdrop-blur-sm rounded-xl text-center font-bold"
                    >
                        Comprehensive Farm Operations and Livestock Management System
                    </motion.div>
                </div>
            </section>

            {/* Investor Access Row */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-bold tracking-widest uppercase text-sm"
                        >
                            Professional Farm Management
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-5xl font-bold text-gray-900 mt-2"
                        >
                            The Best Choice For Your Business
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            {
                                icon: LogIn,
                                title: "Investor Login",
                                desc: "Secure access to your personal investor dashboard. Manage your portfolio with ease and transparency.",
                                link: "/investor#login"
                            },
                            {
                                icon: Camera,
                                title: "Live CCTV Access",
                                desc: "Real-time monitoring and 30-min visit slot booking. Watch your investment grow from anywhere.",
                                link: "/investor#cctv"
                            },
                            {
                                icon: QrCode,
                                title: "QR Code Entry",
                                desc: "Unique digital visit pass and real-time alerts. Secure and authenticated entry for farm visits.",
                                link: "/investor#qrcode"
                            },
                            {
                                icon: FileText,
                                title: "Health Reports",
                                desc: "Daily health updates and monthly revenue insights. Stay informed about your assets' performance.",
                                link: "/investor#reports"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 group hover:bg-primary transition-all duration-300 flex flex-col relative"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-green-50 rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                                        <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-white leading-tight transition-colors duration-300">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed mb-8 flex-grow transition-colors duration-300">
                                    {item.desc}
                                </p>
                                <Link to={item.link} className="flex items-center gap-2 text-primary group-hover:text-white font-bold text-xs hover:gap-3 transition-all uppercase tracking-wider mt-auto">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video & Data Insights Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Video Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-green-600/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full aspect-video object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                    >
                                        <source src="/hero_video.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                                    {/* Live Indicator Overlay */}

                                </div>
                            </div>
                        </motion.div>

                        {/* Data Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 space-y-8"
                        >
                            <div className="space-y-4">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="text-primary font-black tracking-widest uppercase text-sm"
                                >
                                    Farm Insights & Analytics
                                </motion.span>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1]">
                                    Transparent Data <br />
                                    <span className="text-primary italic">At Your Fingertips</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                                    Our external monitoring integration provides you with real-time data from our farm ecosystem, ensuring you're always connected to your investment.
                                </p>
                            </div>

                            {/* External Data Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Herd Health Index", value: "98.8%", trend: "+0.4%", icon: Activity },
                                    { label: "Milk Fat Content", value: "8.2%", trend: "Optimal", icon: ShieldCheck },
                                    { label: "Fodder Efficiency", value: "96%", trend: "+1.2%", icon: CheckCircle },
                                    { label: "Monthly Output", val: "3.2L+ L", trend: "+4.5%", icon: TrendingUp }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                                {item.trend}
                                            </span>
                                        </div>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{item.label}</p>
                                        <p className="text-2xl font-black text-gray-900 mt-1">{item.value || item.val}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>




            {/* FarmVest Business Model & Operations */}
            <FarmVestModel />
            <section className="py-24 bg-green-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${SectionBg})` }} />

                <div className="container mx-auto px-4 relative z-10">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >

                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Comprehensive Farm Operations and <span className="text-white/80">Livestock Management System</span>
                            </h2>


                            <div className="space-y-6">
                                {[
                                    "The system enables investors to digitally monitor farm activities without participating in daily operations.",
                                    "Farmvest integrates monitoring, reporting, and health information into a single platform.",
                                    "The application ensures secure access through defined permissions for each role.",
                                    "Investors gain confidence through real-time visibility of farm performance.",
                                    "The system supports data-driven decision-making and accountability."
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="mt-1 flex-shrink-0">
                                            <CheckCircle className="w-6 h-6 text-accent" />
                                        </div>
                                        <p className="text-lg text-green-50 leading-relaxed">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img
                                src={ManagementApp}
                                alt="Farm Management App"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
