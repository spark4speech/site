"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10 py-4">
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-white/70"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const DownloadFAQ = () => {
  const faqs = [
    {
      question: "How do I install SPARK on my device?",
      answer:
        "For mobile devices, simply download the app from the App Store (iOS) or Google Play Store (Android) and follow the installation prompts. For the web app, no installation is required - just visit web.spark4speech.com in your browser.",
    },
    {
      question: "Is SPARK free to download and use?",
      answer:
        "Yes, SPARK is completely free to download and use. As a nonprofit organization, we're committed to keeping our software accessible to everyone who needs it.",
    },
    {
      question: "Can I use SPARK offline?",
      answer:
        "The mobile apps for iOS and Android can be used offline once downloaded. The web app requires an internet connection to function.",
    },
    {
      question: "How often is SPARK updated?",
      answer:
        "We regularly update SPARK to improve functionality and add new features. You can enable automatic updates on your device to always have the latest version.",
    },
  ]

  return (
    <div className="bg-gradient-to-b to-[#94491d] from-black py-24">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

