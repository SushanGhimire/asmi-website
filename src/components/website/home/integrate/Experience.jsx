import React, { useEffect, useState } from "react";
import AOS from "aos";
import good from "../../../../assets/images/good.png";
import tune from "../../../../assets/images/tune.svg";
import privacy from "../../../../assets/images/privacy.svg";
import really from "../../../../assets/images/really.svg";
import tech from "../../../../assets/images/tech.svg";
let cards = [
  {
    title: "Always Tuned",
    des: "Never miss out on the opportunity to sell today’s hottest e-commerce.",
    logo: tune,
  },
  {
    title: "Privacy top-tier",
    des: "Secure cloud ecosystem to protect your user’s data.",
    logo: privacy,
  },
  {
    title: "Really, really Fast",
    des: "Implement a few lines of a code and start running today.",
    logo: really,
  },
  {
    title: "Advanced Technology",
    des: "No heavy lift from your AI division, we solved the problem.",
    logo: tech,
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
                const { title, des, logo } = data;
                return (
                  <li
                    key={index}
                    className={`${
                      title === selected && "bg-white  rounded-md shadow-lg"
                    }  p-5 flex items-center space-x-4 text-paragraph cursor-pointer animation`}
                    onClick={() => setSelected(title)}
                  >
                    <span>
                      <img src={logo} className="w-full" alt="" />
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
            <img src={good} className="w-64 mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
