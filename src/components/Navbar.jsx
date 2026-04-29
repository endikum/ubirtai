import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'glass py-3' : 'py-5 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src="/logo.png"
                        alt="UBIRT.AI Logo"
                        className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(0,229,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all duration-300 group-hover:scale-105"
                    />
                    <span className="font-display font-bold text-2xl tracking-tight text-textMain group-hover-gradient-text transition-all duration-300">
                        UBIRT.AI
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.path} 
                            className={`${location.pathname === link.path ? 'gradient-text' : 'text-textMuted'} hover:text-white transition-all duration-300`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://play.google.com/store/apps/details?id=ubirtai.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-primary to-[#00b4d8] hover:from-primary hover:to-accent border border-primary/50 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(13,92,186,0.4)] hover:shadow-[0_0_25px_rgba(13,92,186,0.6)]"
                    >
                        <Download size={16} />
                        <span>Download</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white p-2 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden glass border-t border-white/10 overflow-hidden"
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                className={`text-lg font-medium ${location.pathname === link.path ? 'gradient-text' : 'text-textMuted'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://play.google.com/store/apps/details?id=ubirtai.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-linear-to-r from-primary to-[#00b4d8] text-white font-bold"
                        >
                            <Download size={18} />
                            <span>Download App</span>
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
