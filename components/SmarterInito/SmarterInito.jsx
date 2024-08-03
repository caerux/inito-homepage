import Chart from "./Chart";
import IrregularCycle from "./IrregularCycle";
import MeasureProgesterone from "./MeasureProgesterone";
import TracksEverything from "./TracksEverything";

const SmarterInito = () => {
  return (
    <section className="bg-[#E1F4FA] mt-56 flex flex-col justify-center">
      <div className="m-5">
        <MeasureProgesterone />
      </div>
      <div className="px-32 py-20 text-center max-w-[750px] mx-auto font-bold hidden md:block text-[#112D35] text-4xl">
        Why Inito is the smarter way to get{" "}
        <span className="relative inline-block">
          pregnant{" "}
          <img src="/assets/SmarterInito/Vector4.svg" className="absolute" />
        </span>
      </div>
      <IrregularCycle />

      <TracksEverything />

      <Chart />
    </section>
  );
};

export default SmarterInito;
