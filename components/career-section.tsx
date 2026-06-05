"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "CorelDraw", icon: "https://img.icons8.com/fluency/96/coreldraw-2021.png" },
];

export default function CareerSection() {
  const { scrollYProgress } = useScroll();
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const textColorProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section id="career" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Career
          </h2>
        </motion.div>

        {/* About Text */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="text-center mb-12"
        >
          <motion.p
            style={{ y: textY, scale: textScale }}
            className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {"Based in Nigeria, I have successfully operated as a remote developer and instructor, collaborating with diverse teams and clients across various industries. I am highly adaptable, comfortable working with existing stacks, and passionate about solving real-world business challenges—from automating payment solutions with AI to developing secure portals for data management.".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="inline-block mr-1 bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="w-10 h-10 sm:w-12 sm:h-12 relative"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-48 sm:w-[32rem] sm:h-64 lg:w-[40rem] lg:h-80">
            <div className="relative w-full h-full flex items-start justify-center">
              <div className="w-full h-full flex items-start justify-center">
                <Image
                  src="/round_ds.png"
                  alt="Profile"
                  width={700}
                  height={700}
                  className="w-full h-full object-contain object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
