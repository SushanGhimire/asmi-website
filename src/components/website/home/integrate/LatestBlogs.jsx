import React, { useEffect } from "react";
import AOS from "aos";
// import b1 from "../../../../assets/images/b1.jpg";
// import b2 from "../../../../assets/images/b2.jpg";
function LatestBlogs() {
  let card = [
    {
      date: "May 20, 2021,04:04pm",
      title: "Adapting E-Commerce Practices From The East To The West",
      link: "https://www.forbes.com/sites/tomokoyokoi/2021/05/20/adapting-e-commerce-practices-from-the-east-to-the-west/?sh=6d575cf3edf2",
      img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60a6b9f8f60bae0680987aae%2FYoung-Asian-women-showing-clothes-and-sale-online-on-social-with-smartphone-to%2F960x0.jpg%3Ffit%3Dscale",
      aos: "fade-down",
    },
    {
      date: "Jul 15, 2021,07:20am",
      title:
        "Entertainment Commerce Platforms Are Revolutionizing The Shopping Experience",
      link: "https://www.forbes.com/sites/forbestechcouncil/2021/07/15/entertainment-commerce-platforms-are-revolutionizing-the-shopping-experience/?sh=1a8606e71c48",
      img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f919dc211d63f1fe3ecbc2f%2FBlogger-live-streaming%2F960x0.jpg%3Ffit%3Dscale",
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
        Latest News
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 mt-5">
        {card.map((data, index) => {
          const { date, title, img, aos, link } = data;
          return (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
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
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default LatestBlogs;
