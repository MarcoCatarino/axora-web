"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import AboutImg from "../../../../public/images/about/about-01.webp";

import { HeroSub } from "@/components/SharedComponentsa/HeroSub";
import { Companies } from "@/components/Home/Companies";
import { Testimonials } from "@/components/Home/Testimonials";
import { Team } from "@/components/Home/Team";

export default function page() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  const aboutItems = [
    {
      title: "Inovative Solutions",
      description:
        "We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace",
      icon: "famicons:bulb-outline",
    },
    {
      title: "Award-Winning Expertise",
      description:
        "Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.",
      icon: "la:award",
    },
    {
      title: "Award-Winning Expertise",
      description:
        "Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.",
      icon: "streamline-plump:customer-support-3",
    },
  ];

  const missions = [
    "Innovative & Excellence",
    "Exceptional Customer",
    "Business Growth",
  ];

  const visions = [
    "Global Leadership",
    "Transformative Impact",
    "Sustainable Success",
  ];

  return (
    <>
      <HeroSub title="about" description="" breadcrumbLinks={breadcrumbLinks} />
      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="about-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
            <div>
              <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                Choose the best
              </span>

              <h2 className="w-full lg:w-3/4 mt-4 font-chakrapetch lg:text-35 font-semibold">
                Empowering Business with Expertise.
              </h2>
            </div>

            <Link
              href="/contact"
              className="text-white bg-dark h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group"
            >
              Request a Call
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
              />
            </Link>
          </div>

          <div className="about-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {aboutItems.map((item, index) => (
              <div
                className="about-item w-full bg-white shadow-xl p-5 rounded-xl border hover:bg-prim group transition-all duration-500 flex flex-col space-y-4 justify-between"
                key={index}
              >
                <div className="about-icon border border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360 mb-12">
                  <Icon
                    icon={item.icon}
                    width="40"
                    height="40"
                    className="group-hover:text-white transition-colors duration-500"
                  />
                </div>

                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18">
                  {item.title}
                </h4>

                <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-prim-light overflow-hidden py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex lg:flex-row flex-col items-start gap-5">
          <div className="content w-full lg:w-[55%]">
            {/* TITLE */}
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Get to Know Us
            </span>

            <h2 className="w-full lg:w-3/4 mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
              Driving Innovation and Excellence for Sustainable Corporate
              Success Worlwide.
            </h2>

            {/* CONTENT */}
            <div className="flex lg:flex-row flex-col gap-4">
              {/* MISSIONS */}
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-unbounded text-xl pb-3">Our Mission</h4>

                <p className="capitalize pb-5">
                  Our mission is empower businesses through innovative best
                  solution, exceptional service.
                </p>

                <ul className="space-y-2.5">
                  {missions.map((item, index) => (
                    <li key={index} className="flex gap-1">
                      <Icon icon="weui:arrow-outlined" width="12" height="24" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* VISION */}
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-unbounded text-xl pb-3">Our Vision</h4>

                <p className="capitalize pb-5">
                  Our vision is to become a global leader in providing
                  transformative business solutions.
                </p>

                <ul className="space-y-2.5">
                  {visions.map((item, index) => (
                    <li key={index} className="flex gap-1">
                      <Icon icon="weui:arrow-outlined" width="12" height="24" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-white bg-dark h-[50px] text-sm lg:text-16 w-full rounded-xl font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5"
            >
              Learn More About Us
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
              />
            </Link>
          </div>

          <div className="image lg:w-[45%] w-full rounded-lg overflow-hidden">
            <Image
              src={AboutImg}
              alt="about-img"
              width={300}
              height={300}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      <Team limit={4} />
    </>
  );
}
