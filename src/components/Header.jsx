import React from "react";
import logo from "../assets/ride-reserve-logo.png";
import { IoIosSearch } from "react-icons/io";
import { ImMenu3 } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";


const Header = () => {



  const showSidebar = () => {
    const sidebar = document.getElementById('sidebar')
    sidebar.style.display = 'flex'
  }

  const closeSidebar = () => {
    const sidebar = document.getElementById('sidebar')
    sidebar.style.display = 'none'
  }

  const displayMessage = () => {
    alert('Normally this would work but this is a website to showcase interface skills and responsiveness :)')
  }


  return (
    <div>
      <header className="flex justify-center">
        <div id="sidebar" className="bg-black/50 border border-white/60 hidden flex-col items-center backdrop-blur-[5px] fixed top-0 z-999 w-full h-screen">
        <div className="fixed top-7">
          <MdOutlineClose onClick={closeSidebar} className="text-3xl text-white mt-5" />
        </div>
          <img
            src={logo}
            alt="Ride Reserve Logo"
            className="max-h-full h-auto max-w-full mt-10"
          />
          <ul className="flex flex-col items-center  gap-10 no-underline p-6 w-full text-center">
            <li className="w-full">
              <a href="" className="hover:bg-neutral-300/50 block text-2xl rounded-full">Home</a>
            </li>
            <li className="w-full">
              <a href="" className="hover:bg-neutral-300/50 block text-2xl rounded-full">Fleet</a>
            </li>
            <li className="w-full">
              <a href="" className="hover:bg-neutral-300/50 block text-2xl rounded-full">Contact</a>
            </li>
          </ul>
        </div>

              {/* Top is for mobile -- Bottom is for Desktop and tablet */}

        <div className="bg-white/30 border border-white/60 h-20 w-[85%] flex justify-between items-center rounded-full px-8 mt-4 backdrop-blur-[5px]">
          <img
            src={logo}
            alt="Ride Reserve Logo"
            className="max-h-full h-auto max-w-full"
          />
          <ul className="hidden md:flex items-center gap-8 no-underline p-6">
            <li className="p-4">
              <a href="" className="hover:bg-white/20 w-full p-4 transition duration-400">Home</a>
            </li>
            <li className="p-4">
              <a href="" className="hover:bg-white/20 w-full p-4 transition duration-400" >Fleet</a>
            </li>
            <li className="p-4">
              <a href="" className="hover:bg-white/20 w-full p-4 transition duration-400">Contact</a>
            </li>
          </ul>
          <ImMenu3 onClick={showSidebar} className="text-xl md:hidden flex text-neutral-200" />
          <div>
            <p onClick={displayMessage} className="md:flex cursor-pointer hidden">Search</p>
            <IoIosSearch onClick={displayMessage} className="md:hidden flex text-neutral-200 text-lg" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
