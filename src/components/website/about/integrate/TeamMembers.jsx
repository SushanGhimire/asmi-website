import React, { useEffect } from "react";
import AOS from "aos";
import sagar from "../../../../assets/images/teams/sagar.jpg";
import niten from "../../../../assets/images/teams/niten.jpg";
import sanjib from "../../../../assets/images/teams/sanjib.jpg";
import ashish from "../../../../assets/images/teams/asis.jpg";
import sajjan from "../../../../assets/images/teams/sajjan.jpg";
import sam from "../../../../assets/images/teams/sam.jpg";
import david from "../../../../assets/images/teams/david.jpeg";
import ruby from "../../../../assets/images/teams/ruby.jpg";
import ramzi from "../../../../assets/images/teams/ramzi.jpg";
import mark from "../../../../assets/images/teams/mark.jpg";
import rob from "../../../../assets/images/teams/rob.jpg";
import ravi from "../../../../assets/images/teams/ravi.jpg";
function TeamMembers() {
  let sauji = [
    {
      name: "Sam Thapaliya",
      img: sam,
      position: "Co-Founder",
    },
    {
      name: "David A. Thomas",
      img: david,
      position: "Co-Founder",
    },
    {
      name: "Sajjan Thapaliya",
      img: sajjan,
      position: "Co-Founder",
    },
  ];
  let teams = [
    {
      name: "Sagar Adhikari",
      img: sagar,
      position: "Engineer Manager/ DevOps",
    },
    {
      name: "Sanjib Raj Acharya",
      img: sanjib,
      position: "Full Stack/ Backend Engineer",
    },
    {
      name: "Ashish Shrestha",
      img: ashish,
      position: "Full Stack/ Frontend",
    },
    {
      name: "Niten Lama",
      img: niten,
      position: "AI Engineer",
    },
  ];
  let advisors = [
    {
      name: "Ruby Lu",
      img: ruby,
      position: ["Advisor", " Global Partnerships[Asia]"],
    },
    {
      name: "Ramzi Ramsey",
      img: ramzi,
      position: ["Advisor", " Go-To-Market"],
    },
    {
      name: "Mark Barnard",
      img: mark,
      position: ["Advisor", "Agency Partnership[US & Asia]"],
    },
    {
      name: "Rob Garrett",
      img: rob,
      position: ["Advisor", "Core Business Growth"],
    },
    {
      name: "Ravi Thomas",
      img: ravi,
      position: ["Advisor", "Engineering & Core Business"],
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-width my-20">
      <div
        className="text-2xl sm:text-3xl md:text-4xl text-darkGray font-black mb-5 tracking-wide"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        Meet our talented team
      </div>
      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {sauji.map((data, index) => {
          const { name, position, img } = data;
          return (
            <div key={index} className="">
              <div className="w-full h-72">
                <img
                  src={img}
                  className="w-full h-full object-cover object-top filter grayscale"
                  alt={name}
                />
              </div>
              <div className="mt-3 text-lg font-manrope text-darkGray font-medium">
                {name}
              </div>
              <div className="text-sm text-paragraph">{position}</div>
            </div>
          );
        })}
      </div>
      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        {teams.map((data, index) => {
          const { name, position, img } = data;
          return (
            <div key={index} className="">
              <div className="w-full h-72">
                <img
                  src={img}
                  className="w-full h-full object-cover object-top filter grayscale"
                  alt={name}
                />
              </div>
              <div className="mt-3 text-lg font-manrope text-darkGray font-medium">
                {name}
              </div>
              <div className="text-sm text-paragraph">{position}</div>
            </div>
          );
        })}
      </div>

      <div
        className="text-2xl sm:text-3xl md:text-4xl text-darkGray font-black mb-5 tracking-wide mt-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        Advisors
      </div>

      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        {advisors.map((data, index) => {
          const { name, position, img } = data;
          return (
            <div key={index} className="">
              <div className="w-full h-72">
                <img
                  src={img}
                  className="w-full h-full object-cover object-top filter grayscale"
                  alt={name}
                />
              </div>
              <div className="mt-3 text-lg font-manrope text-darkGray font-medium">
                {name}
              </div>
              <div className="text-sm text-paragraph flex flex-col">
                {position.map((data, index) => {
                  return <span key={index}>{data}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamMembers;
