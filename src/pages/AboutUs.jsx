import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                    About <span className="gradient-text">UBIRT.AI</span>
                </h1>
                
                <div className="prose prose-invert prose-lg max-w-none space-y-6 text-textMuted">
                    <p>
                        Welcome to <strong>UBIRT.AI</strong>, the next generation of AI-driven personal growth and motivation. 
                        In a world filled with distractions, we believe in the power of focus, health, and a resilient mindset. 
                        Our mission is to provide you with the tools and inspiration you need to stay on track, 
                        every single day.
                    </p>

                    <h2 className="text-2xl font-display font-semibold text-white mt-12">Our Mission</h2>
                    <p>
                        At UBIRT.AI, we bridge the gap between cutting-edge Artificial Intelligence and human potential. 
                        We specialize in creating high-fidelity, emotionally resonant AI reels that target three core pillars 
                        of a successful life: <strong>Motivation, Health, and Sports.</strong>
                    </p>

                    <h2 className="text-2xl font-display font-semibold text-white mt-12">Why We Exist</h2>
                    <p>
                        Motivation is often fleeting, but discipline is built through consistency. By delivering daily, 
                        tailored motivational content directly to your device, we help you maintain the momentum 
                        needed to reach your most ambitious goals. Whether you're an athlete pushing for a new personal best, 
                        a professional navigating a high-stakes career, or someone focused on improving their overall 
                        well-being, UBIRT.AI is your digital partner in growth.
                    </p>

                    <h2 className="text-2xl font-display font-semibold text-white mt-12">The Technology</h2>
                    <p>
                        Our proprietary AI algorithms analyze thousands of hours of high-performance content to generate 
                        unique reels that aren't just visually stunning but psychologically impactful. We don't just 
                        show you a video; we create an experience designed to trigger the dopamine and adrenaline 
                        necessary to get you moving.
                    </p>

                    <h2 className="text-2xl font-display font-semibold text-white mt-12">Join the Community</h2>
                    <p>
                        UBIRT.AI is more than just an app; it's a movement. Thousands of users across the globe rely 
                        on our daily sparks to start their morning with intention. Join us today and see how 
                        AI-powered motivation can change your life.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutUs;
