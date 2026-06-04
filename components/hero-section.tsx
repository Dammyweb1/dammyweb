"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-600/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-44 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left w-full"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Damilola A.A
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-400 mb-6">
              Front-End Developer.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              with a background in professional graphic design, I bring a unique aesthetic sensibility to every line of code I write. I specialize in building responsive, modern interfaces that look exceptional and perform flawlessly.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full text-sm font-medium hover:from-purple-700 hover:to-purple-900 transition-all"
            >
              Contact
            </motion.a>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center w-full"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
              {/* Purple glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/50 to-transparent rounded-full blur-3xl" />
              <Image
                src="/hero-image.png"
                alt="Damilola A.A"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
