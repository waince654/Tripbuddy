"use client";

import React, { FC } from "react";
import TopBanner from "../Components/TopBanner";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

const About: FC = () => {
  return (
    <div>
      <Navbar />
      <TopBanner text="About" />

      <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row px-4 md:px-0 gap-4">
          {/* Left Content */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="travel"
                className="rounded-lg"
              />
              <div className="absolute bottom-[45%] right-0 p-4 bg-red-500 text-white font-bold md:text-4xl rounded-lg">
                HOW WE ARE BEST <br /> FOR TRAVEL!
              </div>
            </div>

            <h1 className="md:text-4xl font-bold mt-6 mb-4 text-3xl">
              How We Are Best For Travel!
            </h1>

            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
              incidunt aperiam vel laboriosam odio officia, tenetur iure qui? Officiis
              placeat iste ratione perspiciatis rerum sed magni commodi pariatur
              reiciendis dicta molestiae dolor tenetur, dolorem minus exercitationem
              quod adipisci, ad tempore. Suscipit iste impedit soluta omnis laborum
              quisquam eveniet. Eos ipsam sed eligendi architecto libero doloremque
              nobis fugit, asperiores molestiae ullam nulla mollitia quidem maxime
              totam delectus itaque? Quisquam impedit, cum quo tempore at velit?
              Voluptate rerum possimus vel numquam perspiciatis sint adipisci,
              veritatis ullam placeat, repellat similique ea pariatur officiis laborum
              eligendi porro eos perferendis consectetur, et ex tempore. Facilis,
              incidunt? Libero nostrum tempore repellat iste assumenda nulla
              doloremque similique sequi, facere tempora voluptates enim aspernatur
              quod voluptatibus tenetur dicta, nesciunt explicabo! Veritatis, officia
              a!
            </p>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Destination Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start gap-4">
              <img src="/trip.gif" alt="trip" className="w-20" />
              <div>
                <h2 className="text-2xl font-semibold mb-1">50+ Destinations</h2>
                <p className="text-gray-700">
                  We offer the best travel experiences with personalized services and
                  unbeatable prices.
                </p>
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start gap-4">
              <img src="/best-price.gif" alt="price" className="w-20" />
              <div>
                <h2 className="text-2xl font-semibold mb-1">Best Price</h2>
                <p className="text-gray-700">
                  We offer the best travel experiences with personalized services and
                  unbeatable prices.
                </p>
              </div>
            </div>

            {/* Time Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start gap-4">
              <img src="/fire-time.gif" alt="time" className="w-20" />
              <div>
                <h2 className="text-2xl font-semibold mb-1">Super Fast Booking</h2>
                <p className="text-gray-700">
                  We offer the best travel experiences with personalized services and
                  unbeatable prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
