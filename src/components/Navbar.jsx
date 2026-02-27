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
                    <img
                        src="/logo.png"
                        alt="UBIRT.AI Logo"
                        className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(0,229,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all duration-300 group-hover:scale-105"
                    />
                    <span className="font-display font-bold text-2xl tracking-tight text-textMain group-hover-gradient-text transition-all duration-300">
                        UBIRT.AI
                    </span>
                </a>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textMuted">
                    <a href="#features" className="hover-gradient-text transition-all duration-300">Features</a>
                    <a href="#links" className="hover-gradient-text transition-all duration-300">Community</a>
                </div>

                <a
                    href="https://play.google.com/store/apps/details?id=ubirtai.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-primary to-[#00b4d8] hover:from-primary hover:to-accent border border-primary/50 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(13,92,186,0.4)] hover:shadow-[0_0_25px_rgba(13,92,186,0.6)]"
                >
                    <Download size={16} />
                    <span>Download App</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
