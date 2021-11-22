import React, { useEffect } from "react";
import AOS from "aos";
import TitleDesCard from "../../../common/TitleDesCard";
import good from "../../../../assets/images/good.png";
let cards = [
  {
    title: "Advanced Communication",
    des: "Quis auctor elit sed vulputate mi sit amet magnis dis parturien.",
  },
  {
    title: "Advanced Communication",
    des: "Quis auctor elit sed vulputate mi sit amet magnis dis parturien.",
  },
];
function Hearing2() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-width relative my-20">
      <div className=" md:flex items-center md:space-x-10">
        <div>
          <TitleDesCard
            head="THAT’S NEW"
            title="That’s so good hearing this"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          />
          <ul
            className="mt-4 space-y-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            {cards.map((data, index) => {
              const { title, des } = data;
              return (
                <li
                  key={index}
                  className={`p-5 flex flex-col space-y-1 text-paragraph cursor-pointer animation`}
                >
                  <span className="font-black font-manrope text-darkGray tracking-wider">
                    {title}
                  </span>
                  <span className="text-sm pr-10">{des}</span>
                </li>
              );
            })}
          </ul>
        </div>
        {/* img  */}
        <div
          className="flex-1"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <img src={good} className="w-64 mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hearing2;
