import React, { useEffect } from "react";
import AOS from "aos";
import frontpage from "../../../../assets/images/frontpage.png";
import bgBlur from "../../../../assets/images/bgBlur.png";
import { Link } from "react-router-dom";
function Frontpage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-width flex flex-col mt-10">
      <div className="md:flex items-center md:space-x-10 py-10">
        <div className="flex-1 space-y-3">
          <header
            className="text-paragraph text-light text-center md:text-left text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            CONTENT MONETIZATION FROM DAY 1
          </header>
          <div
            className="flex justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <h1 className="text-4xl md:text-5xl font-black font-manrope text-darkGray  leading-snug text-center md:text-left">
              One View. One Click.
              <br />
              Simple Purchase
            </h1>
          </div>
          <p
            className="text-darkGray text-sm text-center md:text-left"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            ASMI New In-Video Commerce API brings the new age results to today's
            biggest content platforms.
          </p>
          <div
            className="flex justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <Link
              to="/contact-us"
              className="px-6 py-2 bg-darkGray text-white rounded"
            >
              Easy Free Demo
            </Link>
          </div>
        </div>
        <div
          className="flex-1 relative mt-16 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          {/* image  */}
          <img src={bgBlur} alt="" />
          <img
            src={frontpage}
            className="absolute top-5 sm:top-20 md:-top-10 right-5 sm:right-32  md:right-10 w-44 sm:w-64 lg:w-80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
