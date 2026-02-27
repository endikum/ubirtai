import React from 'react';
import { Target, Heart, Activity } from 'lucide-react';

const Features = () => {
    const cards = [
        {
            title: "Daily Motivation",
            description: "Start every morning with powerful, AI-curated speeches and visuals designed to spark relentless drive.",
            icon: <Target className="w-8 h-8 text-primary" />,
            delay: 0,
        },
        {
            title: "Mental Health & Focus",
            description: "Balance your hustle with guided mindfulness and health tips tailored to your lifestyle and goals.",
            icon: <Heart className="w-8 h-8 text-accent" />,
            delay: 150,
        },
        {
            title: "Sports & Peak Performance",
            description: "Learn from elite athletes and get personalized routines to push your physical limits every day.",
            icon: <Activity className="w-8 h-8 text-success" />,
            delay: 300,
        }
    ];

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-primary/30 to-transparent z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3">Why UBIRT.AI?</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-textMain">
                        Content That <span className="gradient-text">Drives Results</span>
                    </h3>
                    <p className="mt-4 text-textMuted max-w-2xl mx-auto text-lg hover-gradient-text transition-all duration-300">
                        Our app learns what inspires you, delivering a personalized feed of high-impact reels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="glass-card group relative overflow-hidden"
                            style={{ animationDelay: `${card.delay}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="w-16 h-16 rounded-2xl bg-surface border border-white/5 group-hover:border-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-300">
                                {card.icon}
                            </div>

                            <h4 className="text-2xl font-display font-semibold text-textMain mb-3 group-hover-gradient-text transition-all duration-300 relative z-10">
                                {card.title}
                            </h4>

                            <p className="text-textMuted leading-relaxed relative z-10">
                                {card.description}
                            </p>

                            {/* Subtle bottom highlight on hover */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-warning opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
