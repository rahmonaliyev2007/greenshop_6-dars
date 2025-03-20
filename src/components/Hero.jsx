
"use client";

import { useGetBannersQuery } from "../app/redux/Rtk"; 
import { useState, useRef } from "react";
import { Carousel } from "antd";
import Image from "next/image";

const HeroCarousel = () => {
    const { data: slides = [], isLoading, isError } = useGetBannersQuery(); 
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);

    if (isLoading || isError) {
        return (
            <div className="bg-white">
                <div className="loading max-w-[1200px] m-auto mt-4 h-[400px] flex justify-center items-center text-blue-500/30">
                    {isLoading ? "Yuklanmoqda..." : "Yuklashda xatolik yuz berdi"}
                </div>
            </div>
        );
    }

    return (
        <div className="relative max-w-[1240px] m-auto px-4 mt-4">
            <Carousel ref={carouselRef} autoplay autoplaySpeed={4000} dots={false} beforeChange={(from, to) => setCurrentSlide(to)}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex items-center justify-center bg-[#F5F5F5] rounded-xl h-[400px] pl-10">
                        <div className="max-co w-full flex items-center justify-between h-full">
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="uppercase text-lg font-medium text-[#3D3D3D]">{slide.suptitle}</h3>
                                <h2 className="font-[900] text-[#3D3D3D] text-6xl pr-10">
                                    {slide.title.split(" ").slice(0, -1).join(" ")}{" "}
                                    <span className="text-[#46A358] uppercase">
                                        {slide.title.split(" ").slice(-1)}
                                    </span>
                                </h2>
                                <p className="mt-4 font-bold leading-5 text-[#727272] max-w-[60%]">{slide.description}</p>
                                <button className="mt-6 px-6 py-3 max-w-40 cursor-pointer text-base font-semibold uppercase bg-[#46A358] hover:bg-[#46A358]/70 text-white rounded-md transition">
                                    {slide.btn}
                                </button>
                            </div>

                            <div className="flex justify-end items-end">
                                <Image src={slide.img} alt={slide.subtitle || "Carousel img"} width={390} height={390} />
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className="justify-center items-center flex gap-2 absolute bottom-4 left-1/2">
                {slides.map((_, index) => (
                    <button key={index}
                        className={`relative cursor-pointer transition-all duration-300 bg-[#46A358] !h-[3px] ${currentSlide === index ? "!w-6" : "!w-4 hover:bg-[#46A358]/70 bg-[#46A358]/40"}`}
                        onClick={() => carouselRef.current.goTo(index)}>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;