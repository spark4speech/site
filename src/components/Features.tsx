import { Feature } from "./Feature";
import openSourceIcon from "../assets/icons/open-source-fill.svg";
import handsHoldingIcon from "../assets/icons/hands-holding.svg";
import universalAccessIcon from "../assets/icons/universal-access.svg";

const features = [
  {
    title: "Free & Open Source",
    description:
      "We believe that communication is a fundamental human right. What good is a communication tool if it is not accessible to all? Not only is our entire codebase, from this website to the app itself, open source on {GitHub}{https://github.com/spark4speech}, but we have also open sourced all of our {finances}{https://hcb.hackclub.com/spark4speech} in the name of transparency. We are committed to keeping our software free and accessible, forever.",
    icon: openSourceIcon,
  },
  {
    title: "Nonprofit Organization",
    description:
      "We're driven by purpose, not profit. As a registered nonprofit organization (EIN 81-2908499), every decision we make prioritizes the needs of our users. All of our funding goes directly toward improving our tools and expanding access to those who need them most. We accept {tax-deductible donations}{https://hcb.hackclub.com/donations/start/spark4speech}, and every dollar we receive makes a difference.",
    icon: handsHoldingIcon,
  },
  {
    title: "Accessibility & Customizability",
    description:
      "Communication is personal, and no two individuals are the same. That’s why SPARK is specifically designed to be highly accessible and customizable. Whether you need alternative input methods or a personalized interface, SPARK can adapt to your unique needs and preferences, ensuring that you can communicate effectively and comfortably.",
    icon: universalAccessIcon,
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Not convinced?
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            SPARK may be new to the scene, but we&apos;re already igniting
            change. There are many reasons to choose SPARK. Here&apos;s some of
            our favorite features that set us apart.
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
