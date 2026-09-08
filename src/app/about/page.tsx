import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, LockKeyhole, SlidersHorizontal } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SPARK's mission, product principles, and the people building its personal and private AAC experience.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: HeartHandshake,
    title: "Personal by design",
    body: "Vocabulary, images, speech, and layout should reflect the person communicating—not force everyone into the same setup.",
  },
  {
    icon: SlidersHorizontal,
    title: "Calm and usable",
    body: "The interface favors clear choices, familiar positions, and practical settings over visual noise or unnecessary complexity.",
  },
  {
    icon: LockKeyhole,
    title: "Private by default",
    body: "Core communication and prediction work locally. SPARK does not require an account or send messages to a server during normal use.",
  },
];

const founders = [
  { name: "Catelyn Dao", initials: "CD" },
  { name: "Shreyas Jain", initials: "SJ" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-black via-[#42210B] to-[#94491d] px-4 py-24 text-center">
          <div className="container mx-auto max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">About SPARK</p>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">
              Communication should fit the person.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-white/75">
              SPARK is a free augmentative and alternative communication app built to make everyday communication fast, familiar, and personal.
            </p>
          </div>
        </section>

        <section className="bg-[#94491d] px-4 pb-20 pt-10 text-center sm:pb-24 sm:pt-14" aria-labelledby="mission-heading">
          <div className="container mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Our mission</p>
            <h2 id="mission-heading" className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Build communication around the person.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/75">
              SPARK starts with useful communication boards, then gives people room to shape their words, images, speech, and layout around their own lives.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#94491d] to-[#42210B] px-4 py-24" aria-labelledby="principles-heading">
          <div className="container mx-auto max-w-6xl">
            <h2 id="principles-heading" className="text-center text-4xl font-bold tracking-tight">How we build SPARK</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {principles.map(({ icon: Icon, title, body }) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-black/30 p-7">
                  <Icon className="h-8 w-8 text-orange-300" aria-hidden="true" />
                  <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#42210B] to-black px-4 py-24" aria-labelledby="founders-heading">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 id="founders-heading" className="text-4xl font-bold tracking-tight">Meet the founders</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              SPARK is created and guided by co-founders Catelyn Dao and Shreyas Jain.
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl gap-5 sm:grid-cols-2">
              {founders.map((founder) => (
                <article key={founder.name} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-orange-500 text-xl font-bold text-white" aria-hidden="true">
                    {founder.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{founder.name}</h3>
                    <p className="text-white/60">Co-founder</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-12 text-lg text-white/70">Questions, feedback, or an idea for SPARK?</p>
            <Link href="mailto:contact@spark4speech.com" className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-orange-100">
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
