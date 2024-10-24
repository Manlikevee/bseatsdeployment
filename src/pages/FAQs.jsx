import React, { useState } from "react";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import DownArrow from "../assets/FAQ/downArrow.svg";
import UpArrow from "../assets/FAQ/upArrow.svg";
import One from "../assets/FAQ/first.svg";
import Two from "../assets/FAQ/second.svg";
import Three from "../assets/FAQ/third.svg";
import Four from "../assets/FAQ/fourth.svg";
import Birds from "../assets/Home/birds.svg";
import Five from "../assets/FAQ/fifth.svg";
import Six from "../assets/FAQ/sixth.svg";
import Seven from "../assets/FAQ/seventh.svg";
import Eight from "../assets/FAQ/eight.svg";
import Nine from "../assets/FAQ/ninth.svg";
import Ten from "../assets/FAQ/tenth.svg";
import Eleven from "../assets/FAQ/eleventh.svg";
import Twelve from "../assets/FAQ/twelvth.svg";
import Thirteen from "../assets/FAQ/thirteenth.svg";
import Fourteen from "../assets/FAQ/fourteenth.svg";
import Fifteen from "../assets/FAQ/fifteenth.svg";
import Sixteen from "../assets/FAQ/sixteenth.svg";
import Seventeen from "../assets/FAQ/seventeenth.svg";

