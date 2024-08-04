"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What results does Inito give?",
    answer:
      "Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 4 hormones.",
  },
  {
    question: "How many test strips are required per cycle?",
    answer:
      "The number of tests depends on the irregularity and length of your cycles. For someone with an average cycle length of 30 days, 12-15 tests may be required to track and confirm ovulation.",
  },
  {
    question:
      "Where can I get more refill strips? Do I need to buy a new monitor every cycle?",
    answer:
      "Boxes of strips are available in the ‘shop’ tab in the Inito app. You don’t need to purchase the monitor again.",
  },
  {
    question: "Do I need to use a test strip for each hormone?",
    answer:
      "No. Inito is the only fertility monitor that measures Estrogen, LH, PdG (urine metabolite of progesterone) and FSH on a single test strip.",
  },
  {
    question: "Will Inito work if I have PCOS?",
    answer:
      "Every woman is unique, especially with a condition like PCOS, which can influence hormone levels. Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation.",
  },
  {
    question: "Do medications affect the results?",
    answer:
      "Fertility medications or other drugs that influence your hormones can prevent Inito from giving you accurate results. You will still be able to see your hormone patterns via the App.",
  },
  {
    question: "Can I use HSA benefits to purchase Inito?",
    answer: "Yes!",
  },
  {
    question: "Can I use HSA benefits to purchase Inito?",
    answer:
      "The Inito Fertility Monitor is registered with the U.S. Food and Drug Administration (FDA) as a Class I medical device that is exempt from FDA's premarket notification submission requirements. The registration status should not be misunderstood as suggesting that the Inito Fertility Monitor has been reviewed, cleared or approved by FDA.",
  },
  {
    question: "Are there any limits to specific hormone thresholds?",
    answer:
      "Inito is designed to read all kinds of drops and surges in hormone levels. However, the set limits of measurement for E3G is 600 ng/ml, PdG is 40 ug/ml, and FSH & LH is 40 mIU/ml.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className=" bg-[#F7F7FE] rounded-3xl p-4 shadow-sm transition-all duration-300">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg text-[#112D35] font-bold px-2">{faq.question}</h3>
      <div className="flex items-center justify-center">
        <div className="h-8 w-8 items-center flex justify-center">
          {isOpen ? (
            <Image
              src="/assets/Faq/Minus.svg"
              alt="Minus Icon"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/assets/Faq/Plus.svg"
              alt="Plus Icon"
              width={20}
              height={20}
            />
          )}
        </div>
      </div>
    </div>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-screen" : "max-h-0"
      }`}
    >
      <p className="mt-2 text-[#3F555D] font-medium px-2 text-sm">
        {faq.answer}
      </p>
    </div>
  </div>
);

const Qna = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="grid grid-cols-1 px-6 lg:px-0 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-4">
            {faqs.slice(0, 5).map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            {faqs.slice(5).map((faq, index) => (
              <FAQItem
                key={index + 5} // Adjusting index for the second column
                faq={faq}
                isOpen={openIndex === index + 5}
                onClick={() => handleToggle(index + 5)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;
