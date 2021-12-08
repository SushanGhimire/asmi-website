import React from "react";

function MemberDetail({ detail, closeModal }) {
  const { name, position, img, description } = detail;
  return (
    <div className="sm:flex">
      <div className="w-full h-64 sm:h-auto sm:w-64">
        <img
          src={img}
          className="w-full h-full object-cover  filter grayscale"
          alt=""
        />
      </div>
      <div className="flex-1 px-5 py-8 relative">
        <span
          className="text-paragraph absolute top-2 right-2 cursor-pointer"
          onClick={closeModal}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div className=" text-lg font-manrope text-darkGray font-medium">
          {name}
        </div>
        <div className="text-sm text-paragraph">{position}</div>
        <p className={`text-paragraph animation mt-2 text-justify text-sm`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default MemberDetail;
