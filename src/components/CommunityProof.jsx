import React from 'react';
import { Users, Video, Activity } from 'lucide-react';

const CommunityProof = () => {
    const stats = [
        { label: "Daily Active Users", value: "10,000+", icon: <Users className="text-primary w-6 h-6" /> },
        { label: "Reels Watched", value: "500K+", icon: <Video className="text-success w-6 h-6" /> },
        { label: "Positive Impact", value: "99%", icon: <Activity className="text-accent w-6 h-6" /> }
    ];

    return (
        <section id="community" className="py-12 border-y border-white/5 bg-surface/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                {stat.icon}
                            </div>
                            <h4 className="text-4xl font-display font-bold text-white tracking-tight mb-1">{stat.value}</h4>
                            <p className="text-sm text-textMuted uppercase tracking-wider font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityProof;
