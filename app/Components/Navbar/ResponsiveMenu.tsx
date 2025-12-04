"use client"
import { X } from 'lucide-react';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

interface Props {
  showMenu: boolean;
  setShowMenu: (val: boolean) => void;
}

const ResponsiveMenu: React.FC<Props> = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`${showMenu ? 'right-0' : "-right-full"} fixed bottom-0 top-0 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-l-xl shadow-md`}>
      <div>
        <button className='border border-black rounded-lg absolute top-4 right-9' onClick={() => setShowMenu(false)}>
          <X />
        </button>

        <div className='flex items-center justify-start gap-3'>
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className='text-sm text-slate-500'>Premium User</h1>
          </div>
        </div>

        <nav className='mt-12'>
          <ul className='flex flex-col space-y-4 text-xl text-black'>
            <li>
              <Link href="/" onClick={() => setShowMenu(false)}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setShowMenu(false)}>About Us</Link>
            </li>
            <li>
              <Link href="/tours" onClick={() => setShowMenu(false)}>Tours</Link>
            </li>
            <li>
              <Link href="/gallery" onClick={() => setShowMenu(false)}>Gallery</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setShowMenu(false)}>Contact</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setShowMenu(false)}>
                <button className='bg-red-500 text-white px-4 py-1 rounded-md font-semibold'>Book Now</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <h1>Made with ❤️ by Waince654</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
