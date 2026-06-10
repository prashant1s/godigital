"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/layout/PageTransition";
import { ArrowLeft } from "lucide-react";

const projectsData: Record<string, any> = {
  aruha: {
    brand: "Aruha",
    heroPreTitle: "How We Helped Aruha Scale from ₹0 to ",
    heroHighlight: "₹2.5L+",
    heroPostTitle: " Monthly Revenue",
    description: "A performance-driven growth strategy combining Amazon optimization, Shopify migration, and Meta Ads to increase sales, improve customer experience, and build a scalable e-commerce ecosystem.",
    services: ["Amazon Marketplace", "Shopify Migration", "Meta Ads", "CRO"],
    stats: [
      { stat: "₹2.5L+", label: "Monthly Amazon Revenue" },
      { stat: "17x", label: "ROAS Achieved" },
      { stat: "60+", label: "Orders Per Day" },
      { stat: "WP → Shopify", label: "Store Migration" },
      { stat: "Faster", label: "Checkout Experience" },
      { stat: "Improved", label: "Conversion Rate" },
    ],
    challenges: [
      { title: "Limited Marketplace Growth", desc: "The brand had minimal traction on Amazon and lacked a structured marketplace strategy." },
      { title: "Slow Website Experience", desc: "The WordPress website suffered from slow loading speeds and a poor user journey." },
      { title: "Low Conversion Rates", desc: "Users were dropping off before completing purchases due to friction in the buying process." },
      { title: "Scaling Sales Efficiently", desc: "The brand needed a sustainable growth engine rather than relying on inconsistent sales." },
    ],
    strategies: [
      { title: "Amazon Optimization", desc: "Optimized product listings, marketplace visibility, and catalog structure to improve discoverability and conversions." },
      { title: "Shopify Migration", desc: "Migrated the website from WordPress to Shopify to create a faster, more reliable, and conversion-focused shopping experience." },
      { title: "Performance Marketing", desc: "Launched targeted Meta advertising campaigns focused on customer acquisition and revenue growth." },
      { title: "Conversion Optimization", desc: "Improved product presentation, user experience, and checkout flow to maximize conversions." },
    ],
    images: [
      { title: "Amazon Marketplace Growth", desc: "Enhanced listings, improved visibility, and built a stronger marketplace presence.", placeholder: "[ Amazon Listing Image ]" },
      { title: "Shopify Store Transformation", desc: "Created a faster, cleaner, and mobile-optimized storefront designed for conversions.", placeholder: "[ Shopify Storefront Image ]" },
    ],
    outcomes: [
      { title: "Revenue Growth", desc: "₹0 → ₹2.5L+ Monthly Revenue Generated Through Amazon" },
      { title: "Advertising Performance", desc: "17x ROAS Achieved Through Meta Ads" },
      { title: "Daily Orders", desc: "60+ Orders Generated Per Day" },
      { title: "Customer Experience", desc: "Faster Website, Better Checkout & Improved Conversion Journey" },
    ],
    learnings: [
      { title: "Marketplace Optimization Matters", desc: "Strong listings and better visibility can significantly impact sales performance." },
      { title: "Website Speed Influences Revenue", desc: "A faster and more seamless shopping experience improves conversions." },
      { title: "Paid Ads Scale Faster with Strong Foundations", desc: "Advertising performs best when paired with an optimized store experience." },
      { title: "Continuous Optimization Drives Growth", desc: "Testing, refining, and improving every stage of the funnel leads to sustainable results." },
    ],
    quote: "By combining marketplace growth, Shopify optimization, and performance marketing, Aruha transformed from a low-performing online store into a scalable e-commerce brand generating consistent revenue across channels.",
  },
  // Add 'lumina', 'aura', 'finova' here later as they get finished
};

