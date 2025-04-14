import React from "react";
import BoardSeatsLogo from "../assets/Footer/BoardSeatsLogo.svg";
import Facebook from "../assets/Footer/facebook.svg";
import Twitter from "../assets/Footer/twitter.svg";
import Linkedin from "../assets/Footer/linkedin.svg";
import Instagram from "../assets/Footer/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-10 px-[20px] lg:px-20 bg-[#F5F6FA8C] relative top-[90px]">
      <div className=" flex flex-col lg:flex-row justify-between">
        <div className="mb-5 lg:mb-0">
          <div className="mb-2 lg:mb-5">
            <img src={BoardSeatsLogo} alt="" width={200} />
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/RiskTechAdvisory?mibextid=LQQJ4d"><img src={Facebook} alt="" /></a>
            <a href="https://x.com/risktecha?s=21"><img src={Twitter} alt=""/></a>
            <a href="https://www.linkedin.com/company/risktechadvisory/"><img src={Linkedin} alt=""/></a>
            <a href="https://www.instagram.com/risktechadvisory?igsh=MW5tOWZudHZxaG92Ng=="><img src={Instagram} alt=""/></a>
          </div>
        </div>
        <div className="mb-5 lg:mb-0">
          <h4 className="lg:mb-5 mb-2 text-[#BD0B20] font-bold text-[14px]">
            Home
          </h4>
          <ul className="flex flex-col gap-3 text-[12px]">
            <Link to={"/about"}>
              <li>About BoardSeats</li>
            </Link>
            <Link to={"/training"}>
              <li>Training</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact Us</li>
            </Link>
            <Link to={"/career"}>
              <li>Careers</li>
            </Link>
            <Link to={"/terms-of-use"}>
              <li>Terms of Use</li>
            </Link>
            <Link to={"/faqs"}>
              <li>FAQs</li>
            </Link>
          </ul>
        </div>
        <div className="mb-5 lg:mb-0">
          <h4 className="lg:mb-5 mb-2 text-[#BD0B20] font-bold text-[14px]">
            Organisations
          </h4> 
          <ul className="flex flex-col gap-3 text-[12px]">
            <Link to={"/signup/organization"}>
            <li>Post Board Role</li>
            </Link>
            <Link to={"/"}>
            <li>Company Secretaries</li>
            </Link>
            <Link to={'https://outlook.office365.com/owa/calendar/RiskTechAdvisoryLimited@risktechadvisory.com/bookings/s/UfNyHfOvV0mquYivs-devQ2'}>
            <li>Book a Consultation</li>
          </Link>
          </ul>
        </div>
        <div className="mb-5 lg:mb-0">
          <h4 className="lg:mb-5 mb-3 text-[#BD0B20] font-bold text-[14px]">
            Candidates
          </h4>
          <ul className="flex flex-col gap-3 text-[12px]">
          <Link to={"/signup/candidate"}>
            <li>Find a Board Role</li>
          </Link>
          </ul>
        </div>
        <div className="mb-5 lg:mb-0">
          <h4 className="mb-2 lg:mb-5 text-[#BD0B20] font-bold text-[14px]">
            Newsletter
          </h4>
          <ul className="flex flex-col gap-3 text-[12px]">
            <li className="max-w-[250px]">
              Subscribe to receive exclusive updates on board opportunities,
              insights and news.
            </li>
          </ul>
          <div className="h-[50px] flex items-center mt-5">
            <div>
              <div className="newsletter">
                <input type="text"   placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            {/* <input
              type="email"
              className="w-[241.58] placeholder:text-[#64607D] placeholder:text-[14px] p-3 bg-white"
              placeholder="Email Address"
            />
            <button type="submit" className="bg-[#BD0B20] text-white h-full w-[100px] rounded-r-[5px]">
              Subscribe
            </button> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#424243] text-center text-[18px] mt-20">
          © 2021-2024 RiskTech & Advisory Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
