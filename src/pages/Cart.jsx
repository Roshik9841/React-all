import React from "react";
import mainBanner from "../assets/mainBanner 1.png";

import {Footer} from "../IT/footer.jsx";
import  {Contact}  from "../IT/contact.jsx";
import { Industry } from "../IT/industry.jsx";



function Cart() {
  return (
    <div className="bg-white w-full text-left max-w-full">
   
      <nav className="p-4 md:p-6  border-gray-200">
        <ul className="flex flex-row justify-between items-center ">
          <li className="font-bold text-xl md:text-2xl ">
            Logo
          </li>
          <div className="hidden md:flex flex-row gap-8 text-gray-700 font-medium">
            <li className="hover:text-[#114280] cursor-pointer">About</li>
            <li className="hover:text-[#114280] cursor-pointer">Contact</li>
          </div>
          <button className="md:hidden text-gray-700 text-2xl">&#9776;</button>
        </ul>
      </nav>

   
      <section className="bg-[#114280] flex flex-col md:flex-row justify-between items-center text-white rounded-lg font-aka p-6  md:py-14 lg:pl-14 m-4 md:m-8">
        <div className="w-full md:w-full space-y-4  md:text-left">
          <p className="hidden md:flex text-md opacity-90">
            Our experience helps to boost your business
          </p>
          <p className="md:hidden font-semi-bold leading-relaxed text-4xl">CONTENT <span className="block">HEADING</span></p>
          <h1 className=" hidden md:block text-3xl md:text-6xl  font-semibold leading-tight">
            We'll build you <span className="flex">custom websites and</span>{" "}
            manage it too!
          </h1>
          <p className="text-base opacity-90 justify-start">
            We’re a creative Web Design & Development Company in Kathmandu,
            <span className="md:block">
              Nepal. We build amazing websites and robust Software applications.
            </span>
          </p>
        </div>
        <div className="w-full md:w-[90%] mt-8 md:mt-0 flex justify-center lg:flex lg:justify-end">
          <img
            src={mainBanner}
            alt="Main banner"
            className="object-contain w-3/4 md:w-full"
          />
        </div>
      </section>

    
      
    <Industry/>
            <Contact/>
            <Footer/>
    </div>
  );
}

export default Cart;
