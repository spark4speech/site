"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import appScreen from "../assets/images/app-home.png";

export const Showcase = () => {
  const frame = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#94491d] py-72px sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          See SPARK in action
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-white/70 mt-5">
            Choose words from familiar boards, build a message, and tap the
            message to speak. Search, saved phrases, predictions, and editing
            tools stay close without getting in the way.
          </p>
        </div>
        <motion.div
          ref={frame}
          className="mx-auto mt-14 w-[90%] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          style={{
            rotateX: reduceMotion ? 0 : rotateX,
            transformPerspective: "800px",
            transformOrigin: "center bottom",
          }}
        >
          <Image
            src={appScreen}
            alt="SPARK communication board showing folders and everyday vocabulary"
            className="block"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
