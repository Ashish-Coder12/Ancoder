import React from 'react'
import Navbar from '../src/component/Navbar'
import './App.css'
import About from './component/About'

import Contact from './component/Contact'

import Footer from './component/Footer'
import Masthead from './component/Masthead'
import Portfolio from './component/Portfolio'
function App(){
  return(
    <div>
        <Navbar/>
        <Masthead/>
        {/* <Portfolio/> */}
        <About/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default App;
