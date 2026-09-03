import Link from "next/link";

export const Final = () => (
  <section className="overflow-hidden bg-gradient-to-t from-black to-[#94491d] px-4 py-24 text-center text-white" aria-labelledby="try-spark-heading">
    <div className="container relative max-w-2xl">
      <h2 id="try-spark-heading" className="text-5xl font-bold tracking-tighter sm:text-6xl">Try SPARK</h2>
      <p className="mt-5 text-xl text-white/70">Open the web app and start with the included communication boards. No account is required.</p>
      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="https://web.spark4speech.com" className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-orange-100">Open SPARK</Link>
        <Link href="https://web.spark4speech.com/support" className="rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition hover:bg-white/10">Get support</Link>
      </div>
    </div>
  </section>
);
