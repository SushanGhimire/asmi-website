import React, { useEffect } from "react";
import AOS from "aos";
import wetv from "../../../../assets/images/wetv.png";
import sharechat from "../../../../assets/images/sharechat.svg";
import tencent from "../../../../assets/images/tencent.png";
import dreamsky from "../../../../assets/images/dreamsky.png";
import flipkart from "../../../../assets/images/flipkart.jpg";

function Partners() {
  let feature = [tencent, sharechat, wetv, dreamsky, flipkart];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-width mt-32">
      <div className="flex-1 " data-aos="fade-up" data-aos-duration="1000">
        <div className="grid sm:grid-cols-2 md:grid-cols-5  lg:grid-cols-6 gap-x-4 gap-y-6 place-content-center">
          <div className="sm:col-span-2  md:col-span-5 lg:col-span-1 flex items-center text-paragraph text-light justify-center">
            OUR PARTNERS
          </div>
          {feature.map((data, index) => {
            return (
              <div
                className="flex justify-center items-center opacity-40"
                key={index}
              >
                <img src={data} className="w-32 md:w-full" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Partners;
