import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
// import { useNavigate, } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  // const navigate = useNavigate();

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center lg:bg-transparent bg-[url('/home.png')] bg-cover lg:relative fixed z-20">
      <div className="container mx-auto lg:px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4 lg:w-1/3">
            <span className="flex items-center gap-x-2 font-bold text-2xl">
              <h1 className="font-poppins text-white text-3xl font-bold">
                GOTO
                <span className="text-[#ce8a5c]">EGYPT.</span>
              </h1>
            </span>
          </div>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            <a
              href="#home"
              className="leading-normal text-lg no-underline text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="leading-normal text-lg no-underline text-white"
            >
              Explore
            </a>
            <a
              href="#"
              className="leading-normal text-lg no-underline text-white"
            >
              Articles
            </a>
            <a
              href="#"
              className="leading-normal text-lg no-underline text-white"
            >
              Galries
            </a>
            <a
              href="#"
              className="leading-normal text-lg no-underline text-white"
            >
              Contact
            </a>
          </ul>
          <div className="lg:block hidden">
            <TbGridDots className="text-[#ce8a5c] text-4xl" />
          </div>

          {dropdown ? (
            <div
              className="lg:hidden text-[22px] cursor-pointer text-black "
              onClick={showDropdown}
            >
              <MdClose />
            </div>
          ) : (
            <div
              className="lg:hidden text-[22px] cursor-pointer text-black "
              onClick={showDropdown}
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>

        {dropdown ? (
          <div
            className="lg:hidden w-full h-full fixed top-24 bg-[url('/home.png')] bg-cover ease-in-out duration-100 "
            onClick={showDropdown}
          >
            <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
              <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                <a
                  href="#home"
                  className="leading-normal text-lg text-[#b2ab9f] no-underline"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="leading-normal text-lg no-underline text-white"
                >
                  Explore
                </a>
                <a
                  href="#"
                  className="leading-normal text-lg no-underline text-white"
                >
                  Articles
                </a>
                <a
                  href="#"
                  className="leading-normal text-lg no-underline text-white"
                >
                  Galries
                </a>
                <a
                  href="#s"
                  className="leading-normal text-lg no-underline text-white"
                >
                  Contact
                </a>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
