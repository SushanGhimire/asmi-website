import React, { useEffect } from "react";
import AOS from "aos";
function PageHeader({ head, title, des }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-lightGray">
      <div className="max-width py-20">
        <div className="flex-1 space-y-3 ">
          <header
            className="text-paragraph text-light text-center  text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {head}
          </header>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div
              className="text-3xl sm:text-4xl md:text-5xl font-black font-manrope text-darkGray  leading-loose text-center "
              style={{
                lineHeight: "3.5rem",
              }}
            >
              {title}
            </div>
          </div>
          <p
            className="text-darkGray md:text-lg text-center w-full max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
