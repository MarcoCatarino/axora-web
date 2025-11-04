"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import TestImage from "../../../../public/images/testimonials/testimonial-img.jpg";

import { testimonials } from "@/app/api/data";

export const Testimonials: React.FC = () => {
  return (
    <>
      <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="testimonials-item w-full flex h-auto lg:h-[550px] gap-5 flex-wrap lg:flex-nowrap">
            <div className="testimonials-image w-full lg:w-1/2 h-full rounded-2xl overflow-hidden relative">
              <Image
                src={TestImage}
                alt="testimonial-image"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

              <div className="rating-box absolute right-5 bottom-5 bg-dark text-white h-[150px] max-w-2xl w-[200px] flex flex-col justify-between items-start p-3 rounded-2xl">
                <span className="text-5xl font-unbounded">4.9</span>

                <div>
                  <div className="star flex">
                    <Icon
                      icon="material-symbols:star-rounded"
                      width={24}
                      height={24}
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width={24}
                      height={24}
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width={24}
                      height={24}
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width={24}
                      height={24}
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width={24}
                      height={24}
                      className="text-yellow-400"
                    />
                  </div>
                  <p>(50+ Clients Reviews)</p>
                </div>
              </div>
              <h4 className="absolute text-white">Hear from Customers</h4>
            </div>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="w-full lg:w-1/2 h-full"
              modules={[Autoplay]}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="w-full h-full">
                  <div className="testimonials-content w-full bg-white shadow-lg p-8 rounded-2xl flex flex-col justify-center items-start h-full">
                    <Icon
                      icon="iconoir:quote-solid"
                      width={90}
                      height={90}
                      className="text-dark mb-5"
                    />

                    <p className="text-pera-dark text-16 leading-7 md:text-22 md:leading-8 pb-8 border-b-2 border-dashed">
                      {item.text}
                    </p>

                    <div className="user flex items-center gap-2 pt-8">
                      <Image
                        src={item.image}
                        alt={item.name}
                        height={90}
                        width={90}
                        className="rounded-full h-[70px] w-[70px] object-cover"
                      />

                      <div className="user-info">
                        <h4 className="text-18">{item.name}</h4>
                        <span className="text-pera-light">{item.position}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
