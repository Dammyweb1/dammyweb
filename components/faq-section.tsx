"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How is Uvodo different from other eCommerce platforms?",
    answer:
      "Uvodo offers a unique combination of simplicity, powerful features, and competitive pricing that sets it apart from other platforms.",
  },
  {
    question: "Can I use my own domain with Uvodo?",
    answer:
      "Yes, you can connect your existing domain. Uvodo also provides a forever free .uvo.do domain suffix to all sellers upon creating an account.",
  },
  {
    question: "Can I sell my products with Uvodo without creating an online store?",
    answer:
      "Yes, Uvodo allows you to sell products directly through various channels without the need for a full online store setup.",
  },
  {
    question: "Is there a setup fee for using Uvodo?",
    answer:
      "No, there is no setup fee. You can start selling immediately after creating your account.",
  },
  {
    question: "In what countries can I use Uvodo?",
    answer:
      "Uvodo is available globally in most countries. Check our documentation for specific regional availability.",
  },
  {
    question: "Are there any transaction fees or commissions?",
    answer:
      "Uvodo charges minimal transaction fees that are competitive with industry standards. Check our pricing page for details.",
  },
  {
    question: "Can I customize my Uvodo store?",
    answer:
      "Yes, Uvodo offers extensive customization options including themes, colors, fonts, and layout configurations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-foreground">Frequently </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ask Question
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-border/50 rounded-xl overflow-hidden bg-card/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
              >
                <span className="text-foreground text-sm sm:text-base font-medium pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
