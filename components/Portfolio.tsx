import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    title: "Inovus Labs IEDC",
    category: "Community Platform",
    imageUrl: "/Gemini_Generated_Image_bqht1sbqht1sbqht.png",
    description:
      "Official website and member portal for Inovus Labs Innovation and Entrepreneurship Development Cell.",
    year: 2024,
  },
  {
    id: 2,
    title: "GigWork",
    category: "Service Directory",
    imageUrl: "/gigwork.png",
    description:
      "The ultimate online business directory accessible through WhatsApp. We are dedicated to connecting local businesses with customers in the most efficient way possible.",
    year: 2024,
  },
  {
    id: 3,
    title: "Chilamboli Event Platform ",
    category: "Event Management",
    imageUrl: "/chilamboli.png",
    description: "The official digital platform for the State-Level Special School Youth Festival. From registrations to results — everything managed in one powerful system.",
    year: 2025,
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-aura-surface text-aura-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-aura-gold uppercase tracking-widest text-sm mb-2 block">
              Selected Works
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">
              Featured Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-video">
                <div className="absolute inset-0 bg-aura-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="px-6 py-3 bg-aura-gold text-aura-dark uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                      View Webpage <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-1 group-hover:text-aura-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-aura-sand/60 text-sm uppercase tracking-wider mb-3">
                    {project.category}
                  </p>
                </div>
                <span className="text-aura-dark bg-aura-sand/20 px-3 py-1 text-xs rounded-full text-aura-sand">
                  {project.year}
                </span>
              </div>
              <p className="text-aura-light/70 text-sm max-w-md line-clamp-2">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
