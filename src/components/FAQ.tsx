"use client";
import { useState } from "react";
import clsx from "clsx";

import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    question: "How can I access SPARK?",
    answer:
      "SPARK is available on all devices. You can download the app on the App Store or Google Play. SPARK currently supports most tablets (including iPads) and smartphones. All you need is an internet connection to get started!",
  },
  {
    question: "Do I need a tablet?",
    answer:
      "No! SPARK offers full support for both tablets and smartphones. Alternatively, we also offer a full-featured web app that you can access from any device with a web browser. You can access the web client at {web.spark4speech.com}{https://web.spark4speech.com}.",
  },
  {
    question: "Who can I contact for support?",
    answer:
      "Our team is always here to help. You can reach out to us through one of various email addresses, depending on your needs. For general contact, you can reach us at {contact@spark4speech.com}{mailto:contact@spark4speech.com}. For press inquiries, please contact {inquires@spark4speech.com}{mailto:inquiries@spark4speech.com}. For support with the application or any SPARK service, email {support@spark4speech.com}{mailto:support@spark4speech.com}. Finally, you can reach the individual developers at {shreyas@spark4speech.com}{mailto:shreyas@spark4speech.com} and {catelyn@spark4speech.com}{mailto:catelyn@spark4speech.com}.",
  },
  {
    question: "How do I use SPARK?",
    answer:
      "Okay, you've downloaded the app (or accessed the web client). Now how do you even use SPARK? SPARK is designed to be intuitive and easy to use, especially if you have experience with other AAC tools. We have a comprehensive user guide available at {guide.spark4speech.com}{https://guide.spark4speech.com} that will walk you through all the features and functionalities of SPARK. If you have any questions or need further assistance, feel free to reach out to our support team at {support@spark4speech.com}{mailto:support@spark4speech.com}.",
  },
  {
    question: "Is my data secure in your hands?",
    answer:
      "Security is one of our top priority. SPARK collects only the absolute minimal data required to function properly. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by you. Any data you submit to SPARK is entirely encrypted on the server and completely unaccessible by other users, including our team of developers.",
  },
  {
    question: "How can I contribute to SPARK?",
    answer:
      "We're always looking for contributors to help us improve SPARK. Whether you're a developer, designer, or just someone passionate about accessibility, there are many ways you can help. You can contribute to our codebase on {GitHub}{https://github.com/spark4speech}, report bugs and suggest features on our {GitHub Issues}{https://github.com/spark4speech/spark/issues}, or even help us translate SPARK into other languages (if this is you, please reach out at {contact@spark4speech.com}{mailto:contact@spark4speech.com})!",
  },
];

const processDescription = (desc: string) => {
  const regex = /\{([^}]+)\}\{([^}]+)\}/g;
  return desc.split(regex).map((part, index) => {
    if (index % 3 === 0) return part;
    if (index % 3 === 1) {
      return (
        <a
          key={index}
          href={desc.split(regex)[index + 1]}
          className="hover:underline text-orange-200"
          target="_blank"
        >
          {part}
        </a>
      );
    }
    return null;
  });
};

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="py-7 border-b border-white/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 sm:text-xl font-bold select-none">
          {question}
        </span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx("mt-4", { hidden: !isOpen, "": isOpen })}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {processDescription(answer)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="hidden xl:block bg-black text-white bg-gradient-to-b from-black to-[#94491d] pb-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
