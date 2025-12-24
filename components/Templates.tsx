import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag } from 'lucide-react';
import { Template } from '../types';

const templates: Template[] = [
  {
    id: 1,
    title: "Agency Pro",
    price: "$89",
    features: ["Next.js 14", "Framer Motion", "CMS Integrated", "Dark/Light Mode"],
    imageUrl: "https://picsum.photos/400/500?random=5"
  },
  {
    id: 2,
    title: "Minimal Blog",
    price: "$49",
    features: ["MDX Support", "SEO Optimized", "Newsletter Form", "Fast Loading"],
    imageUrl: "https://picsum.photos/400/500?random=6"
  },
  {
    id: 3,
    title: "SaaS Lander",
    price: "$129",
    features: ["Stripe Integration", "Auth UI", "Dashboard Layout", "TypeScript"],
    imageUrl: "https://picsum.photos/400/500?random=7"
  }
];

const Templates: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-aura-dark relative overflow-hidden min-h-screen">
      {/* Decorative circle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-aura-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-aura-gold uppercase tracking-widest text-sm mb-2 block">Premium Resources</span>
          <h2 className="font-serif text-3xl md:text-5xl text-aura-light mb-4">Crafted Templates</h2>
          <p className="text-aura-sand/60 max-w-2xl mx-auto">
            Jumpstart your next project with our meticulously engineered templates.
            Code quality guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-aura-glass border border-white/5 hover:border-aura-gold/30 transition-all duration-300 p-6 flex flex-col"
            >
              <div className="h-48 bg-aura-surface mb-6 overflow-hidden relative">
                <img 
                  src={template.imageUrl} 
                  alt={template.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
                />
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-serif text-aura-light">{template.title}</h3>
                <span className="text-aura-gold font-bold text-lg">{template.price}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {template.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-aura-sand/80">
                    <Check className="w-4 h-4 text-aura-gold mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-aura-surface border border-aura-gold/20 text-aura-light uppercase tracking-widest text-xs font-bold hover:bg-aura-gold hover:text-aura-dark transition-colors flex items-center justify-center gap-2 group-hover:border-aura-gold">
                <ShoppingBag size={16} /> Purchase License
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;