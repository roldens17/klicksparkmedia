import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  );
}
