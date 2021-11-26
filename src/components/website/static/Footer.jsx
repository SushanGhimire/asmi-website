import React from "react";
import logo from "../../../assets/images/logo.png";
import fb from "../../../assets/images/fb.svg";
import insta from "../../../assets/images/insta.svg";
import twitter from "../../../assets/images/twitter.svg";
let routes = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Features",
    url: "/features",
  },
];
function Footer() {
  const social = [
    {
      logo: fb,
      link: "https://www.facebook.com",
    },
    {
      logo: insta,
      link: "https://www.instagram.com",
    },
    {
      logo: twitter,
      link: "https://www.twitter.com",
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="max-width px-4 py-20">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 border-b border-border pb-10">
          {/* logo */}
          <div className="lg:col-span-2">
            {/* img  */}
            <div>
              <img src={logo} className="w-32 mx-auto md:mx-0" alt="" />
            </div>
            <p className="mt-3 font-manrope text-sm lg                  :text-base text-center md:text-left">
              The pain itself is the main reason why the pain is important
            </p>
          </div>
          {/* routs  */}
          <div className="flex justify-center">
            <div>
              <div className="text-xl font-manrope text-paragraph font-medium">
                MENU
              </div>
              <ul className="space-y-2 mt-2 text-lg ">
                {routes.map((data, index) => {
                  const { name, url } = data;
                  return (
                    <li
                      key={index}
                      className="text-paragraph hover:text-darkGray animation"
                    >
                      <a href={url}>{name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* social  */}
          <div className="flex justify-center">
            <div>
              <div className="text-xl font-manrope text-paragraph font-medium text-center mb-3">
                SOCIAL
              </div>
              <div className="flex items-center space-x-2">
                {social.map((data, index) => {
                  const { logo, link } = data;
                  return (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-skyBlue rounded-full p-2 animation transform hover:scale-110"
                      key={index}
                    >
                      <img src={logo} className="w-6" alt="" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 text-center md:text-left">
          <span>All Right Reserved &copy; {new Date().getFullYear()}</span>
          <span className="text-skyBlue ml-3">ASMI Corp.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
