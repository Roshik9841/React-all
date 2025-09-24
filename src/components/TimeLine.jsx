// src/components/Timeline.jsx
import React from 'react';
import TimelineItem from '../pages/TimeLineItem';

const Timeline = () => {
  const timelineData = [
    {
      year: '2025/26',
      title: 'Prime Creative Hub Revamp',
      description: 'With a focus on technology, our vision is to provide hands-on experience that enhances IT skills and promotes industry best practices.',
    },
    {
      year: '2024/25',
      title: 'Prime Creative Hub Reinitiated',
      description: 'With its reinitiation, Prime Creative Hub aims to foster creativity and technology by keeping the technical side separate from event management.',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16 px-8 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-cyan-500 h-full"></div>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} data={item} isLeftAligned={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Timeline;