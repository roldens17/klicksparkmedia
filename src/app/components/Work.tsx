import React from "react";
import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Neon FinTech",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW4lMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3MDg5OTExOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "Financial Data"],
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    title: "Lumina Interiors",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1763833294545-e38e4fab1961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwY3JlYXRpdmUlMjBzdHVkaW98ZW58MXx8fHwxNzcwOTUwODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Shopify", "Liquid", "3D Configurator"],
    gradient: "from-purple-600/20 to-pink-600/20"
  },
  {
    title: "Apex Media",
    category: "Corporate Website",
    image: "https://images.unsplash.com/photo-1758873271824-a3216c80d1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwYWdlbmN5JTIwb2ZmaWNlJTIwY3JlYXRpdmUlMjB0ZWFtfGVufDF8fHx8MTc3MDk1MDg0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["WordPress", "Headless", "Motion Design"],
    gradient: "from-pink-600/20 to-orange-600/20"
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">Selected Work</span>
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Featured Projects
            </h2>
          </div>
          <motion.a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-white group mt-6 md:mt-0"
            whileHover={{ x: 5 }}
          >
            <span className="border-b border-white group-hover:border-blue-400 group-hover:text-blue-400 transition-colors pb-1">
              View All Projects
            </span>
            <ArrowRight className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6 border border-white/10">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay`} />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Hover icon */}
                <motion.div
                  className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 z-20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.category}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 border border-white/20 rounded-full text-gray-300 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-white group">
            <span className="border-b border-white group-hover:border-blue-400 group-hover:text-blue-400 transition-colors pb-1">
              View All Projects
            </span>
            <ArrowRight className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
