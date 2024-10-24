import React from "react";
import Globe1 from "../assets/Candidates/earthBG.svg";
import Globe2 from "../assets/Candidates/earthBG2.svg";
import RedArrown from "../assets/Candidates/redArrow.svg";
import WhiteArrow from "../assets/Candidates/whiteArrow.svg";
import CreateAccountIllus from "../assets/Candidates/createAccount.svg";
import UpdateProfileIllus from "../assets/Candidates/updateProfile.svg";
import AccessOpportunityIllus from "../assets/Candidates/opportunities.svg";

const Candidates = () => {
  return (
    <div className="">
      <div className="candidates relative h-[553px] overflow-hidden flex justify-start items-center px-[20px] lg:px-24">
        <div className="h-full w-full absolute top-0 bg-[#0000004A] z-0 left-0"></div>
        <div className="text-white z-10">
        <h4 className="text-[35px] lg:text-[64px] font-semibold leading-[1.3] mb-5 max-w-[712px]">
            Access Executive & Board Roles
          </h4>
          <p className="max-w-[493.89px]">
            Join an exclusive community of experienced professionals. Boost your
            visibility for governance opportunities.
          </p>
          <button className="bg-[#BD0B20] w-[250px] h-[60px] rounded-[6px] mt-10 text-white"
                  onClick={() => window.location.href = 'http://test.boardseats.io/c/portal/login?p_l_id=2'}>
            Get Started
          </button>
        </div>
      </div>
      <div className="relative flex flex-col py-40 items-center overflow-hidden">
        <p className="text-[#BD0B20] text-[14px] uppercase text-center font-semibold z-10">
          How does it work?
        </p>
        <h4 className="max-w-[65%] text-[25px] lg:text-[45px] font-semibold text-center leading-[1.3] mb-5 mt-5 z-10">
          Optimised Recruitment for Executives
        </h4>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full lg:px-5 xl:px-24 my-5">
          <div className="w-max flex mb-8 lg:mb-0 flex-col items-center">
            <div className="relative w-max mb-5">
              <img src={CreateAccountIllus} alt="" />
              <div className="h-[60px] w-[60px] rounded-full bg-[#A91F2F42] absolute -right-1 -bottom-2"></div>
            </div>
            <p className="text-[22px] font-semibold text-[#424243]">
              Create Your BoardSeats Account
            </p>
          </div>
          <div className="w-max flex mb-8 lg:mb-0 flex-col items-center">
            <div className="relative w-max mb-5">
              <img src={UpdateProfileIllus} alt="" />
              <div className="h-[60px] w-[60px] rounded-full bg-[#A91F2F42] absolute -right-1 -bottom-2"></div>
            </div>
            <p className="text-[22px] font-semibold text-[#424243]">
              Update Your Profile
            </p>
          </div>
          <div className="w-max flex mb-8 lg:mb-0 flex-col items-center">
            <div className="relative w-max mb-5">
              <img src={AccessOpportunityIllus} alt="" />
              <div className="h-[60px] w-[60px] rounded-full bg-[#A91F2F42] absolute -right-1 -bottom-2"></div>
            </div>
            <p className="text-[22px] font-semibold text-[#424243]">
              Access Board Opportunities
            </p>
          </div>
        </div>
        <button className="text-[#BD0B20] flex items-center z-10 uppercase tracking-widest font-semibold mt-28"
                onClick={() => window.location.href = 'http://test.boardseats.io/c/portal/login?p_l_id=2'}>>
          Get started <img src={RedArrown} alt="" className="ml-2" />
        </button>
        <img src={Globe1} alt="" className="absolute top-0" />
      </div>
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="lg:w-1/2 bg-[#353550] text-white p-10 lg:p-24">
          <h4 className="text-[32px] font-medium mb-5">
            Profile Writing Service
          </h4>
          <p className="mb-20 text-sm leading-5">
            Give your profile a boost. Attract the board opportunities you
            desire. BoardSeats' profile writing service provides the visibility
            required to find your Board role. Get more board oppoertunities with
            a revamped profile that increases your chances of automatching to
            give you a competitive advantage
          </p>
          <button className="bg-[#BD0B20] h-[60px] w-[250px] text-white flex items-center rounded-[6px] justify-center font-medium"
                  onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeats1@risktechadvisory.com/bookings/s/dVpm5LZ1IkGQXrIFtbYRLg2'}>
            Request Service <img src={WhiteArrow} alt="" className="ml-2" />
          </button>
        </div>
        <div className="lg:w-1/2 text-[#353550] p-10 lg:p-24">
          <h4 className="text-[32px] font-medium mb-5">Training</h4>
          <p className="mb-10 text-sm leading-5">
            Find Governance focused training for your professional upskilling.
            We offer programs designed for Board of Directors and Senior
            Management. We are a PECB Certified training partner. Through this
            partnership, we provide education and certification under ISO/IEC
            17024 for individuals on a wide range of disciplines such as,
            Information Security, Privacy and Data Protection, Business
            Continuity, Quality and Service Management, Risk Management, Health
            and Safety, and Sustainability.
          </p>
          <button className="bg-[#BD0B20] h-[60px] w-[250px] text-white flex items-center rounded-[6px] justify-center font-medium"
                  onClick={() => window.location.href = '/training'}>
            Request Service <img src={WhiteArrow} alt="" className="ml-2" />
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 text-[#353550] lg:p-24 p-10">
          <h4 className="text-[32px] font-medium mb-5">Executive Coaching</h4>
          <p className="mb-20 leading-5">
            Experience our executive coaching services, as our coaches guide you
            to achieve your goals.
          </p>
          <button className="bg-[#BD0B20] h-[60px] w-[250px] text-white flex items-center rounded-[6px] justify-center font-medium"
                  onClick={() => window.location.href = 'https://outlook.office365.com/book/BoardSeat1@risktechadvisory.com/'}>
            Request Service <img src={WhiteArrow} alt="" className="ml-2" />
          </button>
        </div>
        <div className="lg:w-1/2 text-[#353550] overflow-hidden p-24">
          <img src={Globe2} alt="" className="lg:scale-150" />
        </div>
      </div>
    </div>
  );
};

export default Candidates;
