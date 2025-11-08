import like from "../assets/like.png";

export const Contact = ()=>{
    return(
 <section className="px-6 md:px-10 py-16 flex flex-col md:flex-row items-center justify-between bg-gray-50 text-center md:text-left">
        <div className="md:w-1/2 space-y-7 ">
          <p className="text-sm uppercase  text-gray-500">
            Let’s Get Started With Your Project
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Have a Question or Ready to Grow Your Business Today?
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            We will satisfy you fully as per your expectation in delivering our
            services.{" "}
            <span className="font-bold text-gray-900">
              Contact Us Today,
            </span>{" "}
            and we will help you achieve your goals and grow your business.
          </p>
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded font-medium transition">
            Get a Quote
          </button>
        </div>

        <div className="md:w-[60%] flex justify-center mt-10 md:mt-0">
          <img
            src={like}
            alt="Illustration"
            className="w-56 sm:w-72 md:w-[90%]"
          />
        </div>
      </section>
    );
}