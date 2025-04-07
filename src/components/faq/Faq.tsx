"use client";
import React, { useState } from "react";
import './faq.css'
const FaqItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void
}> = ({ question, answer, isOpen, onClick }) => (
    <div className="faq-item border-b  border-gray py-6">
        <div
            className="faq-question cursor-pointer flex gap-10 justify-between items-center"
            onClick={onClick}
        >
            <h4 className=" font-semibold w-[80%]">{question}</h4>
            <span className="text-[25px] flex items-center justify-center rounded-full border-2 border-dark h-[30px] w-[30px]">{isOpen ? "-" : "+"}</span>
        </div>
        <div
            className={`faq-answer transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
        >
            <div className="mt-2 body-text" dangerouslySetInnerHTML={{ __html: answer }} />

            {/* <p >{answer}</p> */}
        </div>
    </div>
);

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqData = [
        {
            question: "What services does your Elite B Cars offer?",
            answer: `Elite B Car provides premium private travel solutions tailored for luxury, comfort, and convenience. Our services include: <br/>
           <b> Luxury Chauffeur Services </b> – Professional drivers for business and leisure travel<br/>
            <b> Airport Transfers</b> – Hassle-free pickups and drop-offs at major airports<br/>
             <b> Corporate Travel Solutions</b> – Executive rides for business meetings & events<br/>
             <b> Long-Distance Private Rides</b> – Comfortable travel up to 300 miles from New York<br/>
             <b> Hourly & Full-Day Rentals</b> – Flexible travel options for any occasion<br/><br/>
             <b> Special Event Transportation</b> – Weddings, parties, VIP events & more`
        },
        {
            question: "What areas do you serve?",
            answer:
                "We provide <b>private travel  solutions</b> from <b> New York City</b> to destinations within a <b>300-mile radius, </b> including<b> Philadelphia, Boston, Washington D.C., and more.</b>",
        },
        {
            question: "What types of vehicles do you offer?",
            answer:
                "Our fleet includes <b>luxury sedans, SUVs, chauffeur-driven executive cars, and premium long-distance cabs </b>to ensure a<b> comfortable and stylish journey.</b>",
        },
        {
            question: "How do I book a ride?",
            answer:
                "Booking is simple! Just visit our<b> website, call us, or use our mobile app </b>to schedule your ride in minutes.",
        },
        {
            question: "Are your services available 24/7?",
            answer:
                "Yes! Our <b>executive travel services</b> cater to<b> corporate clients</b>, providing <b>professional, punctual, and luxurious rides</b> for business meetings, events, and airport transfers.",
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    return (
        <div className="faq  px-4 py-14 md:py-28">
            <div className="max-w-[780px] mx-auto " data-aos="fade-up">
                <h2 className="mb-10 text-center">Frequently Asked Questions  </h2>
                <div className="faq-list grid ">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Faq;
