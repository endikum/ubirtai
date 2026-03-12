import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const LegalPopup = ({ isOpen, onClose, title, content }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-[#0d0d14] border border-white/10 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-fade-in">

                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10 bg-surface/50">
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 text-textMuted hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body (Scrollable) */}
                <div className="p-6 overflow-y-auto custom-scrollbar text-textMuted text-sm md:text-base leading-relaxed space-y-6">
                    {content}
                </div>

                {/* Footer Gradient Glow (Decorative) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-success to-accent"></div>
            </div>
        </div>
    );
};

export default LegalPopup;
