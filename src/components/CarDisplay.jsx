import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const CarDisplay = () => {
  const [cars, setCars] = useState([]);
  const [likedCars, setLikedCars] = useState([]);



  
    const fetchCars = async () => {
    try {
      const { data, error } = await supabase.from("carRental").select("*");
      if (error) {
        throw new Error("Invalid data");
      } else {
        setCars(data);
        console.log(data)
      }
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() => {
    fetchCars();
  }, []);


  


  const handleLikeButton = (carId) => {
    if (likedCars.includes(carId)) {
      // Unlike
      setLikedCars(likedCars.filter((id) => id !== carId));
    } else {
      // Like
      setLikedCars([...likedCars, carId]);
    }
  };

  const displayMessage = () => {
    alert('Normally this would work but this is a website to showcase interface skills and responsiveness :)')
  }


  return (
 

    <div>
      <div className="md:grid md:grid-cols-3 md:gap-4 grid grid-cols-1 grid-rows-1 gap-4 px-2">
        {cars
          .filter((car) => car.make !== "Toyota")
          .map((car) => (
            <div key={car.id} className="p-2 rounded-xl bg-white/50">
              <div className="w-full overflow-hidden">
                <img src={car.image} alt={car.name} className="rounded-md w-full h-full object-cover" />
              </div>~
              
              <div className="p-4">
                <p className="text-red-500 text-2xl">{car.make}</p>
                <p className="text-blue-400 text-lg">{car.name.toUpperCase()}</p>
                <p className="text-red-500 text-xl">{`Price: $${car.price}`}<span className="text-gray-500 text-sm">/day</span></p>
              </div>

              <div className="flex justify-between px-4 mt-8">
                <span onClick={displayMessage} className="text-black flex items-center cursor-pointer gap-4 px-1 py-1">VIEW DETAILS <FaArrowRightLong /></span>
                <div
                  className="cursor-pointer rounded p-2 bg-gray-400/50 hover:bg-gray-400 transition duration-500"
                  onClick={() => handleLikeButton(car.id)}
                >
                  {likedCars.includes(car.id) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaHeart className="text-white" />
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarDisplay;
