import {
  AppleIcon,
  SmartphoneIcon as AndroidIcon,
  GlobeIcon,
} from "lucide-react";
import Link from "next/link";

interface DownloadCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  buttonText?: string;
  link?: string;
  status: string;
  available?: boolean;
  featured?: boolean;
}

const DownloadCard = ({
  title,
  icon,
  description,
  buttonText,
  link,
  status,
  available,
  featured,
}: DownloadCardProps) => (
  <article className={`flex h-full flex-col items-center rounded-2xl border p-7 text-center ${featured ? "border-orange-300/40 bg-orange-500/10" : "border-white/10 bg-black/25"}`}>
    <div className={`grid h-14 w-14 place-items-center rounded-xl ${featured ? "bg-orange-500 text-white" : "bg-white/10 text-white/80"}`}>
      {icon}
    </div>
    <h3 className="mt-5 text-2xl font-bold">{title}</h3>
    <p className="mb-6 mt-3 flex-1 text-white/70">{description}</p>
    {available && link && buttonText ? (
      <Link href={link} className="rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-orange-100">{buttonText}</Link>
    ) : (
      <span className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/60">{status}</span>
    )}
  </article>
);

export const DownloadOptions = () => {
  return (
    <section
      id="download-options"
      className="scroll-mt-8 bg-[#42210B] px-4 py-20 sm:py-24"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white">Choose your platform</h2>
          <p className="mt-4 text-lg text-white/70">The web app is available now. Mobile versions will appear here when they are ready.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <DownloadCard
            title="Web App"
            icon={<GlobeIcon className="h-7 w-7" aria-hidden="true" />}
            description="Open SPARK in a current browser without creating an account."
            buttonText="Open SPARK"
            link="https://web.spark4speech.com"
            status="Available now"
            available
            featured
          />
          <DownloadCard
            title="iPhone & iPad"
            icon={<AppleIcon className="h-7 w-7" aria-hidden="true" />}
            description="A native version for iPhone and iPad is planned."
            status="Coming later"
          />
          <DownloadCard
            title="Android"
            icon={<AndroidIcon className="h-7 w-7" aria-hidden="true" />}
            description="A native version for Android phones and tablets is planned."
            status="Coming later"
          />
        </div>
      </div>
    </section>
  );
};
