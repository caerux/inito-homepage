import Button from "../header/Button";
import Image from "next/image";

const Chart = () => {
  return (
    <div className="lg:max-w-[900px] md:max-w-[750px] mx-auto md:flex md:bg-white rounded-3xl overflow-hidden md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-14 md:px-10 md:py-6 md:bg-white">
          <p className="text-3xl md:text-2xl lg:text-3xl font-bold text-[#112D35]">
            Get charts and actual{" "}
            <span className="relative inline-block">
              values{" "}
              <Image
                src="/assets/SmarterInito/Vector5.svg"
                alt="Underline"
                width={100}
                height={100}
                objectFit="contain"
                className="absolute bottom-0"
              />
            </span>{" "}
            of your{" "}
            <span className="relative inline-block">
              hormones
              <Image
                src="/assets/SmarterInito/star.svg"
                alt="Star"
                width={50}
                height={50}
                objectFit=""
                className="absolute right-0 translate-x-11 -translate-y-11"
              />
            </span>
          </p>
          <p className="text-[#112D35] font-medium mt-5 md:text-sm lg:text-base">
            Actual numerical values are necessary to know whether your PdG
            levels are sufficient enough to support a healthy pregnancy.
          </p>
          <p className="text-[#112D35] font-medium mt-5 md:text-sm lg:text-base">
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
        <div className="md:hidden">
          <Image
            src="/assets/SmarterInito/chart2.svg"
            alt="Chart 2"
            layout="responsive"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="/assets/SmarterInito/chart1.svg"
            alt="Chart 1"
            layout="responsive"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
