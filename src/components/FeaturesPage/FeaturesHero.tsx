import Image from "next/image";
import appScreen from "../../assets/images/app-home.png";

export const FeaturesHero = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#42210B] text-white py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6">
              Communication that feels{" "}
              <span className="text-orange-300">personal</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              SPARK combines familiar communication boards with flexible
              editing, private prediction, and settings that adapt to the person
              using it.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="aspect-video rounded-xl overflow-hidden border border-white/15 bg-white shadow-2xl">
              <Image src={appScreen} alt="SPARK home communication board" className="h-full w-full object-cover object-top" priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
