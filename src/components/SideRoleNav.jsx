import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Stethoscope, ClipboardCheck, Users, Tractor, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const SideRoleNav = () => {
    const roles = [
        { name: 'Admin', path: '/admin', icon: ShieldAlert, color: 'text-teal-400' },
        { name: 'Investor', path: '/investor', icon: User, color: 'text-blue-400' },
        { name: 'Supervisor', path: '/supervisor', icon: ClipboardCheck, color: 'text-yellow-400' },
        { name: 'Farm Manager', path: '/farm-manager', icon: Tractor, color: 'text-green-400' },
        { name: 'Doctor', path: '/doctor', icon: Stethoscope, color: 'text-red-400' },
        { name: 'Asst. Doctor', path: '/assistant-doctor', icon: Users, color: 'text-purple-400' },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-3 items-start bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/5 w-[4.5rem]">
            {roles.map((role, index) => (
                <motion.div
                    key={role.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <Link
                        to={role.path}
                        className="relative flex items-center bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-full hover:bg-black/60 transition-colors duration-300"
                    >
                        <div className={`w-6 h-6 flex items-center justify-center shrink-0 ${role.color}`}>
                            <role.icon className="w-5 h-5" />
                        </div>
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: hoveredIndex === index ? 'auto' : 0,
                                opacity: hoveredIndex === index ? 1 : 0,
                            }}
                            className="overflow-hidden"
                        >
                            <p className="text-white font-medium text-sm whitespace-nowrap pl-3 pr-2">
                                {role.name}
                            </p>
                        </motion.div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default SideRoleNav;
