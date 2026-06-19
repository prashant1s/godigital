import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoWall } from "@/components/sections/LogoWall";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Industries } from "@/components/sections/Industries";
import { Insights } from "@/components/sections/Insights";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { AllLogos } from "@/components/sections/AllLogos";

// 1. IMPORT YOUR SANITY CLIENT
import { client } from "@/sanity/lib/client";

// 2. SET REVALIDATION TIME (Updates the page every 60 seconds if a new logo is added)
export const revalidate = 60; 

// 3. MAKE THE PAGE ASYNC
export default async function HomePage() {
  
  // 4. FETCH THE DATA FROM SANITY
  const query = `*[_type == "partner"]{
    _id,
    name,
    "logoUrl": logo.asset->url
  }`;
  
  const sanityLogos = await client.fetch(query);

  return (
    <>
      {/* Main content sits above the sticky footer */}
      <div className="relative z-10 bg-[#f8fafc]">
        <Header />
        <main>
          <Hero />
          <FeaturedWork /> 
          <GlobalPresence />
          <LogoWall /> 
          <Industries /> 
          
          {/* 5. PASS THE SANITY LOGOS INTO THE COMPONENT */}
          <AllLogos sanityLogos={sanityLogos} />
          
          <Insights />
          <WhyUs />
          <FinalCTA />
        </main>
      </div>
      <Footer />
    </>
  );
}