"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import avatar1 from "../../../../public/images/commitment/user1.jpg";
import avatar2 from "../../../../public/images/commitment/user2.jpg";
import avatar3 from "../../../../public/images/commitment/user3.jpg";
import strategy from "../../../../public/images/commitment/strategy-chart.webp";

export const Commitment: React.FC = () => {
  const tags = [
    "Growth",
    "Success",
    "Innovate",
    "Lead",
    "Impact",
    "Focus",
    "Tech",
  ];
  return (
    <>
      <section className="bg-light overflow-hidden py-14 lg:py-18 xl:22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-8">
          <div className="commitment-content bg-white p-8 rounded-2xl">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Choose the best
            </span>

            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold">
              Commmited Delivering Measurable Results and Building from the
              Lasting Relationships through out trust and innovation and
              corporate shared Learn More
            </h2>

            <Link
              href="/services"
              className="text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5"
            >
              Learn More
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
              />
            </Link>
          </div>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div className="w-full bg-white p-8 rounded-2xl">
              <h2 className="font-chakrapetch lg:text-24 font-semibold mb-5">
                Rebranding Strategy for a Growing
              </h2>

              <div className="w-fit flex items-center pt-8 pb-10 overflow-hidden">
                <Image
                  src={avatar1}
                  alt="avatar-image"
                  width={100}
                  height={200}
                  className="object-cover w-[100px] h-[100px] rounded-full scale-105 border-4 border-white shadow-xl translate-x-3"
                />

                <Image
                  src={avatar2}
                  alt="avatar-image"
                  width={100}
                  height={200}
                  className="object-cover w-[120px] h-[120px] rounded-full scale-110 border-4 border-white shadow-xl z-2"
                />

                <Image
                  src={avatar3}
                  alt="avatar-image"
                  width={100}
                  height={200}
                  className="object-cover w-[100px] h-[100px] rounded-full border-4 border-white shadow-xl -translate-x-3 z-0"
                />
              </div>

              <div className="flex gap-5">
                <span className="text-5xl font-semibold">+200</span>
                <p className="text-pera-dark">
                  Satisfied customers work with our Axora
                </p>
              </div>
            </div>

            <div className="w-full bg-white p-8 rounded-2xl">
              <h2 className="font-chakrapetch lg:text-24 font-semibold mb-5">
                Rebranding Strategy for a Growing
              </h2>

              <div className="w-full h-[230px]">
                <Image
                  src={strategy}
                  alt="strategy-chart image"
                  width={350}
                  height={350}
                  className="w-full h-full object-contain mx-auto"
                />
              </div>
            </div>

            <div className="w-full bg-white p-8 rounded-2xl flex justify-between items-start flex-col">
              <div className="mb-8">
                <h2 className="font-chakrapetch lg:text-24 font-semibold pb-1">
                  Rebranding Strategy for a Growing
                </h2>
                <p>
                  Our team are always available to addressed our concerns,
                  providing quick solutions.
                </p>
              </div>
              <ul className="flex flex-wrap gap-3 w-full">
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    className="border border-white rounded-md overflow-hidden cursor-pointer"
                  >
                    <span className="bg-black/10 backdrop-blur-sm px-3 py-1 inline-block text-sm font-medium">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
