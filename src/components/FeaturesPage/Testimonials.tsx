"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Person 1",
    role: "Cool person",
    quote:
      "Nice comment",
  },
  {
    name: "Person 2",
    role: "Cooler person",
    quote:
      "SPARK is so sigma",
  },
  {
    name: "Person 3",
    role: "Coolest person",
    quote:
      "icl ts dont pmo fr ong",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-[#42210B] pt-24 pb-4">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What People Are Saying
        </h2>
        <div className="relative h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="text-xl italic mb-4 text-center">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <p className="font-bold text-center">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-orange-300 text-center">
                {testimonials[currentIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
