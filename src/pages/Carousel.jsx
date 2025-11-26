import { useState } from "react";

export default function Carousel() {
  const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1020/800/400",
    "https://picsum.photos/id/1035/800/400"
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-8">

      {/* IMAGES */}
      <img
        src={images[index]}
        alt="slide"
        className="w-full rounded-xl shadow-lg transition-all duration-500"
      />

      {/* PREV BUTTON */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 -translate-y-1/2 
                 bg-black/50 text-white px-3 py-2 rounded-full
                 hover:bg-black/70"
      >
        ◀
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={next}
        className="absolute top-1/2 right-3 -translate-y-1/2 
                 bg-black/50 text-white px-3 py-2 rounded-full
                 hover:bg-black/70"
      >
        ▶
      </button>

      {/* DOT INDICATORS */}
       <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}   // << CLICK TO CHANGE IMAGE
            className={`
              h-3 w-3 rounded-full cursor-pointer
              ${i === index ? "bg-blue-500 scale-125" : "bg-gray-300"}
            `}
          ></div>
        ))}
      </div>
    </div>
  );
}
