import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-300 bg-aura-dark">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse-slow bg-aura-gold/5"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow bg-aura-sand/5" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2, duration: 1 }}
            className="inline-block text-aura-gold uppercase tracking-[0.3em] text-xs font-medium mb-6 border px-4 py-2 rounded-full backdrop-blur-sm border-aura-gold/20"
          >
            Est. 2024 • Global Digital Agency
          </motion.span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-8 leading-[1.1] tracking-tight text-aura-light">
            YOU  <span className="italic text-aura-sand">DREAM,</span><br />WE
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-gold to-aura-sand">  DELIVER</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed text-aura-light/60">
            We architect digital landscapes where minimalism meets functionality. 
            Elevating brands through precision code and timeless design.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/portfolio">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-aura-gold text-aura-dark font-semibold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(191,161,129,0.4)] transition-all duration-300 flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border transition-all duration-300 uppercase tracking-widest text-sm font-medium backdrop-blur-sm border-aura-light/20 text-aura-light hover:bg-aura-light hover:text-aura-dark"
              >
                Start Collaboration
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
