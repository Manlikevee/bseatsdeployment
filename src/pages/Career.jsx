import React from "react";
import Search from "../assets/Career/search.svg";
import Illustration from "../assets/Career/emptyjobsillustration.svg";
import Location from "../assets/Career/location.svg";

const Career = () => {
  return (
    <div>
      <div className="career relative h-[350px] overflow-hidden flex items-center justify-center">
        <div className="bg-[#0000004A] h-full w-full top-0 absolute z-0"></div>
        <div className="bg-[#0000007A] h-[76px] w-full bottom-0 absolute z-0 text-white flex items-center justify-center">
          <img src={Search} alt="" width={20} />
          <p className="ml-2">Search job openings, eg. “manager”</p>
        </div>
        <h4 className="z-20 text-white text-[35px] md:text-[64px] font-semibold">
          Come join our team
        </h4>
      </div>
      <div className="px-[20px] lg:px-28 pt-12">
        <h4 className="text-[#424243] text-[25px] md:text-[32px] font-semibold">
          Openings at BoardSeats
        </h4>
        <div className="flex items-center mt-5">
          <p className="mr-10 pb-2">Browse by</p>
          <p className="flex border-b-4 pb-1 border-b-[#A91F2F]">
            <img src={Location} alt="" /> Location
          </p>
        </div>
        <hr />
      </div>
      <div className="px-[20px] text-center pt-20 pb-40 flex flex-col items-center justify-center">
        <img src={Illustration} alt="" className="mb-10" />
        <p className="text-[24px] text-[#424243]">
          We have no opening at the moment
        </p>
        <p>
          Please check back soon.{" "}
          <span className="text-[#A91F2F]">Back to home page</span>
        </p>
      </div>
    </div>
  );
};

export default Career;
