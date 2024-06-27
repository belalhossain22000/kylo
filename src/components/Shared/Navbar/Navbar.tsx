import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiSendPlaneFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white px-10 absolute top-4 left-0 right-0  z-50 py-4 flex justify-between items-center rounded-full wrapper h-[95px] " >
      <div className="flex items-center space-x-12">
        <Image src="/logo_white_03.png" alt='logo' width={116} height={70} />
        <Link href="/">
          <Link href={"/"} className="text-lg hover:underline">Home</Link>
        </Link>
        <Link href="/about">
          <Link href={"/"} className="text-lg hover:underline">About</Link>
        </Link>
        <Link href="/services">
          <Link href={"/"} className="text-lg hover:underline">Services</Link>
        </Link>
        <Link href="/pages">
          <Link href={"/"} className="text-lg hover:underline">Pages</Link>
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <Link href="https://www.facebook.com">
          <Link href={"/"} target="_blank" className="text-xl font-bold hover:text-yellow-500"><FaFacebookF size={20} /></Link>
        </Link>
        <Link href="https://www.instagram.com">
          <Link href={"/"} target="_blank" className="text-xl font-bold hover:text-yellow-500"><FaInstagram size={20} /></Link>
        </Link>
        <Link href="https://www.twitter.com">
          <Link href={"/"} target="_blank" className="text-xl font-bold hover:text-yellow-500"><FaXTwitter size={20} color='white' /></Link>
        </Link>
        <button className="bg-yellow-500 text-black px-8 py-4 rounded-full flex items-center font-bold text-base">
          HIRE ME <span className="ml-2"><RiSendPlaneFill size={20} /></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
