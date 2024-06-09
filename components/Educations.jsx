import React from "react";
import Link from "next/link";

const Educations = () => {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-3xl text-white">
          Where did I studied
        </h1>
      </div>
      <div className="overflow-hidden pt-5">
        <Link
          href="https://www.northsouth.edu/"
          target="_blank"
          className="text-white font-semibold"
        >
          <h3 className="font-medium text-lg">North South University</h3>
        </Link>
        <div className="flex space-x-2 divide-x-2 divide-gray 300 text-white items-center">
          <div className="flex space-x-2 flex-shrink-0 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-opacity-25">2019 -</span>
          </div>
          <div className="pl-2 truncate text-opacity-20">
            Bsc. in Computer Science and Engineering
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
