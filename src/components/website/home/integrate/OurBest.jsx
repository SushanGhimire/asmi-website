import React, { useEffect } from "react";
import AOS from "aos";
import TitleDesCard from "../../../common/TitleDesCard";
import best from "../../../../assets/images/best.png";
function OurBest() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-width relative mt-20">
      <div className=" md:flex items-center md:space-x-10">
        <TitleDesCard
          head="THAT’S GREAT"
          title="That’s our best great benefit"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        />
        <div
          className="flex-1"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <img src={best} className="w-72 mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurBest;
