"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import EcosystemIcon from "../assets/icons/ecosystem.svg";

export const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(120px 120px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const rect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - rect.x);
      offsetY.set(e.y - rect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const processDescription = (desc: string) => {
    const regex = /\{([^}]+)\}\{([^}]+)\}/g;
    return desc.split(regex).map((part, index) => {
      if (index % 3 === 0) return part;
      if (index % 3 === 1) {
        console.log(desc.split(regex)[index + 1]);
        return (
          <a
            key={index}
            href={desc.split(regex)[index + 1]}
            className="hover:underline text-orange-400"
            target="_blank"
          >
            {part}
          </a>
        );
      }
      return null;
    });
  };

  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
      <motion.div
        className="absolute inset-0 border-2 border-orange-400 rounded-xl pointer-events-none"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{processDescription(description)}</p>
    </div>
  );
};
