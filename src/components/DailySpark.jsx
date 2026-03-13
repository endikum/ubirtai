import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const SPARKS = [
    { type: 'motivation', text: "Your only limit is the one you set yourself. Push harder than yesterday.", author: "UBIRT AI" },
    { type: 'health', text: "Peak performance starts with radical recovery. Hydrate and rest intentionally.", author: "Health AI" },
    { type: 'sports', text: "Consistency beats talent when talent doesn't work hard. Stay in the game.", author: "Pro Athlete AI" },
    { type: 'motivation', text: "Doubt is a liar. Every rep counts, every second matters.", author: "Elite Mindset" },
    { type: 'health', text: "Small habits lead to massive results. Start with 10 minutes of focus today.", author: "Wellness Bot" }
];

const DailySpark = () => {
    const [spark, setSpark] = useState(SPARKS[0]);
    const [isGenerating, setIsGenerating] = useState(false);

    const generateNewSpark = () => {
        setIsGenerating(true);
        trackEvent(ANALYTICS_EVENTS.GENERATE_SPARK, { current_type: spark.type });
        
        setTimeout(() => {
            const currentIdx = SPARKS.indexOf(spark);
            let nextIdx = Math.floor(Math.random() * SPARKS.length);
            while (nextIdx === currentIdx) {
                nextIdx = Math.floor(Math.random() * SPARKS.length);
            }
            setSpark(SPARKS[nextIdx]);
            setIsGenerating(false);
        }, 800);
    };

    return (
        <section className="py-20 relative overflow-hidden bg-surface/20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="glass-card relative overflow-hidden text-center p-12 border-primary/20 bg-linear-to-br from-surface to-background">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-24 h-24 bg-primary/20 blur-[60px] rounded-full"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/10 blur-[60px] rounded-full"></div>
                    
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-accent">
                        <Sparkles size={16} />
                        <span>Interactive Daily Spark</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 tracking-tight">
                        Need a <span className="gradient-text">Quick Boost?</span>
                    </h2>

                    <div className="min-h-[140px] flex items-center justify-center mb-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={spark.text}
                                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                                transition={{ duration: 0.4 }}
                                className="max-w-2xl"
                            >
                                <p className="text-xl md:text-2xl text-textMain italic leading-relaxed mb-4">
                                    "{spark.text}"
                                </p>
                                <p className="text-sm font-display font-bold uppercase tracking-widest text-textMuted">— {spark.author}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={generateNewSpark}
                        disabled={isGenerating}
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 text-white font-bold transition-all duration-300 hover:scale-105 hover:bg-white/10 active:scale-95 disabled:opacity-50"
                    >
                        <RefreshCw size={20} className={`${isGenerating ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                        {isGenerating ? 'AI Generating...' : 'Generate New Insight'}
                    </button>
                    
                    <p className="mt-8 text-xs text-textMuted uppercase tracking-wider">
                        Get personalized insights like these 24/7 in the app.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DailySpark;
