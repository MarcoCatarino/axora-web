"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

import Logo from "./Logo";
import { headerData } from "./Navigation/menuData";
import HeaderLinks from "./Navigation/headerLinks";
import Sidebar from "./Sidebar";
import { MobileheaderLinks } from "./Navigation/mobileheaderLinks";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed h-24 px-4 top-5 left-[2.5%] py-1 z-50 w-[95%] flex navbar items-center transition-all duration-500 rounded-3xl ${
          sticky
            ? "bg-black/80 backdrop-blur-lg shadow-lg w-[90%]"
            : "bg-white/10 backdrop-blur-sm"
        }`}
      >
        {/* Desktop */}
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--preakpoint-md) flex justify-between items-center xl:gap-16 lg:gap-8 py-6">
          <div className="text-white">
            <Logo />
          </div>

          <nav className="hidden lg:flex grow items-center justify-center space-x-10 text-base">
            {headerData.map((item, index) => (
              <HeaderLinks key={index} item={item} />
            ))}
          </nav>

          <div className="nva-right gap-4 hidden lg:flex items-center">
            <Link
              href="/contact"
              className="text-white bg-dark h-[50px] rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 w-auto justify-center items-center tracking-wider group"
            >
              Contact Us
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
              />
            </Link>

            <button
              onClick={() => setIsOpenSidebar(true)}
              className="block p-2 cursor-pointer group"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-3 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out group-hover:w-6"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            </button>
          </div>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="lg:hidden block p-2 cursor-pointer group"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-3 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out group-hover:w-6"></span>
            <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
          </button>
        </div>
      </header>

      {/* MOBILE */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-screen w-full sm:w-[50%] lg:w-[40%] shadow-2xl bg-dark-blur backdrop-blur-lg p-10 z-50 transform transition-transform overflow-y-scroll duration-500 ease-in-out ${
          navbarOpen ? "translate-x-0" : "translate-x-[110%]"
        }`}
      >
        <div className="text-white flex justify-between items-center w-full">
          <Logo />
          <button
            aria-label="Close mobile menu"
            onClick={() => setNavbarOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-start py-4">
          {headerData.map((item, index) => (
            <MobileheaderLinks key={index} item={item} />
          ))}
        </nav>

        {/* Search */}
        <h3 className="font-chakrapetch pb-3">Search Now!</h3>
        <form className="search-box relative flex">
          <input
            type="text"
            placeholder="Search ..."
            className="bg-white ps-3 h-[45px]"
            required
          />

          <button
            type="submit"
            className="absolute right-0 h-full border border-border cursor-pointer"
          >
            <Icon icon="ei:search" width="50" height="30" />
          </button>
        </form>

        {/* CONTACT INFORMATION */}
        <h3 className="font-chakrapetch pt-6">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex flex-col gap-1">
            <span className="text-pera-light font-chakrapetch">Phone</span>
            <Link
              href="/contact"
              className="text-white font-unbounded font-normal"
            >
              (+52) 9984879923
            </Link>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-pera-light font-chakrapetch">Email</span>
            <Link
              href="/contact"
              className="text-white font-unbounded font-normal"
            >
              info@axora.com
            </Link>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-pera-light font-chakrapetch">Location</span>
            <Link
              href="/contact"
              className="text-white font-unbounded font-normal"
            >
              Zona Hotelera, Cancun, Mexico
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <h3 className="font-chakrapetch pt-6">Follow Us</h3>
        <div className="social-icons flex gap-3 pt-3">
          <Link href="https://www.facebook.com/">
            <Icon
              icon="gg:facebook"
              width="30"
              height="30"
              className="text-white p-1 rounded-sm bg-blue-600 transition duration-500 hover:-translate-y-1 cursor-pointer"
            />
          </Link>

          <Link href="https://www.instagram.com/">
            <Icon
              icon="mdi:instagram"
              width="30"
              height="30"
              className="text-white p-1 rounded-sm bg-linear-to-br from-pink-700/60 to-yellow-300/60 transition duration-500 hover:-translate-y-1 cursor-pointer"
            />
          </Link>

          <Link href="https://www.youtube.com/">
            <Icon
              icon="mdi:youtube"
              width="30"
              height="30"
              className="text-white p-1 rounded-sm bg-red-700 transition duration-500 hover:-translate-y-1 cursor-pointer"
            />
          </Link>

          <Link href="https://www.linkedin.com/">
            <Icon
              icon="basil:linkedin-solid"
              width="30"
              height="30"
              className="text-white p-1 rounded-sm bg-blue-400 transition duration-500 hover:-translate-y-1 cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <Sidebar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
    </>
  );
};

export default Header;
