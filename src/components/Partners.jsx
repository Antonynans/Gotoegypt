import { HiArrowLongRight } from "react-icons/hi2";

export default function Partners() {
  return (
    <main className="pb-[5%] relative bg-[#cca479]">
      <img
        src="/bg_image.png"
        alt=""
        className="absolute h-full w-full opacity-10"
      />
      <div className="relative z-10">
        <p className="text-center text-sm pb-4">THANK YOU</p>
        <h1 className="lg:text-3xl text-white font-poppins text-center">
          To our Sponsors and <br /> Event
          <span className="text-black"> Partners</span>
        </h1>
        <div className="py-[5%] flex flex-wrap items-center justify-center gap-x-8">
          <img
            src="/national_geographic.svg"
            alt="national geographic logo"
            className="lg:w-52 w-40 lg:h-52 object-contain"
          />
          <img
            src="/pyramid.svg"
            alt="pyramid international logo"
            className="lg:w-52 w-40 lg:h-52 object-contain"
          />
          <img
            src="/bbc.svg"
            alt="bbc logo"
            className="lg:w-52 w-40 lg:h-52 object-contain"
          />
          <img
            src="/lonely_planet.svg"
            alt="lonely planet logo"
            className="lg:w-52 w-40 lg:h-52 object-contain"
          />
        </div>
        <div className="flex justify-center pb-[5%]">
          <button className="border border-solid border-black flex items-center justify-center gap-x-2 h-14 bg-transparent px-16 text-lg hoverButton">
            BOOK NOW <HiArrowLongRight />
          </button>
        </div>
        <div className="flex justify-center">
         {/* <img
            // src="/donkey.png"
            alt=""
            className="h-[180px] object-cover bg-bottom"
          />  */}
        </div>
      </div>
    </main>
  );
}
