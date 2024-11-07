import React, { useState } from "react";
import DoubleCheck from "../assets/Pricing/Vector.svg";

const Pricing = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedSecond, setExpandedSecond] = useState(false);

  const fullText = `For corporates that need to post board roles to reach our exclusive 
  community of pre-verified board candidates.`;

  const truncatedText = `For corporates that need to post board roles to reach our exclusive 
  community of pre-verified board candidates...`;

  const fullTextSecond = `For corporates that require quicker candidate matching of best-fit 
  executives using our enhanced auto-matching feature.`;

  const truncatedTextSecond = `For corporates that require quicker candidate matching of best-fit 
  executives using our enhanced auto-match...`;

  return (
    <div className="">
      <div className=" flex flex-col items-center py-14 px-[20px]">
        <h4 className="text-center text-[35px] md:text-[48px] text-[#424243] font-semibold mb-8">
          Simple, transparent pricing
        </h4>
        <button className="w-[111px] h-[44px] bg-[#BD0B20] rounded-full text-white">
          Corporate
        </button>
      </div>
      <div className="flex w-full px-[20px] py-14 justify-between lg:flex-wrap flex-wrap">
        <div className="flex  flex-col flex-1 items-center text-center md:max-w-[333.97px] lg:max-w-max transition-all hover:border-t-[5px] rounded-md hover:border-[#BD0B20] hover:shadow-custom-shadow p-5">
          <h4 className="text-[24px] text-[#A91F2F]">Basic</h4>
          <p className="text-[#424243] text-[12px] mb-5">
            Post your first role for free
          </p>
          <p className="text-[32px] text-[#424243] font-semibold mb-5">
            N250,000
          </p>
          <p className="text-[14px] mb-3 text-left minheight">
            {expanded ? fullText : truncatedText}
            {!expanded && (
                <span
                    className="text-[#A9202E] cursor-pointer"
                    onClick={() => setExpanded(true)}
                >
                see more
              </span>
            )}
          </p>

          {expanded && (
              <>
                <p className="text-[14px] text-left ">
                  This is similar to newspaper advertorial, but with more
                  benefits:
                </p>
                <ul className="text-[14px] pl-1 list-disc flex flex-col items-left mb-5 text-left">
                  <li>Connects you with your exact target audience.</li>
                  <li className="w-[81%]">
                    Ability to receive applications directly.
                  </li>
                  <li className="w-[83%]">
                    Ability to message candidates directly.
                  </li>
                  <li className="w-[95%]">
                    A sneak peek of our auto-matching feature.
                  </li>
                </ul>
                <p
                    className="text-[#A9202E] mb-1 cursor-pointer"
                    onClick={() => setExpanded(false)}
                >
                  See less
                </p>
              </>
          )}
          <button className="h-[60px] w-[100%] bg-[#BD0B20] text-white rounded-[5px] mb-5"
                  onClick={() => window.location.href = 'http://test.boardseats.io/c/portal/login?p_l_id=2'}>
            Choose plan
          </button>
          <div className="mr-auto justify-self-start self-start flex flex-col">
            <p className="mr-auto justify-self-start self-start mb-8 mt-4 text-[#231D4F]">
              Basic features
            </p>
            <div className="text-left">
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">Post Board Roles</p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  Get a sneak peek of our Auto-Match Feature{" "}
                </p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  Industry wide Insights & Resources
                </p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">Speak to an Expert</p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  Dedicated Onboarding Support{" "}
                </p>
              </div>
              <div className="flex items-center">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">Book a Demo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col flex-1 items-center text-center md:max-w-[333.97px] lg:max-w-max transition-all hover:border-t-[5px] rounded-md hover:border-[#BD0B20] hover:shadow-custom-shadow p-5">
          <h4 className="text-[24px] text-[#A91F2F]">Premium</h4>
          <p className="text-[#424243] text-[12px] mb-5">Fill a Board Seat</p>
          <p className="text-[32px] text-[#424243] font-semibold mb-5">
            N500,000
          </p>
          <p className="text-[14px] mb-3 text-left minheight">
            {expandedSecond ? fullTextSecond : truncatedTextSecond}
            {!expandedSecond && (
                <span
                    className="text-[#A9202E] cursor-pointer"
                    onClick={() => setExpandedSecond(true)}
                >
                see more
              </span>
            )}
          </p>

          {expandedSecond && (
              <>
                <p className="text-[14px] text-left minheight">
                  Traditional recruitment turbocharged with our auto-matching
                  system.
                </p>
                <p
                    className="text-[#A9202E] cursor-pointer"
                    onClick={() => setExpandedSecond(false)}
                >
                  See less
                </p>
                <ul className="text-[14px] text-white pl-1 list-disc flex flex-col items-center mb-[26px]">
                  <li>Connects you with your exact target audience.</li>
                  <li>Ability to receive applications directly.</li>
                  <li className="w-[85%]">
                    Ability to message candidates directly.
                  </li>
                  <li>A sneak peek of our auto-matching feature.</li>
                </ul>
              </>
          )}
          <button className="h-[60px] w-full bg-[#BD0B20] text-white rounded-[5px] mb-5"
                  onClick={() => window.location.href = 'http://test.boardseats.io/c/portal/login?p_l_id=2'}>
            Choose plan
          </button>
          <div className="mr-auto justify-self-start self-start flex flex-col">
            <p className="mr-auto justify-self-start self-start mb-8 mt-4 text-[#231D4F]">
              All basic features plus
            </p>
            <div className="text-left">
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">Auto-matching Feature</p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  Candidate Background Check{" "}
                </p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  Receive Candidates Application directly
                </p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">Message Candidates </p>
              </div>
              <div className="flex items-center">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">Discounted Ads</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col flex-1 items-center text-center md:max-w-[333.97px] lg:max-w-max transition-all hover:border-t-[5px] rounded-md hover:border-[#BD0B20] hover:shadow-custom-shadow p-5">
          <h4 className="text-[24px] text-[#A91F2F]">Enterprise</h4>
          <p className="text-[#424243] text-[12px] mb-5">
            Outsource Recruitment
          </p>
          <p className="text-[32px] text-[#424243] font-semibold mb-5">
            Get&nbsp;a&nbsp;Quote
          </p>
          <p className="text-[14px] mb-3 text-left minheight">
            For corporates that require our expertise to manage the entire recruitment process
          </p>
          <button className="h-[60px] w-[100%] bg-[#BD0B20] text-white rounded-[5px] mb-5"
                  onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeats3@risktechadvisory.com/bookings/s/0rPvWblN-EKW7XA3f_RwNw2'}>
            Book a consultation
          </button>
          <div className="mr-auto justify-self-start self-start flex flex-col">
            <p className="mr-auto justify-self-start self-start mb-8 mt-4 text-[#231D4F]">
              All Premium features plus
            </p>
            <div className="text-left">
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  Featured Adverts on high traffic pages on our website</p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  Outsourced and fully managed recruitment process{" "}
                </p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  Psychometric Tests{" "}
                </p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">Post unlimited board Roles</p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  Competency Based Assessment{" "}
                </p>
              </div>
              <div className="flex items-center">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold"> Executive Leadership Assessments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col flex-1 items-center text-center md:max-w-[333.97px] lg:max-w-max transition-all hover:border-t-[5px] rounded-md hover:border-[#BD0B20] hover:shadow-custom-shadow p-5">
          <h4 className="text-[24px] text-[#A91F2F]">Enterprise Pro</h4>
          <p className="text-[#424243] text-[12px] mb-5">Set-up a Board</p>
          <p className="text-[32px] text-[#424243] font-semibold mb-5">
            Get&nbsp;a&nbsp;Quote
          </p>
          <p className="text-[14px] mb-3 text-left minheight">
            For corporates that require our expertise to setup a board from ground up
          </p>
          <button className="h-[60px] w-full bg-[#BD0B20] text-white rounded-[5px] mb-5"
                  onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeat@risktechadvisory.com/bookings/s/hIOq-vAt8k-NQPGbQ3ErbA2'}>
            Book a consultation
          </button>
          <div className="mr-auto justify-self-start self-start flex flex-col">
            <p className="mr-auto justify-self-start self-start mb-8 mt-4 text-[#231D4F]">
              All Enterprise features plus
            </p>
            <div className="text-left">
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">Corporate Governance Advisory & Support</p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  10% discount to use required features of the Digital Cosec
                </p>
              </div>
              <div className="flex items-center mb-6">
                <img src={DoubleCheck} alt=""/>{" "}
                <p className="ml-3 font-semibold">
                  Corporate Governance Training{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
