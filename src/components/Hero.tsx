"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  return (
    <div
      className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#42210B_34%,#A14F21_65%,#DBA45E_82%)] py-[72px] sm:py-24 relative overflow-clip"
      ref={container}
    >
      <div className="absolute h-[500px] w-[850px] sm:w-[1536px] sm:h-[768px] lg:w-[2600px] lg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#DEB48C] border-opacity-50 bg-[radial-gradient(closest-side,#000_90%,#EB9560)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href={"https://github.com/spark4speech"}
            target="_blank"
            className="inline-flex gap-1 border py-2 px-3 rounded-xl border-white border-opacity-30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              SPARK is open source!
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Check us out on GitHub</span>
              <ArrowIcon />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-center z-10">
              Speak <b className="text-orange-300">freely</b>, <br /> express
              yourself <b className="text-orange-300">clearly</b>.
            </h1>
            <motion.div
              className="absolute right-[850px] top-[120px]"
              style={{ translateY }}
            >
              <Image
                src={cursorImage}
                alt="Cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
                hidden
              />
            </motion.div>
            <motion.div
              className="absolute left-[840px] top-[250px]"
              style={{ translateY }}
            >
              <Image
                src={messageImage}
                alt="Message"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
                hidden
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-xl">
            We&apos;re a nonprofit organization developing <b>SPARK</b> - A free
            & open source augmentative and alternative communication tool for
            individuals with speech and language challenges. Join us on our
            journey.
          </p>
        </div>
        <div className="flex justify-center mt-8 ">
          <button className="bg-white text-black py-3 px-5 rounded-xl font-medium shadow-xl">
            Get started now
          </button>
        </div>
      </div>
    </div>
  );
};
