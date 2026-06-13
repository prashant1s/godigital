// // "use client";

// // import { useRef, useEffect } from "react";
// // import { motion, Variants } from "framer-motion";
// // import { ArrowRight } from "lucide-react";
// // import { TransitionLink } from "@/components/layout/PageTransition";

// // const featuredProjects = [
// //   {
// //     id: "aruha",
// //     brand: "Aruha",
// //     industry: "E-Commerce",
// //     result: "₹0 to ₹2.5L+ Monthly Revenue",
// //     href: "/work/aruha",
// //     gradient: "from-blue-900 to-[#111827]",
// //   },
// //   {
// //     id: "lumina",
// //     brand: "Lumina Edge",
// //     industry: "Tech Startup",
// //     result: "300% Increase in Inbound Leads",
// //     href: "/work/lumina",
// //     gradient: "from-indigo-900 to-[#111827]",
// //   },
// //   {
// //     id: "aura",
// //     brand: "Aura Wellness",
// //     industry: "E-Commerce",
// //     result: "$2.4M ARR in 12 Months",
// //     href: "/work/aura",
// //     gradient: "from-slate-800 to-[#111827]",
// //   },
// // ];

// // const containerVariants: Variants = {
// //   hidden: {
// //     opacity: 0,
// //   },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.15,
// //     },
// //   },
// // };

// // const cardVariants: Variants = {
// //   hidden: {
// //     opacity: 0,
// //     y: 30,
// //   },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.6,
// //       ease: [0.22, 1, 0.36, 1],
// //     },
// //   },
// // };

// // function TiltCard({
// //   brand,
// //   industry,
// //   result,
// //   href,
// //   gradient,
// // }: {
// //   brand: string;
// //   industry: string;
// //   result: string;
// //   href: string;
// //   gradient: string;
// // }) {
// //   const cardRef = useRef<HTMLDivElement>(null);
// //   const frameRef = useRef<number | null>(null);

// //   useEffect(() => {
// //     return () => {
// //       if (frameRef.current) {
// //         cancelAnimationFrame(frameRef.current);
// //       }
// //     };
// //   }, []);

// //   const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
// //     if (!cardRef.current) return;

// //     const rect = cardRef.current.getBoundingClientRect();

// //     const mouseX = e.clientX - rect.left;
// //     const mouseY = e.clientY - rect.top;

// //     if (frameRef.current) {
// //       cancelAnimationFrame(frameRef.current);
// //     }

// //     frameRef.current = requestAnimationFrame(() => {
// //       if (!cardRef.current) return;

// //       const centerX = rect.width / 2;
// //       const centerY = rect.height / 2;

// //       const rotateX = ((mouseY - centerY) / centerY) * -6;
// //       const rotateY = ((mouseX - centerX) / centerX) * 6;

// //       cardRef.current.style.transform = `
// //         perspective(1000px)
// //         rotateX(${rotateX}deg)
// //         rotateY(${rotateY}deg)
// //         translateZ(0)
// //         scale3d(1.02,1.02,1.02)
// //       `;
// //     });
// //   };

// //   const handleLeave = () => {
// //     if (!cardRef.current) return;

// //     cardRef.current.style.transform = `
// //       perspective(1000px)
// //       rotateX(0deg)
// //       rotateY(0deg)
// //       translateZ(0)
// //       scale3d(1,1,1)
// //     `;
// //   };

// //   return (
// //     <motion.div
// //       variants={cardVariants}
// //       style={{
// //         willChange: "transform, opacity",
// //       }}
// //     >
// //       <TransitionLink href={href} className="block h-full w-full">
// //         <div
// //           ref={cardRef}
// //           onMouseMove={handleMove}
// //           onMouseLeave={handleLeave}
// //           style={{
// //             transition: "transform 0.15s ease-out",
// //             transformStyle: "preserve-3d",
// //             willChange: "transform",
// //           }}
// //           className="
// //             group
// //             relative
// //             flex
// //             h-full
// //             flex-col
// //             overflow-hidden
// //             rounded-3xl
// //             border
// //             border-[#1F2937]
// //             bg-[#111827]
// //             shadow-lg
// //             shadow-black/20
// //             transition-colors
// //             duration-300
// //             hover:border-[#6495ED]
// //             transform-gpu
// //           "
// //         >
// //           <div
// //             className={`h-48 w-full bg-gradient-to-br ${gradient} opacity-80`}
// //           />

// //           <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#6495ED]/20 via-transparent to-[#4F7DF3]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

// //           <div className="relative z-20 flex h-full flex-col p-8">
// //             <span className="mb-3 text-xs font-bold uppercase tracking-widest text-[#6495ED]">
// //               {industry}
// //             </span>

