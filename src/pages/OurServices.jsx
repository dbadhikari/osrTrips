import React, { useContext } from 'react'
import { osrData } from '../contex/ContexApi'

const OurServices = () => {
const {first}=useContext(osrData)

  return (
    <div>
      <section id="section1" className='bg-[#e8eae3] w-full '>
       <div className='p-50 pb-10 '>
        <h1 className='text-5xl font-extralight mb-5'>Our Services</h1>
        <h3 className='text-2xl font-light mb-1'>Expertly Managed Services to Make Your Trip Effortless</h3>
        <p className='mb-10'>OSR Trips provides end-to-end travel solutions including flights, hotels, holiday packages, visa support, and transfers, ensuring every journey is seamless and stress-free.</p>
        {first.map((elem , idx )=>{
          return  <div key={idx} className='h-90 w-full flex mb-10'>
        <div className='h-90 w-120 '>
          <img className='h-full m-full  object-cover' src={elem.image} alt="img" />
        </div>
        <div className='h-90 w-148 flex flex-col justify-center pl-10 gap-5 '>
          <h1 className='text-4xl font-extralight'>{elem.title2}</h1>
          <p >{elem.desc} </p>
          <button className='p-3 px-5 self-start rounded-4xl bg-black text-white font-extralight active:scale-90'>{elem.go2}</button>
        </div>
       </div>
        })}
       
       </div>
      </section>
      <section id='section2' className='h-[40vh] w-full bg-[#fa2743] text-white px-50 flex justify-between pt-10'>
       <div className=''>
        <h1 className='text-5xl pb-5'>Have A Question ?</h1>
        <h2 className='text-xl'>Get Answers and Expert Guidance for Your Journey.</h2>
       </div>
       <div>
        <h3 className='pb-8'>Reach out to OSR Trips for quick, reliable answers and expert travel guidance. </h3>
        <div>
          <button className='p-3 px-5 bg-white text-black rounded-4xl active:scale-90'>Chat on WhatsApp</button>
          <button className='p-3 px-5 border rounded-4xl ml-5 active:scale-90'>Contact Us</button>
        </div>
       </div>
      </section>
    </div>
  )
}

export default OurServices