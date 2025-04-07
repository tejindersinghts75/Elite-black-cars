"use client"
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const Region: React.FC = () => {
    const [scrollDirection, setScrollDirection] = useState<string>("");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="region py-20 px-4">
            <div className="container" data-aos="fade-up" >
                <div className="grid items-center gap-10 grid-cols-1 md:grid-cols-2">
                    <div
                        className={`region-images flex gap-4 transition-transform duration-500 `}
                    >
                        <div className="flex-1 w-full overflow-hidden rounded">
                            <img src="/images/region1.png" className={`rounded transition-transform duration-500 h-full ${scrollDirection === "down" ? "translate-y-5" : "-translate-y-5"
                                }`} alt="d" />
                        </div>
                        <div className="region-image2 flex gap-4 overflow-hidden rounded flex-col flex-1">
                            <img src="/images/region2.png" className={` rounded transition-transform duration-500 h-full ${scrollDirection === "down" ? "translate-y-5" : "-translate-y-5"
                                }`} alt="d" />
                            <img src="/images/region3.png" className={` rounded transition-transform duration-500 h-full ${scrollDirection === "down" ? "translate-y-5" : "-translate-y-5"
                                }`} alt="d" />
                        </div>
                    </div>
                    <div className="region-text md:ps-20">
                        <h2>From the region, for the region </h2>
                        <p className="my-6">
                        We provide <b>premium travel services</b> across <b> New York City and up to 300 miles beyond,</b> ensuring <b>luxury, comfort, and reliability</b> for every journey. Whether you need a<b> private chauffeur, long-distance cab, corporate travel, or airport transfer,</b> we cover key locations, including:
                       <br/><br/> New York City | Philadelphia | Boston | Washington D.C. | Baltimore | Albany | Hartford | Syracuse | Pittsburgh | Buffalo
                        </p>
                        <button className="flex items-center gap-2 bg-dark text-white hover:bg-orange ease-in duration-300 rounded py-4 px-8 font-semibold">
                            View All Cities <GoArrowUpRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Region;
