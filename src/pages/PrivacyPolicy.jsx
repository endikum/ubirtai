import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-display font-bold text-white mb-8">
                    Privacy <span className="gradient-text">Policy</span>
                </h1>
                
                <div className="prose prose-invert max-w-none space-y-6 text-textMuted">
                    <p><strong>Effective Date:</strong> January 1, 2026</p>
                    
                    <p>
                        At UBIRT.AI, accessible from ubirtai.site, one of our main priorities is the privacy of our visitors. 
                        This Privacy Policy document contains types of information that is collected and recorded by 
                        UBIRT.AI and how we use it.
                    </p>

                    <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us when you create an account, such as your name, 
                        email address, and viewing preferences. We also automatically collect data regarding your 
                        interaction with UBIRT.AI, including device information, IP address, and usage statistics.
                    </p>

                    <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
                    <p>
                        Your information is used to personalize your experience, tailor the AI-generated motivational 
                        reels to your specific goals (Motivation, Health, Sports), and improve the overall functionality 
                        of the application. Specifically, we use your data to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide, operate, and maintain our website and app</li>
                        <li>Improve, personalize, and expand our website and app</li>
                        <li>Understand and analyze how you use our website and app</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-white">3. Log Files</h2>
                    <p>
                        UBIRT.AI follows a standard procedure of using log files. These files log visitors when they 
                        visit websites. All hosting companies do this and a part of hosting services' analytics. 
                        The information collected by log files include internet protocol (IP) addresses, browser type, 
                        Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the 
                        number of clicks.
                    </p>

                    <h2 className="text-xl font-semibold text-white">4. Advertising Partners Privacy Policies</h2>
                    <p>
                        You may consult this list to find the Privacy Policy for each of the advertising partners of 
                        UBIRT.AI. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, 
                        or Web Beacons that are used in their respective advertisements and links that appear on 
                        UBIRT.AI, which are sent directly to users' browser.
                    </p>

                    <h2 className="text-xl font-semibold text-white">5. Data Security</h2>
                    <p>
                        We implement standard security measures to protect your personal information. However, no 
                        method of transmission over the internet or electronic storage is 100% secure.
                    </p>

                    <h2 className="text-xl font-semibold text-white">6. Contact Us</h2>
                    <p>
                        If you have questions regarding this Privacy Policy, please contact us at 
                        <a href="mailto:info@ubirtai.site" className="text-success hover:underline ml-1">info@ubirtai.site</a>.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
