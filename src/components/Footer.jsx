import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <img src={Logo} alt="FarmVest" className="h-20 rounded-md hover:opacity-80 transition-opacity" />
                        </Link>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Revolutionizing livestock farming through sustainable investment and modern technology. Join us in building the future of agriculture.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, link: '#' },
                                { Icon: Twitter, link: '#' },
                                { Icon: Instagram, link: 'https://www.instagram.com' },
                                { Icon: Linkedin, link: '#' }
                            ].map(({ Icon, link }, i) => (
                                <a
                                    key={i}
                                    href={link}
                                    target={link !== '#' ? "_blank" : undefined}
                                    rel={link !== '#' ? "noopener noreferrer" : undefined}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about-us' },
                                { name: 'Investment Plans', path: '/investment-plans' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Contact Us', path: '/contact-us' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>



                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-primary mt-1" />
                                <span>206,2nd floor,Block-A,PSR Prime Tower,Beside DLF,Gachibowli</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-primary" />
                                <a href="tel:+917702710290" className="hover:text-primary transition-colors">+91 77027 10290</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-primary" />
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
