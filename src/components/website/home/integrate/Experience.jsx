import React, { useEffect, useState } from "react";
import AOS from "aos";
import good from "../../../../assets/images/good.png";
let cards = [
  {
    title: "Always Tuned",
    des: "Quis auctor elit sed vulputate mi sit amet magnis dis parturien.",
  },
  {
    title: "Privacy top-tier",
    des: "Quis auctor elit sed vulputate mi sit amet magnis dis parturien.",
  },
  {
    title: "Really, really Fast",
    des: "Quis auctor elit sed vulputate mi sit amet magnis dis parturien.",
  },
  {
    title: "Advanced Technology",
    des: "Quis auctor elit sed vulputate mi sit amet magnis dis parturien.",
  },
];
function Experience() {
  const [selected, setSelected] = useState("Always Tuned");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-lightGray py-32 mb-10">
      <div className="max-width">
        {/* head  */}
        <div className="">
          <header
            className="text-paragraph text-light text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            THAT’S SHARP
          </header>
          <div
            className=""
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-manrope w-full max-w-3xl mx-auto text-center text-darkGray  leading-snug">
              We aim to provide a compelling Experience
            </h1>
          </div>
        </div>
        <div
          className="md:flex md:space-x-10 items-center mt-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <div className="flex-1">
            <ul className="space-y-1">
              {cards.map((data, index) => {
                const { title, des } = data;
                return (
                  <li
                    key={index}
                    className={`${
                      title === selected && "bg-white  rounded-md shadow-lg"
                    }  p-5 flex flex-col space-y-1 text-paragraph cursor-pointer animation`}
                    onClick={() => setSelected(title)}
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
          <div className="flex-1 mt-5 md:mt-0">
            <img src={good} className="w-64 mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
