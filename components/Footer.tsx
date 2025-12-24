import React from 'react';
import { Hexagon, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-aura-dark py-16 text-aura-sand border-t border-aura-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            {/* <Hexagon className="text-aura-gold h-8 w-8" strokeWidth={1.5} /> */}
            <span className="font-serif text-2xl tracking-widest text-aura-light">DevMorphix</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-aura-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-aura-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-aura-gold transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-aura-gold transition-colors"><Github size={20} /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
          <div>
            <h4 className="text-white uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2 opacity-70">
              <li><a href="#" className="hover:text-aura-gold">About</a></li>
              {/* <li><a href="#" className="hover:text-aura-gold">Careers</a></li> */}
              {/* <li><a href="#" className="hover:text-aura-gold">Press</a></li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-white uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2 opacity-70">
              <li><a href="#" className="hover:text-aura-gold">Web Development</a></li>
              <li><a href="#" className="hover:text-aura-gold">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-aura-gold">SEO Optimization</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-2 opacity-70">
              <li><a href="#" className="hover:text-aura-gold">Templates</a></li>
              {/* <li><a href="#" className="hover:text-aura-gold">Blog</a></li> */}
              {/* <li><a href="#" className="hover:text-aura-gold">Case Studies</a></li> */}
            </ul>
          </div>
           <div>
            <h4 className="text-white uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2 opacity-70">
              <li><a href="#" className="hover:text-aura-gold">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-aura-gold">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs opacity-50 uppercase tracking-widest">
          © {new Date().getFullYear()} DevMorphix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
