import React from "react";
import { IoIosSend } from "react-icons/io";
import logo from '../assets/ride-reserve-logo.png'

const CTA = () => {
  return (
    <section>
      <div className="bg-linear-to-r from-[#d1d5db] via-[#6b7280] to-[#374151] flex flex-col items-center justify-between gap-10 md:flex md:flex-row md:justify-between md:items-center rounded-tl-4xl rounded-tr-4xl px-4 py-4">
        <div className="flex flex-col items-center justify-center">
          <img src={logo} width="150" alt="" />
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="userEmail" className="text-xl font-poppins text-stone-700">Subscribe to our newsletter</label>
            <div className="flex gap-3">
              <input type="email" name="user-email" id="userEmail" placeholder="Email..." className="bg-white text-lg rounded-full py-2 px-4 text-center" />
              <button className="bg-black/50 rounded-full transition duration-200 hover:bg-black  cursor-pointer p-3"><IoIosSend className="text-2xl text-white" /></button>
            </div>            
          </div>
        </div>

        <div className="text-stone-200 text-center">
          <p className="font-bold text-2xl mb-3">Top cities</p>
          <div className="text-lg flex flex-col items-center">
          <p>New York</p>
          <p>Ogun</p>
          <p>Port Harcourt</p>
          <p>New York</p>
          <p>Glasgow</p>
          </div>
          
        </div>

        <div className="text-stone-200 text-center">
          <p className="font-bold text-2xl mb-3">Explore</p>
          <div className="text-lg flex flex-col items-center">
            <p>Limousine service</p>
            <p>Intercity rides</p>
            <p>Chauffeur service</p>
            <p>Private car service</p>
            <p>Airport transfer</p>
          </div>
          
        </div>

        <div className="text-stone-200 text-center">
          <p className="font-bold text-2xl mb-3">Intercity Rides</p>
          <div className="text-lg flex flex-col items-center">
            <p>New York - New Jersey</p>
            <p>Ogun - Port Harcourt</p>
            <p>Washington DC - Oregon</p>
            <p>Abuja - Lagos</p>
            <p>Akwa Ibom - Cross River</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
