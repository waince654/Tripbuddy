"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-10">
      <div className="bg-transparent/75 fixed w-full z-50 top-0 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-5">
          <Link href="/">
            <h1 className="text-2xl text-white font-bold cursor-pointer">
              Trip<span className="text-red-500">Buddy</span>
            </h1>
          </Link>

          <div className="flex items-center gap-5">
            {/* Desktop Menu */}
            <nav className="hidden md:flex">
              <ul className="flex items-center font-semibold text-white text-xl gap-7">
                <li className="hover:text-blue-400 "><Link href="/">Home</Link></li>
                <li className="hover:text-blue-400 "><Link href="/about">About Us</Link></li>
                <li className="hover:text-blue-400 "><Link href="/tours">Tours</Link></li>
                <li className="hover:text-blue-400 "><Link href="/gallery">Gallery</Link></li>
                <li className="hover:text-blue-400 "><Link href="/contact">Contact</Link></li>
              </ul>
              <button className="bg-red-500 text-white px-4 py-1 rounded-md font-semibold ml-4">
                Book Now
              </button>
            </nav>

            {/* Mobile Menu Icon */}
            <HiMenuAlt1
              onClick={() => setShowMenu(!showMenu)}
              className="cursor-pointer md:hidden text-white"
              size={30}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </header>
  );
};

export default Navbar;
