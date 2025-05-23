import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import AboutMadhyaPradesh from './Pages/AboutMadhyaPradesh'
import ViewHotels from './Pages/ViewHotels'
const App = () => {
  return (
 <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/about-mp' element={<AboutMadhyaPradesh/>}/>
        <Route path="/all-hotels" element={<ViewHotels/>}/>
      </Routes>
    </Router>
 </>
  )
}

export default App
