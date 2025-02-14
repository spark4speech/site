"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const screens = [
  { name: "Homepage", image: "/placeholder.svg" },
  { name: "Sample Folder", image: "/placeholder.svg" },
  { name: "Settings", image: "/placeholder.svg" },
];

export const UIShowcase = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className="bg-gradient-to-b from-[#42210B] to-black py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          SPARK in Action
        </h2>
        <div className="flex flex-col items-center gap-12">
          <div className="w-full">
            <div className="bg-gray-800 rounded-xl overflow-hidden aspect-video relative">
              <motion.img
                key={activeScreen}
                src={screens[activeScreen].image}
                alt={screens[activeScreen].name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            {screens.map((screen, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  activeScreen === index
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-white/70 hover:bg-gray-700"
                }`}
                onClick={() => setActiveScreen(index)}
              >
                {screen.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
