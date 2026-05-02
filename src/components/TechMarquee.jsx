// import { motion } from "framer-motion";

// const techIcons = [
//   { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
//   { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
//   { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
//   { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
//   { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
//   { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A24A" },
//   { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
//   { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
//   { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui/white" },
//   { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
//   { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio/white" },
//   { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
//   { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/6772E5" },
//   { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
//   { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" },
//   { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/white" },
//   { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
//   { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
//   { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
//   { name: "Render", icon: "https://cdn.simpleicons.org/render/white" },
//   { name: "Sass", icon: "https://cdn.simpleicons.org/sass/CC6699" },
// ];

// const TechMarquee = () => {
//   return (
//     <div className="w-full flex flex-col items-center relative overflow-hidden group">
//       <span className="text-[12px] tracking-[0.2em] text-zinc-600 uppercase font-bold mt-5 mb-3">
//         Technology i worked with
//       </span>
//       {/* Background Decorative Glow (Subtle) */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-amber-500/5 blur-[120px] pointer-events-none"></div>

//       <div className="relative w-full mt-4 max-w-7xl">
//         {/* Deep Gradient Overlays for that 'Screenshot 224' look */}
//         <div className="absolute left-0 top-0 w-48 h-full z-20 bg-linear-to-r from-[#0a0a0c] via-[#0a0a0c]/90 to-transparent pointer-events-none"></div>
//         <div className="absolute right-0 top-0 w-48 h-full z-20 bg-linear-to-l from-[#0a0a0c] via-[#0a0a0c]/90 to-transparent pointer-events-none"></div>

//         <div className="flex whitespace-nowrap overflow-hidden py-4">
//           {/* Main Loop */}
//           <motion.div
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
//             className="flex flex-none items-center gap-6"
//           >
//             {techIcons.map((tech, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-4 bg-zinc-900/50 backdrop-blur-xl border border-white/5 px-6 py-3 rounded-2xl hover:border-amber-500/50 hover:bg-zinc-800/80 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-500 group/item cursor-default"
//               >
//                 <img
//                   src={tech.icon}
//                   alt={tech.name}
//                   className="h-6 w-6 opacity-50 group-hover/item:opacity-100 transition-opacity duration-500"
//                 />
//                 <span
//                   className="text-zinc-400 group-hover/item:text-white text-sm font-medium tracking-wide"
//                   style={{ fontFamily: "JetBrains Mono, monospace" }}
//                 >
//                   {tech.name}
//                 </span>
//               </div>
//             ))}
//           </motion.div>

//           {/* Duplicate Loop */}
//           <motion.div
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
//             className="flex flex-none items-center gap-6"
//           >
//             {techIcons.map((tech, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-4 bg-zinc-900/50 backdrop-blur-xl border border-white/5 px-6 py-3 rounded-2xl hover:border-amber-500/50 hover:bg-zinc-800/80 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-500 group/item cursor-default"
//               >
//                 <img
//                   src={tech.icon}
//                   alt={tech.name}
//                   className="h-6 w-6 opacity-50 group-hover/item:opacity-100 transition-opacity duration-500"
//                 />
//                 <span
//                   className="text-zinc-400 group-hover/item:text-white text-sm font-medium tracking-wide"
//                   // style={{ fontFamily: "JetBrains Mono, monospace" }}
//                 >
//                   {tech.name}
//                 </span>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Subtle Bottom Scroll Indicator */}
//       <div className=" flex flex-col items-center gap-3">
//         {/* Subtle Divider */}
//         <div className="w-16 h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent"></div>

//         {/* Text */}
//         <span className="text-[9px] tracking-[0.3em] text-zinc-400 uppercase">
//           Scroll to discover
//         </span>

//         {/* Mouse Icon UI */}
//         <div className="w-5 h-7 border-2 border-zinc-500 rounded-full flex justify-center mb-5 ">
//           <motion.div
//             animate={{
//               y: [0, 12, 0],
//               opacity: [1, 0, 1],
//             }}
//             transition={{
//               duration: 5.2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="w-1 h-2 bg-amber-500 rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechMarquee;

import { motion } from "framer-motion";
import Testimonials from "./Testimonials";

const techIcons = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A24A" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui/white" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio/white" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/6772E5" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" },
  { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/white" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render/white" },
  { name: "Sass", icon: "https://cdn.simpleicons.org/sass/CC6699" },
];

const TechMarquee = () => {
  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden group">
      <span className="text-[12px] tracking-[0.3em] text-zinc-500 uppercase font-bold mt-5">
        Technical Arsenal
      </span>

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-amber-500/5 blur-[120px] pointer-events-none"></div>

      <div className="relative w-full mt-4 max-w-7xl">
        {/* Gradients for Side Blur */}
        <div className="absolute left-0 top-0 w-48 h-full z-20 bg-linear-to-r from-[#0a0a0c] via-[#0a0a0c]/90 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-48 h-full z-20 bg-linear-to-l from-[#0a0a0c] via-[#0a0a0c]/90 to-transparent pointer-events-none"></div>

        <div className="flex whitespace-nowrap overflow-hidden py-4">
          {/* Main Loop */}
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="flex flex-none items-center gap-6"
          >
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-zinc-900/50 backdrop-blur-xl border border-white/5 px-6 py-3 rounded-2xl hover:border-amber-500/50 hover:bg-zinc-800/80 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-500 group/item cursor-default"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-6 w-6 opacity-50 group-hover/item:opacity-100 transition-opacity duration-500"
                />
                <span className="text-zinc-400 group-hover/item:text-white text-sm font-medium tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Duplicate Loop - Isme pl-6 add kiya hai taaki gap khatam ho jaye */}
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="flex flex-none items-center gap-6 pl-6"
          >
            {techIcons.map((tech, index) => (
              <div
                key={`dup-${index}`}
                className="flex items-center gap-4 bg-zinc-900/50 backdrop-blur-xl border border-white/5 px-6 py-3 rounded-2xl hover:border-amber-500/50 hover:bg-zinc-800/80 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-500 group/item cursor-default"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-6 w-6 opacity-50 group-hover/item:opacity-100 transition-opacity duration-500"
                />
                <span className="text-zinc-400 group-hover/item:text-white text-sm font-medium tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mouse Section */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent"></div>
        <span className="text-[9px] tracking-[0.3em] text-zinc-400 uppercase">
          Scroll to discover
        </span>
        <div className="w-5 h-7 border-2 border-zinc-500 rounded-full flex justify-center mb-5 ">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-amber-500 rounded-full mt-1"
          />
        </div>
      </div>
      <div className="mt-5 w-full">
        <Testimonials />
      </div>
    </div>
  );
};

export default TechMarquee;
