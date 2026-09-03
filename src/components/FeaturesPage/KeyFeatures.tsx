import { FolderTree, ImagePlus, Search, Speech } from "lucide-react";

const features = [
  {
    icon: FolderTree,
    title: "Build and speak a message",
    description: "Choose words from clear boards and folders. Each selection can be spoken immediately and added to the message bar for a complete thought.",
  },
  {
    icon: Search,
    title: "Find and reuse language",
    description: "Search across built-in and custom vocabulary, save useful phrases, and quickly return to recently spoken messages.",
  },
  {
    icon: ImagePlus,
    title: "Create the right vocabulary",
    description: "Add or edit words, phrases, folders, images, emoji, colors, pronunciations, and recordings. Drag items into a familiar order or move them between boards.",
  },
  {
    icon: Speech,
    title: "Choose how SPARK responds",
    description: "Adjust the device voice, speed, pitch, text size, columns, symbols, touch delay, automatic navigation, and word prediction from Settings.",
  },
];

export const KeyFeatures = () => (
  <section className="bg-[#42210B] py-24" aria-labelledby="key-features-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <h2 id="key-features-heading" className="mb-12 text-center text-4xl font-bold">How SPARK works</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {features.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center">
              <Icon className="mr-4 h-8 w-8 text-orange-300" aria-hidden="true" />
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <p className="leading-relaxed text-white/70">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
