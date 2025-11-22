import React from "react";


const HeroX2 = ({ title, image, }) => {
  



  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex justify-between items-center rounded-tl-2xl rounded-bl-2xl bg-linear-to-r from-slate-800 via-zinc-400 to-slate-500 md:h-screen h-[300px] w-full">
        <h2 className="w-1/2 text-white text-center">{title}</h2>
        <div className="w-[50%] h-full flex justify-center items-center overflow-hidden">
          <img src={image} alt=""  className="w-full h-full object-cover opacity-70" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroX2;
