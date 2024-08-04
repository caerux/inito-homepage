import Image from "next/image";

const IrregularCycle = () => {
  return (
    <div className="lg:max-w-[900px] md:max-w-[750px] flex mx-auto md:flex md:bg-white rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-14 lg:p-14 md:p-10 md:bg-white md:flex-1">
          <p className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#112D35]">
            Adapts to your{" "}
            <span className="text-[#1F94AA] md:text-[#A0ABAE]">ir</span>regular
            cycle
          </p>
          <p className="text-[#112D35] font-medium md:text-sm lg:text-base mt-5">
            Most ovulation kits have a set value or a threshold, making them
            likely to give a false read if your hormones fall outside the
            average range.
          </p>
          <p className="text-[#112D35] font-medium md:text-sm lg:text-base mt-5 ">
            Every woman is unique, especially with a condition like PCOS or
            Thyroid which can influence hormone levels. Inito measures real
            values of your hormones to personalize results to the unique you.
          </p>
        </div>
        <div className="mt-10 md:mt-0 md:flex-1">
          <Image
            src="/assets/SmarterInito/lady.svg"
            alt="Lady"
            layout="responsive"
            width={500}
            height={500}
            className="w-full object-cover aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default IrregularCycle;
