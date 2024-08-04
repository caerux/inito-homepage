import Image from "next/image";

const PressSection = () => {
  return (
    <div className="md:-mt-10 mt-10 container max-w-[1024px] mx-auto w-full flex flex-col justify-center text-center px-6 mb-10">
      <div className="font-extrabold text-[#c4c4c4] ">AS SEEN ON</div>
      <div>
        <div className="items-center justify-between mt-4 grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="flex items-center justify-center col-span-2 md:col-span-1">
            <Image
              src="/assets/PressSection/Bloomberg.svg"
              alt="Bloomberg"
              width={200}
              height={50}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/PressSection/Forbes.svg"
              alt="Forbes"
              width={200}
              height={50}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/PressSection/TheWeek.svg"
              alt="The Week"
              width={200}
              height={50}
            />
          </div>
          <div className="flex items-center justify-center order-2 md:order-none">
            <Image
              src="/assets/PressSection/Washington.svg"
              alt="Washington Post"
              width={200}
              height={50}
            />
          </div>
          <div className="flex items-center justify-center order-1 md:order-none">
            <Image
              src="/assets/PressSection/Entrepreneur.svg"
              alt="Entrepreneur"
              width={200}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressSection;
