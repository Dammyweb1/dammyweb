"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Career", href: "#career" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 h-16 md:h-20 items-center">
          {/* Left Column - Logo and Mobile Menu Button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="#home" className="flex items-center gap-2">
              <img className="max-w-44" src="dammyweb_logo.png" alt="" />
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Right Column - Navigation and Actions */}
          <div className="flex items-center justify-end gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Download Resume Button */}
            <div className="hidden md:block">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full text-sm font-medium hover:from-purple-700 hover:to-purple-900 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Stunning Offcanvas Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Offcanvas Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-2/3 max-w-xs bg-background z-50 md:hidden shadow-2xl"
            >
              {/* Offcanvas Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <Link href="#home" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                  <img className="max-w-44" src="dammyweb_logo.png" alt="" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col p-6 gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-lg text-muted-foreground hover:text-foreground transition-all duration-200 group relative"
                    >
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Download Resume Button */}
              <div className="absolute bottom-8 left-6 right-6">
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full font-medium hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg shadow-purple-500/25"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-20 right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-32 left-4 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
