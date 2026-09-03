import { Feature } from "./Feature";
import { LayoutGrid, LockKeyhole, SlidersHorizontal } from "lucide-react";

const features = [
  {
    title: "Built for personal communication",
    description:
      "Add the words, phrases, photos, emoji, recordings, and folders that fit the person using SPARK.",
    icon: SlidersHorizontal,
  },
  {
    title: "Fast and familiar",
    description:
      "Organize vocabulary into clear boards while keeping familiar positions stable for muscle memory.",
    icon: LayoutGrid,
  },
  {
    title: "Private and available offline",
    description:
      "Messages, boards, and learned predictions stay on your device during normal use. No account is required.",
    icon: LockKeyhole,
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Communication should fit the person
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            SPARK keeps everyday communication straightforward while giving
            people room to make every board their own.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={<feature.icon />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
