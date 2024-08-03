const IrregularCycle = () => {
  return (
    <div className="max-w-[900px] mx-auto md:flex md:bg-white rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-14 md:p-15 md:bg-white md:flex-1">
          <p className="text-4xl font-bold text-[#112D35]">
            Adapts to your <span className="text-[#1F94AA]">ir</span>regular
            cycle
          </p>
          <p className="text-[#112D35] font-medium mt-5">
            Most ovulation kits have a set value or a threshold, making them
            likely to give a false read if your hormones fall outside the
            average range.
          </p>
          <p className="text-[#112D35] font-medium mt-5 ">
            Every woman is unique, especially with a condition like PCOS or
            Thyroid which can influence hormone levels. Inito measures real
            values of your hormones to personalize results to the unique you.
          </p>
        </div>
        <div className="mt-10 md:mt-0 md:flex-1 items-center">
          <img
            src="/assets/SmarterInito/lady.svg"
            className="w-[100%] object-cover aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default IrregularCycle;
