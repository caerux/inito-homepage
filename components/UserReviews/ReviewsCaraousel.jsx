"use client";

import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const ReviewsCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: nextReview,
    onSwipedRight: prevReview,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reviews.map((review, index) => (
          <div className="min-w-full md:p-0 p-4" key={index}>
            <div className="bg-[#F7F7FE] rounded-3xl pt-8 pb-6 px-8 md:pb-12">
              <div className=" pb-6 ">
                <img src="/assets/Group 890.png" className="w-" />
              </div>
              <blockquote className="font-medium text-sm text-[#3F555D] ">
                "{review.text}"
              </blockquote>
              <p className="md:hidden mt-10  text-left font-bold text-[#0096AD]">
                {review.author}
              </p>
            </div>
            <p className="hidden md:block mt-2 ml-8 text-left font-bold text-[#8F8F8F]">
              {review.author}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-0 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-5">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToReview(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ReviewsCarousel;
