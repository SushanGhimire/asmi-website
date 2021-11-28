import React, { useEffect } from "react";
import AOS from "aos";
import TitleDesCard from "../../../common/TitleDesCard";
import best from "../../../../assets/images/best2.png";
function MultipleProduct() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-width relative mt-20">
      <div className=" md:flex items-center md:space-x-10">
        <TitleDesCard
          // head="THAT’S GREAT"
          title="Multiple products are shoppable from same video"
          des="Now, viewers with diverse shopping behavior are able to be targeted uniquely by incorporating AI."
        />
        <div
          className="flex-1"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <img src={best} className="w-100 mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MultipleProduct;
