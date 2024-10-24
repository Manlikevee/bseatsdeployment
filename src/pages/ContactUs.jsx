import React from "react";
import MapBase from "../assets/Contact/mapbase.svg";

const ContactUs = () => {
  return (
    <div className="relative">
      <div className="contact relative h-[350px] overflow-hidden flex justify-center items-center">
        {/* <img src={ContactHeader} alt="" className="w-full absolute -z-10" /> */}
        <div className="h-full w-full absolute top-0 bg-[#0000004A] z-0"></div>
        <h4 className="text-white text-[64px] z-10">Contact Us</h4>
      </div>
      <div className="pt-40 pb-10 px-5 flex justify-center">
        <div className="flex flex-col lg:flex-row shadow-custom-shadow w-full md:w-[70%] lg:w-max relative -top-60">
          <div className="p-[30px] lg:p-10 bg-white rounded-t-[10px] lg:rounded-t-none lg:rounded-tl-[10px] ">
            <div className="flex flex-wrap justify-between items-center mb-5">
              <h4 className="text-[24px] sm:text-[32px] text-[#424243] font-semibold">
                Send a Message
              </h4>
              <select name="" id="" className="">
                <option value="">Board roles</option>
              </select>
            </div>
            <form action="" className="text-[#424243] myfrm">
              <div className="flex flex-col lg:flex-row mb-4 lg:gap-7">
                <div className="flex flex-col">
                  <label htmlFor="" className="">
                    First Name <span className="text-[#A91F2F]">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="">
                    Last Name <span className="text-[#A91F2F]">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row mb-4 lg:gap-7">
                <div className="flex flex-col">
                  <label htmlFor="" className="">
                    Phone Number <span className="text-[#A91F2F]">*</span>
                  </label>
                  <input
                    type="number"
                    className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="">
                    Email <span className="text-[#A91F2F]">*</span>
                  </label>
                  <input
                    type="email"
                    className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[158.86px] w-full resize-none max-w-full"
                ></textarea>
              </div>
            </form>
            <button className="uppercase h-[50px] w-full sm:w-[200px] bg-[#A91F2F] text-white rounded-[5px] mt-5">
              send
            </button>
          </div>

          <div className="h-full bg-[#A91F2F] overflow-hidden lg:rounded-r-[10px] text-white rounded-b-[10px] lg:rounded-b-none">
            <div className="p-[30px] lg:p-10">
              <h4 className="text-white text-[32px] font-semibold mb-5">
                Contact info
              </h4>

              <div className="mb-5">
                <p className="font-semibold">Address</p>
                <p className="text-[14px]">22, Glover Road, Ikoyi, Lagos</p>
              </div>

              <div className="mb-5">
                <p className="font-semibold">Contact Number</p>
                <p className="text-[14px]">+2347042738875, +2348029711875</p>
              </div>

              <div className="-mb-5">
                <p className="font-semibold">Email</p>
                <p className="text-[14px]">enquiries@boardseats.io</p>
              </div>
            </div>
            <img src={MapBase} alt="" className="w-full opacity-40 -mb-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
