import Button from "./header/Button";
import Image from "next/image";

const steps = [
  {
    gif: "/assets/InitoSteps/step1.gif",
    number: "1",
    numColor: "#BDE0E6",
    decription: "Dip the test strip in urine for 15 seconds.",
  },
  {
    gif: "/assets/InitoSteps/step2.gif",
    number: "2",
    numColor: "#96CDD7",
    decription: "Attach the Inito Fertility Monitor to your iPhone*.",
  },
  {
    gif: "/assets/InitoSteps/step3.gif",
    number: "3",
    numColor: "#64B4C3",
    decription: "Insert the test strip into the Inito Fertility Monitor.",
  },
  {
    gif: "/assets/InitoSteps/step4.gif",
    number: "4",
    numColor: "#1F94AA",
    decription: "Get personalized results on our App in 10 minutes.",
  },
];

const InitoSteps = () => {
  return (
    <section className="container flex mx-auto lg:max-w-[1024px] p-10 md:p-0 md:my-20">
      <div className="md:flex gap-4 items-center">
        <div className="p-4 lg:p-0 justify-center items-center text-center md:text-left">
          <p className="text-3xl md:text-2xl lg:text-4xl font-bold text-[#112D35] mx-auto md:w-[70%] md:mx-0">
            A{" "}
            <span className="relative inline-block">
              fertility lab{" "}
              <Image
                src="/assets/InitoSteps/Vector6.svg"
                alt="Vector Image"
                width={100}
                height={100}
                objectFit="contain"
                className="absolute w-[150%] -bottom-1"
              />
            </span>{" "}
            at your fingertips
          </p>
          <p className="text-[#112D35] md:text-sm lg:text-base font-medium mt-5 md:mt-8 mx-auto md:mx-0">
            Easy-to-read fertility diagnostic results directly on your iPhone¹,
            in just 10 minutes.
          </p>
          <div className="md:flex hidden mt-10">
            <Button
              content="Get the Inito Kit "
              style="rounded-full px-8 py-4 text-white font-semibold text-sm"
            />
          </div>
          <p className="hidden md:block text-xs text-[#A0ABAE] lg:text pr-10 mt-5">
            * The Inito Fertility Monitor currently supports iPhone 7 and up.
            Android phones are not supported at the moment.
          </p>
          <div className="hidden md:flex mt-5 justify-end">
            <Image
              src="/assets/InitoSteps/appStore.svg"
              alt="App Store"
              width={150}
              height={50}
            />
          </div>
        </div>
        <div className="justify-center item-center mt-10 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-6 justify-center items-center">
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className="mt-10 md:mt-0 flex flex-col justify-center items-center"
                >
                  <div className="relative md:max-w-[242px] md:max-h-[160px]">
                    <Image
                      src={step.gif}
                      alt="Step GIF"
                      layout="intrinsic"
                      className="rounded-3xl"
                      width={500}
                      height={300}
                    />
                    <div
                      className={`absolute text-white font-bold md:hidden text-3xl top-0 -translate-x-[30%] -translate-y-[30%] flex rounded-full h-20 w-20 justify-center items-center`}
                      style={{ backgroundColor: step.numColor }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div className="md:flex md:mt-2">
                    <div className="hidden md:flex md:mx-1 lg:mx-3 items-center justify-center">
                      <div className="lg:w-[60px] md:w-[40px] md:h-[40px] lg:h-[60px] bg-[#EEEEF5] rounded-full flex justify-center items-center font-bold  md:text-base lg:text-2xl">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex font-medium mt-4 mx-14 md:mx-0 md:mt-0 text-xl md:text-xs lg:text-sm text-center md:text-left items-center">
                      {step.decription}
                    </div>
                  </div>
                  {index == 2 ? (
                    <p className="text-xs md:hidden text-[#A0ABAE] text-center mt-8">
                      * The Inito Fertility Monitor currently supports iPhone 7
                      and up. Android phones are not supported at the moment.
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitoSteps;
