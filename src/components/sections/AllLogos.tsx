// // "use client";

// // import Image from "next/image";
// // import { motion, Variants } from "framer-motion";
// // import { partnersList } from "@/lib/data"; // Correctly importing the 20 partners from data.ts

// // const containerVariants: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.05, // Fast stagger for a smooth waterfall effect
// //     },
// //   },
// // };

// // const itemVariants: Variants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
// //   },
// // };

// // export function AllLogos() {
// //   return (
// //     <section className="border-y border-gray-100 bg-white py-20 md:py-32">
// //       <div className="mx-auto max-w-7xl px-6 md:px-8">
        
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.2 }}
// //           transition={{ duration: 0.6 }}
// //           className="mb-16 text-center"
// //         >
// //           <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] md:text-4xl">
// //             Trusted by Ambitious Brands.
// //           </h2>
// //           <p className="mt-4 text-base text-gray-500">
// //             Driving growth and digital transformation for industry leaders.
// //           </p>
// //         </motion.div>

// //         {/* 20 Logos Flex Grid */}
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.1 }}
// //           className="flex flex-wrap items-center justify-center gap-x-12 gap-y-16 md:gap-x-16 lg:gap-x-20"
// //         >
// //           {partnersList.map((partner) => (
// //             <motion.div
// //               key={partner.id}
// //               variants={itemVariants}
// //               className="group flex w-28 shrink-0 items-center justify-center sm:w-32 md:w-40"
// //             >
// //               {partner.logo ? (
// //                 <div className="relative h-16 w-full md:h-20">
// //                   <Image
// //                     src={partner.logo}
// //                     alt={partner.name}
// //                     fill
// //                     className="object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
// //                   />
// //                 </div>
// //               ) : (
// //                 // Clean fallback placeholder
// //                 <div className="flex h-16 w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-2 text-center text-xs font-semibold text-gray-400 transition-colors duration-300 group-hover:border-[#6495ED]/30 group-hover:text-[#6495ED]">
// //                 </div>
// //               )}
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }




// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { partnersList } from "@/lib/data"; 

// export function AllLogos() {
//   // Split the 20 logos into two rows of 10
//   const half = Math.ceil(partnersList.length / 2);
//   const topRow = partnersList.slice(0, half);
//   const bottomRow = partnersList.slice(half);

//   return (
//     <section className="border-y border-gray-100 bg-white py-20 md:py-32 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6 md:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] md:text-4xl">
//             Trusted by Ambitious Brands.
//           </h2>
//           <p className="mt-4 text-base text-gray-500">
//             Driving growth and digital transformation for industry leaders.
//           </p>
//         </motion.div>
//       </div>

//       {/* Marquee Wrapper with Faded Edges (CSS Mask) */}
//       <div
//         className="relative mx-auto w-full max-w-[100vw] overflow-hidden"
//         style={{
//           WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
//           maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
//         }}
//       >
//         <div className="flex flex-col gap-10 md:gap-14">
          
//           {/* Row 1 - Moving Left */}
//           <motion.div
//             className="flex w-max"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
//           >
//             {[...topRow, ...topRow].map((partner, idx) => (
//               <div
//                 key={`top-${partner.id}-${idx}`}
//                 // REDUCED SPACING: Changed px-8 to px-4, and adjusted widths down to keep logo size the same
//                 className="group flex shrink-0 items-center justify-center px-4 sm:px-6 md:px-8 w-40 sm:w-48 md:w-56"
//               >
//                 {partner.logo ? (
//                   <div className="relative h-16 w-full md:h-20">
//                     <Image
//                       src={partner.logo}
//                       alt={partner.name}
//                       fill
//                       className="object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
//                     />
//                   </div>
//                 ) : (
//                   <div className="flex h-16 w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-2 text-center text-xs font-semibold text-gray-400">
//                     {partner.name}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </motion.div>

//           {/* Row 2 - Moving Right */}
//           <motion.div
//             className="flex w-max"
//             animate={{ x: ["-50%", "0%"] }}
//             transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
//           >
//             {[...bottomRow, ...bottomRow].map((partner, idx) => (
//               <div
//                 key={`bottom-${partner.id}-${idx}`}
//                 // REDUCED SPACING: Applied the same tighter padding and width here
//                 className="group flex shrink-0 items-center justify-center px-4 sm:px-6 md:px-8 w-40 sm:w-48 md:w-56"
//               >
//                 {partner.logo ? (
//                   <div className="relative h-16 w-full md:h-20">
//                     <Image
//                       src={partner.logo}
//                       alt={partner.name}
//                       fill
//                       className="object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
//                     />
//                   </div>
//                 ) : (
//                   <div className="flex h-16 w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-2 text-center text-xs font-semibold text-gray-400">
//                     {partner.name}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partnersList } from "@/lib/data"; 

// Define the shape of the data coming from Sanity
type SanityPartner = {
  _id: string;
  name: string;
  logoUrl: string;
};

export function AllLogos({ sanityLogos = [] }: { sanityLogos?: SanityPartner[] }) {
  // 1. Format Sanity logos to match your hardcoded list structure
  const formattedSanityLogos = sanityLogos.map((logo) => ({
    id: logo._id,
    name: logo.name,
    logo: logo.logoUrl, // Using the resolved URL from Sanity CDN
  }));

  // 2. Merge the hardcoded list with the new Sanity list
  const combinedLogos = [...partnersList, ...formattedSanityLogos];

  // 3. Split the COMBINED list into two rows
  const half = Math.ceil(combinedLogos.length / 2);
  const topRow = combinedLogos.slice(0, half);
  const bottomRow = combinedLogos.slice(half);

  return (
    <section className="border-y border-gray-100 bg-white py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] md:text-4xl">
            Trusted by Ambitious Brands.
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Driving growth and digital transformation for industry leaders.
          </p>
        </motion.div>
      </div>

      {/* Marquee Wrapper */}
      <div
        className="relative mx-auto w-full max-w-[100vw] overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="flex flex-col gap-10 md:gap-14">
          
          {/* Row 1 - Moving Left */}
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...topRow, ...topRow].map((partner, idx) => (
              <div
                key={`top-${partner.id}-${idx}`}
                className="group flex shrink-0 items-center justify-center px-4 sm:px-6 md:px-8 w-40 sm:w-48 md:w-56"
              >
                {partner.logo ? (
                  <div className="relative h-16 w-full md:h-20">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-2 text-center text-xs font-semibold text-gray-400">
                    {partner.name}
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Row 2 - Moving Right */}
          <motion.div
            className="flex w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...bottomRow, ...bottomRow].map((partner, idx) => (
              <div
                key={`bottom-${partner.id}-${idx}`}
                className="group flex shrink-0 items-center justify-center px-4 sm:px-6 md:px-8 w-40 sm:w-48 md:w-56"
              >
                {partner.logo ? (
                  <div className="relative h-16 w-full md:h-20">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-2 text-center text-xs font-semibold text-gray-400">
                    {partner.name}
                  </div>
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}