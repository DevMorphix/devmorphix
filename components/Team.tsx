import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Award, Lightbulb, Code, Github } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Badhusha Shaji",
      bio: "Passionate about crafting exceptional digital experiences that blend creativity with technical excellence.",
      image: "../public/team/Badhusha.png",
      linkedin: "#",
      twitter: "#",
      email: "badhusha@devmorphix.com",
      github: "#"
    },
    {
      name: "Abhishek V Gopal",
      bio: "Dedicated to building scalable solutions and pushing the boundaries of modern web development.",
      image: "../public/team/abhishek.jpg",
      linkedin: "#",
      twitter: "#",
      email: "abhishek@devmorphix.com",
      github: "#"
    },
    {
      name: "Arjun A Acharry",
      bio: "Creating visually stunning designs and seamless user experiences that leave a lasting impact.",
      image: "../public/team/arjun.jpg",
      linkedin: "#",
      twitter: "#",
      email: "arjunacharry@devmorphix.com",
      behance: "#"
    },
    {
      name: "Arjun Krishna",
      bio: "Committed to delivering innovative solutions that transform ideas into powerful digital realities.",
      image: "../public/team/arjun-k.jpg",
      linkedin: "#",
      twitter: "#",
      email: "arjunkrishna@devmorphix.com",
      github: "#"
    },
    {
      name: "Nithin Daniel",
      bio: "Driven by excellence and innovation, turning complex challenges into elegant, functional solutions.",
      image: "../public/team/Nithin.png",
      linkedin: "#",
      twitter: "#",
      email: "nithin@devmorphix.com",
      github: "#"
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
            <span className="text-aura-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block">Our Team</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 text-aura-light">
              Meet the <br />
              <span className="text-aura-gold italic">Team</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-aura-sand/70">
              A collective of passionate creators, developers, and innovators united by excellence and a shared vision to transform the digital landscape.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-32">
          {teamMembers.map((member, i) => (
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
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-dark/95 via-aura-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex space-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a 
                      href={member.linkedin} 
                      className="text-aura-gold hover:text-white transition-colors p-2 border border-aura-gold/30 hover:border-white/50 rounded-sm"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="text-aura-gold hover:text-white transition-colors p-2 border border-aura-gold/30 hover:border-white/50 rounded-sm"
                      aria-label="X (Twitter)"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-aura-gold hover:text-white transition-colors p-2 border border-aura-gold/30 hover:border-white/50 rounded-sm"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                    {member.github && (
                      <a 
                        href={member.github} 
                        className="text-aura-gold hover:text-white transition-colors p-2 border border-aura-gold/30 hover:border-white/50 rounded-sm"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {member.behance && (
                      <a 
                        href={member.behance} 
                        className="text-aura-gold hover:text-white transition-colors p-2 border border-aura-gold/30 hover:border-white/50 rounded-sm"
                        aria-label="Behance"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.685-1.14-.442-.49-.78-1.08-1.005-1.77-.225-.7-.34-1.48-.34-2.36 0-.86.12-1.63.36-2.31.24-.68.58-1.26 1.02-1.74.44-.48.96-.85 1.57-1.1.61-.25 1.29-.38 2.03-.38.86 0 1.61.2 2.24.59.63.39 1.14.91 1.53 1.56.39.65.67 1.38.81 2.18.13.81.18 1.64.14 2.5h-7.69c.03.97.32 1.69.87 2.078zm-10.642-9.094H2.595v3.45h3.168c.4 0 .763-.05 1.093-.145.33-.095.6-.24.822-.38.224-.145.392-.33.5-.55.11-.222.166-.48.166-.776 0-.66-.22-1.12-.67-1.39-.448-.27-1.05-.41-1.78-.41zm13.607-2.365h-4.46v1.62h4.46v-1.62zM2.595 16.207h3.87c.93 0 1.66-.22 2.16-.66.51-.44.77-1.1.77-1.998 0-.48-.09-.89-.27-1.23-.18-.334-.42-.6-.71-.78-.29-.18-.63-.3-1.02-.37-.39-.07-.78-.1-1.16-.1H2.595v5.14z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                {/* Decorative Frame */}
                <div className="absolute inset-0 border border-aura-gold/10 m-4 pointer-events-none"></div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-3xl font-serif text-aura-light mb-4 group-hover:text-aura-gold transition-colors">
                  {member.name}
                </h3>
                <p className="text-aura-sand/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
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

export default Team;
