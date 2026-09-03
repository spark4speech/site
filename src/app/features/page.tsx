import { FeaturesHero } from "@/components/FeaturesPage/FeaturesHero"
import { KeyFeatures } from "@/components/FeaturesPage/KeyFeatures"
import { UIShowcase } from "@/components/FeaturesPage/UIShowcase"
import { FeaturesCTA } from "@/components/FeaturesPage/FeaturesCTA"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Features",
  description: "Explore SPARK communication boards, customization, offline word prediction, settings, search, phrases, and local backups.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#42210B] to-black text-white">
      <Navbar />
      <main>
        <FeaturesHero />
        <KeyFeatures />
        <UIShowcase />
        <FeaturesCTA />
      </main>
      <Footer />
    </div>
  )
}
import type { Metadata } from "next"
