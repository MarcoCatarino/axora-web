/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { services } from "@/app/api/data";

import { HeroSub } from "@/components/SharedComponentsa/HeroSub";

import service1 from "@/../public/images/services/service-02.webp";
import service2 from "@/../public/images/services/service-03.webp";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = { params: Promise<{ slug: string }> };

const faqData: FAQItem[] = [
  {
    question: "What is Customer Experience (CX) and Why is it important?",
    answer:
      "Customer Experience (CX) refers to the overall impression a customer has a business based on their interactions across various touchpoints-wheter it's a website visit, a customer support call, or an in-store purchase. It encompasses everything  from ease of navigation and service quality to emotional connection and brand perception.",
  },
  {
    question: "How can your Customer Experience Solutions benefit?",
    answer:
      "Our CX solutions help streamline processes, increase customer satisfaction, and build long-term loyalty through personalized experiences.",
  },
  {
    question: "How do you personalize the customer experience?",
    answer:
      "We collect customer data and insights to tailor interactions, offers, and support to each individual's preferences and behavior.",
  },
  {
    question: "How do you collect customer feedback?",
    answer:
      "We use surveys, feedback forms, analytics tools, and direct interactions to gather valuable insights from your customer.",
  },
  {
    question: "Can you help improve our customer support system?",
    answer:
      "Yes! We analyze your current support channels and implement solutions to optimize efficiency, response time, and overall satisfaction.",
  },
];

const ServiceDetails = ({ params }: Props) => {
  const { slug } = React.use(params);

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/", text: "Service Details" },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <HeroSub
        title={service.title}
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="pb-20">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[60%] w-full">
            <div className="bg-white rounded-2xl space-y-6 p-5">
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={800}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              )}

              <h4 className="font-unbounded font-medium uppercase text-3xl">
                {service.title}
              </h4>

              <p className="pb-4 text-pera-dark text-16 leading-6">
                Recognize that exceptional customer experiences are at the heart
                of every successful business. Our Customer Experience Solutions
                are crafted to help you tranform every interaction your
                customers have with your brans into a meaningful and positive
                experience. We believe that understanding the customer journey
                and providing personalized, seamless experiences can
                significantly enhance customer loyalty, satisfaction, and
                lifetime value. Our approach to customer experience is
                comprehensive and data driven.
              </p>

              <p className="pb-4 text-pera-dark text-16 leading-6">
                Our approach to customer experience is comprehensive and
                data-driven. We begin by assessing your current customer
                touchpoints, indentifying areas for improvement, and using
                insights to develop strategies that meet your customers evolving
                needs. From optimizing digital platforms.
              </p>

              <ul className="grid grid-cols-2 gap-5">
                {[
                  "Personalization and Scale",
                  "Customer Retention",
                  "Improved Customer Retention",
                  "Support Optimization",
                  "Data-Driven Insights",
                  "Proactive Engagement",
                  "Omni-channel Integration",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Icon
                      icon="material-symbols:check-rounded"
                      width={24}
                      height={24}
                      className="bg-prim text-white rounded-full p-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 flex-wrap md:flex-nowrap">
                <Image
                  src={service1}
                  alt="blog-image"
                  width={200}
                  height={200}
                  className="w-full rounded-lg h-full"
                />
                <Image
                  src={service2}
                  alt="blog-image"
                  width={200}
                  height={200}
                  className="w-full rounded-lg h-full"
                />
              </div>

              <h4 className="font-unbounded font-medium text-3xl">
                Our Range of Customer Services
              </h4>

              <p className="pb-4 text-pera-dark text-16 leading-6">
                At Bexon, we don't just focus on solving customer problems-we
                focus on creating experiences that delight and build lasting
                relationships. Wheter it's through improving customer service
                operations, leveraging technology, or designing more engaging
                digital experiences, our team is here to help you exceed your
                customers' expectations every time. We help you understand your
                customers deeply, optimize their experience.
              </p>

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
                      className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none lg:cursor-pointer"
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

          <div className="lg:w-[40%] w-full lg:self-start lg:sticky top-20 space-y-5 py-5">
            <div className="border border-gray-100 shadow-lg p-5 rounded-xl">
              <h4 className="text-black pb-5">More Services</h4>

              <div className="flex flex-col gap-5">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex justify-between items-center bg-white shadow-lg p-3 rounded-lg hover:bg-prim hover:text-white transition-colors duration-300"
                  >
                    <span>{s.title}</span>
                    <Icon icon="weui:arrow-outlined" width={12} height={24} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-gray-100 shadow-lg bg-white p-5 rounded-xl">
              <h4 className="text-black pb-5">Tags</h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "Branding",
                  "Business",
                  "Consulting",
                  "Design",
                  "Innovate",
                  "Lead",
                  "Marketing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-3 py-0.5 rounded-sm hover:bg-pera-dark hover:border-transparent hover:text-white transition-colors duration-300 lg:cursor-pointer"
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

export default ServiceDetails;
