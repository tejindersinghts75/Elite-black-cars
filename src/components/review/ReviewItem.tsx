import React from "react";

type Reviewprop ={
    name:string,
    position:string,
    review:string,
    avatar:string,
    stars:string
}

const ReviewItem: React.FC<Reviewprop> =  ({ name, position, review, avatar, stars }) => {
  return (
    <div className="review-items">
      <div className="review-info flex items-center gap-3">
        <img src={avatar} className="w-[70px]" alt={`${name}'s avatar`} />
        <div>
          <p className="body-text mb-1">
            <b>{name}</b>
          </p>
          <p className="body-text">{position}</p>
          
        </div>
      </div>

      <img src={stars} className="my-6" alt="Stars rating" />

      <div dangerouslySetInnerHTML={{ __html: review }} className="md:text-[24px] text-[18px] max-w-[420px] font-semibold">
     
      </div>
    </div>
  );
};

export default ReviewItem;
