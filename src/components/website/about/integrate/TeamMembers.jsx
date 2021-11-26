import React, { useEffect } from "react";
import AOS from "aos";
function TeamMembers() {
  let teams = [
    {
      name: "Srijan Pokhrel",
      img: "https://images.unsplash.com/photo-1594759845217-e9c99af2b6a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80",
      position: "Backend Developer",
    },
    {
      name: "Jabir Khan",
      img: "https://images.unsplash.com/photo-1637476894790-38ae46124a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      position: "CEO",
    },
    {
      name: "Raghib Islam",
      img: "https://images.unsplash.com/photo-1637479544091-6cd628f71674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      position: "CTO",
    },
    {
      name: "Sushan Ghimire",
      img: "https://images.unsplash.com/photo-1626044843054-6b7abf3a3534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      position: "Frontend Developer",
    },
    {
      name: "Aabiskar Joshi",
      img: "https://images.unsplash.com/photo-1632958983989-49773325c326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      position: "Frontend Developer",
    },
    {
      name: "Ashish Shrestha",
      img: "https://images.unsplash.com/photo-1610419923009-f0a50c304f10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      position: "Fullstack Developer",
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
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
        {teams.map((data, index) => {
          const { name, position, img } = data;
          return (
            <div key={index} className="">
              <div className="w-full h-72">
                <img
                  src={img}
                  className="w-full h-full object-cover object-top"
                  alt=""
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
