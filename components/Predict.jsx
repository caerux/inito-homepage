"use client";

import Image from "next/image";
import Button from "./header/Button";
import React, { useState, useEffect } from "react";

const checkList = [
  {
    image: "/assets/Predict/greenCheck.svg",
    description: "Estrogen, which rises 3-4 days before ovulation",
  },
  {
    image: "/assets/Predict/purpleCheck.svg",
    description: "LH, which surges 24-36 hours before ovulation",
  },
  {
    image: "/assets/Predict/blueCheck.svg",
    description: "Progesterone (PdG), which rises after ovulation",
  },
  {
    image: "/assets/Predict/orangeCheck.svg",
    description: "FSH, to track follicle growth",
  },
];

const Predict = () => {
  const images = [
    "/assets/Predict/iphone12Test.svg",
    "/assets/Predict/iphone12Hormone.svg",
    "/assets/Predict/iphone12Date.svg",
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
    <section className="container lg:mx-auto max-w-[1024px] md:px-6 lg:px-0">
      <div className="md:bg-[#E1F4FA] md:rounded-3xl">
        <div className="bg-[#B4E4F2] md:flex md:flex-row md:bg-transparent">
          <div className="px-10 pt-12 md:order-2 lg::px-24">
            <p className="text-3xl md:text-4xl text-[#112D35] font-bold mb-8">
              Predict and confirm your ovulation with{" "}
              <span className="italic relative inline-block">
                actual{" "}
                <Image
                  src="/assets/vector2.svg"
                  alt=""
                  width={112}
                  height={112}
                  className="absolute"
                />
              </span>{" "}
              data
            </p>
            <p className="font-medium text-[#112D35] mb-8">
              Unlike most ovulation tests that only give you &quot;yes/no&quot;
              results, Inito provides{" "}
              <span className="font-bold">real numerical values</span> of your
              fertility hormones.
            </p>
            <p className="font-medium text-[#112D35] mb-8">
              If you have irregular cycles, actual data is necessary to know
              exactly when you ovulate, and when is the best time to try to
              conceive.
            </p>
            <div className="flex justify-center md:hidden">
              <Button
                content="GET THE INITO KIT"
                style="rounded-full px-12 py-2 text-white font-bold text-sm"
              />
            </div>
            <div className="md:flex hidden">
              <Button
                content="Get the Inito Kit "
                style="rounded-full px-8 py-4 text-white font-bold text-sm"
              />
            </div>
          </div>

          <div className="mt-16 flex justify-center md:order-1 md:bg-[#B4E4F2] md:m-10 md:rounded-3xl md:px-8">
            <img
              src={images[currentImageIndex]}
              className={`transition-opacity duration-1000 md:w-[800px] ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        <div className="md:flex">
          <div className="p-10 md:pl-10 md:pt-4">
            <p className="text-3xl md:text-4xl text-[#112D35] mt-10 font-bold mb-8 md:mb-2">
              Never miss{" "}
              <span className="relative inline-block">
                a day{" "}
                <Image
                  src="/assets/Predict/anEgg.svg"
                  alt="An Egg"
                  layout="intrinsic"
                  width={150}
                  height={150}
                  className="absolute -top-8 left-4 scale-150"
                />
                <Image
                  src="/assets/Predict/Vector3.svg"
                  alt="Vector Image"
                  layout="intrinsic"
                  width={100}
                  height={100}
                  className="absolute top-3"
                />
              </span>{" "}
              again with Inito
            </p>
            <p className="font-medium text-[#112D35] mb-8 md:mb-2">
              Inito tracks up to 6 fertile days and confirms ovulation by
              measuring all 4 hormones in just 10 minutes:
            </p>
            <div>
              {checkList.map((item, index) => {
                return (
                  <div key={index} className="flex px-4 my-2 md:px-0 md:my-0">
                    <Image
                      src={item.image}
                      alt="check"
                      layout="intrinsic"
                      width={15}
                      height={15}
                    />
                    <p className="font-medium text-sm ml-4">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="justify-center flex m-10">
            <Image
              src="/assets/Predict/chart.svg"
              alt="Chart"
              layout="intrinsic"
              width={1024}
              height={576}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Predict;
