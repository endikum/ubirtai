import React from 'react';

const SocialLink = ({ name, url, icon, color }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card flex items-center justify-between group overflow-hidden"
    >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: color }}></div>

        <div className="flex items-center gap-4 relative z-10">
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: color, backgroundColor: `${color}15` }}
            >
                <i className={icon}></i>
            </div>
            <span className="font-display font-medium text-lg text-textMain group-hover-gradient-text transition-all duration-300">{name}</span>
        </div>

        <div className="relative z-10 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-textMuted group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
            <i className="fas fa-arrow-right transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
        </div>
    </a>
);

const SocialLinks = () => {
    const links = [
        { name: "YouTube", url: "https://www.youtube.com/@ubirtai", icon: "fab fa-youtube", color: "#FF0000" },
        { name: "TikTok", url: "https://tiktok.com/@ubirtai", icon: "fab fa-tiktok", color: "#00f2fe" },
        { name: "Instagram", url: "https://instagram.com/ubirtai", icon: "fab fa-instagram", color: "#E1306C" },
        { name: "X (Twitter)", url: "https://x.com/ubirtai", icon: "fab fa-x-twitter", color: "#1DA1F2" },
        { name: "Facebook", url: "https://www.facebook.com/ubirtai", icon: "fab fa-facebook-f", color: "#1877F2" },
        { name: "Threads", url: "https://www.threads.com/@ubirtai", icon: "fa-brands fa-threads", color: "#FFFFFF" },
        { name: "WhatsApp", url: "https://www.whatsapp.com/channel/0029Vb7WpUa6BIEg6DWL6r1M", icon: "fab fa-whatsapp", color: "#25D366" },
        { name: "Linktree", url: "https://linktr.ee/ubirt.ai", icon: "fas fa-link", color: "#43E660" }
    ];

    return (
        <section id="links" className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-[100px] z-[-1]"></div>

            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-textMain mb-4">
                        Connect with Us
                    </h2>
                    <p className="text-textMuted text-lg max-w-xl mx-auto">
                        Join our community across all platforms and never miss an update on AI, lifestyle, and motivation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {links.map((link, index) => (
                        <SocialLink
                            key={index}
                            name={link.name}
                            url={link.url}
                            icon={link.icon}
                            color={link.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialLinks;
