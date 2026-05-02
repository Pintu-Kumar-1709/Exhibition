import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import aman2Img from "./testimonial-image/aman2.jpg";
import umeshImg from "./testimonial-image/umesh.jpg";
import sunilImg from "./testimonial-image/sunil.jpg";
import amarImg from "./testimonial-image/amar.jpg";
import rajImg from "./testimonial-image/raj.jpg";
import yugeshImg from "./testimonial-image/yugesh.jpg";
import amanImg from "./testimonial-image/aman.jpg";
import sanjayImg from "./testimonial-image/sanjay.jpg";
import prajwalImg from "./testimonial-image/prajwal.jpg";

const testimonials = [
  {
    name: "Raaj Singh Patel",
    role: "Full Stack Developer",
    content:
      "Kumar is exceptionally strong in Full Stack Development. Not only is he an expert in the MERN stack, but his command over Next.js and complex backend architecture is truly impressive.",
    image: rajImg,
    social: {
      linkedin: "https://linkedin.com/in/raj-singh-patel-5a5746231",
      github: "https://github.com/Rajsingh2005-coder",
    },
  },
  {
    name: "Aman Kumar Singh",
    role: "Java Developer",
    content:
      "Collaborating with Kumar on RadiAntiX was a great experience. His mastery over the MERN stack and Next.js is top-tier, and his ability to architect secure JWT systems made our development process incredibly smooth.",
    image: amanImg,
    social: {
      linkedin: "https://www.linkedin.com/in/aman-kumar-singh-9a90232b7",
      github: "https://github.com/imamankrsingh",
    },
  },
  {
    name: "Yugesh Kumar",
    role: "SDE at Endurance",
    content:
      "I've witnessed Kumar's remarkable journey from mastering the basics to engineering complex, scalable systems. His expertise in Next.js and the MERN stack, combined with a 'clean code' philosophy, makes him an outstanding developer.",
    image: yugeshImg,
    social: {
      insta: "https://www.instagram.com/jugesh6044?igsh=Z2hqenA4dXFjd29x",
      fb: "https://www.facebook.com/profile.php?id=100063529667303",
    },
  },
  {
    name: "Sunil Kumar Patel",
    role: "Frontend Developer",
    content:
      "Kumar has a rare talent for blending aesthetic elegance with technical precision. His mastery over micro-interactions in Framer Motion and his clean Tailwind CSS architecture don't just build interfaces—they tell a visual story that keeps users engaged.",
    image: sunilImg,
    social: {
      linkedin: "https://www.linkedin.com/in/sunil4556",
      github: "https://github.com/Sunilkr2004",
    },
  },
  {
    name: "Amar Kumar Barnwal",
    role: "Frontend Developer",
    content:
      "Kumar is a rare find for any startup. His work on ZestCo's real-time infrastructure was flawless. He doesn't just write backend code; he builds scalable, production-ready solutions that handle real-world complexity with ease.",
    image: amarImg,
    social: {
      linkedin: "https://www.linkedin.com/in/amar-kumarofficial/",
      github: "https://github.com/AmarBarnwal",
    },
  },
  {
    name: "Sanjay Kumar Patel",
    role: "M.Sc student at B.U.",
    content:
      "Pintu's growth trajectory is truly inspiring. His rapid evolution from a beginner to mastering cutting-edge tools like Docker and Next.js 15 is a testament to his sharp intellect and relentless drive to stay ahead in the tech industry.",
    image: sanjayImg,
    social: {
      insta:
        "https://www.instagram.com/sanjaymahto_official?igsh=czNkb2gxbHVrMXRy",
      fb: "https://www.facebook.com/profile.php?id=61579826465028",
    },
  },
  {
    name: "Umesh Kumar Mahto",
    role: "Full Stack Engineer",
    content:
      "Pintu's work on RadiAntiX and ZestCo is a masterclass in modern full-stack engineering. His expertise in managing global state with Redux and building high-performance, SEO-optimized systems in Next.js is phenomenal. Combining React 19 with a robust Node.js backend, he's not just a coder, but a true system architect.",
    image: umeshImg,
    social: {
      linkedin: "https://www.linkedin.com/in/umesh-kumar-mahto",
      github: "https://github.com/Umeshku1305",
    },
  },
  {
    name: "Prajwal Kumar Singh",
    role: "SDE at Kodnest",
    content:
      "Pintu is a powerhouse of technical logic and execution. He didn't just help me build my website; he architected the entire core logic and handled the complex deployment process seamlessly. His ability to bridge the gap between a raw idea and a high-performance live production site is truly world-class.",
    image: prajwalImg,
    social: {
      linkedin: "https://www.linkedin.com/in/prajwalsingh20",
      github: "https://github.com/Prajwalsingh0",
    },
  },
  {
    name: "Aman Kumar Barnwal",
    role: "Frontend Developer",
    content:
      "Collaborating with Pintu on the RadiAntiX project was a masterclass in clean architecture. His ability to simplify complex logic into modular components and his deep understanding of full-stack system design is truly impressive. He's a developer who prioritizes both performance and code quality.",
    image: aman2Img,
    social: {
      linkedin: "https://www.linkedin.com/in/aman-kumar-barnwal01/",
      github: "https://github.com/MeAman01",
    },
  },
];

