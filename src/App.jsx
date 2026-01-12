import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import  Home  from './pages/Home'
import OurServices  from './pages/OurServices'
import TravelMomentd from './pages/TravelMomentd'
import GetInTouch from './pages/GetInTouch'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/OurServices' element={<OurServices />}/>
        <Route path='/TravelMomentd' element={<TravelMomentd />}/>
        <Route path='/GetInTouch' element={<GetInTouch />}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App