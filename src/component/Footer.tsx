import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-10 px-4 md:px-10 lg:px-20 xl:px-32 md:grid md:grid-col-2">
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Logo and Social Icons */}
          <div className="md:flex md:flex-col md:items-start md:flex-row md:gap-3">
            <img
              src="./src/assets/images/scissor logo Black.png"
              alt="Scissor Logo"
              className="w-26 mb-3 md:mb-0 md:w-32 md:h-auto"
            />
            <div className="flex gap-3">
              <FaTwitter className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-purple-500" />
              <FaLinkedin className="cursor-pointer hover:text-blue-600" />
              <FaFacebook className="cursor-pointer hover:text-blue-600" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <p className="text-gray-800 font-bold text-sm mb-3">Why Scissor?</p>
            <ul className="text-sm space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">
                Scissor 101
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Integrations & API
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col">
            <p className="text-gray-800 font-bold text-sm mb-3">Solutions</p>
            <ul className="text-sm space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">
                Social Media
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Digital Marketing
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Customer Service
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                For Developers
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col">
            <p className="text-gray-800 font-bold text-sm mb-3">Products</p>
            <ul className="text-sm space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">
                Link Management
              </li>
              <li className="hover:text-blue-600 cursor-pointer">QR Codes</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Link-in-bio
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-800 font-bold text-sm mb-3">Company</p>
            <ul className="text-sm space-y-2">
              <li className=" hover:text-blue-600 cursor-pointer  ">
                About Scissor
              </li>
              <li className=" hover:text-blue-600 cursor-pointer  ">
                Careers
              </li>
              <li className=" hover:text-blue-600 cursor-pointer  ">
                Partners
              </li>
              <li className=" hover:text-blue-600 cursor-pointer  ">
                Press
              </li>
              <li className=" hover:text-blue-600 cursor-pointer  ">
                Contact
              </li>
              <li className=" hover:text-blue-600 cursor-pointer  ">
                Reviews
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-5 mt-5 mb-10">
        <p className="text-gray-100">Why Scissor?</p>
        <ul className="text-sm space-y-2">
            
            <p className="text-gray-800 font-bold mb-3">Resources</p>
           
            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            <li className="hover:text-blue-600 cursor-pointer">
              Resource Library
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Developers</li>
            <li className="hover:text-blue-600 cursor-pointer">
              App Connectors
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Support</li>
            <li className="hover:text-blue-600 cursor-pointer">Trust Center</li>
            <li className="hover:text-blue-600 cursor-pointer">
              Browser Extension
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Mobile App</li>
          </ul>

          <ul className="text-sm space-y-2">
            <p className="text-gray-800 font-bold mb-3">Features</p>
            <li className="hover:text-blue-600 cursor-pointer">
              Branded Links
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Mobile Links</li>
            <li className="hover:text-blue-600 cursor-pointer">Campaign</li>
            <li className="hover:text-blue-600 cursor-pointer">
              Management & Analytics
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              QR Code generation
            </li>
          </ul>

          <ul className="text-sm space-y-2">
            <p className="text-gray-800 font-bold mb-3">Legal</p>
            <li className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Cookie Policy
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Acceptable Use Policy
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Code of Conduct
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
