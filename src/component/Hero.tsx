import "../assets/css/style.css";
import "../styles/Hero.css";
import hero_inner from "../assets/images/hero_inner.png";
import strokeImage from "../assets/images/stroke.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const customWidth = "500px";
  const customHeight = "250px";

  return (
    <div className="w-full flex flex-col justify-center items-center py-44 hero">
      <div className="">
        {/* <h1 className="text-center text-[48px] font-semibold">
          Optimize Your Online Experience with Our
        </h1>
        <h1 className="text-center text-[48px] font-semibold">
          Advanced <span className="text-[#005AE2]">URL Shortening</span>{' '}
          Solution
        </h1> */}
        <h1 className="max-w-md text-4xl leading-normal font-bold text-center lg:text-5xl lg:max-w-5xl lg:leading-normal">
          Optimize Your Online Experience with Our Advanced{" "}
         
          <span className="relative text-[#005AE2]">
            {window.innerWidth <= 760 ? (
              "URL Shortening "
            ) : (
              <>
                <span
                  className={`absolute h-full w-full ml-16 bottom-[-60px] bg-no-repeat 
                    window.innerWidth <= 760 ? "hidden" : "block"
                  }`}
                  style={{
                    backgroundImage: `url(${strokeImage})`,
                  }}
                />
                URL Shortening
              </>
            )}
          </span>{" "}
          Solution
        </h1>
      </div>
      <div className="mt-10 sub-text-container">
        <p className="text-center font-medium text-[18px] leading-relaxed hero-subtext">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
      </div>
      <div className=" mt-20 flex justify-between gap-3">
        <Link
          to="/SignUp"
          className="rounded-full bg-[#005AE2] text-white text-xl font-semibold py-2 px-6">
          Sign Up
        </Link>
        <button className="rounded-full bg-none text-[#005AE2] text-xl font-semibold hover:border hover:border-[#005AE2] py-1 px-6">
          Learn More
        </button>
      </div>

      <div className="relative mt-5  md:flex  md:justify-between gap-3 ml-60">
        <img
          src={hero_inner}
          alt="My Image"
          style={{ width: customWidth, height: customHeight } }
          className=" bg-transparent rounded-lg"
        />
        <div className="absolute bottom-1 left-14 bg-white bg-opacity-75 px-6  rounded-lg">
          <p className="text-black text-m">
            Seemlessly transform your long URLs into concise and{" "}
            <strong>sharable</strong> links with just a few clicks!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from 'react';
// import hero_inner from '../assets/images/hero_inner.png';
// import { Link } from 'react-router-dom';

// const customWidth = "500px";
// const customHeight = "250px";

// const Hero = () => {
//   return (
//     <div className="w-full flex flex-col justify-center items-center py-44 hero">
//       <h1 className="max-w-md text-4xl leading-normal font-bold text-center lg:text-5xl lg:max-w-5xl lg:leading-normal">
//         Optimize Your Online Experience with Our Advanced{' '}
//         <span className="relative text-[#005AE2]">
//           URL Shortening
//           <span
//             className={`absolute h-full w-full ml-16 bottom-[-60px] bg-no-repeat bg-url("../../../../assets/images/stroke.png") ${
//               window.innerWidth <= 760 ? 'hidden' : 'block'
//             }`}
//           />
//         </span>{' '}
//         Solution
//       </h1>
//       <div className="mt-10 sub-text-container">
//         <p className="text-center font-medium text-lg leading-relaxed hero-subtext">
//           Personalize your shortened URLs to align with your brand identity.
//           Utilize custom slugs, branded links, and domain customization options to
//           reinforce your brand presence and enhance user engagement.
//         </p>
//       </div>
//       <div className="mt-20 flex justify-between gap-3">
//         <Link
//           to="/SignUp"
//           className="rounded-full bg-[#005AE2] text-white text-xl font-semibold py-2 px-6">
//           Sign Up
//         </Link>
//         <button className="rounded-full bg-none text-[#005AE2] text-xl font-semibold hover:border hover:border-[#005AE2] py-1 px-6">
//           Learn More
//         </button>
//       </div>
//       <div className="relative mt-5 md:flex md:justify-between gap-3 ml-60">
//         <img
//           src={hero_inner}
//           alt="My Image"
//           style={{ width: customWidth, height: customHeight }}
//           className="rounded-lg"
//         />
//         <div className="absolute bottom-1 left-14 bg-white bg-opacity-75 px-6 rounded-lg">
//           <p className="text-black text-sm">
//             Seamlessly transform your long URLs into concise and{' '}
//             <strong>sharable</strong> links with just a few clicks!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
