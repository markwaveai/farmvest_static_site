import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Home, Info, TrendingUp, BookOpen, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
// Assuming the logo is saved in assets, if not I'll use text for now
// import Logo from '../assets/logo.png'; 

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
        { name: 'Invest', path: '/investment-plans', icon: TrendingUp },
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Contact', path: '/contact-us', icon: Phone },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="w-full px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group bg-emerald-50/90 backdrop-blur-sm p-1.5 pr-6 rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md hover:bg-emerald-50">
                    {/* Logo Box */}
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:scale-105 transition-transform">
                        F
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        <span className="text-primary">Farm</span>Vest
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium transition-all hover:text-primary relative group font-bold",
                                (scrolled || ['/contact-us', '/investor', '/about-us', '/investment-plans', '/blog', '/our-team'].includes(location.pathname)) ? "text-gray-600" : "text-gray-200"
                            )}
                        >
                            <link.icon className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                            <span>{link.name}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className={cn("w-6 h-6", (scrolled || ['/contact-us', '/investor', '/about-us', '/investment-plans', '/blog', '/our-team'].includes(location.pathname)) ? "text-slate-900" : "text-white")} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/login"
                        className="w-full text-center py-3 rounded-lg bg-primary text-white font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        Login Portal
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
