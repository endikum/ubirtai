import React from 'react';
import { Download, ChevronRight } from 'lucide-react';

const Footer = ({ onOpenLegal }) => {
    return (
        <footer className="relative mt-12 bg-surface/50 border-t border-white/5 pt-20 pb-8 overflow-hidden">
            {/* Huge subtle glow for the final CTA */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-success/10 rounded-full filter blur-[120px] z-0 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-20">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                    Ready to Elevate Your <br />
                    <span className="text-glow-success text-success">Daily Routine?</span>
                </h2>
                <p className="text-xl text-textMuted mb-10 max-w-2xl mx-auto">
                    Join thousands of users who have transformed their mindset and health with UBIRT.AI's daily reels.
                </p>

                <div className="flex flex-col items-center justify-center gap-6">
                    <a
                        href="https://play.google.com/store/apps/details?id=ubirtai.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex flex-col items-center w-64 hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                            alt="Get it on Google Play"
                            className="w-full h-auto drop-shadow-2xl"
                        />
                        <span className="mt-4 flex items-center gap-1 text-sm font-medium text-textMuted group-hover:text-success transition-colors">
                            Download Free <ChevronRight size={16} />
                        </span>
                    </a>

                    <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-md">
                        <p className="text-textMuted text-sm font-medium">Not on Android? Join the waitlist for our iOS release and exclusive updates.</p>
                        <form
                            action="https://formsubmit.co/info@ubirtai.site"
                            method="POST"
                            className="flex w-full mt-2 relative group"
                        >
                            <input type="hidden" name="_subject" value="New iOS Waitlist Signup!" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email for ios waitlist"
                                required
                                className="w-full bg-surface/80 border border-white/10 rounded-full py-3 pl-6 pr-24 text-sm text-textMain placeholder-textMuted focus:outline-none focus:border-success/50 focus:ring-1 focus:ring-success/50 transition-all duration-300"
                            />
                            <button
                                type="submit"
                                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-linear-to-r from-success to-accent text-background font-semibold text-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all duration-300"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                <a href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-success flex items-center justify-center text-background font-display font-bold text-sm group-hover:shadow-[0_0_15px_rgba(0,255,136,0.5)] transition-all duration-300 group-hover:scale-105">
                        U
                    </div>
                    <span className="font-display font-bold text-lg text-textMain group-hover:text-success transition-colors duration-300">
                        UBIRT.AI
                    </span>
                </a>

                <p className="text-sm text-textMuted">
                    &copy; {new Date().getFullYear()} UBIRT.AI. All rights reserved.
                </p>

                <div className="flex flex-col md:flex-row gap-6 text-sm text-textMuted items-center md:items-start">
                    <a href="mailto:info@ubirtai.site" className="hover:text-success transition-colors">info@ubirtai.site</a>
                    <button
                        onClick={() => onOpenLegal('privacy')}
                        className="hover:text-success transition-colors cursor-pointer"
                    >
                        Privacy Policy
                    </button>
                    <button
                        onClick={() => onOpenLegal('terms')}
                        className="hover:text-success transition-colors cursor-pointer"
                    >
                        Terms of Service
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
