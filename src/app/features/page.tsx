import { FeaturesHero } from "@/components/FeaturesPage/FeaturesHero"
import { KeyFeatures } from "@/components/FeaturesPage/KeyFeatures"
import { UIShowcase } from "@/components/FeaturesPage/UIShowcase"
import { Testimonials } from "@/components/FeaturesPage/Testimonials"
import { FeaturesCTA } from "@/components/FeaturesPage/FeaturesCTA"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#42210B] to-black text-white">
      <Navbar />
      <main>
        <FeaturesHero />
        <KeyFeatures />
        <UIShowcase />
        <Testimonials />
        <FeaturesCTA />
      </main>
      <Footer />
    </div>
  )
}

