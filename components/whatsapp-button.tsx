"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+2347066278395"; // Replace with actual WhatsApp number
  const whatsappMessage = "Message Me for consultation";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: 1
      }}
      transition={{
        scale: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Contact via WhatsApp"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.div>
    </motion.button>
  );
}
