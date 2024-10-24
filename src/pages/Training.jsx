import React from "react";
import AbsoluteTriangle from "../assets/Training/absoluteTriangle.svg";
import AbsoluteRectangle from "../assets/Training/absoluteRectangle.svg";
import UpArrow from "../assets/Training/upArrow.svg";
import DownArrow from "../assets/Training/downArrow.svg";
import DigitalBanking from "../assets/Training/digitalBanking.svg";
import InvestmentBanking from "../assets/Training/investmentBanking.svg";
import CyberSecurity from "../assets/Training/cybersecurity.svg";
import CyberSecurity2 from "../assets/Training/lastGrid.svg";
import Consultation from "../assets/Training/consultation.svg";

const Training = () => {
  return (
    <div className="">
      <div className="text-[25px] xl:text-[55px] flex justify-center flex-col items-center text-[#444444] py-56 relative">
        <img src={AbsoluteTriangle} alt="" className="absolute -z-10 right-0" />
        <img
          src={AbsoluteRectangle}
          alt=""
          className="absolute -z-10 left-0 lg:-bottom-[150%] xl:-bottom-[120%]"
        />
        <div className="flex items-center font-semibold text-shadow-md">
          <span className="text-[#BD0B20]">G</span>OVERNANCE ACADEMY{" "}
          <hr className="h-[2px] w-auto lg:w-[330px] ml-1 lg:ml-5 bg-[#726F6F]" />
        </div>
        <div className="flex items-center font-semibold text-shadow-md">
          <hr className="h-[2px] bg-[#726F6F] lg:w-[330px] mr-5" /> FOR BOARDS &
          EXECUTIVES
        </div>
      </div>
      <div className="px-[20px] xl:px-24">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center py-24">
          <div className="">
            <p className="text-[#4444443A] text-[18px] lg:text-[28px] uppercase font-bold">
              Financial
            </p>
            <img src={UpArrow} alt="" className="my-5" />
            <p className="text-[#444444] text-[25px] lg:text-[45px] uppercase font-bold text-shadow-md">
              Technology
            </p>
            <img src={DownArrow} alt="" className="my-5" />
            <p className="text-[#4444443A] text-[18px] lg:text-[28px] uppercase font-bold">
              governance
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <img src={DigitalBanking} alt="" />
            <img src={InvestmentBanking} alt="" />
            <img src={CyberSecurity} alt="" />
            <img src={CyberSecurity2} alt="" />
          </div>
        </div>
        <div className="flex mt-1">
        <button className="h-[50px] w-[209px] border-[1px] border-[#BD0B20] text-[#BD0B20] rounded-[5px] mr-2"
        onClick={() => window.location.href = 'https://risktechadvisory.com/training/'}>
  View all Trainings
</button>
          <button className="h-[50px] w-[209px] bg-[#BD0B20] text-white rounded-[5px]"
                  onClick={() => window.location.href = 'https://github.com/Manlikevee/boardseat/raw/main/Boardseats%20Training%20Brochure.pdf'}>
            Download Brochure
          </button>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center py-28 xl:py-15 px-[20px]">
        <h4 className="text-[30px] lg:text-[45px] mb-10 text-shadow-lg">
          <span className="text-[#BD0B20]">C</span>LIENT{" "}
          <span className="text-[#BD0B20]">T</span>ESTIMONIAL{" "}
        </h4>
        <iframe className="" width="1178" height="515" src="https://www.youtube.com/embed/ZNb9VSCp_TQ"
                title="Corporate Governance &amp; Risk Management Training - Client Testimonial" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="px-[20px] lg:p-1 xl:px-20">
        <div classname="">
          <h4 className="text-[16px] md:text-[30px] xl:text-[45px] uppercase flex items-center font-semibold text-shadow-md">
            Clarity for your board is{" "}
            <div className="ml-3">
              <p className="text-[14px] lg:text-[28px] text-[#BD0B2033] text-shadow-none">
                Dynamic
              </p>
              <p className="text-[#BD0B20]">progressive</p>
              <p className="text-[14px] lg:text-[28px] text-[#BD0B2033] text-shadow-none">
                imperative
              </p>
            </div>
          </h4>
          <p className="text-[16px] lg:text-[30px] lg:-mt-7">
            How far do you want to go?
          </p>
          <div className="mt-10 lg:mt-15 flex xl:items-center flex-col xl:flex-row">
            <img
              src={Consultation}
              alt=""
              className="2xl:mr-20 xl:mr-10 mb-5 xl:mb-0"
            />
            <div>
              <p className="text-[18px] xl:text-[25px] 2xl:text-[30px] mb-5 2xl:max-w-[800px]">
                Upskill and improve competencies with our governance-focused
                trainings for organisations and professionals.
              </p>
              <p className="text-[18px] xl:text-[25px] 2xl:text-[30px] mb-5 max-w-[800px] font-semibold">
                Let’s Equip your Board with Skills for Success{" "}
              </p>
              <button className="bg-[#BD0B20] text-white h-[50px] w-[235px] rounded-[5px]"
        onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/RiskTechAdvisoryLimited@risktechadvisory.com/bookings/s/UfNyHfOvV0mquYivs-devQ2'}>
  Book a consultation
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
