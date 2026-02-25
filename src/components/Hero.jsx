import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-float"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-success/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="text-center lg:text-left flex flex-col justify-center animate-fade-in">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-success/30 bg-success/5 text-success text-sm font-medium backdrop-blur-sm mx-auto lg:mx-0">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                        Available on Android
                    </div>

                    <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 tracking-tight">
                        Fuel Your Day with <br className="hidden lg:block" />
                        <span className="gradient-text">AI-Powered Reels</span>
                    </h1>

                    <p className="text-lg text-textMuted max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                        Experience the next generation of highly engaging, AI-curated short videos focused on motivation, health, and sports. Download UBIRT.AI today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <a
                            href="https://play.google.com/store/apps/details?id=ubirtai.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                alt="Get it on Google Play"
                                className="h-16 w-auto"
                            />
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm text-textMuted">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-surface flex items-center justify-center overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i * 10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <p>Join <span className="text-white font-semibold">10,000+</span> daily viewers</p>
                    </div>
                </div>

                {/* Visual Phone Mockup */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Subtle glow behind phone */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-gradient-to-br from-primary/30 to-success/30 filter blur-[80px] rounded-full"></div>

                    {/* CSS Phone Frame */}
                    <div className="relative w-[300px] h-[600px] bg-[#0a0a0f] border-[10px] border-[#1d1d2b] rounded-[2.5rem] shadow-2xl overflow-hidden shadow-[0_0_40px_rgba(0,255,136,0.15)] flex flex-col group transform transition-transform duration-700 hover:-translate-y-2">
                        {/* Phone Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#1d1d2b] rounded-b-xl z-20 flex justify-center items-end pb-1">
                            <div className="w-12 h-1.5 bg-black/50 rounded-full"></div>
                        </div>

                        {/* Screen Content - Mocked App UI */}
                        <div className="flex-1 bg-surface relative overflow-hidden">
                            {/* Video Background Mock */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background animate-pulse-slow"></div>

                            {/* UI Elements */}
                            <div className="absolute top-10 left-4 right-4 flex justify-between items-center z-10">
                                <div className="font-display font-bold text-white tracking-widest text-sm">UBIRT.AI</div>
                                <div className="px-2 py-1 rounded bg-black/40 backdrop-blur-sm text-xs font-medium text-white">Following</div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    <Play fill="white" className="text-white ml-1 w-6 h-6" />
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                <div className="font-bold text-lg text-white mb-1 shadow-sm">Unleash Your Potential</div>
                                <div className="text-sm text-textMain/80 mb-3 shadow-sm">A little motivation to kickstart your day! 🚀 #motivation #health</div>

                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-success p-[1px]">
                                            <div className="w-full h-full bg-surface rounded-full"></div>
                                        </div>
                                        <span className="text-sm font-medium text-white">@ubirtai</span>
                                    </div>

                                    <div className="flex flex-col gap-3 items-center">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-1">❤️</div>
                                            <span className="text-xs text-white drop-shadow-md">12K</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-1">💬</div>
                                            <span className="text-xs text-white drop-shadow-md">340</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full z-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
