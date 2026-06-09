import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoWall } from "@/components/sections/LogoWall";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Industries } from "@/components/sections/Industries";
import { Insights } from "@/components/sections/Insights";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* Main content sits above the sticky footer */}
      <div className="relative z-10 bg-[#f8fafc]">
        <Header />
        <main>
           <Hero />
          <LogoWall /> 
          <FeaturedWork /> 
           <Industries /> 
          <Insights />
          <WhyUs />
          <FinalCTA />
        </main>
      </div>
      <Footer />
    </>
  );
}