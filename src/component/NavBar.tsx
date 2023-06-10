import React, { useState } from 'react'
import logo from '../assets/images/Logo scissor Blue.png'
import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
     <header className="bg-white py-1">
        <nav className="flex flex-row justify-between items-center font-medium text-lg px-5">
          <div className="basis-1/8">
            <img src={logo} alt="scissor's logo" />
          </div>
          <div className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[9%]md:items-center md:w-auto px-6 md:flex md:gap-[4vw] gap-8">
            <ul className="flex md:flex-row md:w-fit flex-col md:items-center md:justify-center md:gap-[4vw] gap-8 mb-6 md:mb-0">
              <li>
                <a href="#" className="text-[#005AE2] font-bold">
                  My URLs
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="">
                  FAQs
                </a>
              </li>
            </ul>
            <div className="flex md:flex-row flex-col items-start gap-6">
              <button className="rounded-full md:bg-white md:text-[#005AE2] md:hover:border-[#005AE2] text-white bg-[#005AE2] px-6 md:px-3 py-1 text-md  hover:bg-white hover:text-[#005AE2]">
                Log In
              </button>

              <button className="rounded-full text-[#005AE2] bg-white px-3 py-1 text-md border border-[#005AE2] hover:bg-[#005AE2] hover:text-white ">
                Try for free
              </button>

              <button className="rounded-full text-white bg-[#005AE2] px-3 py-1 text-md border border-[#005AE2] hover:bg-white hover:text-[#005AE2]">
                Try for free
              </button>
            </div>
          </div>
          {isMenuOpen ? (
            <FaTimes
              className="text-3xl text-[#005AE2] cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-3xl text-[#005AE2] cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          )}
        </nav>
      </header>
    </>
  )
}

export default NavBar
