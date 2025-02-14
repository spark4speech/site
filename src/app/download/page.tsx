import { Navbar } from "@/components/Navbar";
import { DownloadHero } from "@/components/DownloadPage/DownloadHero";
import { DownloadOptions } from "@/components/DownloadPage/DownloadOptions";
import { SystemRequirements } from "@/components/DownloadPage/SystemRequirements";
import { DownloadFAQ } from "@/components/DownloadPage/DownloadFAQ";
import { Footer } from "@/components/Footer";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <DownloadHero />
        <DownloadOptions />
        <SystemRequirements />
        <DownloadFAQ />
      </main>
      <Footer />
    </div>
  )
}