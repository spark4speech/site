import Link from "next/link";

export const FeaturesCTA = () => {
  return (
    <div className="bg-gradient-to-b from-[#42210B] to-black py-20 text-center">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Ready to try SPARK?</h2>
        <p className="text-xl text-white/70 mb-8">
          Open the web app now. No account or setup is required to explore the included boards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://web.spark4speech.com"
            className="bg-orange-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-orange-600 transition duration-300"
          >
            Open SPARK
          </Link>
          <Link
            href="https://web.spark4speech.com/support"
            className="bg-white text-black py-3 px-6 rounded-xl font-medium hover:bg-gray-100 transition duration-300"
          >
            Get support
          </Link>
        </div>
      </div>
    </div>
  );
};
