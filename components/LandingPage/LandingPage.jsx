import Button from "../header/Button";
import PressSection from "./PressSection";

const LandingPage = () => {
  return (
    <section className="relative w-full h-[700px] md:h-[775px] z-[-1]">
      <div className="absolute inset-0 z-[-1] bg-[#C4F2FF] ">
        <img
          src="/assets/Header-bg-01 2.svg"
          className="object-cover w-full h-full object-[0_85%] hidden md:block"
        />
      </div>

      <div className="px-5 md:px-5 lg:px-0 max-w-[1024px] container mx-auto md:flex h-full z-10 overflow-hidden md:overflow-visible">
        <div className="md:flex-1 pt-5 md:pt-32 md:w-full max-w-[90%]">
          <div className="flex items-center mb-6 mt-20">
            <div>
              <img src="/assets/Group 890.png" />
            </div>
            <div className="text-xs flex md:text-sm ml-4 font-semibold">
              TRUSTED BY 20,000+ COUPLES
            </div>
          </div>
          <div className="text-3xl md:text-5xl text-[#112D35] font-bold">
            Track your fertility hormones at home, in 10 minutes
          </div>
          <div className="mb-10 text-md font-semibold mt-6 text-[#112D35]">
            Get accurate results of{" "}
            <span className="font-extrabold">
              Estrogen, LH, Progesterone metabolic PdG ans FSH
            </span>{" "}
            with Inito. the all-in-one, FDA-registered fertility monitor.
          </div>
          <Button
            content="How does Inito work?"
            style="hidden md:block rounded-full w-64 font-semibold text-white text-md p-3"
          />
        </div>

        <div className="flex-1">
          <img
            src="/assets/v2_main_hero_desktop.png"
            className="hidden md:block object-cover w-full h-full overflow-visible"
          />
        </div>

        <div>
          <img
            src="/assets/v2_main_hero_mobile.png"
            className="transform scale-150 -translate-x-[50px] overflow-hidden md:hidden object-cover"
          />
        </div>
      </div>
      <div className="absolute left-[50%] -translate-x-[50%] -translate-y-[50%] md:hidden">
        <Button
          content="HOW DOES INITO WORK"
          style="rounded-full w-60 font-semibold text-white text-sm p-2"
        />
      </div>
    </section>
  );
};

export default LandingPage;
