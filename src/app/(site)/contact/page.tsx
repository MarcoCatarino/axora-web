"use client";

import React from "react";

import { HeroSub } from "@/components/SharedComponentsa/HeroSub";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function page() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  const contactInfo = [
    {
      icon: "tdesign:location",
      head: "Our Location",
      text: "45-Renner Burg, West Rond, MT 94259-302",
    },
    {
      icon: "ic:outline-email",
      head: "Contact Us",
      text: "webexample@gmail.com",
    },
    {
      icon: "ic:phone",
      head: "Call Us",
      text: "(+52) 9984879923",
    },
  ];

  return (
    <>
      <HeroSub
        title="Contact"
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      {/* Contact Info */}
      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="contact-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
            {contactInfo.map((contact, index) => (
              <div
                className="contact-item w-full bg-white shadow-xl p-5 space-y-6 rounded-xl border hover:bg-prim group transition-all duration-500 flex flex-col justify-between text-center h-[230px]"
                key={index}
              >
                <div className="contact-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                  <Icon
                    icon={contact.icon}
                    width="30"
                    height="30"
                    className="group-hover:text-white transition-colors duration-500"
                  />
                </div>
                <div className="contact-info">
                  <h4 className="font-unbounded text-18 pb-2 group-hover:text-white transition-colors duration-300">
                    {contact.head}
                  </h4>
                  <p className="text-gray-500 group-hover:text-white transition-colors duration-300">
                    {contact.text}
                  </p>
                </div>
              </div>
            ))}
            <div className="contact-item w-full bg-white shadow-xl p-5 space-y-6 rounded-xl border hover:bg-prim group transition-all duration-500 flex flex-col justify-between text-center h-[230px]">
              <div className="contact-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                <Icon
                  icon="hugeicons:chat"
                  width="30"
                  height="30"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div className="contact-info">
                <h4 className="font-unbounded text-18 pb-2 group-hover:text-white transition-colors duration-300">
                  Live Chat
                </h4>
                <p className="text-gray-500 group-hover:text-white transition-colors duration-300">
                  livechat@bexon.com <br />
                  <Link href="/contact" className="font-bold">
                    Need Help?
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="w-full lg:w-[50%] bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8 font-unbounded">
                Feel Free to Get in Touch or Visit our Location.
              </h2>

              <form action="" className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone"
                    className="w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Choose an Option
                  </label>
                  <select className="w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2">
                    <option value="">Choose an Option</option>
                    <option value="">Business Strategy</option>
                    <option value="">Customer Experience</option>
                    <option value="">Sustainability and ESG</option>
                    <option value="">Training and Development</option>
                    <option value="">IT Support & Maintenance</option>
                    <option value="">Marketing Strategy</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-600 font-medium mb-2">
                    Type Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write yout message..."
                    className="w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2"
                  ></textarea>
                </div>

                <Link
                  href="/contact"
                  className="text-white bg-dark h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group"
                >
                  Send Message
                  <Icon
                    icon="tabler:arrow-right"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
                  />
                </Link>
              </form>
            </div>

            <div className="w-full lg:w-[50%] h-[300px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.772236574899!2d-86.82733872528208!3d21.161460583208598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c00e93b7759%3A0xfa3daf73a3ed2ea5!2sPalacio%20Municipal!5e0!3m2!1ses-419!2smx!4v1763099675442!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
