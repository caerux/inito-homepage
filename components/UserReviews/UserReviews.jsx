import React from "react";
import ReviewsCarousel from "./ReviewsCaraousel";

const UserReviews = () => {
  const reviews = [
    {
      text: "I purchased this monitor to figure out my ovulation patterns after 2 failed IUI’s. I discovered that my LH surge is a gradual onset and that we inseminated far too early. Now that we know which day I actually ovulate as it confirms my fertile window, I am hoping to be more succesful on my next IUI. Highly recommend this if you are looking for guaranteed results!",
      author: "Nancy",
    },
    {
      text: "I wish I had used this sooner. Don’t waste your money on other OPK tests. This system is more accurate and monitors 4 key hormones that effect ovulation. The other cheaper brands can not do this. It gives you a better insight on your body’s hormone fluctuations during a cycle and where any possible problems with conception could be coming from. It is worth the investment and can save you time on identifying fertility issues and help you get pregnant faster.",
      author: "Gonzales",
    },
    {
      text: "I wish I had used this sooner. Don’t waste your money on other OPK tests. This system is more accurate and monitors 4 key hormones that effect ovulation. The other cheaper brands can not do this. It gives you a better insight on your body’s hormone fluctuations during a cycle and where any possible problems with conception could be coming from. It is worth the investment and can save you time on identifying fertility issues and help you get pregnant faster.",
      author: "MJ",
    },
    {
      text: " have PCOS and have been on letrozole and using LH tests to time intercourse.I was hesitant to buy this because there are so many different thingsbut I liked the added hormones it tracks. I just used it with my last cycle andit was so great! Showed me my estrogen rising so I knew I was in my fertile windowtwo days before my LH rise. I just got the “confirmed ovulation” because my PdG increased. It’s so great to have a little more insight into what is going on!",
      author: "Ashley",
    },
    {
      text: "This product is worth every penny!! I was using only LH strips to track my ovulation and we would “baby make” on each peak day and did not get pregnant. After receiving this device and trying it since it says it tests for estrogen and progesterone to CONFIRM ovulation - we got pregnant the first month trying! Apparently I was peaking a day before what the LH strips did not pick up and this device did because it saw my estrogen rise and my LH START to rise and said that was my peak.",
      author: "Brooke",
    },
  ];

  return (
    <div className="container flex mx-auto max-w-[1024px] my-10">
      <ReviewsCarousel reviews={reviews} />
    </div>
  );
};

export default UserReviews;
