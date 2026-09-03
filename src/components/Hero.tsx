import Link from "next/link";

export const Hero = () => {
  return (
    <div
      className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#42210B_34%,#A14F21_65%,#DBA45E_82%)] py-[72px] sm:py-14 relative overflow-clip"
    >
      <div className="absolute h-[500px] w-[850px] sm:w-[1536px] sm:h-[768px] lg:w-[2600px] lg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#DEB48C] border-opacity-50 bg-[radial-gradient(closest-side,#000_90%,#EB9560)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href={"https://web.spark4speech.com/privacy"}
            className="text-center gap-1 border py-2 px-3 rounded-xl border-white border-opacity-30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Private by design
            </span>
            <span className="text-white/70"> · Works offline on supported devices</span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-center z-10">
              Speak <b className="text-orange-300">freely</b>, <br /> express
              yourself <b className="text-orange-300">clearly</b>.
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-xl">
            <b>SPARK</b> is a free AAC app for building and speaking messages.
            Organize vocabulary, personalize boards, and communicate using the
            words that matter to you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
          <Link href="https://web.spark4speech.com" className="bg-white text-black py-3 px-5 rounded-xl font-medium shadow-xl hover:bg-orange-100 transition text-center">Open SPARK</Link>
          <Link href="/features" className="border border-white/30 text-white py-3 px-5 rounded-xl font-medium hover:bg-white/10 transition text-center">See how it works</Link>
        </div>
      </div>
    </div>
  );
};
