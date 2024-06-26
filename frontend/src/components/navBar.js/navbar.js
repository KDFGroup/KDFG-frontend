

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
    <nav className="bg-[#ffffff] p-4 text-[#000000] shadow font-sans  z-20 fixed top-0 left-0 right-0">
      <ul className="flex justify-between items-center pl-8 pr-8 cursor-pointer">
        <Link to="/" className="flex justify-center items-center gap-1">
          <img className="" src={assets} alt="Logo" />
          <h1>KDFG</h1>
        </Link>
        <li>
          <Link to="/Trendingnow">Trending Now</Link>
        </li>
        <li>
          <Link to="/HighestRated">Highest Rated</Link>
        </li>
        <li>
          <Link to="/Community">Community</Link>
        </li>
        <li>
          <Link to="/EpisodeRecaps">Episode Recaps</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <div className="flex justify-between gap-4 items-center">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <div onClick={toggleDropdown} ref={dropdownRef} className="relative">
            <FontAwesomeIcon icon={faBars} />
            {dropdownOpen && (
              <div className="fixed inset-0 z-10">
                <div className="absolute right-0 w-[272px] h-[320px] bg-white rounded-md shadow-lg z-20 mt-[60px] mr-4 grid">
                  <ul className="py-1">
                    <p
                      onClick={toggleDropdown}
                      className="cursor-pointer flex justify-end p-4"
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </p>
                    <li className="flex p-2 border rounded w-[223px] justify-center items-center gap-1 ml-5">
                      <img src={search} alt="Search" />
                      <input
                        type="text"
                        className="border-none outline-none"
                        placeholder="Search"
                        onClick={(event) => event.stopPropagation()} // Stop the click event from propagating
                      />
                    </li>
                    <li className="px-4 py-4">
                      <Link to="/">Community</Link>
                      <hr />
                    </li>
                    <li className="px-4 py-4">
                      <Link to="/">Movies</Link>
                      <hr />
                    </li>
                    <li className="px-4 py-4">
                      <Link to="/">Account</Link>
                      <hr />
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;

