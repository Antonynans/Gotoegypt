import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { SlArrowRight } from 'react-icons/sl'
import Footer from './Footer';

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <main id="about" className="bg-[#cca479] relative">
      <div className="container mx-auto pt-24 px-3">
        <p className="text-center text-sm pb-4">10 THINGS</p>
        <h1 className="lg:text-3xl text-white font-poppins text-center">
          You probably didn't know <br /> about{" "}
          <span className="text-black">ancient Egypt</span>
        </h1>
        <section className="lg:flex py-[10%] justify-center gap-x-[10%]">
          <div className="text-white lg:w-1/4">
            <h2 className="lg:text-3xl">
              His original name was Not Tutankhamum
            </h2>
            <p className="leading-7 py-6">
              Tutankhamum was originally named Tutankhaten. This name, which
              literally means "living image of the Aten", reflected the fact
              that Tutankhaten's parents worshipped a sun god known as "the
              Aten". After a few years on the throne the young king
            </p>
            <a href="#" className="text-black">
              Read More
            </a>
          </div>
          <div className="relative lg:h-[25rem] h-[230px] lg:w-[25rem] w-[230px] lg:mx-0 mx-auto">
            <div className="linear-gradient absolute h-full w-full rotate"></div>
            <img
              src="/image1.png"
              alt="image of Tutankhamum"
              className="absolute w-full h-full object-contain lg:-top-20 lg:-left-8"
            />
            <div className="absolute -right-8 top-0 flex vertical-text">
              
              <p className="text-sm rotate-text">Tutankhamum 1336-1327 BCE</p>
              <SlArrowRight className="text-white text-2xl rotate-45" />
            </div>
          </div>
        </section>

        <div className="flex lg:flex-row flex-col-reverse pt-[10%] pb-[5%] justify-center gap-x-[10%]">
          <div className="relative lg:h-[25rem] h-[250px] lg:w-[25rem] w-[250px] lg:mx-0 mx-auto lg:py-0 flex justify-center items-center">
            <div className="linear-gradient absolute h-full w-full rounded-full"></div>
            <img
              src="/cat.png"
              alt="image of Bastet"
              className="absolute lg:w-[120%] w-full h-full object-contain lg:-top-20 lg:-left-0"
            />
            <div className="absolute -left-8  flex vertical-text">
             
              <p className="text-sm rotate-text">Bastet 2890 BCE</p>
              <SlArrowRight className="text-white text-2xl rotate-135" />
            </div>
          </div>

          <div className="text-white lg:w-1/4">
            <h2 className="lg:text-3xl">
              Cats were represented In religious practices
            </h2>
            <p className="leading-7 py-6">
              Cats in ancient Egypt were represented in social and religious
              practices of Ancient Egypt for more than 30 centuries. Several
              Ancient Egypt deities were depicted and sculptured with cat-like
              heads such as Mafdet, Bastet and Sekhmet, representing justice,
              fertility and power. The deity Mut was also depicted as a cat and
              in the company of a cat.
            </p>
            <a href="#" className="text-black">
              Read More
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:pt-0 py-[10%]">
          <button className="border border-solid border-black flex items-center justify-center gap-x-2 h-14 bg-transparent px-16 text-lg">
            SHOW MORE <HiArrowLongRight />
          </button>
        </div>

        <section className="lg:py-0 py-[10%]">
          <p className="text-center text-sm pb-4">THE ANCIENT</p>
          <h1 className="lg:text-3xl text-white font-poppins text-center">
            Egyptian
            <span className="text-black"> civilization</span>
          </h1>
          <div className="lg:flex lg:w-3/4 mx-auto text-white py-[5%] leading-7 gap-x-[10%]">
            <p>
              The ancient Egyptian civilization, famous for its pyramids,
              pharaohs, mummies, and tombs, flourished for thousands of years.
              But what was its lasting impact?
            </p>
            <p>
              Watch the video below to learn how ancient Egypt contributed to
              modern-day society with its many cultural developments,
              particularly in language & mathematics.
            </p>
          </div>
          <div className="lg:w-3/4 lg:h-[40rem] mx-auto">
            <img
              src="/image2.jpg"
              alt="image of a man riding a camel"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="py-[10%]">
          <p className="text-center text-sm pb-4">GO BACK IN TIME</p>
          <h1 className="lg:text-3xl text-white font-poppins text-center">
            With our top
            <span className="text-black"> experiences</span>
          </h1>
          <p className="text-white lg:w-1/3 py-8 mx-auto text-center leading-7">
            magnificent monuments, lush delta, and with its long past and
            welcoming, story-loving people.
          </p>
          <div className="relative flex flex-col items-center justify-center pt-12">
            <div className="flex lg:flex-row flex-col lg:w-4/5 w-full mx-auto gap-y-4">
              <div className="relative lg:w-1/3 w-full lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn">
                <img
                  src="/red_pyramid.webp"
                  alt="image of red pyramid"
                  className="absolute w-full h-full object-cover"
                />
                <span className="absolute bottom-8 text-white text-center">
                  <p className="text-sm">GIZA</p>
                  <p className="lg:text-3xl font-poppins">Red Pyramid</p>
                </span>
              </div>
              <div className="relative lg:w-1/3 lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn">
                <img
                  src="/giza.jpeg"
                  alt="image of giza pyramid"
                  className="absolute w-full h-full object-cover"
                />
                <span className="absolute bottom-8 text-white text-center">
                  <p className="text-sm">CAIRO</p>
                  <p className="lg:text-3xl font-poppins">Giza Pyramids</p>
                </span>
              </div>
              <div className="relative lg:w-1/3 lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn">
                <img
                  src="/valley_of_kings.jpg"
                  alt="image of valley of kings"
                  className="absolute w-full h-full object-cover"
                />
                <span className="absolute bottom-8 text-white text-center">
                  <p className="text-sm">LUXOR</p>
                  <p className="lg:text-3xl font-poppins">Valley of Kings</p>
                </span>
              </div>
            </div>
            <button className="absolute left-4 lg:flex hidden flex-col bg-transparent border-none outline-none cursor-pointer">
              <HiArrowLongLeft className="text-2xl" /> BACK
            </button>
            <button className="absolute right-4 lg:flex hidden flex-col bg-transparent border-none outline-none cursor-pointer">
              <HiArrowLongRight className="text-2xl" /> NEXT
            </button>
          </div>
        </section>
        <section className="pb-[5%]">
        <p className="text-center text-sm pb-4">THANK YOU</p>
        <h1 className="lg:text-3xl text-white font-poppins text-center">
          To our Sponsors and <br /> Event
          <span className="text-black"> Partners</span>
        </h1>
        <div className="py-[5%] flex flex-wrap items-center justify-center gap-x-8">
          <img src="/national_geographic.png" alt="national geographic logo" className="w-20 h-20 object-contain" />
          <img src="/pyramid.png" alt="pyramid international logo" className="w-20 h-20 object-contain" />
          <img src="/bbc.jpg" alt="bbc logo" className="w-20 h-20 object-contain" />
          <img src="/lonely_planet.png" alt="lonely planet logo" className="w-20 h-20 object-contain" />
        </div>
        <div className="flex justify-center pb-[5%]">
          <button className="border border-solid border-black flex items-center justify-center gap-x-2 h-14 bg-transparent px-16 text-lg">
            BOOK NOW <HiArrowLongRight />
          </button>

        </div>
        <div className="flex justify-center">
        <img src="/donkey.png" alt="" className="w-[280px] object-cover bg-bottom" />
        </div></section>
      </div>
      <Footer />
    </main>
  );
}
