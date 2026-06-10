"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturedWork } from "@/components/sections/FeaturedWork";

export default function WorkPage() {
  
  // Force the page to start at the absolute top whenever it loads, 
  // bypassing any retained scroll memory from the previous page.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-[#0A0A0A] pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 pb-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6495ED]">
              Our Portfolio
            </p>
            {/* Swapped to leading-tight to give the text descenders (like the bottom of the 'p' and 'g') room to breathe */}
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Case studies and campaigns that moved the needle.
            </h1>
          </motion.div>
        </div>
        
        {/* Removed the -mt-16 class that was pulling the background up and slicing the text in half */}
        <div className="relative z-10 w-full">
          <FeaturedWork />
        </div>
      </main>

      <Footer />
    </>
  );
}