// //             <h3 className="mb-2 text-2xl font-bold text-white">
// //               {brand}
// //             </h3>

// //             <p className="mb-8 text-gray-400">
// //               {result}
// //             </p>

// //             <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-[#6495ED]">
// //               View Case Study

// //               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// //             </div>
// //           </div>
// //         </div>
// //       </TransitionLink>
// //     </motion.div>
// //   );
// // }

// // export function FeaturedWork() {
// //   return (
// //     <section className="relative bg-[#0A0A0A] px-6 py-24 md:py-32">
// //       <div className="mx-auto max-w-7xl">
// //         <motion.div
// //           initial={{
// //             opacity: 0,
// //             y: 20,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             y: 0,
// //           }}
// //           viewport={{
// //             once: true,
// //             amount: 0.3,
// //           }}
// //           transition={{
// //             duration: 0.7,
// //           }}
// //           className="mb-16 max-w-3xl md:mb-24"
// //         >
// //           <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
// //             Work That Drives <br />
// //             <span className="text-[#6495ED]">
// //               Business Growth.
// //             </span>
// //           </h2>

// //           <p className="mt-6 text-lg leading-relaxed text-gray-400 md:text-xl">
// //             We partner with ambitious brands to solve growth challenges through
// //             strategy, performance marketing, creative execution, and commerce
// //             systems.
// //           </p>
// //         </motion.div>

// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{
// //             once: true,
// //             amount: 0.15,
// //           }}
// //           className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
// //         >
// //           {featuredProjects.map((project) => (
// //             <TiltCard
// //               key={project.id}
// //               brand={project.brand}
// //               industry={project.industry}
// //               result={project.result}
// //               href={project.href}
// //               gradient={project.gradient}
// //             />
// //           ))}
// //         </motion.div>

// //         <motion.div
// //           initial={{
// //             opacity: 0,
// //             y: 20,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             y: 0,
// //           }}
// //           viewport={{
// //             once: true,
// //           }}
// //           transition={{
// //             duration: 0.6,
// //             delay: 0.2,
// //           }}
// //           className="mt-16 flex justify-center md:mt-20"
// //         >
// //           <TransitionLink
// //             href="/work"
// //             className="
// //               group
// //               flex
// //               items-center
// //               gap-2
// //               rounded-full
// //               border
// //               border-[#1F2937]
// //               px-8
// //               py-4
// //               text-sm
// //               font-semibold
// //               text-white
// //               transition-all
// //               hover:border-[#6495ED]
// //               hover:bg-[#6495ED]/10
// //             "
// //           >
// //             View All Work

// //             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// //           </TransitionLink>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion, Variants } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { TransitionLink } from "@/components/layout/PageTransition";

// const featuredProjects = [
//   {
//     id: "aruha",
//     brand: "Aruha",
//     industry: "E-Commerce",
//     href: "/work/aruha",
//     image: "", // Left empty
//   },
//   {
//     id: "lumina",
//     brand: "Lumina Edge",
//     industry: "Tech Startup",
//     href: "/work/lumina",
//     image: "", // Left empty
//   },
//   {
//     id: "aura",
//     brand: "Aura Wellness",
//     industry: "E-Commerce",
//     href: "/work/aura",
//     image: "", // Left empty
//   },
// ];

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export function FeaturedWork() {
//   return (
//     <section className="relative bg-[#0A0A0A] px-6 py-24 md:py-32">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
          
//           {/* LEFT COLUMN: Text & CTA */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7 }}
//             className="flex flex-col items-start lg:w-1/3 lg:shrink-0"
//           >
//             <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
//               Work That Drives <br />
//               <span className="text-[#6495ED]">Business Growth.</span>
//             </h2>

//             <p className="mt-6 text-base leading-relaxed text-gray-400 md:text-lg">
//               We partner with ambitious brands to solve growth challenges through
//               strategy, performance marketing, creative execution, and commerce
//               systems.
//             </p>
            
//             <TransitionLink
//               href="/work"
//               className="group mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:text-[#6495ED] md:text-sm"
//             >
//               View All Work
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </TransitionLink>
//           </motion.div>

//           {/* RIGHT COLUMN: 3 Cards Grid */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//             className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3 lg:grid-cols-3"
//           >
//             {featuredProjects.map((project) => (
//               <motion.div key={project.id} variants={itemVariants}>
//                 <TransitionLink href={project.href} className="group block h-full">
//                   {/* Image Container */}
//                   <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#111827]">
//                     {project.image ? (
//                       <Image
//                         src={project.image}
//                         alt={project.brand}
//                         fill
//                         className="object-cover transition-transform duration-700 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-slate-600 transition-transform duration-700 group-hover:scale-105">
//                         [ Image Placeholder ]
//                       </div>
//                     )}
//                     {/* Subtle overlay on hover */}
//                     <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
//                   </div>

//                   {/* Text Container */}
//                   <div className="mt-4 flex items-start justify-between">
//                     <div>
//                       <h3 className="text-base font-bold text-white transition-colors group-hover:text-[#6495ED]">
//                         {project.brand}
//                       </h3>
//                       <p className="mt-1 text-sm text-gray-400">
//                         {project.industry}
//                       </p>
//                     </div>
//                     <ArrowRight className="mt-1 h-4 w-4 text-gray-500 transition-all duration-300 group-hover:-rotate-45 group-hover:text-[#6495ED]" />
//                   </div>
//                 </TransitionLink>
//               </motion.div>
//             ))}
//           </motion.div>
          
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TransitionLink } from "@/components/layout/PageTransition";

