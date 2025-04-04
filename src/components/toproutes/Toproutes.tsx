import React from 'react';
import ToproutesCard from './ToproutesCard';
const Toproutesdata = [
    {
        id: 1,
        City1: "JKF",
        City2: "NYC",
        image: "/images/news1.jpg"

    },
    {
        id: 2,
        City1: "JKF",
        City2: "NYC",
        image: "/images/news1.jpg"

    },
    {
        id: 3,
        City1: "JKF",
        City2: "NYC",
        image: "/images/news1.jpg"

    },
    {
        id: 4,
        City1: "JKF",
        City2: "NYC",
        image: "/images/news1.jpg"

    }
]
const Toproutes = () => {
    return (
        <div className='Toproutes  px-4 md:py-20 py-10' data-aos="fade-up">
            <div className='container'>
                <h2 className='text-center md:mb-10 mb-5'>Top  NY City Routes</h2>
                <div className='grid md:grid-cols-4 gap-4'>
                    {Toproutesdata.map((Toproutesmap) => (
                        <ToproutesCard
                            key={Toproutesmap.id}
                            image={Toproutesmap.image}
                            City1={Toproutesmap.City1}
                            City2={Toproutesmap.City2}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Toproutes;
