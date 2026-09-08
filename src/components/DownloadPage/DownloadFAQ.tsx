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
    <div className="border-b border-white/10 py-3">
      <button type="button" aria-expanded={isOpen} className="flex min-h-12 justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
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
        "The web app does not need to be installed—open web.spark4speech.com in a current browser. App Store and Google Play instructions will be added when the native apps are released.",
    },
    {
      question: "Is SPARK free to download and use?",
      answer:
        "Yes. The SPARK web app is currently free to use, and the planned native releases will be free to download.",
    },
    {
      question: "Can I use SPARK offline?",
      answer:
        "The installed mobile app is designed to keep its core communication features available offline. The web app needs an internet connection to load and may depend on cached browser files afterward.",
    },
    {
      question: "How often is SPARK updated?",
      answer:
        "The web app receives updates when a new version is deployed. Native update options will depend on App Store and Google Play settings after those releases become available.",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-[#42210B] to-black px-4 py-20 sm:py-24">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-4xl font-bold">Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
