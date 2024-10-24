import React from "react";
import RightArrow from "../assets/Home/arrowRight.svg";
import StepsImage from "../assets/Home/stepsImage.svg";
import Exclusive from "../assets/Home/exclusive.svg";
import Candidates from "../assets/Home/candidates.svg";
import Recruitment from "../assets/Home/recruitment.svg";
import BoardSetup from "../assets/Home/boardSetup.svg";
import ProfileWriting from "../assets/Home/profile.svg";
import Training from "../assets/Home/profile.svg";
import Outsourcing from "../assets/Home/outsourcing.svg";
import ExecutiveCoaching from "../assets/Home/executiveCoaching.svg";
import UnionTop from "../assets/Home/UnionTop.svg";
import UnionBottom from "../assets/Home/UnionBottom.svg";
import RedArrow from "../assets/Home/redArrow.svg";
import Birds from "../assets/Home/birds.svg";

const Home = () => {
  return (
    <>
      <div className="hero relative w-full h-max pb-14 overflow-hidden text-white bg-fixed">
        <div className="absolute w-full h-full bg-[#0000008A] z-10"></div>
        <div className="relative z-10 flex flex-col items-center w-full mt-[100px] lg:mt-[160px]">
          <h2 className="text-[35px] md:text-[29px] lg:text-[38px] xl:text-[48px] font-semibold text-center px-[20px] md:max-w-[75%] lg:max-w-[90%] mb-2 leading-[1.2]">
            An exclusive community for leading organisations & board-ready
            candidates
          </h2>
          <p className="text-base lg:text-[19px] md:max-w-[70%] lg:max-w-[90%] xl:max-w-[60%] text-center mb-20 mt-3 leading-[1.6] font-inter">
            Redefining the board recruitment landscape: access a select pool of
            pre-verified board candidates. Position yourself for board roles you
            desire.
          </p>
          <div className="flex flex-col lg:flex-row">
            <div className="bg-white w-[350px] lg:w-[450px] lg:p-8 p-5 rounded-[5px] lg:mr-2 mb-5 lg:mb-0">
              <h3 className="text-[#A91F2F] text-[24px] mb-1">
                Find Board Opportunities.
              </h3>
              <p className="text-black text-[14px] mb-4 max-w-[90%] lg:text-[16px]">
                Visibly position yourself to access board roles in Africa’s
                leading governance teams.
              </p>
              <button className="bg-[#A91F2F] flex items-center justify-center ml-auto self-end justify-self-end h-[30px] lg:h-[40px] lg:text-[12px] w-[85px] lg:w-[100px] text-[10px] rounded-full"
                      onClick={() => window.location.href = 'http://test.boardseats.io/c/portal/login?p_l_id=2'}>
                Sign Up{" "}
                <img src={RightArrow} alt="right arrow" className="ml-2" />
              </button>
            </div>
            <div className="bg-white w-[350px] lg:w-[450px] lg:p-8 p-5 rounded-[5px]">
              <h3 className="text-[#A91F2F] text-[24px] mb-1">
                Hire Board Candidates.
              </h3>
              <p className="text-black text-[14px] lg:text-[16px] mb-4 max-w-[90%]">
                Attract, discover and recruit qualified professionals into your
                governance team.
              </p>
              <button className="bg-[#A91F2F] flex items-center justify-center ml-auto self-end justify-self-end h-[30px] lg:h-[40px] w-[85px] lg:w-[100px] lg:text-[12px] text-[10px] rounded-full"
                      onClick={() => window.location.href = 'http://test.boardseats.io/c/portal/login?p_l_id=2'}>
                Sign Up{" "}
                <img src={RightArrow} alt="right arrow" className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-[60px] px-[20px] lg:[px-0]">
        <h3 className="text-[32px] font-semibold md:w-[500px] flex flex-col text-center">
          <span>
            <span className="text-[#A91F2F]">Optimised Board</span> Recruitment
          </span>
          <span>for Organisations and Candidates</span>
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
              Tech-enabled matching of prospects to organisations
            </div>
            <button className="h-[60px] w-[80%] bg-[#BD0B20] mt-3 rounded-[5px] text-white font-semibold">
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
      <div className="w-full mt-20 overflow-hidden">
        <img src={StepsImage} alt="" className="w-full" />
      </div>
      <div className="lg:px-20 px-[20px] overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center my-32">
          <img src={Exclusive} alt="" className="lg:mr-20 w-full lg:w-max" />
          <div className="lg:w-[40%]">
            <h5 className="text-[24px] text-[#424243] font-semibold mb-5">
              Access to Exclusive Opportunites
            </h5>
            <p className="max-w-[90%] text-[#424243]">
              Boost your visibility for the opportunities you desire. BoardSeats
              grants you express access to the governing teams of leading
              organisations in Africa.
            </p>
            <button className="bg-[#BD0B20] h-[60px] w-full lg:w-[300px] rounded-[5px] text-white mt-10 lg:mt-14">
              Access Board Roles
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse w-full justify-center items-center mt-40 lg:mt-64 mb-40">
          <img src={Candidates} alt="" className="lg:ml-20 w-full lg:w-max" />
          <div className="lg:w-[40%]">
            <h5 className="text-[24px] text-[#424243] font-semibold mb-5">
              Direct Access to Pre-Verified Board Candidates
            </h5>
            <p className="max-w-[90%] text-[#424243]">
              Hire from a diverse pool and access board management tools to
              complement your governance team
            </p>
            <button className="bg-[#BD0B20] h-[60px] w-full lg:w-[300px] rounded-[5px] text-white mt-10 lg:mt-14">
              Hire Board Candidates
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center overflow-hidden px-[20px]">
        <h3 className="text-[32px] text-[#424243] font-semibold text-center">
          Improved outcomes for effective Board Recruitment.
        </h3>
        <p className="text-center lg:max-w-[45%]">
          BoardSeats delivers improved outcomes for your board recruitment
          efforts, ensuring direct connections, quicker matching and a range of
          services via optimised and digitised processess
        </p>
        <div className="my-20 lg:my-32 w-full relative">
          <div className="flex flex-wrap justify-between items-start w-full lg:px-[100px] lg:mb-20">
            <div className="lg:w-[311px] flex flex-col items-center mb-10 lg:mb-0">
              <img src={Recruitment} alt="" />
              <h4 className="text-[#424243] font-semibold text-[20px] mb-5 mt-3">
                Recruitment
              </h4>
              <p className="text-[#424243] text-center max-w-[90%] mb-6">
                BoardSeats powers the Board Recruitment process end-to-end,
                effectively connecting qualified professionals to the
                organisations who need them.
              </p>
              <button onClick={() => window.location.href = '/organisation'} className="text-[#A91F2FCC] border-[1px] border-[#A91F2FCC] h-[40px] w-[125px] rounded-[5px]">
                Read More
              </button>
            </div>
            <div className="lg:w-[311px] flex flex-col items-center mb-10 lg:mb-0">
              <img src={BoardSetup} alt="" />
              <h4 className="text-[#424243] font-semibold text-[20px] mb-5 mt-3">
                Board Setup
              </h4>
              <p className="text-[#424243] text-center max-w-[90%] mb-6">
                Starting a new board or seeking to improve an existing one?
                BoardSeats provides digitised tools and services for effective
                board setup and management.
              </p>
              <button onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeat@risktechadvisory.com/bookings/s/hIOq-vAt8k-NQPGbQ3ErbA2'} className="text-[#A91F2FCC] border-[1px] border-[#A91F2FCC] h-[40px] w-[125px] rounded-[5px]">
                Book a session
              </button>
            </div>
            <div className="lg:w-[311px] flex flex-col items-center mb-10 lg:mb-0">
              <img src={ProfileWriting} alt="" />
              <h4 className="text-[#424243] font-semibold text-[20px] mb-5 mt-3">
                Profile Writing
              </h4>
              <p className="text-[#424243] text-center max-w-[90%] mb-6">
                Project your experience to attract the board opportunities you
                desire. BoardSeats profile writing service provides the
                visibility required to attract the opportunities that you seek
              </p>
              <button  onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeats1@risktechadvisory.com/bookings/s/dVpm5LZ1IkGQXrIFtbYRLg2'}
                  className="text-[#A91F2FCC] border-[1px] border-[#A91F2FCC] h-[40px] w-[125px] rounded-[5px]">
                Book a session
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center w-full px-[20px] lg:px-[100px]">
            <div className="lg:w-[311px] flex flex-col items-center mb-10 lg:mb-0">
              <img src={Training} alt="" />
              <h4 className="text-[#424243] font-semibold text-[20px] mb-5 mt-3">
                Trainings
              </h4>
              <p className="text-[#424243] text-center max-w-[90%] mb-6">
                Upskill and improve competencies with our governance-focused
                trainings for organisations and professionals.
              </p>
              <button onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeats2@risktechadvisory.com/bookings/s/lhva7bA2akqv4vA5kQlEhQ2'}
                      className="text-[#A91F2FCC] border-[1px] border-[#A91F2FCC] h-[40px] w-[125px] rounded-[5px]">
                Book a session
              </button>
            </div>
            <div className="lg:w-[311px] flex flex-col items-center mb-10 lg:mb-0">
              <img src={Outsourcing} alt="" />
              <h4 className="text-[#424243] font-semibold text-[20px] mb-5 mt-3">
                Outsourcing
              </h4>
              <p className="text-[#424243] text-center max-w-[90%] mb-6">
                Free up time to focus on increasing your organisation's impact,
                outsource the management of your governance team to
                professionals.
              </p>
              <button onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeats3@risktechadvisory.com/bookings/s/0rPvWblN-EKW7XA3f_RwNw2'}
                      className="text-[#A91F2FCC] border-[1px] border-[#A91F2FCC] h-[40px] w-[125px] rounded-[5px]">
                Book a session
              </button>
            </div>
            <div className="lg:w-[311px] flex flex-col items-center mb-10 lg:mb-0">
              <img src={ExecutiveCoaching} alt="" />
              <h4 className="text-[#424243] font-semibold text-[20px] mb-5 mt-3">
                Executive Coaching
              </h4>
              <p className="text-[#424243] text-center max-w-[90%] mb-6">
                Experience our executive coaching services, as our coaches guide
                you to achieve your goals.
              </p>
              <button onClick={() => window.location.href = 'https://outlook.office365.com/owa/calendar/BoardSeat1@risktechadvisory.com/bookings/'}
                      className="text-[#A91F2FCC] border-[1px] border-[#A91F2FCC] h-[40px] w-[125px] rounded-[5px]">
                Book a session
              </button>
            </div>
          </div>
          <img src={UnionTop} alt="" className="absolute -top-28 w-full" />
          <img
            src={UnionBottom}
            alt=""
            className="absolute -bottom-52 w-full"
          />
        </div>
      </div>
      <div className="mt-24 px-[20px] xl:px-20 flex flex-col mb-20 items-center">
        <h4 className="text-[32px] font-semibold text-[#424243]">
          Insights and News
        </h4>
        <div className="flex flex-wrap lg:flex-nowrap mt-10 justify-center lg:justify-between w-full gap-3">
          <div className="settling relative h-[362px] w-[400px] flex mb-10">
            <div className="h-full w-full bg-custom-gradient z-10 absolute"></div>
            <p className="text-[20px] font-bold relative z-20 text-white ml-5 mb-5 max-w-[83%] mt-auto justify-self-start self-start">
            Driving Modern Governance through Technology
            </p>
          </div>
          <div className="transforming relative h-[362px] w-[400px] flex  mb-10">
            <div className="h-full w-full bg-custom-gradient z-10 absolute"></div>
            <p className="text-[20px] font-bold relative z-20 text-white ml-5 mb-5 max-w-[79%] mt-auto justify-self-start self-start">
            High Impact Strategic Recruitment.
            </p>
          </div>
          <div className="optimizing relative h-[362px] w-[400px] flex  mb-10">
            <div className="h-full w-full bg-custom-gradient z-10 absolute"></div>
            <p className="text-[20px] font-bold relative z-20 text-white ml-5 mb-5 max-w-[79%] mt-auto justify-self-start self-start">
            setting up your first board.
            </p>
          </div>
        </div>
        <button className="border-[#A91F2FCC] border-2 rounded-[5px] text-[#A91F2F] h-[40px] w-[157.6px] flex justify-center items-center justify-self-center self-center mx-auto mt-14">
          Read more <img src={RedArrow} alt="" className="ml-2" />
        </button>
      </div>
      <div className="bg-[#4242431A] flex flex-col items-center lg:flex-row overflow-hidden pt-40 pb-20 mt-32 lg:px-40 relative px-[20px]">
        <div className="lg:mr-[200px]">
          <h4 className="text-[#BD0B20] text-[18px] mb-5 font-semibold">
            Contact us
          </h4>
          <p className="text-[#353550] text-[24px] mb-3 font-bold">
            Drop us a line
          </p>
          <p className="text-[#424243] lg:max-w-[512px]">
            Are you looking to establish or strengthen your governance team, or
            are you seeking governance opportunity? Please send us your
            enquiries and feedback.{" "}
          </p>
        </div>
        <form action="" className="lg:w-[300px] mt-10 lg:mt-0">
          <input
            type="text"
            className="w-full h-[60px] bg-white border-none outline-none mb-5 pl-3"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="w-full h-[60px] bg-white border-none outline-none mb-5 pl-3"
            placeholder="Email Address"
          />
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="w-full h-[100px] bg-white border-none outline-none mb-5 resize-none pl-3 pt-3"
          ></textarea>
          <button className="w-full h-[60px] bg-[#BD0B20] border-none outline-none text-white uppercase">
            send
          </button>
        </form>
        <img src={Birds} alt="" className="absolute top-20 right-56" />
      </div>
    </>
  );
};

export default Home;
