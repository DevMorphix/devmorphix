import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Award, Lightbulb, Code } from 'lucide-react';

const Founders: React.FC = () => {
  const founders = [
    {
      name: "Alexander Voss",
      role: "Co-Founder & Creative Director",
      bio: "With over 15 years in digital design, Alexander has shaped identities for global luxury brands. He ensures every DevMorphix project meets our exacting aesthetic standards.",
      image: "../../public/team/badhusha.jpg",
      expertise: ["Brand Strategy", "UI/UX Design", "Creative Direction"],
      linkedin: "#",
      twitter: "#",
      email: "alexander@devmorphix.com"
    },
    {
      name: "Elena Sterling",
      role: "Co-Founder & Lead Architect",
      bio: "A former Principal Engineer at Silicon Valley tech giants, Elena brings enterprise-grade stability and performance optimization to the creative web.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
      expertise: ["System Architecture", "Performance Optimization", "AI Integration"],
      linkedin: "#",
      twitter: "#",
      email: "elena@devmorphix.com"
    },
    {
      name: "Marcus Chen",
      role: "Co-Founder & Technology Strategist",
      bio: "Former CTO at multiple successful startups, Marcus specializes in scaling digital products and implementing cutting-edge AI solutions that drive business growth.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
      expertise: ["Tech Strategy", "AI/ML", "Scalable Systems"],
      linkedin: "#",
      twitter: "#",
      email: "marcus@devmorphix.com"
    },
    {
      name: "Sophia Martinez",
      role: "Co-Founder & Head of Product",
      bio: "With a track record of launching award-winning digital products, Sophia ensures that every DevMorphix solution delivers exceptional user experiences and measurable business value.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop",
      expertise: ["Product Strategy", "User Research", "Growth Hacking"],
      linkedin: "#",
      twitter: "#",
      email: "sophia@devmorphix.com"
    },
    {
      name: "David Kumar",
      role: "Co-Founder & Operations Director",
      bio: "An operations virtuoso with deep expertise in agile methodologies and team management, David ensures seamless project delivery and client satisfaction at every touchpoint.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
      expertise: ["Agile Management", "Client Relations", "Process Optimization"],
      linkedin: "#",
      twitter: "#",
      email: "david@devmorphix.com"
    }
  ];

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We don't settle for good enough. Every project is a masterpiece in the making."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and creative thinking."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Craftsmanship",
      description: "Attention to detail in every line of code and every pixel placed."
    }
  ];

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden transition-colors duration-300 bg-aura-dark">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-aura-gold/5"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none bg-aura-gold/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-aura-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block">Leadership</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 text-aura-light">
              Meet the <br />
              <span className="text-aura-gold italic">Visionaries</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-aura-sand/70">
              The creative minds and technical architects behind DevMorphix. United by a passion for excellence and a vision to transform the digital landscape.
            </p>
          </motion.div>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-32">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-aura-surface">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-dark/95 via-aura-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex space-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a 
                      href={founder.linkedin} 
                      className="text-aura-gold hover:text-white transition-colors p-2 border border-aura-gold/30 hover:border-white/50 rounded-sm"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={founder.twitter} 
                      className="text-aura-gold hover:text-white transition-colors p-2 border border-aura-gold/30 hover:border-white/50 rounded-sm"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href={`mailto:${founder.email}`} 
                      className="text-aura-gold hover:text-white transition-colors p-2 border border-aura-gold/30 hover:border-white/50 rounded-sm"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                {/* Decorative Frame */}
                <div className="absolute inset-0 border border-aura-gold/10 m-4 pointer-events-none"></div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-3xl font-serif text-aura-light mb-2 group-hover:text-aura-gold transition-colors">
                  {founder.name}
                </h3>
                <p className="text-aura-gold text-xs uppercase tracking-[0.2em] mb-6 font-medium">
                  {founder.role}
                </p>
                <p className="text-aura-sand/70 text-sm leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {founder.expertise.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs uppercase tracking-wider px-3 py-1 border border-aura-gold/20 text-aura-sand/60 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="border-t border-white/5 pt-24">
          <div className="text-center mb-16">
            <span className="text-aura-gold uppercase tracking-widest text-sm mb-2 block">Our Values</span>
            <h2 className="font-serif text-3xl md:text-5xl text-aura-light">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-aura-gold/20 text-aura-gold mb-6 group-hover:bg-aura-gold/10 group-hover:border-aura-gold/40 transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif text-aura-light mb-3">{value.title}</h3>
                <p className="text-aura-sand/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <div className="border-y border-white/5 py-16">
            <p className="font-serif text-2xl md:text-3xl text-aura-light leading-relaxed mb-6 italic">
              "We envision a digital world where every interaction is meaningful, every design is purposeful, and every line of code contributes to something extraordinary."
            </p>
            <p className="text-aura-gold text-sm uppercase tracking-widest">
              The DevMorphix Promise
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Founders;
