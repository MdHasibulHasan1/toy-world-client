import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Logo */}
          <div className="flex flex-col space-y-4 transform transition-transform hover:scale-105">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/GFFS7fc/20230520-105431.png"
                alt="Website Logo"
                className="h-8"
              />
            </div>
            <p className="text-sm">
              Toy World is an online platform dedicated to bringing joy and
              excitement to children and toy enthusiasts worldwide.
            </p>
          </div>

          {/* Address */}
          <div className="transform transition-transform hover:scale-105">
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <p>
              Germany —<br />
              785 15th Street, Office 478
              <br />
              Berlin, DE 81566
            </p>
          </div>

          {/* Contact */}
          <div className="transform transition-transform hover:scale-105">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="mb-2">
              Email: info@toyworld.com
              <br />
              Phone: +1 123-456-7890
              <br />
              Fax: +1 987-654-3210
            </p>
          </div>

          {/* Socials */}
          <div className="transform transition-transform hover:scale-105">
            <h3 className="text-lg font-bold mb-4">Socials</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaFacebook className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaTwitter className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaInstagram className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Toy World. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
