/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { portfolio } from "@/app/api/data";

import portfolioA from "../../../../../public/images/protfoliodetails/project-gallery-1.webp";
import portfolioB from "../../../../../public/images/protfoliodetails/project-gallery-2.webp";
import portfolioC from "../../../../../public/images/protfoliodetails/project-gallery-3.webp";

import { HeroSub } from "@/components/SharedComponentsa/HeroSub";

type Props = {
  params: Promise<{ slug: string }>;
};

const projectData = [
  { label: "Clients", value: "Innovate Interiors Group" },
  { label: "Budget", value: "$100M USD" },
  { label: "Location", value: "Maplewood Heights, CA" },
  { label: "Sector", value: "Corporate Business" },
  { label: "Complete Date", value: "Jul 20, 2025" },
];

const PortfolioDetails = ({ params }: Props) => {
  const { slug } = React.use(params);

  const item = portfolio.find((p) => p.slug === slug);
  if (!item) return notFound();

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolios" },
    { href: "/portfolio/", text: "Portfolio Details" },
  ];

  return (
    <>
      <HeroSub
        title={item.title}
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="pb-20">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex flex-col lg:flex-row gap-5">
          {/* LEFT */}
          <div className="lg:w-[60%] w-full">
            <div className="bg-white p-5 rounded-2xl space-y-6">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-2xl"
              />

              <h4 className="font-unbounded font-medium uppercase text-3xl">
                {item.title}
              </h4>

              <p className="pb-4 text-pera-dark text-16 leading-6">
                This project highlights our expertise in creating visually
                appealing, high-performing, and user-friendly solutions. From
                concept to completion, we focused on achieving excellence
                through strategy, creativity, and technology.
              </p>

              <h4 className="font-unbounded font-medium text-3xl">
                Project Overview
              </h4>

              <p className="pb-4 text-pera-dark text-16 leading-6">
                In today's dynamic market, a strong and consistent brand
                indentity is key to standing out and driving growth and a
                growing business in the Bexon, recognized the need to evolve its
                brand to better resonate with an expanding audience and adapt to
                shifting matket trands.
              </p>

              <h4 className="font-unbounded font-medium text-3xl">
                Project Galllery
              </h4>

              <p className="pb-4 text-pera-dark text-16 leading-6">
                Our Rebranding Strategy for transformed their entire brand
                identity, from a fresh new logo to an updated visual design that
                resonate with their growing audience.
              </p>

              <Image
                src={portfolioA}
                alt="portfolio-gallery-image"
                className="rounded-lg"
              />

              <div className="flex flex-col md:flex-row gap-3">
                <Image
                  src={portfolioB}
                  alt="portfolio-gallery-image"
                  className="rounded-lg"
                />
                <Image
                  src={portfolioC}
                  alt="portfolio-gallery-image"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* RIGT */}
          <div className="lg:w-[40%] w-full lg:self-start lg:sticky top-20 space-y-5 py-5">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h4 className="text-black pb-5 font-semibold">Project Info</h4>

              <div className="space-y-6">
                {projectData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#007c7c] text-white w-10 h-10 flex items-center justify-center rounded-full shrink-0">
                      <Icon icon="mdi:account-star" width={22} height={22} />
                    </div>

                    <div className="">
                      <p className="text-sm text-gray-600">{item.label}</p>
                      <p className="text-base font-semibold text-gray-900">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-gray-100 shadow-lg bg-white p-5 rounded-xl">
              <h4 className="text-black pb-5 font-semibold">Tags</h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "Design",
                  "Branding",
                  "UI/UX",
                  "Development",
                  "Creative",
                  "Marketing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border box-border px-3 py-0.5 rounded-sm hover:bg-pera-dark hover:border-transparent hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails;
