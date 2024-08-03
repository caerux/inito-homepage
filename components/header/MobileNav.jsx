"use client";

import React, { useState } from "react";

const MobileNav = () => {
  const navItems = ["About Us", "Blog", "FAQ", "Contact Us"];
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={onClickHandler}
        className="w-[25px] h-[23px] flex cursor-pointer"
      >
        {isOpen ? (
          <img src="assets/close-x.svg" alt="open mobile nav" />
        ) : (
          <img src="assets/Icon.svg" alt="open mobile nav" />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col px-10">
            {navItems.map((navItem, index) => (
              <li key={index} className="py-5">
                <div className="text-[#112D35] text-xl font-semibold">
                  {navItem}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