const TestimonialCard = ({ item }) => (
  <div className="w-100 shrink-0 group relative">
    <div className="absolute -inset-0.5 bg-linear-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-4xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
    <div className="relative bg-zinc-950/40 backdrop-blur-3xl border border-white/10 p-8 rounded-4xl h-full flex flex-col justify-between hover:border-amber-500/40 transition-all duration-500">
      <div className="absolute top-4 right-6 text-6xl text-amber-500/50 font-serif group-hover:text-amber-500/10 transition-all">
        “
      </div>
      <p className="text-zinc-400 text-sm italic mb-8 relative z-10 leading-relaxed">
        "{item.content}"
      </p>

      <div className="flex items-center justify-between relative z-10 border-t border-white/5 pt-6">
        <div className="flex items-center gap-4 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 rounded-2xl border border-amber-600/50 group-hover:border-amber-500 transition-all duration-500 object-cover shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <h4
              className="text-white font-semibold text-[15px] italic"
              style={{ fontFamily: "JetBrains Mono" }}
            >
              {item.name}
            </h4>
            <p className="text-amber-500/80 text-[10px] uppercase tracking-widest mt-1 font-bold">
              {item.role}
            </p>
          </div>
        </div>

        {/* Conditional Social Icons Section */}
        <div className="flex gap-2 ml-2 shrink-0">
          {item.social?.linkedin && (
            <motion.a
              whileHover={{ y: -2, scale: 1.1 }}
              href={item.social.linkedin}
              target="_blank"
              className="p-2 bg-zinc-900/50 rounded-lg text-zinc-500 hover:text-amber-500 border border-white/5 hover:border-amber-500/30 transition-all"
            >
              <FaLinkedinIn size={12} />
            </motion.a>
          )}
          {item.social?.github && (
            <motion.a
              whileHover={{ y: -2, scale: 1.1 }}
              href={item.social.github}
              target="_blank"
              className="p-2 bg-zinc-900/50 rounded-lg text-zinc-500 hover:text-white border border-white/5 hover:border-white/30 transition-all"
            >
              <FaGithub size={12} />
            </motion.a>
          )}
          {item.social?.insta && (
            <motion.a
              whileHover={{ y: -2, scale: 1.1 }}
              href={item.social.insta}
              target="_blank"
              className="p-2 bg-zinc-900/50 rounded-lg text-zinc-500 hover:text-pink-500 border border-white/5 hover:border-pink-500/30 transition-all"
            >
              <FaInstagram size={12} />
            </motion.a>
          )}
          {item.social?.fb && (
            <motion.a
              whileHover={{ y: -2, scale: 1.1 }}
              href={item.social.fb}
              target="_blank"
              className="p-2 bg-zinc-900/50 rounded-lg text-zinc-500 hover:text-blue-500 border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <FaFacebookF size={12} />
            </motion.a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-transparent relative overflow-hidden">
      <div className="mb-10 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Client <span className="text-amber-500">Kind Words</span>
        </h2>
        <div className="h-1 w-12 bg-amber-500 mx-auto rounded-full"></div>
      </div>

      <div className="flex w-full overflow-hidden mask-gradient">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 pr-6"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
