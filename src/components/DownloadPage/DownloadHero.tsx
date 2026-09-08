import Link from "next/link"

export const DownloadHero = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#42210B] px-4 py-20 text-center text-white sm:py-24">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Get SPARK</p>
        <h1 className="mt-5 text-5xl font-bold tracking-tighter sm:text-6xl">
          Communicate wherever you are.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/70">
          Use SPARK in your browser today. Native iPhone, iPad, and Android releases are coming soon.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="https://web.spark4speech.com" className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600">
            Open SPARK
          </Link>
          <Link href="#download-options" className="rounded-xl border border-white/25 px-6 py-3 font-medium text-white transition hover:bg-white/10">
            View availability
          </Link>
        </div>
      </div>
    </section>
  )
}
