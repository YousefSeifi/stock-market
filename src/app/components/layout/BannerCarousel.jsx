"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerCarousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <div className="relative w-full h-30 sm:h-75 md:h-50">
            <Image
              src="/images/baner1.jpg"
              alt="Crocs LEGO Red Brick Clog"
              fill
              priority
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-30 sm:h-75 md:h-50">
            <Image
              src="/images/baner2.jpg"
              alt="Crocs LEGO Red Brick Clog"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
