import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Osrtrips_logo.png";
import whatsappimg from '../assets/whatsappimg.jpeg'


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
 useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
    <div className={`flex justify-between p-5 px-8 items-center bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "h-12" : "h-30"
      }`}>
      <div className="flex items-center gap-5">
        <a href="/">
          <img className=" h-20 " src={logo} alt="logo" />
        </a>
        <a href="/">
          <h1 className="text-3xl font-extralight`">Osr Trips</h1>
        </a>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "underline" : ""} text-xl hover:underline font-extralight`}
        >
          Home
        </NavLink>
        <NavLink
          to="/OurServices"
          className={({ isActive }) => `${isActive ? "underline" : ""} text-xl hover:underline font-extralight`}
        >
          Our Services
        </NavLink>
        <NavLink
          to="/TravelMomentd"
          className={({ isActive }) => `${isActive ? "underline" : ""} text-xl hover:underline font-extralight`}
        >
          Travel Moments
        </NavLink>
        <NavLink
          to="/GetInTouch"
          className={({ isActive }) => `${isActive ? "underline" : ""} text-xl hover:underline font-extralight`}
        >
          Get in Touch
        </NavLink>
      </div>
      <div className="flex gap-5 ">
        <a href="https://www.facebook.com/profile.php?id=61559202380153&rdid=2IW3lYpsW4B7SRtG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AJo64zX65%2F#" target="_blank">
          <Facebook />
        </a>
        <a href="https://www.youtube.com/@OSRTrips" target="_blank">
          <Youtube />
        </a>
        <a href="https://wa.me/9779816940114" target="_blank">
          <FaWhatsapp size={23} />
        </a>
      </div>
      
    </div>
    <div><a href="https://wa.me/9779816940114" target="_blank"><img src={whatsappimg } alt="img" className=" h-15 w-15 fixed rounded-full  absolute bottom-30  right-20 z-50" /></a></div>
    </div>
  );
};

export default Navbar;
