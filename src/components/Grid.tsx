import GridComponents from "./GridComponents";

export const Grid = () => {
  return (
    <div className="bg-gradient-to-t from-black to-[#94491d] text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Why SPARK?
        </h2>
        <div className="max-w-full mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Practical tools for communicating, finding words, and adapting a
            board to individual needs.
          </p>
        </div>
        <GridComponents />
      </div>
    </div>
  );
};