// =========================================
// ANIMATION VARIANTS
// =========================================
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function DynamicProjectPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projectsData[id];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  // Graceful fallback if the project ID doesn't exist yet
  if (!project) {
    return (
      <>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] text-white">
          <h1 className="text-4xl font-bold">Case Study Not Found</h1>
          <p className="mt-4 text-gray-400">This project is currently being written or doesn't exist.</p>
          <TransitionLink href="/work" className="mt-8 flex items-center gap-2 text-[#6495ED] hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </TransitionLink>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* ========================================= */}
        {/* 1. HERO SECTION (DARK) */}
        {/* ========================================= */}
        <section className="relative flex flex-col justify-center bg-[#0A0A0A] px-6 pt-40 pb-32 md:pt-48 md:pb-40">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeUpVariant} className="mb-6 flex flex-wrap gap-3">
                {project.services.map((service: string) => (
                  <span key={service} className="rounded-full border border-[#6495ED] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#6495ED]">
                    {service}
                  </span>
                ))}
              </motion.div>
              
              <motion.h1 variants={fadeUpVariant} className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                {project.heroPreTitle}
                <span className="text-[#6495ED]">{project.heroHighlight}</span>
                {project.heroPostTitle}
              </motion.h1>
              
              <motion.p variants={fadeUpVariant} className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
                {project.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 2. RESULTS GRID (FLOATING OVERLAY) */}
        {/* ========================================= */}
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="-mt-20 relative z-10 grid grid-cols-2 gap-4 rounded-3xl bg-[#111827] p-6 shadow-2xl shadow-black/40 border border-white/5 md:grid-cols-3 md:gap-8 md:p-12"
          >
            {project.stats.map((result: any, i: number) => (
              <div key={i} className="flex flex-col border-l border-white/10 pl-4 md:pl-6">
                <span className="text-2xl font-bold text-[#6495ED] md:text-4xl">{result.stat}</span>
                <span className="mt-2 text-xs font-medium text-gray-400 md:text-sm">{result.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ========================================= */}
        {/* 3. CHALLENGE & STRATEGY (WHITE) */}
        {/* ========================================= */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            {/* Challenge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="mb-24 grid gap-12 md:grid-cols-12 md:gap-20"
            >
              <motion.div variants={fadeUpVariant} className="md:col-span-4">
                <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] md:text-5xl">The Challenge</h2>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="grid gap-8 md:col-span-8 md:grid-cols-2">
                {project.challenges.map((challenge: any, i: number) => (
                  <div key={i}>
                    <h3 className="text-xl font-bold text-[#0f172a]">{challenge.title}</h3>
                    <p className="mt-3 text-slate-600">{challenge.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Strategy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid gap-12 border-t border-slate-200 pt-24 md:grid-cols-12 md:gap-20"
            >
              <motion.div variants={fadeUpVariant} className="md:col-span-4">
                <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] md:text-5xl">Our Strategy</h2>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="grid gap-8 md:col-span-8 md:grid-cols-2">
                {project.strategies.map((strat: any, i: number) => (
                  <div key={i} className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                    <h3 className="text-xl font-bold text-[#0f172a]">{strat.title}</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">{strat.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 4. FEATURED IMAGES */}
        {/* ========================================= */}
        <section className="bg-slate-50 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">Featured Work</h2>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2">
              {project.images.map((img: any, i: number) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="aspect-video w-full rounded-3xl bg-slate-200 flex items-center justify-center border border-slate-300">
                    <span className="text-slate-400 font-medium">{img.placeholder}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a]">{img.title}</h4>
                    <p className="text-sm text-slate-500">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 5. OUTCOME & LEARNINGS */}
        {/* ========================================= */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid gap-16 md:grid-cols-2 md:gap-24"
            >
              {/* Outcomes */}
              <motion.div variants={fadeUpVariant}>
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">The Outcome</h2>
                <ul className="space-y-6">
                  {project.outcomes.map((item: any, i: number) => (
                    <li key={i} className="flex flex-col">
                      <span className="font-bold text-[#6495ED]">{item.title}</span>
                      <span className="text-slate-600 font-medium">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Learnings */}
              <motion.div variants={fadeUpVariant}>
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">Key Learnings</h2>
                <div className="space-y-8">
                  {project.learnings.map((learning: any, i: number) => (
                    <div key={i}>
                      <h4 className="font-bold text-[#0f172a]">{learning.title}</h4>
                      <p className="mt-1 text-slate-600">{learning.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 6. BOTTOM QUOTE (DARK) */}
        {/* ========================================= */}
        <section className="bg-[#0A0A0A] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <svg className="mx-auto mb-8 h-12 w-12 text-[#6495ED]/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <h2 className="text-2xl font-medium leading-relaxed text-white md:text-4xl md:leading-snug">
                "{project.quote}"
              </h2>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
