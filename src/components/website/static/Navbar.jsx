import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
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
function Navbar() {
  const [activeRoute, setActiveRoute] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const mobileSidebar = useRef();
  const coverAll = useRef();
  const scrollToTop = () => window.scrollTo(0, 0);
  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 767 && width < 768) {
      setWidth(innerWidth);
    } else if (innerWidth < 768 && width > 767) {
      setWidth(innerWidth);
    }
  };
  // toggle in mobile
  const toggleMobileSidebar = () => {
    const sidebar = mobileSidebar.current;
    const coverall = coverAll.current;
    if (sidebar.clientWidth > 0) {
      sidebar.style.width = "0";
      coverall.style.display = "none";
    } else {
      sidebar.style.width = "288px";
      coverall.style.display = "block";
    }
  };
  useEffect(() => {
    let nav = window.location.pathname;
    if (nav === undefined) {
      setActiveRoute("/dashboard");
    } else {
      setActiveRoute(nav);
    }
    // console.log(nav);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });
  return (
    <div className="w-full bg-white sticky  top-0 z-50 ">
      <div className="max-width flex py-6 md:py-0 justify-between  items-center">
        <Link
          to="/"
          onClick={() => {
            scrollToTop();
            setActiveRoute("/");
          }}
        >
          <img src={logo} className="w-36" alt="" />
        </Link>
        {width < 768 && (
          <div>
            <svg
              className="w-9 h-9 text-darkGray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleMobileSidebar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        )}
        {/* routes  */}
        {width > 767 && (
          <div className="flex items-center space-x-10 text-paragraph">
            <ul className="flex space-x-10 items-center font-light">
              {routes.map((data, index) => {
                const { name, url } = data;
                return (
                  <li
                    key={index}
                    className={`hover:text-skyBlue animation py-6 border-b-2  hover:border-skyBlue ${
                      activeRoute === url
                        ? "border-skyBlue text-skyBlue"
                        : "border-white"
                    }`}
                  >
                    <Link to={url} onClick={() => setActiveRoute(url)}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* app  */}
            <div className="flex">
              <button
                className="bg-skyBlue text-white px-6 py-2 rounded"
                onClick={() => {
                  toggleMobileSidebar();
                  scrollToTop();
                  setActiveRoute("");
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
        {/* for ipads and mobiles */}
        {width < 768 && (
          <>
            <div
              className="h-screen w-screen fixed left-0 top-0 bg-black bg-opacity-50 hidden"
              ref={coverAll}
              onClick={toggleMobileSidebar}
            ></div>
            <div
              className="fixed top-0 left-0 h-screen w-0 z-20 bg-white text-black transition-all duration-300 overflow-hidden"
              ref={mobileSidebar}
            >
              <div className="w-72 flex flex-col px-8 ">
                <Link
                  to="/"
                  onClick={() => {
                    scrollToTop();
                    setActiveRoute("/");
                  }}
                >
                  <img src={logo} className="w-36 mx-auto py-6" alt="" />
                </Link>

                <div className="flex flex-col space-y-2 items-center">
                  {routes.map((list, index) => {
                    const { name, url } = list;
                    return (
                      <Link
                        className={`${
                          activeRoute === url
                            ? "text-skyBlue"
                            : "text-paragraph"
                        } hover:text-skyBlue  text-lg`}
                        key={index}
                        to={url}
                        onClick={() => {
                          toggleMobileSidebar();
                          scrollToTop();
                          setActiveRoute(url);
                        }}
                      >
                        {name}
                      </Link>
                    );
                  })}
                </div>
                <div className="flex justify-center mt-3">
                  <button
                    className="bg-skyBlue text-white px-6 py-2 rounded"
                    onClick={() => {
                      toggleMobileSidebar();
                      scrollToTop();
                      setActiveRoute("");
                    }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
