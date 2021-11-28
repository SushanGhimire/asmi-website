import React, { useEffect } from "react";
import AOS from "aos";
import sagar from "../../../../assets/images/teams/sagar.jpg";
import niten from "../../../../assets/images/teams/niten.jpg";
import sanjib from "../../../../assets/images/teams/sanjib.jpg";
import ashish from "../../../../assets/images/teams/ashish.jpg";
import sajjan from "../../../../assets/images/teams/sajjan.jpg";
import sam from "../../../../assets/images/teams/sam.jpg";
import david from "../../../../assets/images/teams/david.jpeg";
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
      position: "Engineer",
    },
    {
      name: "Sanjib Raj Acharya",
      img: sanjib,
      position: "Engineer",
    },
    {
      name: "Ashish Shrestha",
      img: ashish,
      position: "Engineer",
    },
    {
      name: "Niten Lama",
      img: niten,
      position: "Engineer",
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
    </div>
  );
}

export default TeamMembers;
