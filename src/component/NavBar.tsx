import  { useState, useEffect } from "react";
import logo from "../assets/images/Logo scissor Blue.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleHiddenMenu = () => {
  //   setIsHidden(!isHidden);
  // };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > prevScrollPos && currentScrollPos > 100);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`bg-white py-1 transition-all duration-300 ${
          isHidden ? "-translate-y-full shadow-md" : "translate-y-0"
        }`}>
        <nav className="flex justify-between items-center font-medium text-lg px-10 py-5">
          <div>
            <ScrollLink to="hero" smooth={true} duration={500}>
              <img src={logo} alt="Scissor's logo" className="w-32" />
            </ScrollLink>
          </div>
          <div className="hidden md:flex my-nav gap-8 ">
            <ScrollLink
              to="myurl"
              smooth={true}
              duration={500}
              className="text-[#005AE2] font-bold hover:text-blue-600">
              <a>My URLs</a>
            </ScrollLink>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="hover:text-blue-600">
              Features
            </ScrollLink>
            <ScrollLink
              to="price"
              smooth={true}
              duration={500}
              className="hover:text-blue-600">
              Pricing
            </ScrollLink>
            <ScrollLink
              to="#"
              smooth={true}
              duration={500}
              className="hover:text-blue-600">
              Analytics
            </ScrollLink>
            <ScrollLink
              to="container"
              smooth={true}
              duration={500}
              className="hover:text-blue-600">
              FAQs
            </ScrollLink>
          </div>
          <div className="flex items-center">
            <div className="md:flex hidden gap-8">
              <button className="rounded-full bg-[#005AE2] text-white px-6 py-1 text-md hover:bg-white hover:text-[#005AE2]">
                <Link to={"/login"}> Log In </Link>
              </button>
              <button className="rounded-full text-white bg-[#005AE2] px-3 py-1 text-md hover:bg-white hover:text-[#005AE2]">
                <Link to={"/signup"}> Try for free</Link>
              </button>
            </div>
            <div className="md:hidden">
              {isMenuOpen ? (
                <FaTimes
                  className="text-3xl text-[#005AE2] cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  className="text-3xl text-[#005AE2] cursor-pointer"
                  onClick={toggleMenu}
                />
              )}
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:hidden my-mobile-nav mt-2`}>
              <ul className="flex flex-col gap-2 mb-6">
                <li>
                  <a
                    href="#myurl"
                    className="text-[#005AE2] font-bold"
                    onClick={toggleMenu}>
                    My URLs
                  </a>
                </li>
                <li>
                  <a href="#features" onClick={toggleMenu}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#price" onClick={toggleMenu}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" onClick={toggleMenu}>
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#container" onClick={toggleMenu}>
                    FAQs
                  </a>
                </li>
              </ul>
              <div className="flex flex-col items-start gap-3">
                <button className="rounded-full bg-[#005AE2] text-white px-6 py-1 text-md hover:bg-white hover:text-[#005AE2]">
                  <Link to={"/login"}> Log In </Link>
                </button>
                <button className="rounded-full text-white bg-[#005AE2] px-3 py-1 text-md hover:bg-white hover:text-[#005AE2]">
                  <Link to={"/signup"}> Try for free</Link>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
