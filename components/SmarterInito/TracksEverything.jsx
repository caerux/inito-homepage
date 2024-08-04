"use client";

import { useState, useEffect } from "react";
import Button from "../header/Button";

const TracksEverything = () => {
  const images = [
    "/assets/SmarterInito/highFertility.svg",
    "/assets/SmarterInito/peakFertility.svg",
    "/assets/SmarterInito/ovulationConfirmed.svg",
    "/assets/SmarterInito/lowFertility.svg",
  ];

  const [isFading, setIsFading] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="bg-white lg:max-w-[900px] md:max-w-[750px] mx-auto md:rounded-3xl md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-14 lg:p-10 md:p-8 md:order-1">
          <p className="text-[#112D35] text-3xl md:text-2xl lg:text-3xl font-bold">
            Inito tracks everything so you don’t have to
          </p>
          <p className="text-[#112D35] font-medium md:text-sm lg:text-base mt-5">
            The Inito Fertility Monitor comes with a free easy-to-use App, so
            you can track your fertile days with ease and know exactly when you
            ovulate.
          </p>
          <div className="text-[#112D35] md:text-sm lg:text-base font-medium  mt-5">
            Our App notifies you for everything:
            <p>
              <span className="text-[#1F94AA] font-extrabold">•</span> Your
              fertility levels{" "}
            </p>
            <p>
              <span className="text-[#1F94AA] font-extrabold">•</span> When to
              test on the right days{" "}
            </p>
            <p>
              <span className="text-[#1F94AA] font-extrabold">•</span> When
              you’ve successfully ovulated{" "}
            </p>
            <p>
              <span className="text-[#1F94AA] font-extrabold">•</span> And when
              to roll into bed!
            </p>
          </div>
          <div className="md:flex hidden mt-5 ">
            <Button
              content="Get the Inito Kit"
              style="rounded-full px-8 py-4 md:text-sm lg:text-base text-white font-bold text-sm"
            />
          </div>
        </div>
        <div className="justify-center flex relative md-order-2">
          <img
            src="/assets/SmarterInito/iphoneCalendar.svg"
            className="w-[50%] md:w-[65%]"
          />

          <img
            src={images[currentImageIndex]}
            className={`absolute top-14 left-30 w-[80%] transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default TracksEverything;
