import Image from "next/image";

const Promotion = () => {
  return (
    <section className="container max-w-[1024px] mx-auto">
      <div className="items-center py-14 flex flex-col justify-center text-center bg-[#F2F8FA] md:bg-white">
        <div className="text-3xl px-5 lg:px-0 lg:text-4xl lg:w-3/5 font-bold text-[#112D35]">
          The{" "}
          <span className="relative inline-block">
            only{" "}
            <Image
              src="/assets/vector1.svg"
              alt=""
              layout="fill"
              className="absolute translate-y-5"
            />
          </span>{" "}
          fertility kit you will ever need
        </div>
        <div className="px-5 font-medium mt-6 lg:w-3/5 text-[#112D35]">
          Most ovulation tests predict your fertile days by tracking Estrogen
          and Luteinizing Hormone (LH), but fail to measure the hormone that
          actually confirms your ovulation and supports pregnancy:{" "}
          <span className="font-bold">Progesterone.</span>
        </div>
        <div className="text-2xl mt-12 w-3/5 font-bold text-[#112D35]">
          What makes Inito different?
        </div>
        <div className="px-5 mb-16 font-medium mt-6 lg:w-3/5 text-[#112D35]">
          Inito is the only fertility monitor that measures all{" "}
          <span className="font-bold">4 hormones</span> on a{" "}
          <span className="font-bold">single test strip,</span>
          showing you a full picture of your cycles with results unique to your
          body.
        </div>
        <div className="md:hidden">
          <div className="mb-10 flex flex-col items-center">
            <img src="/assets/3star.svg" />
            <p className="text-xs font-semibold mt-4 text-[#112D35]">
              TRUSTED BY
            </p>
            <p className="text-xs font-semibold mt-4 text-[#112D35]">
              20,000+ COUPLES
            </p>
          </div>

          <div className="mb-10 flex flex-col items-center">
            <img src="/assets/check.svg" />
            <p className="text-xs font-semibold mt-4 text-[#112D35]">
              FREE US SHIPPING
            </p>
          </div>

          <div className=" flex flex-col items-center">
            <img src="/assets/hsaEligible.svg" />
            <p className="text-xs font-semibold mt-4 text-[#112D35]">
              HSA/FSA ELIGIBLE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
