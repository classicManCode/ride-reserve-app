import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { TbCreditCardPay } from "react-icons/tb";
import { TbCreditCardRefund } from "react-icons/tb";

const RentHire = () => {


  const displayMessage = () => {
    alert('Normally this would work but this is a website to showcase interface skills and responsiveness :)')
  }


  return (
    <div>
      <section className="flex flex-col items-center gap-10 my-30 px-6 md:flex md:flex-row md:items-center md:justify-center md:gap-8 md:px-20">
        <div className="bg-zinc-300 p-4 flex flex-col gap-4  md:max-w-[500px] md:h-[250px] rounded-xl md:flex md:flex-col md:justify-center md:items-start md:gap-4 max-w-[300px] shadow-[0px_8px_15px_-10px_rgba(0,0,0,0.8)] transition duration-400 hover:-translate-y-2">
          <p className="font-poppins font-bold text-xl">
            Find the Right Car for Every Trip
          </p>
          <p className="text-lg font-roboto">
            Choose from reliable cars near you and hit the road in minutes —
            simple, fast, and stress-free.
          </p>
          <div className="flex justify-between items-center w-full">
            <div onClick={displayMessage} className="border px-3 py-1 rounded-md flex items-center gap-3">
              <a href="">Get Started</a>
              <CiLocationArrow1 className="text-lg" />
            </div>
            <TbCreditCardPay className="text-3xl" />
          </div>
        </div>

        {/* card demacation haha */}

        <div className="bg-violet-300/70 p-4 flex flex-col gap-4  md:max-w-[500px] md:h-[250px] rounded-xl md:flex md:flex-col md:justify-center md:items-start md:gap-4 md:p-8 max-w-[300px] shadow-[0px_8px_15px_-10px_rgba(0,0,0,0.8)] transition duration-400 hover:-translate-y-2">
          <p className="font-poppins font-bold text-xl">
            Earn Money from Your Car
          </p>
          <p className="text-lg font-roboto">
            List your car, set your price, and start earning with trusted
            renters.
          </p>
          <div className="flex justify-between items-center w-full">
            <div onClick={displayMessage} className="border px-3 py-1 rounded-md flex items-center gap-3">
              <a href="">Get Started</a>
              <CiLocationArrow1 className="text-lg" />
            </div>
            <TbCreditCardRefund className="text-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentHire;
