// Simple Analytics Utility for UBIRT.AI
// You can replace the console logs with actual GA4 calls (window.gtag) once a property ID is active.

export const trackEvent = (eventName, params = {}) => {
    console.log(`[Analytics] Track Event: ${eventName}`, params);
    
    // Check if Google Analytics is loaded
    if (window.gtag) {
        window.gtag('event', eventName, params);
    }
};

export const ANALYTICS_EVENTS = {
    DOWNLOAD_CLICK: 'download_app_click',
    NICHE_SWITCH: 'niche_switch',
    GENERATE_SPARK: 'generate_daily_spark',
    NEWSLETTER_SIGNUP: 'newsletter_signup',
    PAGE_VIEW: 'page_view'
};
