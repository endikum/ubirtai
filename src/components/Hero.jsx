import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hearts, setHearts] = useState([]);
    const [likes, setLikes] = useState(12000);
    const [comments, setComments] = useState(340);
    const videoRef = useRef(null);

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        return num.toString();
    };

    const togglePlay = (e) => {
        if (e) e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(err => console.log("Play failed", err));
            }
        }
    };

    const spawnHeart = (e) => {
        if (e) e.stopPropagation();
        const id = Date.now() + Math.random();
        setHearts(prev => [...prev, { id, offset: Math.random() * 30 - 15 }]);
        setTimeout(() => {
            setHearts(prev => prev.filter(h => h.id !== id));
        }, 2000);
    };

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                spawnHeart();
                setLikes(prev => prev + Math.floor(Math.random() * 3) + 1);
                if (Math.random() > 0.6) {
                    setComments(prev => prev + 1);
                }
            }, 800);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[120px] animate-float"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="text-center lg:text-left flex flex-col justify-center animate-fade-in">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-sm font-medium backdrop-blur-sm mx-auto lg:mx-0 shadow-[0_0_15px_rgba(13,92,186,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-linear-to-r from-accent to-primary animate-pulse"></span>
                        <span className="gradient-text font-bold tracking-wide">Available on Android</span>
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
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-gradient-to-br from-primary/40 to-accent/30 filter blur-[80px] rounded-full"></div>

                    {/* CSS Phone Frame */}
                    <div className="relative w-[300px] h-[600px] bg-[#0a0a0f] border-[10px] border-[#1d1d2b] rounded-[2.5rem] shadow-2xl overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.15)] flex flex-col group transform transition-transform duration-700 hover:-translate-y-2">
                        {/* Phone Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#1d1d2b] rounded-b-xl z-20 flex justify-center items-end pb-1">
                            <div className="w-12 h-1.5 bg-black/50 rounded-full"></div>
                        </div>

                        {/* Screen Content - Mocked App UI */}
                        <div className="flex-1 bg-surface relative overflow-hidden group/screen cursor-pointer" onClick={togglePlay}>
                            {/* Video Background Mock / Actual Video */}
                            <div className={`absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background animate-pulse-slow ${isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 z-0`}></div>

                            <video
                                ref={videoRef}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                                src="/0211.mp4"
                                loop
                                playsInline
                                muted
                            />

                            {/* UI Overlay */}
                            <div className="absolute inset-0 bg-black/20 pointer-events-none z-10 transition-opacity duration-300"></div>

                            {/* UI Elements */}
                            <div className="absolute top-10 left-4 right-4 flex justify-between items-center z-20 pointer-events-none">
                                <div className="font-display font-bold text-white tracking-widest text-sm drop-shadow-md">UBIRT.AI</div>
                                <div className="px-2 py-1 rounded bg-black/40 backdrop-blur-sm text-xs font-medium text-white shadow-sm pointer-events-auto hover:bg-black/60 transition-colors">Following</div>
                            </div>

                            <div className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-all duration-300 ${isPlaying ? 'opacity-0 scale-125' : 'opacity-100 scale-100'}`}>
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    <Play fill="white" className="text-white ml-1 w-6 h-6" />
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-4 right-4 z-20 flex justify-between items-end pointer-events-none">
                                {/* Text and Info */}
                                <div className="flex-1 pr-2">
                                    <div className="font-bold text-lg text-white mb-1 shadow-sm drop-shadow-lg">Unleash Your Potential</div>
                                    <div className="text-sm text-white/90 mb-4 shadow-sm drop-shadow-lg leading-snug">A little motivation to kickstart your day! 🚀 #motivation #health</div>

                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent p-[1px] shadow-[0_0_10px_rgba(0,229,255,0.5)] shrink-0">
                                            <div className="w-full h-full bg-surface rounded-full flex items-center justify-center overflow-hidden">
                                                <img src="https://i.pravatar.cc/100?img=1" alt="avatar" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                        <span className="text-sm font-medium text-white drop-shadow-md border-b border-white/20">@ubirtai</span>
                                    </div>
                                </div>

                                {/* Floating Action Buttons */}
                                <div className="flex flex-col gap-4 items-center mb-2 pointer-events-auto">
                                    <div className="relative flex flex-col items-center group/like cursor-pointer" onClick={(e) => {
                                        spawnHeart(e);
                                        setLikes(prev => prev + 1);
                                    }}>
                                        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white mb-1 group-hover/like:bg-primary/60 transition-colors border border-white/10 shadow-lg">
                                            ❤️
                                        </div>
                                        <span className="text-xs text-white font-semibold drop-shadow-md">{formatNumber(likes)}</span>
                                        {/* Floating Hearts */}
                                        {hearts.map(heart => (
                                            <div
                                                key={heart.id}
                                                className="absolute text-xl pointer-events-none animate-float-up z-50"
                                                style={{ left: `calc(50% - 10px + ${heart.offset}px)`, bottom: '100%' }}
                                            >
                                                ❤️
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col items-center cursor-pointer group/comment" onClick={() => setComments(prev => prev + 1)}>
                                        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white mb-1 group-hover/comment:bg-white/20 transition-colors border border-white/10 shadow-lg">
                                            💬
                                        </div>
                                        <span className="text-xs text-white font-semibold drop-shadow-md">{formatNumber(comments)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Home Indicator */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full z-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
