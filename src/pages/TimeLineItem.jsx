import React from 'react';

const TimelineItem = ({ data, isLeftAligned }) => {
  return (
    <div className={`relative flex items-center mb-16 ${isLeftAligned ? 'justify-start pr-12' : 'justify-end pl-12'}`}>
      <div className={`w-1/2`}>
        <div className={`text-3xl font-bold mb-2 ${isLeftAligned ? 'text-right' : 'text-left'}`}>{data.year}</div>
        <div className={`text-xl font-semibold mb-2 ${isLeftAligned ? 'text-right' : 'text-left'}`}>{data.title}</div>
        <p className={`text-base font-light ${isLeftAligned ? 'text-right' : 'text-left'}`}>{data.description}</p>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white"></div>
    </div>
  );
};

export default TimelineItem;