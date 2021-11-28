import React, { useEffect } from "react";
import powerful from "../../../../assets/images/powerful.png";
import powerfulfeature from "../../../../assets/images/powerful-feature.png";
import fast from "../../../../assets/images/fast.svg";
import ai from "../../../../assets/images/ai.svg";
import AOS from "aos";
function PowerfulFeature() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-width my-10">
      <div
        className="text-3xl sm:text-4xl md:text-5xl text-darkGray font-black mb-5 tracking-wide"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        Powerful Features
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="sm:col-span-2 space-y-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="gradient px-10 py-10 rounded-xl sm:flex relative">
            <div className="text-white sm:w-64 ">
              <span className="">
                <img
                  src={powerful}
                  className="w-16 rounded-lg p-3 mx-auto sm:mx-0"
                  alt=""
                  style={{
                    backgroundColor: "#96B6FA",
                  }}
                />
              </span>
              <div className="text-2xl font-black tracking-wide text-center sm:text-left mt-5">
                ASMI Product Recommendation API
              </div>
              <p className="text-sm text-center sm:text-left mt-2">
                Connecting 10M+ of products across e-commerce hubs to the
                leading content platforms.
              </p>
            </div>
            <div className="flex-1 ">
              <img src={powerfulfeature} className="w-64 mx-auto" alt="" />
            </div>
          </div>
          <div
            className="grid sm:grid-cols-2 gap-6 "
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="flex flex-col space-y-2 bg-white rounded-md shadow-md p-5">
              <span className="rounded-lg block">
                <img
                  src={fast}
                  className="w-16 rounded-lg p-2"
                  style={{
                    backgroundColor: "#F87B99",
                  }}
                  alt=""
                />
              </span>
              <span className="text-2xl font-black tracking-wide font-manrope text-darkGray">
                Fastest Integration
              </span>
              <span className="text-sm text-paragraph">
                Few lines of code and any content platform starts selling
                products from around the world.
              </span>
            </div>
            <div className="flex flex-col space-y-2 bg-white rounded-md shadow-md p-5">
              <span className="rounded-lg block">
                <img
                  src={ai}
                  className="w-16 rounded-lg p-2"
                  style={{
                    backgroundColor: "#7E92FB",
                  }}
                  alt=""
                />
              </span>
              <span className="text-2xl font-black tracking-wide font-manrope text-darkGray">
                The Best AI Tools
              </span>
              <span className="text-sm text-paragraph">
                Inventory stays fresh and up-to date allowing for smooth-UX.
              </span>
            </div>
          </div>
        </div>
        <div
          className="px-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-black tracking-wide font-manrope text-darkGray">
              Content Platforms and E-commerce Have Never Been This In-Sync!
            </span>
            {/* <span className="text-sm text-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PowerfulFeature;
