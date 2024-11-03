import React, { useState } from "react";
import BoardseatsLogo from "../assets/Navbar/logo.svg";
import bslogo from '../assets/Navbar/bslogo.png'
import DownArrow from "../assets/Navbar/downArrow.svg";
import BurgerMenu from "../assets/Navbar/hamburgerMenu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleAboutMenu, setToggleAboutMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="mynv h-[90px] bg-white flex justify-between items-center w-screen px-5 lg:px-5 xl:px-16 2xl:px-20 fixed z-50">
      <div className="">
        <Link to={"/"}>
          {/* making the nav logo link to the homepage */}
          <img
            src={bslogo}
            alt="boardseats logo"
            className="w-[200px] lg:w-[100px] xl:w-[220px]"
          />
        </Link>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? "top-[89px]" : "-top-[100vh]"
        } transition border-b-amber-950 absolute list bg-white lg:bg-transparent lg:top-0 z-50 overflow-x-clip overflow-y-visible w-screen lg:w-max h-custom-vh lg:h-full left-5 flex items-center flex-col lg:block`}
      >
        <ul className="flex flex-col lg:flex-row h-full w-full lg:gap-7 xl:gap-10 items-center">
          <Link
            to={"/candidates"}
            className="w-full lg:w-max h-[60px] lg:bg-inherit bg-[#eeeeee] lg:h-max mb-3 lg:mb-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li className="px-5 lg:px-0 flex items-center h-full lg:bg-inherit w-full">
              For Candidates
            </li>
          </Link>
          <div className="vertical-divider hidden lg:block"></div>
          <Link
            to={"/organisation"}
            className="w-full lg:w-max h-[60px] lg:bg-inherit bg-[#eeeeee] lg:h-max mb-3 lg:mb-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li className="px-5 lg:px-0 flex items-center h-full lg:bg-inherit w-full">
              For Organisations
            </li>
          </Link>

          <div className="lg:pointer-events-none lg:text-white w-full relative lg:w-max h-[60px] lg:h-max bg-[#eeeeee] lg:bg-inherit mb-3 lg:mb-0">
            <li
              className="flex h-full px-5 lg:px-0 justify-between items-center cursor-pointer"
              onClick={() => setToggleAboutMenu(!toggleAboutMenu)}
            >
              About Us{" "}
              <img
                src={DownArrow}
                alt=""
                className={`${
                  toggleAboutMenu ? "rotate-180" : "rotate-0"
                } lg:hidden lg:ml-1 xl:ml-5 transition-transform`}
              />
            </li>
            <div
              className={`${
                toggleAboutMenu ? "block" : "hidden"
              } lg:hidden py-5 lg:absolute top-[40px] bg-white z-[5000] w-full lg:w-max lg:shadow-custom-shadow`}
            >
              <Link
                to={"/about"}
                className="w-full lg:w-max"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setToggleAboutMenu(false);
                }}
              >
                <p className="h-[40px] px-3 flex items-center hover:bg-[#eeeeee9A]">
                  About Boardseats
                </p>
              </Link>
              <Link
                to={"/career"}
                className="w-full lg:w-max h-10 bg-[#eeeeee] lg:h-max"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setToggleAboutMenu(false);
                }}
              >
                <p className="h-[40px] px-3 flex items-center hover:bg-[#eeeeee9A]">
                  Careers
                </p>
              </Link>
              <Link
                to={"/contact"}
                className="w-full lg:w-max h-10 bg-[#eeeeee] lg:h-max"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setToggleAboutMenu(false);
                }}
              >
                <p className="h-[40px] px-3 flex items-center hover:bg-[#eeeeee9A]">
                  Contact Us
                </p>
              </Link>
            </div>
          </div>

          <Link
            to={"/training"}
            className="lg:pointer-events-none lg:text-white w-full lg:w-max h-[60px] lg:bg-inherit bg-[#eeeeee] lg:h-max mb-3 lg:mb-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li className="px-5 lg:px-0 flex items-center h-full lg:bg-inherit w-full">
              Training
            </li>
          </Link>
          <Link
            to={"/pricing"}
            className="lg:pointer-events-none lg:text-white w-full lg:w-max lg:bg-inherit h-[60px] bg-[#eeeeee] lg:h-max mb-3 lg:mb-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li className="px-5 lg:px-0 flex items-center h-full lg:bg-inherit w-full">
              Pricing
            </li>
          </Link>
          <Link
            to={"/news"}
            className="lg:pointer-events-none lg:text-white w-full lg:w-max h-[60px] lg:bg-inherit bg-[#eeeeee] lg:h-max mb-3 lg:mb-0 "
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li className="px-5 lg:px-0 flex items-center h-full lg:bg-inherit w-full">
              News & Insights
            </li>
          </Link>
          {/* NEW NAVBAR "DESIGN" */}
          <div className="mynv hidden lg:flex absolute top-[90px] right-0 bg-white pr-14 py-4 pl-1 gap-20">
            <div className="triangle"></div>
            <div className="w-full relative lg:w-max h-[60px] lg:h-max bg-[#eeeeee] lg:bg-inherit mb-3 lg:mb-0">
              <li
                className="flex h-full px-5 lg:px-0 justify-between items-center cursor-pointer"
                onClick={() => setToggleAboutMenu(!toggleAboutMenu)}
              >
                About Us{" "}
                <img
                  src={DownArrow}
                  alt=""
                  className={`${
                    toggleAboutMenu ? "rotate-180" : "rotate-0"
                  } lg:ml-1 xl:ml-5 transition-transform`}
                />
              </li>
              <div
                className={`${
                  toggleAboutMenu ? "block" : "hidden"
                } py-5 lg:absolute top-[40px] bg-white z-50 w-full lg:w-max lg:shadow-custom-shadow`}
              >
                <Link
                  to={"/about"}
                  className="w-full lg:w-max"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setToggleAboutMenu(false);
                  }}
                >
                  <p className="h-[40px] px-3 flex items-center hover:bg-[#eeeeee9A]">
                    About Boardseats
                  </p>
                </Link>
                <Link
                  to={"/career"}
                  className="w-full lg:w-max h-10 bg-[#eeeeee] lg:h-max"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setToggleAboutMenu(false);
                  }}
                >
                  <p className="h-[40px] px-3 flex items-center hover:bg-[#eeeeee9A]">
                    Careers
                  </p>
                </Link>
                <Link
                  to={"/contact"}
                  className="w-full lg:w-max h-10 bg-[#eeeeee] lg:h-max"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setToggleAboutMenu(false);
                  }}
                >
                  <p className="h-[40px] px-3 flex items-center hover:bg-[#eeeeee9A]">
                    Contact Us
                  </p>
                </Link>
              </div>
            </div>
            <Link
              to={"/training"}
              className="w-full lg:w-max h-[60px] lg:bg-inherit bg-[#eeeeee] lg:h-max mb-3 lg:mb-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <li className="px-5 lg:px-0 flex items-center h-full lg:bg-inherit w-full">
                Training
              </li>
            </Link>
            <Link
              to={"/pricing"}
              className="w-full lg:w-max lg:bg-inherit h-[60px] bg-[#eeeeee] lg:h-max mb-3 lg:mb-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <li className="px-5 lg:px-0 flex items-center h-full lg:bg-inherit w-full">
                Pricing
              </li>
            </Link>
            <Link
              to={"/news"}
              className="w-full lg:w-max h-[60px] lg:bg-inherit bg-[#eeeeee] lg:h-max mb-3 lg:mb-0 "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <li className="px-5 lg:px-0 flex items-center h-full lg:bg-inherit w-full">
                News & Insights
              </li>
            </Link>
          </div>
        </ul>
        <div className="m-auto mb-5 justify-self-end self-end lg:hidden">
          <button className="bg-[#A91F2F1A] text-[#A91F2F] rounded-[6px] h-[60px] w-[80vw]">
            Login
          </button>
        </div>
      </div>
      <div
        className="lg:hidden cursor-pointer pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <img src={BurgerMenu} alt="" width={30} />
      </div>
      <div className="hidden lg:block">
        <button
            className="bg-[#A91F2F1A] text-[#A91F2F] rounded-[6px] h-8 w-[100px]"
            onClick={() => window.location.href = 'http://test.boardseats.io/c/portal/login?p_l_id=2'}
        >
          Login
        </button>
      </div>

    </div>
  );
};

export default Navbar;
