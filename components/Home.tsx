import React, { useState } from 'react';
import Hero from './Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, Shield, Zap, Gem, ChevronDown, ChevronUp, Code, Database, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const techStack = [
    "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "AWS", "Framer Motion", "PostgreSQL", "GraphQL", "Docker", "Kubernetes", "Figma"
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Most custom web development projects take between 4-8 weeks, depending on complexity. We work in agile sprints to ensure constant progress and transparency."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Absolutely. We offer various maintenance packages to keep your digital assets secure, up-to-date, and performing at their peak."
    },
    {
      question: "How do you handle pricing?",
      answer: "We operate on a project-based pricing model. After our initial discovery call, we provide a detailed proposal with clear deliverables and costs. No hidden fees."
    },
    {
      question: "Can you work with our existing design team?",
      answer: "Yes, we frequently collaborate with internal teams. We can act as your dedicated engineering arm, bringing your designs to life with pixel-perfect precision."
    }
  ];

  return (
    <div className="overflow-hidden transition-colors duration-300 bg-aura-dark">
      <Hero />
      
      {/* Tech Stack Marquee */}
      <section className="py-10 border-y backdrop-blur-sm relative z-20 overflow-hidden transition-colors duration-300 border-white/5 bg-aura-surface/30">
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex gap-16 items-center"
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="text-xl font-serif uppercase tracking-widest font-bold text-aura-sand/40">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Selected Works Preview */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-aura-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block">Portfolio</span>
              <h2 className="font-serif text-4xl md:text-6xl text-aura-light">Selected <span className="text-aura-gold italic">Works</span></h2>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 hover:text-aura-gold transition-colors uppercase tracking-widest text-xs font-bold text-aura-sand">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-32">
            {[
              {
                title: "Inovus Labs IEDC",
                cat: "Community Platform",
                desc: "Offical website and member portal for Inovus Labs Innovation and Entrepreneurship Development Cell.",
                img: "/Gemini_Generated_Image_bqht1sbqht1sbqht.png"
              },
              {
                title: "GigWork ",
                cat: "Service directory",
                desc: "The ultimate online business directory accessible through WhatsApp. We are dedicated to connecting local businesses with customers in the most efficient way possible.",
                img: "/gigwork.png"
              }
            ].map((project, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-3/5">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative aspect-[16/10] overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-aura-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </motion.div>
                </div>
                <div className="w-full md:w-2/5">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <span className="text-aura-gold text-xs uppercase tracking-widest mb-4 block">{project.cat}</span>
                    <h3 className="text-4xl font-serif mb-6 text-aura-light">{project.title}</h3>
                    <p className="mb-8 leading-relaxed text-aura-sand/70">
                      {project.desc}
                    </p>
                    <Link to="/portfolio">
                      <button className="px-8 py-3 border hover:bg-aura-gold hover:text-aura-dark hover:border-aura-gold transition-all duration-300 uppercase tracking-widest text-xs font-bold border-white/20 text-aura-light">
                        View Case Study
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology / Process */}
      <section className="py-32 relative overflow-hidden transition-colors duration-300 bg-aura-surface">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-aura-gold/5"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-aura-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block">Methodology</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-aura-light">Our Process</h2>
            <div className="w-16 h-1 bg-aura-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Database size={32} />, step: "01", title: "Discovery", desc: "We dive deep into your business goals, user needs, and market landscape." },
              { icon: <Code size={32} />, step: "02", title: "Strategy", desc: "Crafting a comprehensive roadmap and technical architecture for scalability." },
              { icon: <Cpu size={32} />, step: "03", title: "Development", desc: "Agile sprints, clean code, and rigorous testing to build a robust product." },
              { icon: <Globe size={32} />, step: "04", title: "Launch", desc: "Seamless deployment, performance monitoring, and continuous optimization." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 border-l transition-colors duration-300 border-white/10 hover:border-aura-gold bg-gradient-to-br from-white/5 to-transparent"
              >
                <div className="text-6xl font-serif absolute top-4 right-4 text-aura-sand/20">{item.step}</div>
                <div className="text-aura-gold mb-6 relative z-10">{item.icon}</div>
                <h3 className="text-xl font-serif mb-4 relative z-10 text-aura-light">{item.title}</h3>
                <p className="text-sm leading-relaxed relative z-10 text-aura-sand/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-aura-light">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg overflow-hidden border-white/10 bg-aura-glass">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left transition-colors hover:bg-aura-glass"
                >
                  <span className="text-lg font-medium text-aura-light">{faq.question}</span>
                  {openFaq === i ? <ChevronUp className="text-aura-gold" /> : <ChevronDown className="text-aura-sand/50" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-4 leading-relaxed border-t text-aura-sand/70 border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" alt="Abstract Tech" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-aura-dark via-aura-dark/80 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 text-aura-light">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-aura-sand/70">
            Join the ranks of industry leaders who have chosen DevMorphix Digital. Let's build something extraordinary together.
          </p>
          <Link to="/contact">
            <button className="px-12 py-5 bg-aura-gold text-aura-dark font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(191,161,129,0.3)]">
              Get Your Free Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;


