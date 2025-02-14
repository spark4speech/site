"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FolderTree, Mic, Brain, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: <FolderTree className="w-8 h-8" />,
    title: "Scalable Word Categories & Organization",
    description:
      "Diverse vocabulary organized in a tree-like system for intuitive and quick phrase construction.",
    url: "#",
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Text-to-Speech Functionality",
    description:
      "Clear and natural sounding text-to-speech using React Native Expo Speech for enhanced communication.",
    url: "#",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Word Predictions",
    description:
      "Predictive algorithms suggest relevant words based on user input and context, personalizing the experience.",
    url: "#",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Developmental Adaptability",
    description:
      "Age-specific datasets cater to users at different developmental stages, functioning as both a communication and learning tool.",
    url: "#",
  },
];

export const KeyFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="bg-[#42210B] py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-orange-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-white/70">{feature.description}</p>
              {hoveredIndex === index && (
                <motion.div
                  onClick={() => router.push(`#${feature.url}`)}
                  className="mt-4 text-orange-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Learn more →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
