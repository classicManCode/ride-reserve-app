import React from "react";
import heroImage from "../assets/hero-image.webp";
import Header from "./Header";

const Hero = () => {


  const displayMessage = () => {
    alert('Normally this would work but this is a website to showcase interface skills and responsiveness :)')
  }



  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="fixed w-full h-auto">
        <Header />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center text-center px-2 gap-6">
        <h1 className="text-3xl font-bold font-cardo italic">Ride Your Day - Reserve In Minutes</h1>
        <h2 className="font-poppins text-xl mb-6">
          Discover the smarter way to rent a car. With RideReserve, you can
          browse, book, and hit the road in minutes. No stress, no long
          lines—just smooth rides when you need them.
        </h2>
        <div className="md:flex md:flex-row md:gap-4 flex flex-col gap-4 text-lg">
          <a href="" onClick={displayMessage} className="py-2 px-4 bg-white text-black hover:bg-neutral-200 transition duration-300 hover:scale-105 hover:-translate-y-0.5 rounded">Get Started</a>
          <a href="" onClick={displayMessage} className="py-2 px-4 text-white border rounded hover:bg-slate-900 transition duration-300 hover:scale-105 hover:-translate-y-0.5">Pricing</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
