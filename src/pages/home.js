import React from 'react'
import More from '../components/More'
import Mindset from '../components/Mindset'
import HowWeWork from '../components/HowWeWork'
import Technologies from '../components/Technologies'
import JoinUs from '../components/JoinUs'
import SectionContainer from '../components/SectionContainer'
import Contacts from '../components/Contacts'
import Landing from '../components/Landing'
import AcademyBanner from '../components/Talent-Academy/AcademyBanner'


function Home() {
    return(
          <>
            <Landing/>
            <AcademyBanner />
            <div className="content">
              <SectionContainer name={"more"} sectionTitle={"Quality. Experience. Delivery."}>
                <More/>
              </SectionContainer>
              <div id="how-we-work" style={{ marginTop: '-80px', paddingTop: '80px' }}>
                <SectionContainer   name={"how-we-work"} sectionTitle={"How we work"}>
                  <HowWeWork/>
                </SectionContainer>
              </div>
              <div id="mindset" style={{ marginTop: '-80px', paddingTop: '80px' }}>
                <SectionContainer name={"mindset"}  sectionTitle={"Mindset"}>
                  <Mindset/>
                </SectionContainer>
              </div>
              <div id="technologies" style={{ marginTop: '-80px', paddingTop: '80px' }}>
                <SectionContainer name={"technologies"} sectionTitle={"Technologies"}>
                  <Technologies/>
                </SectionContainer>
              </div>
              <div id="join-us" style={{ marginTop: '-80px', paddingTop: '80px' }}>
                <SectionContainer name={"join-us"} sectionTitle={"Join Our Team"}>
                  <JoinUs/>
                </SectionContainer>
              </div>
              <div id="contacts" style={{ marginTop: '-80px', paddingTop: '80px' }}>
                <SectionContainer name={"contacts"} sectionTitle={"Contacts"}>
                  <Contacts/>
                </SectionContainer>
              
              </div>
              </div>
          </>
          
    )
}

export default Home