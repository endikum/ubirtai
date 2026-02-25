import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-success to-accent flex items-center justify-center text-background font-display font-bold text-xl shadow-[0_0_15px_rgba(0,255,136,0.2)] group-hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] group-hover:scale-105 transition-all duration-300">
                        U
                    </div>
                    <span className="font-display font-bold text-2xl tracking-tight text-textMain group-hover:text-success transition-colors duration-300">
                        UBIRT.AI
                    </span>
                </a>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textMuted">
                    <a href="#features" className="hover:text-success transition-colors">Features</a>
                    <a href="#links" className="hover:text-success transition-colors">Community</a>
                </div>

                <a
                    href="https://play.google.com/store/apps/details?id=ubirtai.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-success/20 border border-success/30 hover:border-success text-success text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                    <Download size={16} />
                    <span>Download App</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
