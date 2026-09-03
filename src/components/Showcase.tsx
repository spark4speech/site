import Image from "next/image";
import appScreen from "../assets/images/app-home.png";

export const Showcase = () => {
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
        <div className="mx-auto w-[90%]">
          <Image
            src={appScreen}
            alt="SPARK communication board showing folders and everyday vocabulary"
            className="mt-14 mx-auto rounded-m shadow-2xl"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};
