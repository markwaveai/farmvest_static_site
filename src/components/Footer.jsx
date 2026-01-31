import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8 xl:pl-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="flex flex-col">
                        <div className="h-12 flex items-center mb-6">
                            <Link to="/" className="inline-block h-8">
                                <img src={Logo} alt="Farm Vest" className="h-full object-contain rounded-md" />
                            </Link>
                        </div>

                        <div className="flex-1">
                            <p className="text-gray-400 mb-8 leading-relaxed text-base">
                                Revolutionizing livestock farming through sustainable investment and modern technology. Join us in building the future of agriculture.
                            </p>
                            <div className="flex gap-4">
                                {[
                                    { Icon: Facebook },
                                    { Icon: Twitter },
                                    { Icon: Instagram },
                                    { Icon: Linkedin }
                                ].map(({ Icon }, i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="h-12 flex items-center mb-6">
                            <h3 className="text-lg font-bold">Quick Links</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about-us' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Contact Us', path: '/contact-us' }
                            ].map((item) => (
                                <li key={item.name} className="h-6 flex items-center">
                                    <Link to={item.path} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group text-base leading-relaxed">
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>



                    {/* Contact Info */}
                    <div>
                        <div className="h-12 flex items-center mb-6">
                            <h3 className="text-lg font-bold">Contact Us</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 group text-base leading-relaxed min-h-[64px]">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=PSR+Prime+Tower+Beside+DLF+Gachibowli"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    206, 2nd floor, Block-A, PSR Prime Tower, Beside DLF, Gachibowli
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 group text-base leading-relaxed h-6">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="tel:+917702710290" className="hover:text-primary transition-colors">+91 77027 10290</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 group text-base leading-relaxed h-6">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href={`mailto:${import.meta.env.VITE_COMPANY_EMAIL}`} className="hover:text-primary transition-colors">{import.meta.env.VITE_COMPANY_EMAIL}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
                        <p className="text-gray-500 text-sm">© 2026 FarmVest. All rights reserved.</p>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
                        <Link to="/support" className="hover:text-white">Support</Link>
                        <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
