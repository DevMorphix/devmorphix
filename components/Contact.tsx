import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="pt-44 pb-24 bg-aura-dark border-t border-aura-gold/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-aura-gold uppercase tracking-widest text-sm mb-2 block">Get in touch</span>
            <h2 className="font-serif text-4xl md:text-5xl text-aura-light mb-8">Let's Build Something<br/>Exceptional</h2>
            <p className="text-aura-sand/70 text-lg mb-12 max-w-md">
              Whether you need a complete platform overhaul or a high-converting landing page, we are ready to elevate your digital presence.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-aura-sand hover:text-aura-gold transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-aura-gold/20 flex items-center justify-center group-hover:bg-aura-gold group-hover:text-aura-dark transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-50">Email Us</p>
                  <p className="text-lg">devmorphix@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-aura-sand hover:text-aura-gold transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-aura-gold/20 flex items-center justify-center group-hover:bg-aura-gold group-hover:text-aura-dark transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-50">Call Us</p>
                  <p className="text-lg">+919946971423</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-4 text-aura-sand hover:text-aura-gold transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-aura-gold/20 flex items-center justify-center group-hover:bg-aura-gold group-hover:text-aura-dark transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-50">Studio</p>
                  <p className="text-lg">101 Innovation Dr, Tech City</p>
                </div>
              </div> */}
            </div>
          </div>

          <form className="bg-aura-surface p-8 md:p-12 border border-aura-gold/10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div>
                 <label className="block text-xs uppercase tracking-widest text-aura-sand mb-2">Name</label>
                 <input type="text" className="w-full bg-aura-dark border-b border-aura-sand/30 focus:border-aura-gold py-3 text-aura-light focus:outline-none transition-colors" placeholder="John Doe" />
               </div>
               <div>
                 <label className="block text-xs uppercase tracking-widest text-aura-sand mb-2">Email</label>
                 <input type="email" className="w-full bg-aura-dark border-b border-aura-sand/30 focus:border-aura-gold py-3 text-aura-light focus:outline-none transition-colors" placeholder="john@example.com" />
               </div>
             </div>
             
             <div className="mb-6">
               <label className="block text-xs uppercase tracking-widest text-aura-sand mb-2">Subject</label>
               <select className="w-full bg-aura-dark border-b border-aura-sand/30 focus:border-aura-gold py-3 text-aura-light focus:outline-none transition-colors">
                 <option>Project Inquiry</option>
                 <option>Template Support</option>
                 <option>General Question</option>
               </select>
             </div>

             <div className="mb-8">
               <label className="block text-xs uppercase tracking-widest text-aura-sand mb-2">Message</label>
               <textarea rows={4} className="w-full bg-aura-dark border-b border-aura-sand/30 focus:border-aura-gold py-3 text-aura-light focus:outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
             </div>

             <button type="submit" className="w-full py-4 bg-aura-gold text-aura-dark uppercase tracking-widest font-bold hover:bg-white transition-colors">
               Send Message
             </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
