import React, { useContext } from 'react'
import imageProxy0 from "../assets/imageProxy0.jpg";
import imageProxy1 from "../assets/imageProxy1.jpg"
import { osrData } from '../contex/ContexApi';
const Home = () => {
const goDown=()=>{
   document.getElementById("section2").scrollIntoView({ behavior: "smooth" })
}
const {first}=useContext(osrData)


  return (
    <div className='relative'>
      <section id="section1" className='h-screen w-full relative'>
      <img className='h-screen w-full object-cover ' src={imageProxy0} alt="img" />
      <div className='absolute inset-0 bg-white/50 flex justify-center items-center'></div>
       <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
       <h1 className='text-5xl '>Welcome to OSR Trips</h1>
       <h3 className='text-2xl'>Professional travel solutions for flights, hotels, holidays, and visa assistance</h3>
       <p className='max-w-5xl text-center'>OSR Trips redefines travel through careful planning and dependable service. From seamless bookings to personalized travel solutions, we focus on creating  journeys that are simple, comfortable, and truly memorable.</p>
       <div className='flex gap-5'>
        <button
        onClick={goDown}
        className='bg-black text-white p-4 rounded-4xl text-sm cursor-pointer active:scale-90'>Get Started</button>
        <button className='border text-black p-4 rounded-4xl text-sm cursor-pointer active:scale-90'>Contact Us</button>
       </div>
  </div>
      
      </section>
      <section id="section2" className='h-screen w-full flex justify-center items-center'>
           <div className='h-[80vh] w-[80vw]  flex'>
              <div className=' h-full w-3/5 flex flex-col justify-center items-center gap-10'>
              <h1 className='text-5xl text-center'>Experience the World with OSR Trips</h1>
              <h3 className='text-2xl'>Your Reliable Travel Partner for Journeys Worldwide</h3>
              <p className='text-center'>OSR Trips is a Nepal-based travel agency delivering thoughtfully planned and reliable travel solutions. We provide comprehensive services including flight bookings, hotel reservations, customized holiday packages, and visa assistance. With a strong commitment to transparency, precision, and personalized service, we ensure every journey is seamless, efficient, and stress-free.</p>
              <button className='bg-[#FA2742] p-3 px-5 rounded-3xl text-white active:scale-90'>Plan Your Trip</button>
               </div>
              <div className=' h-full w-2/5 p-10'><img className='h-full widht-full object-center' src={imageProxy1} alt="" /> </div>
           </div>
      </section>
      <section id="section3" className='h-screen w-full bg-[#e8eae3] flex flex-col items-center justify-center gap-5'>
        <h1 className='text-3xl font-light'>Our Services</h1>
        <h3 className='text-xl font-light'>Your One-Stop Solution for Stress-Free Travel</h3>
        <p className='font-light max-w-6xl text-center'>OSR Trips offers end-to-end travel solutions, including flights, hotels, holiday packages, visa support, and transfers, ensuring every trip is seamless, stress-free, and memorable.</p>
          <div className=' flex gap-10'> 
          {first.map((elem,idx)=>{
            return <div key={idx} className='h-125 w-90  flex flex-col items-center justify-between'>
            <img className='h-62 w-full object-cover' src={elem.image} alt="img" />
            <h1 className='text-3xl font-light'>{elem.title}</h1>
            <p className='font-light text-center m'>{elem.desc}</p>
            <button className='bg-black text-white p-3 px-5 rounded-4xl font-light active:scale-90 '>{elem.go}</button>
          </div>

          })}
          </div>
      </section>
      <section id='section4' className='h-[40vh] w-full bg-[#fa2743] flex flex-col justify-center items-center text-white'>
          <h1 className='text-5xl'>“</h1>
          <h3 >Every journey has a story. Share your experiences with OSR Trips and let the world know how we made your travel seamless, memorable, and stress-free.</h3>
      </section>
    </div>
  )
}

export default Home