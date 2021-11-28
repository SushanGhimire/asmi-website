import React, { useEffect } from "react";
import community from "../../../../assets/images/community.png";
import AOS from "aos";
function Join() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-width my-10">
      <div className="bg-lightGray px-5 sm:px-10 md:px-16 py-10 md:py-0  md:flex items-center rounded-xl">
        <div className="text-darkGray md:w-96  space-y-3 ">
          {/* <header
            className="text-paragraph text-light text-left"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            DOWNLOAD OUR APP
          </header> */}
          <div
            className="text-4xl font-manrope font-black tracking-wide text-center md:text-left leading-snug"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Join The Biggest Community
          </div>
          <div
            className="flex justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <button className="px-6 py-2 bg-darkGray text-white rounded">
              Button
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={community} className="w-80 md:w-100 mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Join;
