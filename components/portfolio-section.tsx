"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Moscravings",
    description: "A modern web application",
    image: "/moscravings.png",
  },
  {
    id: 2,
    title: "Whalesempire",
    description: "E-commerce platform",
    image: "/whalesempire.png",
  },
  {
    id: 3,
    title: "bjgeneralcleaning",
    description: "Dashboard application",
    image: "/bjgeneralcleaning.png",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Dashboard application",
    image: "/project4.jpg",
  },
];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollX = useMotionValue(0);
  const scrollXSpring = useSpring(scrollX, { stiffness: 300, damping: 30 });

  // Auto-scroll effect
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        const current = scrollX.get();
        const newValue = current - 1;
        // Reset when reaching the end to create infinite loop
        if (newValue < -2000) {
          scrollX.set(0);
        } else {
          scrollX.set(newValue);
        }
      }, 20); // Speed of auto-scroll
      return () => clearInterval(interval);
    }
  }, [isDragging, scrollX]);

  // Update active index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollX.on("change", (latest) => {
      const cardWidth = 344; // Card width + gap
      const normalizedPosition = Math.abs(latest) % (cardWidth * projects.length);
      const newIndex = Math.round(normalizedPosition / cardWidth);
      setActiveIndex(Math.min(newIndex, projects.length - 1));
    });
    return () => unsubscribe();
  }, [scrollX]);

  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            My Portfolio
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mb-12"
        >
          A collection of projects I&apos;ve worked on.
        </motion.p>

        {/* Project Cards - Infinite Scroll */}
        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6 cursor-grab active:cursor-grabbing w-max"
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            dragElastic={0.1}
            style={{ x: scrollXSpring }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onDrag={(event, info) => {
              scrollX.set(info.offset.x);
            }}
          >
            {[...projects, ...projects, ...projects].map((project, index) => {
              const x = useMotionValue(0);
              const y = useMotionValue(0);
              const rotateX = useTransform(y, [-100, 100], [10, -10]);
              const rotateY = useTransform(x, [-100, 100], [-10, 10]);

              return (
                <motion.div
                  key={`${project.id}-${index}`}
                  whileHover={{ y: -10, scale: 1.02 }}
                  style={{ rotateX, rotateY }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
                  className="relative aspect-[4/3] w-80 flex-shrink-0 rounded-2xl overflow-hidden bg-card border border-border/50 group cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-foreground font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2"
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => {
                const targetX = -(index * 344); // Card width + gap
                scrollX.set(targetX);
                setActiveIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-purple-500 w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
