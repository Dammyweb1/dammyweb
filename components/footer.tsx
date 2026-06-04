"use client";

import { motion } from "framer-motion";
import { Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
           &#169; 2026 Dammyweb Technology, All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
