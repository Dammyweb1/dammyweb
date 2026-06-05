"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web development technologies including React, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, and various design tools like Figma and Photoshop. I also have experience with WordPress and Bootstrap.",
  },
  {
    question: "Do you work as a remote developer?",
    answer:
      "Yes, I have extensive experience working as a remote developer and instructor. I'm comfortable collaborating with diverse teams and clients across various industries and time zones.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Absolutely. I'm highly adaptable and comfortable working with existing stacks. Whether it's maintaining legacy code or integrating new features into established projects, I can seamlessly join your team.",
  },
  {
    question: "What types of projects do you work on?",
    answer:
      "I work on a wide range of projects including web applications, e-commerce platforms, automation solutions, data management portals, and custom software development. I'm passionate about solving real-world business challenges.",
  },
  {
    question: "Do you offer design services as well?",
    answer:
      "Yes, I have design skills using tools like Figma, Photoshop, and Canva. I can help with UI/UX design, prototyping, and creating visually appealing interfaces that complement the technical implementation.",
  },
  {
    question: "Are you available for freelance projects?",
    answer:
      "Yes, I'm available for freelance projects and contract work. Feel free to reach out through the contact form or connect with me on social media to discuss your project requirements.",
  },
  {
    question: "What is your approach to learning new technologies?",
    answer:
      "I'm continuously learning and staying updated with the latest industry trends. I believe in hands-on learning and quickly adapt to new tools and frameworks as needed for each project.",
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
              Asked Questions
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
