import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "How AI is Revolutionizing Personal Motivation",
            excerpt: "Explore the intersection of machine learning and human psychology, and how AI-generated content is becoming a powerful tool for discipline.",
            author: "UBIRT Team",
            date: "April 25, 2026",
            readTime: "6 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Top 5 Health Habits for High-Performers",
            excerpt: "Discipline starts with health. We dive into the essential daily habits that keep the world's most successful people at the top of their game.",
            author: "Health Guru",
            date: "April 20, 2026",
            readTime: "8 min read",
            category: "Health",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "Building Mental Resilience in the Digital Age",
            excerpt: "The modern world is filled with noise. Learn how to filter out the distractions and build a mindset that can weather any storm.",
            author: "Psychology Lead",
            date: "April 15, 2026",
            readTime: "10 min read",
            category: "Mindset",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                    Insights & <span className="gradient-text">Motivation</span>
                </h1>
                <p className="text-xl text-textMuted max-w-2xl mx-auto">
                    Deep dives into AI, mental resilience, and high-performance living. 
                    Stay informed and inspired with the UBIRT.AI blog.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-surface/50 rounded-2xl border border-white/5 overflow-hidden group hover:border-primary/30 transition-all hover:scale-[1.02]"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {post.category}
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <div className="flex items-center gap-4 text-xs text-textMuted mb-4">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                            </div>
                            
                            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                            
                            <p className="text-textMuted text-sm mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-primary">
                                        UA
                                    </div>
                                    <span className="text-xs font-medium text-white">{post.author}</span>
                                </div>
                                <button className="text-primary text-sm font-bold flex items-center gap-1 group/btn">
                                    Read More <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
