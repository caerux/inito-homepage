"use client";

import React, { useState } from "react";
import Image from "next/image";
const socials = ["Facebook", "Instagram", "LinkedIn", "Youtube"];

const footerData = {
  company: ["About Us", "Careers", "Blog", "Contact Us"],
  support: ["FAQ", "Terms", "Privacy Policy", "Returns & Warranty"],
  getInTouch: [
    "+1 815-369-0989",
    "help@inito.com",
    "355 Bryant Street, Suite 403, San Francisco 94017",
  ],
};

const FooterColumn = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 md:mb-0">
      <div
        className="flex justify-between items-center cursor-pointer md:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg text-white font-semibold md:mb-2">{title}</h4>
        <span className="text-xl md:hidden">
          {isOpen ? (
            <Image
              src="/assets/Footer/IconDown.svg"
              alt="Icon Down"
              width={24}
              height={24}
              className="rotate-180"
            />
          ) : (
            <Image
              src="/assets/Footer/IconDown.svg"
              alt="Icon Down"
              width={24}
              height={24}
            />
          )}
        </span>
      </div>
      <ul className={`mt-2 md:block ${isOpen ? "block" : "hidden"}`}>
        {items.map((item, index) => (
          <li key={index} className="mt-6 text-[#A0ABAE]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col bg-[#112D35] items-center justify-center">
        <div className="max-w-[1024px] container md:py-14 mx-auto rounded-lg p-10 xl:py-10 xl:px-0">
          <div className="flex flex-col items-center md:items-start mb-10 md:hidden">
            <div className="flex space-x-8">
              <Image
                src="/assets/Footer/Facebook.svg"
                alt="Facebook Icon"
                width={24}
                height={24}
              />
              <Image
                src="/assets/Footer/Instagram.svg"
                alt="Instagram Icon"
                width={24}
                height={24}
              />
              <Image
                src="/assets/Footer/LinkedIn.svg"
                alt="LinkedIn Icon"
                width={24}
                height={24}
              />
              <Image
                src="/assets/Footer/Youtube.svg"
                alt="Youtube Icon"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-10 justify-center">
            <FooterColumn title="Company" items={footerData.company} />
            <FooterColumn title="Support" items={footerData.support} />
            <FooterColumn title="Get In Touch" items={footerData.getInTouch} />
            <div className="hidden md:flex flex-col items-center md:items-start">
              <div className="flex space-x-8">
                {socials.map((social, index) => {
                  return (
                    <Image
                      key={index}
                      src={`/assets/Footer/${social}.svg`}
                      alt={`${social} Icon`}
                      width={32}
                      height={32}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#000000] w-full opacity-[20%]">
          <div className="max-w-[1024px] mx-auto md:py-2 md:flex justify-between items-center p-10 md:p-0">
            <div className="flex justify-center items-center">
              <Image
                src="/assets/Footer/InitoFooter.svg"
                alt="Inito Footer"
                width={80}
                height={50}
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/assets/Footer/Copyright.svg"
                alt="Copyright"
                width={150}
                height={50}
              />
            </div>
            <div className="flex justify-center items-center mt-8 md:hidden">
              <Image
                src="/assets/Footer/Copyright2.svg"
                alt="Copyright 2"
                width={150}
                height={50}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
