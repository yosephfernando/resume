"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { BASE_PATH } from "../../../next.config";
import "swiper/css";
import "swiper/css/navigation";

const portofolio = [
  { name: "Intelegence information system", screenshot: `${BASE_PATH}/laravel.svg` },
  { name: "Person Live tracker", screenshot: `${BASE_PATH}/kotlin-original.svg` },
  { name: "Taks Management Tools", screenshot: `${BASE_PATH}/nodejs.png` },
  { name: "Travel e-commerce", screenshot: `${BASE_PATH}/nodejs.png` },
  { name: "Company profile web & CMS", screenshot: `${BASE_PATH}/nodejs.png` },
];

export default function Portofolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            03 / Portfolio
          </h2>
        </div>
        <div className="md:col-span-8 min-w-0">
          <Swiper
            className="portfolio-swiper"
            modules={[Navigation, Autoplay]}
            navigation
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          >
            {portofolio.map((item, index) => (
              <SwiperSlide key={item.name}>
                <figure className="group">
                  <div className="flex aspect-square items-center justify-center rounded-xl border border-hairline bg-surface transition-colors duration-500 ease-out group-hover:border-charcoal/30">
                    <Image
                      alt=""
                      src={item.screenshot}
                      width={96}
                      height={96}
                      className="h-20 w-20 object-contain grayscale opacity-70 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-baseline gap-3">
                    <span className="font-mono text-xs text-olive">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-ink">{item.name}</span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
