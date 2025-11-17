/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { HeroSub } from "@/components/SharedComponentsa/HeroSub";

import { blogs } from "@/app/api/data";

import blog1 from "@/../public/images/blog/service-1.webp";
import blog2 from "@/../public/images/blog/service-2.webp";
import blog3 from "@/../public/images/blog/service-3.webp";

const recentPosts = [
  {
    image: blog1,
    title: "Entrepreneur Mindset: Habits That Drive Success",
    date: "01 Oct, 2025",
  },
  {
    image: blog2,
    title: "Innovative Strategies fot Business Growth",
    date: "15 Oct, 2025",
  },
  {
    image: blog3,
    title: "Leadership Lessons for Modern Entrepreneur",
    date: "22 Oct, 2025",
  },
];

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HeroSub
        title="Blogs"
        description="Explore our latest articles"
        breadcrumbLinks={breadcrumbLinks}
      />

      <div className="bg-prim-light py-14 lg:py-18 xl:py-22">
        <div className="container flex items-center mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 gap-5 flex-col lg:flex-row">
          <div className="lg:w-[60%] w-full">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((item) => (
                <div
                  key={item.id}
                  className="blog-item border border-border w-full bg-white p-5 rounded-2xl group h-auto mb-5"
                >
                  <div className="blog-image w-full rounded-2xl overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={250}
                      height={250}
                      className="w-full h-[320px] group-hover:scale-110 transition duration-500 object-cover"
                    />

                    <span className="absolute right-5 bottom-5 text-white font-chakrapetch bg-white/10 font-semibold backdrop-blur-sm rounded-sm text-2xl text-center p-3">
                      {item.date}
                    </span>
                  </div>

                  <div className="blog-content px-2 py-2 space-y-5">
                    <p>
                      <span className="border border-border px-2 rounded-sm mr-4">
                        {item.category}
                      </span>
                      By {item.author}
                    </p>

                    <h4 className="font-unbounded font-medium pb-2">
                      {item.title}
                    </h4>

                    <p className="leading-6 text-pera-dark">
                      {item.description}
                    </p>

                    <Link
                      href={`/blog/${item.slug}`}
                      className="text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 px-2 justify-center items-center tracking-wider group mt-5 lg:mt-0"
                    >
                      Read More
                      <Icon
                        icon="tabler:arrow-right"
                        width={24}
                        height={24}
                        className="bg-prim text-white rounded-full h-full w-[30px] p-1.5 group-hover:-rotate-45 transition duration-500"
                      />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-10">
                No blogs Found Matching '{searchTerm}'
              </p>
            )}
          </div>

          <div className="lg:w-[40%] w-full lg:self-start sticky top-0 right-0">
            <div className="lg:sticky top-20 space-y-4">
              <div className="shadow-lg border border-gray-100 bg-white p-5 rounded-xl">
                <h4 className="text-black pb-5">Search here</h4>

                <form
                  className="search-box border border-border rounded-lg active:outline-none"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Search here"
                    className="p-3 border-border w-full rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </div>

              <div className="border border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                <h4 className="text-black pb-5">Recent Posts</h4>

                <div className="flex flex-col gap-4">
                  {recentPosts.map((post, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={200}
                        height={100}
                        className="w-[250px] h-[100px] object-cover rounded-xl"
                      />

                      <div>
                        <h4 className="font-chakrapetch pb-2 text-18 font-semibold">
                          {post.title}
                        </h4>

                        <span className="uppercase text-pera-dark">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                <h4 className="text-black pb-5">Categories</h4>

                <ul className="flex flex-col gap-2">
                  <li className="flex justify-between items-center">
                    <span>Business</span>(3)
                  </li>

                  <li className="flex justify-between items-center">
                    <span>Corporate</span>(4)
                  </li>

                  <li className="flex justify-between items-center">
                    <span>Designing</span>(1)
                  </li>

                  <li className="flex justify-between items-center">
                    <span>Innovation</span>(2)
                  </li>
                </ul>
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
                      className="border border-border px-3 py-0.5 rounded-sm hover:bg-pera-dark hover:border-transparent hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
