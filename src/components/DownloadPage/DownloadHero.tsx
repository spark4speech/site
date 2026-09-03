import Link from "next/link"

export const DownloadHero = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#94491d] text-white pt-24 pb-12 text-center">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter mb-6">
          Download <span className="text-orange-300">SPARK</span>
        </h1>
        <p className="text-xl text-white/70 mb-8">
          Use SPARK in your browser today. Native iPhone, iPad, and Android releases are coming soon.
        </p>
        <Link
          href="#download-options"
          className="bg-white text-black py-3 px-6 rounded-xl font-medium shadow-xl hover:bg-orange-100 transition duration-300"
        >
          See availability
        </Link>
      </div>
    </div>
  )
}
