import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/Group .png";
import search from "../assets/octicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation(); // Stop the click event from propagating
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

  return (

    <nav className="bg-white p-4 text-black shadow fixed top-0 left-0 right-0 z-20">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <img src={assets} alt="Logo" className="h-8" />
        <h1 className="font-bold">KDFG</h1>
      </Link>
      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/Trendingnow">
            Trending Now
          </Link>
        </li>
        <li>
          <Link to="/HighestRated">
            Highest Rated
          </Link>
        </li>
        <li>
          <Link to="/Community">
            Community
          </Link>
        </li>
        <li>
          <Link to="/EpisodeRecaps">
            Episode Recaps
          </Link>
        </li>
        <li>
          <Link to="/AboutUs">
            About Us
          </Link>
        </li>
      </ul>
      <div className="relative flex items-center gap-4">
        <div className="flex items-center p-2 border rounded w-[223px]">
          <img src={search} alt="Search" className="h-4" />
          <input
            type="text"
            className="border-none outline-none ml-2 w-full"
            placeholder="Search"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
        <div onClick={toggleDropdown} ref={dropdownRef} className="relative">
          <button className="flex items-center bg-[#7F56DA] px-4 py-2 rounded-4px gap-2">
            Get Started
          </button>
          {dropdownOpen && (
            <div className="fixed inset-0 z-10">
              <div className="absolute right-0 mt-2 w-[272px] bg-white rounded-md shadow-lg z-20">
                <ul className="py-2">
                  <p
                    onClick={toggleDropdown}
                    className="cursor-pointer flex justify-end p-2"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </p>
                  <li className="px-4 py-2  ">
                    <Link to="/">Sign In</Link>
                  </li>
                  <li className="px-4 py-2  ">
                    <Link to="/">Sign Up</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </nav>
);
};

export default NavBar;