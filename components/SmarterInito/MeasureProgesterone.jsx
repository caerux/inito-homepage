const MeasureProgesterone = () => {
  return (
    <div className="p-10 relative md:-mt-40 -mt-24 rounded-3xl shadow-custom-card bg-white lg:max-w-[800px] md:max-w-[650px] mx-auto">
      <div className="text-[#1F94AA] font-bold ">WHY MEASURE PROGESTERONE?</div>
      <p className="mt-2  text-[#112D35] font-medium">
        <span className="font-bold ">Anovulation</span> (having a menstrual
        cycle with no egg) is actually a common occurrence, affecting 1 in 10
        women*.
      </p>
      <p className="mt-3 text-[#112D35] font-medium">
        A sure way to confirm ovulation is a{" "}
        <span className="font-bold">rise in Progesterone level</span> after peak
        fertility. Progesterone also supports implantation and elevated levels
        of PdG during the 7-10 day window after ovulation correlates to higher
        chances of a successful pregnancy.
      </p>
      <p className="text-xs text-[#A0ABAE] mt-4">
        * Source: National Institutes of Health
      </p>
      <p className="text-xl text-[#112D35] font-bold mt-8">
        “Inito is all that you need to give you the best chance of conception."
      </p>
      <div className="flex mt-5 ">
        <img src="/assets/SmarterInito/doctor.svg" />
        <div className="px-5">
          <p className="text-[#112D35] font-bold">Dr. Rachel Wagner</p>
          <p className="text-[#94A0A4] italic">MD</p>
        </div>
      </div>
      <div className="hidden md:block absolute right-0 top-0 translate-x-[35%] -translate-y-[35%]">
        <img src="/assets/SmarterInito/notepad.svg" />
      </div>
    </div>
  );
};
export default MeasureProgesterone;
