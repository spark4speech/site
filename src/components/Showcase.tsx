"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import appScreen from "../assets/images/app-screen.png";
import { useRef } from "react";

export const Showcase = () => {
  const appImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#94491d] py-72px sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Meet the app
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-white/70 mt-5">
            SPARK is designed to be easy to use and accessible to everyone.
            Every single detail is carefully crafted with the end user in mind,
            combining the traditional layout of an AAC tool with a modern and
            innovative UI integrated with the latest technology, so you can
            focus on what matters most: <b>communication</b>.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "600px",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Image
            src={appScreen}
            alt="App screen"
            className="mt-14 mx-auto rounded-m shadow-2xl"
            ref={appImage}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
