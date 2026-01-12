import React from 'react'
import { Facebook, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Osrtrips_logo.png";
const Footer = () => {
  return (
    <div className='h-[40vh] w-full bg-black text-white p-20'>
       <div className='flex justify-around mb-15'>
           <div className='flex gap-5 items-center'>
             <a href="/">
                      <img className=" h-20 " src={logo} alt="logo" />
                    </a>
            <h1>OSR Trips</h1>
           </div>
           <div>
            <ul>
              <li>kathmandu</li>
              <li>+977-981694114</li>
              <li>osrtrips@gmail.com</li>
            </ul>
           </div>
       </div>
      <div className='flex justify-around' >
       <div >
        <h2>@ 2026 OSR Trips. All Rights Reserved</h2>
       </div>
        <div className='flex gap-4'>
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
    </div></div>
  )
}

export default Footer