import React, { useEffect } from "react";
import AOS from "aos";
import sagar from "../../../../assets/images/teams/sagar.jpg";
import niten from "../../../../assets/images/teams/niten.jpg";
import sanjib from "../../../../assets/images/teams/sanjib.jpg";
import ashish from "../../../../assets/images/teams/asis.jpg";
import sajjan from "../../../../assets/images/teams/sajjan.jpg";
import sam from "../../../../assets/images/teams/sam.jpg";
import david from "../../../../assets/images/teams/david.jpeg";
import ruby from "../../../../assets/images/teams/ruby.jpg";
import ramzi from "../../../../assets/images/teams/ramzi.jpg";
import mark from "../../../../assets/images/teams/mark.jpg";
import rob from "../../../../assets/images/teams/rob.jpg";
import ravi from "../../../../assets/images/teams/ravi.jpg";
import san from "../../../../assets/images/teams/san.jpg";
import roshan from "../../../../assets/images/teams/roshan.jpg";
import pd from "../../../../assets/images/teams/pd.jpg";
import simon from "../../../../assets/images/teams/simon.png";
import gaurav from "../../../../assets/images/teams/gaurab.jpg";
import bigyan from "../../../../assets/images/teams/bigyan.jpg";
import rk from "../../../../assets/images/teams/rk.jpg";
import mohit from "../../../../assets/images/teams/mohit.jpg";
import raghibi from "../../../../assets/images/teams/raghib.jpg";
import jabir from "../../../../assets/images/teams/jabir.jpg";

function TeamMembers() {
  let founders = [
    {
      name: "Sam Thapaliya",
      img: sam,
      position: "Co-Founder",
      title: "President",
    },
    {
      name: "David A. Thomas",
      img: david,
      position: "Co-Founder",
      title: "Head of Operations",
    },
    {
      name: "Sajjan Thapaliya",
      img: sajjan,
      position: "Co-Founder",
      title: "Head of Product",
    },
  ];
  let teams = [
    {
      name: "Sagar Adhikari",
      img: sagar,
      position: "Engineer Manager/AI Engineer",
      description:
        "Hi, this is Sagar. I plan, coordinate and oversee the technical and engineering activities in the organisation facillitating the product development and integration with clients. For fun, I love to read.",
    },
    {
      name: "Sanjib Raj Acharya",
      img: sanjib,
      position: "Full Stack - Backend",
      description:
        "Hi. My name is Sanjib Acharya. With 4 years of experience in software development, I am working as a Backend Engineer in ASMI while I assist the team with system architecture, data storage and management.",
    },
    {
      name: "Niten Lama",
      img: niten,
      position: "AI Engineer",
      description:
        "Hi, myself Niten and I've been working as an AI Engineer at ASMI since past 2 years. I have a combined knowledge of Computer Vision and Machine Learning techniques and I mainly enjoy solving vision related challenges, basically anything that requires processing and extracting essential information related to visual data. I love to sing and I'm also into drumming.",
    },
    {
      name: "Gaurab Subedi",
      img: gaurav,
      position: "AI Engineer",
      description:
        "Hello, I am Gaurab Subedi. I hold a BE degree in computer engineering from Tribhuvan University. In ASMI, I am working as an AI Engineer and Researcher having two years of experience. I have knowledge of machine learning and computer vision and carry out research work for the company. In my free time, I love to travel and listen to music. ",
    },
    {
      name: "Prakash Dahal",
      img: pd,
      position: "AI Engineer",
      description:
        "Hi, I am Prakash. I am working as a Data Scientist for more than a year. My primary task is to collect and handle large volume of data and to ensure the high quality of data by different methods of data validation and preprocessing techniques.",
    },
    {
      name: "Bigyan Subedi",
      img: bigyan,
      position: "AI Engineer",
      description:
        "Hi, I am Bigyan. I am working as AI Engineer at ASMII for more than a year. I have been carrying out AI model development and research  work for the company",
    },
    {
      name: "Roshan Shrestha",
      img: roshan,
      position: "AI Engineer",
      description:
        "Hey, I am Roshan Shrestha. I hold a BSC (Hons) degree in computer science. I am working as a Data Scientist at ASMII for more than a year now. I enjoy playing football with my buddies on weekends.",
    },
    {
      name: "Simon Tamang",
      img: simon,
      position: "UI/UX Designer",
      description:
        "Hi, this is Simon, who works as a UI/UX designer in ASMI with more than three years of experience. In my free time, I like to listen to music.",
    },
    {
      name: "Ram Krishna Lamichhane",
      img: rk,
      position: "Developer",
      description:
        "Software engineer with more than 4 years of experience in building highly scalable system and AI pipelines.",
    },
    {
      name: "Sangam Man Buddhacharya",
      img: san,
      position: "AI Engineer",
      description:
        "Hi! I'm 'San'. I have been working for a year as an AI Engineer, I am passionate and dedicated learner, willing to solve real-world problems using data, computer vision, and machine learning models. I design AI models and implement different computer vision algorithms to meet the requirements of the projects. Besides my career, my hobbies are flying drones, playing guitar, listening music, reading books, and so on. At last, I do the work I do because I love it.",
    },
    {
      name: "Mohit Thapa",
      img: mohit,
      position: "Quality Assurance",
      description:
        "Hello. Myself, Mohit. I inspect product usage from client's perpective and comply with the company's quality assurance standards. On weekends,I enjoy bike riding.",
    },
    {
      name: "Ashish Shrestha",
      img: ashish,
      position: "Full Stack - Frontend",
      description:
        "I am working as  Frontend && Backend Engineer in ASMI while I assist the team with system architecture, data storage and management.",
    },
    {
      name: "Raghib Islam",
      img: raghibi,
      position: "Full Stack - Frontend / Backend",
      description:"Full Stack engineer with more than two years of experience in frontend & backend technology. At ASMI I work in frontend/backend stuffs.",
    },
    {
      name: "Jabir Hussain",
      img: jabir,
      position: "Security Researcher",
      description:
        "I inspect product security vulnerability , monitor and secure the product , lower malware treats and cyber attacks.",
    },
  ];
  let advisors = [
    {
      name: "Ruby Lu",
      img: ruby,
      position: ["Advisor", " Global Partnerships[Asia]"],
    },
    {
      name: "Ramzi Ramsey",
      img: ramzi,
      position: ["Advisor", " Go-To-Market"],
    },
    {
      name: "Mark Barnard",
      img: mark,
      position: ["Advisor", "Agency Partnership[US & Asia]"],
    },
    {
      name: "Rob Garrett",
      img: rob,
      position: ["Advisor", "Core Business Growth"],
    },
    {
      name: "Ravi Thomas",
      img: ravi,
      position: ["Advisor", "Engineering & Core Business"],
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
        {founders.map((data, index) => {
          const { name, position, img, title } = data;
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
              <div className="text-sm text-paragraph">{title}</div>
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
          const { name, position, img, description } = data;
          return (
            <div key={index} className="">
              <div className="w-full h-72 2xl:h-96 relative team-section cursor-pointer">
                <div className="absolute bottom-0 animation text-sm text-justify team-description z-20 overflow-hidden">
                  <span className="px-2">{description}</span>
                </div>
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
            </div>
          );
        })}
      </div>

      <div
        className="text-2xl sm:text-3xl md:text-4xl text-darkGray font-black mb-5 tracking-wide mt-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        Advisors
      </div>

      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
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
  );
}

export default TeamMembers;
