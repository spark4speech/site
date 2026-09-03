"use client";

import type { LucideIcon } from "lucide-react";
import {
  BookHeart,
  Brain,
  FolderTree,
  ImagePlus,
  LockKeyhole,
  Search,
  Settings2,
  Speech,
} from "lucide-react";

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Build and speak",
    description: "Choose words to build a message, then tap the message bar to say it aloud.",
    icon: Speech,
  },
  {
    title: "Organized vocabulary",
    description: "Browse everyday words and topic folders without losing quick access to common language.",
    icon: FolderTree,
  },
  {
    title: "Make it personal",
    description: "Add or edit words, phrases, folders, photos, emoji, pronunciations, and recordings.",
    icon: ImagePlus,
  },
  {
    title: "Find words quickly",
    description: "Search built-in and custom vocabulary from one place.",
    icon: Search,
  },
  {
    title: "Save useful phrases",
    description: "Keep favorite messages nearby and return to recently spoken phrases.",
    icon: BookHeart,
  },
  {
    title: "Helpful predictions",
    description: "Offline suggestions help continue a message without sending the message to a server.",
    icon: Brain,
  },
  {
    title: "Adjust the interface",
    description: "Change text size, grid density, symbols, speech, touch delay, and navigation behavior.",
    icon: Settings2,
  },
  {
    title: "Local by default",
    description: "SPARK needs no account. Communication content and private learning remain on the device during normal use.",
    icon: LockKeyhole,
  },
];

function GridComponents() {
  return (
    <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ title, description, icon: Icon }) => (
        <article key={title} className="group rounded-xl border border-white/25 bg-black/70 p-6 transition hover:-translate-y-1 hover:border-orange-300/70 hover:bg-black">
          <div className="grid h-12 w-12 place-items-center rounded-lg bg-white text-black transition group-hover:bg-orange-200">
            <Icon aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-xl font-bold">{title}</h3>
          <p className="mt-2 leading-relaxed text-white/70">{description}</p>
        </article>
      ))}
    </div>
  );
}

export default GridComponents;
