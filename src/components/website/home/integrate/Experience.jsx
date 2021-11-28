import React, { useEffect, useState } from "react";
import AOS from "aos";
import experience from "../../../../assets/images/experience.png";
import bell from "../../../../assets/images/bell.svg";
import peerprivacy from "../../../../assets/images/peer-privacy.svg";
import fast from "../../../../assets/images/fast.svg";
import technology from "../../../../assets/images/technology.svg";
let cards = [
  {
    title: "Always Tuned",
    des: "Never miss out on the opportunity to sell today’s hottest e-commerce.",
    logo: bell,
    color: "#8FA7F8",
  },
  {
    title: "Privacy top-tier",
    des: "Secure cloud ecosystem to protect your user’s data.",
    logo: peerprivacy,
    color: "#95E4E9",
  },
  {
    title: "Really, really Fast",
    des: "Implement a few lines of a code and start running today.",
    logo: fast,
    color: "#BA9FFD",
  },
  {
    title: "Advanced Technology",
    des: "No heavy lift from your AI division, we solved the problem.",
    logo: technology,
    color: "#FDBFE9",
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
          {/* <header
            className="text-paragraph text-light text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            THAT’S SHARP
          </header> */}
          <div
            className=""
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black font-manrope w-full max-w-3xl mx-auto text-center text-darkGray"
              style={{
                lineHeight: "3.5rem",
              }}
            >
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
                const { title, des, logo, color } = data;
                return (
                  <li
                    key={index}
                    className={`${
                      title === selected && "bg-white  rounded-md shadow-lg"
                    }  p-5 flex items-center space-x-4 text-paragraph cursor-pointer animation`}
                    onClick={() => setSelected(title)}
                  >
                    <span
                      style={{
                        backgroundColor: color,
                      }}
                      className="p-3 rounded-lg"
                    >
                      <img src={logo} className="w-10" alt="" />
                    </span>
                    <div className="flex flex-col space-y-1">
                      <span className="font-black font-manrope text-darkGray tracking-wider">
                        {title}
                      </span>
                      <span className="text-sm pr-10">{des}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 mt-5 md:mt-0">
            <img src={experience} className="w-100 mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
