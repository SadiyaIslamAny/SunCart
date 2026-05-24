import Image from "next/image";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaFacebook, FaFacebookF, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#f7ecdf]  border-t mt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">

        {/* Footer Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10 lg:gap-14
        ">

          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1">
              <Image
                src={"/suncartLogo.png"}
                alt="SunCart Logo"
                width={60}
                height={60}
                className="w-auto h-auto"
              />

              <h2 className="text-2xl sm:text-3xl font-black">
                Sun<span className="text-[#f17621]">Cart</span>
              </h2>
            </div>

            <p className="
              mt-4
              text-sm
              sm:text-base
              text-gray-600
              leading-6
              max-w-sm
            ">
              Discover trendy summer collections with stylish fashion,
              accessories, and everything you need to shine this season.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/all-photos"
                  className="hover:text-orange-500 transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="hover:text-orange-500 transition"
                >
                  My Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-orange-500 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Contact Info
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              <li>Email: support@suncart.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Follow Us
            </h3>

            <div className="
              flex
              flex-wrap
              gap-2
              text-sm
              sm:text-base
              text-gray-600
            ">
              <Link
                href="#"
                className="text-3xl"
              >
                <FaFacebookSquare className="text-[#f17621]" />
              </Link>

              <Link
                href="#"
                className="text-3xl"
              >
                <LuInstagram className="text-[#f17621]"/>
              </Link>

              <Link
                href="#"
                className="text-3xl"
              >
                <FaSquareTwitter className="text-[#f17621]" />
              </Link>

               <Link
                href="#"
                className="text-3xl"
              >
                <FaLinkedin  className="text-[#f17621]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="
          border-t
          mt-10
          pt-5
          text-center
          text-xs
          sm:text-sm
          text-gray-500
        ">
          © 2026 SunCart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;