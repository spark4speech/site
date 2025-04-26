import {
  AppleIcon,
  SmartphoneIcon as AndroidIcon,
  GlobeIcon,
} from "lucide-react";

interface DownloadCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  buttonText: string;
  link: string;
  disabled?: boolean;
}

const DownloadCard = ({
  title,
  icon,
  description,
  buttonText,
  link,
  disabled,
}: DownloadCardProps) => (
  <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
    {icon}
    <h3 className="text-2xl font-bold mt-4 mb-2">{title}</h3>
    <p className="text-white/70 mb-4">{description}</p>
    {disabled ? (
      <button
        className="bg-gray-600 text-white py-2 px-4 rounded-lg opacity-50 cursor-not-allowed"
        disabled
      >
        {buttonText}
      </button>
    ) : (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
      >
        {buttonText}
      </a>
    )}
  </div>
);

export const DownloadOptions = () => {
  return (
    <div
      id="download-options"
      className="bg-gradient-to-b from-[#94491d] to-[#42210B] pt-24 pb-12"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Choose Your Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DownloadCard
            title="iOS"
            icon={<AppleIcon className="w-16 h-16" />}
            description="Download SPARK for your iPhone or iPad"
            buttonText="Download on App Store"
            link="#"
            disabled={true}
          />
          <DownloadCard
            title="Android"
            icon={<AndroidIcon className="w-16 h-16" />}
            description="Get SPARK for your Android smartphone or tablet"
            buttonText="Get it on Google Play"
            link="#"
            disabled={true}
          />
          <DownloadCard
            title="Web App"
            icon={<GlobeIcon className="w-16 h-16" />}
            description="Access SPARK directly from your web browser"
            buttonText="Launch Web App"
            link="https://web.spark4speech.com"
          />
        </div>
      </div>
    </div>
  );
};
