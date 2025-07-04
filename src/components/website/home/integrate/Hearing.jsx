import React, { useEffect } from "react";
import AOS from "aos";
import TitleDesCard from "../../../common/TitleDesCard";
import shop from "../../../../assets/images/shop.png";

function Hearing() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-width relative my-20">
      <div className=" md:flex items-center md:space-x-10">
        <div
          className="flex-1"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <img src={shop} className="w-100 mx-auto" alt="" />
        </div>
        <div>
          <TitleDesCard
            // head="THAT’S COVERED"
            title="Instant Shoppable Content Using AI"
            des="Content and e-commerce can efficiently reach tomorrow's target using today's futuristic technology."
          />
          <ul
            className="mt-4 space-y-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <li className="flex items-center space-x-2">
              <span className="text-white bg-skyBlue rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-check h-7 w-7"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </span>
              <span className="text-light text-paragraph">
                Revenue Optimization
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-white bg-skyBlue rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-check h-7 w-7"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </span>
              <span className="text-light text-paragraph">
                Fast Integration
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-white bg-skyBlue rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-check h-7 w-7"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </span>
              <span className="text-light text-paragraph">
                Secure Encryption
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hearing;
