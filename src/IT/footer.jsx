import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#1F2529] text-gray-300 px-6 md:px-12 py-10">
     
      <div className="flex flex-col md:flex-row space-x-6 items-center md:items-start gap-6 border-b border-gray-700 pb-6">
        <p className="text-sm uppercase ">Be Social With Us</p>

        <div className="flex space-x-5 text-white text-lg">
          <FaFacebookF className="hover:text-purple-500 cursor-pointer transition" />
          <FaTwitter className="hover:text-purple-500 cursor-pointer transition" />
          <FaLinkedinIn className="hover:text-purple-500 cursor-pointer transition" />
          <FaYoutube className="hover:text-purple-500 cursor-pointer transition" />
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8 gap-10">
  
        <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nunc sed justo
          vestibulum tristique in sed lorem. Fusce convallis purus et rhoncus cursus. Sed commodo
          auctor est, eu pellentesque magna.
        </p>

    
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-purple-500 cursor-pointer transition">Home</li>
            <li className="hover:text-purple-500 cursor-pointer transition">About</li>
            <li className="hover:text-purple-500 cursor-pointer transition">
              Get a Free Estimate
            </li>
            <li className="hover:text-purple-500 cursor-pointer transition">Contact</li>
            <li className="hover:text-purple-500 cursor-pointer transition">Blog</li>
          </ul>
        </div>
      </div>

     
    </footer>
  );
};
