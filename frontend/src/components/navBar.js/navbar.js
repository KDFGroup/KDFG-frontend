// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import assets from "../assets/Group .png";
// import search from "../assets/octicon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

// const NavBar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = (event) => {
//     event.stopPropagation(); // Stop the click event from propagating
//     setDropdownOpen(!dropdownOpen);
//     if (dropdownOpen) {
//       document.body.classList.remove("backdrop-blur");
//     } else {
//       document.body.classList.add("backdrop-blur");
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//       document.body.classList.remove("backdrop-blur");
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="bg-[#ffffff] p-4 text-[#000000] shadow font-sans  z-20 fixed top-0 left-0 right-0">
//       <ul className="flex justify-between items-center pl-8 pr-8 cursor-pointer">
//         <Link to="/" className="flex justify-center items-center gap-1">
//           <img className="" src={assets} alt="Logo" />
//           <h1>KDFG</h1>
//         </Link>
//         <li>
//           <Link to="/Trendingnow">Trending Now</Link>
//         </li>
//         <li>
//           <Link to="/HighestRated">Highest Rated</Link>
//         </li>
//         <li>
//           <Link to="/Community">Community</Link>
//         </li>
//         <li>
//           <Link to="/EpisodeRecaps">Episode Recaps</Link>
//         </li>
//         <li>
//           <Link to="/AboutUs">About Us</Link>
//         </li>
//         <div className="flex justify-between gap-4 items-center">
//           <FontAwesomeIcon icon={faFacebook} />
//           <FontAwesomeIcon icon={faInstagram} />
//           <FontAwesomeIcon icon={faTwitter} />
//           <div onClick={toggleDropdown} ref={dropdownRef} className="relative">
//             <FontAwesomeIcon icon={faBars} />
//             {dropdownOpen && (
//               <div className="fixed inset-0 z-10">
//                 <div className="absolute right-0 w-[272px] h-[320px] bg-white rounded-md shadow-lg z-20 mt-[60px] mr-4 grid">
//                   <ul className="py-1">
//                     <p
//                       onClick={toggleDropdown}
//                       className="cursor-pointer flex justify-end p-4"
//                     >
//                       <FontAwesomeIcon icon={faXmark} />
//                     </p>
//                     <li className="flex p-2 border rounded w-[223px] justify-center items-center gap-1 ml-5">
//                       <img src={search} alt="Search" />
//                       <input
//                         type="text"
//                         className="border-none outline-none"
//                         placeholder="Search"
//                         onClick={(event) => event.stopPropagation()} // Stop the click event from propagating
//                       />
//                     </li>
//                     <li className="px-4 py-4">
//                       <Link to="/">Community</Link>
//                       <hr />
//                     </li>
//                     <li className="px-4 py-4">
//                       <Link to="/">Movies</Link>
//                       <hr />
//                     </li>
//                     <li className="px-4 py-4">
//                       <Link to="/">Account</Link>
//                       <hr />
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </ul>
//     </nav>
//   );
// };

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import octicon from "../assets/octicon.png";
import assets from "../assets/Group .png";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
    if (dropdownOpen) {
      document.body.classList.remove("backdrop-blur");
    } else {
      document.body.classList.add("backdrop-blur");
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
      document.body.classList.remove("backdrop-blur");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#ffffff] h-[80px] grid p-4 text-[#000000] shadow font-sans z-20 fixed top-0 left-0 right-0">
      <div className="flex justify-between items-center md:pl-8 md:pr-8 cursor-pointer">
        <Link to="/" className="flex items-center gap-1">
          <img alt="" src={assets} />
          <h1>KDFG</h1>
        </Link>
        <div className="hidden lg:flex lg:gap-[75px] sm:gap-[12px] md:text-[15px] lg:text-[16px] leading-[22.4px]">
          <Link to="/Trendingnow">Trending Now</Link>
          <Link to="/Community">Community</Link>
          <Link to="/EpisodeRecaps">Episode Recaps</Link>
          <Link to="/AboutUs">About Us</Link>
        </div>
        <div className="hidden lg:flex items-center gap-5">
          <div>
            <form className="flex items-center justify-center border  h-[38px] rounded-md  outline-none p-4 w-[230px] gap-1">
              <img alt="" src={octicon} className="pl-2" />
              <input
                placeholder="Search"
                className="outline-none border-none"
                Get
                Started
              />
            </form>
          </div>
          <div onClick={toggleDropdown} ref={dropdownRef} className="relative">
            <div className="flex gap-16">
              <button className="border w-[148px] h-[48px] rounded-md text-white bg-[#7F56DA]">
                Get Started
              </button>
            </div>
            {dropdownOpen && (
              <div className="fixed inset-0 z-10">
                <div className="absolute right-0 w-[272px] h-[179px] bg-white rounded-md shadow-lg z-20 mt-[81px] mr-4 flex flex-col">
                  <div
                    onClick={toggleDropdown}
                    className="cursor-pointer flex justify-end pt-4 pr-8 m-0"
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      onClick={toggleDropdown}
                      className="flex justify-end"
                    />
                  </div>
                  <div className="grid justify-center items-center h-[130px]">
                    <button className="w-[220px] h-[38px] border rounded-md hover:bg-[#DCE3F5]">
                      Sign In
                    </button>
                    <button className="w-[220px] h-[38px] border rounded-md hover:bg-[#DCE3F5]">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          className="lg:hidden flex items-center"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-50 flex justify-end">
          <div className="w-[100%] bg-white p-6">
            <div className="flex justify-between items-center">
              <h2>KDFG</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <nav className="mt-4">
              <Link
                to="/"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {/* <Link to="/HighestRated" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                Highest Rated
              </Link> */}
              <Link
                to="/Community"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                to="/Trendingnow"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trending Now
              </Link>
              <Link
                to="/EpisodeRecaps"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Episode Recaps
              </Link>
              <Link
                to="/AboutUs"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex justify-around mt-4">
               <div className="flex justify-between w-[100%]">
                    <button className="w-[120px] h-[38px] border rounded-md hover:bg-[#DCE3F5]">
                      Sign In
                    </button>
                    <button className="w-[120px] h-[38px] border rounded-md hover:bg-[#DCE3F5]">
                      Sign Up
                    </button>
                    </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
