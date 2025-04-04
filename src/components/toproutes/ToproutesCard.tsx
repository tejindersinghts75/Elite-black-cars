import React from 'react';
import { FaRightLeft } from "react-icons/fa6";

type ToproutesCardProps = {
    City1: string;
    City2: string;
    image: string;
};

const ToproutesCard: React.FC<ToproutesCardProps> = ({ City1, City2, image }) => {
    return (

        <div className='ToproutesCard bg-[#cccccc59] overflow-hidden rounded-md'>
            <div className='image'>
                <img src={image} alt="" />
            </div>
            <div className='city p-4 flex justify-around font-semibold'>
                <p>{City1}</p><span className='text-orange '><FaRightLeft /></span><p>{City2}</p>
            </div>
        </div>

    );
}

export default ToproutesCard;
