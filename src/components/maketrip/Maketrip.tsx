import React from "react";
import { FaCommentDollar,FaCar } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

import MaketripBox from "./MaketripBox";

const Maketrip = () => {
  const maketripData = [
    {
      id: 1,
      icon: IoShieldCheckmarkSharp,
      title: "Safety First",
      description:
        "We believe that <b>luxury and safety </b> are closely correlated to each other. That’s why we prioritize  <b> top-tier safety standards  </b>",
    },
    {
      id: 2,
      icon: FaCommentDollar,
      title: "Prices With No Surprises",
      description:
        "At <b> Elite B Car, </b> we believe in <b> honest pricing with no hidden fees </b>. Whether you're booking a luxury sedan for a business trip or a premium SUV ",
    },
    {
      id: 3,
      icon: FaCar,
      title: "High-End Private Transfers",
      description:
        "With Elite B car, Experience  <b>exclusive, hassle-free travel  </b> with our <b> private luxury  </b> car services to match your needs.",
    },
  ];

  return (
    <div className="maketrip py-16 md:py-20 px-4">
      <div data-aos="fade-up"  className="container">
        <h2 className="text-center mb-8 md:mb-12">Discover the joy of premium travel with us</h2>
        <div className="grid gap-10 md:grid-cols-3 grid-cols-1">
          {maketripData.map((item) => (
            <MaketripBox
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maketrip;
