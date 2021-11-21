import React, { useEffect } from "react";
import AOS from "aos";
import l1 from "../../../../assets/images/l1.svg";
import l2 from "../../../../assets/images/l2.svg";
import l3 from "../../../../assets/images/l3.svg";

function Feature() {
  let feature = [l1, l2, l3];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-width mt-32">
      <div className="flex-1 " data-aos="fade-up" data-aos-duration="1000">
        <div className="grid  md:grid-cols-4 gap-x-4 gap-y-6 place-content-center">
          <div className="flex items-center text-paragraph text-light text-center">
            FEATURED ON
          </div>
          {feature.map((data, index) => {
            return (
              <div className="" key={index}>
                <img src={data} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Feature;
