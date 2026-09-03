"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const items: { question: string; answer: ReactNode }[] = [
  {
    question: "What is AAC?",
    answer: "Augmentative and alternative communication (AAC) includes tools and methods that support or supplement speech. SPARK is one AAC option for building and speaking messages.",
  },
  {
    question: "Who can use SPARK?",
    answer: "SPARK is designed for people of different ages and abilities who may benefit from a customizable communication board. A user, family member, educator, clinician, or caregiver can adapt it to individual needs.",
  },
  {
    question: "Where can I use SPARK today?",
    answer: <>The web app is available now at <a className="text-orange-200 underline-offset-4 hover:underline" href="https://web.spark4speech.com">web.spark4speech.com</a>. Native iOS and Android releases are coming soon.</>,
  },
  {
    question: "Does SPARK work offline?",
    answer: "The installed mobile app is designed to keep its core communication features available offline. The web app needs an internet connection to load and may depend on cached browser files afterward.",
  },
  {
    question: "Does SPARK collect my messages?",
    answer: "Normal app use keeps messages, boards, settings, media, and learned predictions on the device. SPARK does not require an account and does not send communication content to a SPARK server.",
  },
  {
    question: "Can I add my own words, photos, or recordings?",
    answer: "Yes. You can add and edit words, phrases, folders, photos, emoji, pronunciations, colors, and voice recordings, then drag items into the order that works for you.",
  },
  {
    question: "How does word prediction work?",
    answer: "SPARK suggests likely next words using an offline language model. Optional private learning can adapt suggestions from complete messages you choose to speak, and that learned information stays on the device.",
  },
  {
    question: "Can I move my setup between devices?",
    answer: "SPARK can export a local backup containing profiles, boards, settings, saved phrases, and custom media. Backup files may contain sensitive communication content, so store and share them carefully.",
  },
  {
    question: "Is SPARK a medical device?",
    answer: "No. SPARK is a communication tool and does not provide medical, diagnostic, therapeutic, legal, or other professional advice.",
  },
  {
    question: "How do I get help?",
    answer: <>Visit <a className="text-orange-200 underline-offset-4 hover:underline" href="https://web.spark4speech.com/support">SPARK Support</a> or email <a className="text-orange-200 underline-offset-4 hover:underline" href="mailto:contact@spark4speech.com">contact@spark4speech.com</a>.</>,
  },
];

function AccordionItem({ question, answer }: { question: string; answer: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-${question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <div className="border-b border-white/30 py-2">
      <button type="button" aria-expanded={isOpen} aria-controls={panelId} className="flex min-h-16 w-full items-center gap-4 py-3 text-left" onClick={() => setIsOpen((value) => !value)}>
        <span className="flex-1 text-lg font-bold sm:text-xl">{question}</span>
        {isOpen ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && <motion.div id={panelId} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden"><div className="pb-6 leading-relaxed text-white/75">{answer}</div></motion.div>}
      </AnimatePresence>
    </div>
  );
}

export const FAQs = () => (
  <section className="bg-black bg-gradient-to-b from-black to-[#94491d] pb-24 text-white" aria-labelledby="faq-heading">
    <div className="container">
      <h2 id="faq-heading" className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">Frequently asked questions</h2>
      <div className="mx-auto mt-12 max-w-5xl">{items.map((item) => <AccordionItem key={item.question} {...item} />)}</div>
    </div>
  </section>
);
