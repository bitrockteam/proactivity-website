
import React, { useRef } from 'react'
import { Root } from 'react-static'
import NavBar from './components/Navbar'
import './app.scss'
import Footer from './components/Footer'
import { Router } from "@reach/router"
import Home from './pages/home'
import TalentAcademy from './pages/talent-academy'

function App() {

  return (
    <>
    <Root>
      <NavBar />
      <Router default="/">
        <Home path="/" />
        <TalentAcademy path="/talent-academy" />
      </Router>
      <Footer />
    </Root>
    </>
  )
}

export default App
