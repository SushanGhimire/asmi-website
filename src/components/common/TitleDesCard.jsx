import React, { useEffect } from "react";
import AOS from "aos";

function TitleDesCard({ head, title, des }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex-1 space-y-3">
      <header
        className="text-paragraph text-light text-center md:text-left text-sm sm:text-base"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {head}
      </header>
      <div
        className="flex justify-center md:justify-start"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <div
          className="text-3xl sm:text-4xl md:text-5xl font-black font-manrope text-darkGray sm:w-100 leading-loose text-center md:text-left"
          style={{
            lineHeight: "3.5rem",
          }}
        >
          {title}
        </div>
      </div>
      <p
        className="text-darkGray text-sm text-center md:text-left md:w-96"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {des}
      </p>
    </div>
  );
}

export default TitleDesCard;
