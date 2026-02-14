import React from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-bold text-white block mb-8" style={{ letterSpacing: '-0.02em' }}>
              KlickSpark<span className="text-blue-500 ml-1">Media</span>
            </a>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                extraordinary together.
              </span>
            </h2>
            <MagneticButton href="mailto:info@klicksparkmedia.com" variant="primary">
              Get in Touch
            </MagneticButton>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group cursor-pointer">
                <Mail className="w-5 h-5 mt-1 text-blue-500 group-hover:scale-110 transition-transform" />
                <span>info@klicksparkmedia.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group cursor-pointer">
                <Phone className="w-5 h-5 mt-1 text-blue-500 group-hover:scale-110 transition-transform" />
                <span>+1 (555) 000-1234</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group cursor-pointer">
                <MapPin className="w-5 h-5 mt-1 text-blue-500 group-hover:scale-110 transition-transform" />
                <span>
                  123 Innovation Drive,<br />
                  Tech District, CA 94043
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Social</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                  </div>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-400/20 transition-colors">
                    <Twitter className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  </div>
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gray-500/20 transition-colors">
                    <Github className="w-5 h-5 group-hover:text-gray-400 transition-colors" />
                  </div>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KlickSpark Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

