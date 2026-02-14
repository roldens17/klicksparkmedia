import React from "react";
import NextImage from "next/image";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      {/* Background Orbs - static for performance */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Not just code.<br />
            Business solutions.
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            We don't just build websites; we build digital products that serve a purpose.
            Every line of code, every pixel, and every interaction is designed with your
            business goals in mind.
          </p>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Whether it's a high-performance Shopify store or a complex SaaS dashboard,
            we prioritize speed, scalability, and user experience above all else.
          </p>

          <div className="space-y-4">
            {[
              "Performance-First Architecture",
              "Scalable Codebase",
              "SEO Optimized Structure",
              "Data-Driven Design"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="font-medium text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
          whileHover={{ scale: 1.02, rotate: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-2xl transform rotate-3 scale-105 blur-2xl" />
          <div className="relative rounded-2xl w-full aspect-[4/3] shadow-2xl border border-white/10 overflow-hidden">
            <NextImage
              src="/images/about-hero.jpg"
              alt="Abstract Digital Form"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
