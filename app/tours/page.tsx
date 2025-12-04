"use client";

import React, { FC } from "react";
import TopBanner from "../Components/TopBanner";
import { Clock, Star } from "lucide-react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

interface Destination {
  name: string;
  img: string;
  time: string;
  star: string;
  price: string;
}

const Tours: FC = () => {
  const destinationJson: Destination[] = [
    { name: "Bali", img: "/Bali.jpg", time: "5 Days - 4 Nights", star: "3 (12 reviews)", price: "69,999" },
    { name: "Venice", img: "/Venice.jpg", time: "5 Days - 4 Nights", star: "3 (12 reviews)", price: "69,999" },
    { name: "Tokyo", img: "/Tokyo.jpg", time: "5 Days - 4 Nights", star: "3 (12 reviews)", price: "69,999" },
    { name: "India", img: "/India.jpg", time: "5 Days - 4 Nights", star: "3 (12 reviews)", price: "69,999" },
  ];

  return (
    <>
    <Navbar />
      <TopBanner text="Tours" />
      <div className="max-w-7xl mx-auto my-10 px-4 md:px-0">
        <h1 className="text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center">Top Destination</h1>
        <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
          {destinationJson.map((destination) => (
            <div key={destination.name} className="overflow-hidden border shadow-lg rounded-lg w-full">
              <img
                src={destination.img}
                alt={destination.name}
                className="object-cover w-full h-48 hover:scale-110 transition-all"
              />

              <div className="p-4">
                <p className="text-gray-500 flex items-center gap-1 text-sm mb-1">
                  <Clock width={15} /> {destination.time}
                </p>
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="flex gap-1 items-center">
                  <Star width={20} fill="red" /> {destination.star}
                </p>
                <p className="text-gray-600 mb-4 mt-2">
                  Experience the beauty and culture of {destination.name}
                </p>
                <div className="flex gap-4">
                  <button className="px-3 py-2 bg-red-500 rounded-md text-white">
                    ${destination.price}
                  </button>
                  <button className="px-3 py-2 bg-black rounded-md text-white">
                    Learn More
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tours;
