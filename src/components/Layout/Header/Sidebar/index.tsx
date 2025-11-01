import React from "react";

import { Icon } from "@iconify/react";
import Logo from "../Logo";
import Link from "next/link";

interface SidebarProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpenSidebar,
  setIsOpenSidebar,
}) => {
  return (
    <div
      className={`hidden lg:block fixed top-0 right-0 h-screen lg:w-[35%] xxl:w-[40%] shadow-2xl bg-dark-blur backdrop-blur-lg p-10 rounded-tl-3xl rounded-bl-3xl transform transition-transform duration-500 ease-in-out overflow-y-scroll z-50 ${
        isOpenSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* HEAD */}
      <div className="text-white flex justify-between items-center w-full">
        <Logo />

        <div
          className="close-btn group rounded-sm p-2 cursor-pointer"
          onClick={() => setIsOpenSidebar(false)}
        >
          <Icon
            icon="material-symbols:close"
            width="32"
            height="32"
            className="group-hover:rotate-90 transition duration-500 text-white"
          />
        </div>
      </div>

      {/* CONTENT */}
      <p className="text-pera-light py-8">
        We are commited to delivering innovative solutions that drive growth and
        add value to our clients. With a team of experienced proffesionals and a
        passion for excellence.
      </p>

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
  );
};

export default Sidebar;
