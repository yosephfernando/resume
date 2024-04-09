'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Portofolio(){
    return (
        <>
            <div className="flex flex-col p-8 w-full items-center justify-between">
                <p className="font-tilt-neon text-[30px]">Portofolio</p>
            </div>
            <div className="container mb-[5em]">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                        <SwiperSlide>
                            <div className="p-4 flex flex-col items-center bg-slate-400 rounded-2xl">
                                <Image alt="porto" src="/resume/nodejs.png" width={180} height={180} />
                                <p className="mt-3">Test portp</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-4 flex flex-col items-center bg-slate-400 rounded-2xl">
                                <Image alt="porto" src="/resume/nodejs.png" width={180} height={180} />
                                <p className="mt-3">Test portp</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-4 flex flex-col items-center bg-slate-400 rounded-2xl">
                                <Image alt="porto" src="/resume/nodejs.png" width={180} height={180} />
                                <p className="mt-3">Test portp</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-4 flex flex-col items-center bg-slate-400 rounded-2xl">
                                <Image alt="porto" src="/resume/nodejs.png" width={180} height={180} />
                                <p className="mt-3">Test portp</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-4 flex flex-col items-center bg-slate-400 rounded-2xl">
                                <Image alt="porto" src="/resume/nodejs.png" width={180} height={180} />
                                <p className="mt-3">Test portp</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-4 flex flex-col items-center bg-slate-400 rounded-2xl">
                                <Image alt="porto" src="/resume/nodejs.png" width={180} height={180} />
                                <p className="mt-3">Test portp</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-4 flex flex-col items-center bg-slate-400 rounded-2xl">
                                <Image alt="porto" src="/resume/nodejs.png" width={180} height={180} />
                                <p className="mt-3">Test portp</p>
                            </div>
                        </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}