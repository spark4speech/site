import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { Grid } from "@/components/Grid";
import { FAQs } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <Features />
      <Showcase />
      {!(global?.window?.innerWidth < 768) && (
        <>
          <Grid />
          <FAQs />
        </>
      )}
    </>
  );
}
