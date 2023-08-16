// import { useState, useEffect } from "react";
// import logo from "../assets/images/Logo scissor Blue.png";
// import { FaBars, FaTimes } from "react-icons/fa";

// import "../styles/Navbar.css";
// import { Link } from "react-router-dom";

// function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleHiddenMenu = () => {
//     setIsHidden(!isHidden);
//   };

//   useEffect(() => {
//     let prevScrollPos = window.pageYOffset;

//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setIsHidden(currentScrollPos > prevScrollPos && currentScrollPos > 100);
//       prevScrollPos = currentScrollPos;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <header
//         className={`bg-white py-1 transition-all duration-300 ${
//           isHidden ? "-translate-y-full shadow-md" : "translate-y-0"
//         }`}>
//         <nav className="flex flex-row justify-between items-center font-medium text-lg px-10 py-5 ">
//           <div className="basis-1/8">
//             <img src={logo} alt="scissor's logo" />
//           </div>
//           <div className="mobile-nav">
//             {isMenuOpen ? (
//               <FaTimes
//                 className="text-3xl text-[#005AE2] cursor-pointer md:hidden"
//                 onClick={toggleMenu}
//               />
//             ) : (
//               <FaBars
//                 className="text-3xl text-[#005AE2] cursor-pointer md:hidden"
//                 onClick={toggleMenu}
//               />
//             )}
//           </div>
//           {isMenuOpen && (
//             <div className="my-mobile-nav">
//               <ul className="flex mflex-col  gap-2 mb-6 md:mb-0">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#005AE2] font-bold"
//                     onClick={toggleMenu}>
//                     My URLs
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#features" className="" onClick={toggleMenu}>
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#price" className="" onClick={toggleMenu}>
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="" onClick={toggleMenu}>
//                     Analytics
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#container" className="" onClick={toggleMenu}>
//                     FAQs
//                   </a>
//                 </li>
//               </ul>
//               <div className="flex md:flex-row flex-col items-start gap-6">
//                 <button className="rounded-full md:bg-white md:text-[#005AE2] md:hover:border-[#005AE2] text-white bg-[#005AE2] px-6 md:px-3 py-1 text-md border border-[#005AE2] hover:bg-white hover:text-[#005AE2]">
//                   <Link to={"/login"}> Log In </Link>
//                 </button>
//               </div>
//             </div>
//           )}


//           <div className=" my-nav md:flex flex-row gap-5">
            
              
//                 <a href="#" className="text-[#005AE2] font-bold">
//                   My URLs
//                 </a>
             
//                 <a href="#features" className="">
//                   Features
//                 </a>
             
//                 <a href="#price" className="">
//                   Pricing
//                 </a>
              
//                 <a href="#" className="">
//                   Analytics
//                 </a>
              
              
//                 <a href="#container" className="">
//                   FAQs
//                 </a>
              
            
//             <div className="flex md:flex-row flex-col items-start gap-6">
//               <button className="rounded-full md:bg-white md:text-[#005AE2] md:hover:border-[#005AE2] text-white bg-[#005AE2] px-6 md:px-3 py-1 text-md border border-[#005AE2] hover:bg-white hover:text-[#005AE2]">
//                 <Link to={"/login"}> Log In </Link>
//               </button>

//               <button className="rounded-full text-white bg-[#005AE2] px-3 py-1 text-md border border-[#005AE2] hover:bg-white hover:text-[#005AE2]">
//                 <Link to={"/signup"}> Try for free</Link>
//               </button>
//             </div>
//           </div>

         

          
          
//         </nav>
//       </header>
//     </>
//   );
// }

// export default NavBar;


import React, { useState, useEffect } from "react";
import logo from "../assets/images/Logo scissor Blue.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleHiddenMenu = () => {
    setIsHidden(!isHidden);
  };

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
        }`}
      >
        <nav className="flex justify-between items-center font-medium text-lg px-10 py-5">
          <div>
            <Link to="/">
              <img src={logo} alt="Scissor's logo" className="w-32" />
            </Link>
          </div>
          <div className="hidden md:flex my-nav gap-8">
            <a href="#myurl" className="text-[#005AE2] font-bold">
              My URLs
            </a>
            <a href="#features">Features</a>
            <a href="#price">Pricing</a>
            <a href="#">Analytics</a>
            <a href="#container">FAQs</a>
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
              } md:hidden my-mobile-nav mt-2`}
            >
              <ul className="flex flex-col gap-2 mb-6">
                <li>
                  <a
                    href="#myurl"
                    className="text-[#005AE2] font-bold"
                    onClick={toggleMenu}
                  >
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

