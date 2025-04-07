"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import './works.css'

const fleetData = [
    {
        id: 1,
        name: "Audi Q3 Sportback",
        description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
        image: "/images/t-1-1.png",
    },
    {
        id: 2,
        name: "Electric Class",
        description: "Mercedes-Benz EQS, BMW 7 Series, Audi A8 or similar",
        image: "/images/t-1-2.png",
    },
    {
        id: 3,
        name: "Luxury Class",
        description: "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
        image: "/images/t-1-3.png",
    },
];

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        beforeChange: (current: number, next: number) => setCurrentSlide(next), // Update the current slide when it changes
    };

    const handleDotClick = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index); // Navigate to the clicked dot
        }
    };

    // Custom texts for the dots with title and description
    const dotTexts = [
        { title: "Create Your Route", description: "Plan your journey just the way you like. Select your starting point, preferred stops, and final destination, or the number of hours you need to book a ride" },
        { title: "Choose Vehicle For You", description: "Choose from a range of luxury cars and ride in elegance from our luxury car services with our high-end sedans, SUVs, and limousines from top brands like Mercedes, BMW, and Rolls-Royce, and enjoy a hassle-free ride with our luxury travel services." },
        { title: "Enjoy The Journey", description: "Finalize your booking and enjoy a hassle-free ride with our luxury travel services." },
    ];

    return (
        <div  className="work  text-white bg-dark md:mt-[-120px] mt-0 relative z-20  px-4">
            <div className="container">
                <div data-aos="fade-up" className="md:grid md:grid-cols-12 grid-cols-1 items-center gap-10">
                    <div className="work-text md:col-span-5 col-span-5 flex flex-col justify-center">
                        <h2 className="mb-5">How It Works</h2>
                        <div className="custom-dots  gap-2 mt-4">
                            {dotTexts.map((dot, index) => (
                                <button
                                    key={index}
                                    className={`max-w-[440px] block botton-nav mb-8 text-start ${currentSlide === index ? "bg-opacity-70" : "bg-opacity-30"
                                        }`}
                                    onClick={() => handleDotClick(index)}>
                                    <div className="flex gap-8">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-[21px] this-dot flex-none border-2 rounded-full  border-white h-[21px]"></div>
                                            <div className="w-[4px] this-line bg-white h-full rounded-full"></div>
                                        </div>
                                        <div className="">
                                            <h4 className="mb-3">{dot.title}</h4>
                                            <span className="body-text">{dot.description}</span>
                                        </div>

                                    </div>

                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="img-slider col-span-7">
                        <Slider ref={sliderRef} {...settings}>
                            {fleetData.map((fleet) => (
                                <div key={fleet.id}>
                                    <img src={fleet.image} className="w-full top-move" alt={fleet.name} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
