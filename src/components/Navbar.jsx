import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, BookOpen, Phone, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
// Assuming the logo is saved in assets, if not I'll use text for now
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about-us', icon: Info },
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Contact', path: '/contact-us', icon: Phone },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'bg-white/100 shadow-md py-2' : 'bg-transparent py-2'
            )}
        >
            <div className="w-full px-4 md:px-8 flex justify-between items-center relative">
                {/* Logo */}
                <Link to="/" className="flex items-center transition-all">
                    <img src={Logo} alt="FarmVest" className="h-10 md:h-12 rounded-lg hover:scale-105 transition-transform" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-8 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-2 rounded-full shadow-lg">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "flex items-center gap-2 text-sm font-medium transition-all hover:text-primary relative group font-bold",
                                    isActive
                                        ? "text-primary"
                                        : (scrolled || ['/contact-us', '/investor', '/about-us', '/investment-plans', '/blog', '/cookie-policy', '/privacy-policy', '/terms-of-service', '/support', '/admin'].includes(location.pathname))
                                            ? "text-gray-600"
                                            : "text-gray-200"
                                )}
                            >
                                <link.icon className={cn(
                                    "w-4 h-4 transition-transform group-hover:-translate-y-0.5",
                                    isActive && "text-primary"
                                )} />
                                <span>{link.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 bg-white/50 p-2 rounded-lg backdrop-blur-sm shadow-sm border border-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
                </button>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-2 md:hidden animate-in slide-in-from-top-2 duration-200">
                         {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "flex items-center gap-4 p-3 rounded-xl transition-all",
                                    location.pathname === link.path
                                        ? "bg-primary/10 text-primary font-bold"
                                        : "text-gray-600 hover:bg-gray-50 font-medium"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                <link.icon className="w-5 h-5" />
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            

            {/* Mobile Menu Drawer */}
            {isOpen && createPortal(
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 z-[100] xl:hidden animate-in fade-in duration-200"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Sidebar */}
                    <div className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[110] shadow-2xl xl:hidden overflow-y-auto animate-in slide-in-from-right duration-300">
                        <div className="p-6 flex flex-col gap-6">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-black text-primary tracking-tight">MENU</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-500" />
                                </button>
                            </div>

                            {/* Main Navigation */}
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={cn(
                                            "flex items-center gap-4 p-3 rounded-xl transition-all",
                                            location.pathname === link.path
                                                ? "bg-primary/10 text-primary font-bold"
                                                : "text-gray-600 hover:bg-gray-50 font-medium"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <link.icon className="w-5 h-5" />
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="h-px bg-gray-100 w-full" />

                            {/* Portals Section */}
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-2">Access Portals</span>
                                {[
                                    { name: 'Admin', path: '/admin', icon: ShieldAlert, color: 'text-teal-500', bg: 'bg-teal-50' },
                                    { name: 'Investor', path: '/investor', icon: User, color: 'text-blue-500', bg: 'bg-blue-50' },
                                    { name: 'Supervisor', path: '/supervisor', icon: ClipboardCheck, color: 'text-yellow-500', bg: 'bg-yellow-50' },
                                    { name: 'Farm Manager', path: '/farm-manager', icon: Tractor, color: 'text-green-500', bg: 'bg-green-50' },
                                    { name: 'Doctor', path: '/doctor', icon: Stethoscope, color: 'text-red-500', bg: 'bg-red-50' },
                                    { name: 'Asst. Doctor', path: '/assistant-doctor', icon: Users, color: 'text-purple-500', bg: 'bg-purple-50' },
                                ].map((role) => (
                                    <Link
                                        key={role.name}
                                        to={role.path}
                                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all group"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${role.bg} ${role.color}`}>
                                            <role.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">{role.name}</span>
                                        <ChevronRight className="w-4 h-4 ml-auto text-gray-300" />
                                    </Link>
                                ))}
                            </div>


                        </div>
                    </div>
                </>,
                document.body
            )}
        </nav>
    );
};

export default Navbar;
