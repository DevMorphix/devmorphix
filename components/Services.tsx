import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Layers, Cpu, Bot, Sparkles, BrainCircuit } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Custom Development",
    description: "Tailor-made web applications built with React, Next.js, and Node.js. Optimized for speed and scalability.",
    icon: "code"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centric design that blends functionality with premium aesthetics. Wireframing, prototyping, and high-fidelity mockups.",
    icon: "palette"
  },
  {
    id: 3,
    title: "Performance Optimization",
    description: "Auditing and refining existing platforms to achieve maximum speed, SEO ranking, and user retention.",
    icon: "rocket"
  },
  {
    id: 4,
    title: "Scalable Architecture",
    description: "Building robust backend systems and database structures designed to grow with your business.",
    icon: "layers"
  },
  {
    id: 5,
    title: "IoT Project Development",
    description: "End-to-end IoT solutions from hardware integration to cloud connectivity, enabling smart devices and real-time data monitoring.",
    icon: "cpu"
  },
  {
    id: 6,
    title: "Automation Works",
    description: "WhatsApp, Telegram, and Discord bot automation. Streamline workflows and enhance communication with intelligent automation.",
    icon: "bot"
  },
  {
    id: 7,
    title: "Graphic Design",
    description: "Stunning visual identities, brand assets, and marketing materials that captivate and convert your audience.",
    icon: "sparkles"
  },
  {
    id: 8,
    title: "AI / ML",
    description: "Machine learning models, AI-powered applications, and intelligent systems that transform data into actionable insights.",
    icon: "brain"
  }
];

const Services: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-aura-dark relative min-h-screen">
       <div className="absolute top-20 left-0 w-96 h-96 bg-aura-gold/5 rounded-full blur-3xl pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <span className="text-aura-gold uppercase tracking-widest text-sm mb-2 block">What We Do</span>
          <h2 className="font-serif text-3xl md:text-5xl text-aura-light mb-4">Our Expertise</h2>
          <div className="w-24 h-1 bg-aura-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 border border-aura-gold/20 hover:border-aura-gold/60 transition-colors duration-300 group bg-aura-glass backdrop-blur-sm flex flex-col h-full"
            >
              <div className="mb-6 text-aura-gold group-hover:scale-110 transition-transform duration-300">
                {service.icon === 'code' && <Code2 size={32} />}
                {service.icon === 'palette' && <Palette size={32} />}
                {service.icon === 'rocket' && <Rocket size={32} />}
                {service.icon === 'layers' && <Layers size={32} />}
                {service.icon === 'cpu' && <Cpu size={32} />}
                {service.icon === 'bot' && <Bot size={32} />}
                {service.icon === 'sparkles' && <Sparkles size={32} />}
                {service.icon === 'brain' && <BrainCircuit size={32} />}
              </div>
              <h3 className="text-xl font-medium text-aura-light mb-3">{service.title}</h3>
              <p className="text-aura-sand/70 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;