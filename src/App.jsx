import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Aboutinfo from './components/Aboutinfo'
import AirFreight from './components/AirFreight'
import SeaFreight from './components/SeaFreight'
import Customclearance from './components/Customclearance'
import ThirdPartyLogistics from './components/ThirdPartyLogistics'
import TransportationService from './components/Transportation Service'
import Warehouse from './components/Warehouse'
import Cargohandling from './components/Cargohandling'
import ContactForm from './components/ContactForm'
import Contactus from './components/Contactus'
import { Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutinfo />} />
        <Route path="/services/sea-freight" element={<SeaFreight />} />
        <Route path="/services/air-freight" element={<AirFreight />} />
        <Route path="/services/customs" element={<Customclearance />} />
        <Route path="/services/thirdparty" element={<ThirdPartyLogistics />} />
        <Route path="/services/transportation" element={<TransportationService />} />
       <Route path="/services/warehouse" element={<Warehouse/>} />
       <Route path='/services/cargo' element={<Cargohandling/>} />
       <Route path='/contact' element={<Contactus/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
