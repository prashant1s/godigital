// // "use client";

// // import { motion } from "framer-motion";
// // import { partners } from "@/lib/data";

// // export function LogoWall() {
// //   const marqueePartners = [...partners, ...partners];

// //   return (
// //     <motion.section
// //       initial={{ opacity: 0, y: 30 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, amount: 0.2 }}
// //       transition={{
// //         duration: 0.8,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //       className="section-padding overflow-hidden border-y border-slate-100 bg-white"
// //     >
// //       <div className="mx-auto max-w-7xl">
// //         <motion.p
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="mb-12 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
// //         >
// //           Our Partners
// //         </motion.p>

// //         <div className="relative overflow-hidden">
// //           <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
// //           <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

// //           <motion.div
// //             className="flex w-max items-center gap-16 px-8"
// //             animate={{
// //               x: ["0%", "-50%"],
// //             }}
// //             transition={{
// //               duration: 30,
// //               repeat: Infinity,
// //               ease: "linear",
// //             }}
// //             style={{
// //               willChange: "transform",
// //             }}
// //           >
// //             {marqueePartners.map((partner, i) => (
// //               <motion.div
// //                 key={`${partner}-${i}`}
// //                 className="flex shrink-0 items-center justify-center"
// //                 whileHover={{
// //                   scale: 1.05,
// //                   transition: {
// //                     duration: 0.2,
// //                   },
// //                 }}
// //               >
// //                 <span className="text-2xl font-bold tracking-tight text-slate-300 transition-colors duration-300 hover:text-brand md:text-3xl">
// //                   {partner}
// //                 </span>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </div>
// //     </motion.section>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { partners } from "@/lib/data";

// export function LogoWall() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="section-padding border-y border-slate-100 bg-white"
//     >
//       <div className="mx-auto max-w-7xl">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-12 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
//         >
//           Our Partners
//         </motion.p>

//         {/* Increased gap spacing for larger logos */}
//         <div className="flex flex-wrap items-center justify-center gap-12 px-8 md:gap-24 lg:gap-32">
//           {partners.map((partner, i) => (
//             <div
//               key={`${partner.name}-${i}`}
//               className="flex shrink-0 items-center justify-center"
//             >
//               <Image
//                 src={partner.logo}
//                 alt={partner.name}
//                 // 1. Increased base resolution to prevent blurriness at larger sizes
//                 width={400} 
//                 height={160}
//                 quality={100}
//                 // 2. Bumped heights: h-20 (mobile), h-28 (tablet), h-32 (desktop)
//                 className="h-20 w-auto object-contain md:h-28 lg:h-32" 
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/lib/data";

export function LogoWall() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="section-padding border-y border-slate-100 bg-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
        >
          Our Partners
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-12 px-8 md:gap-24 lg:gap-32">
          {partners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex shrink-0 items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                // Increased base resolution again to maintain maximum crispness
                width={500} 
                height={200}
                quality={100}
                // Bumped up the rendering heights: h-24 (mobile), h-32 (tablet), h-40 (desktop)
                className="h-24 w-auto object-contain md:h-32 lg:h-40" 
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}