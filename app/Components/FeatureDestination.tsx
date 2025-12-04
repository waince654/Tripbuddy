"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Clock, Star } from "lucide-react";



// Arrows (public folder)
const SlickArrowLeft = ({ currentSlide, slideCount, ...rest }: any) => (
  <img src="/next.png" alt="next-btn" {...rest} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...rest }: any) => (
  <img src="/back.png" alt="back-btn" {...rest} />
);


const FeatureDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const destinationJson = [
    { name: "Bali", img: "/Bali.jpg", time: "5 Days - 4 Nights", star: "3 (12 reviews)", price: "69,999" },
    { name: "Venice", img: "/Venice.jpg", time: "5 Days - 4 Nights", star: "3 (12 reviews)", price: "69,999" },
    { name: "Tokyo", img: "/Tokyo.jpg", time: "5 Days - 4 Nights", star: "3 (12 reviews)", price: "69,999" },
    { name: "India", img: "/India.jpg", time: "5 Days - 4 Nights", star: "3 (12 reviews)", price: "69,999" },
    { name: "Venice", img: "/Venice.jpg", time: "5 Days - 4 Nights", star: "3 (12 reviews)", price: "69,999" },
  ];

  return (
    <section className="w-full py-12 md:py-24 px-6 md:px-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-3 font-serif   text-blue-950">
          Featured Destinations
        </h2>
        <hr className="bg-red-500 w-[400px] mx-auto h-1 mb-10" />

        <Slider {...settings}>
          {destinationJson.map((destination) => (
            <div key={destination.name} className="px-3">
              <div className="overflow-hidden border shadow-lg rounded-lg">
                <Image
                  src={destination.img}
                  alt={destination.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 hover:scale-110 transition-all"
                />
                <div className="p-4">
                  <p className="text-gray-500 flex items-center gap-1 text-sm mb-1">
                    <Clock width={15} /> {destination.time}
                  </p>

                  <h3 className="text-xl font-bold mb-2 text-blue-950">{destination.name}</h3>

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
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeatureDestination;
