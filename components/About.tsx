import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Award, Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  
  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden transition-colors duration-300 bg-aura-dark">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none bg-aura-gold/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center min-h-screen mb-20 -mt-28 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-aura-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block">Our Story</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 text-aura-light">
              Architects of the <br />
              <span className="text-aura-gold italic">Digital Future</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-aura-sand/70">
              Founded in 2024, DevMorphixwas born from a simple belief: that digital experiences should be as beautiful as they are functional. We bridge the gap between art and engineering.
            </p>
          </motion.div>
        </div>

        {/* Stats / Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24 border-y py-12 border-white/5">
          {[
            { icon: <Target size={24} />, label: "Projects Delivered", value: "150+" },
            { icon: <Users size={24} />, label: "Happy Clients", value: "98%" },
            { icon: <Zap size={24} />, label: "Performance Score", value: "100" },
            { icon: <Award size={24} />, label: "Design Awards", value: "12" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center text-aura-gold mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-serif mb-2 text-aura-light">{stat.value}</h3>
              <p className="text-xs uppercase tracking-widest text-aura-sand/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-aura-light">Minimalism is Not Lack of Detail</h2>
            <p className="mb-6 leading-relaxed text-aura-sand/70">
              At DevMorphix, we believe that true luxury lies in simplicity. Every pixel we place and every line of code we write is intentional. We strip away the unnecessary to reveal the essential.
            </p>
            <p className="leading-relaxed text-aura-sand/70">
              Our team consists of senior engineers and award-winning designers who are obsessed with quality. We don't just build websites; we build digital assets that appreciate in value over time.
            </p>
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-white/5 relative overflow-hidden rounded-sm">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Office Aesthetics" className="object-cover w-full h-full opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
               <div className="absolute inset-0 border border-aura-gold/20 m-4"></div>
            </div>
          </motion.div> */}
        </div>

        {/* Founders Section */}
        {/* <div className="relative">
          <div className="text-center mb-16">
            <span className="text-aura-gold uppercase tracking-widest text-sm mb-2 block">Leadership</span>
            <h2 className="font-serif text-3xl md:text-5xl text-aura-light">The Visionaries</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                name: "Alexander Voss",
                role: "Co-Founder & Creative Director",
                bio: "With over 15 years in digital design, Alexander has shaped identities for global luxury brands. He ensures every DevMorphix project meets our exacting aesthetic standards.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
              },
              {
                name: "Elena Sterling",
                role: "Co-Founder & Lead Architect",
                bio: "A former Principal Engineer at Silicon Valley tech giants, Elena brings enterprise-grade stability and performance optimization to the creative web.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop"
              }
            ].map((founder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-aura-surface">
                   <img 
                     src={founder.image} 
                     alt={founder.name} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-aura-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div className="flex space-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <a href="#" className="text-aura-gold hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-aura-gold hover:text-white transition-colors"><Twitter size={20} /></a>
                      </div>
                   </div>
                </div>
                <h3 className="text-2xl font-serif text-aura-light mb-1">{founder.name}</h3>
                <p className="text-aura-gold text-xs uppercase tracking-widest mb-4">{founder.role}</p>
                <p className="text-aura-sand/60 text-sm leading-relaxed max-w-md">
                  {founder.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default About;
