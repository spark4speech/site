import GridComponents from "./GridComponents";

export const Grid = () => {
  return (
    <div className="hidden xl:block bg-gradient-to-t from-black to-[#94491d] text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Why SPARK?
        </h2>
        <div className="max-w-full mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            There&apos;s an overwhelming amount of options out there. We get it.
            But SPARK is different. Here&apos;s how.
          </p>
        </div>
        <GridComponents />
      </div>
    </div>
  );
};
