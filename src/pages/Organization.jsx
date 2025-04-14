import React from "react";
import WhiteArrow from "../assets/Organizations/whiteArrow.svg";
import RedArrown from "../assets/Candidates/redArrow.svg";
import CreateAccountIllus from "../assets/Candidates/createAccount.svg";
import UpdateProfileIllus from "../assets/Candidates/updateProfile.svg";
import AccessOpportunityIllus from "../assets/Candidates/opportunities.svg";
import Globe1 from "../assets/Candidates/earthBG.svg";

const Organization = () => {
  return (
    <div>
      <div className="organisation relative h-[553px] overflow-hidden flex justify-start items-center px-[20px] lg:px-24">
        <div className="h-full w-full absolute top-0 bg-[#0000004A] z-0 left-0"></div>
        <div className="text-white z-10">
          <h4 className="text-[35px] lg:text-[64px] font-semibold leading-[1.3] mb-5 max-w-[712px]">
            Access to Pre-verified Board Candidates
          </h4>
          <p className="max-w-[493.89px]">
            Find experienced professionals from a diverse pool of qualified
            candidates
          </p>
          <div className="flex lg:flex-row flex-col">
            <button className="bg-[#BD0B20] w-[250px] h-[60px] rounded-[6px] mt-10 text-white"
                    onClick={() => window.location.href = '/signup/organization'}>
              Get Started
            </button>
            <button className="text-[#BD0B20] w-[250px] h-[60px] rounded-[6px] mt-5 lg:mt-10 bg-white lg:ml-10"
                    onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeat@risktechadvisory.com/bookings/s/yCd_grljMUuCV8gfX2r_eg2'}>
              Book a demo
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-[60px] px-[20px] lg:[px-0]">
        <h3 className="text-[27px] font-semibold md:w-[500px] flex flex-col text-center">
          <span>
            <span className="text-[#A91F2F]">Optimised Board</span> Recruitment
          </span>
          <span>for Organisations</span>
        </h3>
        <p className="text-center max-w-[700px] mt-5">
          BoardSeats provides a digitised platform, built to enable the
          requisite connections for a flexible, reliable and optimised Board
          recruitment process.
        </p>
        <div className="flex flex-col lg:flex-row mt-20 items-center">
          <div className="xl:w-[371px] lg:flex-1 flex flex-col items-center mt-[14px]">
            <div
              className="bg-[#4242431A] h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Candidate pool and access to organisations
            </div>
            <div
              className="bg-white h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Recruitment process
            </div>
            <div
              className="bg-[#4242431A] h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Background check and vetting
            </div>
            <div
              className="bg-white h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Competence, skills and needs match
            </div>
          </div>
          <div className="xl:w-[371px] lg:flex-1  flex flex-col items-center shadow-custom-shadow rounded-[5px] pt-8 pb-10 z-10">
            <h3 className="text-[24px] text-[#424243] font-medium mb-3">
              <span className="text-[#A91F2F]">Board</span> Requirements
            </h3>
            <p className="text-[#424243] text-[20px] font-semibold mb-4">
              The BoardSeats Approach
            </p>
            <div
              className="bg-[#A91F2F1A] h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Easy access to a wider pool of qualified prospects and leading
              organisations
            </div>
            <div
              className="bg-white h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Eliminating the lengthy recruitment process through automation
            </div>
            <div
              className="bg-[#A91F2F1A] h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Prevetted prospects and organisations
            </div>
            <div
              className="bg-white h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Automated matching of prospects to organisations
            </div>
            <button className="h-[60px] w-[80%] bg-[#BD0B20] mt-3 rounded-[5px] text-white font-semibold"
                    onClick={() => window.location.href = '/signup/organization'}>
              Hire Board Candidates
            </button>
          </div>
          <div className="xl:w-[371px] lg:flex-1 flex flex-col items-center mt-[14px]">
            <div
              className="bg-[#4242431A] h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Limited access to professionals and organisations within your
              network
            </div>
            <div
              className="bg-white h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Ardous search through piles of prospects for best fit
            </div>
            <div
              className="bg-[#4242431A] h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              Extended background check process and cost
            </div>
            <div
              className="bg-white h-[80px] grid place-items-center text-center p-3 w-full
            "
            >
              High propensity for board-candidate mismatch
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col py-40 items-center overflow-hidden px-[20px]">
        <p className="text-[#BD0B20] text-[14px] uppercase text-center font-semibold z-10">
          How does it work?
        </p>
        <h4 className="max-w-[65%] text-[35px] lg:text-[40px] font-semibold text-center leading-[50px] mb-5 mt-5 z-10">
          Board Recruitment Process
        </h4>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full lg:px-5 2xl:px-24 my-1">
          <div className="w-max flex mb-8 lg:mb-0 flex-col items-center">
            <div className="relative w-max mb-5">
              <img src={CreateAccountIllus} alt="" />
              <div className="h-[60px] w-[60px] rounded-full bg-[#A91F2F42] absolute -right-1 -bottom-2"></div>
            </div>
            <p className="lg:text-[16px] xl:text-[19px] font-semibold text-[#424243]">
              Create Your BoardSeats Account
            </p>
          </div>
          <div className="w-max flex mb-8 lg:mb-0 flex-col items-center">
            <div className="relative w-max mb-5">
              <img src={UpdateProfileIllus} alt="" />
              <div className="h-[60px] w-[60px] rounded-full bg-[#A91F2F42] absolute -right-1 -bottom-2"></div>
            </div>
            <p className="lg:text-[20px] xl:text-[19px] font-semibold text-[#424243]">
              Create Your Corporate Profile
            </p>
          </div>
          <div className="w-max flex mb-8 lg:mb-0 flex-col items-center">
            <div className="relative w-max mb-5">
              <img src={AccessOpportunityIllus} alt="" />
              <div className="h-[60px] w-[60px] rounded-full bg-[#A91F2F42] absolute -right-1 -bottom-2"></div>
            </div>
            <p className="lg:text-[20px] xl:text-[19px] font-semibold text-[#424243]">
              Access Pre-verified Board Candidates
            </p>
          </div>
        </div>
        <br />
        <br />
        <button className="text-[#BD0B20] flex items-center z-10 uppercase tracking-widest font-semibold mt-18">
          Get started <img src={RedArrown} alt="" className="ml-2" />
        </button>
        <img src={Globe1} alt="" className="absolute top-0" />
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 bg-[#353550] text-white lg:p-18 p-10">
          <h4 className="text-[32px] font-medium mb-5">Training</h4>
          <p className="mb-10 text-sm leading-7">
            Upskill and improve competencies with our governance-focused
            training programs for organisations and professionals.
          </p>
          <button className="bg-[#BD0B20] h-[60px] w-[250px] text-white flex items-center rounded-[6px] justify-center font-medium"
                  onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeat1@risktechadvisory.com/bookings/'}>
            Request Service <img src={WhiteArrow} alt="" className="ml-2" />
          </button>
        </div>
        <div className="lg:w-1/2 text-[#353550] p-10 lg:p-18">
          <h4 className="text-[32px] font-medium mb-5">Board Setup</h4>
          <p className="mb-10 text-sm leading-7">
            Starting a new board or seeking to improve an existing one?
            BoardSeats provides digitised tools and services for effective board
            setup and management.
          </p>
          <button className="bg-[#BD0B20] h-[60px] w-[250px] text-white flex items-center rounded-[6px] justify-center font-medium"
                  onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeat@risktechadvisory.com/bookings/s/hIOq-vAt8k-NQPGbQ3ErbA2'}>
            Request Service <img src={WhiteArrow} alt="" className="ml-2" />
          </button>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Organization;
