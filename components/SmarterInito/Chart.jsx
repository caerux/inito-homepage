import Button from "../header/Button";

const Chart = () => {
  return (
    <div className="max-w-[900px] mx-auto md:flex md:bg-white rounded-3xl overflow-hidden md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-14 md:p-12 md:bg-white">
          <p className="text-3xl font-bold text-[#112D35]">
            Get charts and actual{" "}
            <span className="relative inline-block">
              values{" "}
              <img
                src="/assets/SmarterInito/Vector5.svg"
                className="absolute bottom-0"
              />
            </span>{" "}
            of your{" "}
            <span className="relative inline-block">
              hormones
              <img
                src="/assets/SmarterInito/star.svg"
                className="absolute -right-9 -top-2"
              />
            </span>
          </p>
          <p className="text-[#112D35] font-medium mt-5 md:text-sm">
            Actual numerical values are necessary to know whether your PdG
            levels are sufficient enough to support a healthy pregnancy.
          </p>
          <p className="text-[#112D35] font-medium mt-5 md:text-sm">
            Studies show that PdG levels lower than 7.9ng/ml in serum (around
            10ug/ml PdG) 6-8 days after ovulation are associated with lower
            pregnancy outcomes.
          </p>
          <div className="flex justify-center md:hidden mt-10">
            <Button
              content="GET THE INITO KIT"
              style="rounded-full px-14 py-3 text-white font-bold text-sm"
            />
          </div>
        </div>
        <div className="mt-10 md:mt-0 items-center">
          <img
            src="/assets/SmarterInito/chart2.svg"
            className="w-[100%] md:hidden"
          />
          <img
            src="/assets/SmarterInito/chart1.svg"
            className="w-[100%] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
