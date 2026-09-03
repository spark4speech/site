import { Navbar } from "@/components/Navbar";
import { DownloadHero } from "@/components/DownloadPage/DownloadHero";
import { DownloadOptions } from "@/components/DownloadPage/DownloadOptions";
import { DownloadFAQ } from "@/components/DownloadPage/DownloadFAQ";
import { Footer } from "@/components/Footer";
import { Final } from "@/components/Final";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get SPARK",
  description: "Open the SPARK web app today and check availability for upcoming iOS and Android releases.",
  alternates: { canonical: "/download" },
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <DownloadHero />
        <DownloadOptions />
        <DownloadFAQ />
        <Final />
      </main>
      <Footer />
    </div>
  )
}
