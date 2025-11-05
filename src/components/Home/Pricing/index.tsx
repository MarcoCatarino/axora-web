"use client";

import React from "react";
import { useReducer } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const Pricing: React.FC = () => {
  interface State {
    planType: string;
    duration: string;
    basicPrice: string;
    standardPrice: string;
    premiumPrice: string;
  }

  interface Action {
    type: "Monthly" | "Yearly";
    payload: {
      duration: string;
      basicPrice: string;
      standardPrice: string;
      premiumPrice: string;
    };
  }

  const initialTabConfig: State = {
    planType: "Monthly",
    duration: "/per month",
    basicPrice: "$99",
    standardPrice: "$249",
    premiumPrice: "$499",
  };

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "Monthly":
      case "Yearly":
        return { ...state, ...action.payload, planType: action.type };
      default:
        return state;
    }
  }

  const [tabConfig, dispatch] = useReducer(reducer, initialTabConfig);

  const dataBasic = [
    "Access to core services",
    "Limited Customer Support (email)",
    "1 Project per Month",
    "Basic Reporting and Analytics",
    "Standard Templates and Tools",
    "Baic Performance Tracking",
  ];

  const dataStandard = [
    "All features in Basic Plan",
    "Priority Customer Support",
    "Up to 3 projects per Month",
    "Monthly Performance Reviews",
    "Collaboration Tools for team",
    "Custom Templates",
  ];

  const dataPremium = [
    "All features in Satandard Plan",
    "Dedicated Account Sessions",
    "Tailored Strategy Sessions",
    "Querterly Performance Audits",
    "Priority Support",
    "24/7 Emergency Service",
  ];

  return (
    <>
      <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="text-center">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              FLEXIBLE PRICING
            </span>

            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
              Our Pricing Plan
            </h2>

            <div className="text-center pb-6">
              <div className="inline-flex items-center rounded-xl p-2 shadow-lg">
                <button
                  className={`py-3 px-7 rounded-xl cursor-pointer ${
                    tabConfig.planType === "Monthly"
                      ? "bg-dark text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "Monthly",
                      payload: {
                        duration: "/per month",
                        basicPrice: "$99",
                        standardPrice: "$249",
                        premiumPrice: "$499",
                      },
                    })
                  }
                >
                  Monthly
                </button>

                <button
                  className={`py-3 px-7 rounded-xl cursor-pointer ${
                    tabConfig.planType === "Yearly"
                      ? "bg-dark text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "Yearly",
                      payload: {
                        duration: "/per year",
                        basicPrice: "$299",
                        standardPrice: "$599",
                        premiumPrice: "$899",
                      },
                    })
                  }
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>

          {/* PRICING CARD */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
            {/* BASIC PLAN */}
            <div className="bg-white pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-22 font-bold text-start text-black font-chakrapetch">
                Basic Plan
              </h3>

              <div className="mt-4 flex items-center justify-center">
                <p className="text-48 py-5 uppercase font-bold font-mona">
                  {tabConfig.basicPrice}
                </p>
                <sub className="text-xs">{tabConfig.duration}</sub>
              </div>

              <p className="text-start mt-4 text-muted text-sm mb-8">
                Through a combination of our data-driven insights and innovative
                approaches.
              </p>
              <span className="font-semibold text-xl">Plan Included:</span>

              <div className="space-y-3 text-muted pt-3">
                {dataBasic.map((item, index) => (
                  <p className="text-dark flex gap-1" key={index}>
                    <Icon
                      icon="material-symbols:check-rounded"
                      height={24}
                      width={24}
                    />
                    {item}
                  </p>
                ))}
              </div>

              <Link
                href="/pricing"
                className="text-white bg-dark h-[50px] text-sm lg:text-16 w-full rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group my-8"
              >
                Choose Package
                <Icon
                  icon="tabler:arrow-right"
                  width="24"
                  height="24"
                  className="bg-prim/40 text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-500"
                />
              </Link>
            </div>

            {/* STANDARD PLAN */}
            <div className="bg-white pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-22 font-bold text-start text-black font-chakrapetch">
                Standard Plan
              </h3>

              <div className="mt-4 flex items-center justify-center">
                <p className="text-48 py-5 uppercase font-bold font-mona">
                  {tabConfig.standardPrice}
                </p>
                <sub className="text-xs">{tabConfig.duration}</sub>
              </div>

              <p className="text-start mt-4 text-muted text-sm mb-8">
                Through a combination of our data-driven insights and innovative
                approaches.
              </p>
              <span className="font-semibold text-xl">Plan Included:</span>

              <div className="space-y-3 text-muted pt-3">
                {dataStandard.map((item, index) => (
                  <p className="text-dark flex gap-1" key={index}>
                    <Icon
                      icon="material-symbols:check-rounded"
                      height={24}
                      width={24}
                    />
                    {item}
                  </p>
                ))}
              </div>

              <Link
                href="/pricing"
                className="text-white bg-dark h-[50px] text-sm lg:text-16 w-full rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group my-8"
              >
                Choose Package
                <Icon
                  icon="tabler:arrow-right"
                  width="24"
                  height="24"
                  className="bg-prim/40 text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-500"
                />
              </Link>
            </div>

            {/* PREMIUM PLAN */}
            <div className="bg-white pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-22 font-bold text-start text-black font-chakrapetch">
                Premium Plan
              </h3>

              <div className="mt-4 flex items-center justify-center">
                <p className="text-48 py-5 uppercase font-bold font-mona">
                  {tabConfig.premiumPrice}
                </p>
                <sub className="text-xs">{tabConfig.duration}</sub>
              </div>

              <p className="text-start mt-4 text-muted text-sm mb-8">
                Through a combination of our data-driven insights and innovative
                approaches.
              </p>
              <span className="font-semibold text-xl">Plan Included:</span>

              <div className="space-y-3 text-muted pt-3">
                {dataPremium.map((item, index) => (
                  <p className="text-dark flex gap-1" key={index}>
                    <Icon
                      icon="material-symbols:check-rounded"
                      height={24}
                      width={24}
                    />
                    {item}
                  </p>
                ))}
              </div>

              <Link
                href="/pricing"
                className="text-white bg-dark h-[50px] text-sm lg:text-16 w-full rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group my-8"
              >
                Choose Package
                <Icon
                  icon="tabler:arrow-right"
                  width="24"
                  height="24"
                  className="bg-prim/40 text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
