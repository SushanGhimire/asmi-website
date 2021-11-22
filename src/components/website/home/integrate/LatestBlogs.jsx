import React, { useEffect } from "react";
import AOS from "aos";
import b1 from "../../../../assets/images/b1.jpg";
import b2 from "../../../../assets/images/b2.jpg";
function LatestBlogs() {
  let card = [
    {
      date: "August 30, 2021",
      title: "How we improved team collaboration through high-fidelity mockups",
      img: b1,
      aos: "fade-down",
    },
    {
      date: "June 10, 2021",
      title:
        "Have a look inside our design department and evaluate our improvement",
      img: b2,
      aos: "fade-up",
    },
  ];
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
        Latest Blogs & News
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 mt-5">
        {card.map((data, index) => {
          const { date, title, img, aos } = data;
          return (
            <div
              className="h-96 rounded-xl relative overflow-hidden"
              key={index}
              data-aos={aos}
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <img src={img} className="w-full h-full object-cover " alt="" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute bottom-5 left-0 px-5">
                <div className="text-sm text-white font-bold font-manrope tracking-wider">
                  {date}
                </div>
                <div className="text-white text-xl tracking-wider mt-2 font-semibold font-manrope">
                  {title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LatestBlogs;
