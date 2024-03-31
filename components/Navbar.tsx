import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-6 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-6 sm:px-16">
        <Link href="/">
          <Image src="/jsm-logo.svg" width={50} height={40} alt="V Logo" />
        </Link>

        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger Menu"
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-2 max-md:hidden md:gap-x-7">
          <li
            className="body-text text-gradient_blue-purple !font-bold relative
              cursor-pointer 
              before:absolute 
              before:w-full 
              before:h-[2px] 
              before:-bottom-1
              before:bg-indigo-300
              before:hover:scale-x-100
              before:scale-x-0 
              before:origin-top-left
              before:transition 
              before:ease-in-out 
              before:duration-300"
          >
            <Link href="https://vishalparmarportfolio.live" target="_blank">
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/parmar-vishal"
              target="_blank"
            >
              <button className="text-sky-500 text-base ${color} hover:text-white border-2 p-2 border-indigo-600 hover:bg-indigo-600 rounded-full transition-all duration-300">
                <FaLinkedin />
              </button>
            </Link>
          </li>

          <li>
            <Link href="https://github.com/vishalparmarr" target="_blank">
              <button className="text-white-500 text-base ${color} hover:text-white border-2 p-2 border-indigo-600 hover:bg-indigo-600 rounded-full transition-all duration-300">
                <FiGithub />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
