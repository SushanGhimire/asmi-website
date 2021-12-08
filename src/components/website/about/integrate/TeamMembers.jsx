import React, { useEffect, useState } from "react";
import AOS from "aos";
import CommonPopup from "../../../common/CommonPopup";
import MemberDetail from "./MemberDetail";
import { founders, teams, advisors } from "./teams";

function TeamMembers() {
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  const handleReadmore = (data) => {
    setDetail(data);
    setOpen(true);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <CommonPopup open={open} closeModal={closeModal} width="max-w-2xl">
        <MemberDetail detail={detail} closeModal={closeModal} />
      </CommonPopup>
      <div
        className="max-width my-20"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <div className="text-2xl sm:text-3xl md:text-4xl text-darkGray font-black mb-5 tracking-wide">
          Meet our talented team
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          {founders.map((data, index) => {
            const { name, position, img, description } = data;
            return (
              <div key={index} className="">
                <div className="w-full h-72 cursor-pointer">
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
                <p className={`text-paragraph animation line-clamp-3 mt-2`}>
                  {description}
                </p>
                <div
                  className="text-skyBlue cursor-pointer text-sm text-right"
                  onClick={() => {
                    handleReadmore(data);
                  }}
                >
                  read more
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-6">
          {teams.map((data, index) => {
            const { name, position, img, description } = data;
            return (
              <div key={index} className="">
                <div className="w-full h-72 2xl:h-96 relative team-section cursor-pointer">
                  <img
                    src={img}
                    className="w-full h-full object-cover object-top filter grayscale z-10 team-img"
                    alt={name}
                  />
                </div>
                <div className="mt-3 text-lg font-manrope text-darkGray font-medium">
                  {name}
                </div>
                <div className="text-sm text-paragraph">{position}</div>
                <p className={`text-paragraph animation line-clamp-3 mt-2`}>
                  {description}
                </p>
                <div
                  className="text-skyBlue cursor-pointer text-sm text-right"
                  onClick={() => {
                    handleReadmore(data);
                  }}
                >
                  read more
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-2xl sm:text-3xl md:text-4xl text-darkGray font-black mb-5 tracking-wide mt-8">
          Advisors
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-6">
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
    </>
  );
}

export default TeamMembers;
