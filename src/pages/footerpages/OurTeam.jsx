import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter, Stethoscope, Briefcase, Users, Activity } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OpManagerImg from '../../assets/footerimages1/team_op_manager.png';
import SupervisorImg from '../../assets/footerimages1/supervisor.png';
import DoctorImg from '../../assets/footerimages1/team_doctor.png';
import AsstDoctorImg from '../../assets/footerimages1/team_asst_doctor.png';

const TeamMember = ({ name, role, image, bio, icon: Icon }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-50 group hover:shadow-2xl transition-all"
    >
        <div className="aspect-square relative overflow-hidden">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white">
                    <Linkedin className="w-5 h-5" />
                </a>
            </div>
        </div>
        <div className="p-8 text-center relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1 mt-4 italic">{name}</h3>
            <p className="text-primary font-bold text-sm mb-4 uppercase tracking-widest">{role}</p>
            <p className="text-slate-500 text-sm leading-relaxed italic">{bio}</p>
        </div>
    </motion.div>
);

const OurTeam = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            <section className="pt-32 pb-24 text-center header-team relative">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter">
                        The Professionals Behind <br />
                        <span className="text-primary italic">Operations</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed italic">
                        Our management includes experts in animal medicine, farm logistics, and financial technology.
                    </p>
                </div>
            </section>

            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <TeamMember
                            name="Siddharth V."
                            role="Operation Manager"
                            icon={Briefcase}
                            image={OpManagerImg}
                            bio="Oversees strategic farm logistics, production management, and overall operational growth."
                        />
                        <TeamMember
                            name="Anil Deshmukh"
                            role="Supervisor"
                            icon={Users}
                            image={SupervisorImg}
                            bio="Manages on-ground activity, ensures shed cleanliness, and supervises daily farm tasks."
                        />
                        <TeamMember
                            name="Dr.Kumar"
                            role="Doctor"
                            icon={Stethoscope}
                            image={DoctorImg}
                            bio="Senior veterinarian in charge of livestock healthcare, medical audits, and vaccination programs."
                        />
                        <TeamMember
                            name="Dr.Amala"
                            role="Assistant Doctor"
                            icon={Activity}
                            image={AsstDoctorImg}
                            bio="Supports medical checkups, monitors animal recovery, and maintains health log entries."
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Management Philosophy</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 italic leading-relaxed">
                        We believe that professional care leads to sustainable profits. Our team ensures that every buffalo is healthy, every farm is efficient, and every investor is informed.
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50">
                        <div className="text-center">
                            <div className="text-3xl font-black text-primary">24/7</div>
                            <div className="text-xs uppercase tracking-widest mt-2">Monitoring</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-primary">100%</div>
                            <div className="text-xs uppercase tracking-widest mt-2">Transparency</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-primary">Expert</div>
                            <div className="text-xs uppercase tracking-widest mt-2">Veterinary Care</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OurTeam;
