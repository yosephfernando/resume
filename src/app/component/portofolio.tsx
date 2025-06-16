'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const portofolio = [
    {
        "name": "Intelegence information system",
        "screenshot": "/resume/laravel.svg"
    },
    {
        "name": "Person Live tracker",
        "screenshot": "/resume/kotlin-original.svg"
    },
    {
        "name": "Taks Management Tools",
        "screenshot": "/resume/nodejs.png"
    },
    {
        "name": "Travel e-commerce",
        "screenshot": "/resume/nodejs.png"
    },
    {
        "name": "Company profile web & CMS",
        "screenshot": "/resume/nodejs.png"
    }
]

export default function Portofolio(){
    return (
        <>
            <div className="flex flex-col p-8 container items-center justify-between">
                <p className="font-tilt-neon text-[30px]">Portofolio</p>
            </div>
            <div className="container px-8 mb-[5em]">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        640: { slidesPerView: 3 }
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                        {portofolio.map((item, index) => {
                            return (
                                <SwiperSlide key={index+1}>
                                    <div className="p-4 flex flex-col items-center bg-secondary rounded-2xl">
                                        <Image alt="porto" src={item.screenshot} width={180} height={180} />
                                        <p className="mt-3 text-white">{item.name}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                </Swiper>
            </div>
        </>
    )
}