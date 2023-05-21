import React from "react";
import { FaFacebook, FaTwitter, FaDribbble, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* logo */}
          <div className="flex flex-col space-y-4">
            <div className="flex font-extrabold text-3xl">
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
          <div className="text-sm">
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <p>
              Germany —<br />
              785 15th Street, Office 478
              <br />
              Berlin, DE 81566
            </p>
          </div>

          {/* Socials */}
          <div className="text-sm">
            <h3 className="text-lg font-bold mb-4">Socials</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaDribbble />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-sm">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border border-gray-300 px-3 py-2 rounded-l focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Toy World © 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
