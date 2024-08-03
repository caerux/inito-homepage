const PressSection = () => {
  return (
    <div className="md:-mt-10 mt-10 container max-w-[1024px] mx-auto w-full flex flex-col justify-center text-center mb-10">
      <div className="font-extrabold text-[#c4c4c4] ">AS SEEN ON</div>
      <div>
        <div className="items-center justify-between mt-4 grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="flex items-center justify-center col-span-2 md:col-span-1">
            <img src="/assets/PressSection/Bloomberg.svg" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/assets/PressSection/Forbes.svg" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/assets/PressSection/TheWeek.svg" />
          </div>
          <div className="flex items-center justify-center order-2 md:order-none">
            <img src="/assets/PressSection/Washington.svg" />
          </div>
          <div className="flex items-center justify-center order-1 md:order-none">
            <img src="/assets/PressSection/Entrepreneur.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressSection;
