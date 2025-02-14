export const FeaturesHero = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#42210B] text-white py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6">
              Discover the Power of{" "}
              <span className="text-orange-300">SPARK</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Explore how SPARK is revolutionizing communication for individuals
              with speech and language challenges.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
              {/* replace below w/ video */}
              <div className="w-full h-full flex items-center justify-center text-white/50">
                Demo Video Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
