"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b px-3 md:px-5 relative">
      <nav className="max-w-7xl mx-auto w-full flex items-center justify-between py-3">

        {/* Logo */}
        <div className="flex gap-1 items-center">
          <Image
            src={"/suncartLogo.png"}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg sm:text-xl">
            Sun<span className="text-[#f17621]">Cart</span>
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-base">
          <li>
            <Link
              href={"/"}
              className="hover:text-orange-500 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href={"/all-photos"}
              className="hover:text-orange-500 transition"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href={"/profile"}
              className="hover:text-orange-500 transition"
            >
              My Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href={"/register"}
            className="text-sm hover:text-orange-500 transition">
            Register
          </Link>

          <Link
            href={"/login"}
            className="px-4 py-2 rounded-full text-sm hover:text-orange-600 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          absolute top-full left-0 w-full bg-white border-b shadow-md
          transition-all duration-300 overflow-hidden z-50
          ${open ? "max-h-96 py-5" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-5 text-sm">
          <li>
            <Link
              href={"/"}
              onClick={() => setOpen(false)}
              className="hover:text-orange-500 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href={"/all-photos"}
              onClick={() => setOpen(false)}
              className="hover:text-orange-500 transition"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href={"/profile"}
              onClick={() => setOpen(false)}
              className="hover:text-orange-500 transition"
            >
              My Profile
            </Link>
          </li>

          <li>
            <Link
              href={"/register"}
              onClick={() => setOpen(false)}
              className="hover:text-orange-500 transition"
            >
              Register
            </Link>
          </li>

          <li>
            <Link
              href={"/login"}
              onClick={() => setOpen(false)}
              className=" px-5 py-2 rounded-full hover:text-orange-600 transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;