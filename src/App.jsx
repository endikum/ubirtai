import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CommunityProof from './components/CommunityProof'
import Features from './components/Features'
import AdUnit from './components/AdUnit'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import DailySpark from './components/DailySpark'
import Newsletter from './components/Newsletter'
import { motion } from 'framer-motion'

// New Page Imports
import AboutUs from './pages/AboutUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

// Main Home Page Component
const Home = ({ initialNiche }) => (
  <main>
    <Hero initialNiche={initialNiche} />
    
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <CommunityProof />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Features />
    </motion.div>

    <DailySpark />

    <Newsletter />

    <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-12"></div>
    
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <SocialLinks />
    </motion.div>
  </main>
);

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-textMain relative selection:bg-success/30 selection:text-white overflow-x-hidden">
      {/* Custom Cursor Glow */}
      <div 
        className="custom-cursor-glow"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y 
        }}
      ></div>

      {/* Global Background Noise Effect */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.015] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motivation" element={<Home initialNiche="motivation" />} />
        <Route path="/health" element={<Home initialNiche="health" />} />
        <Route path="/sports" element={<Home initialNiche="sports" />} />
        
        {/* New Dedicated Content Routes */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
