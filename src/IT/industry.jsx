
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

export const Industry = () =>{
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
    return(
        <section className="bg-[#114280] text-white px-6 py-14 md:px-10 md:py-20 ">
        <div className="flex flex-col lg:flex-row gap-10">
      
          <div className="lg:w-1/2 space-y-4  lg:text-left ">
            <h2 className="text-lg opacity-70 hidden md:block">Industries</h2>
            <h1 className="text-3xl md:text-6xl font-bold leading-relaxed hidden md:block">
              Helping <span className="block"> Businesses in All</span>  Domains
            </h1>
             <p className="md:hidden font-semi-bold leading-relaxed text-4xl">CONTENT <span className="block">HEADING</span></p>
            <p className="text-base lg:text-lg leading-relaxed">
              To understand what we can do for you, start by understanding what we’ve done for others. We are proud of the strong working relationships
               we’ve built with all our clients over the years. We believe that these names are a testament to our proven capabilities and strategic approach.
            </p>
          </div>

       
          <div className="lg:w-full grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-36 md:h-36 bg-white flex items-center justify-center rounded-bl-3xl rounded-tr-3xl"
              >
                <img
                  src={icon}
                  alt={`icon-${index}`}
                  className="w-10 h-10 md:w-14 md:h-14"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}