import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 text-center">
                    Get in <span className="gradient-text">Touch</span>
                </h1>
                
                <p className="text-xl text-textMuted text-center mb-16 max-w-2xl mx-auto">
                    Have questions about UBIRT.AI? We'd love to hear from you. 
                    Whether it's feedback, support, or partnership inquiries, our team is here to help.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-surface/50 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-white font-semibold text-xl mb-2">Email Us</h3>
                            <p className="text-textMuted mb-4">For general inquiries and support:</p>
                            <a href="mailto:info@ubirtai.site" className="text-primary font-medium hover:underline text-lg">
                                info@ubirtai.site
                            </a>
                        </div>

                        <div className="bg-surface/50 p-8 rounded-2xl border border-white/5 hover:border-success/30 transition-colors">
                            <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-4 text-success">
                                <MessageSquare size={24} />
                            </div>
                            <h3 className="text-white font-semibold text-xl mb-2">Support</h3>
                            <p className="text-textMuted">
                                Our support team is available Monday through Friday, 9:00 AM to 5:00 PM EST.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-surface/80 p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-500"></div>
                        
                        <form action="https://formsubmit.co/info@ubirtai.site" method="POST" className="space-y-6 relative z-10">
                            <input type="hidden" name="_subject" value="New Website Contact Form Submission!" />
                            <input type="hidden" name="_captcha" value="false" />
                            
                            <div>
                                <label className="block text-sm font-medium text-textMuted mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required 
                                    placeholder="John Doe"
                                    className="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textMuted mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required 
                                    placeholder="john@example.com"
                                    className="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-textMuted mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    required 
                                    rows="4"
                                    placeholder="How can we help you?"
                                    className="w-full bg-background border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary/50 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-linear-to-r from-primary to-[#00b4d8] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
