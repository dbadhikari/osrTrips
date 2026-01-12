import React, { createContext, useState } from 'react'

import imageProxy2 from "../assets/imageProxy2.jpg"
import imageProxy7 from "../assets/imageProxy7.jpg"
import imageProxy8 from "../assets/imageProxy8.jpg"
import imageProxy3 from "../assets/imageProxy3.jpg"
import imageProxy4 from "../assets/imageProxy4.jpg"
import imageProxy5 from "../assets/imageProxy5.jpg"
import imageProxy6 from "../assets/imageProxy6.jpg"


export const osrData=createContext()
const ContexApi = (props) => {

const [first, setFirst] = useState([
  {
  image:imageProxy8,
  title:'Flight Bookings',
  desc:'Book domestic and international flights with ease. OSR Trips offers competitive fares, multiple airline options, and support for changes or cancellations, ensuring smooth air travel.',
  go:'Book Now',
  title2:"Flight ticket Bookings",
  go2:"Book Your Journey",
 },
 {
  image:imageProxy2,
  title:'Holiday Packages',
  desc:'Tailor-made tours for families, couples, and groups. OSR Trips plans every detail so your trips are memorable, seamless, and stress-free',
  go:'See Packages & Offers',
  title2:"Customized Holiday Packages",
  go2:"Discover Your Next Destination",
 },
 {
  image:imageProxy7,
  title:'Visa Assistance',
  desc:'Get expert guidance for tourist, business, and visit visas. We help with documentation, applications, and appointments for a hassle-free process.',
  go:'Reach Out Today',
  title2:"Tourist Visa Assistance",
  go2:"Contact Our Travel Experts",
 }

])

const [second, setSecond] = useState([
  {img:imageProxy2,
    name:"Alec Cutter",
  },
  {img:imageProxy3,
    name:"Jean Kleisz",
  },
  {img:imageProxy4,
    name:'Annie Spratt',
  },
  {img:imageProxy5,
    name:"Tim Swaan",
  },
  {img:imageProxy6,
    name:"Steve Richey",
  },
  {img:imageProxy3,
    name:"Anthony Delanoix",
  },
])

  return (
    <div>
        <osrData.Provider value={{first , second}}>
          {props.children}
         </osrData.Provider>
      
    </div>
  )
}

export default ContexApi