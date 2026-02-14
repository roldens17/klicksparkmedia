import React, { useState } from "react";
import { motion } from "motion/react";
import { ShoppingBag, Globe, Server, Gauge, Smartphone, Code } from "lucide-react";

const services = [
  {
    icon: <ShoppingBag className="w-8 h-8 text-blue-400" />,
    title: "Shopify Development",
    description: "Custom themes and apps that drive conversions. We build scalable e-commerce experiences tailored to your brand.",
    color: "blue"
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    title: "WordPress Systems",
    description: "Robust, secure, and easy-to-manage content management systems built for performance and SEO.",
    color: "purple"
  },
  {
    icon: <Server className="w-8 h-8 text-pink-400" />,
    title: "SaaS Tools",
    description: "Full-stack web applications designed to solve complex business problems with intuitive user interfaces.",
    color: "pink"
  },
  {
    icon: <Gauge className="w-8 h-8 text-green-400" />,
    title: "Performance Optimization",
    description: "Speed matters. We optimize every line of code to ensure lightning-fast load times and smooth interactions.",
    color: "green"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
    title: "Mobile-First Design",
    description: "Responsive layouts that look and function perfectly on any device, from large desktops to smartphones.",
    color: "yellow"
  },
  {
    icon: <Code className="w-8 h-8 text-cyan-400" />,
    title: "Custom Integrations",
    description: "Seamlessly connect your digital ecosystem with API integrations and custom middleware solutions.",
    color: "cyan"
  }
];

const colorMap: Record<string, string> = {
  blue: "from-blue-600/20 to-blue-600/0",
  purple: "from-purple-600/20 to-purple-600/0",
  pink: "from-pink-600/20 to-pink-600/0",
  green: "from-green-600/20 to-green-600/0",
  yellow: "from-yellow-600/20 to-yellow-600/0",
  cyan: "from-cyan-600/20 to-cyan-600/0",
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Our Capabilities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We combine technical expertise with creative vision to deliver digital products that stand out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm group overflow-hidden"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${(mousePosition.y - 150) / 30}deg) rotateY(${(mousePosition.x - 150) / 30}deg) scale(1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Gradient overlay that follows cursor */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />

      {/* Colored gradient accent */}
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorMap[service.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Icon container with enhanced styling */}
      <motion.div
        className="relative mb-6 p-4 bg-white/5 rounded-xl inline-block border border-white/5"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {service.icon}

        {/* Icon glow effect */}
        <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
          style={{ background: `radial-gradient(circle, ${service.color === 'blue' ? '#3b82f6' : service.color === 'purple' ? '#a855f7' : service.color === 'pink' ? '#ec4899' : service.color === 'green' ? '#22c55e' : service.color === 'yellow' ? '#eab308' : '#06b6d4'}40, transparent)` }}
        />
      </motion.div>

      <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
      <p className="text-gray-400 leading-relaxed relative z-10">
        {service.description}
      </p>

      {/* Bottom shine effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