const featuredProjects = [
  {
    id: "raymond",
    brand: "Raymond",
    industry: "Retail Footfall",
    result: "₹25L+ Revenue in 30 Days",
    href: "/work/raymond",
    image: "", // Left empty
  },
  {
    id: "sethi",
    brand: "Sethi Watch Co.",
    industry: "E-Commerce",
    result: "₹10L+ Monthly Revenue",
    href: "/work/sethi",
    image: "", // Left empty
  },
  {
    id: "titan",
    brand: "Titan Eye+",
    industry: "Retail Footfall",
    result: "₹10L+ Sales in a Single Day",
    href: "/work/titan",
    image: "", // Left empty
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function TiltCard({
  brand,
  industry,
  result,
  href,
  image,
}: {
  brand: string;
  industry: string;
  result: string;
  href: string;
  image: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((mouseY - centerY) / centerY) * -6;
      const rotateY = ((mouseX - centerX) / centerX) * 6;

      cardRef.current.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(0)
        scale3d(1.02,1.02,1.02)
      `;
    });
  };

  const handleLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
      scale3d(1,1,1)
    `;
  };

  return (
    <motion.div
      variants={cardVariants}
      style={{ willChange: "transform, opacity" }}
      className="h-full"
    >
      <TransitionLink href={href} className="block h-full w-full">
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{
            transition: "transform 0.15s ease-out",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          className="
            group
            relative
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-[#1F2937]
            bg-[#111827]
            shadow-lg
            shadow-black/20
            transition-colors
            duration-300
            hover:border-[#6495ED]
            transform-gpu
          "
        >
          {/* Image Section - Scaled down slightly to fit 3 in a row */}
          <div className="relative h-44 w-full overflow-hidden bg-gray-900 border-b border-[#1F2937]">
            {image ? (
              <Image
                src={image}
                alt={brand}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-slate-600 transition-transform duration-700 group-hover:scale-105">
                [ Image Placeholder ]
              </div>
            )}
          </div>

          {/* Glass Hover Effect */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#6495ED]/20 via-transparent to-[#4F7DF3]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Text Section */}
          <div className="relative z-20 flex flex-1 flex-col p-6">
            <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#6495ED]">
              {industry}
            </span>

            <h3 className="mb-1 text-lg font-bold text-white xl:text-xl">
              {brand}
            </h3>

            <p className="mb-6 text-sm text-gray-400">
              {result}
            </p>

            <div className="mt-auto flex items-center gap-2 text-xs font-semibold text-white transition-colors group-hover:text-[#6495ED] xl:text-sm">
              View Case Study
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </TransitionLink>
    </motion.div>
  );
}

export function FeaturedWork() {
  return (
    <section className="relative bg-[#0A0A0A] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          
          {/* LEFT COLUMN: Text & CTA (30% width) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start lg:w-[30%] lg:shrink-0"
          >
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-4xl xl:text-5xl">
              Work That Drives <br />
              <span className="text-[#6495ED]">Business Growth.</span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-gray-400 xl:text-base">
              We partner with ambitious brands to solve growth challenges through
              strategy, performance marketing, creative execution, and commerce
              systems.
            </p>
            
            <TransitionLink
              href="/work"
              className="group mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:text-[#6495ED]"
            >
              View All Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </TransitionLink>
          </motion.div>

          {/* RIGHT COLUMN: 3 Cards Grid (70% width, 3 columns) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:w-[70%] lg:grid-cols-3 xl:gap-6"
          >
            {featuredProjects.map((project) => (
              <TiltCard
                key={project.id}
                brand={project.brand}
                industry={project.industry}
                result={project.result}
                href={project.href}
                image={project.image}
              />
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}