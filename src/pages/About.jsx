import React from "react";
import Roundtable from "../assets/About/roundtable.svg";
import Globe from "../assets/About/earthBG.svg";
import IntuitiveRight from "../assets/About/intuitiveRight.svg";
import IntuitiveLeft from "../assets/About/intuitiveLeft.svg";
import Temitayo from "../assets/About/temitayo.svg";
import Bola from "../assets/About/bola.svg";
import Yinka from "../assets/About/Yinka.svg";
import Rahmot from "../assets/About/Rahmot.svg";
import Adeife from "../assets/About/adeife.svg";
import Amarachi from "../assets/About/Amarachi.svg";
import Omowunmi from "../assets/About/omowunmi.svg";
import Pelumi from "../assets/About/pelumi.svg";

const About = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:pl-28">
        <div className="px-[20px] lg:px-0 pt-10 lg:pt-0">
          <div className="bg-[#F5E6E8] text-[#BD0B20] h-[39px] w-[123px] grid place-items-center font-semibold rounded-[3px]">
            ABOUT US
          </div>
          <h4 className="text-[25px] lg:text-[48px] text-[#444444] mt-5 font-bold max-w-[500px] leading-[1.1]">
            We are redefining Board Recruitment
          </h4>
          <p className="text-[#424243] mt-4 max-w-[500px]">
            Our technology drives shorter board recruitment processes for
            Candidates and Organisations.
          </p>
        </div>
        <div className="relative right-[-4px]">
          <img src={Roundtable} alt="" />
        </div>
      </div>
      <div className="relative flex flex-col py-8 lg:py-10 items-center overflow-hidden px-[20px] lg:px-0">
        <p className="text-[#BD0B20] text-[14px] uppercase text-center font-semibold">
          Our vision
        </p>
        <h4 className="lg:max-w-[65%] text-[25px] lg:text-[45px] font-semibold text-center leading-[50px] mb-5 mt-5">
          To be the Leader in Governance Recruitment in Sub-Saharan Africa
        </h4>
        <p className="text-[#424243] max-w-[620px] text-center">
          Enhancing Africa’s transformation by supporting organisations through
          value-adding services to build enduring and impactful governance
          systems.
        </p>
        <img src={Globe} alt="" className="absolute top-0" />
      </div>
      <div className="relative flex flex-col py-[70px] px-[20px] lg:py-40 lg:px-10 items-center">
        <p className="text-[#BD0B20] text-[14px] uppercase text-center font-semibold">
          our value proposition
        </p>
        <h4 className="max-w-[65%] text-[25px] lg:text-[45px] font-semibold text-center leading-[50px] mt-5">
          A secure and intuitive platform that offers
        </h4>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 mt-20 justify-center relative z-10">
          <div className="w-full lg:max-w-[402px] h-max min-h-[165px] border-b-[2px] border-b-[#00000040] flex flex-col justify-center px-3 bg-[#FFFFFFBA]">
            <h4 className="text-[20px] text-[#BD0B20] mb-3 font-semibold">
              Access
            </h4>
            <p>
              To a diverse pool of competent, Board-ready, and versatile
              professionals to match your organisation’s governance team
            </p>
          </div>
          <div className="w-full lg:max-w-[402px] h-max min-h-[165px] border-[2px] border-t-0 lg:border-[#00000040] flex flex-col justify-center px-3 bg-[#FFFFFFBA]">
            <h4 className="text-[20px] text-[#BD0B20] mb-3 font-semibold">
              Visibility
            </h4>
            <p>
              To professionals who are seeking opportunities to join the
              governing team of some of the most reputable organisations in
              Africa
            </p>
          </div>
          <div className="w-full lg:max-w-[402px] h-max min-h-[165px]  2xl:border-b-[2px] 2xl:border-b-[#00000040] flex flex-col justify-center px-3 bg-[#FFFFFFBA] border-[#00000040] border-b-2">
            <h4 className="text-[20px] text-[#BD0B20] mb-3 font-semibold">
              Efficiency
            </h4>
            <p>
              Through our auto-matching system, the board recruitment process is
              completed in record time
            </p>
          </div>
          <div className="w-full lg:max-w-[402px] h-max min-h-[165px] flex flex-col justify-center px-3 bg-[#FFFFFFBA] border-[#00000040] border-b-[2px] lg:border-none">
            <h4 className="text-[20px] text-[#BD0B20] mb-3 font-semibold">
              Readiness
            </h4>
            <p>
              With access to a broad range of governance training programs for
              boards and candidates seeking to enhance boardroom effectiveness.
            </p>
          </div>
          <div className="w-full lg:max-w-[402px] h-max min-h-[165px]  flex flex-col border-[#00000040] border-b-2 lg:border-b-0 lg:border-x-2 justify-center px-3 bg-[#FFFFFFBA]">
            <h4 className="text-[20px] text-[#BD0B20] mb-3 font-semibold">
              Independence & Objectivity
            </h4>
            <p>
              Our processes support transparency in the recruitment process,
              ensuring that candidates are matched based on expertise and
              competence.
            </p>
          </div>
          <div className="w-full lg:max-w-[402px] h-max min-h-[165px] flex flex-col justify-center px-3 bg-[#FFFFFFBA]">
            <h4 className="text-[20px] text-[#BD0B20] mb-3 font-semibold">
              Support
            </h4>
            <p>
              BoardSeats is an indigenous African platform that is close to the
              market and provides local support for both out-of-the box and
              customisable needs.
            </p>
          </div>
          <img
            src={IntuitiveRight}
            alt=""
            className="absolute -z-10 right-0 -bottom-10"
          />
          <img
            src={IntuitiveLeft}
            alt=""
            className="absolute -z-10 -left-14 -top-14"
          />
          <div className="absolute -left-[880px] -top-20 text-[320px] whitespace-nowrap text-[#4444441A] font-extrabold -z-10">
            OUR VALUE PROPOSITION
          </div>
        </div>
      </div>
      <div className="flex flex-col py-1 px-28 items-center">
        <p className="text-[#BD0B20] text-[14px] uppercase text-center font-semibold">
          MEET THE TEAM
        </p>
        <h4 className="lg:max-w-[65%] text-[25px] lg:text-[45px] font-semibold text-center leading-[50px] mt-5">
          The People at BoardSeats
        </h4>
        <div className="flex justify-center flex-wrap lg:grid grid-cols-4 justify-items-center gap-20 mt-20">
          <div className="w-max">
            <div className="border-2 border-[#BD0B20] rounded-full w-max p-1">
              <img src={Temitayo} alt=""/>
            </div>
            <div className="flex flex-col items-center mt-5">
              <div className="text-[20px] text-[#464242] font-semibold">
                Temitayo Sogbola
              </div>
              <div className="text-[#BD0B20] text-[14px]">Founder/CEO</div>
            </div>
          </div>
          <div className="w-max">
            <div className="border-2 border-[#BD0B20] rounded-full w-max p-1">
              <img src={Bola} alt=""/>
            </div>
            <div className="flex flex-col items-center mt-5">
              <div className="text-[20px] text-[#464242] font-semibold">
                Bola Adesope
              </div>
              <div className="text-[#BD0B20] text-[14px]">
                Lead Business Analyst
              </div>
            </div>
          </div>
          <div className="w-max">
            <div className="border-2 border-[#BD0B20] rounded-full w-max p-1">
              <img src={Omowunmi} alt=""/>
            </div>
            <div className="flex flex-col items-center mt-5">
              <div className="text-[20px] text-[#464242] font-semibold">
                Omowunmi Akande
              </div>
              <div className="text-[#BD0B20] text-[14px] text-center">Business Development Manager<br/>/Executive Search</div>
            </div>
          </div>
          <div className="w-max">
            <div className="border-2 border-[#BD0B20] rounded-full w-max p-1">
              <img src={Yinka} alt=""/>
            </div>
            <div className="flex flex-col items-center mt-5">
              <div className="text-[20px] text-[#464242] font-semibold">
                Yinka Oluwasanmi
              </div>
              <div className="text-[#BD0B20] text-[14px]">Technology Lead</div>
            </div>
          </div>
          <div className="w-max">
            <div className="border-2 border-[#BD0B20] rounded-full w-max p-1">
              <img src={Rahmot} alt=""/>
            </div>
            <div className="flex flex-col items-center mt-5">
              <div className="text-[20px] text-[#464242] font-semibold">
                Rahmot Afolabi
              </div>
              <div className="text-[#BD0B20] text-[14px]">Product Lead</div>
            </div>
          </div>
          <div className="w-max">
            <div className="border-2 border-[#BD0B20] rounded-full w-max p-1">
              <img src={Amarachi} alt=""/>
            </div>
            <div className="flex flex-col items-center mt-5">
              <div className="text-[20px] text-[#464242] font-semibold">
                Amarachi Awazie
              </div>
              <div className="text-[#BD0B20] text-[14px]">Product Designer</div>
            </div>
          </div>
          <div className="w-max">
            <div className="border-2 border-[#BD0B20] rounded-full w-max p-1">
              <img src={Adeife} alt="" />
            </div>
            <div className="flex flex-col items-center mt-5">
              <div className="text-[20px] text-[#464242] font-semibold">
                Adeife Odude
              </div>
              <div className="text-[#BD0B20] text-[14px]">Junior Developer</div>
            </div>
          </div>
          <div className="w-max">
            <div className="border-2 border-[#BD0B20] rounded-full w-max p-1">
              <img src={Pelumi} alt=""/>
            </div>
            <div className="flex flex-col items-center mt-5">
              <div className="text-[20px] text-[#464242] font-semibold">
                Pelumi Ibrahim
              </div>
              <div className="text-[#BD0B20] text-[14px]">Software Quality Assurance</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>

  );
};

export default About;
