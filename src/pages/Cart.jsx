import React from "react";
import mainBanner from "../assets/mainBanner 1.png";
import bank1 from "../assets/bank 1.png";
import ecommerce1 from "../assets/ecommerce 1.png";
import government1 from "../assets/government 1.png";
import healthcare1 from "../assets/healthcare 1.png";
import network1 from "../assets/network 1.png";
import onlineConference1 from "../assets/online-conference 1.png";
import skyline1 from "../assets/skyline 1.png";
import skyline2 from "../assets/skyline 2.png";
import skyline3 from "../assets/skyline 3.png";
import tourism1 from "../assets/tourism 1.png";
import video1 from "../assets/video 1.png";
import graduationCap1 from "../assets/graduation-cap 1.png";
import like from "../assets/like.png"; // ✅ Add your contact illustration


import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const icons = [
  network1,
  government1,
  ecommerce1,
  video1,
  bank1,
  skyline1,
  graduationCap1,
  tourism1,
  healthcare1,
  onlineConference1,
  skyline2,
  skyline3,
];

function Cart() {
  return (
    <div className="bg-white max-w-screen-2xl mx-auto">
      {/* Navigation */}
      <nav className="p-6">
        <ul className="flex flex-row justify-between items-center">
          <li className="font-bold text-2xl text-[#114280]">Logo</li>
          <div className="flex flex-row gap-10 text-gray-700 font-medium">
            <li className="hover:text-[#114280] cursor-pointer">About</li>
            <li className="hover:text-[#114280] cursor-pointer">Contact</li>
          </div>
        </ul>
      </nav>

      {/* Main Banner */}
      <div className="bg-[#114280] flex flex-col md:flex-row justify-between items-center rounded-lg text-white font-aka p-10 md:p-14 m-6">
        <div className="w-full space-y-5">
          <p className="text-sm opacity-90">
            Our experience helps to boost your business
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            We'll build you <span className="block">custom websites and</span>
            manage it too!
          </h1>
          <p className="text-base opacity-90">
            We’re a creative Web Design & Development Company in Kathmandu,<span className="block">
            Nepal. We build amazing websites and robust Software applications.</span>
          </p>
        </div>
        <div className="relative w-full mt-8 md:mt-0">
          <img
            src={mainBanner}
            alt="Main banner"
            className="object-contain w-[80%] mx-auto"
          />
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-[#114280] text-white px-10 py-20 max-w-screen-xl mx-auto rounded-lg">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-sm uppercase opacity-70">Industries</h2>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Helping Businesses in All Domains
            </h1>
            <p className="text-base lg:text-lg leading-relaxed">
              To understand what we can do for you, start by understanding what
              we've done for others. We are proud of the strong working
              relationships we've built with all our clients over the years.
            </p>
          </div>

          {/* Right */}
          <div className="lg:w-1/2 grid grid-cols-4 gap-4">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-lg flex items-center justify-center"
              >
                <img
                  src={icon}
                  className="w-10 h-10 lg:w-14 lg:h-14"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="px-8 py-16 flex flex-col md:flex-row items-center justify-between bg-gray-50">
        <div className="md:w-1/2 space-y-5">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Let’s Get Started With Your Project
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Have a Question or Ready to Grow Your Business Today?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We will satisfy you fully as per your expectation in delivering our
            services.{" "}
            <span className="font-semibold text-gray-900">
              Contact Us Today,
            </span>{" "}
            and we will help you achieve your goals and grow your business.
          </p>
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded font-medium transition">
            Get a Quote
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={like}
            alt="Illustration"
            className="w-72 md:w-96"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
          {/* Left Section */}
          <div className="space-y-6 md:w-1/2">
            <div>
              <p className="text-sm mb-2">Be Social With Us</p>
              <div className="flex space-x-4 text-white">
                <FaFacebookF className="hover:text-purple-500 cursor-pointer" />
                <FaTwitter className="hover:text-purple-500 cursor-pointer" />
                <FaLinkedinIn className="hover:text-purple-500 cursor-pointer" />
                <FaYoutube className="hover:text-purple-500 cursor-pointer" />
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ultrices nunc sed justo vestibulum tristique in sed lorem. Fusce
              convallis purus et rhoncus cursus. Sed commodo auctor est, eu
              pellentesque magna.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-purple-500 cursor-pointer">Home</li>
              <li className="hover:text-purple-500 cursor-pointer">About</li>
              <li className="hover:text-purple-500 cursor-pointer">
                Get a Free Estimate
              </li>
              <li className="hover:text-purple-500 cursor-pointer">Contact</li>
              <li className="hover:text-purple-500 cursor-pointer">Blog</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