const FAQs = () => {
  // FAQ data array
  const faqData = [
    {
      image: One,
      question: "Why BoardSeats?",
      answer:
        "BoardSeats is open to professionals with board experience or those aspiring to board roles. It is ideal for executives, industry experts, and leaders across various sectors looking to contribute their skills to Heavy reliance on limited networks, along with traditional search methods that have proven to be time-consuming and resource-intensive, often result in organisations missing out on exceptional board talents that could drive significant business growth. BoardSeats solves this problem by streamlining the board recruitment process using our carefully designed auto-matching system that matches organisations with potential candidates based on their expertise, experience, and alignment with your strategic needs. Simply post your board role, and our platform will help you connect with qualified executives. governance and advisory roles.",
    },
    {
      image: Two,
      question: "Who can join BoardSeats",
      answer:
        "BoardSeats is open to executives with board-ready experience, as well as aspiring board members. It is ideal for executives, industry experts, and leaders across various sectors, and organisations, such as listed entities, private companies, non-profits, startups and government owned entities.",
    },
    {
      image: Three,
      question: "How do I post a board role on BoardSeats?",
      answer:
        "Posting a role is simple. Create a corporate account, complete your corporate profile, and fill out your role by selecting the bouquet that best suits your current needs and requirements. Once your role is successfully posted, you will start receiving applications from registered candidates. ",
    },
    {
      image: Four,
      question: "Can I get assistance with setting up my board?",
      answer:
        "Yes, our enterprise and enterprise pro bouquets are designed for organisations who don't have the time or require external expertise to manage their entire recruitment process. From posting roles to screening, assessment and onboarding, our team manages the entire process for you, saving valuable time and adding our expert recruitment input for the success of your search. Our experts can support you in building a board that aligns with your organisational goals. ",
    },
    {
      image: Five,
      question: "Do small businesses or organisations need a board?",
      answer:
        "Yes, a well-structured business whether small or large should have a board. Having a strong board brings diverse perspectives, expertise, and leadership to the enterprise, helping to steer the organisations through challenges and opportunities. ",
    },
    {
      image: Six,
      question: "Is there a fee to joining BoardSeats as an individual? ",
      answer: "No, BoardSeats is currently free to all candidates. ",
    },
    {
      image: Seven,
      question: "Is there a fee to joining BoardSeats as an organisation?  ",
      answer:
        "Yes, we have 4 bouquets. Please see the Pricing Page for more details. ",
    },
    {
      image: Eight,
      question: "Are there resources to help me use BoardSeats effectively? ",
      answer:
        "Yes, absolutely. We provide; a comprehensive user guide, tutorial videos, periodic webinars, and one-on-one support as needed. ",
    },
    {
      image: Nine,
      question: "Can we post multiple board positions? ",
      answer:
        "Yes, organisations can post multiple board positions, manage all postings from a central dashboard, and receive tailored matches for each position. ",
    },
    {
      image: Ten,
      question:
        "Is my personal information secure during the verification process?",
      answer:
        "Yes, absolutely. We use industry-standard encryption and security measures to protect your data. Your documents are only accessible to our authorised verification team and are never shared with other users or third parties. ",
    },
    {
      image: Eleven,
      question: "How can I ensure my resume is parsed correctly?",
      answer:
        "For optimal resume parsing: Use standard resume formats Ensure clear section headings Review the parsed information for accuracy Make manual adjustments if needed",
    },
    {
      image: Twelve,
      question: "How are board opportunities matched to my profile? ",
      answer:
        "Board opportunities are matched to your profile using a tailored approach based on several key factors such as industry expertise, years of experience, specific skills and qualifications, and geographical location if applicable. ",
    },
    {
      image: Thirteen,
      question: "Can I update my profile after verification?",
      answer:
        "Yes, you can update necessary parts of your profile at any time. ",
    },
    {
      image: Fourteen,
      question: "What is a Letter of Good Standing and how do I obtain one?",
      answer:
        "A Letter of Good Standing is a document that confirms your professional status and conduct. It can typically be obtained from: Professional associations you belong to The letter should confirm your work experience and professional integrity.",
    },
    {
      image: Fifteen,
      question: "Why do I need to verify my identity on BoardSeats?",
      answer:
        "BoardSeats is committed to maintaining a trusted network of genuine candidates. Identity verification helps ensure the authenticity of all users on our platform, creating a secure environment for board-level connections and opportunities. The required documents are: Government-issued ID (passport, driver's license, or national ID card) and Letter of Good Standing or equivalent professional reference. ",
    },
    {
      image: Sixteen,
      question: "Can I update my profile after creating it? ",
      answer:
        'Yes, you can update your profile at any time by following these steps: Log in to your account. Go to the "Profile" section. Make the necessary changes. Save your updates. This ensures your profile stays current and reflects your most recent experiences and skills. ',
    },
    {
      image: Seventeen,
      question:
        "Can I sign up as both an executive and an organization on BoardSeats? ",
      answer:
        "Yes, you can sign up as both an executive and an organisation on BoardSeats. However, each profile needs to be created using separate email addresses, as they serve different purposes and come with distinct features. For the executive profile, you'll need to use a personal email address, while for the organisation profile, you should use your corporate email address. ",
    },
  ];

  // State to track the currently active accordion
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the accordion by index
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="faqs__header h-[347px] w-full relative flex flex-col justify-center text-white md:px-28 px-[20px]">
        <div className="absolute w-full h-full left-0 bg-[#0000007A]"></div>
        <div className="z-30">
          <h4 className="text-[35px] md:text-[40px] lg:text-[48px] xl:text-[64px] font-semibold md:max-w-[75%] lg:max-w-[90%] mb-2">
            Frequently Asked Questions
          </h4>
          <p className="text-base lg:text-lg md:max-w-[70%] lg:max-w-[90%] xl:max-w-[60%] mb-20 leading-[1.1]">
            Explore a more effective approach to board recruitments; access a
            larger pool of board-ready talents, position yourself for the board
            role you desire.
          </p>
        </div>
      </div>
      <div className="faq-section md:px-28 px-[20px] py-10">

      <Accordion transition transitionTimeout={250}>
  {faqData && faqData.length > 0 && (
    faqData.map((item, index) => (
      <AccordionItem
        key={index}
        header={
          <div className="accordioncontrol">
            <div className="questionbox">
            <img src={item.image} alt="" />
            <p className="text-[16px] md:text-[19px] lg:text-[19px] font-semibold leading-[24px]">{item.question}</p>

            </div>
            <img src={UpArrow} alt=""  className='uparrow'/>
            <img src={DownArrow} alt=""  className='downarrow'/>
          </div>
        }
      >
        <div className="accordion-body">
          <div className="emptybox"></div>
          {item.answer}
        </div>
      </AccordionItem>
    ))
  )}
</Accordion>
</div>

<br />
<br />
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

      {/* FAQ Accordion Section */}
      {/* <div className="faq-section md:px-28 px-[20px] py-10">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-[#A91F2F] py-10 cursor-pointer transition-all ${
              activeIndex === index ? "bg-[#A91F2F] text-white" : "bg-white"
            } px-5`}
          >
        
            <div
              className="flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center gap-2">
                <img src={faq.image} alt="" />
                <h5 className="text-lg font-semibold">{faq.question}</h5>
              </div>

              <div>
                {activeIndex === index ? (
                  <img src={UpArrow} alt="" />
                ) : (
                  <img src={DownArrow} alt="" />
                )}
              </div>
            </div>

         
            {activeIndex === index && (
              <div className="mt-5 lg:max-w-[60%] lg:ml-16">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div> */}
  
    </div>
  );
};

export default FAQs;
