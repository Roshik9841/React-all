// // src/components/Timeline.jsx
// import React from 'react';
// import TimelineItem from '../pages/TimeLineItem';

// const Timeline = () => {
//   const timelineData = [
//     {
//       year: '2025/26',
//       title: 'Prime Creative Hub Revamp',
//       description: 'With a focus on technology, our vision is to provide hands-on experience that enhances IT skills and promotes industry best practices.',
//     },
//     {
//       year: '2024/25',
//       title: 'Prime Creative Hub Reinitiated',
//       description: 'With its reinitiation, Prime Creative Hub aims to foster creativity and technology by keeping the technical side separate from event management.',
//     },
//   ];

//   return (
//     <div className="bg-black text-white min-h-screen py-16 px-8 relative">
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-cyan-500 h-full"></div>
//       {timelineData.map((item, index) => (
//         <TimelineItem key={index} data={item} isLeftAligned={index % 2 === 0} />
//       ))}
//     </div>
//   );
// };

// export default Timeline;

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Brand Logo or Name */}
      <div className="text-xl font-bold">My Brand</div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Full Navigation Links */}
      <div className="hidden md:flex  space-x-10" >
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">About</a>
        <a href="#" className="hover:text-gray-400">Services</a>
        <a href="#" className="hover:text-gray-400">Contact</a>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-700 p-4 flex flex-col items-center space-y-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;