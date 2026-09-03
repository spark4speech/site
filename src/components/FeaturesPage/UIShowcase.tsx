"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import homeScreen from "../../assets/images/app-home.png";
import folderScreen from "../../assets/images/app-folder.png";
import settingsScreen from "../../assets/images/app-settings.png";

const screens: { name: string; description: string; image: StaticImageData; alt: string }[] = [
  {
    name: "Communication board",
    description: "Folders and everyday words remain visible in a consistent grid, with the message and main actions always at the top.",
    image: homeScreen,
    alt: "SPARK home board with topic folders and everyday vocabulary",
  },
  {
    name: "Topic folders",
    description: "Open a folder to find related words while keeping Home, Search, Phrases, Settings, and editing nearby.",
    image: folderScreen,
    alt: "SPARK Emotions folder with emotion vocabulary",
  },
  {
    name: "Settings",
    description: "Adjust speech, display, access, prediction, backups, and board behavior from one organized settings page.",
    image: settingsScreen,
    alt: "SPARK Settings showing speech and display controls",
  },
];

export const UIShowcase = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const screen = screens[activeScreen];
  return (
    <section className="bg-[#42210B] py-24" aria-labelledby="spark-in-action-heading">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="spark-in-action-heading" className="text-4xl font-bold">SPARK in action</h2>
          <p className="mt-5 text-lg text-white/70">Explore the current interface—not a mockup or planned design.</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3" role="tablist" aria-label="SPARK screens">
          {screens.map((item, index) => <button key={item.name} id={`spark-screen-tab-${index}`} type="button" role="tab" aria-selected={activeScreen === index} aria-controls="spark-screen-panel" onClick={() => setActiveScreen(index)} className={`min-h-12 rounded-lg px-5 py-3 font-medium transition ${activeScreen === index ? "bg-orange-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"}`}>{item.name}</button>)}
        </div>
        <div id="spark-screen-panel" role="tabpanel" aria-labelledby={`spark-screen-tab-${activeScreen}`} className="mt-8 overflow-hidden rounded-xl border border-white/15 bg-white shadow-2xl">
          <Image key={screen.name} src={screen.image} alt={screen.alt} className="h-auto w-full" />
        </div>
        <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-white/70">{screen.description}</p>
      </div>
    </section>
  );
};
