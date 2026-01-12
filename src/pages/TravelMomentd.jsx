import React, { useContext } from 'react'
import { osrData } from '../contex/ContexApi'

const TravelMomentd = () => {
  const {second} =useContext(osrData)
  return (
    <div>
      <section id='section1' className=' w-fill bg-[#e8eae3]'>
        <div className='p-40 pb-20'>
         <h1 className='text-4xl font-light pl-6 pb-4'>Explore the gallery of memorable trips and experiences with OSR Trips</h1>
         <h3 className='font-light pl-6 pb-4'>Take a visual journey with OSR Trips. Browse photos from our tours, trips, and happy travelers to see how we make every journey memorable. Discover destinations, experiences, and moments captured on our curated trips.</h3>
         <div className='flex justify-center flex-wrap gap-3'>
        {second.map((elem, idx)=>{
          return  <div key={idx} className='h-90 w-90 bg-green-300 relative group'>
            <img className='h-full w-full object-cover' src={elem.img} alt="img" />
            <h1 className='absolute bottom-0 h-10 w-full flex items-center  bg-black/50 text-white pl-3 opacity-0 group-hover:opacity-100 transition-opacity' >{elem.name}</h1>
            </div>
        })}
        
         
        </div>
        </div>
      </section>
    </div>
  )
}

export default TravelMomentd