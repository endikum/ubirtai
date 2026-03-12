import React, { useEffect } from 'react';

/**
 * AdUnit component for manual Google AdSense placements.
 * 
 * @param {Object} props
 * @param {string} props.slot - The ad slot ID provided by Google AdSense.
 */
const AdUnit = ({ slot }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 my-12" aria-hidden="true">
            <div className="w-full flex justify-center bg-surface/50 rounded-xl border border-white/5 py-8 backdrop-blur-sm min-h-[100px] overflow-hidden">
                {/* Google AdSense Unit */}
                <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-8032670705959771"
                    data-ad-slot={slot || "XXXXXXXXXX"}
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>
                <span className="absolute top-2 left-2 text-[10px] text-white/20 uppercase tracking-widest font-mono">Sponsored</span>
            </div>
        </div>
    );
};

export default AdUnit;
