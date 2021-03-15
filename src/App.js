import React, { useRef } from 'react'
import { Root } from 'react-static'
import NavBar from './components/Navbar'
import Landing from './components/Landing'
import SectionContainer from './components/SectionContainer'
import './app.scss'
import Footer from './components/Footer'
import More from './components/More'
import Mindset from './components/Mindset'
import HowWeWork from './components/HowWeWork'
import Technologies from './components/Technologies'
import Contacts from './components/Contacts'
import CookieNotice from './components/CookieNotice'

function App() {

  return (
    <Root>
      <NavBar/>
      <div className="content">
        <Landing/>
        <SectionContainer name={"more"} sectionTitle={"Quality. Experience. Delivery."}>
          <More/>
        </SectionContainer>
        <SectionContainer name={"how-we-work"} sectionTitle={"How we work"}>
          <HowWeWork/>
         </SectionContainer>
        <SectionContainer name={"mindset"}  sectionTitle={"Mindset"}>
          <Mindset/>
        </SectionContainer>
        <SectionContainer name={"technologies"} sectionTitle={"Technologies"}>
          <Technologies/>
        </SectionContainer>
        <SectionContainer name={"contacts"} sectionTitle={"Contacts"}>
          <Contacts/>
        </SectionContainer>
      </div>
      <Footer/>
    </Root>
  )
}

export default App
