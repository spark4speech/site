import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { Grid } from "@/components/Grid";
import { FAQs } from "@/components/FAQ";
import { Final } from "@/components/Final";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      {!(global?.window?.innerWidth < 768) && (
        <>
          <Grid />
          <FAQs />
        </>
      )}
      <Final />
      <Footer />
    </>
  );
}
