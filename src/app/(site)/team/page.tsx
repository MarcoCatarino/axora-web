"use client";

import React from "react";

import { HeroSub } from "@/components/SharedComponentsa/HeroSub";
import { Team } from "@/components/Home/Team";

export default function page() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/team", text: "Team" },
  ];

  return (
    <>
      <HeroSub title="Team" description="" breadcrumbLinks={breadcrumbLinks} />
      <Team />
    </>
  );
}
