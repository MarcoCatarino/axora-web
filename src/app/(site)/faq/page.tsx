"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import FAQImg from "../../../../public/images/faq/faq-image-01.webp";

import { HeroSub } from "@/components/SharedComponentsa/HeroSub";
import { Team } from "@/components/Home/Team";

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/faq", text: "Faq" },
  ];

  type FAQItem = {
    question: string;
    answer: string;
  };

  const faqData: FAQItem[] = [
    {
      question: "What services does Bexon offer to clients?",
      answer:
        "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery",
    },
    {
      question: "How do I get started with Corporate Business?",
      answer:
        "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery",
    },
    {
      question: "How do you ensure the success of a project?",
      answer:
        "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery",
    },
    {
      question: "How long will it take to complete my project?",
      answer:
        "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery",
    },
    {
      question: "Can I track the progress of my project?",
      answer:
        "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <HeroSub title="Faq" description="" breadcrumbLinks={breadcrumbLinks} />

      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex flex-wrap lg:flex-nowrap gap-5">
          <div className="lg:w-[50%] w-full">
            <Image
              src={FAQImg}
              alt="faq-image"
              width={300}
              height={300}
              className="w-full h-full rounded-xl"
            />
          </div>

          <div className="lg:w-[50%] w-full">
            <div className="space-y-4 w-full">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "bg-prim text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    <span className="font-medium">{item.question}</span>
                    <Icon
                      icon={
                        openIndex === index
                          ? "akar-icons:minus"
                          : "akar-icons:plus"
                      }
                      className="text-xl"
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-6 py-4 border-t border-teal-500 bg-teal-600/10 text-white/90">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 gap-5">
          <div className="w-full text-center mb-10">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Common Questions
            </span>

            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold">
              Need Help? Start Here ...
            </h2>
          </div>

          <div className="space-y-4 w-full lg:w-[70%] lg:mx-auto">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "bg-prim text-white"
                    : "bg-white text-black"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <span className="font-medium">{item.question}</span>
                  <Icon
                    icon={
                      openIndex === index
                        ? "akar-icons:minus"
                        : "akar-icons:plus"
                    }
                    className="text-xl"
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 border-t border-teal-500 bg-teal-600/10 text-white/90">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
