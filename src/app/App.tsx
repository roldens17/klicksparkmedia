import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

function SectionSkeleton() {
  return (
    <div className="min-h-[50vh] bg-black/50 animate-pulse" />
  );
}

const Services = dynamic(
  () => import("./components/Services").then((mod) => mod.Services),
  { loading: () => <SectionSkeleton /> }
);
const About = dynamic(
  () => import("./components/About").then((mod) => mod.About),
  { loading: () => <SectionSkeleton /> }
);
const Work = dynamic(
  () => import("./components/Work").then((mod) => mod.Work),
  { loading: () => <SectionSkeleton /> }
);
const Footer = dynamic(
  () => import("./components/Footer").then((mod) => mod.Footer),
  { loading: () => <SectionSkeleton /> }
);

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
