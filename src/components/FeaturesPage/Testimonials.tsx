"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Shaurya B.",
    role: "Parent",
    quote:
      "As a parent, seeing my child form full sentences with SPARK was an unforgettable moment.",
  },
  {
    name: "Simon Claw",
    role: "Parent",
    quote:
      "An incredible tool built with real heart. SPARK gives my son a voice in a way that feels natural and easy.",
  },
  {
    name: "Deepthi K.",
    role: "Community Member",
    quote:
      "The team behind SPARK is building more than an app—they’re building a community where every voice matters. My favorite nonprofit!",
  },
  {
    name: "Victor C.",
    role: "Educator",
    quote:
      "Finally, an AAC app that doesn’t cost a fortune. SPARK proves accessibility shouldn’t have a price tag.",
  },
  {
    name: "Alysha Stencery",
    role: "Parent, Speech and Occupational Therapist",
    quote:
      "SPARK is bridging the gap between creativity, technology, and communication in a way that’s accessible to all.",
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
