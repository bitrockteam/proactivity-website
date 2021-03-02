import React from 'react';
import './styles.scss'
import Fade from 'react-reveal/Fade'

function SectionContainer({children, name, sectionTitle}) {

    return(
        
        <section name={name} className="section-container"> 
            <Fade bottom distance="50px" >
                <div className="black-rectangle"></div>
            </Fade>
            <Fade bottom distance="50px" delay={200}>
                <h2>{sectionTitle}</h2>
            </Fade>
            <Fade bottom distance="50px" delay={500}>
            {children}
            </Fade>
        </section>
        
    )

}

export default SectionContainer