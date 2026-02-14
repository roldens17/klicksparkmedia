import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-black/80 backdrop-blur-xl py-4 shadow-2xl shadow-blue-500/10 border-b border-white/5"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold text-white z-50"
            style={{ letterSpacing: '-0.02em' }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            KlickSpark<span className="text-blue-500 ml-1">Media</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Work", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide font-medium group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <motion.a
              href="#contact"
              className="px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all text-sm shadow-lg hover:shadow-xl hover:shadow-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {["Work", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white text-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-block text-center w-full py-3 bg-white text-black font-bold rounded-lg mt-4 hover:bg-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
